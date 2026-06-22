import { RiBardLine } from '@remixicon/react'
import React from 'react'

const About = () => {
  return (
    <div className='h-screen w-full bg-(--primary) px-70 py-55'>
      <div 
          className='
                      flex gap-2
                      uppercase font-[Montserrat] text-[0.625rem] text-white/50  
                    '
      >
        <RiBardLine size={15} className='text-[#97E6F5]' /> // About · Command Center
      </div>
    </div>
  )
}

export default About