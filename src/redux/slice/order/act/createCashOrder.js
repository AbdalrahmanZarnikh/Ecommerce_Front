import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../api/configAxios";
import toast from "react-hot-toast";

const createCashOrder = createAsyncThunk(
  "order/createCashOrder",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        `/api/orders/cash/${data.id}`,
        data.body,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("redux", data.body);
      toast.success("تمت عملية الطلب بنجاح");

      return res.data;
    } catch (error) {
      toast.error(error.response?.data.message);
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message);
      }
    }
  }
);

export default createCashOrder;
