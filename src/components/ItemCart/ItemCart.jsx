import { memo, useState } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { updateCartItemQuantity,removeSpecificCartItem } from "../../redux/slice/cart/cartSlice";


const ItemCart = memo(({ id, title, category, image, quantity, price }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(quantity);
  const dispatch = useDispatch();
  const handleIncreaseQuantity = () => {
    const newQuantity = selectedQuantity + 1;
    setSelectedQuantity(newQuantity);
    dispatch(updateCartItemQuantity({ id, quantity: newQuantity }));
  };

  const handleDecreaseQuantity = () => {
    const newQuantity = selectedQuantity > 1 ? selectedQuantity - 1 : 0;
    setSelectedQuantity(newQuantity);

    if (newQuantity === 0) {
      dispatch(removeSpecificCartItem(id));
    } else {
      dispatch(updateCartItemQuantity({ id, quantity: newQuantity }));
    }
  };

  return (
    <div className="flex justify-between items-center mb-4 border-b-2 p-4 border-gray-400">
      {/* right */}
      <div className="flex justify-start gap-4 items-center  ">
        <div className=" w-24 h-24">
          <img
            src={image}
            className="w-full h-full rounded-md"
            alt="productImage"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-lg"> {title} </h1>
          <h1 className="text-gray-400">{category}</h1>
          <div className="flex flex-row-reverse justify-center gap-4 text-lg font-bold bg-white border rounded-lg   ">
            <span
              className=" border-r-2  border-gray-300  text-gray-400 cursor-pointer text-center pr-2"
              onClick={handleIncreaseQuantity}
            >
              +
            </span>
            <span className="text-center">{selectedQuantity}</span>
            <span
              className=" border-l-2  border-gray-300 text-gray-400 cursor-pointer text-center pl-2"
              onClick={handleDecreaseQuantity}
            >
              -
            </span>
          </div>
        </div>
      </div>
      {/* right */}
      {/* left */}
      <div className="flex flex-col items-center gap-10 ">
        <h1 className="text-lg text-gray-600 ">{price} $</h1>
        <button
          className="cursor-pointer"
          onClick={() => {
            dispatch(removeSpecificCartItem(id));
          }}
        >
          <MdDelete className="text-3xl text-red-600 hover:text-red-400" />
        </button>
      </div>
      {/* left */}
    </div>
  );
})

export default ItemCart;
