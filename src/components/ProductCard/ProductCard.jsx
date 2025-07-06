import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ProductCard = ({name,category,price,image,id}) => {
  const navigate = useNavigate()
  return (
    <div className="max-w-80 flex flex-col items-start gap-4 shadow-xl rounded-xl p-5 "
                      onClick={() => {navigate(`/product/${id}`)
                      console.log(id)}}
>
      <img src={image} alt="ProductImage" className="w-full " />

      <div className="flex justify-between items-end w-full">
        {/* Info Product */}
        <div>
          <h1 className="text-gray-500 text-lg mb-4">{category}</h1>
          <h2 className="text-xl  mb-2"> {name}</h2>
          <p className="font-bold ">{price} $  </p>
        </div>
        {/* Info Product */}

        {/*Buttons  */}
        <div>
          <button className="me-2">
            <FaRegHeart
              size={25}
              className="hover:text-blue-400 cursor-pointer"
            />
          </button>
          <button>
            <FiShoppingCart
              size={25}
              className="hover:text-blue-400 cursor-pointer"
            />
          </button>
        </div>
        {/*Buttons  */}
      </div>
    </div>
  );
};

export default ProductCard;
