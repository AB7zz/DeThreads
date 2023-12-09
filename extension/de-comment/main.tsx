import React from 'react'
import { useStateContext } from '~context/StateContext'
import Comments from '~pages/Comments'
import Home from '~pages/Home'


const Main = () => {
    const {page, setPage} = useStateContext()
    if(page == '/home'){
        return (
            <Home />
        )
    }else if(page == '/comments'){
        return(
            <Comments />
        )
    }
}

export default Main