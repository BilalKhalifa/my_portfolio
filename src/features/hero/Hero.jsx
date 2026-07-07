import { useGSAP } from '@gsap/react'
import {  RiBardLine, RiCpuLine, RiMapPinLine } from '@remixicon/react'
import { ArrowNarrowUpDashedIcon, MailFilledIcon } from '../../components/ui/hoverIcon'
import gsap from 'gsap'
import { motion } from "motion/react"
import { useRef } from 'react'
import './hero.css'

const Hero = () => {


  const leftRef = useRef()
  const rightRef = useRef()
  const arrowRef = useRef(null)
  const mailRef = useRef(null)

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
    <div className='
                    relative h-full w-full pt-28 md:pt-50 flex flex-col-reverse md:flex-row
                  bg-primary gap-12 md:gap-0 pb-16 md:pb-0
                  '
    >
      {/* Left Container */}
        <div ref={leftRef} 
            className="left flex flex-col items-start w-full md:w-1/2 h-full px-6 md:pl-20 xl:pl-95">
            <div 
            
            className='
                flex items-center
                text-white bg-transparent-pill/10 
                px-4 py-2 rounded-full border border-transparent-pill/10 
                uppercase font-nav font-light text-[11px] tracking-[3px]
                mb-8
            '>
              <div className="relative flex items-center justify-center w-3 h-3 mr-3">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#8ee3f7] opacity-75 animate-ping"></span>

                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8ee3f7]"></span>
              </div>
              Available • {new Date().getFullYear()}
            </div>
            <div 
                className='
                            font-hero text-5xl md:text-[104px] leading-tight md:leading-[110px]
                            font-semibold  text-transparent
                            bg-linear-to-r from-[#f4f8f9] to-[#97ddf4] bg-clip-text 
                          '
            >
              Engineering 
            </div>
            <div 
                className='
                            font-hero text-5xl md:text-[104px] leading-tight md:leading-[110px]
                            font-semibold  text-transparent
                            bg-linear-to-r from-[#f4f8f9] to-[#97ddf4] bg-clip-text
                          '
            >
              Digital 
            </div>
            <div className='
                            font-hero text-5xl md:text-[104px] leading-tight md:leading-[110px]
                            font-semibold  text-transparent italic
                            bg-linear-to-r from-[#84e2fa] via-[#9dd7f7] to-[#b2a0fe] bg-clip-text
                            '
            >
              Experiences
            </div>
            <div className='mt-7 font-nav text-white/50 text-base md:text-lg font-medium md:font-light max-w-xl '>
              <p>I'm <span className='font-bold text-white'>Bilal Khalifa</span> — a Computer Engineer and Full Stack Developer crafting interfaces that feel <span className='text-[#97E6F5]'>inevitable</span>: fast, elegant, considered to the pixel.
              </p>
            </div>
            <div className='flex gap-5 mt-5 text-sm font-nav font-medium items-center '>
                <button 
                        className='bg-white flex gap-2 rounded-full  py-3 px-6 items-center cursor-pointer whitespace-nowrap'
                        onMouseEnter={()=>arrowRef.current?.startAnimation()}
                        onMouseLeave={()=>arrowRef.current?.stopAnimation()}
                >
                  Explore Projects <ArrowNarrowUpDashedIcon className='size-5 rotate-45' ref={arrowRef}/>
                </button>
                <button 
                  className='flex gap-3
                  text-white items-center whitespace-nowrap
                    border border-white/10 rounded-full
                  bg-white/5 py-3 px-6 cursor-pointer tracking-widest'
                  onMouseEnter={()=>mailRef.current?.startAnimation()}
                  onMouseLeave={()=>mailRef.current?.stopAnimation()}
                >
                  Get in touch <MailFilledIcon className='size-7' ref={mailRef}/>
                </button>
            </div>
            <div className='font-nav text-white/50 mt-12 text-[10px] tracking-[3px] flex items-center gap-4'>
              <span className='h-px w-14 bg-white/30 inline-block'></span> 
              SCROLL TO BEGIN 
              <span className='h-px w-14 bg-white/30 inline-block'></span>
            </div>
        </div>
        {/* Right Container */}
        <div ref={rightRef} className="right will-change-transform w-full md:w-1/2 h-full relative px-6 md:pl-20 xl:pl-50 flex justify-center md:justify-start">
          <motion.div 
            animate={{rotate:360}}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className='absolute  blur-3xl opacity-50 bg-linear-to-t from-[#2f5f96] to-[#823ebd] h-96 w-96 md:h-131.75 md:w-97.5'>
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
                      z-20 relative border-2 border-white/10 h-fit md:h-135 w-full max-w-97.5 rounded-4xl md:rounded-4xl
                      backdrop-blur-4xl bg-transparent-pill/20 p-4 md:p-0 flex flex-col md:block  gap-4
                      will-change-transform antialiased backface-hidden
                    '
        >
            <div className=" 
                            relative profile w-full h-[360px] md:w-85.25 md:h-108 md:m-5 
                            rounded-3xl md:rounded-4xl overflow-hidden
                          "
            >
                <img 
                    src='/images/MyImage.png'
                    alt='Bilal Khalifa'
                    className='h-full w-full object-cover'
                />
            </div>
            <div className="description w-full flex justify-between items-start px-2 md:px-0 mt-2 md:mt-0">
              <div className="left flex flex-col  md:ml-7 -mt-2">
                  <span className='text-white font-hero text-[20px] font-semibold leading-none whitespace-nowrap'>Bilal Khalifa</span>
                  <span className='font-[Montserrat] text-xs text-[#97E6F5] italic mt-1 whitespace-nowrap '>Computer Engineer</span>
              </div>
              <div 
                  className="right flex flex-col gap-2 md:gap-1
                  font-nav text-[10px] text-white/50
                  items-end md:mr-7 -mt-2"
              >
                <p className='flex gap-2 items-center whitespace-nowrap'>
                  <RiMapPinLine size={15} /> Eru,Navsari, India
                </p>
                <p className='flex gap-2 items-center whitespace-nowrap'>
                  <RiCpuLine size={15} /> MERN STACK
                </p>
                <p className='flex gap-2 text-[#7DDDFB] items-center whitespace-nowrap'>
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

