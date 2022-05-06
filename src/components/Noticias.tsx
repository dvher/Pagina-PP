import { Carousel } from "react-bootstrap";
import Noticia from "./Noticia";

export default function Noticias(props: any) {
    return (
        <div data-aos="zoom-in">
            <Carousel className='full-screen common-background-color center-screen' controls interval={null}>
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