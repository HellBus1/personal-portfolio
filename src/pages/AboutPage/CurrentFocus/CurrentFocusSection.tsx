import { FaMedium, FaLinkedin } from 'react-icons/fa'

const CurrentFocusSection = () => {
  return (
    <section className='space-y-8 mb-16'>
      <h2 className='text-2xl md:text-3xl font-bold text-neutral-content'>Current Focus</h2>
      <div className='grid gap-4 md:gap-6'>
        <div className='group p-4 md:p-6 bg-base-200 rounded-lg transition-all hover:bg-base-200/80'>
          <div className='flex items-center gap-3 mb-3'>
            <FaMedium size={20} className='text-primary' />
            <h3 className='font-semibold text-lg'>Writing & Sharing Knowledge</h3>
          </div>
          <p className='text-sm md:text-base text-neutral-content/80 mb-4'>
            Documenting my journey and insights in software development and personal growth.
          </p>
          <a
            href='https://medium.com/@syubbanfakhriya'
            target='_blank'
            rel='noopener noreferrer'
            className='text-sm md:text-base text-primary hover:underline inline-flex items-center gap-2'
          >
            Read my articles →
          </a>
        </div>

        <div className='group p-4 md:p-6 bg-base-200 rounded-lg transition-all hover:bg-base-200/80'>
          <div className='flex items-center gap-3 mb-3'>
            <FaLinkedin size={20} className='text-primary' />
            <h3 className='font-semibold text-lg'>Professional Work</h3>
          </div>
          <p className='text-sm md:text-base text-neutral-content/80 mb-4'>
            Currently at PT. SMBC Indonesia is building, maintaining, and developing digital payment
            services. Enabling seamless digital experiences for the business channel.
          </p>
          <a
            href='https://www.linkedin.com/in/syubban/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-sm md:text-base text-primary hover:underline inline-flex items-center gap-2'
          >
            View my profile →
          </a>
        </div>
      </div>
    </section>
  )
}

export default CurrentFocusSection
