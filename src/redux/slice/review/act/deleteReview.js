import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../api/configAxios";
import toast from "react-hot-toast";

const deleteReview = createAsyncThunk("review/delete", async (id, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  const token = localStorage.getItem("token");
  try {
    const res = await axios.delete(
      `/api/reviews/${id}`,
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
    toast.error("حدث خطأ في عملية الحذف");
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message);
    }
  }
});
export default deleteReview;
