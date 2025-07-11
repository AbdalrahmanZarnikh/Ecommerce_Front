import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getAllOrders} from "../../redux/slice/orders/orderSlice"

const OrdersUser = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
     dispatch(getAllOrders());
  },[dispatch])

  
  const {orders} =useSelector((state)=>state.orderSlice) 
  return (
     <div>

      {orders?.map((ele)=>{
        return (
          ele.isPaid
        )
      })}
     </div>
  )
}

export default OrdersUser