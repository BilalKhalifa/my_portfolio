import React from 'react'
import TechIcon from './TechIcon'

const TechCard = ({category, className=''}) => {

  const colSpan={
    1: 'col-span-1',
    2: 'col-span-2'
  }

  const rowSpan = {
    1: 'row-span-1',
    2: 'row-span-2'
  }

  return (
    <div 
        className={`
                    ${colSpan[category.layout.colSpan]}
                    ${rowSpan[category.layout.rowSpan]}
                    ${className}
                    
                    relative overflow-hidden rounded-[28px]
                    border border-white/15
                    bg-(--primary)/60
                    backdrop-blur-xl

                    p-8 min-h-80

                    transition-all duration-500
                  `}
    >
      {/* Background Glow */}
      <div 
          className='absolute inset-0 opacity-25 blur-3xl'
          style={{
            background: `radial-gradient(circle at center, ${category.color}, transparent 70%)`
          }}
      />
          <div className="relative z-10 flex items-start justify-between">
          <div>
            <p
              className="text-[11px] uppercase tracking-[3px] font-(family-name:--nav-font)"
              style={{ color: category.color }}
            >
              // {category.title}
            </p>

            <h3 className="mt-3 text-4xl font-semibold font-(family-name:--hero-font)">
              {category.title}
            </h3>
          </div>

          <div className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/60">
            {category.tools.length} tools
          </div>
        </div>

        {/* Icons */}
        <div
            className='
                        mt-14 flex flex-wrap gap-8
                      '
        >
            {category.tools.map((tool)=>(
              <TechIcon 
                      key={tool.name}
                      tool={tool}
              />
            ))}
        </div>

    </div>
  )
}

export default TechCard