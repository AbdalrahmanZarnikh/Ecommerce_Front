import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getDiscounts} from "../../redux/slice/discount/discountSlice"

const DiscountSection = () => {

    const dispatch=useDispatch();

    const {discounts,isLoading}=useSelector((state)=>state.discountSlice)

    useEffect(()=>{
      dispatch(getDiscounts());
        
    },[])

  return (
    <div className={`${discounts?.length==0 && "hidden"} bg-blue-100 dark:bg-white border border-blue-400 dark:border-white rounded-lg p-6 text-center shadow-md`}>
      <h2 className="text-2xl font-bold text-yellow-800 mb-2">
        🎁 احصل على خصم خاص! يصل الى {discounts[0]?.discount }%
      </h2>
      <p className="text-lg text-yellow-700 mb-4">
        استخدم الكود التالي عند الدفع:
      </p>
      <div className="bg-blue-300 text-black font-semibold text-xl py-2 px-4 rounded-md inline-block tracking-widest">
       {discounts[0]?.name}
      </div>
    </div>
  );
};

export default DiscountSection;
