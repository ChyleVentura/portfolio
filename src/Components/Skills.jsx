import {React, useState, useEffect} from 'react';
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {skillsContent} from '../data/data'
import { MdOutlineSubdirectoryArrowRight } from 'react-icons/md';

gsap.registerPlugin(ScrollTrigger)

const Skills = () => {
    useEffect(() => {
        const sections = Array.from(document.querySelectorAll('#skill_content'));
        sections.forEach((section) => {
            const items = section.querySelectorAll('.skill_items');
            gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    toggleActions: "restart none none reverse",
                    start: 'top center',
                }
            })
            .fromTo(section, {
                x: -100,
                opacity: 0,
            }, {
                x: 0,
                opacity: 1,
                duration: 0.5,
            })
            .fromTo(items, {
                opacity:0,
                y: 20
            }, {
                opacity:1,
                y: 0,
                duration: 0.5,
                stagger: 0.1,
                ease:"power2.out"
            });
        });
    }, []);
  return (
    <div id="skills"className='w-full text-white py-16 px-4 items-center overflow-hidden'>
        <div className=' text-violet-500 flex items-center mb-10 pl-10'>
          <h1 className='text-bold text-3xl'>skills</h1>
          <MdOutlineSubdirectoryArrowRight size={30} className='ml-2'/>
        </div> 
        {skillsContent.map( skill =>{
            return(
                <div key={skill.id}id="skill_content" className='text-center max-w-[1240px] mx-auto m-20'>
                    <div className='justify-center flex flex-col'>
                        <p className='md:text-[100px] text-bold tracking-tighter text-5xl leading-[1em]'>{skill.title}</p>
                        {/* <img src={skill.img} alt="" className='md:w-[300px] w-[200px] m-5 mx-auto'/> */}
                    </div>                    
                    <div className='skill_content_list text-bold text-2xl text-white-500 m-5 flex flex-col md:flex-row justify-center'>
                        {skill.apps.map((app, index) => {
                             return(
                                <p key={index} className='skill_items m-3 bg-slate-800 items-center flex justify-between p-5 gap-2 rounded-md'>{app.name}{app.img}</p>
                                // skill.apps.length - index == 1? app.name : app.name+", "
                             )}
                        )}
                        </div>
                </div>
            )
        })}
    </div>
  )
}

export default Skills