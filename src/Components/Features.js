// Features.js

import React from 'react';
import DesktopBg from '../assets/DesktopBg.png';

function Features({ imageUrl, head, description }) {
  return (
    <div>
      <div className='flex flex-col items-center gap-6 mx-12  my-12'>
        <img src={imageUrl} alt="Features Image" className='w-16 h-16 object-cover' />
        <p className='font-bold text-2xl'>{head}</p>
        <p className='text-xl'>{description}</p>
      </div>
    </div>
  );
}

export default Features;
