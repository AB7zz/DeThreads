import React from 'react'
import { useStateContext } from '~context/StateContext'

const BotNav = () => {
    const {setPage} = useStateContext()
    return (
        <div>BotNav</div>
    )
}

export default BotNav