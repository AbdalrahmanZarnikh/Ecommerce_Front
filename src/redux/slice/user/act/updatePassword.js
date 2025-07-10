import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const updatePassword = createAsyncThunk(
  "user/updatePassword",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(
        "https://ecommerce-back-4.onrender.com/api/users/update-mypassword",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("تمت العملية بنجاح");

      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message);
      }
    }
  }
);

export default updatePassword;
