import { timelineData } from '../../data/timelineData'
import { GitHubCalendar } from 'react-github-calendar'
import './education.css'
import { RiArrowRightLongLine, RiGithubLine } from '@remixicon/react'
const Education = () => {
  return (
    <div className='h-full flex flex-col gap-6 w-full bg-(--primary) px-6 py-20 md:px-16 md:py-32 xl:px-75 xl:py-45'>
      <div id="title" className='flex w-full items-center gap-3 '>
        <span className='grow inline-block h-[0.5px] bg-linear-to-l from-[white]/30 to-[white]/0'></span>
        <span className='uppercase  text-white/50 font-(family-name:--nav-font) text-[10px] tracking-[3px] whitespace-nowrap shrink-0'>Academic Journey</span>
        <span className='grow inline-block h-[0.5px] bg-linear-to-r from-[white]/30 to-[white]/0'></span>
      </div>

      {/* timeLine */}
      <div className='relative mt-16'>
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

      {/* Git chart */}
      <div id="git-contribution" className=' mt-7 flex flex-col gap-5'>
        {/* Title */}
        <h4 className='flex items-center gap-3 text-white/50 font-(family-name:--nav-font) uppercase tracking-[3px] text-[10px]!'>
          <span className='inline-block bg-[#00D492] h-2 w-2 rounded-full'></span>// github · contributions
        </h4>
        {/* info */}
        <div className='mt-7'>
          <span className='bg-linear-to-r from-[#f3f7f8] to-[#8bd5f2] font-(family-name:--hero-font) text-6xl bg-clip-text text-transparent font-semibold'>Learning in</span>
          <span className='bg-linear-to-r from-[#80defa] via-[#9adef5] to-[#b2a1fe] font-(family-name:--hero-font) text-6xl bg-clip-text text-transparent font-semibold italic'> Public</span>

          <div className='flex items-center justify-between mt-3'>
            <p className='text-lg font-(family-name:--nav-font) text-white/50'>Daily commits, side projects, and college experiments — pushed to GitHub as I learn.</p>
            <a 
              href='https://github.com/BilalKhalifa'
              className='
                        flex gap-2 items-center
                        bg-white-10 rounded-full border border-white/30 
                        text-white/50 text-xs hover:text-white transition-colors duration-75 ease-in
                        px-4 py-2
                      '  
              target='_blank'
            ><RiGithubLine size={18} /> View on GitHub<RiArrowRightLongLine size={15} /></a>
          </div>
        </div>
        {/* Calender */}
        <div className='  mt-7 mx-auto w-fit left-1/2  text-white backdrop-blur-2xl bg-white/20 p-8 rounded-3xl'>
          <GitHubCalendar
            username='BilalKhalifa'
            theme={{
              light : [
              '#1b1f2a',
              '#48508d',
              '#8175dc',
              '#49afff',
              '#64e2ff'
            ],
            dark : [
              '#1b1f2a',
              '#48508d',
              '#8175dc',
              '#49afff',
              '#64e2ff'
            ],
          }}
          tooltips={{
            activity: {
              text: activity => `${activity.count} contribution on ${activity.date}`,
              placement: 'top',
            }
          }}
          blockRadius={4}
          blockMargin={6}
          blockSize={14}
          showWeekdayLabels={true}
          className='font-(family-name:--nav-font) text-white/50 uppercase text-xs!'
          />
        </div>
      </div>
    </div>
  )
}

export default Education