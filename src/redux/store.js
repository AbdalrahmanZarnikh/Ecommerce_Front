import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./slice/auth/authSlice"
import productSlice from "./slice/product/productSlice"


export const store=configureStore({
    reducer:{
        authSlice,
        productSlice
    }
})