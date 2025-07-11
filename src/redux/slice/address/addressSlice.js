import { createSlice } from "@reduxjs/toolkit";

// Thunks
import getLoggedUserAddress from "./act/getLoggedUserAddress";
import addAddress from "./act/addAddress";
import removeAddress from "./act/removeAddress";

// State
const initialState = {
  data: [],
  isLoading:"Idle",
  isLoadingAdd: "Idle",
  isLoadingRemove: "Idle",
  error: null,
};

// Slice
const addressSlice = createSlice({
  name: "addresses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLoggedUserAddress.pending, (state) => {
      state.isLoading = "Pending";
      state.error = null;
    });
    builder.addCase(getLoggedUserAddress.fulfilled, (state, action) => {
      state.isLoading = "Success";
      state.error = null;
      state.data = action.payload.data;
    });
    builder.addCase(getLoggedUserAddress.rejected, (state, action) => {
      state.isLoading = "Fail";
      state.error = action.payload;
    });
    builder.addCase(addAddress.pending, (state) => {
      state.isLoadingAdd = "Pending";
      state.error = null;
    });
    builder.addCase(addAddress.fulfilled, (state, action) => {
      state.isLoadingAdd = "Success";
      state.error = null;
      state.data = action.payload.data;
    });
    builder.addCase(addAddress.rejected, (state, action) => {
      state.isLoadingAdd = "Fail";
      state.error = action.payload;
    });
    builder.addCase(removeAddress.pending, (state) => {
      state.isLoadingRemove = "Pending";
      state.error = null;
    });
    builder.addCase(removeAddress.fulfilled, (state, action) => {
      state.isLoadingRemove = "Success";
      state.error = null;
      state.data = action.payload.data;
    });
    builder.addCase(removeAddress.rejected, (state, action) => {
      state.isLoadingRemove = "Fail";
      state.error = action.payload;
    });
  },
});

export default addressSlice.reducer;

export { getLoggedUserAddress, addAddress, removeAddress };
