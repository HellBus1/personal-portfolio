import { FaLightbulb, FaHeart, FaCode } from 'react-icons/fa'

const DrivesMeSection = () => {
  const principles = [
    {
      icon: <FaLightbulb size={20} />,
      title: 'Innovation Through Simplicity',
      description:
        'Creating elegant solutions that make life easier and better for others. Every problem is an opportunity to innovate with purpose.'
    },
    {
      icon: <FaHeart size={20} />,
      title: 'Empathy-Driven Development',
      description:
        'Building with real users in mind, understanding their needs, frustrations, and aspirations to create meaningful solutions.'
    },
    {
      icon: <FaCode size={20} />,
      title: 'Craftsman Mindset',
      description:
        'Taking pride in writing clean, maintainable code that stands the test of time. Quality and reliability are non-negotiable.'
    }
  ]

  return (
    <section className='space-y-8 mb-16'>
      <h2 className='text-2xl md:text-3xl font-bold text-neutral-content'>What Drives Me</h2>
      <div className='grid gap-4 md:gap-6'>
        {principles.map((principle, index) => (
          <div
            key={index}
            className='group p-4 md:p-6 bg-base-200 rounded-lg transition-all hover:bg-base-200/80'
          >
            <div className='flex items-center gap-3 mb-3'>
              <div className='text-primary'>{principle.icon}</div>
              <h3 className='font-semibold text-lg'>{principle.title}</h3>
            </div>
            <p className='text-sm md:text-base text-neutral-content/80'>{principle.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DrivesMeSection
