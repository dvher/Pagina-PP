import GlobalStyle from "../components/GlobalStyle";
import Button from "../components/Button";
import Card from "../components/Card";
import Image from "../components/Image";
import InnerGrid from "../components/InnerGrid";
import { Text, H1, H2, H3 } from "../components/Texts";
import styled from "styled-components";
import { SocialMedia, MediaLinks } from "../components/Media";
import Section from "../components/Section";
import Donationsvg from "../assets/img/donationsvg.svg";

export default function Contact() {
  console.log(Donationsvg);
  return (
    <>
      contacto
      <Section variant='withPadding' url={Donationsvg} size='cover' top='-50%' bottom='-100%' pb='10%' pt='10%'>
        <InnerGrid variant='threeCol'>
          <Card>
            <p>hola</p>
            <Image
              variant='default'
              size='cover'
              url='https://media.australian.museum/media/dd/images/Some_image.width-800.c4eca6d.jpg'
            ></Image>
          </Card>
          <Card>
            <p>hola</p>
            <Image
              variant='default'
              size='cover'
              url='https://media.australian.museum/media/dd/images/Some_image.width-800.c4eca6d.jpg'
            ></Image>
          </Card>
          <Card>
            <p>hola</p>
            <Image
              variant='default'
              size='cover'
              url='https://media.australian.museum/media/dd/images/Some_image.width-800.c4eca6d.jpg'
            ></Image>
          </Card>
        </InnerGrid>
      </Section>
    </>
  );
}
