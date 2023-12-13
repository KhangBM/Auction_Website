import React from "react";


const PriceCheck = () => {
  return (
    <div className="w-1/2 ">
        <div className="w-full border-2 border-gray-400  ">
         </div>
        <div className="flex justify-between px-6">
            <div>
                <div className="mt-2">
                    <p className="font-bold text-xl">Delivery: <span className="text-gray-500" > Free</span></p>
                </div>
                <div className="mt-2">
                <p className="font-bold text-xl">Dicount: <span className="text-gray-500" > $0</span></p>
                </div>
            </div>

            <div className="mt-2">
                <h2 className="text-gray-500 font-bold text-xl">Total Amount</h2>
                <h2 className="font-bold text-2xl">$2.565</h2>
            </div>
        </div>
    </div>
    
  );
};

export default PriceCheck;
