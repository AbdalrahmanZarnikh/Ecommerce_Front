import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import {addAddress,removeAddress,getLoggedUserAddress} from "../../redux/slice/address/addressSlice"

import loading from "../../utils/loading.json"
import Lottie from "lottie-react";

const Addresses = () => {
  const dispatch = useDispatch();

  const [isAdd, setIsAdd] = useState(false);

  // Hook-Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(()=>{
       dispatch(getLoggedUserAddress());
  },[dispatch])

  const {data,isLoading} =useSelector((state)=>state.addressSlice)

  // Function To Handle Submit
  const onSubmit = (data) => {
    console.log(data);

    dispatch(addAddress(data));
  };


  const handleDelete=(id)=>{
    console.log(id);
    dispatch(removeAddress(id));
  }

  return (
    <div>
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
          <label htmlFor="Phone" className={`${!isAdd && "hidden"}`}>
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
          <label htmlFor="City" className={`${!isAdd && "hidden"}`}>
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
          <label htmlFor="Details" className={`${!isAdd && "hidden"}`}>
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
          onClick={()=>
            {
              if(isLoading==="Success"){
                setIsAdd(false);
              }
            }
          }
        >
          اضافة {isLoading =="Pending" ? <div className="w-10"><Lottie animationData={loading}/></div>:""}
        </button>
      </form>

       {/* show addresses */}
      <div className="flex justify-center items-center gap-5">
          {data?.map((ele,index)=>{
            return (
              <div className="w-full bg-orange-300 rounded-lg p-4">
                <div className="flex justify-between items-center ">
                    <h1 className="text-center mb-6 font-bold">العنوان {index +1 }</h1>
                    <button className="font-bold mb-6 text-center text-red-500 text-xl hover:text-red-200 cursor-pointer" onClick={()=>{
                      handleDelete(ele._id)
                    }}>x</button>
                </div>
              <h1 className="text-gray-600"><span className="text-xl text-black font-bold ">المدينة</span> : {ele.city}</h1>
              <h1 className="text-gray-600"><span className="text-xl text-black font-bold ">رقم الموبايل</span> : {ele.phone}</h1>
              <h1 className="text-gray-600"><span className="text-xl text-black font-bold ">التفاصيل</span> : {ele.details}</h1>
              </div>
            )
          })}
      </div>
       {/* show addresses */}
    </div>
  );
};

export default Addresses;
