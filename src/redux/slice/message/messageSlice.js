import { createSlice } from "@reduxjs/toolkit";

// Thunks

import addMessage from "./act/addMessage";

import toast from "react-hot-toast";

// State
const initialState = {
  data: [],
  isLoading: "Idle",
  error: null,
};

// Slice
const messageSlice = createSlice({
  name: "message",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addMessage.pending, (state) => {
      state.isLoading = "Pending";
      state.error = null;
    });
    builder.addCase(addMessage.fulfilled, (state, action) => {
      state.isLoading = "Success";
      state.error = null;
      state.data = action.payload.data;
    });
    builder.addCase(addMessage.rejected, (state, action) => {
      state.isLoading = "Fail";
      state.error = action.payload;
      toast.error(state.error || "Network Error");
    });
  },
});

export default messageSlice.reducer;

export { addMessage };
