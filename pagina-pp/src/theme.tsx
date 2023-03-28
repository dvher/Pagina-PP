import { ThemeProvider } from "styled-components";
const breakpoints = ["480px", "768px", "1024px"];

const theme = {
  colors: {
    beige: "#F0DCCF",
    pink: "#FFAAAA",
    salmon: "#FFA395",
    green: "#E5F2C9",
    black: "#0D0D0D",
    white: "#FFFFFB",
  },
  fontFamily: { Rubik: "Rubik", Lato: "Lato" },
  h1Size: ["28px", "36px", "48px"],
  h2Size: ["24px", "28px", "36px"],
  h3Size: ["20px", "20px", "24px"],
  pSize: ["12px", "14px", "16px"],
  buttonFontSize: "20px",
  fontWeight: {
    normal: 300,
    bold: 600,
  },
  space: [0, 4, 8, 16, 32, 64],
  mediaQueries: {
    small: `@media screen and (min-width: ${breakpoints[0]})`,
    medium: `@media screen and (min-width: ${breakpoints[1]})`,
    large: `@media screen and (min-width: ${breakpoints[2]})`,
  },
  radii: "2rem",
};

export default function Theme({ children }: any) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
