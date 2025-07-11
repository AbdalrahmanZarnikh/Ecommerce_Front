import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { removeAddress } from "../../redux/slice/address/addressSlice";
import Lottie from "lottie-react";
import loading from "../../utils/loading.json";
import { memo, useState } from "react";

const AddressCard = memo( ({ id, city, phone, details, index }) => {
  const dispatch = useDispatch();
  const [loadingRemove,setLoadingRemove]=useState(false)

  const handleDelete = async () => {
    setLoadingRemove(true);
    await dispatch(removeAddress(id)); 
    setLoadingRemove(false);
  };



  return (
    <div className="w-full bg-orange-300 rounded-lg p-4">
      <div className="flex justify-between items-center ">
        <h1 className="text-center mb-6 font-bold">العنوان {index + 1}</h1>
        <button
          className="font-bold mb-6 text-center text-red-500 text-xl hover:text-red-200 cursor-pointer"
          onClick={() => {
            handleDelete(id);
          }}
        >
          {loadingRemove === true ? (
            <div className="w-10">
              <Lottie animationData={loading} />
            </div>
          ) : (
            "x"
          )}
        </button>
      </div>
      <h1 className="text-gray-600">
        <span className="text-xl text-black font-bold ">المدينة</span> : {city}
      </h1>
      <h1 className="text-gray-600">
        <span className="text-xl text-black font-bold ">رقم الموبايل</span> :{" "}
        {phone}
      </h1>
      <h1 className="text-gray-600">
        <span className="text-xl text-black font-bold ">التفاصيل</span> :{" "}
        {details}
      </h1>
    </div>
  );
})

export default AddressCard;
