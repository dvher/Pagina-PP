import { Carousel } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Noticia from "./Noticia";

export default function Noticias(props: any) {
    return (
        <div data-aos="zoom-in">
            <Carousel className='full-screen common-background-color center-screen' controls={!isMobile} interval={null}>
                <Carousel.Item>
                    <Noticia />
                </Carousel.Item>
                <Carousel.Item>
                    <Noticia />
                </Carousel.Item>
                <Carousel.Item>
                    <Noticia />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}