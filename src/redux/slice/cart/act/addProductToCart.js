import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const addProductToCart = createAsyncThunk(
  "cart/addProductToCart",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "https://ecommerce-back-4.onrender.com/api/cart",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(" تمت اضافة المنتج الى السلة بنجاح");

      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message);
      }
    }
  }
);

export default addProductToCart;
