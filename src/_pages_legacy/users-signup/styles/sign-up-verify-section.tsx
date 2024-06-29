import styled from "styled-components";
import { fontsStyle } from "../../../utils/util-fonts";
import { colors } from "../../../utils/util-color";

const Section = styled.section`
  display: flex;
  flex-direction: column;

  padding: 0 16px;
  box-sizing: border-box;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin: 18px 0 22px 0;
  box-sizing: border-box;
`;

const Text = styled.div`
  ${fontsStyle.bold.bold12};
  color: ${colors.black};
`;

const Email = styled.div`
  ${fontsStyle.medium.medium16};
  color: ${colors.black};
`;

export const StSignUpVerifySection = Object.assign(
  {},
  { Section, TextBox, Text, Email }
);
