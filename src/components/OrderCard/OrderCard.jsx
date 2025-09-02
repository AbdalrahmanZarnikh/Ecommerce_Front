import { memo } from "react";

const OrderCard = memo(
  ({
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
        dir="rtl"
        className={`mb-8 w-full rounded-2xl shadow-xl p-6 transition-all duration-300 border-2 ${
          isPaid
            ? "bg-green-50 border-green-400"
            : "bg-orange-50 border-orange-400"
        }`}
      >
        <div className="space-y-4 text-gray-800 text-[17px] leading-relaxed">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-indigo-700">🧾 تفاصيل الطلب</h2>
            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                isPaid ? "bg-green-200 text-green-800" : "bg-orange-200 text-orange-800"
              }`}
            >
              {isPaid ? "مدفوع" : "غير مدفوع"}
            </span>
          </div>

          <p>👤 <strong>المستخدم:</strong> {user?.name}</p>
          <p>💳 <strong>طريقة الدفع:</strong> {paymentMethod}</p>
          {isPaid && (
            <p>📅 <strong>تاريخ الدفع:</strong> {new Date(paidAt).toLocaleDateString()}</p>
          )}
          {hawalaCompany && (
            <p>🏢 <strong>شركة الحوالة:</strong> {hawalaCompany}</p>
          )}
          <p>💰 <strong>السعر الكلي:</strong> {totalOrderPrice} ل.س</p>
          <p>🧾 <strong>أجور إضافية:</strong> {taxPrice} ل.س</p>

          {shippingAddress && (
            <div className="bg-white rounded-lg p-4 shadow-sm border">
              <h3 className="font-bold text-indigo-700 mb-2">📍 العنوان:</h3>
              <p>{shippingAddress?.city} - {shippingAddress?.details}</p>
              <p>📞 {shippingAddress?.phone}</p>
            </div>
          )}

          <div className="bg-white rounded-lg p-4 shadow-sm border">
            <h3 className="font-bold text-indigo-700 mb-2">🛒 المنتجات:</h3>
            <ul className="list-disc list-inside space-y-1">
              {cartItems.map((item, index) => (
                <li key={index}>
                  {item?.product?.title || "منتج"} - الكمية: {item?.quantity} - السعر: {item.price} ل.س
                  {item.color && <> - اللون: {item.color}</>}
                </li>
              ))}
            </ul>
          </div>

          {hawalaCode?.url && (
            <div className="mt-4">
              <h3 className="font-bold text-indigo-700 mb-2">📷 صورة الحوالة:</h3>
              <img
                src={hawalaCode.url}
                alt="hawala code"
                className="w-52 h-52 object-cover border-2 border-indigo-300 rounded-lg shadow-md"
              />
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default OrderCard;
