import React from 'react'
import map_screen from '../assets/map_screen.png';
import Android_phone from '../assets/Android_phone.png';
import Location_Icon from '../assets/Location_Icon.png';
import Mail_message from '../assets/Mail_Message.png';
import { AiFillFacebook } from 'react-icons/ai'
import { BsLinkedin, BsTwitter } from 'react-icons/bs'

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center my-24 '>
        <h1 className='text-2xl font-semibold my-3'>Contact Us</h1>
        <p className='mb-12 mx-12'>Most calendars are designed for teams. Slate is designed for freelancers</p>
        <div className='flex flex-col gap-6 md:flex-row'>

        <div className='flex flex-col  bg-white p-8 mx-6 py-16 text-xl rounded-xl'>
            <input type="text" placeholder='Your Name' className=' rounded-xl outline-none text-black bg-gray-300 my-3 p-4' />
            <input type="email" placeholder='Your Email'  className='rounded-xl outline-none text-black bg-gray-300 my-3 p-4'  />
            <textarea name="message" id="msg" cols="30" rows="7" className='bg-gray-300 outline-none my-3 text-black p-3 mb-6 resize-none'></textarea>
            <button className='border-2 border-solid border-blue-600 bg-blue-600 text-xl text-white my-6 py-2 px-2 rounded-3xl  hover:bg-white hover:text-blue-600'>Send</button>
        </div>
        <div className='flex flex-col'>
            <div className='flex flex-col gap-12 items-center  md:flex-row justify-center'>
                <div className='flex flex-col items-center'>
                <img src={Location_Icon} alt="" />
                <p className='py-4'>6386 Spring St undefined Anchorage,
                   Georgia 12473 United States</p>
                </div>

                <div className='flex flex-col items-center'>
                <img src={Android_phone} alt="" />
                <p className='py-4'>(843) 555-0130</p>
                </div>

                <div className='flex flex-col items-center'>
                <img src={Mail_message} alt="" />
                <p className='py-4'>willie.jennings@example.com</p>
                </div>
            </div>
            <img src={map_screen} alt="" className=' mx-32' />
            <div className='flex text-3xl items-center justify-center text-blue-600 p-6 gap-12 hover:underline cursor-pointer'>
          <BsTwitter />
          <AiFillFacebook />
          <BsLinkedin />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Contact
