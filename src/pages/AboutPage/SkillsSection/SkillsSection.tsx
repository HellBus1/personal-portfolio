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
      title: 'Frontend Development',
      icon: <SiReact className='text-primary' size={24} />,
      skills: [
        { name: 'React', icon: <SiReact size={20} /> },
        { name: 'TypeScript', icon: <SiTypescript size={20} /> }
      ]
    },
    {
      title: 'Backend Development',
      icon: <FaJava className='text-primary' size={24} />,
      skills: [
        { name: 'Node.js', icon: <FaNode size={20} /> },
        { name: 'Spring Boot', icon: <SiSpring size={20} /> },
        { name: 'SQL', icon: <FaDatabase size={20} /> }
      ]
    },
    {
      title: 'Mobile Development',
      icon: <FaMobile className='text-primary' size={24} />,
      skills: [
        { name: 'Flutter', icon: <SiFlutter size={20} /> },
        { name: 'Kotlin', icon: <SiKotlin size={20} /> }
      ]
    },
    {
      title: 'Tools & Others',
      icon: <SiGit className='text-primary' size={24} />,
      skills: [
        { name: 'Git', icon: <SiGit size={20} /> },
        { name: 'Docker', icon: <SiDocker size={20} /> },
        { name: 'Figma', icon: <SiFigma size={20} /> }
      ]
    }
  ]

  return (
    <section className='space-y-8 mb-16'>
      <h2 className='text-2xl md:text-3xl font-bold text-neutral-content'>Skills & Technologies</h2>
      <div className='grid gap-6 md:grid-cols-2'>
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className='group p-6 bg-base-200 rounded-lg transition-all hover:bg-base-300 hover:shadow-lg'
          >
            <div className='flex items-center gap-3 mb-4'>
              {category.icon}
              <h3 className='font-semibold text-lg'>{category.title}</h3>
            </div>
            <div className='flex flex-wrap gap-3'>
              {category.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className='flex items-center gap-2 px-3 py-2 bg-base-100 rounded-md hover:bg-primary hover:text-primary-content transition-all duration-200'
                >
                  <span className='text-primary group-hover:text-current'>{skill.icon}</span>
                  <span className='text-sm font-medium'>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
