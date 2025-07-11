

const OrderCard = ({
  id,
  cartItems,
  shippingAddress,
  taxPrice,
  totalOrderPrice,
  user,
  paymentMethod,
  isPaid,
  paidAt,
  hawalaCode,
  hawalaCompany,
}) => {
  return (
    <div
      className={`mb-4 w-full h-full rounded-lg shadow-lg text-white font-bold  p-8  ${
        isPaid ? "bg-green-500" : "bg-orange-500"
      }`}
    >
      <div className="space-y-2 text-xl">
        <p>
          <span className="font-bold text-black">المستخدم:</span> {user?.name}
        </p>
        <p>
          <span className="font-bold text-black">طريقة الدفع:</span>{" "}
          {paymentMethod}
        </p>
        <p>
          <span className="font-bold text-black">تم الدفع:</span>{" "}
          {isPaid ? "نعم" : "لا"}
        </p>
        {isPaid && (
          <p>
            <span className="font-bold text-black">تاريخ الدفع:</span>{" "}
            {new Date(paidAt).toLocaleDateString()}
          </p>
        )}
        {hawalaCompany && (
          <p>
            <span className="font-bold text-black">شركة الحوالة:</span>{" "}
            {hawalaCompany}
          </p>
        )}
        <p>
          <span className="font-bold text-black">السعر الكلي:</span>{" "}
          {totalOrderPrice} ل.س
        </p>
        <p>
          <span className="font-bold text-black">الضريبة:</span> {taxPrice} ل.س
        </p>

        {shippingAddress && (
          <div className="mt-2">
            <h3 className="font-bold text-black">العنوان:</h3>
            <p>
              {shippingAddress?.city} - {shippingAddress?.details}
            </p>
            <p> {shippingAddress?.phone}</p>
          </div>
        )}

        <div className="mt-2">
          <h3 className="font-bold text-black">المنتجات:</h3>
          <ul className="list-disc list-inside">
            {cartItems.map((item, index) => (
              <li key={index}>
                {item?.product?.title || " "} - الكمية: {item?.quantity} -
                السعر: {item.price} ل.س
                {item.color && <> - اللون: {item.color}</>}
              </li>
            ))}
          </ul>
        </div>

        {hawalaCode?.url && (
          <div className="mt-2">
            <h3 className="font-bold text-black mb-2">صورة الحوالة:</h3>
            <img
              src={hawalaCode.url}
              alt="hawala code"
              className="w-40 h-40 object-contain border rounded"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderCard;
