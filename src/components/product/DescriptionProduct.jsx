import { Table, Tabs } from "antd";
import React from "react";

const DescriptionProduct = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const descriptionContent = `
  <p>
    • Model height: 18cm
    <br />• Range of movement: High
    <br />• Number of runners: 13 runners + Decal stickers
    <br />• Accessories included: Beam Rifle, Shield
    <br />• Product does not include Action Base
    <br />• Plastic components: PS, PE, ABS
  </p>
`;
  const columns = [
    {
      title: "Bidder",
      dataIndex: "bidder",
      key: "bidder",
      render: (text) => (
        <span>
          {text.charAt(0)}**{text.charAt(text.length - 1)}
        </span>
      ),
    },
    {
      title: "Bid Amount",
      dataIndex: "bidamount",
      key: "bidamount",
    },
    {
      title: "Bid Time",
      dataIndex: "bidtime",
      key: "bidtime",
    },
  ];
  const data = [
    {
      key: "1",
      bidder: "John Brown",
      bidamount: 32,
      bidtime: "6 Nov 2023 at 11:38:41am",
    },
    {
      key: "2",
      bidder: "Jim Green",
      bidamount: 111,
      bidtime: "6 Nov 2023 at 11:38:41am ",
    },
    {
      key: "3",
      bidder: "Jim Gruuuu",
      bidamount: 111,
      bidtime: "6 Nov 2023 at 11:38:41am ",
    },
  ];
  const items = [
    {
      key: "1",
      label: "Description",
      children: (
        <div dangerouslySetInnerHTML={{ __html: descriptionContent }} />
      ),
    },
    {
      key: "2",
      label: "Bid history",
      children: (
        <Table columns={columns} dataSource={data} pagination={false} />
      ),
    },
  ];

  return (
    <div className="flex w-[1225px] h-auto items-start gap-6 p-6 relative rounded-[30px] overflow-hidden border border-solid border-black">
      <Tabs className="" onChange={onChange} type="card" items={items} />
    </div>
  );
};

export default DescriptionProduct;