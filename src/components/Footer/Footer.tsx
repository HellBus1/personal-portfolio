import { Link } from 'react-router-dom'
import { SiGithub, SiLinkedin, SiMedium } from 'react-icons/si'
import { FaInstagram } from 'react-icons/fa'
import { IoArrowUp } from 'react-icons/io5'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className='w-full bg-base-200 border-t border-base-300'>
      <div className='px-8 md:px-12 lg:px-20 py-12'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 max-w-6xl mx-auto'>
          {/* About Section */}
          <div className='space-y-4'>
            <h3 className='text-lg font-bold text-neutral-content'>Syubban Fakhriya</h3>
            <p className='text-sm text-neutral-content/70 leading-relaxed'>
              Full-Stack Developer & Content Writer passionate about building impactful software and
              sharing knowledge.
            </p>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h3 className='text-lg font-bold text-neutral-content'>Quick Links</h3>
            <nav className='flex flex-col space-y-2'>
              <Link
                to='/'
                className='text-sm text-neutral-content/70 hover:text-primary transition'
              >
                Home
              </Link>
              <Link
                to='/projects'
                className='text-sm text-neutral-content/70 hover:text-primary transition'
              >
                Projects
              </Link>
              <Link
                to='/articles'
                className='text-sm text-neutral-content/70 hover:text-primary transition'
              >
                Articles
              </Link>
              <Link
                to='/about'
                className='text-sm text-neutral-content/70 hover:text-primary transition'
              >
                About
              </Link>
              <Link
                to='/transparency'
                className='text-sm text-neutral-content/70 hover:text-primary transition'
              >
                Transparency
              </Link>
            </nav>
          </div>

          {/* Social Media */}
          <div className='space-y-4'>
            <h3 className='text-lg font-bold text-neutral-content'>Connect</h3>
            <div className='flex flex-col space-y-3'>
              <a
                href='https://github.com/HellBus1'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 text-sm text-neutral-content/70 hover:text-primary transition'
              >
                <SiGithub size={18} />
                <span>GitHub</span>
              </a>
              <a
                href='https://linkedin.com/in/syubban'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 text-sm text-neutral-content/70 hover:text-primary transition'
              >
                <SiLinkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href='https://medium.com/@fakrii'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 text-sm text-neutral-content/70 hover:text-primary transition'
              >
                <SiMedium size={18} />
                <span>Medium</span>
              </a>
              <a
                href='https://instagram.com/mattr.most'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 text-sm text-neutral-content/70 hover:text-primary transition'
              >
                <FaInstagram size={18} />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='divider my-6 max-w-6xl mx-auto'></div>

        {/* Bottom Bar */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-4 max-w-6xl mx-auto'>
          <p className='text-sm text-neutral-content/60 text-center md:text-left'>
            © {currentYear} Syubban Fakhriya. All rights reserved.
          </p>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className='btn btn-circle btn-sm btn-ghost'
            aria-label='Back to top'
          >
            <IoArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
