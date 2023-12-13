import './UserOption.css'
export const UserOption = () => {
  return (
    <div className=" flex-col items-start gap-[24px] p-6  bg-[#2B6777] rounded-[14px] fixed top-16 right-10">
        <a className="user" href="">Profile</a>
        <a className="user" href="#">Log out</a>
    </div>
  );
};
