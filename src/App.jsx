import { CssBaseline, ThemeProvider } from '@mui/material'
import './App.css'
import { RouterProvider} from 'react-router-dom';
import My_Theme from './styles/My_Theme'
import routers from './routes/Routers'
import { useDispatch } from "react-redux";
import { getUserById } from './api/Auth_api';
import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';




function App() {

  const token = localStorage.getItem('myToken')
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getUserById());
    }
  }, [token,dispatch]);

  
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
