import React, { memo } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import AddToCart from "../AddToCart/AddToCart";
import AddToWishlist from "../AddToWishlist/AddToWishlist";

const ProductCard =  memo(({ name, category, price, image, id ,quantity,flag=false}) => {
  const navigate = useNavigate();

 

  return (
    <div
      className="  flex flex-col items-start gap-4 shadow-xl rounded-xl p-5  cursor-pointer hover:scale-105 transition-all duration-300 "

    >
      <img src={image} alt="ProductImage" className="w-60 h-60 mx-auto  rounded-lg "       onClick={() => {
        navigate(`/product/${id}`);
        console.log(id);
      }} />

      <div className="flex justify-between items-end w-full">
        {/* Info Product */}
        <div>
          <h1 className="text-gray-500 text-lg mb-4 ">{category}</h1>
          <h2 className="text-xl  mb-5 w-40 "> {name}</h2>
          <p className="font-bold text-green-500">{price} $ </p>
        </div>
        {/* Info Product */}

        {/*Buttons  */}
        <div className="flex   gap-3 items-center ">
          {quantity<0 ?<h1 className="text-gray-400">انتهت الكمية</h1> : <AddToCart id={id}/>}

          <AddToWishlist id={id}  flag={flag}/>

        </div>
        {/*Buttons  */}
      </div>
    </div>
  );
})


export default ProductCard;
