import { useEffect, useState } from "react";
import { BiDownArrowAlt, BiSearch, BiUpArrowAlt } from "react-icons/bi";
import Container from "../components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard/ProductCard";
import Lottie from "lottie-react";

import { getProductsByCategory } from "../redux/slice/product/productSlice";

import loading from "../utils/loading.json";
import notFound from "../utils/notfound.json";
import cartEmpty from "../utils/cartEmpty.json";
import { useNavigate, useParams } from "react-router-dom";
import ButtonReverse from "../components/ButtonReverse/ButtonReverse";

const ProductsBy = ({getThunk}) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [checkEmpty, setCheckEmpty] = useState(false);



  const { isLoading } = useSelector((state) => state.productSlice);

  useEffect(() => {
    const fn = async () => {
      const result = await dispatch(getThunk(id));
      if (getThunk.fulfilled.match(result)) {
        setData(result.payload.data);
        if (result.payload.data.length === 0) {
          setCheckEmpty(true);
        }
      }
    };
    fn();
  }, [id]);
  return (
    <Container>
      <ButtonReverse/>
      <h1 className="text-4xl font-bold">المنتجات</h1>

      <div className=" flex justify-center items-start gap-4">
        {/* Products */}

        {data?.length > 0 ? (
          <div className="grid gird-cols-1 md:grid-cols-4 justify-items-center gap-2">
            {data?.map((ele, index) => {
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

export default ProductsBy;
