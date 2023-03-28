import styled from "styled-components";
import { variant, space } from "styled-system";
import Facebook from "../assets/img/facebook.svg";
import Instagram from "../assets/img/instagram.svg";
import Twitter from "../assets/img/twitter.svg";
import Tiktok from "../assets/img/tiktok.svg";

export const SocialMedia = styled.div`
  ${space}
  display:flex;
  flex-direction: row;
  & > a > img {
    cursor: pointer;
    ${variant({
      variants: {
        small: {
          width: "28px",
          marginInline: "0.3rem",
        },
        medium: {
          width: "32px",
          marginInline: "0.4rem",
        },
        large: {
          width: "64px",
          marginInline: "0.7rem",
        },
      },
    })}
  }
`;

export function MediaLinks() {
  return (
    <>
      <a href="https://www.facebook.com/pequenaspatitas.cl/?locale=es_LA">
        <img src={Facebook}></img>
      </a>
      <a href="https://www.instagram.com/pequenaspatitaschile/?hl=es">
        <img src={Instagram}></img>
      </a>
      <a href="https://twitter.com/rescatepatitas_">
        <img src={Twitter}></img>
      </a>
      <a href="https://www.tiktok.com/@pequenaspatitaschile">
        <img src={Tiktok}></img>
      </a>
    </>
  );
}
