import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const createCashOrder = createAsyncThunk(
    "order/createCashOrder",
async (data , thunkAPI) => {
  
    const { rejectWithValue } = thunkAPI;
    const token = localStorage.getItem("token");
    try {
        const res = await axios.post(
          `https://ecommerce-back-4.onrender.com/api/orders/cash/${data.id}`,data.body,{
          headers: {
            Authorization: `Bearer ${token}`,
          },}
        );
        console.log("redux" ,data.body);
        
        return res.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          return rejectWithValue(error.response?.data.message);
        }
      }
});

export default createCashOrder;