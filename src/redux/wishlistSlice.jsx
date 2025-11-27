import { createSlice } from "@reduxjs/toolkit";
import { getProducts, getProductById_Wishlist } from "../api/products_Api";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
  },
  reducers: {},

  extraReducers: (builder) => {
    builder

      //  get productData by Id from api
      .addCase(getProductById_Wishlist.fulfilled, (state, action) => {
        const item = action.payload;
        state.items.push({ ...item });
      })
      .addCase(getProductById_Wishlist.rejected, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export default wishlistSlice.reducer;
