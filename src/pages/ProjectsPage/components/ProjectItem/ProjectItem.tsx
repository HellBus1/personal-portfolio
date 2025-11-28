import { Project } from '@/model/project'
import { IoCheckmarkCircle, IoShareOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
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

interface ProjectItemProps {
  project: Project
}

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

const ProjectItem = ({ project }: ProjectItemProps) => {
  const navigate = useNavigate()

  return (
    <div
      className='card card-compact w-full rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-primary/50 bg-base-200 group'
      style={{ minHeight: 380, height: '100%' }}
    >
      <figure className='h-48 relative overflow-hidden'>
        <img
          src={project.banner}
          alt={project.name}
          className='rounded-t-lg w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
          loading='lazy'
        />
        {project.year && (
          <span className='absolute top-3 right-3 badge badge-primary badge-sm'>
            {project.year}
          </span>
        )}
      </figure>
      <div className='px-5 py-4 flex flex-col flex-1'>
        <div className='flex flex-row mt-2 mb-3 space-x-3 items-center'>
          {project.stacks.slice(0, 4).map((stack, index) => {
            return (
              <div key={index} className='text-primary'>
                {iconMapper[stack.toLowerCase()]}
              </div>
            )
          })}
        </div>
        <h3 className='text-lg font-semibold text-neutral-content line-clamp-2 mb-2'>
          {project.name}
        </h3>
        <p className='text-base line-clamp-2 text-neutral-content/80 mb-4 flex-1'>
          {project.shortDescription}
        </p>

        {/* CTAs */}
        <div className='flex gap-2 mt-auto'>
          <button
            onClick={() => navigate(`/projects/${project.id}`)}
            className='btn btn-sm btn-primary flex-1 gap-1'
          >
            <IoCheckmarkCircle size={16} />
            Details
          </button>
          <a
            href={project.path}
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

export default ProjectItem
