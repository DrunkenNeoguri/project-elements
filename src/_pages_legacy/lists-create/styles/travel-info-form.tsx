import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  height: 100%;

  box-sizing: border-box;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin: auto 0 24px;

  width: 100%;
  box-sizing: border-box;
`;

export const StTravelInfoForm = Object.assign({}, { Form, ButtonBox });
