import { Sparkles } from 'lucide-react'
import React from 'react'

const Contact = () => {
  return (
    <div className='h-screen w-full bg-primary px-74 py-45'>
      <h1 className='flex gap-3 text-[10px] tracking-[3px] uppercase text-white/50'>
        <Sparkles size={15} color='#97E6F5'/>Contact Me
      </h1>
      <div className=' mt-5 grid grid-cols-2'>
        {/* Left */}
        <div className='h-full my-auto mx-auto'>
          <p className='text-white text-8xl font-semibold font-hero'>
            Let's Connect & Create
            <span className='bg-linear-to-r from-[#63A8F8] to-[#B897F4] bg-clip-text text-transparent'> Something</span>
            <span className='bg-linear-to-r from-[#63A8F8] to-[#B897F4] bg-clip-text text-transparent'> greate.</span>
          </p>
        </div>
        {/* Right */}
        <div>

        </div>
      </div>
    </div>
  )
}

export default Contact
