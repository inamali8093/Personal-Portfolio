import React,{useRef,useEffect} from 'react'
import {motion,useInView,useAnimation} from 'framer-motion'

const SideToSideAnimation = ({children,initialX ,className}) => {

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
            hidden: {opacity: 0,x: initialX},
            visible: {opacity: 1,x: 0}
        }}
        initial='hidden'
        animate={mainControls}
        transition={{duration: 0.5, delay:0.25}}
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

export default SideToSideAnimation