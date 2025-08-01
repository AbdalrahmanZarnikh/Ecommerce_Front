import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../api/configAxios";

const getOneCategory = createAsyncThunk(
    "products/getOne",
    async (data, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const res = await axios.get(
          `/api/categories/${data.id}`
        );
        return res.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          return rejectWithValue(error.response?.data.message);
        }
      }
    }
  );

  

  export default getOneCategory