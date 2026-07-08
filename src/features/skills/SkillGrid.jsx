import { toolkit } from '../../data/toolkit'
import TechCard from './TechCard'

const SkillGrid = ({ selectCategory }) => {

  
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8'>
        {toolkit.map((category) => {
              const isActive = selectCategory === 'all' || selectCategory === category.id
              return (
                <TechCard
                  key={category.id}
                  category={category}
                  selectCategory={selectCategory}
                  className={
                              `
                                relative rounded-[30px] transition-all duration-500
                                ${
                                  isActive 
                                  ? 'opacity-100 scale-100 blur-none pointer-events-auto'
                                  : 'opacity-35 scale-95 blur-[2px] pointer-events-none'
                                }
                              `  
                            }
                />
              )
          })}
      </div>     
  )
}

export default SkillGrid