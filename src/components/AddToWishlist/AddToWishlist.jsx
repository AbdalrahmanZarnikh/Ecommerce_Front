import { useDispatch, useSelector } from "react-redux";
import { FaRegHeart } from "react-icons/fa";
import { addProductToWishlist, removeProductFromWishlist } from "../../redux/slice/wishlist/wishlistSlice";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useEffect, useState } from "react";

const AddToWishlist = ({ id ,flag}) => {
  const dispatch = useDispatch();
  const [clicked,setClicked]=useState(false)

  const handleAddProductToWishlist = () => {
    setClicked(!clicked);
    if(!clicked && !flag){
      dispatch(addProductToWishlist({ productId: id }));
    }
    else if(flag || clicked){
      dispatch(removeProductFromWishlist(id))
    }
  };

  return (
    <button onClick={handleAddProductToWishlist}>
      {clicked || flag? (
        <BsHeartFill size={25} className="hover:text-blue-400 cursor-pointer" />
      ) : (
        <BsHeart size={25} className="hover:text-blue-400 cursor-pointer" />
      )}
    </button>
  );
};

export default AddToWishlist;
