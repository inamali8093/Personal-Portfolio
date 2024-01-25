import React from 'react'
import ProjectContainer from '../components/ProjectContainer'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Projects = () => {

  const image1 = './chatAppSignup.png'
  const image2 = './blogApp.png'
  const image3 = './spotifyClone.png'

  return (
    // <div className='min-h-screen bg-cover flex justify-center items-center flex-col gap-6' style={{backgroundImage: 'url(backgroundGradient-6.jpg)'}}>

    //   <Header />
      
    //   <ProjectContainer image={image}>
    //     User can send message in realtime to other users. <br/>
    //     In this Project, I have used ReactJS for the frontend, redux toolkit for the state management and I have used Appwrite as the backend and authentication service.
    //   </ProjectContainer>

    //   <ProjectContainer image={image}>
    //     User can write his blog and can read other's blog. <br/>
    //     In this project, I have used ReactJS for the frontend, redux tookit for he state management and Appwrite as the backend and authentication service.  
    //   </ProjectContainer>  

    //   <Footer />

    // </div>
     <div className='bg-cover bg-center' style={{backgroundImage: 'url(./backgroundGradient-6.jpg)'}}>
      <Header />

      <div className='min-h-screen flex flex-col justify-center items-center'>
    
    <h1 className='text-4xl text-white font-bold '>Updating Soon...</h1>
     
     {/* <ProjectContainer image={image1} />
     <ProjectContainer image={image2} />
     <ProjectContainer image={image3} /> */}


    </div>
      


      <Footer />
    </div>
  )
}

export default Projects
