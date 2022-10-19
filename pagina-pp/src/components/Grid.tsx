import styled from 'styled-components';

const GridWrapper = styled.section`
  display: grid;
  grid-gap: 4vw;
  grid-template-columns:repeat(6,1fr);
  grid-auto-rows:auto;
  grid-template-areas:
        ". n n n n ."
        ". h h h h ."
        ". N N N N ."
        ". c c c c ."
        ". f f f f .";
        
`;

const Grid = ({ children }) => {
  return (
    <GridWrapper>
      {children}
    </GridWrapper>
  )
}

export default Grid;