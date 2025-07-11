import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const getAllOrders = createAsyncThunk(
  "orders/all",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const token = localStorage.getItem("token");

        const res = await axios.get(`https://ecommerce-back-4.onrender.com/api/orders`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });



        return res.data;

    } catch (error) {
      toast.error(error.response.data.message)
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export default getAllOrders;
