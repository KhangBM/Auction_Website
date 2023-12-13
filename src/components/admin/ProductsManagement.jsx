import { Avatar, Button, Form, Input, Table } from "antd";
import dayjs from "dayjs";
import { useSearchParams } from "react-router-dom";
const ProductsManagement = (props) => {
  const { bg } = props;
  const [form] = Form.useForm();
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSearch = async (values) => {
    for (const key in values) {
      if (Object.prototype.hasOwnProperty.call(values, key)) {
        // Kiểm tra xem thuộc tính có bằng undefined không
        if (values[key] === undefined) {
          // Gán thuộc tính bằng ""
          values[key] = "";
        }
      }
    }
    setSearchParams(values);
  };
  const handleReset = () => {
    setSearchParams({});
    form.resetFields();
  };

  const data = [
    {
      key: 1,
      seller: "Khanh",
      productImage:
        "https://s3.ap-southeast-1.amazonaws.com/family.circle/avatar/AVATAR_tB5idnWvVj.jpg",
      productName: "Logo songoku",
      startBid: "10$",
      status: 1,
      description: "Mo hinh goku dep",
    },
    {
      key: 2,
      seller: "Anh",
      productImage:
        "https://s3.ap-southeast-1.amazonaws.com/family.circle/avatar/AVATAR_tB5idnWvVj.jpg",
      productName: "lego nami",
      startBid: "10$",
      status: 2,
      description: "Mo hinh nami cuc mup",
    },
    {
      key: 3,
      seller: "Toan",
      productImage:
        "https://s3.ap-southeast-1.amazonaws.com/family.circle/avatar/AVATAR_tB5idnWvVj.jpg",
      productName: "Lego Pokemon",
      startBid: "12$",
      status: 3,
      description: "Mo hinh pokemon dep nhat the gioi",
    },
  ];
  const columns = [
    {
      title: "Seller",
      dataIndex: "seller",
      key: "seller",
      align: "center",
    },
    {
      title: "Image",
      dataIndex: "productImage",
      key: "productImage",
      align: "center",
      render: (_, record) => (
        <Avatar
          src={
            "https://s3.ap-southeast-1.amazonaws.com/family.circle/avatar/AVATAR_tB5idnWvVj.jpg"
          }
        />
      ),
    },
    {
      title: "Productname",
      dataIndex: "productName",
      key: "productName",
      align: "center",
    },
    {
      title: "Start bid",
      dataIndex: "startBid",
      key: "startBid",
      align: "center",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      align: "center",
      className: "flex justify-center",
      width: 100,
      render: (_, record) => {
        var status = " ";
        var bgcss = "";
        switch (record.status) {
          case 1:
            status = "Active";
            bgcss = "bg-green-500";
            break;
          case 2:
            status = "Pending";
            bgcss = "bg-yellow-500";
            break;
          case 3:
            status = "Lock";
            bgcss = "bg-red-500";
            break;
          default:
            break;
        }
        return <p className={`${bgcss} p-1 rounded-md  w-[80px]`}>{status}</p>;
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      align: "center",
      width: 100,
      render: (_, record) => {
        if (record.status === 2) {
          return (
            <div className="flex justify-center">
              <Button className="mr-2" type="default" onClick={() => {}}>
                Active
              </Button>
              <Button type="default" danger onClick={() => {}}>
                Reject
              </Button>
            </div>
          );
        } else {
          return <div className=""></div>;
        }
      },
    },
  ];
  return (
    <div
      className="flex flex-col"
      style={{
        padding: 24,
        minHeight: 360,
        background: bg,
      }}
    >
      <div className=" mb-2 pb-2 border-b-[1px] border-black border-solid">
        <Form layout="inline" onFinish={handleSearch} form={form}>
          <Form.Item label="Productname" name="ProductName">
            <Input defaultValue={searchParams.get("fullName")}></Input>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">Search</Button>
          </Form.Item>
          <Form.Item>
            <Button
              className=" bg-red-600 text-white hover:!text-white hover:!border-none"
              onClick={handleReset}
            >
              Reset
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="">
        <Table
          dataSource={data}
          columns={columns}
          bordered
          expandable={{
            expandedRowRender: (record) => (
              <p
                style={{
                  margin: 0,
                }}
              >
                {record.description}
              </p>
            ),
          }}
        ></Table>
      </div>
    </div>
  );
};

export default ProductsManagement;
