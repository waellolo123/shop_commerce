import React from 'react'
import {LuMenu} from "react-icons/lu";

const BottomHeader = () => {
  return (
    <div className='w-full h-10 bg-amazon_light text-sm text-white p-6 flex items-center'>
      <p className='flex items-center gap-1 h-8 px-2 cursor-pointer'>
      <LuMenu className="text-xl"/> All
      </p>
      <p className='hidden md:inline-flex ml-4 cursor-pointer'>Todays Deals</p>
      <p className='hidden md:inline-flex ml-4 cursor-pointer'>Customers Service</p>
      <p className='hidden md:inline-flex ml-4 cursor-pointer'>Registry</p>
      <p className='hidden md:inline-flex ml-4 cursor-pointer'>Gift Cards</p>
      <p className='hidden md:inline-flex ml-4 cursor-pointer'>Sell</p>
      <p className='hidden md:inline-flex ml-4 cursor-pointer text-amazon_yellow hover:text-red-400 duration-300'>Sign out</p>
    </div>
  )
}

export default BottomHeader;