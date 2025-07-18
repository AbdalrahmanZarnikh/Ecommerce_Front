import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../api/configAxios";
import toast from "react-hot-toast";

const updateLoggedUserData = createAsyncThunk(
  "user/updateLoggedUserData",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(
        "/api/users/update-me",data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

       toast.success("تمت العملية بنجاح")

      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message);
      }
    }
  }
);

export default updateLoggedUserData;
