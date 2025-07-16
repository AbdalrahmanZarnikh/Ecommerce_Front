import React, { memo } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import AddToCart from "../AddToCart/AddToCart";
import AddToWishlist from "../AddToWishlist/AddToWishlist";

const ProductCard =  memo(({ name, category, price, image,brand, id ,quantity,flag=false}) => {
  const navigate = useNavigate();

 

  return (
    <div
      className="  flex flex-col items-start gap-4 shadow-xl rounded-xl p-5  cursor-pointer hover:scale-105 transition-all duration-300 w-80 md:w-full "

    >
      <img src={image} alt="ProductImage" className=" w-32 h-32 md:w-60 md:h-60 mx-auto  rounded-lg "       onClick={() => {
        navigate(`/product/${id}`);
      }} />

      <div className="flex justify-between items-end ">
        {/* Info Product */}
        <div>
          <h1 className="text-gray-500 text-sm md:text-lg mb-4 ">{category}</h1>
           {brand && 
          <h1 className="text-gray-500 text-sm md:text-lg mb-4 ">{brand}</h1>}
          <h2 className="text-lg md:text-xl  mb-5 w-40 "> {name}</h2>
          <p className="font-bold text-green-500">{price} $ </p>
        </div>
        {/* Info Product */}

        {/*Buttons  */}
        <div className="flex flex-col md:flex-row  gap-3 items-center ">
          {quantity<0 ?<h1 className="text-gray-400">انتهت الكمية</h1> : <AddToCart id={id}/>}

          <AddToWishlist id={id}  flag={flag}/>

        </div>
        {/*Buttons  */}
      </div>
    </div>
  );
})


export default ProductCard;
