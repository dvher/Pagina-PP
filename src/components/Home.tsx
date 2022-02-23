import { Carousel } from 'react-bootstrap';

export default function Home(props: any) {
    return (
        <Carousel className='full-screen center-screen common-background-color' controls={false} interval={null}>
            <Carousel.Item>
                <h1>Hola</h1>
                <Carousel.Caption>
                    Mundo
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <h1>Hola</h1>
                <Carousel.Caption>
                    Mundo
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}