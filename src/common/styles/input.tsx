import styled from "styled-components";
import { fontsStyle } from "../utils/utilfonts";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 0;
`;

const TextInput = styled.input`
  background-color: #f7f7f7;
  width: 100%;

  ${fontsStyle.medium.medium14}
  color: #373737;

  border: 1px solid #373737;
  border-radius: 4px;
  padding: 13px 0 13px 16px;
  margin: 4px 0;
  box-sizing: border-box;
`;

const Label = styled.label`
  ${fontsStyle.semibold.semibold12};
  color: #373737;
  margin-bottom: 4px;
`;

const ErrorMessage = styled.span`
  ${fontsStyle.medium.medium10};
  color: #d80000;
`;

export const StInput = Object.assign(
  {},
  { Wrapper, TextInput, Label, ErrorMessage }
);
