import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {Menu,X} from 'react-feather'
import DownToUpAnimation from './DownToUpAnimation'
import SideToSideAnimation from './SideToSideAnimation'
import {motion} from 'framer-motion'

const Header = () => {

    

    const navItems = [
        {
            tag:"Home",
            link:'/',
        
        },
        {
            tag:"About",
            link:'/about',
            
        },
        {
            tag:'Contact',
            link:'/contact',
            
        },
        {
            tag:'Projects',
            link:'/projects'
        },
        {
            tag:'Github',
            link:"https://github.com/inamali8093",
        
        }
        
    ]

    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
      }

    const [isOpen,setIsOpen] = useState(false)

    const toggleNavbar = ()=>{
        setIsOpen(!isOpen)
    }
    
   
    
  return (

   
    <header className='bg-black text-white top-0 sticky  border-b'>
      <nav className='flex justify-between items-center'>
      <DownToUpAnimation initialY={-100}>
         <div className='my-4 mx-12 flex items-center font-medium text-lg'>
            INAM ALI
         </div>
      </DownToUpAnimation>
         <div className='md:flex hidden gap-10 my-4 mx-12'>
            {navItems.map((item)=>(
                <div key={item.link}>
                    <DownToUpAnimation initialY={-100}>
                    <Link className='list-none hover:font-semibold hover:cursor-pointer' to={item.link}>{item.tag}</Link>
                    </DownToUpAnimation>
                </div>
            ))}
         </div>

         
         <div className="md:hidden flex mx-4">
         <SideToSideAnimation initialX={100}>
            <motion.div
            animate = {isOpen? "open":"closed"}
            varients = {variants}
            >
            <button onClick={toggleNavbar}>{isOpen? <X />: <Menu />}</button>
            </motion.div>
            </SideToSideAnimation>
         </div>
        
         
      </nav>

      {isOpen && (
         <div className='flex flex-col items-center gap-2 my-4 mx-12'>
         {navItems.map((item)=>(
             <div key={item.link}>
                 <Link className='list-none hover:font-semibold hover:cursor-pointer' to={item.link}>{item.tag}</Link>
             </div>
         ))}
      </div>
      )}
   
    </header>
    
  )
}

export default Header
