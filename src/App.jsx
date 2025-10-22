import { createTheme, CssBaseline, ThemeProvider, Container } from '@mui/material'
import { useState } from 'react'
import './App.css'
import Footer from './components/common/Footer'
import Navbar from './components/common/Navbar'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import Login from './components/login/Login'
import NotFound_Page from './components/notFound_page/NotFound_Page'
import Register from './components/register/Register'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './components/layout/Layout'




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




  let routers= createBrowserRouter([
    {path :'/' ,element : <Layout /> , children :[          //  , errorElement: <NotFound/>
    {path : 'home' , element: <Home/>},
    {path : 'about' , element:<About/>  },
    {path : 'contact' , element:<Contact/>  },
    {path : 'login' , element: <Login/>},
    {index : true , element: <Register/>},
    {path : '*' , element: <NotFound_Page/>},
    ] },
  ]);

  return (
    <>
    <ThemeProvider theme ={myTheme}>
      <CssBaseline/>
      {/* <Navbar/> */}

      <RouterProvider router ={routers}/>

      {/* <Container maxWidth="xl" sx={{mt:'50px',}}>

      </Container>
      <Register/>
      <NotFound_Page/>
      <Footer/> */}

    </ThemeProvider>
  
    </>
  )
}

export default App
