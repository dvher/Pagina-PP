import styled from "styled-components";
import Grid from "../components/Grid";
import { NavLink } from "react-router-dom";
import Logo from "../assets/img/pnglogo.png";
import ArrowRight from "../assets/img/arrow-right.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocationIcon from "../assets/img/locationicon.svg";

const pages = ["Inicio", "Donaciones", "Adopciones", "Blog", "Contacto"];

const Container = styled.section`
  grid-column: 2/6;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 2fr;
  grid-auto-rows: auto;
  grid-gap: 1.5rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  > a,
  span {
    margin-block: 0.5rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Newsletter = styled.div`
  padding-inline: 2rem;

  > h3 {
    margin: 0;
  }
`;

const Input = styled.form`
  width: 100%;
  height: 2rem;
  border-radius: 2rem;
  border: 1px solid black;
  padding-inline: 1rem;
  display: flex;
  flex-direction: row;
  margin-block: 1rem;

  > input {
    flex-grow: 1;
    border: none;
    border-radius: 2rem;
  }

  > button {
    box-sizing: content-box;
    background: url(${ArrowRight}) no-repeat center;
    background-size: cover;
    padding: 1rem;
    border: none;
    cursor: pointer;
  }

  input:focus {
    outline: none;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  > * {
    padding: 0.7vw;
    cursor: pointer;
  }
`;

const BottomPage = styled.div`
  grid-column: 2/6;
  display: flex;
  flex-direction: row;
  background-color: #ededed;
  justify-content: space-around;
  padding-block: 0.5rem;
`;

function Footer() {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <>
      <Grid>
        <Container>
          <Card>
            <img src={Logo} width="128px"></img>
            <h4>Pequenas patitas Chile</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Incidunt, dolor!
            </p>
          </Card>

          <Card>
            <h4>Enlaces</h4>
            {pages.map((page) => (
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to={`/${page}`}
              >
                {page}
              </NavLink>
            ))}
          </Card>

          <Card>
            <h4>Contacto</h4>
            <Wrapper>
              <img src={LocationIcon} width="24px"></img>
              <span>Santiago,Chile</span>
            </Wrapper>
            <Wrapper>
              <img src={LocationIcon} width="24px"></img>
              <span>Concepcion,Chile</span>
            </Wrapper>
            <Wrapper>
              <img src={LocationIcon} width="24px"></img>
              <span>I Region,Chile</span>
            </Wrapper>
            <span>+56 9 12345678</span>
          </Card>

          <Newsletter>
            <h3>Suscribete a Nuestra Newsletter</h3>

            <form>
              <Input>
                <input type="text" placeholder="E-mail" />
                <button type="submit" value="Submit"></button>
              </Input>
            </form>

            <SocialMedia>
              <a href="https://www.instagram.com/pequenaspatitaschile/?hl=es">
                <InstagramIcon fontSize="medium"></InstagramIcon>
              </a>
              <a href="https://www.facebook.com/pequenaspatitas.cl/?locale=es_LA">
                <FacebookIcon fontSize="medium"></FacebookIcon>
              </a>
              <a href="https://twitter.com/rescatepatitas_">
                <TwitterIcon fontSize="medium"></TwitterIcon>
              </a>
              <a href="https://www.tiktok.com/@pequenaspatitaschile">
                <YouTubeIcon fontSize="medium"></YouTubeIcon>
              </a>
            </SocialMedia>
          </Newsletter>
        </Container>
      </Grid>

      <BottomPage>
        <span>CopyRight©2023</span>
        <a>Privacy Policy</a>
      </BottomPage>
    </>
  );
}

export default Footer;
