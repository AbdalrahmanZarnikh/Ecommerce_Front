import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/slice/cart/cartSlice";
import { FiShoppingCart } from "react-icons/fi";
import toast from "react-hot-toast";
import Lottie from "lottie-react";
import loading from "../../utils/loading.json"
import { memo, useState } from "react";

const AddToCart = memo(({id}) => {
    const dispatch=useDispatch();

    const [loadingAdd,setLaodingAdd]=useState(false);

    const handleAddProductToCart=async ()=>{
      if(!localStorage.getItem("token")){
        toast.error("قم بتسجيل الدخول اولا")
        return ;
      }
         setLaodingAdd(true);
         await dispatch(addProductToCart({productId:id}));
         setLaodingAdd(false);
    }

  return (
    <button onClick={handleAddProductToCart} className="flex items-center justify-between gap-2 cursor-pointer text-white px-[16px] py-[8px] bg-blue-600 rounded-lg ml-4 hover:bg-blue-800 w-40">
       {loadingAdd===true?<div className="w-10 mx-auto "><Lottie animationData={loading}/></div>:<>      <FiShoppingCart
        size={25}
      />
      اضافة للسلة</>}
    </button>
  );
})

export default AddToCart;
