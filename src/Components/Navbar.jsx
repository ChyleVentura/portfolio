import {React, useEffect, useState} from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";


const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav =(()=>{
        setNav(!nav)
    })
    
    // useEffect(()=>{
    //     handleNav()
    // },[])

  return (
    <header className='text-white justify-between fixed z-30 w-full'>
        <nav className='justify-between px-4 items-center h-24 mx-auto flex max-w-[1240px]'>
            <h1 className='text-3xl font-bold w-full'>CHYLE</h1>
            <ul className='hidden md:flex'>
                <li className='p-5'>About</li>
                <li className='p-5'>Skills</li>
                <li className='p-5'>Works</li>
                <li className='p-5'>Reach</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <MdOutlineMenu size={30}/> : <IoClose size={30}/>}
            </div>
            <div className={nav ?"fixed left-0 top-0 bg-black h-full w-[60%] ease-in-out duration-500 z-10":"fixed top-0 left-[-100%] h-full w-[60%] ease-in-out duration-500"}>
                <h1 className='text-3xl font-bold w-full m-4'>CHYLE</h1>
                <ul className='uppercase p-4 '>
                    <li className='p-5 border-b border-gray-600 cursor-pointer'>About</li>
                    <li className='p-5 border-b border-gray-600 cursor-pointer'>Skills</li>
                    <li className='p-5 border-b border-gray-600 cursor-pointer'>Works</li>
                    <li className='p-5'>Reach</li>
                </ul>
            </div>
            
        </nav>
    </header>
  )
}

export default Navbar