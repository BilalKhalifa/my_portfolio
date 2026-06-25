import React from 'react'
import { timelineData } from './timelineData'

const Education = () => {
  return (
    <div className='h-full flex flex-col gap-6 w-full bg-(--primary) px-75 py-45'>
      <div id="title" className='flex w-full items-center gap-3 '>
        <span className='grow h-px bg-white/50'></span>
        <span className='uppercase  text-white/50 font-(family-name:--nav-font) text-[10px] tracking-[3px] whitespace-nowrap shrink-0'>Academic Journey</span>
        <span className='grow h-px bg-white/50'></span>
      </div>

      {/* timeLine */}
      <div className='relative mt-8'>
        {/* Center Line */}
        <div className='absolute left-1/2 top-0 h-full w-px bg-linear-to-b from-[#4566ac] to-[#4566ac]/10' / >

        {timelineData.map((item,index)=>(
          <div 
              key={index}
              className={`relative flex mb-28
                          ${index % 2 === 0 ? "justify-start" : "justify-end"}
                `}
          >
          {/* Dot */}
            <div className='absolute left-1/2 -translate-x-1/2 top-10 w-4 h-4 rounded-full bg-[#a2bdff]'/>
          {/* Card */}
            <div 
                className={`
                            w-[45%] rounded-3xl text-white
                            p-7
                            backdrop-blur-2xl
                            bg-linear-to-br from-white/20  to-(--transparent-pill)/30
                            border-2 border-white/10 
                            ${index % 2 === 0 ? 'text-end' : 'text-start'}
              `}>
                <p className='font-(family-name:--nav-font) text-[10px] text-[#97E6F5] tracking-[2.2px]'>{item.year}</p>
                <h3 className='mt-2 font-(family-name:--hero-font) text-[20px] tracking-[-0.5px] font-medium'>{item.title}</h3>
                <p className='mt-1 font-(family-name:--nav-font) text-sm text-[#7DDDFB] italic'>{item.subtitle}</p>
                <p className='mt-3 font-(family-name:--nav-font) text-sm text-white/50'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education