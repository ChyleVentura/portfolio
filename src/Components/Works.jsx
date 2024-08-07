import {React} from 'react'
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { ReactTyped } from 'react-typed';

const Works = () => {
  return (
    <div className='works-wrapper relative flex w-full h-full items-center'>
      <div id="works"className='text-white mx-auto max-w-[1240px] w-full px-4 mt-40'>
          <div id="works_title" className='text-secondary flex items-center'>
            <h1  className='text-bold text-3xl'>works</h1>
            <MdOutlineSubdirectoryArrowRight size={30} className='ml-2'/>
          </div> 
          <div id="works_content_1" className='works-content-panel max-w-[1240px] mx-auto m-20'>
              <div className='justify-center flex flex-col'>
                  <p className='md:text-5xl text-2xl text-center text-bold tracking-tighter'>
                    <ReactTyped typeSpeed={40} loop strings={['dropping soon..']}/></p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Works