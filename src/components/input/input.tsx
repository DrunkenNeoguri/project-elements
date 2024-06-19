// import {
//   hasErrorMessage,
//   hasLabelTextInProps,
//   isShowErrorMessage,
//   isShowValidationIcon,
// } from "../policies/input";
// import { StInput } from "../styles/input";
// import { InputPropType } from "../types/input";
// import CorrectIcon from "../../assets/icons/svg-input-correct-icon.svg?react";
// import IncorrectIcon from "../../assets/icons/svg-input-incorrect-icon.svg?react";

// export default function Input(props: InputPropType) {
//   const { id, title, errorMessage, colorTheme, isViewMark } = props;

//   return (
//     <StInput.Wrapper>
//       <StInput.TextInputBox>
//         <StInput.TextInput
//           id={id}
//           $colorTheme={colorTheme}
//           $checkErrorMessage={hasErrorMessage(errorMessage)}
//           {...props}
//         />
//       </StInput.TextInputBox>
//     </StInput.Wrapper>
//   );
// }
