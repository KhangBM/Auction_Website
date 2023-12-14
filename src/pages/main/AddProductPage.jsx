import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddProductPage.css';
import { Upload, Input, DatePicker, Button, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

const AddProductPage = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startBidPrice, setStartBidPrice] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [bidTime, setBidTime] = useState(null);
  const [categoryName, setCategoryName] = useState('');
  const [fileList, setFileList] = useState([]);
  const [minBidPrice, setMinBidPrice] = useState('');

  const category = ['Anime', 'Guldam'];

  const token = localStorage.getItem('userToken');
  console.log('Token from localStorage:', token);

  useEffect(() => {
    console.log('Setting up interceptor...');
    const axiosInterceptor = axios.interceptors.request.use(
      (config) => {
        console.log('Intercepting request...');
        const token = localStorage.getItem('userToken');
        if (token) {
          console.log('Token from localStorage:', token); // Log token ra console
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        console.error('Interceptor error:', error);
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.request.eject(axiosInterceptor);
    };
  }, []);

  const handleSubmit = async () => {
    try {
      try {
        const formData = new FormData();
        fileList.forEach((file, index) => {
          formData.append(`file${index}`, file); // Đặt tên cho các files
          formData.append(`type${index}`, 'avatar'); // Gán giá trị 'avatar' cho type
        });
  
        const response = await axios.post(
          'https://e-auction-api.up.railway.app/v1/file/upload/s3',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
  
        console.log('Upload Success:', response.data);
  
        // Tiếp tục xử lý thông tin sản phẩm và gửi lên server như bạn đã làm trước đó...
      } catch (error) {
        console.error('Error uploading files:', error);
      }
      
      // Lưu dữ liệu tập tin đã được upload
      console.log('Upload Success:', uploadResponse.data);


      // Gửi thông tin sản phẩm lên server
      const productData = {
        bidTime,
        description,
        name,
        category: categoryName === 'Anime' ? 1 : categoryName === 'Guldam' ? 2 : '', // Dữ liệu động
        startBidPrice: parseInt(startBidPrice),
        status: 1,
        mainImage: fileList[0].url, // Lấy ảnh từ fileList
        subImage1: fileList[1].url, // Lấy ảnh từ fileList
        subImage2: fileList[2].url, // Lấy ảnh từ fileList
        subImage3: fileList[3].url, // Lấy ảnh từ fileList
      };
      console.log('Product Data:', productData);
      const productResponse = await axios.post(
        'https://e-auction-api.up.railway.app/v1/product/create',
        productData
      );

      console.log('Product created successfully:', productResponse.data);
      const productId = productResponse.data.productId; // Lấy productId sau khi tạo sản phẩm

      // Dữ liệu đấu giá
      const auctionData = {
        maxBidders: 100,
        minBidPrice: parseInt(minBidPrice),
        productId: productResponse.data.productId,
        startDate: startDate ? startDate.format('DD/MM/YYYY HH:mm:ss') : null,
      };
      console.log('Auction Data:', auctionData);
      // Gửi request tạo phiên đấu giá
      const auctionResponse = await axios.post(
        'https://e-auction-api.up.railway.app/v1/auction/create',
        auctionData
      );

      console.log('Auction created successfully:', auctionResponse.data);

      // Xử lý sau khi tạo sản phẩm và phiên đấu giá thành công
      // Reset state và các giá trị trên form nếu cần

      setName('');
      setDescription('');
      setStartBidPrice('');
      setStartDate(null);
      setBidTime(null);
      setCategoryName('');
      setFileList([]);
    } catch (error) {
      console.error('Error creating product:', error);
    }
    
  };

  const uploadProps = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      if (fileList.length >= 4) {
        console.log('Chỉ được phép tải lên tối đa 4 tập tin.');
        return false;
      }
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
  };

  return (
    <div className="container">
      <div className="container_info">
        <Upload {...uploadProps} className="upload">
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
        <Input className="product" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input.TextArea className="product_info" placeholder="Product Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <Input className="product_price" placeholder="Product Price" type="number" value={startBidPrice} onChange={(e) => setStartBidPrice(e.target.value)} />
        <Input className="bidprice" placeholder="Min Price" type="number" value={minBidPrice} onChange={(e) => setMinBidPrice(e.target.value)} />
        <DatePicker className="start_date" placeholder="Start Date" value={startDate} onChange={(date) => setStartDate(date)} />
        <Input className="bid_date" placeholder="Bid Time" value={bidTime} onChange={(e) => setBidTime(e.target.value)} />
        <Select
          className="product_type"
          placeholder="Product Type"
          value={categoryName}
          onChange={(value) => setCategoryName(value)}
        >
          {category.map(type => (
            <Option key={type} value={type}>
              {type}
            </Option>
          ))}
        </Select>

        <Button type="primary" onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
};

export default AddProductPage;
