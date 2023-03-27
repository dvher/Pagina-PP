import styled from "styled-components";
import { variant, space } from "styled-system";

const Button = styled.button`
  ${space}
  border-radius: 3rem;
  font-family: ${(props) => props.theme.fontFamily.Rubik};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: ${(props) => props.theme.fontSizes.xSubtitle};
  cursor: pointer;
  border: ${(props) => (props.withBorder ? "1px solid black" : "none")};
  &:hover {
    background-color: ${(props) => props.theme.colors.pink};
  }

  ${variant({
    variants: {
      primary: {
        bg: "black",
        color: "white",
        border: "none",
      },
      secondary: {
        bg: "white",
        color: "black",
      },
      transparent: {
        bg: "transparent",
        color: "black",
      },
    },
  })}
`;

export default Button;
