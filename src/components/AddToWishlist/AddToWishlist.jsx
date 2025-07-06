import { useDispatch } from "react-redux";
import { FaRegHeart } from "react-icons/fa";

const AddToWishlist = () => {
    const dispatch=useDispatch();
    const handleAddProductToWishlist=()=>{
        //  dispatch(addProductToCart({productId:id}));
    }
  return (
    <button onClick={handleAddProductToWishlist}>
      <FaRegHeart
        size={25}
        className="hover:text-blue-400 cursor-pointer"
      />
    </button>
  );
};

export default AddToWishlist;
