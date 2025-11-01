import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "./axiosInstance";



// export  const register_api = createAsyncThunk('auth/register',async(user,{ rejectWithValue })=>{

//     try{
//         const {data} = await axios.post('https://www.quickpickdeal.com/api/auth/registration',user);
//         return data;
//     }catch (err){
//         return rejectWithValue(err.response.data)
//     }
    
// });


// export  const Login_api = createAsyncThunk('auth/login',async(user)=>{

//     const {data} = await axios.post('https://www.quickpickdeal.com/api/auth/login',user);
//     return data
// });






export  const register_api = createAsyncThunk('auth/register',async(user)=>{

    const {data} = await axiosInstance.post('/auth/registration',user);
    return data;
});


export  const Login_api = createAsyncThunk('auth/login',async(user)=>{

    const {data} = await axiosInstance.post('/auth/login',user);
    return data
});


