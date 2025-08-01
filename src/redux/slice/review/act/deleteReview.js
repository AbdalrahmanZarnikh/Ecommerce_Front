import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const deleteReview = createAsyncThunk("review/delete", async (id, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  const token = localStorage.getItem("token");
  try {
    const res = await axios.delete(
      `https://ecommerce-back-4.onrender.com/api/reviews/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success("تم حذف المراجعة بنجاح");
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message);
    }
  }
});
export default deleteReview;
