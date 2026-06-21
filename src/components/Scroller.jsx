import { motion, useScroll, useSpring } from 'motion/react'
import React from 'react'



const Scroller = () => {

    const {scrollYProgress} = useScroll()
    const scaleX = useSpring(scrollYProgress)


  return (
    <motion.div 
        style={{scaleX}}
        className='fixed top-0 h-0.5 w-full bg-linear-to-r from-[#7dddfb] to-[#b697ff] origin-left z-50'>
    </motion.div>
  )
}

export default Scroller