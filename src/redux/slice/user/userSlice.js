import { createSlice } from "@reduxjs/toolkit";

// Thunks

import getLoggedUserData from "./act/getLoggedUserData";
import updatePassword from "./act/updatePassword";
import updateLoggedUserData from "./act/updateLoggedUserData";

import toast from "react-hot-toast";

// State
const initialState = {
  dataUser: {},
  isLoading: "Idle",
  error: null,
  darkMode:false
};

// Slice
const userSlice = createSlice({
  name: "user",
  reducers:{
     toggleMode:(state,action)=>{
       state.darkMode=action.payload;
     }
  },
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getLoggedUserData.pending, (state) => {
      state.isLoading = "Pending";
      state.error = null;
    });
    builder.addCase(getLoggedUserData.fulfilled, (state, action) => {
      state.isLoading = "Success";
      state.error = null;
      state.dataUser = action.payload.data;
    });
    builder.addCase(getLoggedUserData.rejected, (state, action) => {
      state.isLoading = "Fail";
      state.error = action.payload;
      // toast.error(state.error || "Network Error");
    });
        builder.addCase(updateLoggedUserData.pending, (state) => {
      state.isLoading = "Pending";
      state.error = null;
    });
    builder.addCase(updateLoggedUserData.fulfilled, (state, action) => {
      state.isLoading = "Success";
      state.error = null;
      state.dataUser = action.payload.data;
    });
    builder.addCase(updateLoggedUserData.rejected, (state, action) => {
      state.isLoading = "Fail";
      state.error = action.payload;
      toast.error(state.error || "Network Error");
    });
        builder.addCase(updatePassword.pending, (state) => {
      state.isLoading = "Pending";
      state.error = null;
    });
    builder.addCase(updatePassword.fulfilled, (state, action) => {
      state.isLoading = "Success";
      state.error = null;
      state.dataUser = action.payload.data;
    });
    builder.addCase(updatePassword.rejected, (state, action) => {
      state.isLoading = "Fail";
      state.error = action.payload;
      toast.error(state.error || "Network Error");
    });


  },
});

export default userSlice.reducer;
export const {toggleMode}= userSlice.actions;

export { getLoggedUserData,updateLoggedUserData,updatePassword};
