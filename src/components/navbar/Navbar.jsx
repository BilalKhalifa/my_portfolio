import React from 'react'
import './navbar.css'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/all'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollToPlugin)

const Navbar = () => {
  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Education', id: 'education' },
    { label: 'Work', id: 'work' },
    { label: 'Skills', id: 'skills' },
    { label: 'Resume', id: 'resume' },
    { label: 'Contact', id: 'contact' }
  ]

  const scrollToSection = (id) => {
    const path = id === 'hero' ? '/' : `/${id}`
    window.history.replaceState({}, "", path)


    useGSAP(()=>{
      gsap.to(window, {
        duration: 1,
        scrollTo: `#${id}`,
        ease: "power3.inOut"
      })
    }, {dependencies: [id], revertOnUpdate: true})
  }

  return (
    <nav className='flex justify-center items-center gap-5 fixed h-fit w-fit top-5 left-[50%] transform translate-x-[-50%] px-2 py-2 bg-(--transparent-pill)/10 backdrop-blur-lg rounded-full border border-white/5 z-50'>
      <h4 className='text-white font-medium cursor-pointer' onClick={() => scrollToSection('hero')}>
        <span className='bg-[#8ee3f7] h-2 w-2 ml-2 mr-2 inline-block rounded-full'></span>
        Bilal Khalifa
      </h4>
      
      {navItems.map((item) => (
        <button 
          key={item.id}
          className='nav-option text-white/50 bg-transparent border-none cursor-pointer outline-none hover:text-white transition-colors duration-200'
          onClick={() => scrollToSection(item.id)}
        >
          {item.label}
        </button>
      ))}

      <button className='text-black bg-white rounded-full h-fit w-fit font-medium px-2 py-1'>
        Let's Talk
      </button>
    </nav>
  )
}

export default Navbar