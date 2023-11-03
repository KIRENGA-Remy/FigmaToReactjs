import React from 'react'

const Pricing = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
     <h1 className='text-3xl mb-3'>Pricing</h1>
     <p className='mx-5'>Most calendars are designed for teams. Slate is designed for freelancers</p>
     <div className='flex flex-col items-center text-center justify-center gap-8 md:flex-row my-12'>

     <div className='text-blue-600 bg-white items-center justify-center rounded-3xl px-10'>
            <h2 className='font-bold text-2xl pt-12'>FREE</h2>
            <p className='py-4'>Organize across all apps by hand</p>
            <p className='flex justify-center'>
                <span className='text-5xl text-black font-extrabold'>0</span>
                <div className='text-xl flex flex-col'>
                 $
                <p>Per Month</p>
                </div>
            </p>
            <p className='py-4'>Pricing Feature</p>
            <p className='py-4'>Pricing Feature</p>
            <p className='py-4'>Pricing Feature</p>
            <p className='py-4'>Pricing Feature</p>
            <p className='py-4'>Pricing Feature</p>
            <button className="p-2 border-2 border-solid border-blue-600 text-white rounded-3xl bg-blue-600 text-xl px-10 hover:bg-white hover:text-blue-600 my-6">
          Order Now
        </button>
        </div>


        <div className='bg-blue-600 text-white items-center justify-center rounded-3xl md:py-16 px-10'>
            <h2 className='font-bold text-2xl pt-12'>STANDARD</h2>
            <p className='py-4'>Organize across all apps by hand</p>
            <p className='flex justify-center'>
                <span className='text-5xl text-black font-extrabold'>10</span>
                <div className='text-xl flex flex-col'>
                 $
                <p>Per Month</p>
                </div>
            </p>
            <p className='py-4'>Pricing Feature</p>
            <p className='py-4'>Pricing Feature</p>
            <p className='py-4'>Pricing Feature</p>
            <p className='py-4'>Pricing Feature</p>
            <p className='py-4'>Pricing Feature</p>
            <button className="p-2 border-2 border-solid border-white bg-white rounded-3xl text-blue-600 text-xl px-10 hover:text-white hover:bg-blue-600 my-6">
          Order Now
        </button>
        </div>


        <div className='text-blue-600 bg-white items-center justify-center rounded-3xl px-10'>
            <h2 className='font-bold text-2xl pt-12'>BUSINESS</h2>
            <p className='py-4'>Organize across all apps by hand</p>
            <p className='flex justify-center'>
                <span className='text-5xl text-black font-extrabold'>99</span>
                <div className='text-xl flex flex-col'>
                 $
                <p>Per Month</p>
                </div>
            </p>
            <p className='py-4'>Pricing Feature</p>
            <p className='py-4'>Pricing Feature</p>
            <p className='py-4'>Pricing Feature</p>
            <p className='py-4'>Pricing Feature</p>
            <p className='py-4'>Pricing Feature</p>
            <button className="p-2 border-2 border-solid border-blue-600 text-white rounded-3xl bg-blue-600 text-xl px-10 hover:bg-white hover:text-blue-600 my-6">
          Order Now
        </button>
        </div>


     </div>
    </div>
  )
}

export default Pricing
