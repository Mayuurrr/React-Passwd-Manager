import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800 text-white flex px-5 justify-between items-center w-full'>
      <div className="logo font-bold text-2xl">
          <span className='text-green-700'>&lt;</span>
          Pass
          <span className='text-green-700'>OP/&gt;</span>
        </div>
      <div className='flex justify-center items-center'>
      Created With <img className=" w-5 mx-2" src="icons/heart.png" alt="" /> By Mayuurrr
      </div>
    </div>
  )
}

export default Footer