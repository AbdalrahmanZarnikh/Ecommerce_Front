import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const updateReview = createAsyncThunk("review/update", async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const token  = localStorage.getItem("token");
    try{
        const res = await axios.put(`https://ecommerce-back-4.onrender.com/api/reviews/${data.id}`,
             {ratings: data.ratings , title: data.title} ,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
            }
        );
        toast.success("تم التعديل بنجاح");

        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message);
        }
    }
});
export default  updateReview