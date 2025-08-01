import { createSlice } from "@reduxjs/toolkit";

import createCashOrder from "./act/createCashOrder";    
import createHawalaOrder from "./act/createHawalaOrder";
import toast from "react-hot-toast";

const initialState = {
    info:null,
    isLoading: "Idle",
    error: null
};
const orderSlice = createSlice({name:"order",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(createCashOrder.pending, (state) => {
            state.isLoading = "Pending";
            state.error = null;
        });
        builder.addCase(createCashOrder.fulfilled, (state, action) => {
            state.isLoading = "Success";
            state.error = null;
            state.info=action.payload.data;
        });
        builder.addCase(createCashOrder.rejected, (state,action) => {
            state.isLoading = "Fail";
            state.error = action.payload;
            toast.error(state.error || "Network Error")
        });
        builder.addCase(createHawalaOrder.pending, (state) => {
            state.isLoading = "Pending";
            state.error = null;
        });
        builder.addCase(createHawalaOrder.fulfilled, (state, action) => {
            state.isLoading = "Success";
            state.error = null;
            state.info=action.payload.data;
        });
        builder.addCase(createHawalaOrder.rejected, (state,action) => {
            state.isLoading = "Fail";
            state.error = action.payload;
            toast.error(state.error || "Network Error")
        });

    }

});

export default orderSlice.reducer;
export {createCashOrder,createHawalaOrder} ;