import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Circle = () => {

    useGSAP(()=>{
       const tl = gsap.timeline({  
            ScrollTrigger:{
                pin: true,
                trigger:"#circle_wrapper",
                start: "bottom center",
                markers:true,
                end: "+=150%"
            }
        })

        tl.to("#circle",{
            x:100,
            transformOrigin:"center center"
        })
    })
  return (
    <>
    <div className="circle_wrapper fixed justify-center w-full items-center flex h-screen -z-40 overflow-hidden">
             
        <div id="circle" className=" bg-zinc-800 w-[400px] h-[400px] rounded-[50%]">
        </div>      
    </div>
    <div id="target"className=''></div>
    <div className='marker'></div>
    </>
  )
}

export default Circle