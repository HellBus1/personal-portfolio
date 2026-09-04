import { IoDownloadOutline } from 'react-icons/io5'

const OverviewSection = () => {
  return (
    <section className='flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10'>
      <div className='flex-1 text-center md:text-left'>
        <span className='text-xs font-semibold tracking-wider text-primary uppercase mb-2 block'>
          About Me
        </span>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold font-display text-neutral-content tracking-tight mb-4'>
          Hi, I&apos;m <span className='text-primary'>Syubban Fakhriya</span>
        </h1>

        <div className='text-sm sm:text-base text-base-content/90 space-y-3 leading-relaxed mb-6'>
          <p>
            I am a Full-Stack Software Engineer currently building reliable financial payment
            platforms at PT. SMBC Indonesia. My core focus is architecting scalable backend
            microservices and responsive, accessible client interfaces.
          </p>
          <p>
            I believe that software should be purposeful, readable, and built to stand the test of
            time. Outside of work, I write technical articles and build open-source tools to solve
            daily productivity challenges.
          </p>
        </div>

        {/* Resume Download */}
        <div className='flex items-center justify-center md:justify-start'>
          <a
            href='/resume.pdf'
            download='Syubban_Fakhriya_Resume.pdf'
            className='btn-primary-custom'
            target='_blank'
            rel='noopener noreferrer'
          >
            <IoDownloadOutline size={18} />
            <span>Download Resume</span>
          </a>
        </div>
      </div>

      {/* Avatar */}
      <div className='relative flex-shrink-0'>
        <div className='relative group'>
          <div className='absolute -inset-1 rounded-full bg-gradient-to-tr from-primary/30 to-secondary/30 blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300' />
          <div className='relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-base-content/15 bg-base-200 p-1'>
            <img
              src='/avatar.jpg'
              alt='Syubban Fakhriya'
              className='w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-105'
              loading='eager'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OverviewSection
