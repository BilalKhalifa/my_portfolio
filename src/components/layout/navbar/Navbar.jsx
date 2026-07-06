import { RiArrowRightLongFill } from '@remixicon/react'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/all'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence} from 'motion/react'


gsap.registerPlugin(ScrollToPlugin)

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Education', id: 'education' },
    { label: 'Work', id: 'work' },
    { label: 'Skills', id: 'skills' },
    { label: 'Resume', id: 'resume' },
    { label: 'Contact', id: 'contact' }
  ]

  const scrollToSection = (id) => {
    const path = id === 'hero' ? '/' : `/#${id}`
    window.history.replaceState({}, "", path)

      gsap.to(window, {
        duration: 1,
        scrollTo: `#${id}`,
        ease: "power3.inOut"
      })
  }

  
  return (
    <>
    <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{duration:0.25}}
            onClick={()=> setIsOpen(false)}
            className='md:hidden fixed inset-0 h-screen w-screen bg-black/40 backdrop-blur-md z-30'
          />
        )}
      </AnimatePresence>
      <nav className='fixed top-5 flex
                      justify-between md:justify-center items-center 
                      gap-5 h-fit w-[92%] md:w-fit left-[50%] transform translate-x-[-50%] 
                      px-4 py-3 md:px-2 md:py-2 
                      bg-transparent-pill/10 backdrop-blur-lg rounded-[20px] md:rounded-full border border-white/5 z-50'
      >
        <h4 
            className='text-white font-medium cursor-pointer text-xs leading-5 font-nav' 
            onClick={() => scrollToSection('hero')}
        >
          <span className='bg-[#8ee3f7] h-2 w-2 ml-2 mr-2 inline-block rounded-full'></span>
          Bilal Khalifa
        </h4>
        {/* Desktop Nav */}
        <div className='hidden md:flex items-center gap-5'>
          {navItems.map((item) => (
            <button
              key={item.id}
              className='nav-option text-white/50 bg-transparent border-none cursor-pointer outline-none hover:text-white transition-colors duration-200'
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
          <button
                  onClick={()=>{scrollToSection('contact')}}
                  className='
                              text-xs leading-5 font-nav cursor-pointer
                            text-black bg-white rounded-full h-fit w-fit font-medium px-2 py-1
                            '
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile Nav */}
        <button 
                onClick={() => setIsOpen(!isOpen)}
                className='flex md:hidden items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-white/80 cursor-pointer hover:bg-white/10 hover:text-white transition-all duration-300'
        > 
          {isOpen? <X size={16} /> : <Menu size={16} />}
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div

                initial={{ opacity:0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className='
                            md:hidden absolute top-full left-0 right-0 mt-3 p-6
                            bg-primary/95 backdrop-blur-2xl
                            border border-white/10 rounded-3xl flex flex-col gap-6 text-start z-40 shadow-2xl
                          '
            >
              {/* option list */}
                <div className='flex flex-col gap-2 w-full'>
                  {navItems.map((item,index) => (
                    <div
                        key={item.id}
                        className='
                                    flex justify-between items-center py-3 border-b border-white/5 last:border-b-0
                                    cursor-pointer group
                                  '
                        onClick={() => {
                          scrollToSection(item.id)
                          setIsOpen(false)
                        }}
                    >
                      <span className='text-white/70 text-base font-nav transition-colors group-hover:text-white'>
                        {item.label}
                      </span>
                      <span className='text-white/30 text-xs font-mono'>
                        0{index + 1}
                      </span>
                    </div>
                  ))}
                  {/* Let's talk button */}
                  <button
                        onClick={()=>{
                          scrollToSection('contact')
                          setIsOpen(false)
                        }}
                        className='
                                    w-full text-black bg-white py-3 rounded-full font-medium font-nav
                                    hover:bg-white/90 transition-colors text-sm flex items-center justify-center gap-2
                                  '
                  >
                    Let's Talk <RiArrowRightLongFill />
                  </button>
                </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}

export default Navbar