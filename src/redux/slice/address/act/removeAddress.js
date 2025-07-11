import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const removeAddress = createAsyncThunk(
  "addresses/removeAddress",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const token = localStorage.getItem("token");

        const res = await axios.delete(`https://ecommerce-back-4.onrender.com/api/addresses/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });



        toast.success("تمت الازالة بنجاح")
        return res.data;

    } catch (error) {
      toast.error(error.response.data.message)
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export default removeAddress;
