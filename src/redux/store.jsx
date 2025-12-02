import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import counterReducer from "./counterSlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import wishlistReducer from "./wishlistSlice";
import detailsItemReducer from "./detaisItemSlice";


export const store = configureStore({

    reducer:{
        counter:counterReducer,
        auth:authReducer,
        product:productReducer,
        cart:cartReducer,
        wishlist:wishlistReducer,
        detailsItem:detailsItemReducer,
    },
})