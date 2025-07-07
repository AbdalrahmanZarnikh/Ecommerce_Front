import React, { useEffect } from "react";
import Container from "../components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux/slice/category/categorySlice";
import { getProductsByCategory } from "../redux/slice/product/productSlice";
import { useNavigate } from "react-router-dom";
import CategoryCard from "../components/CategoryCard/CategoryCard";

const Categories = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const { data } = useSelector((state) => state.categorySlice);



  return (
    <Container>
      <h1 className="text-4xl font-bold">البحث حسب القسم</h1>
      <div className="grid grid-cols-3 gap-5">
      {data?.map((ele) => {
        return (
         <CategoryCard name={ele.name} image={ele.image?.url} id={ele._id}/>
        )
      })}
      </div>
    </Container>
  );
};

export default Categories;
