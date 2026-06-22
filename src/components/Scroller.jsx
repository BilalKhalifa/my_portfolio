import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { motion, useScroll, useSpring } from 'motion/react'
import React, { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Scroller = () => {

    const {scrollYProgress} = useScroll()
    const scaleX = useSpring(scrollYProgress)

    useEffect(() => {
      const sections = ['hero', 'about', 'education', 'work', 'skills', 'resume', 'contact']

      sections.forEach((id) => {
        const element = document.getElementById(id)
        if (!element) return

        ScrollTrigger.create({
          trigger: element,
          start: 'top 45%',
          end: 'bottom 45%',
          onToggle: (self) => {
            if (self.isActive) {
              const path = id === 'hero' ? '/' : `/${id}`
              window.history.replaceState({}, '', path)
            }
          }
        })
      })

      const path = window.location.pathname.replace('/', '')
      if (path && sections.includes(path)) {
        setTimeout(() => {
          const element = document.getElementById(path)
          if (element) {
            gsap.to(window, {
              scrollTo: `#${path}`,
              duration: 1.2,
              ease: 'power3.inOut'
            })
          }
        }, 100)
      }

      return () => {
        ScrollTrigger.getAll().forEach(t => t.kill())
      }
    }, [])

  return (
    <motion.div 
        style={{scaleX}}
        className='fixed top-0 h-0.5 w-full bg-linear-to-r from-[#7dddfb] to-[#b697ff] origin-left z-50'>
    </motion.div>
  )
}

export default Scroller