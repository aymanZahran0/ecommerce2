import { createTheme, CssBaseline, ThemeProvider, Container } from '@mui/material'
import { useState } from 'react'
import './App.css'
import Footer from './components/common/Footer'
import Navbar from './components/common/Navbar'
import Home from './components/home/Home.jsx'
import Login from './components/login/Login'
import NotFound_Page from './components/notFound_page/NotFound_Page'
import Register from './components/register/Register'



function App() {

  const myTheme = createTheme({
    palette:{
      mainColor:{
        main:'#DB4444',
      },
      mutedColor:{
        main:'#AFAFAF'
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
      <Navbar/>
      <Container maxWidth="xl" sx={{mt:'50px',}}>
      
      </Container>
      {/* <Register/> */}
      <NotFound_Page/>

      <Footer/>
    </ThemeProvider>
  
    </>
  )
}

export default App
