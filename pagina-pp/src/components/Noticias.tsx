import { CarouselProvider, Slider, Slide, Dot, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styled from 'styled-components';

const Container = styled.div`

    grid-area: N;
    width: 100%;
    text-align: center;
`;

const Image = styled.img`
    object-fit: fill;
`;

function Noticias() {

    return (
        <Container>

            <h1>Noticias</h1>

            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={40}
                totalSlides={3}
            >
                <Slider>
                    <Slide index={0}><Image src='https://preview.redd.it/ymjqi4whp5d41.jpg?auto=webp&s=fe4ed8a80a22519b73833510bd92354d56d31a71'></Image></Slide>
                    <Slide index={1}><Image src='https://concepto.de/wp-content/uploads/2022/05/animales-e1653765030720.jpg'></Image></Slide>
                    <Slide index={2}><Image src='https://estaticos.muyinteresante.es/uploads/images/test/5b03cec65bafe89b7048a6ff/animal-slide_0.jpg'></Image></Slide>
                </Slider>
                <DotGroup></DotGroup>
            </CarouselProvider>
        </Container>
    )
};

export default Noticias;