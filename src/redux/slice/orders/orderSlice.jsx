import { createSlice } from "@reduxjs/toolkit";

// Thunks
import getAllOrders from "./act/getAllOrders";




// State
const initialState = {
  orders: [],
  isLoading: "Idle",
  error: null,
};

// Slice
const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllOrders.pending, (state) => {
      state.isLoading = "Pending";
      state.error = null;
    });
    builder.addCase(getAllOrders.fulfilled, (state, action) => {
      state.isLoading = "Success";
      state.error = null;
      state.orders = action.payload.data;
    });
    builder.addCase(getAllOrders.rejected, (state, action) => {
      state.isLoading = "Fail";
      state.error = action.payload ;
    });




  },
});

export default orderSlice.reducer;

export { getAllOrders };
