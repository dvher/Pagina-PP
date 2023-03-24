import styled from "styled-components";
import casossvg from "../assets/img/casos.svg";
import Grid from "./Grid";

const Background = styled.section`
  & {
    width: 100vw;
    padding-block: 5%;
    position: relative;
    margin-block: 6rem;
  }

  &:before {
    content: " ";
    background: url(${casossvg}) no-repeat center;
    background-size: cover;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;

const Container = styled.div`
  grid-column: 2/6;
  text-align: center;
  position: relative;
`;

const SubGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-auto-rows: minmax(20rem, 1fr);
  justify-content: center;
`;

const Title = styled.h1`
  font-family: Rubik;
  font-weight: 600;
  font-size: 3rem;
  margn: 1rem;
`;

const Image = styled.img`
  border-radius: 1.5rem;
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Body = styled.p`
  margin: 0;
  padding: 0.5rem;
`;

const Button = styled.button`
  border-radius: 2rem;
  background-color: black;
  color: white;
  width: 5rem;
  padding-block: 0.2rem;
  border: none;
  margin-top: auto;
  align-self: center;
`;

function Casos() {
  return (
    <Background>
      <Grid>
        <Container>
          <Title>Finales Felices</Title>

          <SubGrid>
            <Card>
              <Image src="https://media.australian.museum/media/dd/images/Some_image.width-800.c4eca6d.jpg"></Image>
              <h4>Wombat</h4>
              <Body>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                totam cupiditate dolores.
              </Body>
              <Button>Leer mas</Button>
            </Card>
            <Card>
              <Image src="https://media.australian.museum/media/dd/images/Some_image.width-800.c4eca6d.jpg"></Image>
              <h4>Wombat</h4>
              <Body>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                totam cupiditate dolores.
              </Body>
              <Button>Leer mas</Button>
            </Card>
            <Card>
              <Image src="https://media.australian.museum/media/dd/images/Some_image.width-800.c4eca6d.jpg"></Image>
              <h4>Wombat</h4>
              <Body>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                totam cupiditate dolores.
              </Body>
              <Button>Leer mas</Button>
            </Card>
            <Card>
              <Image src="https://media.australian.museum/media/dd/images/Some_image.width-800.c4eca6d.jpg"></Image>
              <h4>Wombat</h4>
              <Body>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                totam cupiditate dolores.
              </Body>
              <Button>Leer mas</Button>
            </Card>
          </SubGrid>
        </Container>
      </Grid>
    </Background>
  );
}

export default Casos;
