import React from 'react'
import BotNav from '~components/BotNav'
import Navbar from '~components/Navbar'
import { useStateContext } from '~context/StateContext'
import Comments from '~pages/Comments'
import Connect from '~pages/Connect'
import Home from '~pages/Home'
import Profile from '~pages/Profile'
import '~style.css'

const Main = () => {
    const {page, setPage, userDetails} = useStateContext()
    React.useEffect(() => {
        if(!userDetails.wallet){
            setPage('/connect')
        }else{
            setPage('/profile')
            // setPage('/connect')
        }
    }, [])
    const renderContent = () => {
        if(page == '/'){
            return (
                <Home />
            )
        }else if(page == '/comments'){
            return(
                <Comments />
            )
        }else if(page == '/profile'){
            return(
                <Profile />
            )
        }else if(page == '/connect'){
            return(
                <Connect />
            )
        }
    }

    return(
        <div className="w-[370px]">
            <Navbar />
            {renderContent()}
            <BotNav />
        </div>
    )
}

export default Main