import { IoSparklesOutline, IoHeartOutline, IoConstructOutline } from 'react-icons/io5'

const DrivesMeSection = () => {
  const principles = [
    {
      icon: <IoSparklesOutline size={18} className='text-primary' />,
      title: 'Business-First Architecture',
      description:
        'Transforming complex business logic into clean, automated services that eliminate manual operational bottlenecks.'
    },
    {
      icon: <IoHeartOutline size={18} className='text-primary' />,
      title: 'User-Centric Empathy',
      description:
        'Designing interfaces that reduce cognitive friction and deliver seamless, accessible user interactions.'
    },
    {
      icon: <IoConstructOutline size={18} className='text-primary' />,
      title: 'Craftsmanship & Stability',
      description:
        'Writing maintainable, well-tested code that scales reliably in production environments without fragile hacks.'
    }
  ]

  return (
    <section className='pt-8 border-t border-base-content/10'>
      <div className='mb-8'>
        <span className='text-xs font-semibold tracking-wider text-primary uppercase mb-1 block'>
          Philosophy
        </span>
        <h2 className='text-2xl sm:text-3xl font-bold font-display text-neutral-content tracking-tight'>
          Engineering Principles
        </h2>
      </div>

      <div className='grid gap-4 sm:grid-cols-3'>
        {principles.map((principle, index) => (
          <div key={index} className='card-clean p-5 flex flex-col justify-between'>
            <div>
              <div className='inline-flex p-2 rounded-lg bg-base-300 border border-base-content/10 mb-3.5'>
                {principle.icon}
              </div>
              <h3 className='font-bold text-base text-neutral-content mb-2'>{principle.title}</h3>
              <p className='text-xs sm:text-sm text-base-content/80 leading-relaxed'>
                {principle.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DrivesMeSection
