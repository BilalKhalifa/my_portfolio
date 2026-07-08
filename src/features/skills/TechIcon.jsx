import { motion } from 'motion/react'


const TechIcon = ({tool}) => {
  const Icon = tool.icon
  
  return (
    <motion.div
      whileHover = {{
        rotate:-3,
        y:-8,
        scale: 1.08,
      }}
      transition = {{
        type:'spring',
        stiffness: 300,
        damping: 18
      }}

      className ='
                    group flex flex-col
                    items-center gap-4
                    cursor-pointer  
                  '
    >
      <div 
          className='
                      relative
                      flex items-center justify-center
                      w-14 h-14 md:w-20 md:h-20
                      rounded-2xl md:rounded-3xl
                      border border-white/15
                      bg-white/3
                      backdrop-blur-xl
                      transition-all duration-300
                      group-hover:border-white/30
                    '
      >
        {/* Glow */}
        <div 
            className='
                        absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-30
                      '
            style={{
              background: tool.color
            }}
        />

        <Icon 
              
              style={{
                color:tool.color
              }}
              className=' size-7 md:size-10 relative z-10'
        />

      </div>

      <p
        className='
                    text-[9px] md:text-[11px]
                    uppercase
                    tracking-[2px]
                    text-white/70
                    font-(family-name:--nav-font)
                    transition-colors
                    duration-300
                    group-hover:text-white
                  '
      >
        {tool.name}
      </p>

    </motion.div>
  )
}

export default TechIcon