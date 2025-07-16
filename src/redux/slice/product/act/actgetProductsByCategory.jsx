import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getProductsByCategory = createAsyncThunk(
    "products/getByCategory",
    async (category, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const res = await axios.get(
          `https://ecommerce-back-4.onrender.com/api/products?category=${category}`
        );


        return res.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          return rejectWithValue(error.response?.data.message);
        }
      }
    }
  );

  

  export default getProductsByCategory