import { createSlice } from "@reduxjs/toolkit";
import { getProducts, getProductById_Wishlist } from "../api/products_Api";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
  },
  reducers: {
     removeWishlistItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    }
  },

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


export const { removeWishlistItem } = wishlistSlice.actions;
export default wishlistSlice.reducer;
