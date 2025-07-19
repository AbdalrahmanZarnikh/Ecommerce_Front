import React, { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedUserWishlist } from "../redux/slice/wishlist/wishlistSlice";
import ProductCard from "../components/ProductCard/ProductCard";
import Lottie from "lottie-react";
import cartEmpty from "../utils/cartEmpty.json"
import { Toaster } from "react-hot-toast";
import ButtonReverse from "../components/ButtonReverse/ButtonReverse";
import Heading from "../components/Heading/Heading";

const Wishlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fn=async ()=>{
      const result=await dispatch(getLoggedUserWishlist());
      if(getLoggedUserWishlist.fulfilled.match(result)){
        console.log("done")
      }
    }
    fn()
  }, [dispatch]);

  

  const { dataWishlist } = useSelector(
    (state) => state.wishlistSlice
  );

  return (
    <Container>
      <Toaster/>
      <ButtonReverse/>
      <Heading>المفضلة</Heading>
      {/* Products */}

      {dataWishlist?.length > 0 ? (
        <div className="grid gird-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-2">
          {dataWishlist?.map((ele, index) => {
            return (
              <ProductCard
                key={ele._id}
                name={ele.title}
                price={ele.price}
                category={ele.category?.name}
                image={ele.image?.url}
                id={ele._id}
                flag={true}
                quantity={ele.quantity}
                brand={ele.brand?.name}
              />
            );
          })}
        </div>
      ) : (
        <div>
          <div className="flex justify-center items-center mt-24">
            <Lottie animationData={cartEmpty} />
          </div>
        </div>
      )}

      {/* Products */}
    </Container>
  );
};

export default Wishlist;
