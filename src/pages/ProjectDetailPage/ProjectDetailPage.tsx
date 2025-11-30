import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import RootLayout from '@/components/RootLayout/RootLayout'
import { IoArrowBack, IoShareOutline } from 'react-icons/io5'
import projectsData from '@/data/projects.json'
import { Project } from '@/model/project'

const ProjectDetailPage = () => {
  const { projectId } = useParams<{ projectId: string }>()
  const navigate = useNavigate()
  const [MDXContent, setMDXContent] = useState<React.ComponentType | null>(null)
  const [project, setProject] = useState<Project | null>(null)

  useEffect(() => {
    const loadProject = async () => {
      const foundProject = projectsData.find((p) => p.id === projectId)
      if (!foundProject) {
        navigate('/projects')
        return
      }
      setProject(foundProject)

      // Dynamically import MDX content
      try {
        const mdxModule = await import(`../../content/projects/${projectId}.mdx`)
        setMDXContent(() => mdxModule.default)
      } catch (error) {
        console.error('Failed to load project content:', error)
      }
    }

    loadProject()
  }, [projectId, navigate])

  if (!project) {
    return (
      <RootLayout>
        <div className='container max-w-4xl mx-auto px-8 md:px-12 lg:px-20 py-24'>
          <div className='text-center'>Loading...</div>
        </div>
      </RootLayout>
    )
  }

  return (
    <RootLayout>
      <div className='container max-w-4xl mx-auto px-8 md:px-12 lg:px-20 pb-16 pt-24'>
        {/* Breadcrumbs */}
        <div className='text-sm mb-8'>
          <div className='breadcrumbs'>
            <ul>
              <li>
                <Link to='/' className='link link-hover'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/projects' className='link link-hover'>
                  Projects
                </Link>
              </li>
              <li>
                <span className='font-semibold'>{project.name}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Back Button */}
        <button onClick={() => navigate('/projects')} className='btn btn-ghost btn-sm mb-6'>
          <IoArrowBack size={20} />
          Back to Projects
        </button>

        {/* Hero Section */}
        <div className='mb-8'>
          <div className='flex items-center gap-3 mb-4'>
            <h1 className='text-4xl font-bold'>{project.name}</h1>
            {project.year && <span className='badge badge-primary'>{project.year}</span>}
          </div>
          <p className='text-xl text-neutral-content/80 mb-6'>{project.shortDescription}</p>

          {/* Tech Stack */}
          <div className='flex flex-wrap gap-2 mb-6'>
            {project.stacks.map((tech) => (
              <span key={tech} className='badge badge-outline'>
                {tech}
              </span>
            ))}
          </div>

          {/* Banner Image */}
          <figure className='rounded-lg overflow-hidden mb-6'>
            <img
              src={project.banner}
              alt={project.name}
              className='w-full h-auto object-cover'
              loading='eager'
            />
          </figure>

          {/* Action Buttons */}
          <div className='flex gap-4'>
            <a
              href={project.project_link}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-primary'
            >
              <IoShareOutline />
              Visit Project
            </a>
          </div>
        </div>

        {/* MDX Content */}
        <div className='prose prose-lg max-w-none'>
          {MDXContent ? (
            <MDXContent />
          ) : (
            <div className='text-center py-12'>
              <p className='text-neutral-content/60'>
                Detailed project story coming soon. Check out the live project using the button
                above!
              </p>
            </div>
          )}
        </div>
      </div>
    </RootLayout>
  )
}

export default ProjectDetailPage
