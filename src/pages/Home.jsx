import React from 'react'
import Skills from '../components/Skills'
import SideToSideAnimation from '../components/SideToSideAnimation'
import {motion} from 'framer-motion'
import {Download} from 'react-feather'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About from './About'


const Home = () => {
 
  const name = "Inam Ali"
  const image = './webD.jpg'

  const downloadResume = ()=>{
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
  
  return (
    <>
     <div className='flex flex-col text-white items-center justify-center w-full  bg-cover bg-center' style={{backgroundImage: 'url(./backgroundGradient-5.jpg)'}}>

       <Header />
    
        <div className='md:w-[60%] p-4 outline m-12 rounded-2xl  md:flex md:min-h-[80vh] md:items-center md:justify-center'>
        <SideToSideAnimation initialX={-100}>
         <div className='w-full h-full rounded-lg flex justify-center items-center flex-col' >
          <p className='font-extrabold text-5xl p-2'>Hi, My name is <span className='text-[rgb(200,111,67)]'>{name}</span></p>
          <p className='text-5xl font-extrabold p-2'>I'm a passionate <span className='text-[rgb(200,111,67)]'>Web Developer</span></p>
          <p className='text-xl font-semibold p-2 text-center'>
             good at designing user-friendly interfaces, optimizing performance & solving complex problems
          </p>
         </div>
         </SideToSideAnimation>
        </div>
       
        <motion.div
         whileHover={{scale:1.1}}
         whileTap={{scale:0.9}}
        className='flex md:hidden'>
            <button className='bg-blue-600 p-2 text-white font-bold rounded-lg mx-12 w-auto flex gap-2'onClick={downloadResume}>Resume <Download /></button>
         </motion.div>

       
        {/* <div className='md:w-[30%] m-12 shadow-lg rounded-xl'>
        <SideToSideAnimation initialX={100}>
          <div className='w-full flex items-center justify-center bg-cover bg-center rounded-xl  overflow-hidden'style={{backgroundImage:`url(${image})`,height:560,width:442}}
          >
           <motion.img 
            drag
            dragConstraints={{
              top: -150,
              left: -150,
              right: 150,
              bottom: 150,
            }}
           src="/myPhoto.jpeg" className='w-221 rounded-full h-[50%]' alt="" /> 
          </div>
          </SideToSideAnimation>
        </div> */}
        <Skills />
        <About />
       <Footer />
     </div> 
   
   
      
    </>
  )
}

export default Home
