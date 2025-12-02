import { createSlice } from "@reduxjs/toolkit";
import { getProducts, getProductById_Cart } from "../api/products_Api";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    quantities: {},
  },
  reducers: {
    removeCartItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },

    setQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      state.quantities[id] = quantity;
    },
  },

  extraReducers: (builder) => {
    builder

      //  get productData by Id from api
      .addCase(getProductById_Cart.fulfilled, (state, action) => {
        const item = action.payload;
        state.items.push({ ...item });
      })
      .addCase(getProductById_Cart.rejected, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export const { removeCartItem } = cartSlice.actions;
export const { setQuantity } = cartSlice.actions;
export default cartSlice.reducer;
