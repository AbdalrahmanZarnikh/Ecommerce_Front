import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createCashOrder } from "../../redux/slice/order/orderSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import { resetCart} from "../../redux/slice/cart/cartSlice"
import loading from "../../utils/loading.json";
import Lottie from "lottie-react";

const CashOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setAdd(true);
    const result = await dispatch(
      createCashOrder({ body: data, id: params.cartId })
    );
    setAdd(false);
    console.log(data, params.cartId);
    if (createCashOrder.fulfilled.match(result)) {
      dispatch(resetCart())
      navigate("/");

    }
  };
  const [add, setAdd] = useState(false);
  return (
    <div className="flex justify-center items-center p-10   bg-blue-400 dark:bg-zinc-800">
      <form
        className="bg-white shadow-2xl h-fit flex justify-center items-start flex-col w-full md:w-1/3 gap-4 rounded-lg p-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="mx-auto my-10 text-4xl font-bold">طلب الدفع النقدي </h1>
        <label htmlFor="phone">رقم الهاتف</label>
        <input
          type="text"
          id="phone"
          {...register("phone", { required: true })}
          className="w-full p-4 rounded-lg border border-gray-500"
        />
        {errors.phone && (
          <span className="text-red-500">{errors.phone.message}</span>
        )}
        <label htmlFor="city">المدينة</label>
        <input
          type="text"
          id="city"
          {...register("city", { required: true })}
          className="w-full p-4 rounded-lg border border-gray-500"
        />
        {errors?.city && (
          <span className="text-red-500"> {errors.city.message} </span>
        )}

        <label htmlFor="address">تفاصيل العنوان</label>
        <textarea
          className="w-full p-4 rounded-lg border border-gray-500"
          name=""
          id="address"
          cols="30"
          rows="10"
          {...register("details", { required: true })}
        ></textarea>
        {errors.details && (
          <span className="text-red-500"> {errors.details.message} </span>
        )}
        <button
          type="submit"
          className="bg-blue-700 w-1/2 text-white p-4 rounded-lg cursor-pointer mx-auto mt-2 hover:bg-blue-400"
        >
          {add ? (
            <div className="w-10 mx-auto">
              <Lottie animationData={loading} />
            </div>
          ) : (
            "طلب"
          )}
        </button>
        <div className="mx-auto">
          <Link
            to={`/order/hawala/${params.cartId}`}
            className="text-blue-600 hover:text-blue-700"
          >
            دفع عن طريق حوالة
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CashOrder;
