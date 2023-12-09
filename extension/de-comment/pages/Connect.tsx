import React from 'react'
import { useStateContext } from '~context/StateContext'

const Connect = () => {
    const {connect} = useStateContext()
    return (
        <div className='py-10 px-10 flex justify-center bg-black mb-[35px]'>
            <button onClick={() => connect()} className='text-white font-semibold text-center rounded bg-[#2e6330] hover:bg-[#224723] px-10 py-2'>Connect to wallet</button>
        </div>
    )
}

export default Connect