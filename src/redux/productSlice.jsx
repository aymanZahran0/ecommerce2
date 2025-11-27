import { createSlice } from "@reduxjs/toolkit";
import { getProducts,getProductById_Cart } from "../api/products_Api";

const initialState = {
   productData:{
    data: null ,
    token: localStorage.getItem('myToken') || null,
    loading: false,
    error: null,
   },
}

const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{

    },

    extraReducers:(builder) => {
        builder

        // get all products from api
        .addCase(getProducts.pending, (state) => {
            state.productData.loading = true;
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.productData.loading = false;
            state.productData.data = action.payload;
            console.log(action.payload)
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.productData.loading = false;
            state.productData.error = action.payload;
            console.log(action.payload)
        })     
    }
});



export default productSlice.reducer;
