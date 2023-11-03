import React from 'react'
import IBM from '../assets/Brands.png';
import Ellipse from '../assets/Ellipse.png';

const Testmonials = () => {
  return (
    <div className='flex flex-col items-center justify-center my-16'>
      <h1 className='text-3xl'>Testmonials</h1>
      <img src={IBM} alt="" className='my-16 ' />
      <p className='text-2xl px-4'>Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</p>
      <div className='flex my-16 items-center gap-8'>
      <img src={Ellipse} alt="" />
      <p>Organize across Ui designer</p>
      </div>
      <button className="p-4 bg-blue-600 border-2 border-blue-600 border-solid rounded-3xl text-white text-2xl px-10 hover:bg-white hover:text-blue-600">
               More Testmonials
        </button>
    </div>
  )
}

export default Testmonials
