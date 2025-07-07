import { createSlice } from "@reduxjs/toolkit";

// Thunks

import addProductToWishlist from "./act/addProductToWishlist";
import removeProductFromWishlist from "./act/removeProductFromWishlist";
import getLoggedUserWishlist from "./act/getLoggedUserWishlist";

import toast from "react-hot-toast";

// State
const initialState = {
  dataWishlist: [],
  isLoading: "Idle",
  error: null,
};

// Slice
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addProductToWishlist.pending, (state) => {
      state.isLoading = "Pending";
      state.error = null;
    });
    builder.addCase(addProductToWishlist.fulfilled, (state, action) => {
      state.isLoading = "Success";
      state.error = null;
      state.dataWishlist = action.payload.data;
    });
    builder.addCase(addProductToWishlist.rejected, (state, action) => {
      state.isLoading = "Fail";
      state.error = action.payload;
      toast.error(state.error || "Network Error");
    });
    builder.addCase(getLoggedUserWishlist.pending, (state) => {
      state.isLoading = "Pending";
      state.error = null;
    });
    builder.addCase(getLoggedUserWishlist.fulfilled, (state, action) => {
      state.isLoading = "Success";
      state.error = null;
      state.dataWishlist = action.payload.data;
    });
    builder.addCase(getLoggedUserWishlist.rejected, (state, action) => {
      state.isLoading = "Fail";
      state.error = action.payload;
      // toast.error(state.error || "Network Error");
    });
    builder.addCase(removeProductFromWishlist.pending, (state) => {
      state.isLoading = "Pending";
      state.error = null;
    });
    builder.addCase(removeProductFromWishlist.fulfilled, (state, action) => {
      state.isLoading = "Success";
      state.error = null;
      state.dataWishlist = action.payload.data;
    });
    builder.addCase(removeProductFromWishlist.rejected, (state, action) => {
      state.isLoading = "Fail";
      state.error = action.payload;
      toast.error(state.error || "Network Error");
    });

    

  },
});

export default wishlistSlice.reducer;

export { addProductToWishlist, getLoggedUserWishlist, removeProductFromWishlist };
