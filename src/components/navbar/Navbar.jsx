import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <nav 
    className=' flex justify-center items-center gap-5
                fixed h-fit w-fit top-5 left-[50%] transform translate-x-[-50%]
                px-2 py-2
                bg-(--transparent-pill)/10 backdrop-blur-lg
                rounded-full border border-white/5
                z-50
    '>
        <h4 className='text-white font-medium'><span className=' bg-[#8ee3f7] h-2 w-2 ml-2 mr-2 inline-block rounded-full'></span>Bilal Khalifa</h4>
        <h4 className='nav-option text-white/50'>About</h4>
        <h4 className='nav-option text-white/50'>Experience</h4>
        <h4 className='nav-option text-white/50'>Work</h4>
        <h4 className='nav-option text-white/50'>Skills</h4>
        <h4 className='nav-option text-white/50'>Resume</h4>
        <h4 className='nav-option text-white/50'>Contact</h4>
        <h4 className='text-black bg-white rounded-full h-fit w-fit font-medium px-2 py-1'>Let's Talks</h4>
    </nav>
  )
}

export default Navbar