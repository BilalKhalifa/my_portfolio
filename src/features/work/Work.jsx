import { RiBardLine } from '@remixicon/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { projects } from '../../data/projects'
import ProjectCard from './ProjectCard'

import "swiper/css";

const Work = () => {
  return (
    <div className='h-full w-full bg(--primary) py-45 px-75'>
      {/* title section */}
        <h4 className='flex gap-3 font-(family-name:--nav-font) uppercase text-[10px]! text-white/50 tracking-[3px]'>
          <RiBardLine size={15} className='text-[#97E6F5]' /> // selected projects
        </h4>
        <div className='mt-3'>
          <h3 
              className='
                          bg-linear-to-r from-[#f0f6f8] to-[#8ad3f2] bg-clip-text text-transparent
                          font-(family-name:--hero-font) text-6xl font-semibold 
                        '
          >
            Things I've <span className='bg-linear-to-r from-[#82dffa] via-[#95e5f5] to-[#b2a2fd] bg-clip-text text-transparent italic'>built so far.</span>
          </h3>
          <p className='mt-5 text-lg font-(family-name:--nav-font) text-white/50'>
            A curated collection of applications, experiments, and ideas—built with modern <br/> technologies and a passion for creating intuitive digital experiences.
          </p>
        </div>
        {/* Project-card */}
        <div className='relative mt-7'>
          <Swiper 
                className='projects-swiper'
                grabCursor
                spaceBetween={16}
                slidesPerView={2.15}
                speed={700}
          >
            {projects.map((project)=>(
              <SwiperSlide key={project.id} className='my-2 mx-4'>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    </div>
  )
}

export default Work
