import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "./axiosInstance";
import {jwtDecode} from "jwt-decode";


// // register
// export  const register_api = createAsyncThunk('auth/register',async(user,{ rejectWithValue })=>{
//     try{
//     const {data} = await axiosInstance.post('/users',user);
//     return data;
//     }
//     catch (err){
//       return rejectWithValue(err.response.data)
//     }
// });


// // login
// export  const Login_api = createAsyncThunk('auth/login',async(user,{ rejectWithValue })=>{
//     try{
//     const {data} = await axiosInstance.post('/auth/login',user);
//     return data
//     }
//     catch (err){
//         console.error(err.response.data)
//     return rejectWithValue(err.response.data)
//     }
// });


// fetch userData from api by id 
export const getUserById = createAsyncThunk( "auth/getUserById",async (_, { rejectWithValue }) => {
    const decoded = jwtDecode(JSON.stringify (localStorage.getItem('myToken')));
    const userId = decoded.sub

    try {
      const {data} = await axiosInstance.get(`/users/${userId}`, {})
      console.log(data)
      return data;
    } catch (err) {
      return rejectWithValue( err.response.data);
    }
  }
);
