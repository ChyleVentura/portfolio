import React from 'react'
import { ReactTyped } from 'react-typed'

const Banner = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center mx-auto items-center'>
        <h1 className='text-3xl md:text-5xl sm:text-3xl text-bold text-white'>Let's make it </h1>
        <ReactTyped strings={["awesome!","amazing!","clean!"]} 
        typeSpeed={60} backSpeed={50} loop className='text-4xl md:text-5xl text-gray-400'/>
        <form className='m-5 flex items-center'>
          <input placeholder="Email" type="email" className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'/>
        </form>
    </div>
  )
}

export default Banner