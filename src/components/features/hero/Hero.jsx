import { useGSAP } from '@gsap/react'
import { RiArrowRightUpLine, RiBardLine, RiCpuLine, RiMailLine, RiMapPinLine } from '@remixicon/react'
import gsap from 'gsap'
import { Mail } from 'lucide-react'
import { motion } from "motion/react"
import { useRef } from 'react'
import './hero.css'

const Hero = () => {


  const leftRef = useRef()
  const rightRef = useRef()

  useGSAP(()=>{

    const tl = gsap.timeline()

    tl.from(leftRef.current.children,{
      y: 30,
      opacity:0,
      stagger: 0.15,
      duration:0.8
    }, 'anime')
    
    tl.from(rightRef.current,{
      x: 20,
      
      opacity:0,
      duration:0.8
    }, 'anime')
  },[])

  return (
    <div className='relative h-full w-full pt-50 flex'>
        <div ref={leftRef} className="left flex flex-col items-start w-1/2 h-full pl-95">
            <div 
            
            className='
                flex items-center
                text-white bg-(--transparent-pill)/10 
                px-4 py-2 rounded-full border border-(--transparent-pill)/10 
                uppercase font-[Montserrat] font-light text-[11px] tracking-[3px]
                mb-8
            '>
              <div className="relative flex items-center justify-center w-3 h-3 mr-3">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#8ee3f7] opacity-75 animate-ping"></span>

                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8ee3f7]"></span>
              </div>
              Available • {new Date().getFullYear()}
            </div>
            <div className='hero-title will-change-transform  bg-linear-to-r from-[#f4f8f9] to-[#97ddf4] bg-clip-text text-transparent'>Engineering </div>
            <div className='hero-title will-change-transform bg-linear-to-r from-[#f4f8f9] to-[#97ddf4] bg-clip-text text-transparent'>Digital </div>
            <div className='hero-title will-change-transform bg-linear-to-r from-[#84e2fa] via-[#9dd7f7] to-[#b2a0fe] bg-clip-text text-transparent italic'>Experiences</div>
            <div className='mt-7 font-[Montserrat] text-white/50 text-lg font-light '>
              <p>I'm <span className='font-bold text-white'>Bilal Khalifa</span> — a Computer Engineer and Full Stack Developer crafting interfaces that feel <span className='text-[#97E6F5]'>inevitable</span>: fast, elegant, considered to the pixel.
              </p>
            </div>
            <div className='flex gap-5 mt-5 text-sm font-[Montserrat] font-medium items-center '>
                <button 
                className='bg-white flex gap-2 rounded-full  py-3 px-6 items-center cursor-pointer'
                >Explore Projects <RiArrowRightUpLine className='size-4.5' />
                </button>
                <button 
                  className='flex gap-3
                   text-white items-center 
                     border border-white/10 rounded-full
                   bg-white/5 py-3 px-6 cursor-pointer'
                >
                  Get in touch <Mail />
                </button>
            </div>
            <div className='font-[Montserrat] text-white/50 mt-12 text-[10px] tracking-[3px] flex items-center gap-4'>
              <span className='h-px w-14 bg-white/30 inline-block'></span> 
              SCROLL TO BEGIN 
              <span className='h-px w-14 bg-white/30 inline-block'></span>
            </div>
        </div>
        <div ref={rightRef} className="right will-change-transform w-1/2 h-full relative pl-50">
          <motion.div 
            animate={{rotate:360}}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className='absolute  blur-3xl opacity-50 bg-linear-to-t from-[#2f5f96] to-[#823ebd] h-131.75 w-97.5'>
          </motion.div>
        <motion.div 

          animate={{
            y:[-15 ,15, -15]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className='
                          z-10 absolute border-2 border-white/10 h-135 w-97.5 rounded-4xl
                          backdrop-blur-4xl bg-(--transparent-pill)/20'
        >
            <div className="profile w-85.25 h-108 m-5 
                            rounded-4xl overflow-hidden
            ">
                <img src='/images/MyImage.png'/>
            </div>
            <div className="description w-full flex">
              <div className="left flex flex-col w-1/2 ml-7 -mt-2">
                  <span className='text-white font-[SpaceGrotesk] text-[20px] font-semibold'>Bilal Khalifa</span>
                  <span className='font-[Montserrat] text-xs text-[#97E6F5] italic '>Computer Engineer</span>
              </div>
              <div 
                  className="right flex flex-col w-1/2 gap-1 
                  font-[Montserrat] text-[10px] text-white/50
                  items-end mr-7 -mt-2"
              >
                <p className='flex gap-2'>
                  <RiMapPinLine size={15} /> Eru,Navsari, India
                </p>
                <p className='flex gap-2'>
                  <RiCpuLine size={15} /> MERN STACK
                </p>
                <p className='flex gap-2 text-[#7DDDFB]'>
                  <RiBardLine size={15} /> Open To Work
                </p>
              </div>
            </div>
          </motion.div>
        </div>
    </div>
  )
}

export default Hero

