import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const addReview = createAsyncThunk(
    "review/add", async (data, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        const token  = localStorage.getItem("token");
        try{
            const res = await axios.post(`https://ecommerce-back-4.onrender.com/api/reviews`, data ,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                }
            );
            toast.success("تمت اضافة المراجعة بنجاح");
            return res.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data.message);
            }
        }
    });
    export default addReview