import { SiLinkedin, SiMedium, SiGithub } from 'react-icons/si'
import { Link } from 'react-router-dom'

const OverviewSection = () => {
  return (
    <section className='min-h-screen flex flex-col justify-center items-center px-4'>
      <div className='flex flex-col justify-center items-center'>
        <div className='avatar mb-8'>
          <div className='w-32 md:w-56 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
            <img
              alt='Avatar'
              src={'/avatar.jpg'}
              sizes={'(max-width: 768px) 100vw'}
              style={{
                objectFit: 'cover'
              }}
              className='rounded-full'
            />
          </div>
        </div>
        <p className='text-neutral-content text-lg md:text-xl font-medium mb-3 text-center'>
          Hello, I&apos;m Syubban Fakhriya
        </p>
        <p className='text-neutral-content text-xl md:text-3xl lg:text-4xl font-bold text-center'>
          IT Enthusiast & Content Writer
        </p>
      </div>

      <div className='text-center mt-4 px-8 md:px-12 lg:px-20'>
        <p className='text-sm sm:text-base md:text-lg'>
          I am a developer focused on fullstack technology based in Indonesia. <br /> Experienced
          with Kotlin, Flutter, Java, and the React ecosystem.
        </p>
      </div>

      <div className='flex flex-row mt-6 justify-center items-center space-x-6'>
        <Link to={'https://github.com/HellBus1/'}>
          <SiGithub size={20} />
        </Link>
        <div className='border-l h-3'></div>
        <Link to={'https://www.linkedin.com/in/syubban/'}>
          <SiLinkedin size={20} />
        </Link>
        <div className='border-l h-3'></div>
        <Link to={'https://medium.com/@syubbanfakhriya/'}>
          <SiMedium size={20} />
        </Link>
      </div>

      <button className='btn btn-md btn-outline text-neutral-content rounded-full mt-8 text-xs md:text-base'>
        Download Resume
      </button>
    </section>
  )
}

export default OverviewSection
