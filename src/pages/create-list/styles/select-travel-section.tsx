import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: flex-start;
  box-sizing: border-box;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
  box-sizing: border-box;
  margin: auto 0 24px;
`;

export const StSelectTravelSection = Object.assign({}, { Wrapper, ButtonBox });
