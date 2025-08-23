import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import {
  addAddress,
  getLoggedUserAddress,
} from "../../redux/slice/address/addressSlice";

import loading from "../../utils/loading.json";
import Lottie from "lottie-react";
import AddressCard from "../../components/AddressCard/AddressCard";

const Addresses = () => {
  const dispatch = useDispatch();

  const [isAdd, setIsAdd] = useState(false);

  // Hook-Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    dispatch(getLoggedUserAddress());
  }, [dispatch]);

  const { data, isLoadingAdd,isLoading } = useSelector(
    (state) => state.addressSlice
  );

  // Function To Handle Submit
  const onSubmit = (data) => {
    const fn = async () => {
      const result = await dispatch(addAddress(data));
      if (addAddress.fulfilled.match(result)) {
        setIsAdd(false);
      }
    };
    fn();
  };


  return (
  <div >
    {isLoading=="Pending" ? 
    <div className="w-10 flex justify-center items-center h-screen mx-auto"> <Lottie animationData={loading}/></div>:    <div>
      <button
        className={` bg-orange-700 p-4 text-white cursor-pointer hover:bg-blue-300 rounded-lg mb-2 `}
        onClick={() => {
          setIsAdd(!isAdd);
        }}
      >
        {isAdd ? "x" : "اضافة عنوان"}
      </button>
      <form
        className={`student-form-form flex flex-col mb-10`}
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Form Fields */}

        <div className={`form-group `}>
          <label htmlFor="Phone" className={`${!isAdd && "hidden"} dark:text-white`}>
            رقم الموبايل
          </label>
          <input
            id="Phone"
            type="text"
            placeholder="ادخل رقم الموبايل ..."
            {...register("phone")}
            className={`${!isAdd && "hidden"}`}
          />
          {errors.phone && (
            <span className="text-red-400">{errors.phone.message}</span>
          )}
        </div>

        <div className={`form-group`}>
          <label htmlFor="City" className={`${!isAdd && "hidden"} dark:text-white`}>
            المدينة
          </label>
          <input
            id="City"
            type="text"
            placeholder="ادخل المدينة ..."
            {...register("city")}
            className={`${!isAdd && "hidden"}`}
          />
          {errors.city && (
            <span className="text-red-400">{errors.city.message}</span>
          )}
        </div>

        <div className={`form-group`}>
          <label htmlFor="Details" className={`${!isAdd && "hidden"} dark:text-white`}>
            تفاصيل
          </label>
          <input
            id="Details"
            type="text"
            placeholder="ادخل  تفاصيل عن موقعك  ..."
            {...register("details")}
            className={`${!isAdd && "hidden"}`}
          />
          {errors.details && (
            <span className="text-red-400">{errors.details.message}</span>
          )}
        </div>

        <button
          className={`bg-orange-700 p-4 text-white cursor-pointer hover:bg-orange-300 rounded-lg flex justify-center items-center gap-6 ${
            !isAdd && "hidden"
          }`}
          type="submit"
        >
          اضافة{" "}
          {isLoadingAdd == "Pending" ? (
            <div className="w-10">
              <Lottie animationData={loading} />
            </div>
          ) : (
            ""
          )}
        </button>
      </form>

      {/* show addresses */}
      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center  gap-5 ">
        {data?.map((ele, index) => {
          return (
            <AddressCard id={ele._id} index={index} city={ele.city} phone={ele.phone} details={ele.details}/>
          );
        })}
      </div>
      {/* show addresses */}
    </div>}
  </div>
  );
};

export default Addresses;
