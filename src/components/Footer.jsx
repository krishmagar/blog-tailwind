import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='flex justify-between mt-8 bg-black p-[30px]'>
      
      <div className='flex flex-col ml-[50px] gap-3 md:ml-[30%]'>
        <h2 className='font-bold text-center'>Krish's Blog</h2>
        <ul className='flex flex-row gap-5 justify-center'>
          <li><a href="#"><FaFacebook className='w-[20px] h-[20px] hover:fill-[#4a7ae4]' /></a></li>
          <li><a href="#"><FaInstagram className='w-[20px] h-[20px] hover:fill-[#ec4166]' /></a></li>
          <li><a href="#"><FaTwitter className='w-[20px] h-[20px] hover:fill-[#00acee]' /></a></li>
        </ul>
      </div>

      <div className='flex flex-col mr-[50px] gap-3 md:mr-[30%]'>
        <h2 className='font-bold'>Pages</h2>
        <ul className='flex flex-col gap-1'>
          <li><a href="#">Blog</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

    </div>
  )
}

export default Footer