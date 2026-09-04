import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import RootLayout from '@/components/RootLayout/RootLayout'
import { IoArrowBackOutline, IoShareOutline } from 'react-icons/io5'
import projectsData from '@/data/projects.json'
import { getStackIcon } from '@/theme'

// Eagerly import all project MDX modules so they are available synchronously during SSR
const projectModules = import.meta.glob<{ default: React.ComponentType }>(
  '../../content/projects/*.mdx',
  { eager: true }
)

const ProjectDetailPage = () => {
  const { projectId } = useParams<{ projectId: string }>()
  const navigate = useNavigate()

  const project = projectsData.find((p) => p.id === projectId) || null

  useEffect(() => {
    if (!project) {
      navigate('/projects')
    }
  }, [project, navigate])

  const MDXContent = projectId
    ? projectModules[`../../content/projects/${projectId}.mdx`]?.default || null
    : null

  if (!project) {
    return (
      <RootLayout>
        <div className='w-full max-w-4xl mx-auto px-6 md:px-12 py-32 text-center'>
          <div className='inline-block w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin mb-3' />
          <p className='text-xs text-base-content/70'>Loading project narrative...</p>
        </div>
      </RootLayout>
    )
  }

  return (
    <RootLayout>
      <div className='w-full max-w-4xl mx-auto px-6 md:px-12 pt-28 pb-20'>
        {/* Breadcrumbs & Navigation */}
        <div className='flex items-center justify-between mb-8'>
          <nav className='flex items-center gap-2 text-xs text-base-content/60'>
            <Link to='/' className='hover:text-primary transition-colors'>
              Home
            </Link>
            <span>/</span>
            <Link to='/projects' className='hover:text-primary transition-colors'>
              Projects
            </Link>
            <span>/</span>
            <span className='text-neutral-content font-semibold truncate max-w-[180px]'>
              {project.name}
            </span>
          </nav>

          <button
            onClick={() => navigate('/projects')}
            className='inline-flex items-center gap-1.5 text-xs text-base-content/70 hover:text-primary transition-colors font-medium'
          >
            <IoArrowBackOutline size={15} />
            <span>Back to archive</span>
          </button>
        </div>

        {/* Hero Section */}
        <div className='mb-10'>
          <div className='flex flex-wrap items-center gap-3 mb-3'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold font-display text-neutral-content tracking-tight'>
              {project.name}
            </h1>
            {project.year && (
              <span className='px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20'>
                {project.year}
              </span>
            )}
          </div>

          <p className='text-base sm:text-lg text-base-content/90 mb-6 leading-relaxed'>
            {project.shortDescription}
          </p>

          {/* Tech Stack Pills */}
          <div className='flex flex-wrap gap-2 mb-8'>
            {project.stacks.map((tech) => (
              <span key={tech} className='tag-pill'>
                <span className='text-primary'>{getStackIcon(tech, 14)}</span>
                <span>{tech}</span>
              </span>
            ))}
          </div>

          {/* Banner Image */}
          <figure className='rounded-xl overflow-hidden border border-base-content/10 mb-8 bg-base-300'>
            <img
              src={project.banner}
              alt={project.name}
              className='w-full h-auto object-cover'
              loading='eager'
            />
          </figure>

          {/* Action Links */}
          <div className='flex flex-wrap items-center gap-3'>
            {project.project_link && (
              <a
                href={project.project_link}
                target='_blank'
                rel='noopener noreferrer'
                className='btn-primary-custom'
              >
                <IoShareOutline size={16} />
                <span>Source Repository</span>
              </a>
            )}

            {project.path && project.path !== project.project_link && (
              <a
                href={project.path}
                target='_blank'
                rel='noopener noreferrer'
                className='btn-secondary-custom'
              >
                <IoShareOutline size={16} />
                <span>Live Project / Store</span>
              </a>
            )}
          </div>
        </div>

        {/* MDX Article / Story Content */}
        <div className='border-t border-base-content/10 pt-10 prose'>
          {MDXContent ? (
            <MDXContent />
          ) : (
            <div className='card-clean p-8 text-center'>
              <p className='text-xs sm:text-sm text-base-content/70'>
                Detailed case study coming soon. Explore the live build using the links above.
              </p>
            </div>
          )}
        </div>
      </div>
    </RootLayout>
  )
}

export default ProjectDetailPage
