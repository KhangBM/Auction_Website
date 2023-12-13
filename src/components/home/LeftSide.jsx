import { AppstoreOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Categories", "sub1", <AppstoreOutlined />, [
    getItem("Trendding", "1"),
    getItem("Upconmming", "2"),
  ]),
];

// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
const LeftSide = () => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <div className="  h-screen m-4 relative ">
      <div className="border-solid border-[3px] rounded-[14px] border-[#2B6777] h-full">
        <div className=" w-full p-1">
          <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            items={items}
          />
        </div>
      </div>

     
    </div>
  );
};

export default LeftSide;
