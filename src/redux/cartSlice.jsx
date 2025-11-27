import { createSlice } from "@reduxjs/toolkit";
import { getProducts,getProductById_Cart } from "../api/products_Api";



const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCartAction: (state, action) => {

        // state.items.push(action.payload);
        // console.log(action)
        // console.log(state.items)
    },

  },


  
      extraReducers:(builder) => {
          builder
  
          //  get productData by Id from api 
            .addCase(getProductById_Cart.fulfilled, (state, action) => {
                const item = action.payload
                state.items.push({...item});

            })
            .addCase(getProductById_Cart.rejected, (state, action) => {
                state.items.push(action.payload);

            })     
      }

});

export const { addToCartAction} = cartSlice.actions;

export default cartSlice.reducer;