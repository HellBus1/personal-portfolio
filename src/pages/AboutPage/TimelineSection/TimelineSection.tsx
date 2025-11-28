import { IoBriefcase, IoCalendar } from 'react-icons/io5'

const TimelineSection = () => {
  const timeline = [
    {
      date: '2023 - Present',
      company: 'PT. SMBC Indonesia',
      role: 'Software Engineer',
      description:
        'Building, maintaining, and developing digital payment services. Enabling seamless digital experiences for the business channel.',
      achievements: [
        'Developed and maintained digital payment platform',
        'Improved system performance and reliability',
        'Collaborated with cross-functional teams'
      ]
    }
  ]

  return (
    <section className='space-y-8 mb-16'>
      <h2 className='text-2xl md:text-3xl font-bold text-neutral-content'>Professional Timeline</h2>
      <div className='relative'>
        {/* Timeline line */}
        <div className='absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-primary/30'></div>

        <div className='space-y-8'>
          {timeline.map((item, index) => (
            <div key={index} className='relative pl-12 md:pl-20'>
              {/* Timeline dot */}
              <div className='absolute left-2.5 md:left-6.5 top-1.5 w-3 h-3 bg-primary rounded-full ring-4 ring-base-100'></div>

              <div className='group p-6 bg-base-200 rounded-lg transition-all hover:bg-base-300 hover:shadow-lg'>
                <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-3'>
                  <div>
                    <h3 className='text-xl font-bold text-neutral-content'>{item.role}</h3>
                    <p className='text-primary font-semibold'>{item.company}</p>
                  </div>
                  <div className='flex items-center gap-2 text-sm text-neutral-content/70 mt-2 md:mt-0'>
                    <IoCalendar size={16} />
                    <span>{item.date}</span>
                  </div>
                </div>
                <p className='text-neutral-content/80 mb-4'>{item.description}</p>
                <div className='space-y-2'>
                  <p className='text-sm font-semibold text-neutral-content flex items-center gap-2'>
                    <IoBriefcase size={16} className='text-primary' />
                    Key Achievements:
                  </p>
                  <ul className='list-disc list-inside space-y-1 text-sm text-neutral-content/80 ml-6'>
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TimelineSection
