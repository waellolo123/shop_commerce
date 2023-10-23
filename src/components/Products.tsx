import React from 'react';
import { ProductProps } from '../../type';
import Image from 'next/image';
import { HiShoppingCart } from 'react-icons/hi';
import {FaHeart} from 'react-icons/fa'
import FormatedPrice from './FormatedPrice';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/nextSlice';

const Products = ({productData}: any) => {
  const dispatch = useDispatch();

const handleClick = () => {
  console.log('clicked');
  dispatch(addToCart(productData));
}  
  
   
  return (
    <div className='w-full px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>
      {productData.map(({_id, title, brand, category, description, image, isNew, oldPrice, price}: ProductProps)=>(
        <div key={_id} className='w-full bg-white text-gray-500 rounded-lg group overflow-hidden'>
          <div className='w-full h-[400px] relative'>
           <Image src={image} alt='product-image' className='w-full h-full object-cover scale-100 hover:scale-90 transition-transform dur300' width={300} height={300}/>
           <div className='w-12 h-24 absolute bottom-20 right-0 border-[1px] border-x-gray-400 bg-white rounded-md flex flex-col translate-x-20 group-hover:translate-x-0 transition-transform duration-300'>
            <span
            onClick={()=>dispatch(addToCart({
              id: _id,
              brand: brand,
              category: category,
              image: image,
              description: description, 
              isNew: isNew,
              oldPrice: oldPrice,
              price: price,
              title: title,
              quantity: 1,
             }))} 
            className='w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300'>
              <HiShoppingCart />
            </span >
            <span className='w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300'>
              <FaHeart />
            </span>
           </div>
           {isNew && <p className='absolute top-4 right-4 text-amazon_blue font-medium textxs tracking-wide animate-bounce'>!save <FormatedPrice amount={oldPrice -price}/></p>}
          </div>
          <hr />
          <div className='px-4 py-3 flex flex-col gap-1'>
           <p className='text-xs text-gray-500 tracking-wide'>{category}</p>
           <p className='text-base font-medium'>{title}</p>
           <div className='flex items-center gap-3'>
           <p><span className='text-sm line-through'><FormatedPrice amount={oldPrice} /></span></p>
           <p><span className='text-amazon_blue font-semibold'><FormatedPrice amount={price} /></span></p>
           </div>
           <p className='text-xs text-gray-600 text-justify mb-3'>{description.substring(0, 100)}</p>
           <button className='h-10 font-medium bg-amazon_blue text-white rounded-md hover:bg-amazon_yellow hover:text-black duration-300' onClick={()=>dispatch(addToCart({
            id: _id,
            brand: brand,
            category: category,
            image: image,
            description: description, 
            isNew: isNew,
            oldPrice: oldPrice,
            price: price,
            title: title,
            quantity: 1,
           }))}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Products