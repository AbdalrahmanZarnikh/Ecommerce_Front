import React from "react";
import loading from "../../utils/loading.json"
import Lottie from "lottie-react";

const ButtonAuth = ({children,isLoading}) => {
  return (
    <button
      className="bg-blue-700 w-1/2 text-white p-4 rounded-lg cursor-pointer mx-auto mt-2 hover:bg-blue-400 text-sm md:text-lg"
      type="submit"
    >
      {isLoading == "Pending" ? (
        <p className="text-gray-200 flex justify-center items-center gap-2">
          <p> {children}</p>
          <div className="w-10">
            <Lottie animationData={loading} />
          </div>
        </p>
      ) : (
        <p>{children}</p>
      )}
    </button>
  );
};

export default ButtonAuth;
