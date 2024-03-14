import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 12px 0 24px;
  box-sizing: border-box;
`;

const SearchArea = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 60px;
  box-sizing: border-box;
`;

export const StMainListSection = Object.assign(
  {},
  {
    Section,
    SearchArea,
  }
);
