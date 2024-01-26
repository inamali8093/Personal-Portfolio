import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'react-feather'
import {motion} from 'framer-motion'

const ProjectContainer = ({children,image,name,githubLink,className}) => {

  // let className = 'hidden'
  // const [isOpen,setIsOpen] = useState(false)
  // const handleClick = ()=>{
  //    setIsOpen(true)
  //    console.log(isOpen);
  //    if(isOpen){
  //      className = 'flex'
  //    }else {
  //     className = 'hidden'
  //    }
  //    console.log(className);
  // }

  return (
    <>
    
    <div className={`w-full md:w-[700px] ${className}`}>
    <div className='flex shadow-lg hover:shadow-[rgb(200,111,67)] m-8 p-4 gap-4'>
      {/* photo div */}
      <div className='w-[600px] flex flex-col justify-center items-center'>
        <img src={image} alt="" />
        <motion.div className='m-2 p-2' whileHover={{scale:1.05}}>
        <Link to='/preview' className='text-white bg-blue-600 rounded-md p-2 '>Preview</Link>
        </motion.div>
      </div>

      {/* info div */}
      <div>
        <motion.div
        whileHover={{scale: 1.05,color: 'rgb(200,111,67)'}}
        >
        <Link to={githubLink} className='text-white text-lg font-bold flex items-center'>
          {name} <ArrowUpRight />
        </Link>
        </motion.div>
        <p className='text-white '>
          {children}
        </p>
      </div>
    </div>
    </div>
    </>
  )
}

export default ProjectContainer

