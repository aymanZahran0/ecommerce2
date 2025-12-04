import axiosInstance from "./axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";




// get Products
 export const getProducts = createAsyncThunk( "products/getProducts",async (_, { rejectWithValue }) => {
     try {
       const {data} = await axiosInstance.get(`/products`, {})
       console.log(data)
       return data;
     } catch (err) {
       return rejectWithValue( err.response.data);
     }
   }
 );
 

//  getProductById for cart
 export const getProductById_Cart = createAsyncThunk( "products/getProductById_Cart",async (id, { rejectWithValue }) => {
     try {
       const {data} = await  axiosInstance.get(`/products/${id}`)
       console.log(data)
       return data;
     } catch (err) {
       return rejectWithValue( err.response.data);
     }
   }
 );
 
//  getProductById for wishlist
 export const getProductById_Wishlist = createAsyncThunk( "products/getProductById_Wishlist",async (id, { rejectWithValue }) => {
     try {
       const {data} = await  axiosInstance.get(`/products/${id}`)
       console.log(data)
       return data;
     } catch (err) {
       return rejectWithValue( err.response.data);
     }
   }
 );

//  getProductById for details
 export const getProductById_Details = createAsyncThunk( "products/getProductById_Details",async (id, { rejectWithValue }) => {
     try {
       const {data} = await  axiosInstance.get(`/products/${id}`)
       console.log(data)
       return data;
     } catch (err) {
       return rejectWithValue( err.response.data);
     }
   }
 );
 