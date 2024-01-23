import React from 'react'
import ProjectContainer from '../components/ProjectContainer'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Projects = () => {

  const image = './chatAppSignup.png'

  return (
    <div className='min-h-screen bg-cover flex justify-center items-center flex-col gap-6' style={{backgroundImage: 'url(backgroundGradient-6.jpg)'}}>

      <Header />
      
      <ProjectContainer image={image}>
        User can send message in realtime to other users. <br/>
        In this Project, I have used ReactJS for the frontend, redux toolkit for the state management and I have used Appwrite as the backend and authentication service.
      </ProjectContainer>

      <ProjectContainer image={image}>
        User can write his blog and can read other's blog. <br/>
        In this project, I have used ReactJS for the frontend, redux tookit for he state management and Appwrite as the backend and authentication service.  
      </ProjectContainer>  

      <Footer />

    </div>
  )
}

export default Projects
