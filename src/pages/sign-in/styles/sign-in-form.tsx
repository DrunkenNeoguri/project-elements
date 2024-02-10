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

const SignUpBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #373737;
  font-size: 10px;
  line-height: 14px;
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

export const StSignInForm = Object.assign(
  {},
  { Form, ButtonBox, SignUpBox, Text, Link }
);
