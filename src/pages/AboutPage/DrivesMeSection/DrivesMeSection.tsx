import { FaLightbulb, FaHeart, FaCode } from 'react-icons/fa'

const DrivesMeSection = () => {
  return (
    <section className='space-y-8 mb-16'>
      <div className='space-y-2'>
        <h2 className='text-2xl md:text-3xl font-bold text-neutral-content'>What Drives Me</h2>
        <p className='text-base text-neutral-content/80'>
          My approach to work and life is shaped by these core principles:
        </p>
      </div>
      <div className='grid gap-4 md:gap-6'>
        {[
          {
            icon: <FaLightbulb size={20} />,
            title: 'Innovation Through Simplicity',
            description:
              'I believe the most elegant solutions are often the simplest ones. Every problem is an opportunity to create something that makes life easier and better for others.'
          },
          {
            icon: <FaHeart size={20} />,
            title: 'Empathy-Driven Development',
            description:
              'Technology should serve people, not the other way around. I build with real users in mind, understanding their needs, frustrations, and aspirations.'
          },
          {
            icon: <FaCode size={20} />,
            title: 'Craftsman Mindset',
            description:
              "Quality code is more than just working software. It's about creating maintainable, scalable, and reliable solutions that standthe test of time."
          }
        ].map((item, index) => (
          <div
            key={index}
            className='flex flex-col md:flex-row items-start gap-4 p-6 bg-base-200 rounded-lg hover:bg-base-200/90 transition-colors'
          >
            <div className='p-3 bg-primary rounded-md text-primary-content'>{item.icon}</div>
            <div className='space-y-2'>
              <h3 className='font-semibold text-lg'>{item.title}</h3>
              <p className='text-neutral-content/80'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DrivesMeSection
