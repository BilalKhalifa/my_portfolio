import React from 'react'
import { toolkit } from './toolkit '

const SkillFilter = ({ selectCategory, setSelectCategory }) => {

  const categories = [
    {id:'all', title: 'All'},
    ...toolkit.map(category=>({
      id:category.id,
      title:category.title
    }))
  ]  

  const TotalTools = toolkit.reduce(
    (total, category) => total + category.tools.length,
    0
  )

  return (
    <div className='mb-10 flex gap-3 flex-wrap'>
      {categories.map(category => (
        <div className={`
                          bg-transparent p-0.5 rounded-full
                          transition-colors duration-300
                          ${selectCategory === category.id
                            ? 'bg-linear-to-r from-[#19c7cd] to-[#f827f5]'
                            : 'bg-transparent'
                          }
                        `}
              key={category.id}
        >
          <button
                  onClick={ () => setSelectCategory(category.id)}
                  key={category.id}
                  className={`
                              py-1.5 px-3
                              text-[10px] font-(family-name:--nav-font) tracking-[2.2px] font-medium uppercase
                              border rounded-full transition-all duration-300 bg-(--primary)
                              ${
                                selectCategory === category.id
                                ? 'text-[#08cbc5] border-transparent '
                                : 'text-white/50 border-white/30'
                              }
                            `}
          >
            {category.id === 'all'
              ? `${category.title} · ${TotalTools}`
              : category.title
            }
          </button>
        </div>
      ))}
    </div>
  )
}

export default SkillFilter