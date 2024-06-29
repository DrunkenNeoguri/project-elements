import styled from "styled-components";
import { fontsStyle } from "../../../utils/util-fonts";
import { colors } from "../../../utils/util-color";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  padding: 0 16px 24px;
  margin-top: 132px;
  width: 100%;

  box-sizing: border-box;
`;

const Image = styled.img`
  background-color: transparent;

  width: calc(100% - 60px);
  height: auto;
`;

const Title = styled.h2`
  ${fontsStyle.bold.bold24};
  color: ${colors.black};

  padding: 0;
  margin: 0;
`;

const Description = styled.span`
  ${fontsStyle.medium.medium16};
  color: ${colors.black};
  text-align: center;
`;

export const StNotFoundSection = Object.assign(
  {},
  {
    Section,
    Image,
    Title,
    Description,
  }
);
