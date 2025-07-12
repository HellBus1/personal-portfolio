import { Project } from '@/model/project'
import { IoCheckmarkCircle, IoShareOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

interface ProjectItemProps {
  project: Project
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  const navigate = useNavigate()

  return (
    <div className='card card-compact bg-base-200 shadow hover:shadow-lg transition min-h-[340px]'>
      <figure className='h-48'>
        <img
          src={project.banner}
          alt={project.name}
          className='rounded-t-lg w-full h-full object-cover group-hover:scale-[1.03] transition'
          loading='lazy'
        />
      </figure>
      <div className='card-body flex flex-col gap-2 flex-1'>
        <div className='flex items-center gap-2 mb-1'>
          <span className='text-lg font-semibold text-neutral-content line-clamp-2'>
            {project.name}
          </span>
          {project.year && <span className='badge badge-primary text-xs'>{project.year}</span>}
        </div>
        <p className='text-base line-clamp-2 text-neutral-content/80'>{project.shortDescription}</p>
        <div className='flex flex-wrap gap-2 mt-2'>
          {project.stacks.map((tech) => (
            <span key={tech} className='badge badge-outline text-xs px-2 py-1'>
              {tech}
            </span>
          ))}
        </div>
        <div className='card-actions mt-4 flex gap-2'>
          <button
            className='btn btn-sm btn-primary px-8'
            onClick={() => navigate(`/projects/${project.id}`)}
          >
            <IoCheckmarkCircle />
            Detail
          </button>
          <a
            href={project.path}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-sm btn-outline px-8'
          >
            <IoShareOutline />
            Visit
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
