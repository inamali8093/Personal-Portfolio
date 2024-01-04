import React from 'react'

const AboutContainer = ({children,title}) => {
  return (
    <div className='w-[300px] h-[400px] rounded-md shadow-lg shadow-[rgb(200,111,67)] flex justify-center bg-[rgb(0,0,0)]'>
         <div className='flex flex-col text-white'>
            <h3 className='my-4 text-2xl font-semibold text-center'>{title}</h3>
            {children}
            </div>
     
    </div>
  )
}

export default AboutContainer