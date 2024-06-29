import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  height: 100%;

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

export const StConfirmTravelInfoSection = Object.assign(
  {},
  {
    Section,
    ButtonBox,
  }
);
