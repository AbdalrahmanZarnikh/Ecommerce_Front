import {  createSlice } from "@reduxjs/toolkit";


// Thunks 

import getBrands from "./act/actgetBrands"
import toast from "react-hot-toast";



// State
const initialState = {
  brands:[],
  isLoading: "Idle",
  paginationBrand:null,
  error: null,
  
};





// Slice
const brandSlice = createSlice({
  name: "brand",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getBrands.pending, (state) => {
      state.isLoading = "Pending";
      state.error = null;
    });
    builder.addCase(getBrands.fulfilled, (state, action) => {
      state.isLoading = "Success";
      state.error = null;
      state.brands=action.payload.data;
      state.paginationBrand=action.payload.pagination;
    });
    builder.addCase(getBrands.rejected, (state,action) => {
      state.isLoading = "Fail";
      state.error = action.payload;
      toast.error(state.error || "Network Error")
    });




  }
});

export default brandSlice.reducer;

export { getBrands };
