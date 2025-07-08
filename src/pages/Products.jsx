import { useEffect, useState } from "react";
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
import cartEmpty from "../utils/cartEmpty.json";

const Products = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [loadingCategory, setLoadingCategory] = useState(false);

  const [checkEmpty, setCheckEmpty] = useState(false);

  const [isChooseCategory, setIsChooseCategory] = useState(false);
  const [chooseCategory, setChooseCategory] = useState("الكل");

  const { isLoading, data } = useSelector((state) => state.productSlice);

  useEffect(() => {
    const fn = async () => {
      setLoadingCategory(true);
      const categories = await dispatch(getCategories());

      if (getCategories.fulfilled.match(categories)) {
        const backCategories = categories.payload.data;
        const allCategories = { _id: "", name: "الكل" };

        setLoadingCategory(false);

        setCategories([...backCategories, allCategories]);
      }
    };

    fn();
  }, []);

  const handleClick = async (ele) => {
    if (ele.name !== "الكل") {
      await dispatch(getProductsByCategory(ele._id));

      if (data.length === 0) {
        setCheckEmpty(true);
      }
    } else {
      await dispatch(getProducts());
      if (data.length === 0) {
        setCheckEmpty(true);
      }
    }
  };

  return (
    <Container>
      <h1 className="text-4xl font-bold">المنتجات</h1>

      {/* Filter New */}
      {/* <div>
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
        </div> */}
      {/* Filter New */}

      <div className="flex flex-row-reverse justify-end items-center gap-5 flex-wrap ">
        {loadingCategory ? (
          <div className="mx-auto mt-40 w-10">
            <Lottie animationData={loading} />
          </div>
        ) : (
          categories?.map((ele) => {
            return (
              <button
                className="p-4 bg-blue-600 rounded-full text-white hover:bg-blue-300 cursor-pointer"
                onClick={() => {
                  handleClick(ele);
                }}
              >
                {ele.name}
              </button>
            );
          })
        )}
      </div>

      <div className=" flex justify-center items-start gap-4">
        {/* Products */}

        {data?.length > 0 ? (
          <div className="grid gird-cols-1 md:grid-cols-4 justify-items-center gap-2">
            {data?.map((ele, index) => {
              console.log(ele._id);
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
              <div className="mx-auto mt-40 w-70">
                <Lottie animationData={notFound} />
              </div>
            ) : checkEmpty ? (
              <div className="flex justify-center items-center mt-24">
                <Lottie animationData={cartEmpty} />
              </div>
            ) : null}
          </div>
        )}

        {/* Products */}
      </div>
    </Container>
  );
};

export default Products;
