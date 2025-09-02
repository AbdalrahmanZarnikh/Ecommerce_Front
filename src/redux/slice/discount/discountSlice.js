import {  createSlice } from "@reduxjs/toolkit";


// Thunks 

import getDiscounts from "./act/getDiscounts"
import toast from "react-hot-toast";



// State
const initialState = {
  discounts:[],
  isLoading: "Idle",
  error: null,
  
};





// Slice
const discountSlice = createSlice({
  name: "discount",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getDiscounts.pending, (state) => {
      state.isLoading = "Pending";
      state.error = null;
    });
    builder.addCase(getDiscounts.fulfilled, (state, action) => {
      state.isLoading = "Success";
      state.error = null;
      state.discounts=action.payload.data;
    });
    builder.addCase(getDiscounts.rejected, (state,action) => {
      state.isLoading = "Fail";
      state.error = action.payload;
    });




  }
});

export default discountSlice.reducer;

export { getDiscounts };
