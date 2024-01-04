import React from 'react'
import Skills from '../components/Skills'
import SideToSideAnimation from '../components/SideToSideAnimation'


const Home = () => {
 
  const name = "Inam Ali"
  const image = './webD.jpg'

  
  
  return (
    <>
      
     <div className='md:flex md:flex-row flex flex-col items-center justify-center w-full min-h-[90vh] bg-black'>

     
        <div className='md:w-[60%] p-4  m-12 rounded-2xl shadow-lg shadow-[rgb(200,111,67)] md:flex md:min-h-[80vh] md:items-center md:justify-center'>
        <SideToSideAnimation initialX={-100}>
         <div className='w-full h-full rounded-lg flex justify-center items-center flex-col' >
          <p className='font-extrabold text-5xl p-2 text-[rgb(65,109,109)]'>Hi, My name is <span className='text-[rgb(200,111,67)]'>{name}</span></p>
          <p className='text-5xl text-[rgb(65,109,109)] font-extrabold p-2'>I'm a passionate <span className='text-[rgb(200,111,67)]'>Web Developer</span></p>
          <p className='text-xl font-semibold text-[rgb(65,109,109)] p-2 text-center'>
             good at designing user-friendly interfaces, optimizing performance & solving complex problems
          </p>
         </div>
         </SideToSideAnimation>
        </div>
       


       
        <div className='md:w-[30%] m-12 shadow-lg rounded-xl'>
        <SideToSideAnimation initialX={100}>
          <div className='w-full flex items-center justify-center bg-cover bg-center rounded-xl  overflow-hidden'style={{backgroundImage:`url(${image})`,height:560,width:442}}>
           <img src="/myPhoto.jpeg" className='w-221 rounded-full h-[50%]' alt="" /> 
          </div>
          </SideToSideAnimation>
        </div>
        
     </div>    
      <Skills />
    </>
  )
}

export default Home
