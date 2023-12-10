import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNavbar";

const Profile = () => {
  return (
    <div className="h-screen bg-black flex flex-col items-center">
      <Navbar />
      <div className=" h-full w-full  bg-gradient-to-b from-[#0f1a0f] via-black to-black md:border md:border-s-[#9DFFA1] py-10">
        <div className="flex flex-col justify-center !border-b-1 border-[#9DFFA1] px-5">
          <div className="cursor-pointer m-auto bg-[#2C2C2C] rounded-[50%] px-7 py-6">
            <span className="text-white text-xl">A</span>
          </div>
          <p className="text-white text-center text-xl font-semibold my-3">
            ethindian345
          </p>
          <p className="text-white text-center text-xl my-5">
            Points: <span>7344</span>
          </p>
        </div>
        <div className="border !boder-1 border-r-0 border-l-0 border-[#9DFFA1] py-2 px-5">
          <div className="flex ">
            <p className="cursor-pointer text-[#9DFFA1] mr-5 font-semibold">
              New
            </p>
            <p className="cursor-pointer text-[#6C6C6C] font-semibold">Top</p>
          </div>
        </div>
        <div className="border !border-1 border-t-0 border-l-0 border-r-0 border-[#9DFFA1] px-5 my-5">
          <div className="flex">
            <p className="text-white font-semibold text-lg">UrlTitle</p>
          </div>
          <p className="my-3 text-[#8991A0]">Nah that sucks ass</p>
          <div className="my-3 flex ">
            <ArrowDropUpOutlinedIcon className="cursor-pointer text-[#8991A0] hover:text-[#9DFFA1] mr-2" />
            <span className="mr-3 text-white font-semibold">10</span>
            <ArrowDropDownOutlinedIcon className="cursor-pointer text-[#8991A0] hover:text-[#FF4127] mr-2" />
            <div className="items-center">
              <ReplyOutlinedIcon className="text-[#8991A0] mr-1" />
              <span className="text-[#8991A0] mr-1">0</span>
              <span className="text-[#8991A0]">Reply</span>
            </div>
          </div>
        </div>
        <div className="!border-1 border-t-0 border-l-0 border-r-0 border-[#9DFFA1] px-5 my-5">
          <div className="flex">
            <p className="text-white font-semibold text-lg">UrlTitle</p>
          </div>
          <p className="my-3 text-[#8991A0]">Nah that sucks ass</p>
          <div className="my-3 flex ">
            <ArrowDropUpOutlinedIcon className="cursor-pointer text-[#8991A0] hover:text-[#9DFFA1] mr-2" />
            <span className="mr-3 text-white font-semibold">10</span>
            <ArrowDropDownOutlinedIcon className="cursor-pointer text-[#8991A0] hover:text-[#FF4127] mr-2" />
            <div className="items-center">
              <ReplyOutlinedIcon className="text-[#8991A0] mr-1" />
              <span className="text-[#8991A0] mr-1">0</span>
              <span className="text-[#8991A0]">Reply</span>
            </div>
          </div>
        </div>
        <BottomNav />
      </div>
    </div>
  );
};

export default Profile;
