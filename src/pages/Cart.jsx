import React, { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import ProductCart from "../components/ItemCart/ItemCart";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedUserCart } from "../redux/slice/cart/cartSlice";
import ItemCart from "../components/ItemCart/ItemCart";
import { MdDelete } from "react-icons/md";
import clearCart from "../redux/slice/cart/act/clearCart";

const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLoggedUserCart());
  }, [dispatch]);

  const { dataCart } = useSelector((state) => state.cartSlice);

  return (
    <Container>
      <h1 className="text-4xl font-bold">سلة التسوق</h1>

      <div className="flex flex-col md:flex-row  justify-center gap-10 ">
        {/*Products  */}
        <div className="flex-2/3">
          <div className="flex justify-between items-center gap-20">
            <h1 className="mb-4 font-bold text-xl">
              المنتجات ({dataCart.cartItems?.length || 0})
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
                title={ele.product.title}
                category={ele.product.category?.name}
                price={ele.price}
                image={ele.product.image?.url}
                quantity={ele.quantity}
              />
            );
          })}
        </div>
        {/*Products  */}
        {/*Order  */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-20 flex-1/3 h-fit">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">ملخص الطلب</h2>
          </div>
          <div className="p-6 space-y-4">
            <div className=" pt-4 mt-4">
              <div className="flex justify-between  font-bold text-lg">
                <span>الاجمالي :</span>
                <span>{dataCart.totalCartPrice}</span>
              </div>
            </div>
            <button className="w-full mt-6 bg-blue-600 text-white p-4 rounded-lg cursor-pointer hover:bg-blue-400">
              المتابعة للدفع
            </button>
          </div>
        </div>
        {/*Order  */}
      </div>
    </Container>
  );
};

export default Cart;
