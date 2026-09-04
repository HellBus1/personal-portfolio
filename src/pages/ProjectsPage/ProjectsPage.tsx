import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import projectsDataRaw from '../../data/projects.json'
import { Project } from '../../model/project'
import RootLayout from '@/components/RootLayout/RootLayout'
import TitleSection from './components/TitleSection/TitleSection'
import ProjectItem from './components/ProjectItem/ProjectItem'
import {
  IoSearchOutline,
  IoCodeSlashOutline,
  IoPhonePortraitOutline,
  IoCalendarOutline,
  IoCloseCircleOutline
} from 'react-icons/io5'

const getYear = (createdAt: { seconds: number }) =>
  new Date(createdAt.seconds * 1000).getFullYear().toString()

const getAllStacks = (projects: Project[]) =>
  Array.from(new Set(projects.flatMap((p) => p.stacks.map((s) => s.toLowerCase()))))

const getAllYears = (projects: Project[]) =>
  Array.from(
    new Set(
      projects
        .map((p) => (p.year ? p.year : p.createdAt ? getYear(p.createdAt) : undefined))
        .filter(Boolean)
    )
  )

const getAllPlatforms = (projects: Project[]) =>
  Array.from(new Set(projects.map((p) => p.platform).filter((p): p is string => Boolean(p))))

const ProjectsPage = () => {
  const [search, setSearch] = useState('')
  const [stack, setStack] = useState('')
  const [platform, setPlatform] = useState('')
  const [year, setYear] = useState('')

  const projects = projectsDataRaw as Project[]

  const stacks = getAllStacks(projects)
  const years = getAllYears(projects)
  const platforms = getAllPlatforms(projects)

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(search.toLowerCase()) ||
        project.shortDescription.toLowerCase().includes(search.toLowerCase())

      const matchesStack = stack ? project.stacks.map((s) => s.toLowerCase()).includes(stack) : true
      const matchesPlatform = platform ? project.platform === platform : true

      const projectYear = project.year
        ? project.year
        : project.createdAt
          ? getYear(project.createdAt)
          : ''

      const matchesYear = year ? projectYear === year : true

      return matchesSearch && matchesStack && matchesPlatform && matchesYear
    })
  }, [search, stack, platform, year, projects])

  const hasActiveFilters = Boolean(search || stack || platform || year)

  const clearFilters = () => {
    setSearch('')
    setStack('')
    setPlatform('')
    setYear('')
  }

  return (
    <RootLayout>
      <div className='w-full max-w-6xl mx-auto px-6 md:px-12 pt-28 pb-20 min-h-[75vh] flex flex-col'>
        {/* Breadcrumb */}
        <nav className='flex items-center gap-2 text-xs text-base-content/60 mb-8'>
          <Link to='/' className='hover:text-primary transition-colors'>
            Home
          </Link>
          <span>/</span>
          <span className='text-neutral-content font-semibold'>Projects</span>
        </nav>

        <TitleSection />

        {/* Filter Controls Bar */}
        <div className='bg-base-200/60 border border-base-content/10 rounded-xl p-3.5 mb-8'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3'>
            {/* Search Input */}
            <div className='relative'>
              <IoSearchOutline
                className='absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50 pointer-events-none'
                size={16}
              />
              <input
                type='text'
                placeholder='Search projects...'
                className='w-full h-10 pl-9 pr-3 rounded-lg bg-base-100 border border-base-content/15 text-sm text-neutral-content placeholder:text-base-content/40 focus:outline-none focus:border-primary transition-colors'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label='Search projects'
              />
            </div>

            {/* Stack Select */}
            <div className='relative'>
              <IoCodeSlashOutline
                className='absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50 pointer-events-none'
                size={16}
              />
              <select
                className='w-full h-10 pl-9 pr-8 rounded-lg bg-base-100 border border-base-content/15 text-sm text-neutral-content focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer'
                value={stack}
                onChange={(e) => setStack(e.target.value)}
                aria-label='Filter by tech stack'
              >
                <option value=''>All Tech</option>
                {stacks.map((s) => (
                  <option key={s} value={s}>
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Platform Select */}
            <div className='relative'>
              <IoPhonePortraitOutline
                className='absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50 pointer-events-none'
                size={16}
              />
              <select
                className='w-full h-10 pl-9 pr-8 rounded-lg bg-base-100 border border-base-content/15 text-sm text-neutral-content focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer'
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                aria-label='Filter by platform'
              >
                <option value=''>All Platforms</option>
                {platforms.map((p) => (
                  <option key={p} value={p}>
                    {p.charAt(0).toUpperCase() + p.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Year Select */}
            <div className='relative'>
              <IoCalendarOutline
                className='absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50 pointer-events-none'
                size={16}
              />
              <select
                className='w-full h-10 pl-9 pr-8 rounded-lg bg-base-100 border border-base-content/15 text-sm text-neutral-content focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer'
                value={year}
                onChange={(e) => setYear(e.target.value)}
                aria-label='Filter by year'
              >
                <option value=''>All Years</option>
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Counter & Reset */}
          <div className='flex items-center justify-between pt-3 mt-3 border-t border-base-content/10 text-xs text-base-content/70'>
            <span>
              Showing <strong className='text-neutral-content'>{filteredProjects.length}</strong>{' '}
              {filteredProjects.length === 1 ? 'project' : 'projects'}
            </span>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className='inline-flex items-center gap-1 text-primary hover:underline font-semibold'
              >
                <IoCloseCircleOutline size={14} />
                <span>Reset filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Project Grid */}
        <div className='flex-1'>
          {filteredProjects.length === 0 ? (
            <div className='card-clean p-12 text-center flex flex-col items-center justify-center gap-3 min-h-[260px]'>
              <IoSearchOutline size={36} className='text-base-content/40' />
              <h3 className='text-base font-bold text-neutral-content'>
                No matching projects found
              </h3>
              <p className='text-xs text-base-content/70 max-w-sm'>
                Try relaxing your search query or removing filter constraints.
              </p>
              {hasActiveFilters && (
                <button onClick={clearFilters} className='btn-secondary-custom text-xs mt-2'>
                  Clear filters
                </button>
              )}
            </div>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {filteredProjects.map((project) => (
                <ProjectItem key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </div>
    </RootLayout>
  )
}

export default ProjectsPage
