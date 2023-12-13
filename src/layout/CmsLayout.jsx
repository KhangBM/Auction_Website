import { Outlet } from "react-router-dom";
const CmsLayout = () => {
  return (
    <div className="absolute h-full w-full">
      <Outlet />
    </div>
  );
};

export default CmsLayout;
