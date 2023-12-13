import React from "react";

const AddProduct = () => {
  return (
    <div className="flex flex-col w-[600px] h-[600px] items-center  p-6 relative rounded-[30px] overflow-hidden border border-solid border-black gap-6">
      <div className="w-full h-[56px]  font-bold text-black text-2xl text-center tracking-[0] leading-[normal] flex items-center justify-center">
        Gundam RX-93
      </div>
      <div className="w-full h-[56px]  flex flex-row gap-2 ">
        <div className="text-base font-bold">Time left:</div>
        <div className="text-base font-bold text-[#f65151]">50m 21s</div>
        <div className="w-[2px] h-[20px] bg-black "></div>
        <div className="text-base font-bold">Today 11:00 PM</div>
      </div>
      <div className="w-full h-[1px] bg-black"></div>
      <div className="w-full h-[56px]  flex flex-row gap-2 ">
        <div className="text-base font-bold">Current bid:</div>
        <div className="text-xl font-bold">500$</div>
      </div>
      <div className="w-full h-[1px] bg-black"></div>
      <div className="w-full   flex flex-row gap-2  h-[150px]">
        <div className="text-base font-bold">Description:</div>
        <div className="w-full h-full text-base font-bold truncate ">
          <p className="">
            • Model height: 18cm
            <br />• Range of movement: High
            <br />• Number of runners: 13 runners + Decal stickers
            <br />• Accessories included: Beam Rifle, Shield
            <br />• Product does not include Action Base
            <br />• Plastic components: PS, PE, ABS
          </p>
        </div>
      </div>
      <div className="w-full h-[1px] bg-black"></div>
      <div className="flex flex-row justify-center gap-6">
        <div className="flex w-[216px] h-[52px] items-start gap-[10px] px-[45px] py-[17px] relative bg-[#52ab98] rounded-[16px]">
          <div className="relative flex-1 self-stretch mt-[-1.00px] [font-family:'Roboto-Bold',Helvetica] font-bold text-white text-[14px] text-center tracking-[0] leading-[normal]">
            Add to wish list
          </div>
        </div>
        <div className="flex w-[216px] h-[52px] items-start gap-[10px] px-[45px] py-[17px] relative bg-[#52ab98] rounded-[16px]">
          <div className="relative flex-1 self-stretch mt-[-1.00px] [font-family:'Roboto-Bold',Helvetica] font-bold text-white text-[14px] text-center tracking-[0] leading-[normal]">
            Place Bid
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
