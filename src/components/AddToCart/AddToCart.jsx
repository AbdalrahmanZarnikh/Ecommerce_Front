import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../redux/slice/cart/cartSlice";
import { FiShoppingCart } from "react-icons/fi";
import toast from "react-hot-toast";
import Lottie from "lottie-react";
import loading from "../../utils/loading.json"

const AddToCart = ({id}) => {
    const dispatch=useDispatch();
    const handleAddProductToCart=()=>{
      console.log("clicked")
      if(!localStorage.getItem("token")){
        toast.error("قم بتسجيل الدخول اولا")
        return ;
      }
         dispatch(addProductToCart({productId:id}));
    }

     const {isLoading} =useSelector((state)=>state.cartSlice)
  return (
    <button onClick={handleAddProductToCart} className="flex items-center justify-between gap-2 cursor-pointer text-white px-[16px] py-[8px] bg-blue-600 rounded-lg ml-4 hover:bg-blue-800 w-40">
       {isLoading==="Pending"?<div className="w-10 mx-auto "><Lottie animationData={loading}/></div>:<>      <FiShoppingCart
        size={25}
      />
      اضافة للسلة</>}
    </button>
  );
};

export default AddToCart;
