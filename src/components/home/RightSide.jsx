import { Pagination } from "antd";
import Item from "./Item";

const RightSide = () => {
  return (
    <div className=" m-4 flex flex-col gap-12">
      <div className="slider flex flex-col gap-4">
        <div className=" flex flex-row gap-2 justify-start items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="54"
            height="66"
            viewBox="0 0 54 66"
            fill="none"
          >
            <path
              d="M33 0.135254L27 14.7582L19.5 5.61794V18.4121L4.5 14.7582L16.5 29.3811L0 40.3465H18L9 62.2809L27 47.6579L43.5 65.9366L39 40.3465H54L42 29.3793L54 12.9294L36 18.4121L33 0.135254Z"
              fill="#BB1A34"
            />
            <path
              d="M34.3711 23.6763L37.1611 22.8257L45.0001 20.4377L39.9286 27.3885L37.9501 30.1025L40.3351 32.2792L44.7226 36.2901H35.8456L36.5551 40.3302L38.8816 53.5542L30.1141 43.842L28.5301 42.0861L26.7481 43.5342L18.8881 49.9203L22.4971 41.1262L24.4801 36.2901H14.3461L19.9846 32.5397L23.2021 30.4049L20.6116 27.2446L16.0456 21.6836L20.8771 22.8603L24.1561 23.6599V15.9568L26.3311 18.6071L29.0221 21.884L30.7216 17.7382L32.6311 13.0825"
              fill="#FCAB40"
            />
            <path
              d="M32.268 26.1844L33.4185 25.8329L36.6555 24.8475L34.5615 27.7181L33.744 28.8383L34.728 29.7363L36.54 31.3921H32.8755L33.168 33.0606L34.1295 38.5196L30.51 34.5105L29.8545 33.7855L29.1195 34.383L25.875 37.0205L27.3645 33.3884L28.1835 31.3921H24L26.3295 29.8438L27.657 28.9622L26.5875 27.658L24.702 25.3611L26.6955 25.8475L28.05 26.1771V22.9986L28.9485 24.0915L30.0585 25.4449L30.7605 23.7345L31.548 21.811"
              fill="#F5F8FA"
            />
          </svg>
          <div className=" text-[#2B6777] text-4xl font-bold ">Seasonal</div>
        </div>
        <div className="border-solid border-[3px] rounded-[14px] border-[#2B6777] flex flex-col justify-start pl-9 pr-9 pt-12 pb-12 gap-4">
          <div className="">
            <p className=" text-[#2B6777] text-4xl font-bold">Pride Month </p>
            <p className=" text-[#2B6777] text-4xl font-bold">Special Bids</p>
          </div>
          <div className=" pt-4 pb-4 pl-6 pr-6 bg-[#F2F2F2]  w-max rounded-[12px] flex flex-row gap-1 items-center cursor-pointer">
            <div className="text-sm text-[#52AB98] font-semibold">
              Check them out
            </div>
            <div className=" flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071C7.90237 19.3166 7.90237 18.6834 8.29289 18.2929L14.5858 12L8.29289 5.70711C7.90237 5.31658 7.90237 4.68342 8.29289 4.29289Z"
                  fill="#52AB98"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="tren flex flex-col gap-2 ">
        <div className=" flex flex-row justify-between">
          <div className="flex flex-row gap-2">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 56 65"
                fill="none"
              >
                <path
                  d="M56 33.7673C56 30.0945 55.3955 26.5732 54.2871 23.3154C53.5294 32.9141 48.7974 37.8444 43.8529 35.5484C39.2214 33.3968 42.3426 25.0093 42.5732 21.007C42.9619 14.2226 42.5534 6.45671 31.1574 0C35.8927 9.7964 31.7059 15.8826 27.3148 16.2531C22.4428 16.6646 17.9809 11.7254 19.628 3.71016C14.2948 7.96002 14.14 15.1132 15.7854 19.7406C17.5016 24.564 15.7162 28.5716 11.5311 29.0169C6.85341 29.5156 4.25435 23.6004 6.65082 14.1745C2.50353 19.4556 0 26.2953 0 33.7673C0 50.4906 12.5358 64.0471 28 64.0471C43.4642 64.0471 56 50.4906 56 33.7673Z"
                  fill="#F4900C"
                />
                <path
                  d="M45.1195 42.6713C45.3632 48.1644 40.9013 50.3178 38.4999 49.2776C35.0312 47.7761 35.9618 45.197 35.0691 39.8535C34.1764 34.51 30.7456 30.7998 25.6677 29.1665C29.3736 40.4466 23.6138 44.6038 20.5948 45.3466C17.5115 46.1054 14.4133 45.3448 14.0592 38.2095C10.4621 42.0817 8.23523 47.4395 8.23523 53.36C8.23523 54.0155 8.27311 54.6603 8.32582 55.3015C13.3823 60.7056 20.3279 64.047 27.9999 64.047C35.6719 64.047 42.6176 60.7056 47.6741 55.3015C47.7268 54.6603 47.7646 54.0155 47.7646 53.36C47.7646 49.4646 46.8028 45.815 45.1195 42.6713Z"
                  fill="#FFCC4D"
                />
              </svg>
            </div>
            <div className=" text-[#2B6777] text-4xl font-bold">Trending</div>
          </div>
          <div className="flex flex-row gap-2">
            <div className=" cursor-pointer bg-[#2D85D6] pt-2 pr-4 pb-2 pl-6 flex flex-row gap-2 rounded items-center">
              <p className=" text-base font-medium text-white">Filter</p>
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.29289 7.79289C4.68342 7.40237 5.31658 7.40237 5.70711 7.79289L12 14.0858L18.2929 7.79289C18.6834 7.40237 19.3166 7.40237 19.7071 7.79289C20.0976 8.18342 20.0976 8.81658 19.7071 9.20711L12.7071 16.2071C12.3166 16.5976 11.6834 16.5976 11.2929 16.2071L4.29289 9.20711C3.90237 8.81658 3.90237 8.18342 4.29289 7.79289Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className=" cursor-pointer bg-[#2D85D6] pt-2 pr-4 pb-2 pl-6 flex flex-row gap-2 rounded items-center">
              <p className=" text-base font-medium text-white">Sort by</p>
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.29289 7.79289C4.68342 7.40237 5.31658 7.40237 5.70711 7.79289L12 14.0858L18.2929 7.79289C18.6834 7.40237 19.3166 7.40237 19.7071 7.79289C20.0976 8.18342 20.0976 8.81658 19.7071 9.20711L12.7071 16.2071C12.3166 16.5976 11.6834 16.5976 11.2929 16.2071L4.29289 9.20711C3.90237 8.81658 3.90237 8.18342 4.29289 7.79289Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className=" grid grid-flow-row grid-cols-[25%_25%_25%_25%] gap-2">
          <Item
            img={
              "https://i.pinimg.com/236x/cc/20/47/cc204756b189ff2cf4bfcaa3e320561c.jpg"
            }
          />
          <Item
            img={
              "https://i.pinimg.com/236x/cc/20/47/cc204756b189ff2cf4bfcaa3e320561c.jpg"
            }
          />
          <Item
            img={
              "https://i.pinimg.com/236x/cc/20/47/cc204756b189ff2cf4bfcaa3e320561c.jpg"
            }
          />
          <Item
            img={
              "https://i.pinimg.com/236x/cc/20/47/cc204756b189ff2cf4bfcaa3e320561c.jpg"
            }
          />
          <Item
            img={
              "https://i.pinimg.com/236x/cc/20/47/cc204756b189ff2cf4bfcaa3e320561c.jpg"
            }
          />
        </div>
        <div className=" mt-2 flex flex-row justify-end">
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
      <div className="tren flex flex-col gap-2 ">
        <div className=" flex flex-row justify-between">
          <div className="flex flex-row gap-2">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 56 65"
                fill="none"
              >
                <path
                  d="M56 33.7673C56 30.0945 55.3955 26.5732 54.2871 23.3154C53.5294 32.9141 48.7974 37.8444 43.8529 35.5484C39.2214 33.3968 42.3426 25.0093 42.5732 21.007C42.9619 14.2226 42.5534 6.45671 31.1574 0C35.8927 9.7964 31.7059 15.8826 27.3148 16.2531C22.4428 16.6646 17.9809 11.7254 19.628 3.71016C14.2948 7.96002 14.14 15.1132 15.7854 19.7406C17.5016 24.564 15.7162 28.5716 11.5311 29.0169C6.85341 29.5156 4.25435 23.6004 6.65082 14.1745C2.50353 19.4556 0 26.2953 0 33.7673C0 50.4906 12.5358 64.0471 28 64.0471C43.4642 64.0471 56 50.4906 56 33.7673Z"
                  fill="#F4900C"
                />
                <path
                  d="M45.1195 42.6713C45.3632 48.1644 40.9013 50.3178 38.4999 49.2776C35.0312 47.7761 35.9618 45.197 35.0691 39.8535C34.1764 34.51 30.7456 30.7998 25.6677 29.1665C29.3736 40.4466 23.6138 44.6038 20.5948 45.3466C17.5115 46.1054 14.4133 45.3448 14.0592 38.2095C10.4621 42.0817 8.23523 47.4395 8.23523 53.36C8.23523 54.0155 8.27311 54.6603 8.32582 55.3015C13.3823 60.7056 20.3279 64.047 27.9999 64.047C35.6719 64.047 42.6176 60.7056 47.6741 55.3015C47.7268 54.6603 47.7646 54.0155 47.7646 53.36C47.7646 49.4646 46.8028 45.815 45.1195 42.6713Z"
                  fill="#FFCC4D"
                />
              </svg>
            </div>
            <div className=" text-[#2B6777] text-4xl font-bold">Upcoming</div>
          </div>
        </div>
        <div className=" grid grid-flow-row grid-cols-[25%_25%_25%_25%] gap-2">
          <Item
            img={
              "https://i.pinimg.com/236x/7e/48/e8/7e48e865415b0698f85d7b34b70006c8.jpg"
            }
          />
          <Item
            img={
              "https://i.pinimg.com/236x/7e/48/e8/7e48e865415b0698f85d7b34b70006c8.jpg"
            }
          />
          <Item
            img={
              "https://i.pinimg.com/236x/7e/48/e8/7e48e865415b0698f85d7b34b70006c8.jpg"
            }
          />
          <Item
            img={
              "https://i.pinimg.com/236x/7e/48/e8/7e48e865415b0698f85d7b34b70006c8.jpg"
            }
          />
          <Item
            img={
              "https://i.pinimg.com/236x/7e/48/e8/7e48e865415b0698f85d7b34b70006c8.jpg"
            }
          />
        </div>
        <div className="mt-2 flex flex-row justify-end">
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
    </div>
  );
};

export default RightSide;
