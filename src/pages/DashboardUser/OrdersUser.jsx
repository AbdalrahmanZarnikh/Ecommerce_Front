import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../redux/slice/orders/orderSlice";
import OrderCard from "../../components/OrderCard/OrderCard";

const OrdersUser = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  const { orders } = useSelector((state) => state.orderSlice);

  return (
    <div className="">
      {orders?.map((ele) => {
        return (
          <OrderCard
            id={ele?._id}
            paymentMethod={ele?.paymentMethod}
            paidAt={ele?.paidAt}
            isPaid={ele?.isPaid}
            cartItems={ele?.cartItems}
            hawalaCode={ele?.hawalaCode}
            hawalaCompany={ele?.hawalaCompany}
            user={ele?.user}
            shippingAddress={ele?.shippingAddress}
            taxPrice={ele?.taxPrice}
            totalOrderPrice={ele?.totalOrderPrice}
          />
        );
      })}
    </div>
  );
};

export default OrdersUser;
