import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { createTheme, ThemeProvider } from "@mui/material";
import GlobalStyle from './components/GlobalStyle';
import Grid from './components/Grid';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  
  return (
      <Grid>
        <GlobalStyle></GlobalStyle>
        <Navbar></Navbar> 
        <Hero></Hero>
      </Grid>
  )
}

export default App
