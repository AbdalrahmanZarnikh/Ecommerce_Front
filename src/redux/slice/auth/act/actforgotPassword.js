import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const forgotPassword = createAsyncThunk(
    "auth/forgotPassword",
    async (data, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const res = await axios.post(
          "https://ecommerce-back-4.onrender.com/api/auth/forgotPassword",data
        );
        return res.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          return rejectWithValue(error.response?.data.message);
        }
      }
    }
  );

  

  export default forgotPassword