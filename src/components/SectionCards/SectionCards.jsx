import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

import { useDispatch, useSelector } from "react-redux";
import { memo, useEffect, useState } from "react";
import { getProducts } from "../../redux/slice/product/productSlice";
import Lottie from "lottie-react";

import loading from "../../utils/loading.json";
import notFound from "../../utils/notfound.json";
import CategoryCard from "../CategoryCard/CategoryCard";
import Heading from "../Heading/Heading";

const SectionCards = memo(({ title, getThunk, to, slice }) => {
  const dispatch = useDispatch();

  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState("");

  useEffect(() => {
    const fn = async () => {
      setIsLoading("Pending");
      const result = await dispatch(getThunk());
      if (getThunk.fulfilled.match(result)) {
        setRecords(result.payload.data);
        setIsLoading("");
      } else if (getThunk.rejected.match(result)) {
        setIsLoading("Fail");
      }
    };

    fn();
  }, []);

  return (
    <div>
      {/* Content Info */}
      <div className="flex justify-between items-center">
        <Heading> {title}</Heading>
        <Link className="text-blue-700 hover:text-blue-400" to={`/${to}`}>
          عرض الكل
        </Link>
      </div>
      {/* Content Info */}

      {records?.length > 0 ? (
        <div className="grid gird-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-2">
          {records?.map((ele, index) => {
            if (index < 3 && to == "products") {
              return (
                <ProductCard
                  key={ele._id}
                  name={ele.title}
                  price={ele.price}
                  category={ele.category.name}
                  image={ele.image?.url}
                  id={ele._id}
                  quantity={ele.quantity}
                  brand={ele.brand?.name}
                />
              );
            } else if (index < 3 && (to == "categories" || to == "brands")) {
              return (
                <CategoryCard
                  name={ele.name}
                  id={ele._id}
                  image={ele?.image.url}
                  to={to}
                />
              );
            }
          })}
        </div>
      ) : (
        <div>
          {isLoading == "Pending" ? (
            <div className="mx-auto mt-20 w-10 ">
              <Lottie animationData={loading} />
            </div>
          ) : isLoading == "Fail" ? (
            <div className="mx-auto mt-40 w-20">
              <Lottie animationData={notFound} />
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
});

export default SectionCards;
