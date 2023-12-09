import React from 'react'
import { useStateContext } from '~context/StateContext'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Navbar = () => {
    const {setPage, darkMode, setDarkMode} = useStateContext()
    return (
        <div className='bg-black py-3 px-5 flex justify-between items-center'>
            <div className='cursor-pointer bg-[#2C2C2C] rounded-[50%] px-2 py-1 h-full'>
                <span className='text-white'>A</span>
            </div>
            <h2 className='cursor-pointer text-center text-[#9DFFA1] text-lg'>DeThreads</h2>
            <div onClick={() => setDarkMode(darkMode => !darkMode)} className='cursor-pointer bg-[#141414] hover:bg-[#1c1c1c] border-1 border-white px-2 py-2 rounded-[50%]'>
                {darkMode 
                ? 
                    <LightModeIcon className='text-[#9DFFA1]' />
                :
                    <DarkModeIcon className='text-[#9DFFA1]' />
                }
            </div>
        </div>
    )
}

export default Navbar