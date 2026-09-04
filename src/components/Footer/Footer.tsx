import { SiGithub, SiLinkedin, SiMedium } from 'react-icons/si'
import { FaInstagram } from 'react-icons/fa'
import { IoArrowUp } from 'react-icons/io5'
import packageJson from '../../../package.json'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className='w-full border-t border-base-content/10 bg-base-100/50 py-10 mt-auto'>
      <div className='w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6'>
        {/* Left: Identity & Socials */}
        <div className='flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left'>
          <div>
            <span className='font-display text-lg font-bold text-neutral-content tracking-tight'>
              Syubban Fakhriya
            </span>
            <p className='text-xs text-base-content/70 mt-0.5'>
              Software Engineer & Content Writer
            </p>
          </div>

          <div className='hidden sm:block h-4 w-px bg-base-content/15 mx-2' />

          {/* Social Icons */}
          <div className='flex items-center gap-3 text-base-content/80'>
            <a
              href='https://github.com/HellBus1'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-primary transition-colors p-1.5 rounded-md hover:bg-base-200'
              aria-label='GitHub profile'
            >
              <SiGithub size={16} />
            </a>
            <a
              href='https://linkedin.com/in/syubban'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-primary transition-colors p-1.5 rounded-md hover:bg-base-200'
              aria-label='LinkedIn profile'
            >
              <SiLinkedin size={16} />
            </a>
            <a
              href='https://medium.com/@fakrii'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-primary transition-colors p-1.5 rounded-md hover:bg-base-200'
              aria-label='Medium publications'
            >
              <SiMedium size={16} />
            </a>
            <a
              href='https://instagram.com/mattr.most'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-primary transition-colors p-1.5 rounded-md hover:bg-base-200'
              aria-label='Instagram profile'
            >
              <FaInstagram size={16} />
            </a>
          </div>
        </div>

        {/* Right: Copyright, Version, Back to top */}
        <div className='flex items-center gap-4 text-xs text-base-content/60'>
          <span>© {currentYear} Syubban</span>
          <span className='px-2 py-0.5 rounded text-[11px] bg-base-200 border border-base-content/10 font-mono'>
            v{packageJson.version}
          </span>
          <button
            onClick={scrollToTop}
            className='flex items-center justify-center w-8 h-8 rounded-lg border border-base-content/10 bg-base-200/50 hover:bg-base-200 hover:text-primary transition-colors'
            aria-label='Back to top'
            title='Scroll to top'
          >
            <IoArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
