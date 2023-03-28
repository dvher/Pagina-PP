import styled from "styled-components";
import { variant, space } from "styled-system";

const Section = styled.section`
  ${space}
  & {
    width: 100vw;
    position: relative;
    margin-block: 6rem;
    background: url(${(props) => props.url}) no-repeat center;
    background-size: ${(props) => props.size || "cover"};
  }

  ${variant({
    variants: {
      noPadding: {
        "&:before": {
          content: '" "',
          position: "absolute",
          top: (props: { top: string }) => props.top,
          bottom: (props: { bottom: string }) => props.bottom,
          left: 0,
          right: 0,
          zIndex: -1,
        },
      },
      withPadding: {
        paddingBlock: (props: { padding: string }) => props.padding,
      },
    },
  })}
`;

export default Section;
