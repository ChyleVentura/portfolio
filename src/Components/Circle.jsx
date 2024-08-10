import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Circle = () => {

  return (
    <>
    <div className="circle_wrapper fixed justify-center w-full items-center flex h-screen -z-40 overflow-hidden">
             
        <div id="circle" className=" bg-secondary/50 w-[600px] h-[600px] rounded-[50%] blur-[300px]">
        </div>      
    </div>
    <div id="target"className=''></div>
    <div className='marker'></div>
    </>
  )
}

export default Circle