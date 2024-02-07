import styled from "styled-components";

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

export const StSignUpForm = Object.assign({}, { Form, ButtonBox });
