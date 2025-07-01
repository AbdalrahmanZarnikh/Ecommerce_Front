import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import Container from "../components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard/ProductCard";
import { getProducts } from "../redux/slice/product/productSlice";

const Products = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const handleCheckboxChange = (e) => {
    const { value, checked, form } = e.target;

    const updatedCategoreis = checked
      ? [...selectedCategories, value]
      : selectedCategories.filter((category) => category !== value);

    setSelectedCategories(updatedCategoreis);

    handleSubmit(updatedCategoreis);
  };

  const { isLoading } = useSelector((state) => state.productSlice);

  const handleSubmit = (categories) => {
    console.log(categories);
  };

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
      <div className="relative ">
        <input
          type="text"
          placeholder="البحث عن المنتجات"
          className="p-4 w-full rounded-lg border "
        />
        <BiSearch className="absolute left-2 top-5 text-gray-500" size={21} />
      </div>

      <div className=" flex justify-center items-start gap-4">
        {/* Filter Section */}
        <div className="shadow-xl p-10 flex-1/3 h-fit rounded-lg ">
          <h1 className="mb-4 font-bold text-2xl">الفلاتر</h1>

          <form>
            <h3 className="font-bold mb-2"> الأقسام </h3>
            {["الكترونيات ", "ملابس ", "أحذية", "مستلزمات منزلية"].map(
              (category) => (
                <label key={category} className="block mb-1 ">
                  <input
                    type="checkbox"
                    value={category}
                    checked={selectedCategories.includes(category)}
                    onChange={handleCheckboxChange}
                    className="ml-2 cursor-pointer"
                  />
                  <span className=" text-lg">{category}</span>
                </label>
              )
            )}
          </form>
        </div>
        {/* Filter Section */}

        {/* Products */}

        {products.length > 0 ? (
          <div className="grid grid-cols-3 gap-2">
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
            {isLoading == "Pending"
              ? "Please Wait "
              : isLoading == "Fail"
              ? "Not Found"
              : ""}
          </div>
        )}

        {/* Products */}
      </div>
    </Container>
  );
};

export default Products;
