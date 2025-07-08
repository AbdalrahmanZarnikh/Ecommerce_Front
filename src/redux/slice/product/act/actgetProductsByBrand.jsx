import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getProductsByBrand = createAsyncThunk(
    "products/getByBrand",
    async (brand, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const res = await axios.get(
          `https://ecommerce-back-4.onrender.com/api/products?brand=${brand}`
        );


        return res.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          return rejectWithValue(error.response?.data.message);
        }
      }
    }
  );

  

  export default getProductsByBrand