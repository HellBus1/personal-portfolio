import { useState, useMemo } from 'react'
import projectsDataRaw from '../../data/projects.json'
import { Project } from '../../model/project'
import RootLayout from '@/components/RootLayout/RootLayout'
import TitleSection from './components/TitleSection/TitleSection'
import ProjectItem from './components/ProjectItem/ProjectItem'

const getYear = (createdAt: { seconds: number }) =>
  new Date(createdAt.seconds * 1000).getFullYear().toString()

const getAllStacks = (projects: Project[]) =>
  Array.from(new Set(projects.flatMap((p) => p.stacks.map((s) => s.toLowerCase()))))

const getAllYears = (projects: Project[]) =>
  Array.from(new Set(projects.map((p) => getYear(p.createdAt))))

const getAllPlatforms = (projects: Project[]) => {
  return ['android', 'web', 'ios'].filter((platform) =>
    projects.some((p) => p.stacks.join(' ').toLowerCase().includes(platform))
  )
}

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

      const matchesPlatform = platform
        ? project.stacks.map((s) => s.toLowerCase()).includes(platform)
        : true

      const matchesYear = year ? getYear(project.createdAt) === year : true

      return matchesSearch && matchesStack && matchesPlatform && matchesYear
    })
  }, [search, stack, platform, year, projects])

  return (
    <RootLayout>
      <div className='w-full max-w-5xl mx-auto px-8 md:px-12 lg:px-20 pb-16 pt-32 min-h-[70vh] flex flex-col'>
        <TitleSection />

        <div className='flex flex-col md:flex-row md:items-end gap-4 mb-8 w-full'>
          <input
            type='text'
            placeholder='Search projects...'
            className='input input-bordered w-full md:w-1/3'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label='Search projects'
          />
          <select
            className='select select-bordered w-full md:w-40'
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
          <select
            className='select select-bordered w-full md:w-40'
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
          <select
            className='select select-bordered w-full md:w-32'
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

        <div className='flex-1'>
          <div className='grid gap-8 md:grid-cols-2'>
            {filteredProjects.length === 0 && (
              <div className='col-span-full text-center text-neutral-content/70 py-12 min-h-[300px] flex items-center justify-center'>
                No projects found.
              </div>
            )}
            {filteredProjects.map((project) => (
              <ProjectItem project={project} />
            ))}
          </div>
        </div>

        <div className='flex-1' />
      </div>
    </RootLayout>
  )
}

export default ProjectsPage
