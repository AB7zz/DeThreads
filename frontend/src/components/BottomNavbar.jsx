import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 w-full border-t-1 border-white bg-black px-5 py-3 flex justify-around">
      <Link to="/">
        <div className="cursor-pointer">
          <ChatBubbleOutlineOutlinedIcon />
        </div>
      </Link>
      <Link to="/profile">
        <div className="cursor-pointer">
          <PersonOutlinedIcon />
        </div>
      </Link>
    </div>
  );
};

export default BottomNav;
