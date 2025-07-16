import React, { useEffect, useState } from "react";
import {} from "../redux/slice/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getOneProduct } from "../redux/slice/product/productSlice";
import Lottie from "lottie-react";
import loading from "../utils/loading.json";
import notFound from "../utils/notfound.json";
import StarRating from "../components/StarRating/StarRating";
import Container from "../components/Container/Container";
import ProductImageSlider from "../components/ProductImageSlider/ProductImageSlider";
import { FaRegHeart, FaTruck } from "react-icons/fa";
import Feature from "../components/feature/Feature";
import { AiFillSafetyCertificate } from "react-icons/ai";
import AddToCart from "../components/AddToCart/AddToCart";
import AddToWishlist from "../components/AddToWishlist/AddToWishlist";
import { Toaster } from "react-hot-toast";
import ButtonReverse from "../components/ButtonReverse/ButtonReverse";
const Product = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [quantity, setquantity] = useState(1);
  useEffect(() => {
    dispatch(getOneProduct({ id: params.id }));
  }, [dispatch, params.id]);
  const { data, isLoading } = useSelector((state) => state.productSlice);
  return isLoading == "Success" ? (
    <Container>
      <Toaster />
      <ButtonReverse/>
      {/* links */}
      <div className="flex items-center justify-center text-sm text-gray-500 mb-6">
        <Link className=" hover:text-blue-600" to="/">
          {" "}
          الرئيسية
        </Link>{" "}
        /
        <Link className=" hover:text-blue-600" to="/products">
          المنتجات
        </Link>{" "}
        /<span className="text-gray-900">{data.title}</span>
      </div>
      <div className="flex flex-col md:flex-row gap-[30px]">
        {/* image */}
        {data.images?.length > 0 ? (
          <ProductImageSlider images={data.images} />
        ) : (
          <div className="md:w-1/2 w-full">
            <img src={data.image?.url} alt="productImage" />
          </div>
        )}
        {/* descreptions */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
          <StarRating
            rating={data.ratingsAverage?.toFixed(1)}
            quantity={data.ratingsQuantity}
          />
          {data.priceAfterDiscount ? (
            <div>
              <span className="text-2xl font-bold text-green-500">
                {data.priceAfterDiscount} $
              </span>{" "}
              <span className="line-through text-gray-500">{data.price} $</span>
            </div>
          ) : (
            <h1 className="text-2xl font-bold text-green-500">
              {data.price} $
            </h1>
          )}
          <p className="mb-6">{data.description}</p>
          <div className="flex items-center text-green-600 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-check h-5 w-5 ml-1"
            >
              <path d="M20 6 9 17l-5-5"></path>
            </svg>
            <span>متوفر في المخزون</span>
          </div>
          <div className="flex-col  sm:flex-row sm:gap-0 gap-[20px] flex items-center mb-6">
            <div className="flex items-center ml-4 border border-gray-300 rounded-md overflow-hidden">
              <span className="w-10 h-10 flex justify-center items-center border-x border-gray-300">
                {data.quantity >0 ? data.quantity: 0}
              </span>
            </div>
            {data.quantity < 0 ? (
              <h1 className="text-gray-400">انتهت الكمية</h1>
            ) : (
              <AddToCart id={params.id} />
            )}

            <AddToWishlist id={params.id} />
          </div>
          {/* features */}
          <Feature title="شحن سريع" desc="توصيل خلال 2-5 ايام">
            <FaTruck className="text-blue-600" />
          </Feature>
          <Feature title="ضمان جودة" desc="منتج أصلي 100% مع ضمان لمدة سنة">
            <AiFillSafetyCertificate className="text-blue-600" />
          </Feature>
        </div>
      </div>
      {/* reviews */}
      <div className="">
        <h1 className="text-gray-500 mb-6">
          التقييمات ({data.reviews?.length})
        </h1>
        {data.reviews?.map((review, index) => (
          <div key={index} className="border-b border-gray-200 pb-6">
            <h1>{review.user?.name}</h1>
            <StarRating rating={review?.ratings} />
            <p>{review?.title}</p>
            {/* <p>{timeAgo(review?.createdAt)}</p> */}
          </div>
        ))}
      </div>
    </Container>
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
  );
};

export default Product;
