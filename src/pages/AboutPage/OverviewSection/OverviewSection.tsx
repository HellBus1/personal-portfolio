const OverviewSection = () => {
  return (
    <section className='flex flex-col-reverse md:flex-row items-center md:items-start gap-8 mb-16'>
      <div className='space-y-6 md:w-2/3 text-center md:text-left'>
        <h1 className='text-3xl md:text-4xl font-bold text-neutral-content'>
          Hi, I'm <span className='text-primary'>Syubban Fakhriya</span>
        </h1>
        <div className='prose prose-base md:prose-lg dark:prose-invert'>
          <p>
            I create scalable solutions, such as company profiles and custom ERP systems, that
            automate processes, produce leads, and increase business growth.
          </p>
          <br />
          <p>
            I believe in building tools that serve real human needs, combining technical expertise
            with empathy to create meaningful experiences.
          </p>
        </div>
      </div>
      <div className='md:w-1/3 flex justify-center'>
        <div className='relative group'>
          <div className='w-[180px] md:w-[200px] h-[180px] md:h-[200px] rounded-full overflow-hidden ring-2 ring-primary/20 transition-all duration-300 group-hover:ring-primary/40'>
            <img
              src='/avatar.jpg'
              alt='Syubban Fakhriya'
              className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
            />
          </div>
          <div className='absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
        </div>
      </div>
    </section>
  )
}

export default OverviewSection
