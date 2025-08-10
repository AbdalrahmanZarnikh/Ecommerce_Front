import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../api/configAxios";
import toast from "react-hot-toast";

const updateReview = createAsyncThunk(
  "review/update",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const token = localStorage.getItem("token");
    try {
      const res = await axios.put(
        `/api/reviews/${data.id}`,
        { ratings: data.ratings, title: data.title },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("تم التعديل بنجاح");

      return res.data;
    } catch (error) {
    toast.error("حدث خطأ في عملية التعديل");
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message);
      }
    }
  }
);
export default updateReview;
