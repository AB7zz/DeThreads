import React from "react";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import { useStateContext } from "../context/StateContext";
import { useSearchParams, useParams } from "react-router-dom";

const Thread = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const url = searchParams.get("url");
  const { handleInsertComment, handleReadComments, address, contract, comments } =
    useStateContext();
  const [showReplies, setShowReplies] = React.useState(false);
  const [showComments, setShowComments] = React.useState(false);
  const [comment, setComment] = React.useState("");

  
  //   const [tabTitle, setTabTitle] = React.useState('')
  // React.useEffect(() => {
  //     chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  //         const activeTab = tabs[0];
  //         const tabTitle = activeTab ? activeTab.title : '';
  //         setTabTitle(tabTitle)
  //     });
  // }, [])
  return (
    <div className="py-5 bg-black flex flex-col overflow-hidden mt-5 mx-auto ">
      <h3 className="text-white text-center text-xl font-bold">{url}</h3>

      <div className="my-5 flex flex-col px-5 w-[89%]">
        <textarea
          onChange={(e) => setComment(e.target.value)}
          className="w-auto bg-transparent border !border-1 border-white focus:!border-[#8991A0] text-white p-3 rounded-md"
          placeholder="Add a comment"
        />
        <button
          onClick={() => handleInsertComment(url, comment)}
          className="w-auto px-5 py-1 my-3 font-semibold text-center text-black rounded bg-[#9DFFA1] hover:bg-[#224723]"
        >
          Comment!
        </button>
        <button
          onClick={() => handleReadComments(url)}
          className="w-auto px-5 py-1 my-3 font-semibold text-center text-black rounded bg-[#9DFFA1] hover:bg-[#224723]"
        >
          Fetch All Comments!
        </button>
      </div>

      <div className="m-10">
        {comments && comments.map(comment => (
          <>
        <div className="flex items-center"> 
          <div className="cursor-pointer bg-[#2C2C2C] rounded-[50%] px-2 py-1 mr-3">
            <span className="text-white">A</span>
          </div>
          <h3 className="text-white font-semibold">{Array.from(map.entries())[0]['value']}</h3>
        </div>
        <p className="my-3 text-white pl-10">
        {Array.from(map.entries())[0]['value']}
        </p>
        <div className="flex">
          <ArrowDropUpOutlinedIcon className="cursor-pointer text-[#8991A0] hover:text-[#9DFFA1] mr-2" />
          <span className="mr-3 text-white font-semibold">10</span>
          <ArrowDropDownOutlinedIcon className="cursor-pointer text-[#8991A0] hover:text-[#9DFFA1] mr-2" />
          <div
            className="items-center"
            onClick={() => setShowComments(!showComments)}
          >
            <ReplyOutlinedIcon className="text-[#8991A0] mr-1" />
            <span className="text-[#8991A0]">Reply</span>
          </div>
        </div>
        <p
          onClick={() => setShowReplies((showReplies) => !showReplies)}
          className="text-blue-500 my-3 cursor-pointer flex items-center"
        >
          View Replies
          {showReplies ? (
            <ArrowDropUpOutlinedIcon className="text-blue-500 ml-1" />
          ) : (
            <ArrowDropDownOutlinedIcon className="text-blue-500 ml-1" />
          )}
        </p>
        </>
        ))}
        <div className="flex items-center"> 
          <div className="cursor-pointer bg-[#2C2C2C] rounded-[50%] px-2 py-1 mr-3">
            <span className="text-white">A</span>
          </div>
          <h3 className="text-white font-semibold">AB7zz</h3>
        </div>
        <p className="my-3 text-white pl-10">
        First comment!
        </p>
        <div className="flex">
          <ArrowDropUpOutlinedIcon className="cursor-pointer text-[#8991A0] hover:text-[#9DFFA1] mr-2" />
          <span className="mr-3 text-white font-semibold">10</span>
          <ArrowDropDownOutlinedIcon className="cursor-pointer text-[#8991A0] hover:text-[#9DFFA1] mr-2" />
          <div
            className="items-center"
            onClick={() => setShowComments(!showComments)}
          >
            <ReplyOutlinedIcon className="text-[#8991A0] mr-1" />
            <span className="text-[#8991A0]">Reply</span>
          </div>
        </div>
        <p
          onClick={() => setShowReplies((showReplies) => !showReplies)}
          className="text-blue-500 my-3 cursor-pointer flex items-center"
        >
          View Replies
          {showReplies ? (
            <ArrowDropUpOutlinedIcon className="text-blue-500 ml-1" />
          ) : (
            <ArrowDropDownOutlinedIcon className="text-blue-500 ml-1" />
          )}
        </p>
        {showReplies && (
          <div className="ml-10">
            <div className="flex items-center">
              <div className="cursor-pointer bg-[#2C2C2C] rounded-[50%] px-2 py-1 mr-3">
                <span className="text-white">A</span>
              </div>
              <h3 className="text-white cursor-pointer font-semibold">AB7zz</h3>
            </div>
            <p className="my-3 pl-10 text-white">True true</p>
            <div className="flex">
              <ArrowDropUpOutlinedIcon className="cursor-pointer text-[#8991A0] hover:text-[#9DFFA1] mr-2" />
              <span className="mr-3 text-white font-semibold">10</span>
              <ArrowDropDownOutlinedIcon className="cursor-pointer text-[#8991A0] hover:text-[#9DFFA1] mr-2" />
              <div className="items-center">
                <ReplyOutlinedIcon className="text-[#8991A0] mr-1" />
                <span className="text-[#8991A0]">Reply</span>
              </div>
            </div>
          </div>
        )}
      </div>
      {showComments && (
        <div className="my-5 flex flex-col px-5 w-[89%]">
          <textarea
            className="w-auto bg-transparent border !border-1 border-white focus:!border-[#8991A0] text-white p-3 rounded-md"
            placeholder="Add a comment"
          />
          <button className="w-auto px-5 py-1 my-3 font-semibold text-center text-black rounded bg-[#9DFFA1] hover:bg-[#224723]">
            Comment!
          </button>
        </div>
      )}
    </div>
  );
};

export default Thread;
