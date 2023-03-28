import styled from "styled-components";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import herosvg from "../assets/img/hero.svg";
import Grid from "./Grid";
import { NavLink } from "react-router-dom";

const Background = styled.section`
  & {
    width: 100vw;
    height: auto;
    position: relative;
    margin-block: 6rem;
  }

  &:before {
    content: " ";
    background: url(${herosvg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top: -50%;
    bottom: -100%;
    left: 0px;
    right: 0px;
    z-index: -1;
  }
`;

const Container = styled.div`
  grid-column: 2/6;
  display: flex;
  flex-direction: column;
  justify-self: center;
  text-align: center;
  width: 50vw;
`;

const Body = styled.p`
  margin-bottom: 2.5vw;
`;

const Primary = styled.button`
  background: black;
  border-radius: 3rem;
  color: white;
  font-family: Rubik;
  font-weight: 600;
  font-size: 1.2rem;
  width: 20vw;
  height: 2.7rem;
  border: none;
  margin-right: 4vw;
  cursor: pointer;

  > a,
  a:hover {
    color: white;
    text-decoration: none;
  }

  &:hover {
    background-color: #ffaaaa;
  }
`;

const Secondary = styled.button`
  background: transparent;
  border-radius: 3rem;
  font-family: Rubik;
  font-weight: 600;
  font-size: 1.2rem;
  width: 20vw;
  height: 2.7rem;
  border: 0.125rem solid black;
  cursor: pointer;

  &:hover {
    background-color: #ffaaaa;
    border-color: #ffaaaa;
  }

  > a:hover {
    text-decoration: none;
  }
`;

const SocialMedia = styled.div`
  display: inline;
  margin: 3vw;
  > * {
    padding: 0.7vw;
  }
`;

function Hero() {
  return (
    <Background>
      <Grid>
        <Container>
          <h1>Pequeñas Patitas</h1>
          <Body>
            Descripcion de la fundacion text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
            a type specimen book.
          </Body>

          <div>
            <Primary>
              <NavLink to={"/Donaciones"}>Dona</NavLink>
            </Primary>
            <Secondary>
              <NavLink to={"/Adopciones"}>Adopciones</NavLink>
            </Secondary>
          </div>

          <SocialMedia>
            <InstagramIcon fontSize='large'></InstagramIcon>
            <FacebookIcon fontSize='large'></FacebookIcon>
            <TwitterIcon fontSize='large'></TwitterIcon>
            <YouTubeIcon fontSize='large'></YouTubeIcon>
          </SocialMedia>
        </Container>
      </Grid>
    </Background>
  );
}

export default Hero;
