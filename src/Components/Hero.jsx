import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const Hero = () => {
  return (
    <div className='text-white z-0 lg:px-40 px-5'>
        <div id="hero-title"className='flex-col flex max-w-[1000] h-screen w-full justify-center items-start mx-auto py-[10rem]'>
            <p className='text-bold text-2xl text-violet-500'>Chyle Ventura</p>
            <h1 className='lg:text-[160px] md:text-[120px] text-wrap text-5xl
            tracking-tighter text-bold leading-[.75em]'>
              FRONT-END DEVELOPER <br/> VIDEO EDITOR</h1>
        </div>
    </div>
  )
}
export default Hero