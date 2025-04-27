import { useState } from 'react'
import { FaJava } from 'react-icons/fa'
import {
  SiAndroidstudio,
  SiBootstrap,
  SiDart,
  SiFlutter,
  SiKotlin,
  SiLaravel,
  SiPhp,
  SiSpring,
  SiSpringboot,
  SiTypescript,
  SiTailwindcss,
  SiDaisyui,
  SiReact
} from 'react-icons/si'
import { Link } from 'react-router-dom'
import { projectsData } from './projectData'

const iconMapper: Record<string, JSX.Element> = {
  flutter: <SiFlutter size={20} />,
  laravel: <SiLaravel size={20} />,
  kotlin: <SiKotlin size={20} />,
  'android studio': <SiAndroidstudio size={20} />,
  bootstrap: <SiBootstrap size={20} />,
  php: <SiPhp size={20} />,
  dart: <SiDart size={20} />,
  spring: <SiSpring size={20} />,
  springboot: <SiSpringboot size={20} />,
  typescript: <SiTypescript size={20} />,
  tailwindcss: <SiTailwindcss size={20} />,
  daisyui: <SiDaisyui size={20} />,
  react: <SiReact size={20} />,
  java: <FaJava size={20} />
}

const ProjectSection = () => {
  const [showMore, setShowMore] = useState(false)

  const displayedProjects = showMore ? projectsData : projectsData.slice(0, 3)

  return (
    <section
      className='flex flex-col items-center px-8 md:px-12 lg:px-20 mt-8 mb-32'
      id='projects-section'
    >
      <div className='w-full max-w-6xl'>
        <p className='text-neutral-content text-2xl md:text-3xl lg:text-4xl font-bold text-center'>
          Featured <span className='text-primary'>Projects</span>
        </p>
        <p className='text-sm sm:text-base md:text-lg mt-3 text-center'>
          Some of the most innovative projects I've worked on.
        </p>
      </div>

      <div className='w-full max-w-6xl mt-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {displayedProjects.map((item, index) => {
            return (
              <Link
                to={item.path}
                key={`${item.id}-${index}`}
                target='_blank'
                rel='noopener noreferrer'
                className='card card-compact w-full h-80 rounded-lg shadow-lg'
              >
                <figure className='h-48'>
                  <img
                    alt={item.name}
                    src={item.banner}
                    className='rounded-t-lg w-full h-full border object-cover'
                  />
                </figure>
                <div className='px-4 py-2'>
                  <div className='text-base flex flex-row mt-4 mb-2 space-x-2 items-center'>
                    {item.stacks.map((stack, index) => {
                      return <div key={index}>{iconMapper[stack]}</div>
                    })}
                  </div>
                  <div className='text-sm sm:text-base md:text-lg line-clamp-2 text-neutral-content font-bold overflow-hidden text-ellipsis mt-4'>
                    {item.name}
                  </div>
                  <div className='text-sm sm:text-base md:text-lg line-clamp-2 overflow-hidden text-ellipsis mt-2'>
                    {item.shortDescription}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {projectsData.length > 3 && (
        <div className='mt-8'>
          <button
            className='btn btn-outline text-neutral-content w-52 capitalize'
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Show less' : 'See more projects'}
          </button>
        </div>
      )}
    </section>
  )
}

export default ProjectSection
