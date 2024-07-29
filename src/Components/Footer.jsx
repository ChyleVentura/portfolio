import React from 'react'

const Footer = () => {
  return (
    <div className='text-zinc h-screen z-0 md:px-40 sm:px-0 bg-white'>
    <div id="hero-title"className='flex-col flex max-w-[1000] w-full justify-center items-start mx-auto py-[10rem]'>
        <p className='text-bold text-2xl'>Chyle Ventura</p>
        <h1 className=' text-2xl tracking-tighter text-bold leading-[.75em]'>FRONT-END DEVELOPER & VIDEO EDITOR</h1>
    </div>
    {/* <div className='w-full flex flex-col justify-center mx-auto items-center'>
         <h1 className='text-7xl text-bold'>Let's make it </h1>
        <ReactTyped strings={["awesome!","amazing!","clean!"]} 
        typeSpeed={60} backSpeed={50} loop className='text-7xl text-gray-400'/>
    </div> */}
</div>
  )
}

export default Footer