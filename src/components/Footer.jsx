import React from 'react'
import {GitHub,Instagram,Linkedin,Download} from 'react-feather'
import SideToSideAnimation from './SideToSideAnimation'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

const Footer = () => {
  return (
    <div className='w-full flex flex-col-reverse md:flex md:flex-row-reverse items-center justify-between h-[500px]] border-t'>


      <SideToSideAnimation initialX={-100}>
       <span className='text-white mx-6'>
         Copyright &copy; 2024 Inam Ali
        </span>
        </SideToSideAnimation>

        <SideToSideAnimation initialX={100}>
        <div className='flex gap-12 my-10 mx-10'>
          <motion.div
           whileHover={{scale:1.1}}
           whileTap={{scale:0.9}}
           className='p-3 text-white rounded-full'
          >
          <Link to='https://www.linkedin.com/in/inam-ali-02527b229'><Linkedin /></Link>
          </motion.div>

          <motion.div
           whileHover={{scale:1.1}}
           whileTap={{scale:0.9}}
           className='p-3 text-white rounded-full'
          >
          <Link to='https://github.com/inamali8093'><GitHub /></Link>
          </motion.div>

         <motion.div
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          className='p-3 text-white rounded-full'
         >
          <Link to='https://instagram.com/ali_inam01'><Instagram  /></Link>
          </motion.div> 
          
        </div>
        </SideToSideAnimation>


    </div>
  )
}

export default Footer