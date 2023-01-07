import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const NavBar = () => {
  return (
    <nav className='w-full flex justify-between items-center px-[80px] py-[50px] h-6 bg-[#11101D] text-white text-lg'>
        <h2>Krish's Blog</h2>
        <ul className='list-none gap-10 hidden md:flex'>
            <li><a href="#">Blog</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <div className='md:hidden flex justify-center items-center'>
            <GiHamburgerMenu className='h-[20px] w-[20px] cursor-pointer' />
        </div>
    </nav>
  )
}

export default NavBar