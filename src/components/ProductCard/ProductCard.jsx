import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import AddToCart from "../AddToCart/AddToCart";
import AddToWishlist from "../AddToWishlist/AddToWishlist";

const ProductCard = ({ name, category, price, image, id }) => {
  const navigate = useNavigate();


  return (
    <div
      className="max-w-80 flex flex-col items-start gap-4 shadow-xl rounded-xl p-5  cursor-pointer hover:scale-105 transition-all duration-300"
      onClick={() => {
        navigate(`/product/${id}`);
        console.log(id);
      }}
    >
      <img src={image} alt="ProductImage" className="w-full " />

      <div className="flex justify-between items-end w-full">
        {/* Info Product */}
        <div>
          <h1 className="text-gray-500 text-lg mb-4">{category}</h1>
          <h2 className="text-xl  mb-2"> {name}</h2>
          <p className="font-bold ">{price} $ </p>
        </div>
        {/* Info Product */}

        {/*Buttons  */}
        <div className="flex gap-5 items-center">
          <AddToWishlist/>

          <AddToCart id={id} />
        </div>
        {/*Buttons  */}
      </div>
    </div>
  );
};

export default ProductCard;
