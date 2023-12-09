import React from 'react'
import { useStateContext } from '~context/StateContext'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const BotNav = () => {
    const {setPage} = useStateContext()
    return (
        <div className='border-t-1 border-white bg-black px-5 py-3 flex justify-between'>
            <div className='cursor-pointer' onClick={() => setPage('/comments')}>
                <ChatBubbleOutlineOutlinedIcon className='text-[#9DFFA1]' />
            </div>
            <div className='cursor-pointer' onClick={() => setPage('/profile')}>
                <PersonOutlinedIcon className='text-[#9DFFA1]' />
            </div>
        </div>
    )
}

export default BotNav