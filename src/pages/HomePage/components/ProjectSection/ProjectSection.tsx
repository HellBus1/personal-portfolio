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
import { useNavigate } from 'react-router-dom'
import { IoCheckmarkCircle, IoShareOutline } from 'react-icons/io5'
import projectsDataRaw from '../../../../data/projects.json'
import { Project } from '@/model/project'
import { RouteName } from '@/constants/RouteName'
import { useEffect, useState } from 'react'

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

const getProjectCount = () => (window.innerWidth < 640 ? 2 : 3)

const ProjectSection = () => {
  const navigate = useNavigate()
  const [projectCount, setProjectCount] = useState(getProjectCount())

  useEffect(() => {
    const handleResize = () => setProjectCount(getProjectCount())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const displayedProjects = (projectsDataRaw as Project[])
    .filter((a) => a.featured)
    .slice(0, projectCount)

  return (
    <section
      className='flex flex-col items-center px-8 md:px-12 lg:px-20 mt-16 mb-32'
      id='projects-section'
    >
      <div className='w-full max-w-6xl'>
        <h2 className='text-3xl md:text-4xl font-bold text-neutral-content text-center'>
          Featured <span className='text-primary'>Projects</span>
        </h2>
        <p className='text-base md:text-lg mt-4 text-center text-neutral-content/80'>
          Some of the most innovative projects I've worked on.
        </p>
      </div>

      <div className='w-full max-w-6xl mt-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {displayedProjects.map((item, index) => {
            if (item.featured) {
              return (
                <div
                  key={`${item.id}-${index}`}
                  className='card card-compact w-full rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-primary/50 bg-base-200 group'
                  style={{ minHeight: 380, height: '100%' }}
                >
                  <figure className='h-48 relative overflow-hidden'>
                    <img
                      alt={item.name}
                      src={item.banner}
                      className='rounded-t-lg w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                    />
                    {item.year && (
                      <span className='absolute top-3 right-3 badge badge-primary badge-sm'>
                        {item.year}
                      </span>
                    )}
                  </figure>
                  <div className='px-5 py-4 flex flex-col flex-1'>
                    <div className='flex flex-row mt-2 mb-3 space-x-3 items-center'>
                      {item.stacks.slice(0, 4).map((stack, index) => {
                        return (
                          <div key={index} className='text-primary'>
                            {iconMapper[stack]}
                          </div>
                        )
                      })}
                    </div>
                    <h3 className='text-lg font-semibold text-neutral-content line-clamp-2 mb-2'>
                      {item.name}
                    </h3>
                    <p className='text-base line-clamp-2 text-neutral-content/80 mb-4 flex-1'>
                      {item.shortDescription}
                    </p>

                    {/* CTAs */}
                    <div className='flex gap-2 mt-auto'>
                      <button
                        onClick={() => navigate(`/projects/${item.id}`)}
                        className='btn btn-sm btn-primary flex-1 gap-1'
                      >
                        <IoCheckmarkCircle size={16} />
                        Details
                      </button>
                      <a
                        href={item.path}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn btn-sm btn-outline flex-1 gap-1'
                        onClick={(e) => e.stopPropagation()}
                      >
                        <IoShareOutline size={16} />
                        Visit
                      </a>
                    </div>
                  </div>
                </div>
              )
            }
          })}
        </div>
      </div>

      <div className='mt-12'>
        <button
          className='btn btn-outline text-neutral-content px-8 text-base md:text-lg capitalize hover:scale-105 transition-transform'
          onClick={() => navigate(RouteName.PROJECTS)}
        >
          {'See more projects'}
        </button>
      </div>
    </section>
  )
}

export default ProjectSection
