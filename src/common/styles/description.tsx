import styled from "styled-components";
import { fontsStyle } from "../utils/util-fonts";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  color: #373737;

  box-sizing: border-box;
  margin: 24px 0 8px 0;
`;

const Title = styled.h2`
  ${fontsStyle.bold.bold24};
  color: ${(props) => props.color ?? "#373737"};
  margin: 0;
`;

const Context = styled.span`
  ${fontsStyle.medium.medium12};
  color: ${(props) => props.color ?? "#373737"};
`;

export const StDescription = Object.assign({}, { Wrapper, Title, Context });
