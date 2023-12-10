/* eslint-disable no-unused-vars */
import Navbar from "../components/Navbar.jsx";
import Thread from "../components/Thread.jsx";
import { useStateContext } from "../context/StateContext.jsx";

function CommentPage() {
  const { userDetails, connect, address } = useStateContext();
  return (
    <div className="h-screen bg-black flex  items-center flex-col">
      <Navbar />
      {/* {address ? (
        <Thread />
      ) : (
        <div
          onClick={() => connect()}
          className="flex flex-col justify-center items-center h-[80vh] w-2/3"
        >
          <h1 className="text-[#9DFFA1] text-2xl mb-5 text-center">
            Connect your wallet to view comments
          </h1>
          <button className="bg-[#000] text-[#9DFFA1] font-bold border border-[#9DFFA1] hover:bg-[#9DFFA1] hover:text-black ">
            Connect
          </button>
        </div>
      )} */}
      <Thread />
    </div>
  );
}
export default CommentPage;
