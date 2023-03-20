import styled from "styled-components";
import Grid from "../components/Grid";
import Littersvg from "../assets/img/Littersand.svg";
import Donationsvg from "../assets/img/donationsvg.svg";
import PayOption1 from "../assets/img/payoption1.svg";
import PayOption2 from "../assets/img/payoption2.svg";
import PayOption3 from "../assets/img/payoption3.svg";
import Webpay from "../assets/img/webpay.svg";
import Mastercard from "../assets/img/mastercard.svg";
import Visa from "../assets/img/visa.svg";
import Arrow from "../assets/img/arrow.svg";

export interface ImgProps {
  url?: string;
  justifycontent?: string;
}

const Title = styled.h1`
  grid-column: 2/6;
  display: flex;
  flex-direction: row;
  text-align: center;
  place-content: center;
`;

//Hacer que la imagen se contenta en el container. Que no halla overflow o queda todo mal.
const Background = styled.section`
  border: solid 1px red;
  & {
    width: 100vw;
    height: auto;
    position: relative;
    padding-block: 4rem;
  }

  &:before {
    content: " ";
    background: url(${Donationsvg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top: -100%;
    bottom: -100%;
    left: 0px;
    right: 0px;
    z-index: -1;
  }
`;

const DonationOptions = styled.div`
  grid-column: 2/6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  grid-gap: 2rem;
  margin-block: 2.5rem;
`;

const Card = styled.div<ImgProps>`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: ${(props) => props.justifycontent};
  padding: 1.5rem;
  background: url(${(props) => props.url}) no-repeat center;
  background-size: contain;

  > img,
  a {
    max-width: 100%;
    text-decoration: underline;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 2.7rem;
  background: white;
  border-radius: 3rem;
  border: none;
`;

const PaymentOption = styled.div`
  grid-column: 2/6;
  place-content: center;
  display: grid;
  grid-template-columns: repeat(3, minmax(10vw, 5vw));
  grid-auto-rows: auto;
  grid-gap: 2rem;
`;

const About = styled.div`
  grid-column: 2/6;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  margin-block: 2rem;
`;

export default function Donations() {
  return (
    <>
      <Grid>
        <Title>
          <span>
            <img src={Littersvg}></img>
          </span>
          <h1>Aporta tu granito de arena!</h1>
        </Title>
      </Grid>

      <Background>
        <Grid>
          <DonationOptions>
            <Card>
              <Button>
                <h4>Una Vez</h4>
              </Button>
              <p>Lorem ipsum dolor sit amet consectetur adipisic.</p>
            </Card>

            <Card>
              <Button>
                <h4>Mensual</h4>
              </Button>
              <p>Lorem ipsum dolor sit amet consectetur adipisic.</p>
            </Card>

            <Card>
              <Button>
                <h4>Apadrina</h4>
              </Button>
              <p>Lorem ipsum dolor sit amet consectetur adipisic.</p>
            </Card>
          </DonationOptions>

          <PaymentOption>
            <Card url={PayOption1} justifycontent="center">
              <img src={Webpay}></img>
            </Card>

            <Card url={PayOption2} justifycontent="center">
              <img src={Visa}></img>
            </Card>

            <Card url={PayOption3} justifycontent="center">
              <img src={Mastercard}></img>
            </Card>
          </PaymentOption>
        </Grid>
      </Background>

      <Grid>
        <About>
          <Card>
            <h2>Nuestra Mision</h2>
            <p>
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
            </p>
            <p>when an unknown printer took a galley of type and scrambled.</p>
          </Card>

          <Card>
            <h2>Nuestros Logros</h2>
            <p>
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
            </p>
            <a>
              <img src={Arrow} width="28px"></img> Mas sobre nuestros finales
              felices
            </a>
          </Card>
        </About>
      </Grid>
    </>
  );
}
