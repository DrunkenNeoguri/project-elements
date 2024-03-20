import styled, { keyframes } from "styled-components";
import { StModalPrimaryButtonType, StModalTitleType } from "../types/modal";
import { colors } from "../../utils/util-color";
import { fontsStyle } from "../../utils/util-fonts";
import { convertTitleColorByModalIconType } from "../utils/modal";

const fadeIn = keyframes`
  from {
    opacity: 0%;
  }
  to {
    opacity: 100%;
  }
`;

// 애니메이션 넣기

const Wrapper = styled.section`
  background-color: ${colors.shadowModal};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  width: 100%;
  height: 100%;

  animation: ${fadeIn} 0.2s;

  z-index: 5;
`;

const Container = styled.div`
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  border: none;
  border-radius: 8px;
  padding: 32px 28px 12px;

  width: calc(100% - 98px);
  height: auto;

  filter: drop-shadow(4px 4px 8px ${colors.shadowLight});
`;

const Title = styled.h2<StModalTitleType>`
  ${fontsStyle.bold.bold18};
  color: ${(props) => convertTitleColorByModalIconType(props.$modalType)};

  padding: 0;
  margin: 0 0 4px 0;
`;

const Context = styled.span`
  ${fontsStyle.medium.medium12};
  color: ${colors.black};

  padding: 0;
  margin: 0;
`;

const IconBox = styled.div`
  width: 62px;
  height: 62px;
  margin: 28px 0 22px;
`;

const PrimaryButton = styled.button<StModalPrimaryButtonType>`
  background-color: ${colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;

  ${fontsStyle.bold.bold12};
  color: ${colors.white};

  border: none;
  border-radius: 4px;
  outline: none;
  padding: 0;
  margin: ${(props) => (props.$isOneButton ? "6px 0" : "6px 0 20px 0")};

  width: 100%;
  height: 36px;

  cursor: pointer;
`;

const SecondaryButton = styled.button`
  background-color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;

  ${fontsStyle.bold.bold12};
  color: ${colors.primary};

  border: none;
  border-radius: 4px;
  outline: none;
  padding: "6px 0";
  margin: 0;

  width: 100%;
  height: 36px;

  cursor: pointer;
`;

export const StModal = Object.assign(
  {},
  {
    Wrapper,
    Container,
    Title,
    Context,
    IconBox,
    PrimaryButton,
    SecondaryButton,
  }
);
