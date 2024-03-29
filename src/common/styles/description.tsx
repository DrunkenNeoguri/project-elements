import styled from "styled-components";
import { fontsStyle } from "../utils/utilfonts";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #373737;
  box-sizing: border-box;
  margin: 24px 0 8px 0;
`;

const Title = styled.h2`
  ${fontsStyle.semibold.semibold24};
  margin: 0;
`;

const Context = styled.span`
  ${fontsStyle.medium.medium12};
`;

export const StDescription = Object.assign({}, { Wrapper, Title, Context });
