import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../api/configAxios";
import toast from "react-hot-toast";

const clearCart = createAsyncThunk("cart/clearCart", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const token = localStorage.getItem("token");
    const res = await axios.delete(
      `/api/cart`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    toast.success("تمت ازالة المنتجات من السلة بنجاح")

    return res.data;
  } catch (error) {
    toast.error(error.response.data.message);
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message);
    }
  }
});

export default clearCart;
