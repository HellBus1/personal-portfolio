import { SiLinkedin, SiMedium, SiGithub } from 'react-icons/si'
import { Link } from 'react-router-dom'
import { FaInfoCircle, FaEnvelope } from 'react-icons/fa'
import {
  IoRocketSharp,
  IoCodeSlashSharp,
  IoDocumentTextSharp,
  IoBriefcaseSharp
} from 'react-icons/io5'
import projectsData from '@/data/projects.json'
import articlesData from '@/data/articles.json'

const OverviewSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-section')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const featuredProjectsCount = projectsData.length
  const featuredArticlesCount = articlesData.length

  const stats = [
    { label: 'Projects', value: featuredProjectsCount, icon: IoCodeSlashSharp },
    { label: 'Articles', value: featuredArticlesCount, icon: IoDocumentTextSharp },
    { label: 'Experience', value: '2+ Years', icon: IoBriefcaseSharp }
  ]

  return (
    <section className='min-h-screen flex flex-col justify-center items-center px-8 md:px-12 lg:px-20 mt-8'>
      <div className='flex flex-col justify-center items-center'>
        {/* Avatar */}
        <div className='avatar mb-6 md:mb-8'>
          <div className='w-[180px] md:w-[200px] h-[180px] md:h-[200px] rounded-full ring-2 ring-primary/20 transition-all duration-300 hover:ring-primary/40 hover:ring-4'>
            <img
              alt='Avatar'
              src={'/avatar.jpg'}
              className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
            />
          </div>
        </div>

        {/* Name & Title */}
        <p className='text-lg md:text-xl font-medium mb-3 md:mb-4 text-center text-neutral-content'>
          Hi, I'm Syubban Fakhriya
        </p>
        <h1 className='text-3xl md:text-5xl font-bold text-center text-neutral-content mb-2'>
          Full-Stack Developer
        </h1>
        <h2 className='text-2xl md:text-3xl font-semibold text-center text-primary'>
          Content Writer
        </h2>
      </div>

      {/* Bio */}
      <div className='text-center mt-6 max-w-2xl'>
        <p className='text-base md:text-lg text-neutral-content/80'>
          I'm a passionate developer, specializing in fullstack development. <br /> I have
          experience with Kotlin, Java, and the React ecosystem.
        </p>
      </div>

      {/* Stats */}
      <div className='grid grid-cols-3 gap-6 md:gap-8 mt-10 w-full max-w-2xl'>
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div
              key={index}
              className='flex flex-col items-center p-4 rounded-lg bg-base-200 hover:bg-base-300 transition-all duration-300 hover:scale-105'
            >
              <Icon className='text-primary mb-2' size={32} />
              <span className='text-2xl md:text-3xl font-bold text-primary'>{stat.value}</span>
              <span className='text-sm md:text-base text-neutral-content/70 mt-1'>
                {stat.label}
              </span>
            </div>
          )
        })}
      </div>

      {/* Social Links */}
      <div className='flex flex-row mt-8 justify-center items-center space-x-4 md:space-x-6'>
        <Link
          to={'https://github.com/HellBus1/'}
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-primary transition-colors'
        >
          <SiGithub
            size={24}
            className='text-neutral-content hover:scale-110 transition-transform'
          />
        </Link>
        <div className='border-l h-4'></div>
        <Link
          to={'https://www.linkedin.com/in/syubban/'}
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-primary transition-colors'
        >
          <SiLinkedin
            size={24}
            className='text-neutral-content hover:scale-110 transition-transform'
          />
        </Link>
        <div className='border-l h-4'></div>
        <Link
          to={'https://medium.com/@fakrii/'}
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-primary transition-colors'
        >
          <SiMedium
            size={24}
            className='text-neutral-content hover:scale-110 transition-transform'
          />
        </Link>
      </div>

      {/* CTAs */}
      <div className='flex flex-col sm:flex-row mt-10 md:mt-12 gap-4 w-full max-w-md justify-center items-center'>
        <a
          href='mailto:hello@mattrmost.com'
          className='btn btn-primary btn-md rounded-md text-sm md:text-base w-full sm:w-auto gap-2'
        >
          <IoRocketSharp size={18} />
          Hire Me
        </a>
        <a
          href='mailto:hello@mattrmost.com'
          className='btn btn-outline btn-md text-neutral-content rounded-md text-sm md:text-base w-full sm:w-auto gap-2'
        >
          <FaEnvelope size={16} />
          Contact Me
        </a>
        <button
          className='btn btn-outline btn-md text-neutral-content rounded-md text-sm md:text-base w-full sm:w-auto gap-2'
          onClick={scrollToProjects}
        >
          <FaInfoCircle size={16} />
          Learn More
        </button>
      </div>
    </section>
  )
}

export default OverviewSection
