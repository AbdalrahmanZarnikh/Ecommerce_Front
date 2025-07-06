import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const clearCart = createAsyncThunk(
    "cart/clearCart",
    async (_, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const token=localStorage.getItem("token")
        const res = await axios.delete(
          `https://ecommerce-back-4.onrender.com/api/cart`,{
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

  

  export default clearCart