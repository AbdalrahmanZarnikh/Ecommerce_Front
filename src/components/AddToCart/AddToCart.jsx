import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/slice/cart/cartSlice";
import { FiShoppingCart } from "react-icons/fi";
import toast from "react-hot-toast";

const AddToCart = ({id}) => {
    const dispatch=useDispatch();
    const handleAddProductToCart=()=>{
      if(!localStorage.getItem("token")){
        toast.error("قم بتسجيل الدخول اولا")
        return ;
      }
         dispatch(addProductToCart({productId:id}));
    }
  return (
    <button onClick={handleAddProductToCart}>
      <FiShoppingCart
        size={25}
        className="hover:text-blue-400 cursor-pointer"
      />
    </button>
  );
};

export default AddToCart;
