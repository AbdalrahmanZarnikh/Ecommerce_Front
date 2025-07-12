import React, { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedUserCart } from "../redux/slice/cart/cartSlice";
import ItemCart from "../components/ItemCart/ItemCart";
import { MdDelete } from "react-icons/md";
import {clearCart,applyCoupon} from "../redux/slice/cart/cartSlice";
import Lottie from "lottie-react";
import cartEmpty from "../utils/cartEmpty.json";
import { Toaster } from "react-hot-toast";

const Cart = () => {
  const dispatch = useDispatch();

  const [couponName,setCouponName]=useState("");
  const { dataCart } = useSelector((state) => state.cartSlice);

  useEffect(() => {
    const fn = async () => {
      const result = await dispatch(getLoggedUserCart());
      if (getLoggedUserCart.fulfilled.match(result)) {
        console.log(result.payload.numberOfCartItems);
        localStorage.setItem("cart", result.payload.numberOfCartItems);
      }
    };
    fn();
  }, [dispatch]);
  const cartItemsLength = dataCart.cartItems?.length || 0;
  const [openCoupon, setOpenCoupon] = useState(false);

  const handleClickCoupon = () => {
    setOpenCoupon(!openCoupon);
  };

  return (
    <Container>
      <Toaster/>
      <h1 className="text-4xl font-bold">سلة التسوق</h1>

      <div className="flex flex-col md:flex-row  justify-center gap-10 ">
        <div className={`${cartItemsLength == 0 ? "hidden" : "flex-2/3"}`}>
          <div className="flex justify-between items-center gap-20">
            <h1 className="mb-4 font-bold text-xl">
              المنتجات ({cartItemsLength})
            </h1>

            <button
              className="cursor-pointer"
              onClick={() => {
                dispatch(clearCart());
              }}
            >
              <MdDelete className="text-3xl text-red-600 hover:text-red-400" />
            </button>
          </div>
          {dataCart?.cartItems?.map((ele) => {
            return (
              <ItemCart
                id={ele._id}
                title={ele.product?.title}
                category={ele.product?.category?.name}
                price={ele.price}
                image={ele.product?.image?.url}
                quantity={ele.quantity}
              />
            );
          })}
        </div>

        {cartItemsLength > 0 ? (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-20 flex-1/3 h-fit">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">ملخص الطلب</h2>
            </div>
            <div className="p-6 space-y-4">
              <div className=" pt-4 mt-4">
                <div className="flex justify-between  font-bold text-lg">
                  <span>الاجمالي :</span>
                  <span
                    className={`text-green-500 ${
                      dataCart.totalPriceAfterDiscount
                        ? "line-through"
                        : ""
                    }`}
                  >
                    {dataCart.totalCartPrice}
                  </span>
                </div>
                {dataCart.totalPriceAfterDiscount && (
                  <div className="flex justify-between   text-lg">
                    <span className="font-bold">الاجمالي بعد الخصم :</span>
                    <span className="text-green-500">{dataCart.totalPriceAfterDiscount || 0}</span>
                  </div>
                )}
              </div>

              <div className={`flex flex-col items-start ${dataCart.totalPriceAfterDiscount && "hidden"}`}>
                <button
                  className={`text-blue-600 text-sm cursor-pointer hover:text-blue-300 transition-all duration-200 ${
                    openCoupon && "hidden"
                  }`}
                  onClick={handleClickCoupon}
                >
                  اضافة كود خصم
                </button>

                {openCoupon && (
                  <div className="flex flex-col gap-2 w-full">
                    <input
                      type="text"
                      placeholder="ادخل كود الخصم"
                      className="p-4 rounded-lg border"
                      onChange={(e)=>{
                        setCouponName(e.target.value)
                      }}
                    />
                    <button
                      className="bg-blue-700 p-4 text-white hover:bg-blue-300  cursor-pointer rounded-lg"
                      onClick={() => {
                        setOpenCoupon(false);
                        dispatch(applyCoupon({coupon:couponName}))
                      }}
                    >
                      ارسال
                    </button>
                  </div>
                )}
              </div>
              <button className="w-full mt-6 bg-blue-600 text-white p-4 rounded-lg cursor-pointer hover:bg-blue-400">
                المتابعة للدفع
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center mt-24">
            <Lottie animationData={cartEmpty} />
          </div>
        )}
      </div>
    </Container>
  );
};

export default Cart;
