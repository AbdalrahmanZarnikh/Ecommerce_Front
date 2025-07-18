import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../api/configAxios";

const getLoggedUserWishlist = createAsyncThunk(
    "cart/getLoggedUserWishlist",
    async (_, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const token=localStorage.getItem("token")
        const res = await axios.get(
          "/api/wishlists",{
            headers:{
                Authorization:`Bearer ${token}`
            }
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

  

  export default getLoggedUserWishlist