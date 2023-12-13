import React, { useState } from "react";

const Product = () => {
  const smallImages = [
    "https://mohinhfigure.com/wp-content/uploads/2023/10/mo-hinh-itachi-akatsuki-de-hac-hoa-co-qua-tay-cam-non-cao-29cm-nang-820gr-co-hop-1-768x768.jpg",
    "https://mohinhfigure.com/wp-content/uploads/2023/10/mo-hinh-itachi-akatsuki-de-hac-hoa-co-qua-tay-cam-non-cao-29cm-nang-820gr-co-hop-7-768x768.jpg",
    "https://mohinhfigure.com/wp-content/uploads/2023/10/mo-hinh-itachi-akatsuki-de-hac-hoa-co-qua-tay-cam-non-cao-29cm-nang-820gr-co-hop-6-768x768.jpg",
    "https://mohinhfigure.com/wp-content/uploads/2023/10/mo-hinh-itachi-akatsuki-de-hac-hoa-co-qua-tay-cam-non-cao-29cm-nang-820gr-co-hop-4-768x768.jpg",
  ];
  const [selectedImage, setSelectedImage] = useState(smallImages[0]);

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
            className="w-16 h-16 m-2 cursor-pointer  border-[1px] border-[#000]"
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
