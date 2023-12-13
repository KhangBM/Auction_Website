import React from "react";
import CheckOut from "../../components/checkout/CheckOut";
import PriceCheck from "../../components/checkout/PriceCheck";

const CheckOutPage = () => {
  return (

    <div className="flex justify-center">
      <div className="pt-[70px] w-[1080px]  justify-center flex flex-col gap-6">
        <h1 className="font-bold text-3xl">Checkout</h1>
        <CheckOut></CheckOut>
        <PriceCheck></PriceCheck>
      </div>
    </div>
  );
};

export default CheckOutPage;
