import React from 'react'
import google from '../assets/partner_style4.png';
import Uber from '../assets/partner_style3.png';
import Microsoft from '../assets/partner_style2.png';
import Amazon from '../assets/partner_style5.png';
import DropBox from '../assets/partner_style.png';

const Patners = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-col mx-6 items-center justify-center my-6'>
        <h1 className='text-2xl mb-8'>Patners</h1>
        <p>Most calendars are designed for teams. Slate is designed for freelancers</p>
        </div>
        <div className='cursor-pointer flex flex-col my-8 md:mx-56 items-center justify-center md:flex-row md:flex-wrap'>
            <img src={google} alt=""  className=' w-[220px] h-[160px] object-cover p-1'/>
            <img src={Amazon} alt="" className='  w-[220px] h-[160px] object-cover p-1'/>
            <img src={Microsoft} alt="" className=' w-[220px] h-[160px] object-cover p-1'/>
            <img src={Uber} alt="" className=' w-[220px] h-[160px] object-cover p-1'/>
            <img src={DropBox} alt="" className=' w-[220px] h-[160px] object-cover p-1'/>
            <img src={google} alt="" className=' w-[220px] h-[160px] object-cover p-1'/>
            <img src={Uber} alt="" className=' w-[220px] h-[160px] object-cover p-1'/>
            <img src={Amazon} alt="" className=' w-[220px] h-[160px] object-cover p-1'/>
        </div>
        <button className="p-4 bg-blue-600 rounded-3xl text-white text-2xl px-10 hover:bg-white hover:text-blue-600">
          Try For Free
        </button>
    </div>
  )
}

export default Patners
