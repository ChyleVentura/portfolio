import {React, useEffect} from 'react'
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md"
import { worksContent } from '../data/data'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(ScrollTrigger)

const Works = () => {
  useGSAP(() =>{
    const workCards = gsap.utils.toArray('.works-content-panel .work-card')
    gsap.to(workCards, {
      scrollTrigger:{
        trigger: '.works-wrapper',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        toggleActions: "restart none none reverse",
    },
    xPercent: -100*(workCards.length -1)
    }

  )
  })
  return (
    <div className='works-wrapper w-full h-[400vh]'>
      <div className='h-[100vh] items-center sticky flex top-0 overflow-x-hidden'>
        <div id="works"className='text-white mx-auto w-full max-w-[1240px] px-4'>
            <div id="works_title" className='text-secondary  mx-auto flex items-center'>
              <h1  className='text-bold text-3xl'>works</h1>
              <MdOutlineSubdirectoryArrowRight size={30} className='ml-2'/>
            </div> 
            <div className='flex works-content-panel mt-20'>
            {worksContent.map(work =>{
              return(
                  <div key={work.id} className='work-card flex w-full pr-10 flex-auto'>
                    <div className='text-center w-[500px] bg-secondary rounded-lg'>
                      <img src={work.img} alt="" className=' object-cover w-full h-full rounded-lg opacity-90' />
                      <div className="work-card-desc absolute bottom-8 left-8">
                        <p className=''>{work.title}</p>
                      </div>
                    </div>
                  </div>
              )
            })
            }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Works