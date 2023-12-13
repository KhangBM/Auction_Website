import React from "react";

const ProductCard = () => {
  return (
    <div className="flex flex-col w-[466px] h-[401px] items-start gap-[4px] p-[14px] relative bg-grayscale-900 rounded-[14px]">
      <div className="relative flex-1 self-stretch w-full grow bg-[url(image.png)] bg-cover bg-[50%_50%]">
        <div className="inline-flex items-start p-[8px] relative top-[229px] left-[10px] bg-[#0000004c] rounded-[14px] backdrop-blur backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(8px)_brightness(100%)]">
          <div className="relative w-fit mt-[-0.50px] [font-family:'Metropolis-Bold',Helvetica] font-bold text-white text-[20px] tracking-[-0.40px] leading-[28px] whitespace-nowrap">
            1d 23hr 17m left
          </div>
        </div>
      </div>
      <div className="flex items-start gap-[16px] p-[10px] relative self-stretch w-full flex-[0_0_auto] bg-grayscale-900">
        <div className="flex flex-col items-start gap-[4px] relative flex-1 grow">
          <p className="relative self-stretch mt-[-1.00px] font-v2-h5 font-[number:var(--v2-h5-font-weight)] text-primary-100 text-[length:var(--v2-h5-font-size)] tracking-[var(--v2-h5-letter-spacing)] leading-[var(--v2-h5-line-height)] [font-style:var(--v2-h5-font-style)]">
            Godrej Cupboard 7 feet tall
          </p>
          <div className="inline-flex items-start gap-[4px] relative flex-[0_0_auto]">
            <img className="relative w-[20px] h-[24px]" alt="Emoji" src="emoji.png" />
            <p className="relative w-fit mt-[-1.00px] [font-family:'Metropolis-Medium',Helvetica] font-normal text-transparent text-[20px] tracking-[-0.40px] leading-[28px] whitespace-nowrap">
              <span className="font-[number:var(--v2-body-3-font-weight)] text-[#f3ebff] font-v2-body-3 [font-style:var(--v2-body-3-font-style)] tracking-[var(--v2-body-3-letter-spacing)] leading-[var(--v2-body-3-line-height)] text-[length:var(--v2-body-3-font-size)]">
                Highest Bid{" "}
              </span>
              <span className="[font-family:'Metropolis-Bold',Helvetica] font-bold text-[#6ac5fe]">0.10 wETH</span>
              <span className="font-[number:var(--v2-body-3-font-weight)] text-[#6ac5fe] font-v2-body-3 [font-style:var(--v2-body-3-font-style)] tracking-[var(--v2-body-3-letter-spacing)] leading-[var(--v2-body-3-line-height)] text-[length:var(--v2-body-3-font-size)]">
                &nbsp;
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;