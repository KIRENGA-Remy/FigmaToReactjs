import React, { useState } from 'react';
import DesktopImg from '../assets/Desktop_Header_Light.png';
import logo from '../assets/Rectangle4.png';
import { AiFillFacebook } from 'react-icons/ai';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div
      className="bg-cover bg-center h-[500px] text-white"
      style={{ backgroundImage: `url(${DesktopImg})` }}
    >
      <div className="flex items-center justify-between flex-row md:mx-24">
        <div className="gap-10 items-center flex text-2xl m-2 md:m-9">

        <div>
          <img className="ml-2 text-xl" src={logo} alt="" />
        </div>

          {/* Navigation links for larger screens */}
          <div className="hidden md:flex md:gap-6">
            <h3>Home</h3>
            <h3>Product</h3>
            <h3>Pricing</h3>
            <h3>About</h3>
            <h3>Contact</h3>
          </div>
        </div>

        <div className="hidden md:flex text-4xl gap-6 md:mx-48 ">
          <AiFillFacebook />
          <BsTwitter />
          <BsLinkedin />
        </div>
                  {/* Conditionally render menu icon based on screen size */}
        <div className="md:hidden mr-[10px] cursor-pointer" onClick={() => setMenu(!menu)}>
            <HiOutlineMenuAlt3 className='mr-[10px]' size={24} />
            {menu && (
        <div className="md:hidden flex flex-col w-36 items-center gap-4 bg-blue-950 mt-24">
          <h3 className='hover:underline cursor-pointer'>Home</h3>
          <h3 className='hover:underline cursor-pointer'>Product</h3>
          <h3 className='hover:underline cursor-pointer'>Pricing</h3>
          <h3 className='hover:underline cursor-pointer'>About</h3>
          <h3 className='hover:underline cursor-pointer'>Contact</h3>
          <div className="flex text-2xl mb-3 gap-6 mx-2 md:mx-48  className='hover:underline cursor-pointer'">
          <AiFillFacebook />
          <BsTwitter />
          <BsLinkedin />
        </div>
        </div>
      )}
        </div>
      </div>

      {/* Mobile menu */}

      <div className="flex justify-center flex-col my-24 items-center">
        <h1 className="text-5xl font-bold mx-2">
          The best products start with Figma
        </h1>
        <p className="text-xl my-4 mb-16 mx-4">
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </p>
        <button className="border-2 border-solid border-white p-4 bg-white rounded-3xl text-blue-600 text-2xl px-10 hover:text-white hover:bg-blue-600">
          Try For Free
        </button>
      </div>
    </div>
  );
};

export default Navbar;
