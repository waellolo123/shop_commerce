import React from 'react'
import {Carousel} from 'react-responsive-carousel';
import jewl1 from '../images/jewl1.jpeg'
import jewl2 from '../images/jewl2.jpg'
import jewl3 from '../images/jewl3.jpg'
import jewl4 from '../images/jewl4.jpeg'
import Image from 'next/image';

const Banner = () => {
  return (
    <div className='relative'>
      <Carousel showStatus={false} showIndicators={false} showThumbs={false} interval={5000} transitionTime={2000}>
        {/* autoPlay infiniteLoop  */}
       <div>
        <Image priority src={jewl1} alt="slider_image" className='w-full h-[500px] object-cover'/>
       </div>
       <div>
        <Image src={jewl2} alt="slider_image" className='w-full h-[500px] object-cover'/>
       </div>
       <div>
        <Image src={jewl3} alt="slider_image" className='w-full h-[500px] object-cover'/>
       </div>
       <div>
        <Image src={jewl4} alt="slider_image" className='w-full h-[500px] object-cover'/>
       </div>
      </Carousel>
       <div className='w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20 '></div>
    </div>
  )
}

export default Banner