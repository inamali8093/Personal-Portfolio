import React,{useCallback} from 'react'
import ContactContainer from '../components/ContactContainer'
import { Mail,PhoneCall,Linkedin,Copy,Navigation, Instagram } from 'react-feather'
import { Link } from 'react-router-dom'
import SideToSideAnimation from '../components/SideToSideAnimation'
import { motion,useTime,useTransform } from "framer-motion"


const Contact = () => {

  const time = useTime()
const rotate = useTransform(
  time,
  [0, 4000], // For every 4 seconds...
  [0, 360], // ...rotate 360deg
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
     <div className='bg-black  min-h-screen p-12 flex flex-col md:flex md:flex-row justify-between items-center w-full gap-12'>

    
       <div className='md:w-[30%] w-full shadow-lg shadow-[rgb(200,111,67)]  h-auto py-8'>
      <h2 className='text-[rgb(200,111,67)] text-4xl text-center font-bold mb-12'>Contact
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
    

      <div className='hidden md:flex'>
        <motion.img 
        style={{rotate}}
        src="/or.png" alt="OR" className='w-[100px]' />
      </div>

      <div className='text-white text-2xl font-bold flex flex-col justify-center items-center md:hidden'>
        <p>OR</p>
        <span>Fill the form</span>
      </div>

      <div className='w-[100vw] md:w-auto'>
        <form className='text-white'>
        <iframe className='bg-black w-full md:w-[640px]' src="https://docs.google.com/forms/d/e/1FAIpQLSe6uOt5aGROugJrn8I7yHHzbOrshuVPGXqCNjDj9mUcwNNKVQ/viewform?embedded=true" width="640" height="687" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </form>
      </div>


      </div>
    </>
  )
}

export default Contact
