import React from 'react'
import { AiFillFacebook } from 'react-icons/ai';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import Android_phone from '../assets/Android_phone.png';
import Location_Icon from '../assets/Location_Icon.png';

const Footer = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32 py-12'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-2xl font-semibold'>Pages</h1>
        <p className='hover:underline cursor-pointer text-2xl'>Home</p>
        <p className='hover:underline cursor-pointer text-2xl'>Product</p>  
        <p className='hover:underline cursor-pointer text-2xl'>Pricing</p>
        <p className='hover:underline cursor-pointer text-2xl'>About</p>
        <p className='hover:underline cursor-pointer text-2xl'>Contact</p>
      </div>
      <div className='flex flex-col gap-4'>
        <h1 className='text-2xl font-semibold'>Tomothy</h1>
        <p className='hover:underline cursor-pointer text-2xl'>Eleanor Edwards</p>
        <p className='hover:underline cursor-pointer text-2xl'>Ted Robertson</p>  
        <p className='hover:underline cursor-pointer text-2xl'>Annette Russell</p>
        <p className='hover:underline cursor-pointer text-2xl'>Jennie Mckinney</p>
        <p className='hover:underline cursor-pointer text-2xl'>Gloria Richards</p>
      </div>
      <div className='flex flex-col gap-4'>
        <h1 className='text-2xl font-semibold'>Jane Black</h1>
        <p className='hover:underline cursor-pointer text-2xl'>Philip Jones</p>
        <p className='hover:underline cursor-pointer text-2xl'>Product</p>  
        <p className='hover:underline cursor-pointer text-2xl'>Colleen Russell</p>
        <p className='hover:underline cursor-pointer text-2xl'>Marvin Hawkins</p>
        <p className='hover:underline cursor-pointer text-2xl'>Bruce Simmmons</p>
      </div>
      <div className=''>
        <div className='flex flex-col justify-center'>
          <div className='flex gap-4'>
        <img src={Location_Icon} alt="" className='text-white' />
        <p>7480 Mockingbird Hill undefined </p>
        </div>
        <div className='flex gap-4 my-8'>
        <img src={Android_phone} alt="" className='text-white' />
        <p>(239) 555-0108</p>
        </div>
        </div>
        <div className="flex text-4xl gap-6 cursor-pointer">
        <BsTwitter />
          <AiFillFacebook />
          <BsLinkedin />
        </div>
      </div>
    </div>
          <p className='flex justify-center text-xl'>&copy; 2023 FIGMA LAND. All rights reserved.</p>
          </>
  )
}

export default Footer
