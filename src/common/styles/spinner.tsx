import styled, { keyframes } from "styled-components";
import { colors } from "../../utils/util-color";

const changeScale = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
`;

export const BarSpinner = styled.div`
  background: #ffffff;
  -webkit-animation: ${changeScale} 1s infinite ease-in-out;
  animation: ${changeScale} 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
  color: #ffffff;
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  font-size: 11px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
  z-index: 10;

  &::before,
  &::after {
    background: #ffffff;
    -webkit-animation: ${changeScale} 1s infinite ease-in-out;
    animation: ${changeScale} 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
    position: absolute;
    top: 0;
    content: "";
  }

  &::before {
    left: -1.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  &::after {
    left: 1.5em;
  }
`;

const spin = keyframes`
  0%,
  100% {
    box-shadow: 0em -2.6em 0em 0em ${colors.primaryLight}, 1.8em -1.8em 0 0em #D4E4FF, 2.5em 0em 0 0em #D4E4FF, 1.75em 1.75em 0 0em #D4E4FF, 0em 2.5em 0 0em #D4E4FF, -1.8em 1.8em 0 0em #D4E4FF, -2.6em 0em 0 0em #C6DBFF, -1.8em -1.8em 0 0em #b6d3ff;
  }
  12.5% {
    box-shadow: 0em -2.6em 0em 0em #B6D3FF, 1.8em -1.8em 0 0em ${colors.primaryLight}, 2.5em 0em 0 0em #D4E4FF, 1.75em 1.75em 0 0em #D4E4FF, 0em 2.5em 0 0em #D4E4FF, -1.8em 1.8em 0 0em #D4E4FF, -2.6em 0em 0 0em #D4E4FF, -1.8em -1.8em 0 0em #C6DBFF;
  }
  25% {
    box-shadow: 0em -2.6em 0em 0em #C6DBFF, 1.8em -1.8em 0 0em #B6D3FF, 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em #D4E4FF, 0em 2.5em 0 0em #D4E4FF, -1.8em 1.8em 0 0em #D4E4FF, -2.6em 0em 0 0em #D4E4FF, -1.8em -1.8em 0 0em #D4E4FF;
  }
  37.5% {
    box-shadow: 0em -2.6em 0em 0em #D4E4FF, 1.8em -1.8em 0 0em #C6DBFF, 2.5em 0em 0 0em #B6D3FF, 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em #D4E4FF, -1.8em 1.8em 0 0em #D4E4FF, -2.6em 0em 0 0em #D4E4FF, -1.8em -1.8em 0 0em #D4E4FF;
  }
  50% {
    box-shadow: 0em -2.6em 0em 0em #D4E4FF, 1.8em -1.8em 0 0em #D4E4FF, 2.5em 0em 0 0em #C6DBFF, 1.75em 1.75em 0 0em #B6D3FF, 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em #D4E4FF, -2.6em 0em 0 0em #D4E4FF, -1.8em -1.8em 0 0em #D4E4FF;
  }
  62.5% {
    box-shadow: 0em -2.6em 0em 0em #D4E4FF, 1.8em -1.8em 0 0em #D4E4FF, 2.5em 0em 0 0em #D4E4FF, 1.75em 1.75em 0 0em #C6DBFF, 0em 2.5em 0 0em #B6D3FF, -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em #D4E4FF, -1.8em -1.8em 0 0em #D4E4FF;
  }
  75% {
    box-shadow: 0em -2.6em 0em 0em #D4E4FF, 1.8em -1.8em 0 0em #D4E4FF, 2.5em 0em 0 0em #D4E4FF, 1.75em 1.75em 0 0em #D4E4FF, 0em 2.5em 0 0em #C6DBFF, -1.8em 1.8em 0 0em #B6D3FF, -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em #D4E4FF;
  }
  87.5% {
    box-shadow: 0em -2.6em 0em 0em #D4E4FF, 1.8em -1.8em 0 0em #D4E4FF, 2.5em 0em 0 0em #D4E4FF, 1.75em 1.75em 0 0em #D4E4FF, 0em 2.5em 0 0em #D4E4FF, -1.8em 1.8em 0 0em #C6DBFF, -2.6em 0em 0 0em #B6D3FF, -1.8em -1.8em 0 0em #ffffff;
  }
`;

export const DotSpinner = styled.div`
  margin: 100px auto;
  font-size: 25px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  position: relative;
  text-indent: -9999px;
  -webkit-animation: ${spin} 1.1s infinite ease;
  animation: ${spin} 1.1s infinite ease;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
`;
