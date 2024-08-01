import React, { useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Preloader = () => {

    useGSAP(()=>{
    
        const tl = gsap.timeline()
        tl.from('.loader_text', 1,{
            skewY:20,
            y:40,
            opacity:0,
           ease:"bounce.inOut",
        })
        .to('.loader_text', 1,{
            rotate:180,
            delay:1,
            ease:"power3.inOut"
        })
        .to('.loader', 0.5,{
            bottom:"-100%",
            delay:1,
            ease: "power3.inOut",
        })
        .to('#hero-title', 0.8,{
            translateY:0,
            opacity:1,
            ease:"power3.inOut"
        },"<")
        .from('#circle', 1,{
            y:40,
            ease:"power3.inOut"
        },"<")
        .from('body',{
            overflowY:"hidden"
        })
    })

  return (
    <div className='loader fixed bg-black flex h-screen w-full z-50 justify-center items-center'>
        <div className='loader_text_container'>
            <h1 className='text-white loader_text'>Hi, I'm Chyle!</h1>
        </div>
    </div>
  )
}

export default Preloader