import { createSlice } from "@reduxjs/toolkit";
import addReview from "./act/addReview";
import updateReview from "./act/updateReview";
import deleteReview from "./act/deleteReview";
import toast from "react-hot-toast";

const initialState = {
  info: null,
  isLoadingReview: "Idle",
  error: null,
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addReview.pending, (state) => {
      state.isLoadingReview = "Pending";
      state.error = null;
    });
    builder.addCase(addReview.fulfilled, (state, action) => {
      state.isLoadingReview = "Success";
      state.error = null;
      state.info = action.payload.data;
    });
    builder.addCase(addReview.rejected, (state, action) => {
      state.isLoadingReview = "Fail";
      state.error = action.payload;
      toast.error(state.error || "Network Error");
    });
    builder.addCase(updateReview.pending, (state) => {
      state.isLoadingReview = "Pending";
      state.error = null;
    });
    builder.addCase(updateReview.fulfilled, (state, action) => {
      state.isLoadingReview = "Success";
      state.error = null;
      state.info = action.payload.data;
    });
    builder.addCase(updateReview.rejected, (state, action) => {
      state.isLoadingReview = "Fail";
      state.error = action.payload;
      toast.error(state.error || "Network Error");
    });
    builder.addCase(deleteReview.pending, (state) => {
      state.isLoadingReview = "Pending";
      state.error = null;
    });
    builder.addCase(deleteReview.fulfilled, (state, action) => {
      state.isLoadingReview = "Success";
      state.error = null;
      state.info = action.payload.data;
    });
    builder.addCase(deleteReview.rejected, (state, action) => {
      state.isLoadingReview = "Fail";
      state.error = action.payload;
      toast.error(state.error || "Network Error");
    });
  },
});
export default reviewSlice.reducer;
export { addReview,updateReview,deleteReview };
