import { useEffect, useState } from "react";
import {
  BiDownArrow,
  BiDownArrowAlt,
  BiDownArrowCircle,
  BiSearch,
  BiUpArrowAlt,
} from "react-icons/bi";
import Container from "../components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard/ProductCard";
import { getProducts } from "../redux/slice/product/productSlice";
import Lottie from "lottie-react";

import loading from "../utils/loading.json";
import notFound from "../utils/notfound.json";

const Products = () => {
  const [products, setProducts] = useState([]);

  // test

  const [isChooseCategory, setIsChooseCategory] = useState(false);
  const [chooseCategory, setChooseCategory] = useState("ملابس");

  // test


  const { isLoading } = useSelector((state) => state.productSlice);


  const dispatch = useDispatch();

  useEffect(() => {
    const fn = async () => {
      const result = await dispatch(getProducts());

      if (getProducts.fulfilled.match(result)) {
        setProducts(result.payload.data);
      }
    };

    fn();
  }, [products]);

  return (
    <Container>
      <h1 className="text-4xl font-bold">المنتجات</h1>
      <div className="flex  justify-center items-center  gap-2">
        {/* Search  */}
        <div className="relative flex-2/3">
          <input
            type="text"
            placeholder="البحث عن المنتجات"
            className="p-4 w-full rounded-lg border "
          />
          <BiSearch className="absolute left-2 top-5 text-gray-500" size={21} />
        </div>
        {/* Search  */}

        {/* Filter New */}
        <div>
          <button
            className=" bg-blue-700 text-white px-4 py-2 rounded-lg flex justify-center items-center gap-2 cursor-pointer mb-2"
            onClick={() => {
              setIsChooseCategory(!isChooseCategory);
            }}
          >
            <span>{chooseCategory}</span> {isChooseCategory ?<BiUpArrowAlt/> :<BiDownArrowAlt/>}
          </button>
          {isChooseCategory && (
            <div className="fixed flex flex-col items-center bg-gray-300 rounded-lg p-4">
              {["ألبسة", "الكترونيات", "أحذية", "مستلزمات منزلية"].map((ele) => {
                return (
                  <h1
                    className="hover:bg-blue-700 cursor-pointer hover:text-white px-4 py-2 rounded-lg "
                    onClick={() => {
                      setChooseCategory(ele);
                      setIsChooseCategory(false)
                    }}
                  >
                    {ele}
                  </h1>
                );
              })}
            </div>
          )}
        </div>
        {/* Filter New */}
      </div>

      <div className=" flex justify-center items-start gap-4">
        {/* Products */}

        {products.length > 0 ? (
          <div className="grid gird-cols-1 md:grid-cols-4 justify-items-center gap-2">
            {products?.map((ele, index) => {
              return (
                <ProductCard
                  key={ele._id}
                  name={ele.title}
                  price={ele.price}
                  category={ele.category.name}
                  image={ele.image?.url}
                />
              );
            })}
          </div>
        ) : (
          <div className="flex-2/3">
            {isLoading == "Pending" ? (
              <div style={{ width: "10%" }} className="mx-auto mt-40">
                <Lottie animationData={loading} />
              </div>
            ) : isLoading == "Fail" ? (
              <div style={{ width: "30%" }} className="mx-auto mt-40">
                <Lottie animationData={notFound} />
              </div>
            ) : (
              ""
            )}
          </div>
        )}

        {/* Products */}
      </div>
    </Container>
  );
};

export default Products;
