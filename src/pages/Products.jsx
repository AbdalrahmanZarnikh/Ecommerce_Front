import { useEffect, useState } from "react";
import { BiDownArrowAlt, BiSearch, BiUpArrowAlt } from "react-icons/bi";
import Container from "../components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard/ProductCard";
import Lottie from "lottie-react";

import { getCategories } from "../redux/slice/category/categorySlice";

import {
  getProductsByCategory,
  getProducts,
} from "../redux/slice/product/productSlice";

import loading from "../utils/loading.json";
import notFound from "../utils/notfound.json";

const Products = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);

  const [isChooseCategory, setIsChooseCategory] = useState(false);
  const [chooseCategory, setChooseCategory] = useState("الكل");

  useEffect(() => {
    const fn = async () => {
      const categories = await dispatch(getCategories());

      if (getCategories.fulfilled.match(categories)) {
        const backCategories = categories.payload.data;
        const allCategories = { _id: "", name: "الكل" };

        setCategories([...backCategories, allCategories]);
      }
    };

    fn();
  }, []);

  const { isLoading, data } = useSelector((state) => state.productSlice);

  return (
    <Container>
      <h1 className="text-4xl font-bold">المنتجات</h1>
      <div className="flex flex-col md:flex-row justify-center items-center  gap-2">
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
            className=" bg-blue-700 text-white px-4 py-2 rounded-lg flex justify-center items-center gap-2 cursor-pointer mb-2 hover:bg-blue-400"
            onClick={() => {
              setIsChooseCategory(!isChooseCategory);
            }}
          >
            <span>{chooseCategory}</span>

            {isChooseCategory ? <BiUpArrowAlt /> : <BiDownArrowAlt />}
          </button>
          {isChooseCategory && (
            <div className="fixed flex flex-col items-center bg-gray-50 rounded-lg p-4">
              {categories.map((ele) => {
                return (
                  <h1
                    className="hover:bg-blue-700 cursor-pointer hover:text-white px-4 py-2 rounded-lg "
                    onClick={() => {
                      setChooseCategory(ele.name);
                      setIsChooseCategory(false);
                      if (ele.name !== "الكل") {
                        dispatch(getProductsByCategory(ele._id));
                      }
                      else{
                        dispatch(getProducts());
                      }
                    }}
                  >
                    {ele.name}
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

        {data?.length > 0 ? (
          <div className="grid gird-cols-1 md:grid-cols-4 justify-items-center gap-2">
            {data?.map((ele, index) => {
              console.log(ele._id)
              return (
                <ProductCard

                  key={ele._id}
                  name={ele.title}
                  price={ele.price}
                  category={ele.category.name}
                  image={ele.image?.url}
                  id={ele._id}
                />
              );
            })}
          </div>
        ) : (
          <div>
            {isLoading == "Pending" ? (
              <div className="mx-auto mt-40 w-10">
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

        {/* Products */}
      </div>
    </Container>
  );
};

export default Products;
