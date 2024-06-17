import styled from "styled-components";

export const DimdBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #37373780;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const TransparentBackground = styled.div`
  width: 100%;
  height: calc(100vh - 224px);
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
