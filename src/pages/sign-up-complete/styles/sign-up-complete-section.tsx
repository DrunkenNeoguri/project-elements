import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  box-sizing: border-box;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px 37px 24px 37px;

  box-sizing: border-box;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;

  box-sizing: border-box;
`;

export const StSignUpCompleteSection = Object.assign(
  {},
  { Section, ImageBox, Image }
);
