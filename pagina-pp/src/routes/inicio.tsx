import GlobalStyle from "../components/GlobalStyle";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Noticias from "../components/Noticias";
import Casos from "../components/Casos";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Navbar></Navbar>
      <Hero></Hero>
      <Noticias></Noticias>
      <Casos></Casos>
      <Footer></Footer>
    </>
  );
}
