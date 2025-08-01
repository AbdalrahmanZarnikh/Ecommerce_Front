import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../api/configAxios";
import toast from "react-hot-toast";

const removeProductFromWishlist = createAsyncThunk(
    "cart/removeProductFromWishlist",
    async (id, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const token=localStorage.getItem("token")
        const res = await axios.delete(
          `/api/wishlists/${id}`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
          }
        );


        toast.success("تمت ازالة المنتح من المفضلة")

        return res.data;
      } catch (error) {
        toast.error(error.response.data.message);
        if (axios.isAxiosError(error)) {
          return rejectWithValue(error.response?.data.message);
        }
      }
    }
  );

  

  export default removeProductFromWishlist