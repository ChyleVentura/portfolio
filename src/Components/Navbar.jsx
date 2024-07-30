import {React, useEffect, useState} from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollToPlugin)

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const closeNav =(()=>{
      setNav(false)
      gsap.to('#close-menu', { rotation: -180 })
  })
  const openNav =(()=>{
    setNav(true)
    gsap.to('#close-menu', { rotation: 180, delay:0.1 })
  })
  useGSAP(()=>{
    document.querySelectorAll("ul li").forEach(btn => {
        btn.addEventListener("click", () => {    
          gsap.to(window, {duration: 1, scrollTo:{y:"#"+btn.textContent.toLowerCase(), offsetY:70}})
        })
      })
    })

  return (
    <header className='text-white justify-between fixed z-30 w-full bg-zinc-900 bg-opacity-50 backdrop-blur-xl border-b-[1px] border-b-zinc-500'>
        <nav className='justify-between px-4 items-center h-24 mx-auto flex max-w-[1240px]'>
            <h1 className='text-3xl font-bold w-full'>CHYLE</h1>
            <ul className='hidden md:flex'>
                <li className='p-5 cursor-pointer'>About</li>
                <li className='p-5 cursor-pointer'>Skills</li>
                <li className='p-5 cursor-pointer'>Works</li>
                <li className='p-5 cursor-pointer'>Reach</li>
            </ul>
            <MdOutlineMenu size={30} onClick={openNav} className={nav? 'md:hidden hidden':'md:hidden block'}/>
            <div className={nav ?"fixed left-0 top-0 bg-zinc-900 bg-opacity-1 h-screen w-[60%] ease-in-out duration-500 z-10 md:hidden":"fixed top-0 bg-opacity-50  bg-zinc-900 left-[-100%] h-full w-[60%] ease-in-out delay-300 duration-500"}>
              <div className='flex items-center m-4'>
                <h1 className='text-3xl font-bold w-full'>CHYLE</h1>
                <IoClose size={40} onClick={closeNav}id='close-menu'/>                
              </div>  
                <ul className='uppercase p-4 '>
                    <li className='p-5 border-b border-gray-600 hover:pl-10 hover:ease-in hover:duration-100 cursor-pointer'>About</li>
                    <li className='p-5 border-b border-gray-600 hover:ease-in hover:duration-100 hover:pl-10 cursor-pointer'>Skills</li>
                    <li className='p-5 border-b border-gray-600 hover:ease-in hover:duration-100 hover:pl-10 cursor-pointer'>Works</li>
                    <li className='p-5 hover:ease-in hover:duration-100 hover:pl-10 cursor-pointer'>Reach</li>
                </ul>
            </div>
            
        </nav>
    </header>
  )
}

export default Navbar