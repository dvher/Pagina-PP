import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { createTheme, ThemeProvider } from "@mui/material";
import GlobalStyle from './components/GlobalStyle';
import Grid from './components/Grid';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Noticias from './components/Noticias';
import Casos from './components/Casos';
import Footer from './components/Footer';


function App() {

  return (
    <Grid>
      <GlobalStyle></GlobalStyle>
      <Navbar></Navbar>
      <Hero></Hero>
      <Noticias></Noticias>
      <Casos></Casos>
      <Footer></Footer>
    </Grid>
  )
}

export default App
