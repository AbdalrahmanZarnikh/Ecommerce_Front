import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeProductFromWishlist = createAsyncThunk(
    "cart/removeProductFromWishlist",
    async (id, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const token=localStorage.getItem("token")
        const res = await axios.delete(
          `https://ecommerce-back-4.onrender.com/api/wishlists/${id}`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
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

  

  export default removeProductFromWishlist