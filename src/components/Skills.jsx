import React from 'react'
import DownToUpAnimation from '../components/DownToUpAnimation'
import {motion} from "framer-motion"


const Skills = () => {
  return (
    <>
    <div className='bg-black px-8'>
       
      <div className='flex justify-center font-bold  shadow-md shadow-[rgb(65,109,109)]'>
      <h2 className='text-[rgb(65,109,109)] text-4xl text-center font-bold p-8'>Skills</h2>
      </div>

      <div className='gap-12 md:gap-0 py-32 px-4 flex flex-wrap justify-between items-center'>

        <DownToUpAnimation initialY={75}>
        <motion.div
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        >
         <img src="/html.png" alt="HTML" className='w-[100px]' />
         <h3 className='text-white text-center text-2xl font-bold'>HTML</h3>
         </motion.div>
         </DownToUpAnimation>

         <DownToUpAnimation initialY={75}>
         <motion.div
         whileHover={{scale:1.1}}
         whileTap={{scale:0.9}}
         >
         <img src="/css-3.png" alt="CSS" className='w-[100px]' />
         <h3 className='text-white text-center text-2xl font-bold'>CSS</h3>
         </motion.div>
         </DownToUpAnimation>

         <DownToUpAnimation initialY={75}>
         <motion.div
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        >
         <img src="/tailwind-css.png" alt="TailwindCSS" className='w-[100px]' />
         <h3 className='text-white text-center text-2xl font-bold'>TailwindCSS</h3>
         </motion.div>
         </DownToUpAnimation>

         <DownToUpAnimation initialY={75}>
         <motion.div
         whileHover={{scale:1.1}}
         whileTap={{scale:0.9}}
         >
         <img src="/bootstrap.png" alt="Bootstrap" className='w-[100px]' />
         <h3 className='text-white text-center text-2xl font-bold'>Bootstrap</h3>
         </motion.div>
         </DownToUpAnimation>

         <DownToUpAnimation initialY={75}>
         <motion.div
         whileHover={{scale:1.1}}
         whileTap={{scale:0.9}}
         >
         <img src="/js.png" alt="Javascript" className='w-[100px] rounded-2xl' />
         <h3 className='text-white text-center text-2xl font-bold'>JavaScript</h3>
         </motion.div>
         </DownToUpAnimation>

         <DownToUpAnimation initialY={75}>
         <motion.div
         whileHover={{scale:1.1}}
         whileTap={{scale:0.9}}
         >
         <img src="/react.png" alt="ReactJS" className='w-[100px]' />
         <h3 className='text-white text-center text-2xl font-bold'>REACT</h3>
         </motion.div>
         </DownToUpAnimation>

         <DownToUpAnimation initialY={75}>
         <motion.div
         whileHover={{scale:1.1}}
         whileTap={{scale:0.9}}
         >
         <img src="/redux.png" alt="Redux" className='w-[100px]' />
         <h3 className='text-white text-center text-2xl font-bold'>Redux Toolkit</h3>
         </motion.div>
         </DownToUpAnimation>

         <DownToUpAnimation initialY={75}>
         <motion.div
         whileHover={{scale:1.1}}
         whileTap={{scale:0.9}}
         >
         <img src="/node-js.png" alt="NodeJS" className='w-[100px]' />
         <h3 className='text-white text-center text-2xl font-bold'>NodeJS</h3>
         </motion.div>
         </DownToUpAnimation>

         <DownToUpAnimation initialY={75}>
         <motion.div
         whileHover={{scale:1.1}}
         whileTap={{scale:0.9}}
         >
         <img src="/express2.png" alt="ExpressJS" className='w-[100px]' />
         <h3 className='text-white text-center text-2xl font-bold'>ExpressJS</h3>
         </motion.div>
         </DownToUpAnimation>

         <DownToUpAnimation initialY={75}>
         <motion.div
         whileHover={{scale:1.1}}
         whileTap={{scale:0.9}}
         >
         <img src="/mongodb.png" alt="MongoDB" className='w-[100px]' />
         <h3 className='text-white text-center text-2xl font-bold'>MongoDB</h3>
         </motion.div>
         </DownToUpAnimation>
      </div>
      </div>
    </>
  )
}

export default Skills
