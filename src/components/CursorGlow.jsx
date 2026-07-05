import gsap from 'gsap'
import  { useEffect, useRef } from 'react'

const CursorGlow = () => {

    const glowRef =  useRef(null)

    useEffect(()=>{

    if(!glowRef.current) return;
    const setX = gsap.quickTo(glowRef.current, "x", {duration: 0.5, ease: 'power3.out'})
    const setY = gsap.quickTo(glowRef.current, "y", {duration: 0.5, ease: 'power3.out'})

    const handleMouseMove = (e) => {
      setX(e.clientX)
      setY(e.clientY)
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
                    z-10
                  '
    >
    </div>
  )
}

export default CursorGlow