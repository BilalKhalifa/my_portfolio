import Tilt from 'react-parallax-tilt';

const ProjectCard = ({ project }) => {
  return (
    <Tilt
         tiltReverse={true}
         tiltMaxAngleX={4}
         tiltMaxAngleY={4}
         glareEnable={true}
         glareMaxOpacity={0.45}
         perspective={500}
         scale={1.02}
    >
        <article className='overflow-hidden rounded-3xl border border-white/50 bg-blue-950/30 backdrop-blur-lg'>
            {/* Image */}
            <div className='relative h-80 overflow-hidden rounded-t-3xl'>
                <img 
                    src={project.image}
                    alt={project.title}
                    className={`
                                h-full w-full
                                transition-transform duration-300
                                border-b border-white/30
                                bg-cyan-950/20
                                ${
                                    project.imageFit === "contain"
                                    ? 'object-contain p-8'
                                    : 'object-cover'
                                }
                        `}
                />
            </div>

            {/* Content */}
            <div className='p-7'>
                <h4 className='text-[10px] tracking-[2.2px] text-[#97E6F5] font-(family-name:--nav-font)'>{project.category}</h4>
                <h2 className='mt-2 text-2xl font-(family-name:--hero-font) font-medium text-white'>{project.title}</h2>
                <p className='mt-3 text-sm font-(family-name:--nav-font) text-white/50'>{project.description}</p>

                {/* Tech Stack */}
                <ul className='mt-5 flex flex-wrap gap-2'>
                    {project.techStack.map((tech)=>(
                        <li key={tech} className='h-fit w-fit bg-white/3 px-3 py-1 text-white/50 text-[10px] font-(family-name:--nav-font) border border-white/30 rounded-full'>
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    </Tilt>
  )
}

export default ProjectCard