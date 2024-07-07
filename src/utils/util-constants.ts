// * Regular Expression * //
export const emailRegExp = new RegExp(
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,4}$/i
);

export const passwordRegExp = new RegExp(
  /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{8,20}$/
);

export const usernameRegExp = new RegExp(/^[a-zA-Z0-9]{2,14}$/);

// * Error Message * //
export const commonBlankErrorMsg = "해당 칸은 빈칸으로 둘 수 없습니다.";
export const emailInvalidErrorMsg = "이메일 양식에 맞게 주소를 입력해주세요.";
export const passwordInvalidErrorMsg =
  "8~20자의 영문, 숫자, 특수문자를 모두 포함한 비밀번호를 입력해주세요.";
export const passwordIncorrectErrorMsg =
  "입력하신 비밀번호와 일치하지 않습니다.";
export const usernameInvalidErrorMsg =
  "닉네임은 영문, 숫자를 이용해 2~14자까지 입력할 수 있습니다.";

export const unknownErrorMessage =
  "The error is unknown. Please let me know under what circumstances it occurred and provide detailed information to this email(developneoguri@gmail.com).";
