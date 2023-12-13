import LeftSide from "../../components/home/LeftSide";
import RightSide from "../../components/home/RightSide";

const HomePage = () => {
  return (
    <div className=" w-full mt-[60px]  grid grid-flow-col grid-cols-[15%_85%]">
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default HomePage;
