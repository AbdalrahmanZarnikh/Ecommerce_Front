import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";





const signup = createAsyncThunk(
    "auth/signup",
    async (data, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const res = await axios.post(
          "https://ecommerce-back-4.onrender.com/api/auth/signup",data,   {
          headers: {
            'Content-Type': 'application/json',
          },
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

  

  export default signup