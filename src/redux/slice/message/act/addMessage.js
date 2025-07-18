import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../api/configAxios";
import toast from "react-hot-toast";

const addMessage = createAsyncThunk(
  "messages/addMessage",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "/api/messages",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );



      toast.success(" تمت عملية ارسال الرسالة بنجاح ");

      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message);
      }
    }
  }
);

export default addMessage;
