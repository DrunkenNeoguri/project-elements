import { FirebaseError } from "firebase/app";

export const convertUnknownTypeErrorToStringMessage = (error: unknown) => {
  if (error instanceof FirebaseError) {
    const errorCode: string = error.code;
    return (
      firebaseErrorText[`${errorCode}`] ?? customErrorText["uncaught-error"]
    );
  } else if (error instanceof Error) {
    return error.message;
  } else {
    throw new Error("Unknown Error :" + error);
  }
};

export const customErrorText: Record<string, string> = {
  "unverified-account": `본 계정은 아직 본인 인증이 완료되지 않았습니다.\n아래 버튼을 눌러 본인 인증을 진행해주세요.`,
  "uncreated-account": `계정 생성이 진행되지 않았습니다.\n잠시 후, 다시 시도해주세요.`,
  "unsaved-username": `계정 생성 문제로 인해 닉네임이 저장되지 않았습니다.\n로그인 후, 닉네임을 변경해주세요.`,
  "blanked-action-code": `유효하지 않은 접근입니다.\n비밀번호 찾기 페이지로 돌아가 절차를 다시 진행해주세요.`,
  "failed-user-verified": `본인 인증에 실패했습니다.\n로그인 페이지로 돌아가 로그인 후, 본인 인증을 다시 진행해주세요.`,
  "inexistent-account": `존재하지 않는 계정입니다.\n로그인 화면에서 회원가입을 눌러 절차를 진행해주세요.`,
  "uncaught-error": `알 수 없는 에러입니다.\n관리자에게 문의해주세요.`,
};

// *MEMO: Firebase 측에서는 보안 상의 이유로 이메일 열거 보호 기능을 적용하고 있다.
// *MEMO: 따라서 아래의 error code가 전부 드러나지 않을 수 있으며, 하나의 error code로 통합될 가능성이 있다.
// *MEMO: EX) sendEmailVerification, signInWithEmailAndPassword
// *MEMO: 참고 링크 - https://cloud.google.com/identity-platform/docs/admin/email-enumeration-protection?hl=ko

const firebaseErrorText: Record<string, string> = {
  "auth/invalid-email": `탈퇴한 유저입니다.\n서비스를 다시 이용하고 싶으시면 회원가입을 진행해주세요.`,
  "auth/user-not-found": `가입되지 않은 이메일입니다.\n회원가입을 진행해주세요.`,
  "auth/wrong-password": `비밀번호를 잘못 입력하셨습니다.\n정확한 비밀번호를 입력 후, 다시 로그인을 시도해주세요.`,
  "auth/user-disabled": `특정 사유로 인해 계정이 비활성화되었습니다.\n관리자에게 문의해주세요.`,
  "auth/invalid-persistence-type": `시스템의 문제로 인해 로그인 처리가 되지 않았습니다.\n관리자에게 문의해주세요.`,
  "auth/unsupported-persistence-type": `시스템의 문제로 인해 로그인 처리가 되지 않았습니다.\n관리자에게 문의해주세요.`,
  "auth/email-already-in-use": `이미 가입된 이메일입니다.\n\n이전 화면으로 돌아가 로그인을 시도해주시거나, 계정 정보가 기억나지 않다면 비밀번호 찾기를 이용해주세요.`,
  "auth/operation-not-allowed": `현재 비활성화 처리된 이메일 계정입니다.\n관리자에게 문의해주세요.`,
  "auth/weak-password": `비밀번호 보안 정도가 약합니다.\n조건에 맞는 비밀번호를 입력해주세요.`,
  "auth/expired-action-code": `인증 시간이 만료되었습니다.\n로그인하셔서 이메일 인증을 다시 시도해주세요.`,
  "auth/invalid-action-code": `인증 처리가 유효하지 않습니다.\n접속한 링크가 정확한지 재확인하시거나, 로그인 페이지로 돌아가 비밀번호 찾기를 다시 진행해주세요.`,
  "auth/too-many-requests": `계속된 요청으로 서버 부하 방지를 위해 잠시 동안 요청을 중단했습니다.\n잠시 후, 다시 시도해주세요.`,
  "auth/invalid-credential": `가입되지 않은 계정이거나 잘못 입력한 내용이 있습니다.\n\n정확하게 입력했는지 다시 한 번 확인해주세요.`,
};
