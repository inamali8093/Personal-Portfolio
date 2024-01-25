import React,{useCallback} from 'react'
import { Link } from 'react-router-dom'
import DownToUpAnimation from '../components/DownToUpAnimation'
import {motion,useTime,useTransform} from 'framer-motion'


const Education = () => {

  const time = useTime()
  const rotate = useTransform(
    time,
    [0, 4000], // For every 4 seconds...
    [0, 360], // ...rotate 360deg
    { clamp: false }
  )

  const handleCopy1 = useCallback(()=>{
    emailRef.current?.select()
    window.navigator.clipboard.writeText(email)
  },[])
  const handleCopy2 = useCallback(()=>{
    window.navigator.clipboard.writeText(number)
  },[])

  return (
    <>
    <div className='py-12 px-8 gap-12 flex flex-col md:flex md:flex-row justify-between min-h-[90vh]'>
    
   
     
      <div className='md:w-[30%] shadow-lg shadow-[] mt-12 h-auto rounded-md md:h-[60vh] py-6'>
      <DownToUpAnimation initialY={75}>
      <h2 className='text-4xl mb-6  text-center font-bold'>About Me
      </h2>
          <div className='w-full h-full flex items-center justify-center bg-cover bg-center md:mt-10'>
          <div className='w-full px-8'>


          <p className='font-semibold text-lg'>
           Explore my portfolio to see some of my latest projects and check out my blog for web development insights. If you have a project in mind or just want to chat about the latest web trends, feel free to get in touch!

           Let's create something amazing together. Get started by <Link to='/contact' className='font-semibold text-amber-300'> Contacting Me</Link> or 
                  <Link to='/projects' className='font-semibold text-amber-300'> Exploring My Work</Link> .
           </p>

          </div>
          </div>
          </DownToUpAnimation>
      </div>
      

      
      <div className='flex justify-center items-center'>
      <DownToUpAnimation initialY={100} > 
        <motion.img src="/react.png"
        style={{rotate}}
        className='w-[300px] z-0' alt="" />
        </DownToUpAnimation>
      </div>
      

      <div className='md:w-[30%] shadow-lg shadow-black text-white bg-black md:mt-12 h-auto py-6 md:h-[60vh]  rounded-md'>
        
      <DownToUpAnimation initialY={75} >
      <h2 className='text-4xl text-center font-bold mb-6 md:mb-0'>Education
      </h2>
          <div className='w-full h-full flex items-center justify-center bg-cover bg-center rounded-xl md:mt-12'>
          <div className='list-none w-full px-8'>

            <div className='my-4'>
            <div className='flex justify-between '>
            <li className='text-2xl font-semibold'> B.Tech : 7.84</li>
             <p>2021-2025</p>
            </div>
            <small>from Jamia Millia Islamia</small>
            </div>

            <div className='my-4'>
            <div className='flex justify-between'>
            <li className='text-2xl font-semibold'> Intermediate : 90.8%</li>
             <p>2020</p>
            </div>
            <small>from DDPS Bijnor</small>
            </div>

            <div className='my-4'>
            <div className='flex justify-between'>
            <li className='text-2xl font-semibold'> High School : 84.4%</li>
             <p>2018</p>
            </div>
            <small>from DDPS Bijnor</small>
            </div> 
          </div>
          </div>
          </DownToUpAnimation>
      </div>
      
    </div>

    </>
  )
}

export default Education

