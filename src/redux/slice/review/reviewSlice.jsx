import { createSlice } from "@reduxjs/toolkit";
import addReview from "./act/addReview";
import updateReview from "./act/updateReview";
import toast from "react-hot-toast";



const initialState = {
    info:null,
    isLoading: "Idle",
    error: null
};

const reviewSlice = createSlice({
    name:"review", 
    initialState,
    extraReducers: (builder) => {
        builder.addCase(addReview.pending , (state) => {
            state.isLoading = "Pending";
            state.error = null;
        }
        );
        builder.addCase(addReview.fulfilled , (state , action) => {
            state.isLoading = "Success";
            state.error = null;
            state.info = action.payload.data;
        }
        );
        builder.addCase(addReview.rejected , (state , action) => {
            state.isLoading = "Fail";
            state.error = action.payload;
            toast.error(state.error || "Network Error")
        }
        );
        builder.addCase(updateReview.pending , (state) => {
            state.isLoading = "Pending";
            state.error = null;
        }
        );
        builder.addCase(updateReview.fulfilled , (state , action) => {
            state.isLoading = "Success";
            state.error = null;
            state.info = action.payload.data;
        }
        );
        builder.addCase(updateReview.rejected , (state , action) => {
            state.isLoading = "Fail";
            state.error = action.payload;
            toast.error(state.error || "Network Error")
        }
        );
    }
});
export default reviewSlice.reducer;
export {addReview};