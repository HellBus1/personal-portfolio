import { Link } from 'react-router-dom'
import { SiLinkedin, SiMedium, SiGithub } from 'react-icons/si'
import { HiOutlineArrowDown, HiOutlineSparkles } from 'react-icons/hi2'
import { IoBriefcaseOutline, IoCodeSlashOutline, IoDocumentTextOutline } from 'react-icons/io5'
import projectsData from '@/data/projects.json'
import articlesData from '@/data/articles.json'

const OverviewSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-section')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const projectCount = projectsData.length
  const articleCount = articlesData.length

  return (
    <section className='pt-28 pb-16 md:pt-36 md:pb-24 w-full max-w-6xl mx-auto px-6 md:px-12'>
      <div className='flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16'>
        {/* Left Column: Narrative, Typography & Actions */}
        <div className='flex-1 flex flex-col items-center lg:items-start text-center lg:text-left'>
          {/* Status badge */}
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-semibold mb-6'>
            <span className='w-2 h-2 rounded-full bg-primary animate-pulse' />
            <span>Available for new projects & collaborations</span>
          </div>

          {/* Headline */}
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-neutral-content tracking-tight leading-[1.15] mb-6'>
            Crafting scalable software &amp; <span className='text-primary'>deliberate</span>{' '}
            digital experiences.
          </h1>

          {/* Concise, non-bloated bio */}
          <p className='text-base sm:text-lg text-base-content/90 max-w-xl leading-relaxed mb-8'>
            Hi, I&apos;m{' '}
            <strong className='text-neutral-content font-semibold'>Syubban Fakhriya</strong> — a
            Software Engineer based in Indonesia. I specialize in Java, Spring Boot, React, and
            Kotlin to build high-performance systems and intuitive applications.
          </p>

          {/* Minimalist Stat Highlights */}
          <div className='grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-lg mb-8'>
            <div className='p-3.5 rounded-xl bg-base-200 border border-base-content/10 flex flex-col items-center lg:items-start'>
              <div className='flex items-center gap-1.5 text-primary mb-1'>
                <IoCodeSlashOutline size={16} />
                <span className='font-bold text-lg text-neutral-content'>{projectCount}+</span>
              </div>
              <span className='text-xs text-base-content/70'>Projects Built</span>
            </div>

            <div className='p-3.5 rounded-xl bg-base-200 border border-base-content/10 flex flex-col items-center lg:items-start'>
              <div className='flex items-center gap-1.5 text-primary mb-1'>
                <IoDocumentTextOutline size={16} />
                <span className='font-bold text-lg text-neutral-content'>{articleCount}+</span>
              </div>
              <span className='text-xs text-base-content/70'>Articles Written</span>
            </div>

            <div className='p-3.5 rounded-xl bg-base-200 border border-base-content/10 flex flex-col items-center lg:items-start'>
              <div className='flex items-center gap-1.5 text-primary mb-1'>
                <IoBriefcaseOutline size={16} />
                <span className='font-bold text-lg text-neutral-content'>2+ Yrs</span>
              </div>
              <span className='text-xs text-base-content/70'>Engineering</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className='flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full'>
            <button onClick={scrollToProjects} className='btn-primary-custom'>
              <span>Explore Projects</span>
              <HiOutlineArrowDown size={16} />
            </button>

            <a href='mailto:hello@mattrmost.com' className='btn-secondary-custom'>
              <HiOutlineSparkles size={16} />
              <span>Get in Touch</span>
            </a>

            {/* Social Links inline */}
            <div className='flex items-center gap-2 pl-2 sm:pl-4 text-base-content/70'>
              <Link
                to='https://github.com/HellBus1'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 rounded-lg hover:bg-base-200 hover:text-primary transition-colors'
                aria-label='GitHub Profile'
              >
                <SiGithub size={18} />
              </Link>
              <Link
                to='https://linkedin.com/in/syubban'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 rounded-lg hover:bg-base-200 hover:text-primary transition-colors'
                aria-label='LinkedIn Profile'
              >
                <SiLinkedin size={18} />
              </Link>
              <Link
                to='https://medium.com/@fakrii'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 rounded-lg hover:bg-base-200 hover:text-primary transition-colors'
                aria-label='Medium Articles'
              >
                <SiMedium size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Circular Avatar with Subtle Ring Glow */}
        <div className='relative flex items-center justify-center flex-shrink-0'>
          <div className='relative group'>
            {/* Ambient subtle glow ring */}
            <div className='absolute -inset-1 rounded-full bg-gradient-to-tr from-primary/30 to-secondary/30 blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-300' />

            <div className='relative w-44 h-44 sm:w-56 sm:h-56 rounded-full overflow-hidden border-2 border-base-content/15 bg-base-200 p-1'>
              <img
                src='/avatar.jpg'
                alt='Syubban Fakhriya'
                className='w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-105'
                loading='eager'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OverviewSection
