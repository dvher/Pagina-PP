import styled from "styled-components";
import Grid from "./Grid";
import noticiassvg from "../assets/img/noticias.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

const Background = styled.section`
  & {
    width: 100vw;
    height: auto;
    position: relative;
    padding-block: 6rem;
  }

  &:before {
    content: " ";
    background: url(${noticiassvg});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top: 50%;
    bottom: 0;
    left: 35%;
    right: 0px;
    z-index: -1;
  }
`;

const Container = styled.div`
  grid-column: 2/6;
  width: 100%;
  text-align: center;
`;

const NewsLabel = styled.div`
  with: 100%;
  background: rgba(35, 35, 35, 0.4);
  padding: 1rem;
`;

function Noticias() {
  return (
    <Background>
      <Grid>
        <Container>
          <h1>Noticias</h1>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {images.map((step, index) => (
              <SwiperSlide>
                <img src={step.imgPath}></img>
                <NewsLabel>
                  <h3>{step.label}</h3>
                </NewsLabel>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Grid>
    </Background>
  );
}

export default Noticias;
