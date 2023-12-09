import React from 'react'
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';

const Comments = () => {
  return (
    <div className='py-10 px-5 bg-black'>
      <div>
        <div className='flex items-center'>
          <div className='cursor-pointer bg-[#2C2C2C] rounded-[50%] px-2 py-1 mr-3'>
            <span className='text-white'>A</span>
          </div>
          <h3 className='text-white font-semibold'>Abhinav C V</h3>
        </div>
        <p className='my-3 text-white'>Nah man this sucks ass</p>
        <div className='flex'>
          <ArrowDropUpOutlinedIcon className='cursor-pointer text-[#8991A0] hover:text-[#9DFFA1] mr-2' />
          <span className='mr-3 text-white font-semibold'>10</span>
          <ArrowDropDownOutlinedIcon className='cursor-pointer text-[#8991A0] hover:text-[#9DFFA1] mr-2' />
          <div className='items-center'>
            <ReplyOutlinedIcon className='text-[#8991A0] mr-1' />
            <span className='text-[#8991A0]'>Reply</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comments