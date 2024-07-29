import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const Hero = () => {
    useGSAP( () =>{
        gsap.to("#hero-title",{translateY:0,opacity:1,})
    } ,[])
  return (
    <div className='text-white z-0 lg:px-40 px-5'>
        <div id="hero-title"className='flex-col flex max-w-[1000] w-full justify-center items-start mx-auto py-[10rem]'>
            <p className='text-bold text-2xl'>Chyle Ventura</p>
            <h1 className='lg:text-[160px] md:text-[130px] text-wrap text-7xl
            tracking-tighter text-bold leading-[.75em]'>
              FRONT-END DEVELOPER VIDEO EDITOR</h1>
        </div>
    </div>
  )
}
export default Hero