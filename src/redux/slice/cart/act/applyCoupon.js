import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const applyCoupon = createAsyncThunk(
    "cart/applyCoupon",
    async (data, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const token=localStorage.getItem("token")
        const res = await axios.put(
          "https://ecommerce-back-4.onrender.com/api/cart/apply-coupon",data,{
            headers:{
                Authorization:`Bearer ${token}`
            }
          }
        );


        return res.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          return rejectWithValue(error.response?.data.message);
        }
      }
    }
  );

  

  export default applyCoupon