import styled from "styled-components";
import { fontsStyle } from "../../../utils/util-fonts";
import { colors } from "../../../utils/util-color";

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
  ${fontsStyle.light.light10};
  color: ${colors.black};
`;

const Link = styled.a`
  ${fontsStyle.light.light10};
  color: ${colors.primary};
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
  color: ${colors.primary};
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
