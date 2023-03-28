import styled from "styled-components";
import { variant } from "styled-system";

type gridProps = {
  gap: string;
};

const InnerGrid = styled.div<gridProps>`
  display: grid;
  grid-auto-rows: auto;
  grid-gap: ${(props) => props.gap || "4vw"};

  ${variant({
    variants: {
      fiveCol: {
        gridTemplateColumns: "repeat(5, 1fr)",
      },
      fourCol: {
        gridTemplateColumns: "repeat(4, 1fr)",
      },
      threeCol: {
        gridTemplateColumns: "repeat(3, 1fr)",
      },
      twoCol: {
        gridTemplateColumns: "repeat(2, 1fr)",
      },
      asimFourCol: {
        variant:"fourCol",
        gridTemplateColumns: "2fr 1fr 1fr 3fr",
      },
    },
  })}
`;

export default InnerGrid;
