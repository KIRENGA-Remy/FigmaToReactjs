import React from 'react'
import DesktopBg from '../assets/DesktopBg.png'
import video_screen from '../assets/video_screen.png';
import screen_content from '../assets/screen_content.png'

function Organization() {
  return (
    <div>
      <div className='flex justify-center items-center'>
        <img src={video_screen} alt="" className='text-center w-[460px] h-[240px] md:h-[280px] rounded-md  my-4' />
      </div>
         <div className='flex-row md:flex items-center justify-center md:my-8 my-4'>
          <div className='flex-col mx-8 md:flex-col my-6'>
          <h2 className='text-3xl font-semibold'>Fastest way to organize</h2>
          <p className='text-xl my-4'>Most calendars are designed for teams. Slate is designed for freelancers</p>
          <button className="p-4 bg-blue-600 rounded-3xl text-white text-2xl px-10 hover:bg-white hover:text-blue-600">
          Try For Free
        </button>
        </div>
        <div>
          <img src={screen_content} alt="" className='mx-auto w-[440px] h-[200px]' />
        </div>
         </div>
    </div>
  )
}

export default Organization
