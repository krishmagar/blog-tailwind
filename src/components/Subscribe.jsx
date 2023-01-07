import React from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
const Subscribe = () => {
  return (
    <div className='flex flex-col items-center mx-auto my-0 w-[300px] h-fit gap-5 rounded-[20px] p-[30px] bg-black-gradient shadow-xl sm:w-[450px] lg:w-[650px] '>
      <h2 className='text-lg font-bold text-center'>Sign up to our free monthly newsletter to receive new updates about articles and more.</h2>
      <form className='flex items-center gap-1 border-solid border-2 border-sky-500 rounded-[15px] p-[10px] w-[250px] md:w-[350px] lg:w-[450px]'>
        <input type="email" placeholder='Email' className='focus:outline-none flex-1 w-full bg-transparent'/>
        <BsFillArrowRightCircleFill className='w-[28px] h-[28px] fill-emerald-400 cursor-pointer' />
      </form>
    </div>
  )
}

export default Subscribe