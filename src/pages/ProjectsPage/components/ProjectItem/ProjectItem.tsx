import { Project } from '@/model/project'
import { IoArrowForward, IoShareOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { getStackIcon } from '@/theme'

interface ProjectItemProps {
  project: Project
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/projects/${project.id}`)}
      className='card-clean group flex flex-col h-full overflow-hidden cursor-pointer'
    >
      {/* Banner */}
      <div className='relative h-48 sm:h-52 w-full overflow-hidden bg-base-300 border-b border-base-content/10'>
        <img
          src={project.banner}
          alt={project.name}
          className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
          loading='lazy'
        />
        {project.year && (
          <span className='absolute top-3 right-3 px-2 py-0.5 rounded text-xs font-semibold bg-base-100/90 text-neutral-content border border-base-content/15 backdrop-blur-sm'>
            {project.year}
          </span>
        )}
      </div>

      {/* Content */}
      <div className='p-5 flex flex-col flex-1'>
        {/* Tech Stacks */}
        <div className='flex items-center gap-2 mb-3 text-primary'>
          {project.stacks.slice(0, 4).map((stack) => (
            <span
              key={stack}
              className='p-1 rounded bg-base-300/80 text-primary border border-base-content/10'
              title={stack}
            >
              {getStackIcon(stack, 15)}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className='text-lg font-bold text-neutral-content group-hover:text-primary transition-colors line-clamp-1 mb-2'>
          {project.name}
        </h3>

        {/* Description */}
        <p className='text-sm text-base-content/80 line-clamp-2 mb-5 flex-1 leading-relaxed'>
          {project.shortDescription}
        </p>

        {/* Action Row */}
        <div className='flex items-center justify-between pt-3 border-t border-base-content/10 text-xs font-semibold'>
          <span className='inline-flex items-center gap-1.5 text-primary group-hover:translate-x-0.5 transition-transform'>
            <span>Case Study</span>
            <IoArrowForward size={14} />
          </span>

          {project.path && (
            <a
              href={project.path}
              target='_blank'
              rel='noopener noreferrer'
              onClick={(e) => e.stopPropagation()}
              className='inline-flex items-center gap-1 text-base-content/70 hover:text-primary transition-colors p-1'
              title='Visit live project'
            >
              <span>Live Demo</span>
              <IoShareOutline size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
