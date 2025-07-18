import { useDispatch, useSelector } from "react-redux";
import { FaRegHeart } from "react-icons/fa";
import {
  addProductToWishlist,
  removeProductFromWishlist,
} from "../../redux/slice/wishlist/wishlistSlice";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { memo, useEffect, useState } from "react";
import toast from "react-hot-toast";

const AddToWishlist = memo(({ id, flag }) => {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);

  const handleAddProductToWishlist = () => {
    if (!localStorage.getItem("token")) {
      toast.error("قم بتسجيل الدخول اولا");
      return;
    }


    setClicked(!clicked);
    if (!clicked && !flag) {
      dispatch(addProductToWishlist({ productId: id }));
    } else if (flag || clicked) {
      dispatch(removeProductFromWishlist(id));
    }
  };

  return (
    <button
      onClick={handleAddProductToWishlist}
      className={`${clicked && "rotate-360"} transition-all duration-400`}
    >
      {clicked || flag ? (
        <BsHeartFill size={25} className="hover:text-blue-400 cursor-pointer" />
      ) : (
        <BsHeart size={25} className="hover:text-blue-400 cursor-pointer" />
      )}
    </button>
  );
});

export default AddToWishlist;
