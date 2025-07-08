import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getBrands = createAsyncThunk(
    "brands/getAll",
    async (_, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const res = await axios.get(
          "https://ecommerce-back-4.onrender.com/api/brands"
        );

        return res.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          return rejectWithValue(error.response?.data.message);
        }
      }
    }
  );

  

  export default getBrands