import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const updateCartItemQuantity = createAsyncThunk(
    "cart/updateCartItemQuantity",
    async (info, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const token=localStorage.getItem("token")
        const res = await axios.put(
          `https://ecommerce-back-4.onrender.com/api/cart/${info.id}`,{
            quantity:info.quantity
          },{
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

  

  export default updateCartItemQuantity