import { memo } from "react";
import { useNavigate } from "react-router-dom";

const CategoryCard = memo(({ image, name, id, to }) => {
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer w-64 h-64 relative rounded-2xl overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out mt-6"
      onClick={() => {
        navigate(`/productsby/${to}/${id}`);
      }}
    >
      <img1
        src={image}
        className="absolute inset-0 w-full h-full object-cover brightness-50 transition-all duration-300"
        alt={name}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white font-semibold text-xl text-center px-2">{name}</span>
      </div>
    </div>
  );
});

export default CategoryCard;
