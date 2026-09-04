import { useNavigate } from 'react-router-dom'
import { IoArrowForward } from 'react-icons/io5'
import projectsDataRaw from '../../../../data/projects.json'
import { Project } from '@/model/project'
import { RouteName } from '@/constants/RouteName'
import ProjectItem from '@/pages/ProjectsPage/components/ProjectItem/ProjectItem'

const ProjectSection = () => {
  const navigate = useNavigate()

  const displayedProjects = (projectsDataRaw as Project[]).filter((a) => a.featured).slice(0, 3)

  return (
    <section
      className='w-full max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 border-t border-base-content/10'
      id='projects-section'
    >
      {/* Section Header */}
      <div className='flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10'>
        <div>
          <span className='text-xs font-semibold tracking-wider text-primary uppercase mb-2 block'>
            Selected Work
          </span>
          <h2 className='text-3xl sm:text-4xl font-bold font-display text-neutral-content tracking-tight'>
            Featured Projects
          </h2>
        </div>

        <button
          onClick={() => navigate(RouteName.PROJECTS)}
          className='inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-focus transition-colors group'
        >
          <span>View all {projectsDataRaw.length} projects</span>
          <IoArrowForward size={16} className='group-hover:translate-x-1 transition-transform' />
        </button>
      </div>

      {/* Projects Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {displayedProjects.map((item) => (
          <ProjectItem key={item.id} project={item} />
        ))}
      </div>
    </section>
  )
}

export default ProjectSection
