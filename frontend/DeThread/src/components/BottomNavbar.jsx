import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const BottomNav = () => {
  const { setPage, page } = useStateContext();
  return (
    <div className="fixed bottom-0 w-full border-t-1 border-white bg-black px-5 py-3 flex justify-around">
      <div className="cursor-pointer" onClick={() => setPage("/")}>
        <ChatBubbleOutlineOutlinedIcon />
      </div>
      <div className="cursor-pointer" onClick={() => setPage("/profile")}>
        <PersonOutlinedIcon
          className={`${
            page == "/profile" ? "text-[#9DFFA1]" : "text-[#868686]"
          }`}
        />
      </div>
    </div>
  );
};

export default BottomNav;
