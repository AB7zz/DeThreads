import React from 'react'
import { useStateContext } from '~context/StateContext'
import LightModeIcon from '@mui/icons-material/LightMode';

const Navbar = () => {
    const {setPage} = useStateContext()
    return (
        <div className='bg-black py-3 px-5 flex justify-between'>
            <div className='bg-[#2C2C2C] rounded-[50%] px-2 py-1'>
                <span className='text-white'>A</span>
            </div>
            <h2 className='text-[#9DFFA1] text-lg'>DeThreads</h2>
            <div className='bg-transparent border-1 border-white px-2 py-1 rounded-[50%]'>
                <LightModeIcon className='text-[#9DFFA1]' />
            </div>
        </div>
    )
}

export default Navbar