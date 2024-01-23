import React from 'react'
import { Link } from 'react-router-dom'

const ProjectContainer = ({children,image}) => {
  return (
    <>
    <div className='w-full flex flex-col items-center justify-center gap-12 mb-8'>
    <div className='w-[70%] h-[200px] bg-cover relative rounded-lg overflow-hidden shadow-lg shadow-gray-500/40' style={{backgroundImage:`url(${image})`}}>
      <div className='w-full h-1/3 bg-gray-500 rounded absolute px-12 bottom-0 flex justify-between items-center'>

      <Link to='#' className='bg-blue-800 p-2 rounded text-white'>Github Link</Link>
      <Link to='#' className='bg-blue-800 p-2 rounded text-white'>Preview</Link>

      </div>  
    </div>

     <div className='shadow-lg shadow-[rgb(200,111,67)] h-auto w-[70%] rounded-lg'>
        <h2 className='text-white text-center p-2 text-xl font-semibold'>About the Project</h2>
        <p className='text-white p-4'>
          {children}
        </p>
     </div>

    </div>
    </>
  )
}

export default ProjectContainer

