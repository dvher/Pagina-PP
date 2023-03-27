import styled from "styled-components";
import { variant, space } from "styled-system";

interface img {
  url: string;
  size: string;
}

const Image = styled.div<img>`
  ${space}
  background: url(${(props) => props.url}) no-repeat center;
  background-size: ${(props) => props.size || "cover"};
  width: 100%;
  padding-bottom: 100%;
  position: relative;
  overflow: hidden;

  ${variant({
    variants: {
      default: {
        borderRadius: "10%",
      },
      round: {
        borderRadius: "50%",
      },
    },
  })}
`;

export default Image;
