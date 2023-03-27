import styled from "styled-components";
import { space } from "styled-system";

export interface cardProps {
  justifyContent?: string;
}

const Card = styled.div<cardProps>`
  ${space}
  display:flex;
  flex-direction: column;
  text-align: center;
  justify-content: ${(props) => props.justifyContent};
  width: 100%;
  height: auto;
`;

export default Card;
