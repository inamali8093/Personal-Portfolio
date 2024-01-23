import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {Menu,X,Download} from 'react-feather'
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

    const handleClick = ()=>{
        fetch("Frontend Resume.pdf")
    .then((response)=>{
       console.log(response);
       response.blob().then((blob)=>{
        const fileUrl = window.URL.createObjectURL(blob)
        let alink = document.createElement("a")
        alink.href = fileUrl
        alink.download = "Frontend Resume.pdf"
        alink.click()
       })
    })
    }

    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
      }

    const [isOpen,setIsOpen] = useState(false)

    const toggleNavbar = ()=>{
        setIsOpen(!isOpen)
    }
    
   
    
  return (

   
    <header className='bg-cover w-full text-white top-0 z-20'>
      <nav className='flex justify-between items-center'>

      <DownToUpAnimation initialY={-100}>
         <div className='my-4 mx-6 flex items-center font-medium text-lg hover:font-bold'>
            <img src="./Inam Ali-logos_white.png" className='w-[150px]' alt="" />
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

         <motion.div
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
         className='hidden md:flex'>
            <button className='p-2 text-white font-bold rounded-lg mx-12 w-auto flex gap-2' onClick={handleClick}>Resume <Download /></button>
         </motion.div>

         
         <div className="md:hidden flex mx-4">
         <SideToSideAnimation initialX={100}>
            <div className=' p-3 rounded-full' >
            <button onClick={toggleNavbar}>{isOpen? <X />: <Menu />}</button>
            </div>
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
