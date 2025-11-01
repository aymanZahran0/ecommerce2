import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import My_Theme from './assets/My_Theme'
import routers from './assets/Routers'




function App() {


  return (
    <>

   
    
      <ThemeProvider theme ={My_Theme}>
        <CssBaseline/>

          <RouterProvider router ={routers}/>

      </ThemeProvider>

    
  
    </>
  )
}

export default App
