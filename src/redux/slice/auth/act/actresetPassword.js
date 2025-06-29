import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const resetPassword = createAsyncThunk(
    "auth/resetPassword",
    async (data, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const res = await axios.put(
          "https://ecommerce-back-4.onrender.com/api/auth/resetPassword",data
        );
        return res.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          return rejectWithValue(error.response?.data.message);
        }
      }
    }
  );

  

  export default resetPassword