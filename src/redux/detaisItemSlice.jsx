import { createSlice } from "@reduxjs/toolkit";
import { getProductById_Details } from "../api/products_Api";



const detailsItemSlice = createSlice({
  name: "detailsItem",
  initialState: {
    items: {
        data:null
    },
    quantities: {} 
  },
  reducers: {

    setQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      state.quantities[id] = quantity;
    }

  },


  
      extraReducers:(builder) => {
          builder
  
          //  get productData by Id from api 
            .addCase(getProductById_Details.fulfilled, (state, action) => {
                state.items.data= action.payload
            })
            .addCase(getProductById_Details.rejected, (state, action) => {
                state.items.data= action.payload
            })     
      }

});

export const { setQuantity } = detailsItemSlice.actions;
export default detailsItemSlice.reducer;