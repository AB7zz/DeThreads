/* eslint-disable no-unused-vars */
import Navbar from "../components/Navbar.jsx";
import Thread from "../components/Thread.jsx";
import React from 'react'
import { useStateContext } from "../context/StateContext.jsx";
import { useSearchParams } from "react-router-dom";

 
function CommentPage() { 
  const [searchParams, setSearchParams] = useSearchParams(); 
  const url = searchParams.get("url"); 
  const { username, getSignerAndContract, address, createAccount } = useStateContext();
  const [usernameDummy, setUsername] = React.useState('')
  return (
    <div className="h-screen bg-black flex  items-center flex-col">
      <Navbar />
      {(address && username) ? (
        <Thread /> 
      ) : (address && !username) ?  
      <div 
          className="flex flex-col justify-center items-center h-[80vh] w-2/3"
        >
          <input onChange={(e) => setUsername(e.target.value)} type="text" className="bg-transparent border border-1 border-[#9DFFA1] pl-3 py-1 rounded" placeholder="Enter username" />
          <button onClick={() => createAccount(usernameDummy)} className="bg-[#000] text-[#9DFFA1] font-bold border border-[#9DFFA1] hover:bg-[#9DFFA1] hover:text-black ">
            Create Account!
          </button>
        </div>
      :(
        <div
          onClick={() => getSignerAndContract()}
          className="flex flex-col justify-center items-center h-[80vh] w-2/3"
        >
          <button className="bg-[#000] text-[#9DFFA1] font-bold border border-[#9DFFA1] hover:bg-[#9DFFA1] hover:text-black ">
            Connect
          </button>
        </div>
      )}
    </div>
  );
}
export default CommentPage;
