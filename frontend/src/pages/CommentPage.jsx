/* eslint-disable no-unused-vars */
import Navbar from "../components/Navbar.jsx";
import Thread from "../components/Thread.jsx";
import React from 'react'
import { useStateContext } from "../context/StateContext.jsx";
import { useSearchParams } from "react-router-dom";

 
function CommentPage() { 
  const [searchParams, setSearchParams] = useSearchParams(); 
  const url = searchParams.get("url"); 
  const { userDetails, getSignerAndContract } = useStateContext();
  const [username, setUsername] = React.useState('')
  // React.useEffect(() => { 
  //   fetchAllUsers() 
  //   handleReadComments(url)
  // }, [])
  const [isStringPresent, setStringPresent] = React.useState(false)
  // React.useEffect(() => {
  //   if(users && users.length>0){ 
  //     setStringPresent(false)
  
  //     for (let i = 0; i < users.length; i++) {
  //       for (let j = 0; j < users[i].length; j++) {  
  //         if (users[i][j] === address) {
  //           setStringPresent(true)   
  //           break;
  //         }
  //       }
  //     } 
  //   }
  // }, [users])
  return (
    <div className="h-screen bg-black flex  items-center flex-col">
      <Navbar />
      {(userDetails.wallet && isStringPresent) ? (
        <Thread /> 
      ) : (userDetails.wallet && !isStringPresent) ?  
      <div 
          className="flex flex-col justify-center items-center h-[80vh] w-2/3"
        >
          <input onChange={(e) => setUsername(e.target.value)} type="text" className="bg-transparent border border-1 border-[#9DFFA1] pl-3 py-1 rounded" placeholder="Enter username" />
          <button className="bg-[#000] text-[#9DFFA1] font-bold border border-[#9DFFA1] hover:bg-[#9DFFA1] hover:text-black ">
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
