import {React, useState, useEffect} from 'react'
import VideoEditing from '../assets/film-production.png'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    useGSAP(() => {
        const sections = Array.from(document.querySelectorAll('.content_panel'));
        sections.forEach((section, i) => {
          gsap.timeline({
            scrollTrigger: {
                trigger: section,
                toggleActions: "restart none none reverse",
                start:'top center'
            }
          })
          .to(section, {
            x: 0,
            opacity: 1
          });
        });
      }, []);
  return (
    <div className='about-wrapper flex w-full bg-secondary h-screen items-center overflow-hidden'>
      <div id="about"className='text-white max-w-[1240px] w-full m-auto px-4'>
          <div id="about_title" className=' text-primary flex items-center'>
            <h1  className='text-bold text-3xl'>about</h1>
            <MdOutlineSubdirectoryArrowRight size={30} className='ml-2'/>
          </div> 
          <div id="about_content_1" className='content_panel max-w-[1240px] mx-auto m-20'>
              <div className='justify-center flex flex-col'>
                  <p className='md:text-7xl text-5xl text-center text-black text-bold tracking-tighter'>
                    Hello! I'm Chyle Ventura, I'm a front-end developer and video editor. 
                    I'm currently looking for an awesome collaboration!</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default About