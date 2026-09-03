import { IoCalendarOutline, IoCheckmarkCircleOutline } from 'react-icons/io5'

const TimelineSection = () => {
  const timeline = [
    {
      date: '2023 - Present',
      company: 'PT. SMBC Indonesia',
      role: 'Software Engineer',
      description:
        'Developing and maintaining mission-critical digital payment services and microservices, ensuring high uptime and reliable payment processing.',
      achievements: [
        'Built resilient digital payment pipelines handling core enterprise transactions',
        'Enhanced service response latency and database query throughput',
        'Collaborated across multidisciplinary teams in agile release sprints'
      ]
    }
  ]

  return (
    <section className='pt-8 border-t border-base-content/10'>
      <div className='mb-8'>
        <span className='text-xs font-semibold tracking-wider text-primary uppercase mb-1 block'>
          Career
        </span>
        <h2 className='text-2xl sm:text-3xl font-bold font-display text-neutral-content tracking-tight'>
          Professional Timeline
        </h2>
      </div>

      <div className='relative pl-6 sm:pl-8 border-l border-primary/20 space-y-8'>
        {timeline.map((item, index) => (
          <div key={index} className='relative'>
            {/* Glowing Timeline Node */}
            <div className='absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-base-100 shadow-sm shadow-primary/50' />

            <div className='card-clean p-5 sm:p-6'>
              <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3'>
                <div>
                  <h3 className='text-lg font-bold text-neutral-content'>{item.role}</h3>
                  <p className='text-sm font-semibold text-primary'>{item.company}</p>
                </div>
                <div className='inline-flex items-center gap-1.5 text-xs text-base-content/70 sm:self-start bg-base-300 px-2.5 py-1 rounded-md border border-base-content/10'>
                  <IoCalendarOutline size={13} />
                  <span>{item.date}</span>
                </div>
              </div>

              <p className='text-xs sm:text-sm text-base-content/80 mb-4 leading-relaxed'>
                {item.description}
              </p>

              <div className='space-y-2 pt-3 border-t border-base-content/10'>
                <p className='text-xs font-semibold uppercase tracking-wider text-neutral-content'>
                  Key Focus Areas:
                </p>
                <ul className='space-y-1.5 text-xs sm:text-sm text-base-content/80'>
                  {item.achievements.map((achievement, idx) => (
                    <li key={idx} className='flex items-start gap-2'>
                      <IoCheckmarkCircleOutline
                        size={15}
                        className='text-primary mt-0.5 flex-shrink-0'
                      />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TimelineSection
