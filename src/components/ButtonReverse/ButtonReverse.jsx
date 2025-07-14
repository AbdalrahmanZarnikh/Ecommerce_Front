import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ButtonReverse = () => {
    const navigate=useNavigate()
  return (
    <IoMdArrowRoundForward
      className="hover:text-blue-500 cursor-pointer"
      size={25}
      onClick={() => {
        navigate("..");
      }}
    />
  );
};

export default ButtonReverse;
