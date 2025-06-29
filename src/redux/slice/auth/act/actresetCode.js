import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const resetCode = createAsyncThunk(
    "auth/verifyResetCode",
    async (data, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const res = await axios.post(
          "https://ecommerce-back-4.onrender.com/api/auth/verifyResetCode",data
        );
        return res.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          return rejectWithValue(error.response?.data.message);
        }
      }
    }
  );

  

  export default resetCode