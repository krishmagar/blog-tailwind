import React from 'react'

const Hero = () => {
  return (
    <div className='p-[30px] w-[90%] md:w-[70%] my-0 mx-auto'>
      <h1 className='font-bold text-4xl text-center mb-5'>One Platform For All Tech News</h1>
      <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quo incidunt facilis commodi facere necessitatibus doloribus ducimus, maxime expedita explicabo eum perferendis reprehenderit enim, ipsam consectetur amet. Esse, iste quaerat.
      </p>
      <div className='flex gap-2 justify-center mt-5'>
        <button className='bg-[#34d399] rounded-[20px] w-[100px] h-[40px] text-center text-white font-bold'>Read</button>
        <button className='bg-[#34d399] rounded-[20px] w-[100px] h-[40px] text-center text-white font-bold'>Write</button>
      </div>
    </div>
  )
}

export default Hero