import FiFacebook from "../svg/FiFacebook";
import FiInstagram from "../svg/FiInstagram";
import FiLinkedin from "../svg/FiLinkedIn";
import FiGithub from "../svg/FiGithub";
import Logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="relative w-full h-[320px] bg-[#2B6777] bottom-0 mt-2">
      <div className="absolute w-[277px] h-[60px] top-[55px] left-[200px] [font-family:'Tahoma-Regular',Helvetica] font-normal text-white text-[34px] tracking-[0.34px] leading-[42px]">
        ToyBids
      </div>
      <div className="absolute h-[42px] top-[40px] left-[1000px] [font-family:'Tahoma-Regular',Helvetica] font-normal text-white text-[34px] tracking-[0.34px] leading-[42px] whitespace-nowrap">
        Pages
      </div>
      <div className="inline-flex flex-col items-start gap-[12px] absolute top-[90px] left-[1000px]">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Tahoma-Regular',Helvetica] font-normal text-white text-[20px] tracking-[-0.48px] leading-[30px] whitespace-nowrap">
          Seasonal
        </div>
        <div className="relative w-fit [font-family:'Tahoma-Regular',Helvetica] font-normal text-white text-[20px] tracking-[-0.48px] leading-[30px] whitespace-nowrap">
          Add product
        </div>
        <div className="relative w-fit [font-family:'Tahoma-Regular',Helvetica] font-normal text-white text-[20px] tracking-[-0.48px] leading-[30px] whitespace-nowrap">
          History
        </div>
        <div className="relative w-fit [font-family:'Tahoma-Regular',Helvetica] font-normal text-white text-[20px] tracking-[-0.48px] leading-[30px] whitespace-nowrap">
          Ongoing
        </div>
      </div>
      <div className="inline-flex flex-col items-start gap-[12px] absolute top-[90px] left-[1250px]">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Tahoma-Regular',Helvetica] font-normal text-white text-[20px] tracking-[-0.48px] leading-[30px] whitespace-nowrap">
          FAQ
        </div>
        <div className="relative w-fit [font-family:'Tahoma-Regular',Helvetica] font-normal text-white text-[20px] tracking-[-0.48px] leading-[30px] whitespace-nowrap">
          Support
        </div>
        <div className="relative w-fit [font-family:'Tahoma-Regular',Helvetica] font-normal text-white text-[20px] tracking-[-0.48px] leading-[30px] whitespace-nowrap">
          Feedback
        </div>
      </div>
      <div className="absolute h-[42px] top-[40px] left-[1250px] [font-family:'Tahoma-Regular',Helvetica] font-normal text-white text-[34px] tracking-[0.34px] leading-[42px] whitespace-nowrap">
        Connect
      </div>
      <hr className="border-t border-green-600 absolute top-[270px] left-0 w-full mx-auto" />
      <div className="inline-flex items-center justify-center gap-[300px] absolute top-[285px] left-[120px]">
        <div className="inline-flex items-center justify-center gap-[73px] relative flex-[0_0_auto]">
          <div className="inline-flex items-center justify-center gap-[5px] relative flex-[0_0_auto]">
            <p className="relative w-fit mt-[-1.00px] [font-family:'Tahoma-Regular',Helvetica] font-normal text-white text-[20px] tracking-[-0.40px] leading-[28px] whitespace-nowrap">
              147 Group, Inc. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
      <div className="inline-flex items-start gap-[16px] absolute top-[285px] left-[1250px]">
        <FiGithub className="!relative !w-[20px] !h-[20px]" />
        <FiInstagram className="!relative !w-[20px] !h-[20px]" />
        <FiFacebook className="!relative !w-[20px] !h-[20px]" />
        <FiLinkedin className="!relative !w-[20px] !h-[20px]" />
      </div>
      <img
        className="absolute w-[87px] h-[49px] top-[62px] left-[101px] object-cover"
        alt="Logo"
        src={Logo}
      />
    </div>
  );
};

export default Footer;
