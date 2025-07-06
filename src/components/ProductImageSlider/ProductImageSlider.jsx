import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProductImageSlider = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative w-full max-w-2xl">
      {/*big image*/}
      <div className="relative w-full h-[380px] mb-4 shadow-sm rounded-lg overflow-hidden">
        <img
          src={images[activeIndex].url}
          alt={`product-${activeIndex}`}
          className="w-full h-full object-contain"
        />

        {/*  prev */}
        <button
          onClick={handlePrev}
          className="cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 bg-white text-black rounded-full p-2 shadow hover:scale-105 transition"
        >
          <FaChevronLeft size={20} />
        </button>

        {/* next  */}
        <button
          onClick={handleNext}
          className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black rounded-full p-2 shadow hover:scale-105 transition"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      {/* thumbnails  */}
      <div className="flex gap-2 overflow-x-auto">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`cursor-pointer p-1 rounded border-2 transition ${
              index === activeIndex ? "border-blue-500" : "border-transparent"
            }`}
          >
            <img
              src={img.url}
              alt={`thumb-${index}`}
              className="w-20 h-20 object-contain rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImageSlider;
