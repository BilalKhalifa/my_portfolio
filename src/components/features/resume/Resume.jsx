import { RiBardLine } from '@remixicon/react'
import {DownloadIcon,ExternalLinkIcon} from '../../ui/hoverIcon'
import { useRef } from 'react'

const Resume = () => {

  const downloadRef = useRef(null)
  const externalLinkRef = useRef(null)

  const items = [
    "Built responsive web apps using React.js & Tailwind CSS",
    "Developed full-stack projects using Node.js & MongoDB",
    "Created animated UI with GSAP & Framer Motion",
    "Worked on real-world internship (Flutter development)",
    "Built YouTube analytics platform (TubeLens)",
  ]

  return (
    <div className='h-full w-full bg-primary text-white px-75 py-45'>
      <h1 
          className=' 
                      flex gap-3 
                      text-[10px] uppercase tracking-[3px] text-white/50
                    '
      >
            <RiBardLine size={16} color='#97E6F5'/> // RESUME
      </h1>
      <h2 className='
                      mt-5 
                      text-6xl font-hero font-semibold
                      text-transparent
                    '
      >
        <span className='bg-linear-to-r from-[#f1f6f7] to-[#8ad4f2] bg-clip-text'>The Short version,</span>
        <span className='bg-linear-to-r from-[#81defa] via-[#95e5f5] to-[#b2a0fd] bg-clip-text italic'>On Paper.</span>
      </h2>
      <p className='mt-5 text-white/50 font-nav text-lg'>
        A single-page snapshot of experience, education, and stack. Preview inline<br /> or take a copy.
      </p>
      <div id='card'
            className='
                        mt-5
                        p-10
                        w-full h-full rounded-3xl bg-transparent-pill/10
                        border border-white/10  
                      '
      >
        <div className='grid grid-cols-2 items-center gap-10 '>
          {/* left */}
          <div className=' h-full flex flex-col items-start justify-center font-nav my-auto'>
            <h5 className='text-[10px] tracking-[2.2px] text-[#97E6F5] uppercase'>
                pdf · Updated 2026
            </h5>
            <p className='mt-5 font-hero text-4xl font-medium '>
              Bilal Khalifa- Resume
            </p>
            <ul className='mt-6 font-nav text-sm text-white/50'>
              {items.map((text,i)=>(
                <li key={i} className='flex item-start gap-3 mb-3'>
                  <span className=' mt-2 w-1.5 h-1.5 rounded-full bg-cyan-300 shrink-0'></span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <div className='
                              mt-9 flex gap-3
                              font-nav text-sm!  font-medium 
                            '
            >
              <a 
                      onMouseEnter={()=>downloadRef.current?.startAnimation()}
                      onMouseLeave={()=>downloadRef.current?.stopAnimation()}
                      href="/Bilal_Khalifa_Resume.pdf"
                      download={"Bilal_Khalifa_Resume.pdf"}
                      className='flex items-center gap-2 text-black bg-white rounded-full px-6 py-3 cursor-pointer'
              >
                <DownloadIcon size={18} ref={downloadRef}/>Download Resume
              </a>
              <a 
                      onMouseEnter={()=>externalLinkRef.current?.startAnimation()}
                      onMouseLeave={()=>externalLinkRef.current?.stopAnimation()}
                      href="/Bilal_Khalifa_Resume.pdf"
                      target='_blank'
                      className='flex items-center gap-2 bg-white/4 border border-white/10 rounded-full px-6 py-3 text-white'>
                Preview<ExternalLinkIcon size={18} ref={externalLinkRef}/>
              </a>
            </div>
          </div>
          {/* right */}
          <div className='relative h-200 rounded-2xl border border-white/10 bg-white-5 overflow-hidden'>
              <div 
                  className='absolute top-0 left-0 right-0 z-10 px-4 py-2  bg-black/40 backdrop-blur-md border-b border-white/10'
              >
                <p className='text-xs text-white/60 tracking-widest'>
                  PDF · SCROLL TO VIEW
                </p>
              </div>

              <div className='w-full h-full pt-10 overflow-y-auto'>
                <iframe 
                        src='/Bilal_Khalifa_Resume.pdf'
                        className='h-full w-full '
                />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
