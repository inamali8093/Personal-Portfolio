import React from 'react'
import ProjectContainer from '../components/ProjectContainer'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Projects = () => {

  const image1 = './chatAppSignup.png'
  const image2 = './blogApp.png'
  const image3 = './spotifyClone.png'

  return (
   
     <div className='bg-cover bg-center' style={{backgroundImage: 'url(./backgroundGradient-5.jpg)'}}>
      <Header />

      <div className='min-h-screen flex flex-col justify-center items-center'>
    
     
     <ProjectContainer image={image1} name="Chat App" githubLink='#' className='md:-translate-x-60'>
     User Authentication through Appwrite. state management using redux-toolkit
    User Can send and receive messages in real time
    <div className='flex my-1 gap-2 flex-wrap'>
         <div className='p-1 text-xs outline rounded-md'>React</div>
         <div className='p-1 text-xs outline rounded-md'>Redux toolkit</div>
         <div className='p-1 text-xs outline rounded-md'>Appwrite</div>
         <div className='p-1 text-xs outline rounded-md'>Tailwind</div>
    </div>
     </ProjectContainer>
    
 <ProjectContainer image={image2} name="Mega-Blog" githubLink='#' className='md:translate-x-60'>
 Developed a Standard blog writing app using react,react-redux,Appwrite where any
user can post his blogs and save his blogs on appwrite.
Improved the performance using different hooks
<div className='flex my-1 gap-2 flex-wrap'>
         <div className='p-1 text-xs outline rounded-md'>React</div>
         <div className='p-1 text-xs outline rounded-md'>Redux toolkit</div>
         <div className='p-1 text-xs outline rounded-md'>Appwrite</div>
         <div className='p-1 text-xs outline rounded-md'>Tailwind</div>
         <div className='p-1 text-xs outline rounded-md'>React hook form</div>
    </div>
  </ProjectContainer>
     <ProjectContainer image={image3} name='mini-spotify' githubLink='#' className='md:-translate-x-60'>
      Simple spotify clone developed with HTML,CSS and JS in which user can play songs already added in it.
      <div className='flex my-1 gap-2 flex-wrap'>
         <div className='p-1 text-xs outline rounded-md'>HTML</div>
         <div className='p-1 text-xs outline rounded-md'>CSS</div>
         <div className='p-1 text-xs outline rounded-md'>Javascript</div>
         
    </div>

     </ProjectContainer>


    </div>
      


      <Footer />
    </div>
  )
}

export default Projects
