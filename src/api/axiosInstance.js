import axios from "axios";
import { logout } from "../assets/redux/authSlice";
import { useSelector} from 'react-redux'

 const myToken = sessionStorage.getItem('myToken')
//  const {token} = useSelector((state)=>state.auth.authData)

 const axiosInstance = axios.create({
    baseURL: "https://www.quickpickdeal.com/api",
  });


  axiosInstance.interceptors.request.use(
    
    (config) => {
        
     const {token} = useSelector((state)=>state.auth.authData)
        if(myToken){
            console.log(myToken)
            config.headers.Authorization = `Bearer ${myToken}`
            console.log(config.headers);
        }else{
            console.log('token not found')
        }
        return config
    },
    (error) => Promise.reject(error)
  );


  axiosInstance.interceptors.response.use(
    (response) => {
        // console.log(response)
        return response
    },
    (error) => {

        console.log(error)
        
        return Promise.reject(error)
    }
  );



  export default axiosInstance;