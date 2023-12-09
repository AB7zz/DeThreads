import Navbar from "../components/Navbar.jsx";
import Thread from "../components/Thread.jsx";
import { useStateContext } from "../context/StateContext.jsx";

function CommentPage() {
  const {userDetails, connect, address} = useStateContext()
  return (
    <div className="h-screen bg-black">
      <Navbar />
      {
        address
        ?
          <Thread />
        :
          <div onClick={() => connect()} className="flex justify-center items-center h-[80vh]">
            <h1 className="text-[#9DFFA1] text-2xl">Connect your wallet to view comments</h1>
          </div>
      }
    </div>
  );
}
export default CommentPage;
