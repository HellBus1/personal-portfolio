import {
  SiReact,
  SiTypescript,
  SiKotlin,
  SiSpring,
  SiFlutter,
  SiGit,
  SiDocker,
  SiFigma
} from 'react-icons/si'
import { FaDatabase, FaMobile, FaJava, FaNode } from 'react-icons/fa'

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Backend Engineering',
      icon: <FaJava className='text-primary' size={20} />,
      skills: [
        { name: 'Java', icon: <FaJava size={16} /> },
        { name: 'Spring Boot', icon: <SiSpring size={16} /> },
        { name: 'Node.js', icon: <FaNode size={16} /> },
        { name: 'SQL & Databases', icon: <FaDatabase size={16} /> }
      ]
    },
    {
      title: 'Frontend Development',
      icon: <SiReact className='text-primary' size={20} />,
      skills: [
        { name: 'React', icon: <SiReact size={16} /> },
        { name: 'TypeScript', icon: <SiTypescript size={16} /> }
      ]
    },
    {
      title: 'Mobile Applications',
      icon: <FaMobile className='text-primary' size={20} />,
      skills: [
        { name: 'Flutter', icon: <SiFlutter size={16} /> },
        { name: 'Kotlin', icon: <SiKotlin size={16} /> }
      ]
    },
    {
      title: 'DevOps & Tooling',
      icon: <SiGit className='text-primary' size={20} />,
      skills: [
        { name: 'Git', icon: <SiGit size={16} /> },
        { name: 'Docker', icon: <SiDocker size={16} /> },
        { name: 'Figma', icon: <SiFigma size={16} /> }
      ]
    }
  ]

  return (
    <section className='pt-8 border-t border-base-content/10'>
      <div className='mb-8'>
        <span className='text-xs font-semibold tracking-wider text-primary uppercase mb-1 block'>
          Capabilities
        </span>
        <h2 className='text-2xl sm:text-3xl font-bold font-display text-neutral-content tracking-tight'>
          Skills &amp; Technologies
        </h2>
      </div>

      <div className='grid gap-4 sm:grid-cols-2'>
        {skillCategories.map((category, index) => (
          <div key={index} className='card-clean p-5 flex flex-col justify-between'>
            <div className='flex items-center gap-2.5 mb-4'>
              <span className='p-2 rounded-lg bg-base-300 border border-base-content/10'>
                {category.icon}
              </span>
              <h3 className='font-bold text-base text-neutral-content'>{category.title}</h3>
            </div>

            <div className='flex flex-wrap gap-2'>
              {category.skills.map((skill, idx) => (
                <span key={idx} className='tag-pill'>
                  <span className='text-primary'>{skill.icon}</span>
                  <span>{skill.name}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
