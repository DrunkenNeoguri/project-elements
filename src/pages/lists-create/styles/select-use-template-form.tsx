import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  height: 100%;

  box-sizing: border-box;
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  box-sizing: border-box;
`;

const Image = styled.img`
  border-radius: 16px;

  max-width: 300px;
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

export const StSelectUseTemplateSection = Object.assign(
  {},
  { Section, ImageBox, Image, ButtonBox }
);
