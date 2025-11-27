import {createBrowserRouter} from 'react-router-dom';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import Home from '../pages/home/Home';
import Layout from '../components/layout/Layout';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import NotFound_Page from '../pages/notFound_page/NotFound_Page';
import ProtecedRoute from '../components/ProtecedRoute'
import ProtecedAuthRoute from '../components/ProtecedAuthRoute';
import My_Account from '../pages/my_account/My_Account';
import Cart from '../pages/cart/Cart';
import Wishlist from '../pages/wishlist/Wishlist';


let routers= createBrowserRouter([
    {path :'/' ,element : <Layout /> , children :[
    {index : true , element: <ProtecedRoute><Home /></ProtecedRoute> },
    {path : 'about' , element:<ProtecedRoute><About /></ProtecedRoute>  },
    {path : 'contact' , element:<ProtecedRoute><Contact /></ProtecedRoute>  },
    {path : 'account' , element:<ProtecedRoute><My_Account /></ProtecedRoute>  },
    {path : 'cart' , element:<ProtecedRoute><Cart /></ProtecedRoute>  },
    {path : 'Wishlist' , element:<ProtecedRoute><Wishlist /></ProtecedRoute>  },
    {path : 'login' , element: <ProtecedAuthRoute><Login/></ProtecedAuthRoute>},
    {path : 'register', element: <ProtecedAuthRoute><Register/></ProtecedAuthRoute> },
    {path : '*' , element: <NotFound_Page/>},
    ] },
  ]);

  export default routers;

  