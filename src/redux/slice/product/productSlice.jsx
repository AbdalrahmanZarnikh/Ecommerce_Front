import { createSlice } from "@reduxjs/toolkit";

// Thunks

import getProducts from "./act/actgetProducts";
import getOneProduct from "./act/actgetOneProduct";
import getProductsByCategory from "./act/actgetProductsByCategory";
import getProductsBySearch from "./act/actgetProductsBySearch";
import getProductsByBrand from "./act/actgetProductsByBrand";

import toast from "react-hot-toast";

// State
const initialState = {
  data: [],
  isLoading: "Idle",
  paginationProducts:null,
  error: null,
};

// Slice
const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getOneProduct.pending, (state) => {
      state.isLoading = "Pending";
      state.error = null;
    });
    builder.addCase(getOneProduct.fulfilled, (state, action) => {
      state.isLoading = "Success";
      state.error = null;
      state.data = action.payload.data;
    });
    builder.addCase(getOneProduct.rejected, (state, action) => {
      state.isLoading = "Fail";
      state.error = action.payload;
      toast.error(state.error || "Network Error");
    });
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = "Pending";
      state.error = null;
    });

    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = "Success";
      state.error = null;
      state.data = action.payload.data;
      state.paginationProducts = action.payload.pagination;
    });

    builder.addCase(getProducts.rejected, (state, action) => {
      state.isLoading = "Fail";
      state.error = action.payload;
      toast.error(state.error || "Network Error");
    });
    builder.addCase(getProductsByCategory.pending, (state) => {
      state.isLoading = "Pending";
      state.error = null;
    });
    builder.addCase(getProductsByCategory.fulfilled, (state, action) => {
      state.isLoading = "Success";
      state.error = null;
      state.data = action.payload.data;
      state.paginationProducts = action.payload.pagination;
    });
    builder.addCase(getProductsByCategory.rejected, (state, action) => {
      state.isLoading = "Fail";
      state.error = action.payload;
      toast.error(state.error || "Network Error");
    });
    builder.addCase(getProductsByBrand.pending, (state) => {
      state.isLoading = "Pending";
      state.error = null;
    });
    builder.addCase(getProductsByBrand.fulfilled, (state, action) => {
      state.isLoading = "Success";
      state.error = null;
      state.data = action.payload.data;
      state.paginationProducts = action.payload.pagination;
    });
    builder.addCase(getProductsByBrand.rejected, (state, action) => {
      state.isLoading = "Fail";
      state.error = action.payload;
      toast.error(state.error || "Network Error");
    });
    builder.addCase(getProductsBySearch.pending, (state) => {
      state.isLoading = "Pending";
      state.error = null;
    });
    builder.addCase(getProductsBySearch.fulfilled, (state, action) => {
      state.isLoading = "Success";
      state.error = null;
      state.data = action.payload.data;
    });
    builder.addCase(getProductsBySearch.rejected, (state, action) => {
      state.isLoading = "Fail";
      state.error = action.payload;
      toast.error(state.error || "Network Error");
    });
  },
});

export default productSlice.reducer;

export {
  getOneProduct,
  getProducts,
  getProductsByCategory,
  getProductsBySearch,
  getProductsByBrand
};
