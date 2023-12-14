import React, { useState, useEffect } from "react";
import axios from "axios";

const Product = () => {
  const [smallImages, setSmallImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    // Gọi API để lấy dữ liệu hình ảnh
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://e-auction-api.up.railway.app/v1/auction/get/6993434767163392'
        );
        // Log dữ liệu hình ảnh từ API
        console.log(response.data.product);
    
        // Lấy dữ liệu hình ảnh từ API
        const imagesFromAPI = response.data.product;

        // Lấy các đường dẫn hình ảnh từ các trường có giá trị
        const imagesArray = Object.values(imagesFromAPI)
          .filter(image => typeof image === 'string' && image !== '')
        
        setSmallImages(imagesArray);
        setSelectedImage(imagesArray[0]); // Chọn ảnh đầu tiên làm ảnh mặc định
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchData();
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="flex w-[600px] h-[600px] items-center border-[1px] border-[#000] rounded-3xl">
      <div className="w-1/4 p-4">
        {smallImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="w-16 h-16 m-2 cursor-pointer border-[1px] border-[#000]"
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>

      <div className="w-3/4 p-4">
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Large Image"
            className="w-full h-auto"
          />
        )}
      </div>
    </div>
  );
};

export default Product;
