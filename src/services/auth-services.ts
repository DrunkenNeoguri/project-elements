import { supabase, supabaseAuth, supabaseDatabase } from '../utils/util-supabase';
import { normalizeError } from '../utils/util-convert';
import { AccountFormType, SupabaseUserType, UserInfoType } from '../types/user.types';
import TravelService from './travel-services';
import { getLocalStorageItem } from '../utils/util-local-storage';
import { User, PostgrestSingleResponse, OAuthResponse } from '@supabase/supabase-js';

// *MEMO: 문제 없이 200일 시, 예외를 제외하고 return "OK";
class AuthService {
  static async postLoginProcess(formData: Pick<AccountFormType, 'email' | 'password'>) {
    try {
      const { data, error } = await supabaseAuth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        // supabase는 이메일 인증이 안되면 로그인이 애초에 불가능함.
        if (error.code === 'email_not_confirmed') {
          await supabaseAuth.resend({
            type: 'signup',
            email: formData.email,
          });

          throw Error(
            `아직 본인 인증이 완료되지 않아 확인을 위해 가입하신 이메일 주소로 본인 인증 메일을 보내드렸습니다.\n\n메일함에서 내용을 확인하셔서 본인 인증을 완료해주시기 바랍니다.`,
          );
        }
        throw error;
      }

      if (data?.user) {
        // 사용자 데이터 가져오기
        const usersTable = await supabaseDatabase('users');
        const { data: userData, error: userError }: PostgrestSingleResponse<UserInfoType> =
          await usersTable.select('*').eq('id', data.user.id).single();

        if (userError && userError.code !== 'PGRST116') {
          // PGRST116은 no rows found
          throw userError;
        }

        // 다가오는 여행 정보 갱신
        const upcomingTravel = await TravelService.renewalUpcomingTravelInUserData(data.user.id);

        if (upcomingTravel != null) {
          const renewalUserData = {
            ...userData,
            upcoming_travel: {
              title: upcomingTravel.title,
              id: upcomingTravel.id,
              departure_at: upcomingTravel.departure_at,
            },
          };

          // 사용자 데이터 업데이트
          const usersTable = await supabaseDatabase('users');
          const { error: updateError } = await usersTable.upsert(renewalUserData);

          if (updateError) {
            throw updateError;
          }

          localStorage.setItem('userInfo', JSON.stringify(renewalUserData));
        } else {
          localStorage.setItem('userInfo', JSON.stringify(userData));
        }
      }

      return 'OK';
    } catch (error) {
      throw normalizeError(error, 'AuthService.postLoginProcess');
    }
  }

  static async postGoogleLoginProcess() {
    try {
      const { error }: OAuthResponse = await supabaseAuth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/user/login/success`,
        },
      });

      if (error) {
        throw error;
      }

      return 'OK';
    } catch (error) {
      throw normalizeError(error, 'AuthService.postGoogleLoginProcess');
    }
  }

  // Google 로그인 콜백 처리 함수 (새로 추가)
  static async handleGoogleLoginCallback() {
    try {
      const { data, error } = await supabaseAuth.getSession();

      if (error) {
        throw error;
      }

      if (data?.session?.user) {
        const user: User = data.session.user;

        // 사용자 정보 확인
        const usersTable = await supabaseDatabase('users');
        const { data: existingUser, error: userError }: PostgrestSingleResponse<UserInfoType> =
          await usersTable.select('*').eq('id', user.id).single();

        if (userError && userError.code !== 'PGRST116') {
          throw userError;
        }

        if (!existingUser) {
          // 새 사용자 데이터 생성
          const currentUserData = {
            id: user.id,
            email: user.email,
            username: user.user_metadata?.username as string,
            created_at: new Date().toISOString(),
          };

          const usersTable = await supabaseDatabase('users');
          const { error: insertError } = await usersTable.insert(currentUserData);

          if (insertError) {
            throw insertError;
          }

          localStorage.setItem('userInfo', JSON.stringify(currentUserData));
        } else {
          localStorage.setItem('userInfo', JSON.stringify(existingUser));
        }
      }

      return 'OK';
    } catch (error) {
      return normalizeError(error, 'AuthService.handleGoogleLoginCallback');
    }
  }

  static async postSignUpProcess(formData: AccountFormType) {
    try {
      const { data, error } = await supabaseAuth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: 'http://localhost:3000/user/verified',
          data: {
            username: formData.username,
          },
        },
      });

      if (error) {
        throw error;
      }

      if (!data?.user) {
        throw new Error('계정 생성이 진행되지 않았습니다.\n잠시 후, 다시 시도해주세요.');
      }

      // 사용자 정보를 별도 테이블에 저장
      const userData = {
        id: data.user.id,
        email: data.user.email,
        username: formData.username,
        created_at: Date.now(),
      };

      const usersTable = await supabaseDatabase('users');
      const { error: insertError } = await usersTable.insert(userData);

      if (insertError) {
        throw insertError;
      }

      return 'OK';
    } catch (error) {
      throw normalizeError(error, 'AuthService.postSignUpProcess');
    }
  }

  static async postForgetPasswordProcess(formData: Pick<AccountFormType, 'email'>) {
    try {
      const { error } = await supabaseAuth.resetPasswordForEmail(formData.email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) {
        throw error;
      }

      return 'OK';
    } catch (error) {
      normalizeError(error, 'AuthService.postForgetPasswordProcess');
      return error;
    }
  }

  static async postResetPasswordProcess(
    accessToken: string,
    refreshToken: string,
    formData: Pick<AccountFormType, 'password' | 'confirmPassword'>,
  ) {
    try {
      // 토큰으로 세션 설정
      const { error: sessionError } = await supabaseAuth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      });

      if (sessionError) {
        throw sessionError;
      }

      // 비밀번호 업데이트
      const { error } = await supabaseAuth.updateUser({
        password: formData.password,
      });

      if (error) {
        throw error;
      }

      return 'OK';
    } catch (error) {
      return normalizeError(error, 'AuthService.postResetPasswordProcess');
    }
  }

  static async updatePasswordProcess(newPassword: string) {
    try {
      const { error } = await supabaseAuth.updateUser({
        password: newPassword,
      });

      if (error) {
        throw error;
      }

      return 'OK';
    } catch (error) {
      return normalizeError(error, 'AuthService.updatePasswordProcess');
    }
  }

  static async updateProfileProcess(username: string) {
    try {
      const {
        data: { user },
      } = await supabaseAuth.getUser();

      if (!user) {
        throw new Error('프로필을 수정할 수 없습니다.');
      }

      const userData = getLocalStorageItem<UserInfoType>('userInfo');

      // Auth 메타데이터 업데이트
      const { error: authError } = await supabaseAuth.updateUser({
        data: { username },
      });

      if (authError) {
        throw authError;
      }

      // 사용자 테이블 업데이트
      const newUserProfile = {
        ...userData,
        username,
      };

      const usersTable = await supabaseDatabase('users');
      const { error: updateError } = await usersTable.update({ username }).eq('id', user.id);

      if (updateError) {
        throw updateError;
      }

      localStorage.setItem('userInfo', JSON.stringify(newUserProfile));

      return 'OK';
    } catch (error) {
      return normalizeError(error, 'AuthService.updateProfileProcess');
    }
  }

  static async updateAccountVerification(accessToken: string, refreshToken: string) {
    try {
      if (!accessToken || !refreshToken) {
        return new Error(
          '본인 인증에 실패했습니다.\n로그인 페이지로 돌아가 로그인 후,\n본인 인증을 다시 진행해주세요.',
        );
      }

      // 토큰으로 세션 설정
      const { data, error } = await supabaseAuth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      });

      if (error) {
        throw error;
      }

      const user = data?.user as SupabaseUserType;

      if (!user) {
        return new Error(
          '존재하지 않는 계정입니다.\n로그인 화면에서 회원가입을 눌러 절차를 진행해주세요.',
        );
      }

      // 사용자 정보를 users 테이블에 저장
      const userData = {
        id: user.id,
        email: user.email,
        username: user.user_metadata?.username as string,
        created_at: new Date().toISOString(),
      };

      const usersTable = await supabaseDatabase('users');
      const { error: insertError } = await usersTable.upsert(userData);

      if (insertError) {
        throw insertError;
      }

      return 'OK';
    } catch (error) {
      return normalizeError(error, 'AuthService.updateAccountVerification');
    }
  }

  static async postLogOutProcess() {
    try {
      const { error } = await supabaseAuth.signOut();

      if (error) {
        throw error;
      }

      localStorage.removeItem('userInfo');
      return 'OK';
    } catch (error) {
      return normalizeError(error, 'AuthService.postLogOutProcess');
    }
  }

  static async postUserCheckProcessByLoginUser(formData: Pick<AccountFormType, 'password'>) {
    try {
      const {
        data: { user },
      } = await supabaseAuth.getUser();

      if (!user?.email) {
        throw new Error('로그인된 사용자의 이메일 정보를 찾을 수 없습니다.');
      }

      // 현재 비밀번호 확인을 위해 재로그인 시도
      const { error } = await supabaseAuth.signInWithPassword({
        email: user.email,
        password: formData.password,
      });

      if (error) {
        throw error;
      }

      return 'OK';
    } catch (error) {
      return normalizeError(
        error ?? new Error('입력하신 계정의 비밀번호와 다릅니다. 다시 한 번 확인해주세요.'),
        'AuthService.postUserCheckProcessByLoginUser',
      );
    }
  }

  static async postSignOutProcess(opinion?: string) {
    try {
      const {
        data: { user },
      } = await supabaseAuth.getUser();

      if (!user) {
        throw new Error('현재 로그인된 사용자가 없습니다.\n로그인 후, 다시 시도해주세요.');
      }

      const currentUserUid = user.id;

      // 트랜잭션 시작 (Supabase는 RPC 함수로 트랜잭션 처리)
      const { error: deleteError } = await supabase.rpc('delete_user_data', {
        user_id: currentUserUid,
      });

      if (deleteError) {
        throw deleteError;
      }

      // 의견 저장 (선택사항)
      if (opinion) {
        const opinionsTable = await supabaseDatabase('opinions');
        const { error: opinionError } = await opinionsTable.insert({
          id: currentUserUid,
          opinion,
          created_at: new Date().toISOString(),
        });

        if (opinionError) {
          console.error('Opinion save error:', opinionError);
          // 의견 저장 실패는 전체 프로세스를 중단시키지 않음
        }
      }

      localStorage.removeItem('userInfo');

      return 'OK';
    } catch (error) {
      return normalizeError(error, 'AuthService.postSignOutProcess');
    }
  }

  // 세션 상태 확인 함수 (새로 추가)
  static async getCurrentUser(): Promise<User | null> {
    try {
      const {
        data: { user },
      } = await supabaseAuth.getUser();
      return user;
    } catch (error) {
      console.error('Get current user error:', error);
      return null;
    }
  }

  // 인증 상태 변경 리스너 (새로 추가)
  static onAuthStateChanged(callback: (user: User | null) => void) {
    return supabaseAuth.onAuthStateChange((_event, session) => {
      callback(session?.user || null);
    });
  }
}

export default AuthService;
