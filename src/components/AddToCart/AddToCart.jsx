import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/slice/cart/cartSlice";
import { FiShoppingCart } from "react-icons/fi";
import toast from "react-hot-toast";

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
  return (
    <button onClick={handleAddProductToCart} className="flex items-center justify-between gap-2 cursor-pointer text-white px-[16px] py-[8px] bg-blue-600 rounded-lg ml-4 hover:bg-blue-800">
      <FiShoppingCart
        size={25}
      />
      اضافة للسلة
    </button>
  );
};

export default AddToCart;
