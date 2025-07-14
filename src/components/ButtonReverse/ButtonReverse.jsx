import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ButtonReverse = ({to=".."}) => {
    const navigate=useNavigate()
  return (
    <IoMdArrowRoundForward
      className="text-white rounded-md cursor-pointer hover:bg-blue-400 bg-blue-600 w-10 h-10  p-2"
      size={20}
      onClick={() => {
        navigate(to);
      }}
    />
  );
};

export default ButtonReverse;
