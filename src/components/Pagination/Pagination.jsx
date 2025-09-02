import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/slice/product/productSlice";

const Pagination = ({ currentPage, next, prev,getThunk }) => {
  const dispatch = useDispatch();

  const handleClickNext = () => {
    if (next) {
      dispatch(getThunk(next));
    }
  };
  const handleClickPrev = () => {
    if (prev) {
      dispatch(getThunk(prev));
    }
  };

  return (
    <div className="flex justify-center items-center gap-10 md:gap-30">
      <button
        className={` text-white  p-4 cursor-pointer rounded-lg ${
          next ? "bg-blue-700 hover:bg-blue-400" : "bg-gray-500 "
        }`}
        onClick={handleClickNext}
      >
        التالي{" "}
      </button>

      <span className="bg-blue-800 text-xl rounded-lg text-white w-10 h-10 p-5 flex justify-center items-center">
        {currentPage}
      </span>
      <button
        className={` text-white  p-4 cursor-pointer rounded-lg ${
          prev ? "bg-blue-700 hover:bg-blue-400" : "bg-gray-500 "
        }`}
        onClick={handleClickPrev}
      >
        السابق
      </button>

      
    </div>
  );
};

export default Pagination;
