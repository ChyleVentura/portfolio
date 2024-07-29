import {React, useState, useEffect} from 'react';
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { MdMovieEdit } from "react-icons/md";
import {skillsContent} from '../data/data'
import { MdOutlineArrowOutward } from 'react-icons/md';

gsap.registerPlugin(ScrollTrigger)

const Skills = () => {
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
      });
  return (
    <div id="skills"className='w-full text-white py-16 px-4 items-center overflow-hidden'>
        <div className=' text-violet-500 flex items-center mb-10 pl-10'>
          <h1 className='text-bold text-3xl'>skills</h1>
          <MdOutlineArrowOutward size={30}/>
        </div> 
        {skillsContent.map( skill =>{
            return(
                <div key={skill.id}id="skill_content" className='content_panel text-center max-w-[1240px] mx-auto m-20'>
                    <div className='justify-center flex flex-col'>
                        <p className='md:text-[100px] text-bold tracking-tighter text-5xl leading-[1em]'>{skill.title}</p>
                        <img src={skill.img} alt="" className='md:w-[300px] w-[200px] m-5 mx-auto'/>
                    </div>                    
                    <p className='text-bold text-3xl text-violet-500 m-5'>
                        {skill.apps.map((app, index) => {
                             return(
                                skill.apps.length - index == 1? app.name : app.name+", "
                             )}
                        )}
                        </p>
                </div>
            )
        })}
        {/* <div id="skill_content_2" className='content_panel text-center max-w-[1240px] mx-auto my-5'>
            <h1 className='text-bold text-3xl text-violet-500 m-10'>Premiere Pro, Davinci Resolve</h1>
            <div className='justify-center flex flex-col'>
                <p className='text-[100px] text-bold tracking-tighter leading-[1em]'>VIDEO EDITING</p>
                <img src={VideoEditing} alt="" className='w-[400px] m-5 mx-auto'/>
            </div>
        </div>
        <div id="skill_content_3" className='content_panel text-center max-w-[1240px] mx-auto my-5'>
            <h1 className='text-bold text-3xl text-violet-500 mb-10'>After Effects</h1>
            <div className='justify-center flex flex-col'>
                <p className='text-[100px] text-center text-bold tracking-tighter leading-[1em]'>MOTION GRAPHICS</p>
                <img src={Layers} alt="" className='w-[400px] m-5 mx-auto'/>
            </div>
        </div>
        <div id="skill_content_3" className='content_panel text-center max-w-[1240px] mx-auto my-5'>
            <h1 className='text-bold text-3xl text-violet-500 mb-10'>Photoshop, Illustration</h1>
            <div className='justify-center flex flex-col'>
                <p className='text-[100px] text-center text-bold tracking-tighter leading-[1em]'>GRAPHIC DESIGN</p>
                <img src={Graphic} alt="" className='w-[400px] m-5 mx-auto'/>
            </div>
        </div> */}
    </div>
  )
}

export default Skills