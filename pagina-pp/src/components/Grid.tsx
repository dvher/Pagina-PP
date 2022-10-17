import React from 'react';
import styled from 'styled-components';

const GridWrapper = styled.section`
  display: grid;
  grid-gap:4rem;
  grid-template-columns: [margin-start] 5vw [content-start] 1fr [content-end] 5vw [margin-end];
`

const Grid = ({children}) => {
  return (
    <GridWrapper>
      {children}
    </GridWrapper>
  ) 
}

export default Grid;