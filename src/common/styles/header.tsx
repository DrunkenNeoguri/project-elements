import styled from "styled-components";
import { colors } from "../../utils/util-color";
import { fontsStyle } from "../../utils/util-fonts";

const Header = styled.header`
  background-color: ${colors.primaryDeep};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;

  border-radius: 0 0 12px 12px;
  padding: 16px;
  width: 100%;
  max-width: 379px;
  height: 60px;
  box-sizing: border-box;

  z-index: 2;

  /* filter: drop-shadow(0px 4px 4px ${colors.shadow}); */
`;

const Button = styled.button`
  background-color: transparent;
  color: ${colors.white};

  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  box-sizing: border-box;

  cursor: pointer;
`;

const Icon = styled.img`
  background-color: transparent;
  color: ${colors.white};

  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  padding: 16px;
  margin: 0;
  box-sizing: border-box;
`;

const Title = styled.h1`
  display: block;

  ${fontsStyle.bold.bold22};
  color: ${colors.white};

  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

export const StHeader = Object.assign(
  {},
  {
    Header,
    Button,
    Icon,
    Title,
  }
);
