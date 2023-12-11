import styled from "styled-components";
import { fontsStyle } from "../../../common/utils/utilfonts";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

export const ContentImage = styled.img<{ width: number }>`
  width: ${({ width }: { width: number }) => width ?? 0}px;
  margin: 8px 0;
  box-sizing: border-box;
`;

export const ContentBox = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  max-width: 100%;
  padding: 0 32px;
  box-sizing: border-box;
`;

export const ContentSubject = styled.h3`
  ${fontsStyle.semibold.semibold24};
  color: #373737;
  margin: 16px 0;
`;

export const ContentText = styled.span`
  ${fontsStyle.regular.regular16};
  color: #373737;
  margin: 16px 0;
`;

export const ButtonList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
