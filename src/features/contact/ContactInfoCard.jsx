import { Copy, ExternalLink } from "lucide-react"

const ContactInfoCard = ({ icon, title, value, onClick }) => {
  return (
    <div className={`flex gap-5 items-center text-white font-nav mb-10 transition-all duration-200
                      ${onClick? 'cursor-pointer group hover:opacity-90' : ''}
                    `}
          onClick={onClick}
    >
        <div className='bg-primary/5 border border-white/20 rounded-xl p-4 group-hover:border-white/40 transition-colors duration-200'>
            {icon}
        </div>
        <div className='flex flex-col gap-2 '>
            <span className='text-white'>{title}</span>
            <div className="flex gap-3 items-center">
              <span className='text-blue-300'>{value}</span>
              {onClick && title === 'Phone' && (
                  <Copy size={13} className='text-white/30 group-hover:text-white/80 transition-colors duration-200' />
                )}
              {onClick && title === 'Email' && (
                <ExternalLink size={13} className='text-white/30 group-hover:text-white/80 transition-colors duration-200' />
              )}
            </div>
        </div>
    </div>
  )
}

export default ContactInfoCard