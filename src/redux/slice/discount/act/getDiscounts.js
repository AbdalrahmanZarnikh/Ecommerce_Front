import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../api/configAxios";

const getDiscounts = createAsyncThunk(
    "coupons/getAll",
    async (_, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
       const token = localStorage.getItem("token");
      try {
      const res = await axios.get(
        "/api/coupons",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

        return res.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          return rejectWithValue(error.response?.data.message);
        }
      }
    }
  );

  

  export default getDiscounts