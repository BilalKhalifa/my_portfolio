import { Calendar, Mail, MapPin, Phone, Sparkles } from 'lucide-react'
import React from 'react'
import ContactInfoCard from './ContactInfoCard'
import SocialMediaCard from './SocialMediaCard'
import { RiGithubFill, RiInstagramLine, RiLinkedinFill } from '@remixicon/react'

const Contact = () => {
  return (
    <div className='h-screen w-full bg-primary px-74 py-45'>
      <h1 className='flex gap-3 text-[10px] tracking-[3px] uppercase text-white/50'>
        <Sparkles size={15} color='#97E6F5'/>Contact Me
      </h1>
      <div className=' mt-5 grid grid-cols-2'>
        {/* Left */}
        <div className='h-full my-auto mx-auto'>
          <p className='text-white text-8xl font-semibold font-hero'>
            Let's Connect & Create
            <span className='bg-linear-to-r from-[#63A8F8] to-[#B897F4] bg-clip-text text-transparent'> Something</span>
            <span className='bg-linear-to-r from-[#63A8F8] to-[#B897F4] bg-clip-text text-transparent'> greate.</span>
          </p>
        </div>
        {/* Right */}
        <div className='mx-auto items-start flex flex-col justify-between h-full w-1/2'>
          <div>
            <ContactInfoCard
                icon={<MapPin size={20}/>}
                title='Location'
                value='Navsari, Gujarat, India'
            />
            <ContactInfoCard
              icon={<Phone size={20} />}
              title='Phone'
              value='+91 93135 61992'
            />
            <ContactInfoCard
              icon={<Mail size={20} />}
              title='Email'
              value='khalifabilal109@gmail.com'
            />
            <ContactInfoCard
              icon={<Calendar size={20} />}
              title='Available For'
              value='Full-time Role, Internship'
            />
          </div>
          <div>
            <h2 className='flex gap-3 items-center justify-start w-full'>
              <span className=' inline-block h-px w-8 bg-white/30'></span>
              <span className='uppercase tracking-[3px] text-white/50 font-nav text-[12px] font-semibold '>Find Me Online</span>
              <span className=' inline-block h-px w-8 bg-white/30'></span>
            </h2>
            <div className='flex gap-3 items-center justify-start'>
              <SocialMediaCard 
                icon={<RiGithubFill  />}
                link='https://github.com/BilalKhalifa'
              />
              <SocialMediaCard 
                icon={<RiInstagramLine />}
                link='https://www.instagram.com/mr.khalifa_4910/'
              />
              <SocialMediaCard 
                icon={<RiLinkedinFill />}
                link='https://www.linkedin.com/in/bilal-khalifa'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
