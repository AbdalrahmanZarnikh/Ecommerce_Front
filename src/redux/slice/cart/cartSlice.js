import { createSlice } from "@reduxjs/toolkit";

// Thunks

import addProductToCart from "./act/addProductToCart";
import getLoggedUserCart from "./act/getLoggedUserCart";
import updateCartItemQuantity from "./act/updateCartItemQuantity";
import removeSpecificCartItem from "./act/removeSpecificCartItem";
import clearCart from "./act/clearCart";
import applyCoupon from "./act/applyCoupon";

import toast from "react-hot-toast";

// State
const initialState = {
  dataCart: [],
  isLoading: "Idle",
  error: null,
};

// Slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addProductToCart.pending, (state) => {
      state.isLoading = "Pending";
      state.error = null;
    });
    builder.addCase(addProductToCart.fulfilled, (state, action) => {
      state.isLoading = "Success";
      state.error = null;
      state.dataCart = action.payload.data;
    });
    builder.addCase(addProductToCart.rejected, (state, action) => {
      state.isLoading = "Fail";
      state.error = action.payload;
      toast.error(state.error || "Network Error");
    });
    builder.addCase(getLoggedUserCart.pending, (state) => {
      state.isLoading = "Pending";
      state.error = null;
    });
    builder.addCase(getLoggedUserCart.fulfilled, (state, action) => {
      state.isLoading = "Success";
      state.error = null;
      state.dataCart = action.payload.data;
    });
    builder.addCase(getLoggedUserCart.rejected, (state, action) => {
      state.isLoading = "Fail";
      state.error = action.payload;
      // toast.error(state.error || "Network Error");
    });
    builder.addCase(updateCartItemQuantity.pending, (state) => {
      state.isLoading = "Pending";
      state.error = null;
    });
    builder.addCase(updateCartItemQuantity.fulfilled, (state, action) => {
      state.isLoading = "Success";
      state.error = null;
      state.dataCart = action.payload.data;
    });
    builder.addCase(updateCartItemQuantity.rejected, (state, action) => {
      state.isLoading = "Fail";
      state.error = action.payload;
      toast.error(state.error || "Network Error");
    });
    builder.addCase(removeSpecificCartItem.pending, (state) => {
      state.isLoading = "Pending";
      state.error = null;
    });
    builder.addCase(removeSpecificCartItem.fulfilled, (state, action) => {
      state.isLoading = "Success";
      state.error = null;
      state.dataCart = action.payload.data;
    });
    builder.addCase(removeSpecificCartItem.rejected, (state, action) => {
      state.isLoading = "Fail";
      state.error = action.payload;
      toast.error(state.error || "Network Error");
    });
    builder.addCase(applyCoupon.pending, (state) => {
      state.isLoading = "Pending";
      state.error = null;
    });
    builder.addCase(applyCoupon.fulfilled, (state, action) => {
      state.isLoading = "Success";
      state.error = null;
      state.dataCart = action.payload.data;
    });
    builder.addCase(applyCoupon.rejected, (state, action) => {
      state.isLoading = "Fail";
      state.error = action.payload;
      // toast.error(state.error || "Network Error");
    });
    builder.addCase(clearCart.pending, (state) => {
      state.isLoading = "Pending";
      state.error = null;
    });
    builder.addCase(clearCart.fulfilled, (state, action) => {
      state.isLoading = "Success";
      state.error = null;
      state.dataCart = [];
    });
    builder.addCase(clearCart.rejected, (state, action) => {
      state.isLoading = "Fail";
      state.error = action.payload;
      toast.error(state.error || "Network Error");
    });
  },
});

export default cartSlice.reducer;

export { addProductToCart, getLoggedUserCart, updateCartItemQuantity };
