import styled from "styled-components";
import Grid from "../components/Grid";
import Footer from "../components/Footer";

import Littersvg from "../assets/img/Littersand.svg";
import Donationsvg from "../assets/img/donationsvg.svg";
import PayOption1 from "../assets/img/payoption1.svg";
import PayOption2 from "../assets/img/payoption2.svg";
import PayOption3 from "../assets/img/payoption3.svg";
import Webpay from "../assets/img/webpay.svg";
import Mastercard from "../assets/img/mastercard.svg";
import Visa from "../assets/img/visa.svg";
import DrawnRightArrow from "../assets/img/drawn-right-arrow.svg";
import ArrowRight from "../assets/img/arrow-right.svg";

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

const Background = styled.section`
  background: url(${Donationsvg}) no-repeat center;
  background-size: cover;
  width: 100%;
  padding-block: 10%;
`;

const Steps = styled.div`
  display: flex;
  direction: row;
  justify-content: end;
  grid-column: 2/6;
`;

const StepsBar = styled.div`
  background-color: white;
  width: 40%;
  padding: 0.4rem;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    padding-inline: 0.5rem;
  }
`;

const DonationOptions = styled.div`
  grid-column: 2/6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  grid-gap: 2rem;
`;

const Card = styled.div<ImgProps>`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: ${(props) => props.justifycontent};
  background: url(${(props) => props.url}) no-repeat center;
  background-size: contain;
  padding: 0.4rem;
  width: 100%;

  > a {
    text-decoration: underline;
  }
`;

const PaymentOption = styled.div`
  grid-column: 2/6;
  place-content: center;
  display: grid;
  grid-template-columns: repeat(3, minmax(10vw, 5vw));
  grid-auto-rows: auto;
  grid-gap: 2rem;
`;

const Img = styled.img`
  object-fit: scale-down;
`;

const Button = styled.button`
  width: 100%;
  height: 2.7rem;
  background: white;
  border-radius: 3rem;
  border: none;
`;

const About = styled.div`
  grid-column: 2/6;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  margin-top: 2rem;
  margin-bottom: 10rem;
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
          <Steps>
            <StepsBar>
              {" "}
              <span>Plan</span> <img src={ArrowRight}></img>{" "}
              <span>Opciones</span> <img src={ArrowRight}></img>{" "}
              <span>Medio de Pago</span> <img src={ArrowRight}></img>{" "}
              <span>Pago</span>
            </StepsBar>
          </Steps>

          <DonationOptions>
            <Card>
              <Button>
                <h4>Una Vez</h4>
              </Button>
              <p>
                Haz una donacion unica para aportar al cuidado de todos los
                animalitos de la fundacion.
              </p>
            </Card>

            <Card>
              <Button>
                <h4>Mensual</h4>
              </Button>
              <p>
                Inscribete a una donacion mensual, del monto que tu quieras,
                para ayudar continuamente a nuetros pequenos.
              </p>
            </Card>

            <Card>
              <Button>
                <h4>Apadrina</h4>
              </Button>
              <p>
                Elige ser el padrino de uno de nuestros rescatados y apoya
                economicamente en su rehabilitacion.
              </p>
            </Card>
          </DonationOptions>

          <PaymentOption>
            <Card url={PayOption1} justifycontent="center">
              <Img src={Webpay}></Img>
            </Card>

            <Card url={PayOption2} justifycontent="center">
              <Img src={Visa}></Img>
            </Card>

            <Card url={PayOption3} justifycontent="center">
              <Img src={Mastercard}></Img>
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
              <img src={DrawnRightArrow} width="28px"></img> Mas sobre nuestros
              finales felices
            </a>
          </Card>
        </About>
      </Grid>

      <Footer></Footer>
    </>
  );
}
