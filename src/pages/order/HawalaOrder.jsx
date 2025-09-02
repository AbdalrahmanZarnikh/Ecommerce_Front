import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createHawalaOrder } from "../../redux/slice/order/orderSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import loading from "../../utils/loading.json";
import Lottie from "lottie-react";
import { resetCart } from "../../redux/slice/cart/cartSlice";

const HawalaOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const [file, setFile] = useState(null); // ← لتخزين الصورة
  const [add, setAdd] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (!file) {
      toast.error("الرجاء إرفاق صورة رمز الحوالة");
      return;
    }

    const formData = new FormData();
    formData.append("hawalaCode", file);
    formData.append("phone", data.phone);
    formData.append("city", data.city);
    formData.append("details", data.details);
    formData.append("hawalaCompany", data.hawalaCompany);
    setAdd(true);
    const result = await dispatch(
      createHawalaOrder({ data: formData, id: params.cartId })
    );
    setAdd(false);
    if (createHawalaOrder.fulfilled.match(result)) {
      dispatch(resetCart())
      navigate("/");
    }
  };

  return (
    <div className="flex justify-center items-center p-10 bg-blue-400 dark:bg-zinc-800">
      <form
        className="bg-white shadow-2xl h-fit flex justify-center items-start flex-col w-full md:w-1/3 gap-4 rounded-lg p-10"
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <h1 className="mx-auto my-10 text-4xl font-bold">طلب الدفع بالحوالة</h1>

        <label htmlFor="phone">رقم الهاتف</label>
        <input
          type="text"
          id="phone"
          {...register("phone", { required: "الرجاء إدخال رقم الهاتف" })}
          className="w-full p-4 rounded-lg border border-gray-500"
        />
        {errors.phone && (
          <span className="text-red-500">{errors.phone.message}</span>
        )}

        <label htmlFor="city">المدينة</label>
        <input
          type="text"
          id="city"
          {...register("city", { required: "الرجاء إدخال المدينة" })}
          className="w-full p-4 rounded-lg border border-gray-500"
        />
        {errors.city && (
          <span className="text-red-500">{errors.city.message}</span>
        )}

        <label htmlFor="address">تفاصيل العنوان</label>
        <textarea
          className="w-full p-4 rounded-lg border border-gray-500"
          id="address"
          {...register("details", { required: "الرجاء إدخال تفاصيل العنوان" })}
        ></textarea>
        {errors.details && (
          <span className="text-red-500">{errors.details.message}</span>
        )}

        <label htmlFor="company">شركة الحوالة</label>
        <input
          type="text"
          id="company"
          {...register("hawalaCompany", {
            required: "الرجاء إدخال اسم شركة الحوالة",
          })}
          className="w-full p-4 rounded-lg border border-gray-500"
        />
        {errors.hawalaCompany && (
          <span className="text-red-500">{errors.hawalaCompany.message}</span>
        )}

        {/* تحميل الصورة */}
        <label
          htmlFor="hawala-upload"
          className="w-full flex flex-col items-center justify-center border-2 border-dashed border-blue-500 rounded-lg p-6 cursor-pointer bg-white text-blue-600"
        >
          <svg
            className="w-12 h-12 mb-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 15.75V19a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 19v-3.25M7.5 10.5L12 6l4.5 4.5M12 6v12"
            />
          </svg>
          <span className="text-sm mb-2">إرفاق صورة رمز الحوالة</span>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            className="hidden"
            id="hawala-upload"
          />
        </label>

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
            to={`/order/cash/${params.cartId}`}
            className="text-blue-600 hover:text-blue-700"
          >
            دفع عن طريق كاش
          </Link>
        </div>
      </form>
    </div>
  );
};

export default HawalaOrder;
