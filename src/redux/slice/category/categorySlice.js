import {  createSlice } from "@reduxjs/toolkit";


// Thunks 

import getCategories from "./act/actgetCategories"
import getOneCategory from "./act/actgetCategory"

import toast from "react-hot-toast";



// State
const initialState = {
  data:[],
  isLoading: "Idle",
  error: null,
  
};





// Slice
const categorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.isLoading = "Pending";
      state.error = null;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.isLoading = "Success";
      state.error = null;
      state.data=action.payload.data;
    });
    builder.addCase(getCategories.rejected, (state,action) => {
      state.isLoading = "Fail";
      state.error = action.payload;
      toast.error(state.error || "Network Error")
    });
        builder.addCase(getOneCategory.pending, (state) => {
      state.isLoading = "Pending";
      state.error = null;
    });
    builder.addCase(getOneCategory.fulfilled, (state, action) => {
      state.isLoading = "Success";
      state.error = null;
      state.data=action.payload.data;
    });
    builder.addCase(getOneCategory.rejected, (state,action) => {
      state.isLoading = "Fail";
      state.error = action.payload;
      toast.error(state.error || "Network Error")
    });


  }
});

export default createSlice.reducer;

export { getCategories,getOneCategory };
