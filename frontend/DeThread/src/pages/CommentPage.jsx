/* eslint-disable no-unused-vars */
import Navbar from "../components/Navbar.jsx";
import Thread from "../components/Thread.jsx";
import React from 'react'
import { useStateContext } from "../context/StateContext.jsx";
import { useSearchParams, useParams } from "react-router-dom";

 
function CommentPage() { 
  const [searchParams, setSearchParams] = useSearchParams(); 
  const url = searchParams.get("url"); 
  const { userDetails, connect, address, users, handleCreateAccount, fetchAllUsers, handleReadComments } = useStateContext();
  const [username, setUsername] = React.useState('')
  React.useEffect(() => { 
    fetchAllUsers() 
    handleReadComments(url)
  }, [])
  const [isStringPresent, setStringPresent] = React.useState(false)
  React.useEffect(() => {
    if(users){ 
      setStringPresent(false)
  
      for (let i = 0; i < users.length; i++) {
        for (let j = 0; j < users[i].length; j++) {  
          if (users[i][j] === address) {
            setStringPresent(true)   
            break;
          }
        }
      } 
    }
  }, [users])
  return (
    <div className="h-screen bg-black flex  items-center flex-col">
      <Navbar />
      {(address && users && isStringPresent) ? (
        <Thread /> 
      ) : (address && users && !isStringPresent) ?  
      <div 
          onClick={() => connect()}
          className="flex flex-col justify-center items-center h-[80vh] w-2/3"
        >
          <input onChange={(e) => setUsername(e.target.value)} type="text" className="bg-transparent border border-1 border-[#9DFFA1] pl-3 py-1 rounded" placeholder="Enter username" />
          <button onClick={() => handleCreateAccount(username)} className="bg-[#000] text-[#9DFFA1] font-bold border border-[#9DFFA1] hover:bg-[#9DFFA1] hover:text-black ">
            Create Account!
          </button>
        </div>
      :(
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
      )}
    </div>
  );
}
export default CommentPage;
