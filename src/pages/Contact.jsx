import React,{useCallback} from 'react'
import ContactContainer from '../components/ContactContainer'
import { Mail,PhoneCall,Linkedin,Copy,Navigation, Instagram } from 'react-feather'
import { Link } from 'react-router-dom'
import SideToSideAnimation from '../components/SideToSideAnimation'
import { motion,useTime,useTransform } from "framer-motion"
import Footer from '../components/Footer'
import Header from '../components/Header'


const Contact = () => {

  const time = useTime()
const rotate = useTransform(
  time,
  [0, 4000], 
  [0, 360], 
  { clamp: false }
)

    const email = 'inamali0291@gmail.com'
    const number = '+91-6396763320'

    const handleCopy1 = useCallback(()=>{
        window.navigator.clipboard.writeText(email)
      },[])


      const handleCopy2 = useCallback(()=>{
        window.navigator.clipboard.writeText(number)
      },[])

  return (
    <>
     <div className='bg-cover bg-center text-white  min-h-screen  flex flex-col justify-between items-center w-full gap-12' style={{backgroundImage: 'url(backgroundGradient-3.jpg)'}}>
     
     <Header />
    
       <div className='md:w-[30%] w-[80%] outline rounded-lg   h-auto py-8'>
      <h2 className='text-4xl text-center font-bold mb-12'>Contact
      </h2>
          <div className='w-[90%] m-auto h-auto flex flex-col items-center justify-center bg-cover bg-center rounded-xl'>
          

            <SideToSideAnimation initialX={-100} className={'min-w-full'}>
            <ContactContainer>
            <div>
              <Mail />
            </div>
            <div>
              <span >{email}</span>
            </div>
            <div>
              <Copy onClick={handleCopy1} />
            </div>
          </ContactContainer>
          </SideToSideAnimation>

           
         <SideToSideAnimation initialX={100} className={'min-w-full'}>
          <ContactContainer>
            <div>
              <PhoneCall />
            </div>
            <div>
              <span >{number}</span>
            </div>
            <div>
              <Copy onClick={handleCopy2} />
            </div>
          </ContactContainer>
          </SideToSideAnimation>

          <SideToSideAnimation initialX={-100} className={'min-w-full'}>
          <ContactContainer>
            <div>
              <Linkedin />
            </div>
            <div>
              <span >Inam Ali</span>
            </div>
            <Link to="https://linkedin.com/in/inam-ali-02527b229">
              <Navigation />
            </Link>
          </ContactContainer>
          </SideToSideAnimation>  

         <SideToSideAnimation initialX={100} className={'min-w-full'}>
          <ContactContainer>
            <div>
              <Instagram />
            </div>
            <div>
              <span >ali_inam01</span>
            </div>
            <Link to="https://instagram.com/ali_inam01">
              <Navigation />
            </Link>
          </ContactContainer>
          </SideToSideAnimation>

          {/* </div> */}
          </div>
      </div>
    

      <div className='flex'>
        <motion.img 
        style={{rotate}}
        src="/spiderweb1.png" alt="OR" className='w-[100px]' />
      </div>

      <div className='w-[100vw] flex justify-center'>
        <form className='text-white w-[80%] flex flex-col justify-center items-center gap-6 py-6 outline rounded-lg  md:w-[30%]'>
        {/* <iframe className='bg-black w-full md:w-[640px]' src="https://docs.google.com/forms/d/e/1FAIpQLSe6uOt5aGROugJrn8I7yHHzbOrshuVPGXqCNjDj9mUcwNNKVQ/viewform?embedded=true" width="640" height="687" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
        <span className='text-2xl font-bold text-'>Fill the form</span>
        <div className='flex flex-col w-[80%] gap-2'>
       <label htmlFor="name" className='font-semibold'>Name</label>
       <motion.input
        whileFocus={{ scale: 1.1 }}
       
        type="text"
        id="name" 
        placeholder='Enter Your name'
        className='p-2 rounded text-black'
        />
        </div>

        <div className='flex flex-col w-[80%] gap-2'>
          <label htmlFor="email" className='font-semibold'>Email</label>
       <motion.input
        whileFocus={{ scale: 1.1 }}
       
        type="text"
        id="email" 
        placeholder='Enter Your email'
        className='p-2 rounded text-black'
        />
        </div>

        <div className='flex flex-col w-[80%] gap-2'>
          <label htmlFor="contact" className='font-semibold'>Contact</label>
       <motion.input
        whileFocus={{scale: 1.1}}
        
        type="text"
        id="contact" 
        placeholder='Enter Your contact no.'
        className='p-2 rounded text-black'
        />
        </div>

        <motion.input
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         type="button"
         value="Submit"
         className='p-2 rounded-md bg-blue-600'
         />
        
        </form>
      </div>

      <Footer />
      </div>
    </>
  )
}

export default Contact
