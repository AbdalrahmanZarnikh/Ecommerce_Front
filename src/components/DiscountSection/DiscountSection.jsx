import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiscounts } from "../../redux/slice/discount/discountSlice";

const DiscountSection = () => {
  const dispatch = useDispatch();
  const { discounts } = useSelector((state) => state.discountSlice);

  useEffect(() => {
    dispatch(getDiscounts());
  }, []);

  if (!discounts || discounts.length === 0) return null;

  return (
    <div
      dir="rtl"
      className="bg-gradient-to-r from-blue-100 to-blue-200 dark:from-white dark:to-gray-100 border border-blue-400 dark:border-white rounded-xl p-6 text-center shadow-lg transition-all duration-300"
    >
      <h2 className="text-3xl font-bold text-indigo-800 mb-3">
        🎁 خصم خاص لك! يصل إلى <span className="text-red-600">{discounts[0]?.discount}%</span>
      </h2>
      <p className="text-lg text-indigo-700 mb-4">
        استخدم الكود التالي عند الدفع:
      </p>
      <div className="bg-yellow-300 text-black font-bold text-2xl py-3 px-6 rounded-lg inline-block tracking-widest shadow-md hover:scale-105 transition-transform duration-300">
        {discounts[0]?.name}
      </div>
    </div>
  );
};

export default DiscountSection;
