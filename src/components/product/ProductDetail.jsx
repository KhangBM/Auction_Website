import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductDetail = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [auctionTime, setAuctionTime] = useState("");
  const [description, setDescription] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [deliveryTime, setDeliveryTime] = useState({ start: "", end: "" });//thời gian giao hàng

  useEffect(() => {
    const getProductInfo = async () => {
      try {
        const response = await axios.get('https://e-auction-api.up.railway.app/v1/auction/get/6993702382469120');
        const data = response.data.data;
        console.log('data', data)
        if (data) {
          setProductName(data.product.name);
          setProductPrice(data.currentPrice);
          setDescription(data.product.description);
          setCategoryName(data.product.category.categoryName);

          const formatDate = (string) => {
            let time = string.split(" ");
            let date = time[0].split("/");
            let day = date[0];
            let month = date[1];
            let year = date[2];
            let timeHour = time[1].split(":");
            let hour = timeHour[0];
            let minute = timeHour[1];
            let second = timeHour[2];
            const result = new Date(year, month - 1, day, hour, minute, second);
            return result;
          };
          
          const auctionEndDate = new Date(formatDate(data.endDate));
          const now = new Date();
          const timeLeft = auctionEndDate.getTime() - now.getTime();

          if (timeLeft > 0) {
            const secondsLeft = Math.floor(timeLeft / 1000);
            const minutes = Math.floor(secondsLeft / 60);
            const seconds = secondsLeft % 60;
            setAuctionTime(`${minutes} phút ${seconds} giây`);
          } else {
            setAuctionTime('Đã kết thúc');
          }

          // Tính thời gian giao hàng
          const deliveryStartDate = formatDate(data.delivery.startDate);
          const deliveryEndDate = formatDate(data.delivery.endDate);

          const deliveryStartOptions = {
            weekday: "short",
            month: "short",
            day: "numeric",
          };
          const deliveryEndOptions = {
            weekday: "short",
            month: "short",
            day: "numeric",
          };

          const startDeliveryString = deliveryStartDate.toLocaleDateString(
            "en-US",
            deliveryStartOptions
          );
          const endDeliveryString = deliveryEndDate.toLocaleDateString(
            "en-US",
            deliveryEndOptions
          );

          setDeliveryTime({ start: startDeliveryString, end: endDeliveryString });
        }
      } catch (error) {
        console.error('Lỗi khi lấy thông tin sản phẩm:', error);
      }
    };

    getProductInfo();

    const interval = setInterval(getProductInfo, 1000);
    return () => clearInterval(interval);
  }, []);

  const handlePlaceBid = async () => {
    try {
      // Thực hiện yêu cầu đấu giá tại đây
      const response = await axios.post('URL_DAU_GIA', {
        // Truyền thông tin đấu giá vào đây (nếu có)
      });

      console.log('Yêu cầu đấu giá thành công:', response.data);
      // Gọi lại hàm lấy thông tin sản phẩm để cập nhật dữ liệu mới nhất sau khi đấu giá thành công
      getProductInfo();
    } catch (error) {
      console.error('Lỗi khi đấu giá:', error);
    }
  };
  return (
    <div className="w-[600px] h-[600px] flex items-center rounded-[30px] overflow-hidden border border-solid border-black flex-col">
      <div className="relative flex flex-col items-center self-center justify-between w-full h-full p-6">
        <div className="w-full h-auto  font-bold text-black text-4xl text-center tracking-[0] leading-[normal] flex items-center justify-center">
           {productName}
        </div>
        <div className="flex flex-row w-full h-auto gap-2 ">
          <div className="text-4xl font-bold">Current: {productPrice}.vnd</div>
        </div>

        <div className="flex flex-row items-center w-full h-auto gap-2">
          <div className="text-lg  font-bold w-[120px] align-middle">
            Time left: {auctionTime}
          </div>
          {/* <div className="text-2xl font-bold text-[#f65151]">50m 21s</div>
          <div className="w-[2px] h-[40px] bg-black "></div>
          <div className="text-2xl font-normal">Today 11:00 PM</div> */}
        </div>
        <div className="flex flex-row items-center w-full h-auto gap-2">
          <div className="text-lg  font-bold w-[120px]">Category: {categoryName}</div>
        </div>
        <div className="flex flex-row w-full gap-2 ">
        <div className="flex flex-row items-center w-full h-auto gap-2">
          <div className="text-lg font-bold">
            Estimated Delivery Time: {deliveryTime.start} - {deliveryTime.end}
          </div>
        </div>
        </div>
        <div className="flex flex-row items-center w-full h-auto gap-2">
          <div className="text-lg  font-bold w-[120px]">Payments:</div>
          <img
              src="data:image/png;base64,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"
            alt=""
            className="border-[1px] border-black w-16 h-10 px-1"
          />
        </div>
        <div className="flex flex-row justify-center gap-6 ">
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
    </div>
  );
};

export default ProductDetail;
