import React from 'react'

const SocialMediaCard = ( {icon, link}) => {
  return (
    <a 
        className=' flex items-center justify-center
                    w-14 h-14 mt-5
                    p-4 border border-white/30 rounded-2xl bg-transparent text-white
                '
        href={link}
        target='_blank'
        rel='noopener noreferrer'
    >
        {icon}
    </a>
  )
}

export default SocialMediaCard