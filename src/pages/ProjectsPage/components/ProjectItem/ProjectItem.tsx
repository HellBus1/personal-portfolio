import { Project } from '@/model/project'
import { useNavigate } from 'react-router-dom'

interface ProjectItemProps {
  project: Project
}

const ProjectItem = (props: ProjectItemProps) => {
  const { project } = props
  const navigate = useNavigate()

  return (
    <div
      key={project.id}
      className='bg-base-200 rounded-lg shadow p-0 hover:shadow-lg transition flex flex-col group min-h-[340px]'
    >
      <img
        src={project.banner}
        alt={project.name}
        className='rounded-t-lg h-48 object-cover w-full group-hover:scale-[1.03] transition'
        loading='lazy'
      />
      <div className='p-5 flex flex-col gap-2 flex-1'>
        <div className='flex items-center gap-2 mb-1'>
          <span className='font-semibold text-lg'>{project.name}</span>
        </div>
        <p className='text-neutral-content/80 text-sm line-clamp-3'>{project.shortDescription}</p>
        <div className='flex flex-wrap gap-2 mt-2'>
          {project.stacks.map((tech) => (
            <span key={tech} className='badge badge-outline text-xs px-2 py-1'>
              {tech}
            </span>
          ))}
          <span className='badge badge-ghost text-xs px-2 py-1'>{project.year}</span>
        </div>
        <div className='flex gap-2 mt-4'>
          <button
            className='btn btn-sm btn-primary'
            onClick={() => navigate(`/projects/${project.id}`)}
          >
            Detail
          </button>
          <a
            href={project.path}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-sm btn-outline'
          >
            Visit
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
