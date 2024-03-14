import styled from "styled-components";
import { fontsStyle } from "../../../utils/util-fonts";
import { colors } from "../../../utils/util-color";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 24px;

  width: 100%;
  padding: 12px 16px 24px;
  box-sizing: border-box;
`;

const Image = styled.img`
  width: calc(100% - 32px);
  height: auto;
`;

const Text = styled.span`
  ${fontsStyle.medium.medium16};
  color: ${colors.black};

  text-align: center;
`;

export const StMainEmptySection = Object.assign(
  {},
  {
    Section,
    Image,
    Text,
  }
);
