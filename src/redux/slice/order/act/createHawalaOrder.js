import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const createHawalaOrder = createAsyncThunk(
    "order/createHawalaOrder",
async (data , thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const token = localStorage.getItem("token");
    try {
        const res = await axios.post(
          `https://ecommerce-back-4.onrender.com/api/orders/hawala/${data.id}`,data.data,{
          headers: {
            'Content-Type': 'multipart/form-data',
             Authorization: `Bearer ${token}`,

          },}
        );
        return res.data.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          return rejectWithValue(error.response?.data.message);
        }
      }
});

export default createHawalaOrder;