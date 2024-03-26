import styled, { keyframes } from "styled-components";
import { colors } from "../../../utils/util-color";
import { StFadeContainerPropType } from "../types/index.type";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Section = styled.section`
  background-color: ${colors.primaryDeep};

  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;
  padding: 0 16px;
  box-sizing: border-box;
`;

const FadeContainer = styled.div<StFadeContainerPropType>`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  opacity: ${(props) => (props.$isStepMove ? 0 : 1)};
  animation: ${(props) => (props.$isStepMove ? fadeOut : fadeIn)} 1s;
`;

export const StListsCreatePage = Object.assign({}, { Section, FadeContainer });
