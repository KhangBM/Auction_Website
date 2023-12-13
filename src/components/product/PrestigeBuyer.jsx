import React from "react";

const PrestigeBuyer = () => {
  return (
    <div className="flex w-[1225px] h-[200px] items-start gap-6 p-6 relative rounded-[30px] overflow-hidden border border-solid border-black">
      <div className="relative flex flex-col items-start self-stretch w-1/2 gap-6 px-0">
        <div className="inline-flex items-start gap-[8px] relative flex-[0_0_auto]">
          <img
            className="relative w-[80px] h-[80px] rounded-full"
            alt="Ellipse"
            src="https://ss-images.saostar.vn/wp700/2019/10/18/6266834/saa.jpg"
          />
          <div className="flex flex-col w-[318px] items-start gap-[8px]  relative">
            <div className="relative w-fit mt-[-1.00px]  font-bold text-black text-xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Khanh Tran
            </div>
            <div className="inline-flex items-start gap-[8px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px]  font-bold text-black text-[14px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                Prestige:
              </div>
              <div className="relative w-fit mt-[-1.00px]  font-bold text-[#ff0000] text-[14px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                230
              </div>
            </div>
            <div className="inline-flex items-start gap-[8px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px]  font-bold text-black text-[14px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                Positive feedback:
              </div>
              <div className="relative w-fit mt-[-1.00px]  font-bold text-[#ff0000] text-[14px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                100%
              </div>
            </div>
          </div>
        </div>
        <button className="flex w-[216px] h-[52px] items-start gap-[10px] px-[45px] py-[17px] relative bg-[#52ab98] rounded-[16px] cursor-pointer">
          <div className="relative flex-1 self-stretch mt-[-1.00px]  font-bold text-white text-[14px] text-center tracking-[0] leading-[normal]">
            Visit profile
          </div>
        </button>
      </div>
      <div className="flex flex-col w-1/2 items-start gap-[24px]  relative self-stretch">
        <div className="relative w-fit mt-[-1.00px]  font-bold text-black text-xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
          Seller Feedback
        </div>
        <div className="flex w-[343px] items-start justify-between relative flex-[0_0_auto]">
          <div className="inline-flex items-center justify-center gap-[11px] relative flex-[0_0_auto]">
            <img
              className="relative w-[32px] h-[32px] object-cover rounded-full"
              alt="Ellipse"
              src="https://ss-images.saostar.vn/wp700/2019/10/18/6266834/saa.jpg"
            />
            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito-Regular',Helvetica] font-normal text-[#001b2e] text-[14px] tracking-[0] leading-[normal]">
                Ronald Richards
              </div>
              <div className="relative w-fit [font-family:'Nunito-Regular',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]">
                Good
              </div>
            </div>
          </div>
          <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito-Regular',Helvetica] font-normal text-[#001b2e] text-[12px] tracking-[0] leading-[normal]">
            20/10/2023
          </div>
        </div>
        <div className="flex w-[343px] items-start justify-between relative flex-[0_0_auto]">
          <div className="inline-flex items-center justify-center gap-[11px] relative flex-[0_0_auto]">
            <img
              className="relative w-[32px] h-[32px] object-cover rounded-full"
              alt="Ellipse"
              src="https://ss-images.saostar.vn/wp700/2019/10/18/6266834/saa.jpg"
            />
            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito-Regular',Helvetica] font-normal text-[#001b2e] text-[14px] tracking-[0] leading-[normal]">
                Ronald Richards
              </div>
              <div className="relative w-fit [font-family:'Nunito-Regular',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]">
                Good
              </div>
            </div>
          </div>
          <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito-Regular',Helvetica] font-normal text-[#001b2e] text-[12px] tracking-[0] leading-[normal]">
            20/10/2023
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrestigeBuyer;
