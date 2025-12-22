import axios from "axios";


 const token = localStorage.getItem('myToken')

 const axiosInstance = axios.create({
    baseURL: "https://fakestoreapi.com",
  });

  axiosInstance.interceptors.request.use(
    
    (config) => {

        if(token){
            console.info(token)
            config.headers.Authorization = `Bearer ${token}`
        }else{
            // console.info('token not found')
        }
        return config
    },
    (error) => Promise.reject(error)
  );


  axiosInstance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        console.error(error)
        return Promise.reject(error)
    }
  );

  export default axiosInstance;