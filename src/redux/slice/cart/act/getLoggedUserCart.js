import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getLoggedUserCart = createAsyncThunk(
  "cart/getLoggedUserCart",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        "https://ecommerce-back-4.onrender.com/api/cart",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message);
      }
    }
  }
);

export default getLoggedUserCart;
