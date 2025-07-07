import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getProductsBySearch = createAsyncThunk(
    "products/getProductsBySearch",
    async (search, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const res = await axios.get(
          `https://ecommerce-back-4.onrender.com/api/products?keyword=${search}`
        );

        console.log(search)

        return res.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          return rejectWithValue(error.response?.data.message);
        }
      }
    }
  );

  

  export default getProductsBySearch