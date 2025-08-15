import { useDispatch } from "react-redux";
import {
  addProductToWishlist,
  removeProductFromWishlist,
} from "../../redux/slice/wishlist/wishlistSlice";
import { memo, useState } from "react";
import toast from "react-hot-toast";

import { Heart } from "lucide-react";

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
        <Heart
          size={30}
          color="red"
          fill="red"
          className=" cursor-pointer"
        />
      ) : (
        <Heart
          size={30}
          color="red"
          className=" cursor-pointer"
        />
      )}
    </button>
  );
});

export default AddToWishlist;
