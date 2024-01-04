import React from 'react'
import {GitHub,Instagram,Linkedin} from 'react-feather'
import SideToSideAnimation from './SideToSideAnimation'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-black flex flex-col-reverse md:flex md:flex-row items-center justify-between h-[500px]] border-t'>
      <SideToSideAnimation initialX={-100}>
       <span className='text-white mx-6'>
         Copyright &copy; 2024 Inam Ali
        </span>
        </SideToSideAnimation>

        <SideToSideAnimation initialX={100}>
        <div className='flex gap-12 my-10 mx-10'>
          <Link to='https://www.linkedin.com/in/inam-ali-02527b229'><Linkedin className='text-white'/></Link>

          <Link to='https://github.com/inamali8093'><GitHub className='text-white ' /></Link>
            
          <Link to='https://instagram.com/ali_inam01'><Instagram className='text-white' /></Link>
          
        </div>
        </SideToSideAnimation>
    </div>
  )
}

export default Footer