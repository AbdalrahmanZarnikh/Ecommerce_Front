import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./slice/auth/authSlice"
import productSlice from "./slice/product/productSlice"
import categorySlice from "./slice/category/categorySlice"


export const store=configureStore({
    reducer:{
        authSlice,
        productSlice,
        categorySlice
    }
})