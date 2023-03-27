import { ThemeProvider } from "styled-components";
const breakpoints = ["40em", "52em", "64em"];

const theme = {
  breakpoints: ["40em", "52em", "64em"],
  colors: {
    beige: "#F0DCCF",
    pink: "#FFAAAA",
    salmon: "#FFA395",
    green: "#E5F2C9",
    black: "#0D0D0D",
    white: "#FFFFFB",
  },
  fontFamily: { Rubik: "Rubik", Lato: "Lato" },
  fontSizes: {
    xSmall: 12,
    small: 14,
    default: 16,
    xSubtitle: 20,
    subtitle: 24,
    xTitle: 36,
    title: 48,
  },
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
