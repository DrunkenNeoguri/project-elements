import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

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

export const StSelectTravelSection = Object.assign({}, { Section, ButtonBox });
