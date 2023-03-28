import styled, { css } from "styled-components";
import { space } from "styled-system";

//16->12
export const Text = styled.p`
  ${space}
  font-family: ${(props) => props.theme.fontFamily.Lato};
  font-weight: ${(props) => props.theme.fontWeight.normal};
  ${({ theme }) => css`
    font-size: ${theme.pSize[0]};
    ${theme.mediaQueries.medium} {
      font-size: ${theme.pSize[1]};
    }
    ${theme.mediaQueries.small} {
      font-size: ${theme.pSize[2]};
    }
  `}
`;
//48->24
export const H1 = styled.h1`
  ${space}
  font-family: ${(props) => props.theme.fontFamily.Rubik};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  ${({ theme }) => css`
    font-size: ${theme.h1Size[0]};
    ${theme.mediaQueries.medium} {
      font-size: ${theme.h2Size[1]};
    }
    ${theme.mediaQueries.small} {
      font-size: ${theme.h1Size[2]};
    }
  `}
`;
//36->20
export const H2 = styled.h2`
  ${space}
  font-family: ${(props) => props.theme.fontFamily.Rubik};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  ${({ theme }) => css`
    font-size: ${theme.h2Size[0]};
    ${theme.mediaQueries.medium} {
      font-size: ${theme.h2Size[1]};
    }
    ${theme.mediaQueries.small} {
      font-size: ${theme.h2Size[2]};
    }
  `}
`;
//24->16
export const H3 = styled.h3`
  ${space}
  font-family: ${(props) => props.theme.fontFamily.Rubik};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  ${({ theme }) => css`
    font-size: ${theme.h3Size[0]};
    ${theme.mediaQueries.medium} {
      font-size: ${theme.h3Size[1]};
    }
    ${theme.mediaQueries.small} {
      font-size: ${theme.h3Size[2]};
    }
  `}
`;
