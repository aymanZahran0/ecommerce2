import {createBrowserRouter} from 'react-router-dom';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Home from '../components/home/Home';
import Layout from '../components/layout/Layout';
import Login from '../components/login/Login';
import Register from '../components/register/Register';
import NotFound_Page from '../components/notFound_page/NotFound_Page';
import ProtecedRoute from './ProtecedRoute'


let routers= createBrowserRouter([
    {path :'/' ,element : <Layout /> , children :[
    {path : 'home' , element: <ProtecedRoute><Home /></ProtecedRoute> },
    {path : 'about' , element:<ProtecedRoute><About /></ProtecedRoute>  },
    {path : 'contact' , element:<ProtecedRoute><Contact /></ProtecedRoute>  },
    {path : 'login' , element: <Login/>},
    {index : true , element: <Register/>},
    {path : '*' , element: <NotFound_Page/>},
    ] },
  ]);

  export default routers;