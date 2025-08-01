import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../api/configAxios";
import toast from "react-hot-toast";

const addAddress = createAsyncThunk(
  "addresses/addAddress",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const token = localStorage.getItem("token");

        const res = await axios.post(`/api/addresses`,data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        toast.success("تمت الاضافة بنجاح")



        return res.data;

    } catch (error) {
      toast.error(error.response.data.message)
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export default addAddress;
