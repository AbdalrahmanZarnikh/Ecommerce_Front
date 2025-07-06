import React from "react";
import Container from "../components/Container/Container";
import ProductCart from "../components/ProductCart/ProductCart";

const Cart = () => {
  return (
    <Container>
      <h1 className="text-4xl font-bold">سلة التسوق</h1>

      <div className="flex flex-col md:flex-row  justify-center gap-10 ">
        {/*Products  */}
        <div className="flex-2/3">
          <h1 className="mb-4 font-bold text-xl">المنتجات ({2})</h1>
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
        </div>
        {/*Products  */}
        {/*Order  */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-20 flex-1/3 h-fit">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">ملخص الطلب</h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex justify-between">
              <span>المجموع الفرعي :</span>
              <span>104 $</span>
            </div>
            <div className="flex justify-between">
              <span>تكلفة الشحن :</span>
              <span> 30 $ </span>
            </div>
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between font-bold text-lg">
                <span>الاجمالي :</span>
                <span>31133113 $</span>
              </div>
            </div>
            <button className="w-full mt-6 bg-blue-600 text-white p-4 rounded-lg cursor-pointer hover:bg-blue-400">المتابعة للدفع</button>
          </div>
        </div>
        {/*Order  */}
      </div>
    </Container>
  );
};

export default Cart;
