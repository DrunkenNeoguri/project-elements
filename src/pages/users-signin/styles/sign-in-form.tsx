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
  margin: 24px 0 14px;
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

const AutoSignInButton = styled.button`
  background-color: transparent;
  display: flex;
  gap: 4px;

  border: none;
  outline: none;
  padding: 0;
  margin: 0 auto 0 0;

  width: auto;

  cursor: pointer;
`;

const AutoSignInText = styled.span`
  ${fontsStyle.medium.medium10};
  color: ${colors.black};
  width: auto;
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
    AutoSignInButton,
    AutoSignInText,
    Text,
    Link,
    LanguageBox,
    LanguageButton,
  }
);
