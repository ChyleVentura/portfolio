import React from 'react'
import { ReactTyped } from 'react-typed'

const Banner = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center mx-auto items-center'>
        <h1 className='text-7xl text-bold text-white'>Let's make it </h1>
        <ReactTyped strings={["awesome!","amazing!","clean!"]} 
        typeSpeed={60} backSpeed={50} loop className='text-7xl text-gray-400'/>
    </div>
  )
}

export default Banner