import React from 'react'

const ContactInfoCard = ({ icon, title, value }) => {
  return (
    <div className='flex gap-5 items-center text-white font-nav mb-10'>
        <div className='bg-primary/5 border border-white/20 rounded-xl p-4'>
            {icon}
        </div>
        <div className='flex flex-col gap-2 '>
            <span className='text-white'>{title}</span>
            <span className='text-blue-300'>{value}</span>
        </div>
    </div>
  )
}

export default ContactInfoCard