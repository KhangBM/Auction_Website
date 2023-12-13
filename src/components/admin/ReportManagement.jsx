import { Avatar, Button, Form, Input, Table } from "antd";
import dayjs from "dayjs";
import { useSearchParams } from "react-router-dom";
const ReportManagement = (props) => {
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
      accuserImage:
        "https://s3.ap-southeast-1.amazonaws.com/family.circle/avatar/AVATAR_tB5idnWvVj.jpg",
      accuserName: "Logo songoku",
      accuserEmail: "test@gmail.com",
      reason: "Ghét nên report",
      accusedImage:
        "https://s3.ap-southeast-1.amazonaws.com/family.circle/avatar/AVATAR_tB5idnWvVj.jpg",
      accusedName: "Logo songoku",
      accusedEmail: "test@gmail.com",
      status: 1,
    },
    {
      accuserImage:
        "https://s3.ap-southeast-1.amazonaws.com/family.circle/avatar/AVATAR_tB5idnWvVj.jpg",
      accuserName: "Logo songoku",
      accuserEmail: "test@gmail.com",
      reason: "Thích nên report",
      accusedImage:
        "https://s3.ap-southeast-1.amazonaws.com/family.circle/avatar/AVATAR_tB5idnWvVj.jpg",
      accusedName: "Logo songoku",
      accusedEmail: "test@gmail.com",
      status: 2,
    },
    {
      accuserImage:
        "https://s3.ap-southeast-1.amazonaws.com/family.circle/avatar/AVATAR_tB5idnWvVj.jpg",
      accuserName: "Logo songoku",
      accuserEmail: "test@gmail.com",
      reason: "Report đến chết",
      accusedImage:
        "https://s3.ap-southeast-1.amazonaws.com/family.circle/avatar/AVATAR_tB5idnWvVj.jpg",
      accusedName: "Logo songoku",
      accusedEmail: "test@gmail.com",
      status: 3,
    },
  ];
  const columns = [
    {
      title: "Accuser",
      children: [
        {
          title: "Image",
          dataIndex: "accuserImage",
          key: "accuserImage",
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
          title: "Accuser Name",
          dataIndex: "accuserName",
          key: "accuserName",
          align: "center",
        },
        {
          title: "Accuser email",
          dataIndex: "accuserEmail",
          key: "accuserEmail",
          align: "center",
        },
      ],
    },

    {
      title: "Reason",
      dataIndex: "reason",
      key: "reason",
      align: "center",
    },
    {
      title: "Accused",
      children: [
        {
          title: "Image",
          dataIndex: "accusedImage",
          key: "accusedImage",
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
          title: "Accused Name",
          dataIndex: "accusedName",
          key: "accusedName",
          align: "center",
        },
        {
          title: "Accused email",
          dataIndex: "accusedEmail",
          key: "accusedEmail",
          align: "center",
        },
      ],
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      align: "center",
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
        return (
          <div
            className={`${bgcss} p-1 rounded-md place-items-center flex justify-center`}
          >
            <p>{status}</p>
          </div>
        );
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
      <div className=" mb-2 pb-2 border-b-[1px] border-black border-solid"></div>
      <div className="">
        <Table dataSource={data} columns={columns} bordered></Table>
      </div>
    </div>
  );
};

export default ReportManagement;
