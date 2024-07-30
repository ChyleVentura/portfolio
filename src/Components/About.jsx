import {React, useState, useEffect} from 'react'
import VideoEditing from '../assets/film-production.png'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { MdOutlineArrowOutward } from "react-icons/md";

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
    <div id="about"className='w-full text-white bg-white h-screen px-4 items-center overflow-hidden'>
        <div id="about_title" className=' text-black flex items-center m-10'>
          <h1  className='text-bold text-3xl'>about</h1>
          <MdOutlineArrowOutward size={30}/>
        </div> 
        <div id="about_content_1" className='content_panel max-w-[1240px] mx-auto m-20'>
            <div className='justify-center flex flex-col'>
                <p className='md:text-7xl text-5xl text-center text-black text-bold tracking-tighter'>
                  Hello! I'm Chyle Ventura, I'm a front-end developer and video editor. 
                  I'm currently looking for an awesome collaboration!</p>
            </div>
        </div>
    </div>
  )
}

export default About