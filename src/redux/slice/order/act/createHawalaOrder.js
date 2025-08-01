import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const createHawalaOrder = createAsyncThunk(
  "order/createHawalaOrder",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        `https://ecommerce-back-4.onrender.com/api/orders/hawala/${data.id}`,
        data.data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("تمت عملية الطلب بنجاح");
      return res.data.data;
    } catch (error) {
      toast.error(error.response?.data.message);
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message);
      }
    }
  }
);

export default createHawalaOrder;
