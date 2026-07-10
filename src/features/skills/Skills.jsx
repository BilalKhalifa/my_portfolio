import { RiBardLine } from '@remixicon/react'
import { useState } from 'react'
import SkillFilter from './SkillFilter'
import SkillGrid from './SkillGrid'


const Skills = () => {
  
  const [selectCategory, setSelectCategory] = useState('all')

  return (
    <div className='h-full w-full bg-primary text-white px-6 py-20 md:px-16 md:py-32 xl:px-28 xl:py-36'>
      <h1 className='text-[10px] font-(family-name:--nav-font) uppercase flex gap-3 tracking-[3px] text-white/50'>
        <RiBardLine size={15} className='text-[#97E6F5]' /> // toolkit · stack
      </h1>
      <h2 
          className='
                      mt-7 
                      font-semibold text-4xl md:text-6xl font-hero
                    '
      >
        <span className='bg-linear-to-r from-[#edf1f8] to-[#98ddf3] bg-clip-text text-transparent'>My everyday</span> 
        <span className='italic bg-linear-to-r from-[#80defa] via-[#99e0f5] to-[#b3a0fe] bg-clip-text text-transparent'> arsenal.</span>
      </h2>
      <h3 className='mt-5 font-nav text-base md:text-lg text-white/50'>
        The technologies I use to build modern, fast and scalable web applications.<br />and Mobile application
      </h3>
      {/* Tech-Stack */}
      <div className='mt-16'>
        <SkillFilter 
                    selectCategory={selectCategory}
                    setSelectCategory={setSelectCategory}
        />
        <SkillGrid 
                    selectCategory={selectCategory}
        />
      </div>
    </div>
  )
}

export default Skills
