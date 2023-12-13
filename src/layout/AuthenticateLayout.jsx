import { Outlet } from "react-router-dom";

const AuthenticateLayout = () => {
  return (
    <div className=" bg-[#C4C4C4] w-full h-[100vh] flex justify-center items-center content-center">
      <Outlet />
    </div>
  );
};

export default AuthenticateLayout;
