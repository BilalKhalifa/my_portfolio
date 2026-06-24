import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

const CursorGlow = () => {

   const glowRef =  useRef(null)

   useEffect(()=>{

    const handleMouseMove = (e) => {
      gsap.to(glowRef.current,{
            x:e.clientX ,
            y:e.clientY ,
            duration:0.5,
            ease: "power3.out"
        })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }

   },[])

  return (
    <div 
        ref={glowRef}
        className='
                    fixed w-40 h-40 rounded-full blur-[120px] bg-[#072e4e]
                    top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none
                  '
    >
    </div>
  )
}

export default CursorGlow