import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../api/configAxios";
import toast from "react-hot-toast";

const addReview = createAsyncThunk(
    "review/add", async (data, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        const token  = localStorage.getItem("token");
        try{
            const res = await axios.post(`/api/reviews`, data ,
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
            toast.error(error.response.data.errors[0].msg)
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data.message);
            }
        }
    });
    export default addReview