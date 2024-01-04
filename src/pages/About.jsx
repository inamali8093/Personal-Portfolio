import React,{useCallback} from 'react'
import { Link } from 'react-router-dom'
import SideToSideAnimation from '../components/SideToSideAnimation'
import DownToUpAnimation from '../components/DownToUpAnimation'


const Education = () => {

  const handleCopy1 = useCallback(()=>{
    emailRef.current?.select()
    window.navigator.clipboard.writeText(email)
  },[])
  const handleCopy2 = useCallback(()=>{
    window.navigator.clipboard.writeText(number)
  },[])

  return (
    <>
    <div className='bg-black py-12 px-8 gap-12 flex flex-col md:flex md:flex-row justify-between min-h-[90vh]'>
    
     
      <div className='md:w-[30%] shadow-lg shadow-[rgb(200,111,67)] mt-12 h-auto md:h-[60vh] py-6'>
      <DownToUpAnimation initialY={75}>
      <h2 className='text-[rgb(200,111,67)] text-4xl mb-6 md:mb-0 text-center font-bold'>About Me
      </h2>
          <div className='w-full h-full md:h-[70%] flex items-center justify-center bg-cover bg-center'>
          <div className='text-white w-full px-8'>


          <p className='text-white text-lg'>
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
        <img src="/coding.png" className='w-[300px] ' alt="" />
        </DownToUpAnimation>
      </div>
      

      <div className='md:w-[30%] shadow-lg shadow-[rgb(200,111,67)] md:mt-12 h-auto py-6 md:h-[60vh]'>
        
      <DownToUpAnimation initialY={75} >
      <h2 className='text-[rgb(200,111,67)] text-4xl text-center font-bold mb-6 md:mb-0'>Education
      </h2>
          <div className='w-full h-full md:h-[70%] flex items-center justify-center bg-cover bg-center rounded-xl'>
          <div className='list-none text-white w-full px-8'>

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
             <p>2019-2020</p>
            </div>
            <small>from DDPS Bijnor</small>
            </div>

            <div className='my-4'>
            <div className='flex justify-between'>
            <li className='text-2xl font-semibold'> High School : 84.4%</li>
             <p>2017-2018</p>
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
