import React, { useState } from 'react';
import axios from 'axios';
import './AddProductPage.css';
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload, Input, DatePicker, TimePicker, Button } from 'antd';

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const AddProductPage = () => {
  //Upload Image
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url?.substring(file.url.lastIndexOf('/') + 1));
  };

  const maxImageCount = 4; // Số lượng ảnh tối đa
  const handleChange = async ({ fileList: newFileList }) => {
    if (newFileList.length > maxImageCount) {
      // Hạn chế việc upload quá 4 ảnh
      return;
    }

    setFileList(newFileList);

    const formData = new FormData();
    newFileList.forEach(async (image) => {
      if (!image.url && !image.preview) {
        image.preview = await getBase64(image.originFileObj);
      }
      formData.append('images', image.originFileObj);
      formData.append('type', 'avarta');
    });

    // Gửi yêu cầu tải lên file lên API
    axios
      .post('https://e-auction-api.up.railway.app/v1/file/upload/s3', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log('Upload successful:', response.data);
        // Xử lý phản hồi từ API ở đây nếu cần
      })
      .catch((error) => {
        console.error('Error uploading:', error);
        // Xử lý lỗi ở đây nếu cần
      });
  };

  const handleRemove = (file) => {
    const newFileList = fileList.filter((f) => f.uid !== file.uid);
    setFileList(newFileList);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  //Update info
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [bidIncrement, setBidIncrement] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [auctionTime, setAuctionTime] = useState(null);

  // Hàm gửi thông tin sản phẩm
  const handleSubmit = () => {
    const productData = {
      productName,
      productDescription,
      productPrice,
      bidIncrement,
      startDate: startDate ? startDate.format('YYYY-MM-DD') : null,
      endDate: endDate ? endDate.format('YYYY-MM-DD') : null,
      auctionTime: auctionTime ? auctionTime.format('HH:mm:ss') : null,
    };

    // Gửi thông tin sản phẩm lên server
    axios.post('https://e-auction-api.up.railway.app/v1/product/create', productData)
      .then((response) => {
        console.log('Product added successfully:', response.data);
        // Xử lý phản hồi từ API ở đây nếu cần
      })
      .catch((error) => {
        console.error('Error adding product:', error);
        // Xử lý lỗi ở đây nếu cần
      });
  };

  return (
    <div className="container">
      <div className="container_img">
        <Upload
          action="https://e-auction-api.up.railway.app/v1/file/upload/s3"
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
          onRemove={handleRemove}
        >
          {fileList.length >= maxImageCount ? null : (
            <div className="upload-button">
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          )}
        </Upload>
        <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
      <div className="container_info">
        <Input className="product" placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} />
        <Input.TextArea className="product_info" placeholder="Product Description" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} />
        <Input className="product_price" placeholder="Product Price" type="number" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
        <Input className="product_bid" placeholder="Bid Increment" type="number" value={bidIncrement} onChange={(e) => setBidIncrement(e.target.value)} />
        <DatePicker className="start_date" placeholder="Start Date" value={startDate} onChange={(date) => setStartDate(date)} />
        <DatePicker className="end_date" placeholder="End Date" value={endDate} onChange={(date) => setEndDate(date)} />
        <TimePicker className="bid_date" placeholder="Auction Time" value={auctionTime} onChange={(time) => setAuctionTime(time)} />

        <Button type="primary" onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
};

export default AddProductPage;
