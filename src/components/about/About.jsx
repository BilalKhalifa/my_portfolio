import { RiBardLine, RiStackLine } from '@remixicon/react'
import { Boxes, GitCommitHorizontal, GraduationCap, Icon, Radio } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { getContributions, getGithubUser } from '../../service'
import './about.css'
import { techStack } from './techstack'

const About = () => {

  const [githubData, setGithubData] = useState(null)
  const [contribution, setContribution] = useState(null)

  useEffect(() => {
  const fetchGithub = async () => {
    try {
      const [projects, contributions] = await Promise.all([
        getGithubUser("BilalKhalifa"),
        getContributions("BilalKhalifa"),
      ]);

      setGithubData(projects);
      setContribution(contributions);
      console.log(projects);
      console.log(contribution);
      
      
    } catch (err) {
      console.log(err);
    }
  };

  fetchGithub();
}, []);

  return (
    <div className='h-full flex flex-col gap-6 w-full bg-(--primary) px-75 py-55'>
      <div 
          className='
                      flex gap-2
                      uppercase font-[Montserrat] text-[0.625rem] text-white/50  
                    '
      >
        <RiBardLine size={15} className='text-[#97E6F5]' /> // About · Command Center
      </div>
      <div>
        <div className='heading w-1/2 text-6xl font-semibold font-[SpaceGrotesk] mt-5'>
          <span className='bg-linear-to-r from-[#f2f6f7] to-[#96dcf2] bg-clip-text text-transparent'>A computer engineer, </span>
          <span className='bg-linear-to-r from-[#80defa] via-[#99e1f5] to-[#b2a2fd] bg-clip-text text-transparent'>building every week.</span>
        </div>
      </div>
      <div className='w-1/2 mt-7 text-lg text-white/50 font-(family-name:--nav-font)'>
        2026 Computer Engineering graduate at GIDC · GTU. Obsessed with frontend craft — React, motion design, and building things people love to use.
      </div>
      {/* Git info Cards */}
      <div id="git-info" className='w-full h-fit mt-20 flex gap-4'>
        {/* Projects card */}
        <div 
            id="projects" 
            className='
                      flex flex-col w-1/3 p-6 
                      backdrop-blur-2xl
                      bg-linear-to-br from-white/20  to-(--transparent-pill)/30
                      rounded-3xl
                      border-2 border-white/10
                      '
        >
          <h4 className='font-(family-name:--nav-font) text-white/50 text-[10px] flex gap-4 items-center uppercase tracking-[2.5px]'>
            <Boxes size={25} className='text-[#97E6F5] bg-white/20 rounded-full p-1'/> Projects
          </h4>
          <p className='text-white mt-5 flex gap-2 items-end'>
            <span 
                  className=' inline-block
                              font-(family-name:--hero-font) text-5xl font-semibold 
                              [text-shadow:0_0_20px_rgba(147,230,245,0.5),0_0_40px_rgba(147,230,245,0.25)]'
            >
              {githubData?.public_repos}+
            </span>
            <span 
                className=' inline-block 
                            font-(family-name:--nav-font) text-xs mb-1 text-white/50'
            >
              Projects
            </span>
          </p>
        </div>
        {/* Activity card */}
        <div 
            id="git-activity"
            className='
                      flex flex-col w-1/3 p-6 
                      backdrop-blur-2xl
                      bg-linear-to-br from-white/20  to-(--transparent-pill)/30
                      rounded-3xl
                      border-2 border-white/10
                      '
        >
          <h4 className='font-(family-name:--nav-font) text-white/50 text-[10px] flex gap-4 items-center uppercase tracking-[2.5px]'>
            <GitCommitHorizontal size={25} className='text-[#97E6F5] bg-white/20 rounded-full p-1'/> Github Contribution
          </h4>
          <p className='text-white mt-5 flex gap-2 items-end'>
            <span 
                  className=' inline-block
                              font-(family-name:--hero-font) text-5xl font-semibold 
                            '
            >
              {contribution}
            </span>
            <span 
                className=' inline-block 
                            font-(family-name:--nav-font) text-xs mb-1 text-white/50'
            >
              Contributions This Year
            </span>
          </p>
        
        </div>
        {/* Status Card */}
        <div 
            id="status"
            className='
                      flex flex-col w-1/3 p-6 
                      backdrop-blur-2xl
                      bg-linear-to-br from-white/20  to-(--transparent-pill)/30
                      rounded-3xl
                      border-2 border-white/10
                      '    
        >
          <h4 className='font-(family-name:--nav-font) text-white/50 text-[10px] flex gap-4 items-center uppercase tracking-[2.5px]'>
            <Radio  size={25} className='text-[#97E6F5] bg-white/20 rounded-full p-1'/> Status
          </h4>
          <p className='flex items-center mt-3 font-(family-name:--hero-font) text-lg text-white'>
            <span className="relative flex items-center justify-center w-3 h-3 mr-3">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#8ee3f7] opacity-75 animate-ping"></span>

                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8ee3f7]"></span>
            </span>
            Open To opportunities 
          </p>
          <p className='font-(family-name:--nav-font) text-xs text-white/50 mt-2'>Internships & frontend roles · Graduating 2026.</p>
        </div>
      </div>
      {/* Education & Tech */}
      <section id="edu-info" className='flex gap-4 w-full '>
        {/* Education */}
        <div 
            className='
                        flex flex-col w-1/2 p-6 
                        backdrop-blur-2xl
                        bg-linear-to-br from-white/20  to-(--transparent-pill)/30
                        rounded-3xl
                        border-2 border-white/10 
                      '
        >
          <h4 className='font-(family-name:--nav-font) text-white/50 text-[10px] flex gap-4 items-center uppercase tracking-[2.5px]'>
            <GraduationCap size={25} className='text-[#97E6F5] bg-white/20 rounded-full p-1'/> Education
          </h4>
          <div className=' flex flex-col mt-3'>
            <span className='font-(family-name:--hero-font) text-[20px] text-white font-medium'>
              B.E. Computer Engineering 
            </span>
            <span className='font-(family-name:--nav-font) text-sm text-[#7DDDFB] mt-1'>
              GIDC Degree Engineering College · GTU · 2022—2026
            </span>
            <span className='font-(family-name:--nav-font) text-xs text-white/50 mt-3'>
              Final year student · IBM SkillBuild Internship · Frontend & React focus.
            </span>
          </div>
        </div>
        {/* Tect Stack */}
        <div
            className='
                        flex flex-col w-1/2 p-6 
                        backdrop-blur-2xl
                        bg-linear-to-br from-white/20  to-(--transparent-pill)/30
                        rounded-3xl
                        border-2 border-white/10 
                      '
        >
           <h4 className='font-(family-name:--nav-font) text-white/50 text-[10px] flex gap-4 items-center uppercase tracking-[2.5px]'>
            <RiStackLine   size={25} className='text-[#97E6F5] bg-white/20 rounded-full p-1'/> Daily Stack
          </h4>
          <div className='flex flex-wrap gap-3 mt-4'>
            {techStack.map((skills)=>{
              const Icon = skills.icon
              return(
                    <div 
                          key = {skills.label}
                          className='
                                      flex gap-2 items-center
                                      w-fit h-fit px-2.5 py-1
                                     text-white 
                                      bg-white/10 border border-white/30 rounded-full'
                    >
                      <Icon size={25} color={skills.color} /><span className='font-(family-name:--nav-font) text-[11px]'>{skills.label}</span>
                    </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About