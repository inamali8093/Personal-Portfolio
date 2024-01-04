import React from 'react'
import {motion} from 'framer-motion'

const ContactContainer = ({children}) => {
  return (
    <>
     <motion.div className='w-full h-auto flex items-center rounded-md shadow-lg shadow-[rgb(200,111,67)]  px-6 py-3 justify-between bg-black text-white font-semibold my-4 hover:shadow-[rgb(65,109,109)] hover:cursor-pointer hover:font-bold'
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
     >
       {children}
     </motion.div> 
    </>
  )
}

export default ContactContainer