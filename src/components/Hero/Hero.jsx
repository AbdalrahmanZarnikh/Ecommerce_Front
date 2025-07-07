import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate()
  return (
    <div className=" bg-blue-700 px-5 py-16 md:py-24 flex flex-col md:flex-row justify-between items-center gap-8 ">
      <div className="text-white md:w-[70%] w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" >
          اكتشف أحدث المنتجات في متجرك المفضل
        </h1>
        <p className="text-xl text-blue-100 mb-6 flex ">
          مجموعة متنوعة من الإلكترونيات، الملابس، والأكسسوارات بأفضل الأسعار
        </p>
              <div className="flex gap-[15px]">
        <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium cursor-pointer flex items-center justify-center" onClick={
          () => navigate("/products")
        }>تسوق الان</button>
        <button className="bg-transparent px-6 py-3 rounded-lg font-medium text-white border border-white hover:bg-white/10 cursor-pointer justify-center" onClick={()=>{
          navigate("/wishlist")
        }}>استعرض المفضلة</button>
      </div>
      </div>
      <div className="md:w-[65%] w-full">
        <img
          src="images/pexels-photo-3965545.webp"
          className="max-w-full rounded-[10px] transform rotate-[-3deg] hover:rotate-0 transition duration-200"
        ></img>
      </div>
    </div>
  );
};

export default Hero;
