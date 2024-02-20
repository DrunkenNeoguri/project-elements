import styled from "styled-components";
import { fontsStyle } from "../../../common/utils/util-fonts";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  box-sizing: border-box;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 14px 0;
  box-sizing: border-box;
`;

const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const TextBox = styled.div`
  display: flex;
  gap: 4px;
`;

const Text = styled.span`
  ${fontsStyle.regular.regular10};
  color: #373737;
`;

const Link = styled.a`
  ${fontsStyle.regular.regular10};
  color: #1e90ff;
  text-decoration: underline;
`;

const LanguageBox = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 24px;
`;

const LanguageButton = styled.button`
  display: inline-flex;
  background-color: transparent;
  outline: none;

  ${fontsStyle.medium.medium10};
  color: #1e90ff;
  text-decoration: underline;

  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

export const StSignInForm = Object.assign(
  {},
  {
    Form,
    ButtonBox,
    BottomBox,
    TextBox,
    Text,
    Link,
    LanguageBox,
    LanguageButton,
  }
);