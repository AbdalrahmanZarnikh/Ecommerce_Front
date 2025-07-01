import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";



import {  useSelector } from "react-redux";

const SectionCards = ({ title }) => {

  const { data, error, isLoading } = useSelector((state) => state.productSlice);


  return (
    <div>
      {/* Content Info */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold"> {title}</h1>
        <Link className="text-blue-700 hover:text-blue-400">عرض الكل</Link>
      </div>
      {/* Content Info */}

      <div className="grid grid-cols-4 gap-2">
        {data?.map((ele, index) => {
          if (index <4) {
            return (
              <ProductCard  
                key={ele._id}
                name={ele.title}
                price={ele.price}
                category={ele.category.name}
                image={ele.image?.url}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default SectionCards;
