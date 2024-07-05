import { FirebaseError } from "firebase/app";

export const convertUnknownTypeErrorToStringMessage = (error: unknown) => {
  if (error instanceof FirebaseError) {
    const errorCode = error.code;
    return convertFirebaseErrorMessageByFirebaseErrorCode(errorCode);
  } else if (error instanceof Error) {
    return error.message;
  } else {
    throw new Error("Unknown Error :" + error);
  }
};

export const convertFirebaseErrorMessageByFirebaseErrorCode = (
  errorCode: string
) => {
  switch (errorCode) {
    case "auth/invalid-email":
      return `탈퇴한 유저입니다.\n서비스를 다시 이용하고 싶으시면 회원가입을 진행해주세요.`;
    case "auth/user-not-found":
      return `가입되지 않은 이메일입니다.\n회원가입을 진행해주세요.`;
    case "auth/wrong-password":
      return `비밀번호를 잘못 입력하셨습니다.\n정확한 비밀번호를 입력 후, 다시 로그인을 시도해주세요.`;
    case "auth/user-disabled":
      return `특정 사유로 인해 계정이 비활성화되었습니다.\n관리자에게 문의해주세요.`;
    case "auth/invalid-persistence-type":
    case "auth/unsupported-persistence-type":
      return `시스템의 문제로 인해 로그인 처리가 되지 않았습니다.\n관리자에게 문의해주세요.`;
    case "auth/email-already-in-use":
      return `이미 가입된 이메일입니다.\n\n이전 화면으로 돌아가 로그인을 시도해주시거나, 계정 정보가 기억나지 않다면 비밀번호 찾기를 이용해주세요.`;
    case "auth/operation-not-allowed":
      return `현재 비활성화 처리된 이메일 계정입니다.\n관리자에게 문의해주세요.`;
    case "auth/weak-password":
      return `비밀번호 보안 정도가 약합니다.\n조건에 맞는 비밀번호를 입력해주세요.`;
    case "auth/expired-action-code":
      return `인증 시간이 만료되었습니다.\n로그인하셔서 이메일 인증을 다시 시도해주세요.`;
    case "auth/invalid-action-code":
      return `인증 처리가 유효하지 않습니다.\n접속한 링크가 정확한지 확인해주세요.`;
    case "auth/too-many-requests":
      return `계속된 요청으로 서버 부하 방지를 위해 잠시 동안 요청을 중단했습니다.\n잠시 후, 다시 시도해주세요.`;
    case "auth/invalid-credential":
      return `아이디나 비밀번호가 잘못 입력되었습니다.\n\n정확하게 입력했는지 다시 한 번 확인해주세요.`;
    default:
      return `알 수 없는 에러입니다.\n관리자에게 문의해주세요.`;
  }
};
