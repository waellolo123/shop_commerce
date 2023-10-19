import Image from 'next/image'
import React from 'react'
import logo from '../images/logo_lia.png'

const Footer = () => {
  return (
    <div className='w-full h-20 bg-amazon_light text-gray-300 flex items-center justify-center gap-4'>
      <Image  src={logo} className='w-20' alt='logo' />
      <p className='text-sm'>© 2023 All rights reserved 
        <a href="https://www.waellatrache.com" target='blank' className='ml-2 text-amazon_yellow'>Sweet code Tunisia</a>
      </p>
    </div>
  )
}

export default Footer