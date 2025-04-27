import { SiLinkedin, SiMedium, SiGithub } from 'react-icons/si'
import { Link } from 'react-router-dom'
import { FaInfoCircle } from 'react-icons/fa'

const OverviewSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-section')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className='min-h-screen flex flex-col justify-center items-center px-8 md:px-12 lg:px-2 mt-8'>
      <div className='flex flex-col justify-center items-center'>
        <div className='avatar mb-6 md:mb-8'>
          <div className='w-[180px] md:w-[200px] h-[180px] md:h-[200px] rounded-full ring-2 ring-primary/20 transition-all duration-300 hover:ring-primary/40'>
            <img
              alt='Avatar'
              src={'/avatar.jpg'}
              className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
            />
          </div>
        </div>
        <p className='text-lg md:text-xl font-medium mb-3 md:mb-4 text-center text-neutral-content'>
          Hi, I'm Syubban Fakhriya
        </p>
        <h1 className='text-3xl md:text-4xl font-bold text-center text-neutral-content'>
          IT Enthusiast & Content Writer
        </h1>
      </div>

      <div className='text-center mt-6 max-w-2xl'>
        <p className='text-base md:text-lg text-neutral-content/80'>
          I'm a passionate developer from Indonesia, specializing in fullstack development. <br /> I
          have experience with Kotlin, Flutter, Java, and the React ecosystem.
        </p>
      </div>

      <div className='flex flex-row mt-8 justify-center items-center space-x-4 md:space-x-6'>
        <Link to={'https://github.com/HellBus1/'} target='_blank' rel='noopener noreferrer'>
          <SiGithub size={20} className='text-neutral-content' />
        </Link>
        <div className='border-l h-4'></div>
        <Link to={'https://www.linkedin.com/in/syubban/'} target='_blank' rel='noopener noreferrer'>
          <SiLinkedin size={20} className='text-neutral-content' />
        </Link>
        <div className='border-l h-4'></div>
        <Link to={'https://medium.com/@syubbanfakhriya/'} target='_blank' rel='noopener noreferrer'>
          <SiMedium size={20} className='text-neutral-content' />
        </Link>
      </div>

      <div className='flex flex-row mt-8 md:mt-10 space-x-4 md:space-x-5'>
        <button className='btn btn-md btn-outline text-neutral-content rounded-md text-sm md:text-base'>
          Download Resume
        </button>
        <button
          className='btn btn-md btn-outline text-neutral-content rounded-md text-sm md:text-base'
          onClick={scrollToProjects}
        >
          <FaInfoCircle className='mr-2' size={16} />
          <span>Learn More</span>
        </button>
      </div>
    </section>
  )
}

export default OverviewSection
