import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;

  padding: 0 16px;
  box-sizing: border-box;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 100%;
  margin: auto 0 24px;
  box-sizing: border-box;
`;

export const StSendChangePasswordEmailSection = Object.assign(
  {},
  { Section, ButtonBox }
);
