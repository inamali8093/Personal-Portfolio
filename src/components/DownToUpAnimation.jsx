import React,{useRef,useEffect} from 'react'
import {motion,useInView,useAnimation} from 'framer-motion'

const DownToUpAnimation = ({children,initialY,className}) => {

    const ref = useRef(null)
    const isInView = useInView(ref,{once: true})

    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect(()=>{
        if(isInView){
          mainControls.start("visible")
          slideControls.start("visible")
        }
    },[isInView])

  return (
    <div ref={ref} className={className}>
        <motion.div
        variants={{
            hidden: {opacity: 0,y: initialY},
            visible: {opacity: 1,y: 0}
        }}
        initial='hidden'
        animate={mainControls}
        transition={{duration: 0.5, delay:0.25}}
        className='flex justify-center items-center flex-col'
        >
            {children}
        </motion.div>

        {/* <motion.div
        variants={{
            hidden: {left: 0},
            visible: {left: "100%"}
        }}
        initial='hidden'
        animate={slideControls}
        transition={{duration: 0.5, ease: "easeIn"}}
        className='absolute top-4 bottom-4 left-0 right-0  bg-black'
        >
            {children}
        </motion.div> */}
      
    </div>
  )
}

export default DownToUpAnimation