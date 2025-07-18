import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../api/configAxios";
import toast from "react-hot-toast";

const getLoggedUserData = createAsyncThunk(
  "user/getLoggedUserData",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        "/api/users/get-me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

    
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message);
      }
    }
  }
);

export default getLoggedUserData;
