import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({image,name,id}) => {
    const navigate=useNavigate();
  const handleClick =  () => {
    navigate(`/productsbycategory/${id}`);
  };
  return (
    <div
      className="cursor-pointer w-70 h-70 bg-red-400 rounded-xl text-white font-bold text-xl flex justify-center items-center hover:scale-105 transition-all duration-300 mt-4"
      onClick={handleClick}
    >
      <img src={image} className="w-full h-full" alt="" />
      <span className="m-4"> {name}</span>
    </div>
  );
};

export default CategoryCard;
