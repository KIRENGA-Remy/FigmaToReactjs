import React from 'react';
import leftContainer from '../assets/left_container.png';

function Prototyping() {
  return (
    <div className='flex flex-col items-center justify-center gap-24 md:flex-row md:items-start'>
        <img src={leftContainer} alt="Left Container" className='w-[440px] h-[200px]' />
      <div className='flex flex-col mx-4'>
        <p className='text-xl'>At your fingertips</p>
        <h1 className='text-3xl my-4'>Lightning fast prototyping </h1>
        <p className='text-2xl'>Subscribe to our Newsletter</p>
        <p>Available exclusively on Figmaland</p>
        <div className='my-9 text-center'>
          <input type="email" className='p-3 max-w-md outline-none text-black font-semibold text-2xl rounded-3xl mr-4 mb-6 md:p-4' placeholder='Your Email' />
          <button className="p-3 max-w-md bg-blue-600 rounded-3xl text-white text-2xl hover:bg-white hover:text-blue-600 md:p-4">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Prototyping;
