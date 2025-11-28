import { useState, useMemo } from 'react'
import { useLocation, Link } from 'react-router-dom'
import projectsDataRaw from '../../data/projects.json'
import { Project } from '../../model/project'
import RootLayout from '@/components/RootLayout/RootLayout'
import TitleSection from './components/TitleSection/TitleSection'
import ProjectItem from './components/ProjectItem/ProjectItem'
import {
  IoSearchSharp,
  IoCodeSlashSharp,
  IoPhonePortraitSharp,
  IoCalendarSharp,
  IoCloseCircle
} from 'react-icons/io5'

const getYear = (createdAt: { seconds: number }) =>
  new Date(createdAt.seconds * 1000).getFullYear().toString()

const getAllStacks = (projects: Project[]) =>
  Array.from(new Set(projects.flatMap((p) => p.stacks.map((s) => s.toLowerCase()))))

const getAllYears = (projects: Project[]) =>
  Array.from(
    new Set(
      projects
        .map((p) =>
          // Prefer explicit year field if present, else fallback to createdAt
          p.year ? p.year : p.createdAt ? getYear(p.createdAt) : undefined
        )
        .filter(Boolean)
    )
  )

const getAllPlatforms = (projects: Project[]) =>
  Array.from(new Set(projects.map((p) => p.platform).filter(Boolean)))

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

      // Prefer explicit year field if present, else fallback to createdAt
      const projectYear = project.year
        ? project.year
        : project.createdAt
          ? getYear(project.createdAt)
          : ''

      const matchesYear = year ? projectYear === year : true

      return matchesSearch && matchesStack && matchesPlatform && matchesYear
    })
  }, [search, stack, platform, year, projects])

  const hasActiveFilters = search || stack || platform || year

  const clearFilters = () => {
    setSearch('')
    setStack('')
    setPlatform('')
    setYear('')
  }

  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  return (
    <RootLayout>
      <div className='w-full max-w-6xl mx-auto px-8 md:px-12 lg:px-20 pb-16 pt-24 min-h-[70vh] flex flex-col'>
        <div className='text-sm mb-12'>
          <div className='breadcrumbs'>
            <ul>
              <li>
                <Link to='/' className='link link-hover'>
                  Home
                </Link>
              </li>
              {pathnames.map((value, idx) => {
                const to = '/' + pathnames.slice(0, idx + 1).join('/')
                const isLast = idx === pathnames.length - 1
                return (
                  <li key={to}>
                    {isLast ? (
                      <span className='font-semibold'>
                        {value.charAt(0).toUpperCase() + value.slice(1)}
                      </span>
                    ) : (
                      <Link to={to} className='link link-hover'>
                        {value.charAt(0).toUpperCase() + value.slice(1)}
                      </Link>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <TitleSection />

        {/* Filters */}
        <div className='flex flex-col gap-4 mb-6 w-full'>
          <div className='flex flex-col md:flex-row md:items-end gap-4'>
            {/* Search */}
            <div className='relative w-full md:flex-1'>
              <IoSearchSharp
                className='absolute left-3 top-1/2 -translate-y-1/2 text-neutral-content/50'
                size={20}
              />
              <input
                type='text'
                placeholder='Search projects...'
                className='input input-bordered w-full pl-10'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label='Search projects'
              />
            </div>

            {/* Tech Stack Filter */}
            <div className='relative w-full md:w-48'>
              <IoCodeSlashSharp
                className='absolute left-3 top-1/2 -translate-y-1/2 text-neutral-content/50 pointer-events-none z-10'
                size={18}
              />
              <select
                className='select select-bordered w-full pl-10'
                value={stack}
                onChange={(e) => setStack(e.target.value)}
                aria-label='Filter by tech'
              >
                <option value=''>All Tech</option>
                {stacks.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Platform Filter */}
            <div className='relative w-full md:w-48'>
              <IoPhonePortraitSharp
                className='absolute left-3 top-1/2 -translate-y-1/2 text-neutral-content/50 pointer-events-none z-10'
                size={18}
              />
              <select
                className='select select-bordered w-full pl-10'
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                aria-label='Filter by platform'
              >
                <option value=''>All Platforms</option>
                {platforms.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            {/* Year Filter */}
            <div className='relative w-full md:w-40'>
              <IoCalendarSharp
                className='absolute left-3 top-1/2 -translate-y-1/2 text-neutral-content/50 pointer-events-none z-10'
                size={18}
              />
              <select
                className='select select-bordered w-full pl-10'
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

          {/* Results count and clear filters */}
          <div className='flex items-center justify-between'>
            <span className='text-sm text-neutral-content/70'>
              {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}{' '}
              found
            </span>
            {hasActiveFilters && (
              <button onClick={clearFilters} className='btn btn-ghost btn-sm gap-2'>
                <IoCloseCircle size={18} />
                Clear Filters
              </button>
            )}
          </div>
        </div>

        <div className='flex-1'>
          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {filteredProjects.length === 0 && (
              <div className='col-span-full text-center py-12 min-h-[300px] flex flex-col items-center justify-center gap-4'>
                <IoSearchSharp size={48} className='text-neutral-content/30' />
                <div>
                  <p className='text-lg font-semibold text-neutral-content/70 mb-2'>
                    No projects found
                  </p>
                  <p className='text-sm text-neutral-content/50'>
                    Try adjusting your filters or search term
                  </p>
                </div>
                {hasActiveFilters && (
                  <button onClick={clearFilters} className='btn btn-primary btn-sm mt-2'>
                    Clear All Filters
                  </button>
                )}
              </div>
            )}
            {filteredProjects.map((project) => (
              <ProjectItem key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div className='flex-1' />
      </div>
    </RootLayout>
  )
}

export default ProjectsPage
