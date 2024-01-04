import React from 'react'

const ContactContainer = ({children}) => {
  return (
    <>
     <div className='w-full h-auto flex items-center rounded-md shadow-lg shadow-[rgb(200,111,67)]  px-6 py-3 justify-between bg-black text-white font-semibold my-4 hover:shadow-[rgb(65,109,109)] hover:cursor-pointer hover:font-bold'>
       {children}
     </div> 
    </>
  )
}

export default ContactContainer