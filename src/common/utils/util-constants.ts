// * Regular Expression * //
export const emailRegExp = new RegExp(
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,4}$/i
);

export const passwordRegExp = new RegExp(
  /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{8,20}$/
);

export const usernameRegExp = new RegExp(/^[\w\d]{1,16}$/);

// * Error Message * //
export const commonBlankErrorMsg = "해당 칸은 빈칸으로 둘 수 없습니다.";
export const emailInvalidErrorMsg = "이메일 양식에 맞게 주소를 입력해주세요.";
export const passwordInvalidErrorMsg =
  "8~20자의 영문, 숫자, 특수문자를 모두 포함한 비밀번호를 입력해주세요.";
export const passwordIncorrectErrorMsg =
  "입력하신 비밀번호와 일치하지 않습니다.";
export const nicknameInvalidErrorMsg =
  "닉네임은 최대 8자(영문 16자)까지 입력할 수 있습니다.";
