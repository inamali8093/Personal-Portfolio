import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Preview = () => {
  return (
    <>
      <div className='w-full bg-black'>
       <Header />
       <div className='min-h-screen text-white flex justify-center items-center text-4xl font-bold'>
        <h1>Updating Soon...</h1>
       </div>
       <Footer />
      </div>
    </>
  )
}

export default Preview
