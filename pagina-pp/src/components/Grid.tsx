import styled from "styled-components";

const GridWrapper = styled.section`
  display: grid;
  grid-gap: 4vw;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: auto;
`;

const Grid = ({ children }: any) => {
  return <GridWrapper>{children}</GridWrapper>;
};

export default Grid;
