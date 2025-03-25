import { useState } from 'react'
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
import { Link } from 'react-router-dom'

interface CreatedAt {
  seconds: number
  nanoseconds: number
}

interface Project {
  id: string
  name: string
  shortDescription: string
  banner: string
  path: string
  createdAt: CreatedAt
  stacks: string[]
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

const ProjectSection = () => {
  const datas: Project[] = [
    {
      id: '1',
      name: 'VentNote',
      shortDescription:
        'Ventnote is taking notes like a breeze. A simple note management app build with native kotlin',
      banner:
        'https://firebasestorage.googleapis.com/v0/b/personalwebsite-af6e7.appspot.com/o/projects%2Fventnote_banner.jpg?alt=media&token=ea2b43b4-8020-431a-9e8b-ee20339b7eb9',
      path: '/a/a',
      createdAt: { seconds: 1680714000, nanoseconds: 384000000 },
      stacks: ['kotlin', 'android studio']
    },
    {
      id: '2',
      name: 'VentFit',
      shortDescription:
        'Ventnote is empower your health journey, Health measurement app (BMI Calculator and more) built with flutter',
      banner:
        'https://firebasestorage.googleapis.com/v0/b/personalwebsite-af6e7.appspot.com/o/projects%2Fventfit_banner.jpg?alt=media&token=cebdda28-17a3-4077-bae6-9f024a6054a3',
      path: '/a/a',
      createdAt: { seconds: 1680714000, nanoseconds: 384000000 },
      stacks: ['flutter', 'dart', 'android studio']
    },
    {
      id: '3',
      name: 'InvestCount',
      shortDescription:
        'InvestCount is A simple investment calculator that helps you calculate interest to make smarter financial decisions.',
      banner:
        'https://firebasestorage.googleapis.com/v0/b/personalwebsite-af6e7.appspot.com/o/projects%2Finvestcount_banner.png?alt=media&token=398f9d38-3891-4dfe-862f-807a5a3fdef8',
      path: '/a/a',
      createdAt: { seconds: 1680714000, nanoseconds: 384000000 },
      stacks: ['typescript', 'tailwindcss', 'daisyui', 'react']
    },
    {
      id: '4',
      name: 'Spring Boot Exploration',
      shortDescription:
        'A repository dedicated to exploring the industry standard of software engineering',
      banner:
        'https://firebasestorage.googleapis.com/v0/b/personalwebsite-af6e7.appspot.com/o/projects%2Fspringboot_exploration.jpg?alt=media&token=2966a660-ff8c-4fb6-8731-6b27aa89a213',
      path: '/a/a',
      createdAt: { seconds: 1680714000, nanoseconds: 384000000 },
      stacks: ['spring', 'springboot', 'java']
    },
    {
      id: '5',
      name: 'React Tailwind Starter',
      shortDescription:
        'React Tailwind Starter is A React.js template with Vite that packed with all the essential libraries',
      banner:
        'https://firebasestorage.googleapis.com/v0/b/personalwebsite-af6e7.appspot.com/o/projects%2Freact-template_banner.png?alt=media&token=e58709f3-8225-490e-b2ca-f51323cf868a',
      path: '/a/a',
      createdAt: { seconds: 1680714000, nanoseconds: 384000000 },
      stacks: ['typescript', 'tailwindcss', 'daisyui', 'react']
    }
  ]

  const [showMore, setShowMore] = useState(false)

  const displayedProjects = showMore ? datas : datas.slice(0, 3)

  return (
    <section className='flex flex-col items-center px-8 md:px-12 lg:px-20 mb-24'>
      <div className='w-full max-w-6xl'>
        <p className='text-neutral-content text-2xl md:text-3xl lg:text-4xl font-bold text-center'>
          Featured <span className='text-primary'>Projects</span>
        </p>
        <p className='text-sm sm:text-base md:text-lg mt-3 text-center'>
          Explore the most cutting-edge ventures showcased in my collection of projects.
        </p>
      </div>

      <div className='w-full max-w-6xl mt-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {displayedProjects.map((item, index) => {
            return (
              <Link
                to={item.path}
                key={`${item.id}-${index}`}
                className='card card-compact w-full h-80 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'
              >
                <figure className='h-48'>
                  <img
                    alt={item.name}
                    src={item.banner}
                    className='rounded-lg w-full h-full object-cover'
                  />
                </figure>
                <div className='px-4 py-2'>
                  <div className='text-base flex flex-row mt-4 mb-2 space-x-2 items-center'>
                    {item.stacks.map((stack, index) => {
                      return <div key={index}>{iconMapper[stack]}</div>
                    })}
                  </div>
                  <div className='text-sm sm:text-base md:text-lg line-clamp-2 text-neutral-content font-bold overflow-hidden text-ellipsis mt-4'>
                    {item.name}
                  </div>
                  <div className='text-sm sm:text-base md:text-lg line-clamp-2 overflow-hidden text-ellipsis mt-2'>
                    {item.shortDescription}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {datas.length > 3 && (
        <div className='mt-8'>
          <button
            className='btn btn-outline text-neutral-content w-52 capitalize'
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Show less' : 'See more projects'}
          </button>
        </div>
      )}
    </section>
  )
}

export default ProjectSection
