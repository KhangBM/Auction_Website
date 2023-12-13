import React from "react";
import imgRobot from "../../assets/robot.png";
import vangogh from "../../assets/vangogh.png";
import justinshirt from "../../assets/tshirt.png";
import paypal from "../../assets/paypal.png";
import wallet from "../../assets/wallet.png";

const CheckOut = () => {
  return (
    <div className="rounded-xl bg-[#2B6777]  flex ">
      <div className="w-1/2">
        <div className="p-3 w-full">
          <div className="rounded-xl bg-white flex justify-around items-center p-2">
            <img src={imgRobot} className="w-16 h-16 md:w-32 md:h-32 " />

            <div className="w-1/3">
              <h2 className="font-bold text-md md:text-2xl">Rare Hasplor</h2>
            </div>
            <span className="h-12 border-2 border-gray-400 mx-1"></span>
            <div className="w-1/6">
              <p className="font-bold text-md md:text-2xl">$45.5</p>
            </div>
          </div>
        </div>
        <div className="p-3  w-full">
          <div className="rounded-xl bg-white flex justify-around items-center p-2">
            <img src={justinshirt} className="w-16 h-16 md:w-32 md:h-32 " />

            <div className="w-1/3">
              <h2 className="font-bold text-md md:text-2xl">Justin’s Tshirt</h2>
            </div>
            <span className="h-12 border-2 border-gray-400 mx-1"></span>
            <div className="w-1/6">
              <p className="font-bold text-md md:text-2xl">$120</p>
            </div>
          </div>
        </div>
        <div className="p-3  w-full">
          <div className="rounded-xl bg-white flex justify-around items-center p-2">
            <img src={vangogh} className="w-16 h-16 md:w-32 md:h-32 " />

            <div className="w-1/3">
              <h2 className="font-bold text-md md:text-2xl">
                Glasgow girl VanGogh’s
              </h2>
            </div>
            <span className="h-12 border-2 border-gray-400 mx-1"></span>
            <div className="w-1/6">
              <p className="font-bold text-md md:text-2xl">$2400</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-white w-1/2 m-3 p-3 ">
        <div className="flex  justify-center">
          <div className="flex p-2 items-center">
            <img src={wallet} alt="" className="w-8 h-8" />
            <p className="ml-2 font-bold">Credit Card</p>
          </div>
          <div className="bg-[#52ab98] rounded-tr-lg rounded-br-lg flex p-2 items-center">
            <img src={paypal} alt="" className="w-8 h-8" />
            <p className="ml-2 font-bold">PayPal</p>
          </div>
        </div>

        <div className="mt-6 border-2 border-gray-400 rounded-lg p-2">
          <h2 className="font-bold text-xl">Card Number</h2>
          <input
            type="text"
            placeholder=" qweqwe"
            className="w-full h-full p-2"
          />
        </div>

        <div className="mt-6 border-2 border-gray-400 rounded-lg p-2">
          <h2 className="font-bold text-xl">Cardholder Name</h2>
          <input
            type="text"
            placeholder=" qweqwe"
            className="w-full h-full p-2"
          />
        </div>

        <div className=" mt-6 flex">
          <div className="mr-6 w-1/2 border-2 border-gray-400 rounded-xl p-2">
            <h2 className="font-bold text-md">Expire Day</h2>
            <input
              type="text"
              placeholder=""
              className="w-full p-2"
            />
          </div>
          <div className="w-1/2 border-2 border-gray-400 rounded-xl p-2">
            <h2 className="font-bold text-md">CVV Code</h2>
            <input
              type="text"
              placeholder=""
              className="w-full  p-2"
            />
          </div>
        </div>

        <div className="">
            <button className="bg-black rounded-xl text-white font-bold w-full h-12 mt-6">Procceed To Payment</button>
        </div>
      </div>
    </div>
    
  );
};

export default CheckOut;
