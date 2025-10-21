import { createTheme, CssBaseline, ThemeProvider, Container } from '@mui/material'
import { useState } from 'react'
import './App.css'
import Home from './components/home/Home.jsx'
//import Home from './components/home/Home.jsx'




function App() {

  const myTheme = createTheme({
    palette:{
      mainColor:{
        main:'#DB4444',
      }
    },
    typography:{
      fontFamily: ["Helvetica", "Arial", "sans-serif"].join(","),
      
    }
  });


  return (
    <>
    <ThemeProvider theme ={myTheme}>
      <CssBaseline/>
      <Container maxWidth="xl">
        <Home/>
      </Container>
      
    </ThemeProvider>
  
    </>
  )
}

export default App
