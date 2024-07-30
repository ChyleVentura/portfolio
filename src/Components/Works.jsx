import {React, useState, useEffect} from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
import { ReactTyped } from 'react-typed';

const Works = () => {
  return (
    <div id="works"className='w-full text-white px-4 items-center overflow-hidden'>
        <div id="about_title" className=' text-violet-500 flex items-center m-10'>
          <h1  className='text-bold text-3xl'>works</h1>
          <MdOutlineArrowOutward size={30}/>
        </div> 
        <div id="works_content_1" className='content_panel max-w-[1240px] mx-auto m-20'>
            <div className='justify-center flex flex-col'>
                <p className='md:text-7xl text-5xl text-center text-bold tracking-tighter'>
                  <ReactTyped typeSpeed={40} loop strings={['dropping soon..']}/></p>
            </div>
        </div>
    </div>
  )
}

export default Works