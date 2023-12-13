import { Link } from "react-router-dom";

const Item = (props) => {
  const { img, name, currentPrice, startDate } = props;
  return (
    <Link to="/productdetail">
      <div className=" border-solid border-[4px] rounded-[12px] border-[#52AB98] p-4 mt-4 h-[500px] ">
        <div className=" relative m-1">
          <img
            src={img}
            alt=""
            className=" w-[300px] h-[300px] object-cover rounded-[12px] cursor-pointer hover:opacity-60"
          />
          <p className=" absolute bottom-0 left-0 pt-1 pb-1 pl-1 pr-1 bg-timeleft blur-[0.1px] rounded-[12px] text-white">
            {startDate}
          </p>
        </div>
        <div className="h-[100px]">
          <p className=" text-2xl text-[#000000] overflow-hidden line-clamp-3 text-ellipsis">
            {name}
          </p>
        </div>
        <div className=" flex flex-row gap-1 items-center">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 20 24"
              fill="none"
            >
              <path
                d="M19.9586 10.434C19.8612 10.1733 19.6119 10 19.3332 10H11.2832L15.9266 0.972C16.0726 0.688 15.9972 0.340667 15.7459 0.143333C15.6246 0.0473333 15.4786 0 15.3332 0C15.1779 0 15.0226 0.0546667 14.8979 0.162L9.99989 4.392L0.231224 12.8287C0.0205577 13.0107 -0.0554423 13.3047 0.0418911 13.5653C0.139224 13.826 0.387891 14 0.666558 14H8.71656L4.07322 23.028C3.92722 23.312 4.00256 23.6593 4.25389 23.8567C4.37522 23.9527 4.52122 24 4.66656 24C4.82189 24 4.97722 23.9453 5.10189 23.838L9.99989 19.608L19.7686 11.1713C19.9799 10.9893 20.0552 10.6953 19.9586 10.434Z"
                fill="#FFAC33"
              />
            </svg>
          </div>
          <p className=" text-xl font-medium">Current Bid</p>
          <p className=" text-xl font-bold text-[red]">
            {currentPrice} <span>VND</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Item;
