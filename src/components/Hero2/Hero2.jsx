import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

const Hero2 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat px-5 py-16 md:py-24 flex flex-col-reverse md:flex-row justify-between items-center gap-8 overflow-hidde "
      style={{
        backgroundImage: 'url("/images/test.avif")', 
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div
        className="text-white md:w-[70%] w-full relative z-10 drop-shadow-md"
        data-aos="fade-up"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          اكتشف أحدث المنتجات في متجرك المفضل
        </h1>
        <p className="text-xl text-white mb-6">
          مجموعة متنوعة من الإلكترونيات، الملابس، والأكسسوارات بأفضل الأسعار
        </p>
        <div className="flex gap-4">
          <button
            className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium cursor-pointer flex items-center justify-center transition-transform hover:scale-105 text-sm md:text-xl"
            onClick={() => navigate("/products")}
          >
            <FaShoppingCart className="mr-2" />
            تسوق الآن
          </button>
          <button
            className="bg-transparent px-6 py-3 rounded-lg font-medium text-white border border-white hover:bg-white/10 cursor-pointer flex items-center justify-center transition-transform hover:scale-105 text-sm md:text-xl"
            onClick={() => {
              if (!localStorage.getItem("token")) {
                toast.error("قم بتسجيل الدخول أولاً");
                return;
              }
              toast.success("مرحبًا بك في قائمتك المفضلة!");
              navigate("/wishlist");
            }}
          >
            <FaHeart className="mr-2" />
            استعرض المفضلة
          </button>
        </div>
      </div>

      <div className="md:w-[65%] w-full relative z-10" data-aos="zoom-in-up">
        <img
          src="/images/pexels-photo-3965545.webp"
          alt="منتجات متنوعة بأفضل الأسعار"
          className="max-w-full rounded-[10px] transform hover:scale-105 transition-transform duration-300 rotate-[-3deg] hover:rotate-0"
        />
      </div>
    </div>
  );
};

export default Hero2;
