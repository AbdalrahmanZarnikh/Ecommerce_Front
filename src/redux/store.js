import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./slice/auth/authSlice"
import productSlice from "./slice/product/productSlice"
import categorySlice from "./slice/category/categorySlice"
import cartSlice from "./slice/cart/cartSlice"
import wishlistSlice from "./slice/wishlist/wishlistSlice"
import brandSlice from "./slice/brand/brandSlice"
import userSlice from "./slice/user/userSlice"


export const store=configureStore({
    reducer:{
        authSlice,
        productSlice,
        categorySlice,
        cartSlice,
        wishlistSlice,
        brandSlice,
        userSlice

    }
})