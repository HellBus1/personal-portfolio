import { FaLinkedin, FaMedium, FaHeart, FaLightbulb, FaCode, FaEnvelope } from 'react-icons/fa'

const AboutPage = () => {
  return (
    <div className='max-w-4xl mx-auto px-4 py-24'>
      {/* Hero Section - More compact & responsive */}
      <section className='flex flex-col-reverse md:flex-row items-center md:items-start gap-8 mb-24'>
        <div className='space-y-8 md:w-2/3 text-center md:text-left'>
          <h1 className='text-4xl font-bold text-neutral-content'>
            Hi, I'm <span className='text-primary'>Syubban Fakhriya</span>
          </h1>
          <div className='prose prose-lg dark:prose-invert'>
            <p>
              A builder of ideas, a seeker of meaning, and a lifelong learner who crafts digital
              solutions that make life simpler.
            </p>
            <p>
              I believe in building tools that serve real human needs, combining technical expertise
              with empathy to create meaningful experiences.
            </p>
          </div>
        </div>
        <div className='md:w-1/3 flex justify-center'>
          <div className='relative group'>
            <div className='w-[200px] h-[200px] rounded-full overflow-hidden ring-2 ring-primary/20 transition-all duration-300 group-hover:ring-primary/40'>
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

      {/* What Drives Me - Enhanced with more context */}
      <section className='space-y-12 mb-24'>
        <div className='space-y-4'>
          <h2 className='text-2xl font-bold text-neutral-content'>What Drives Me</h2>
          <p className='text-neutral-content/80'>
            My approach to work and life is shaped by these core principles that guide everything I
            do:
          </p>
        </div>
        <div className='grid gap-6'>
          {[
            {
              icon: <FaLightbulb size={20} />,
              title: 'Innovation Through Simplicity',
              description:
                'I believe the most elegant solutions are often the simplest ones. Every problem is an opportunity to create something that makes life easier and better for others.',
              detail:
                "Whether it's streamlining complex workflows or creating intuitive interfaces, I focus on impactful solutions that solve real problems."
            },
            {
              icon: <FaHeart size={20} />,
              title: 'Empathy-Driven Development',
              description:
                'Technology should serve people, not the other way around. I build with real users in mind, understanding their needs, frustrations, and aspirations.',
              detail:
                'This means spending time understanding the problem space, gathering feedback, and iterating based on real user experiences.'
            },
            {
              icon: <FaCode size={20} />,
              title: 'Craftsman Mindset',
              description:
                "Quality code is more than just working software. It's about creating maintainable, scalable, and reliable solutions that stand the test of time.",
              detail:
                'I take pride in writing clean code, thorough testing, and documentation that helps others understand and build upon my work.'
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
                <p className='text-sm text-neutral-content/60'>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Current Focus - Clean layout inspired by aliabdaal.com */}
      <section className='space-y-12 mb-24'>
        <h2 className='text-2xl font-bold text-neutral-content'>Current Focus</h2>
        <div className='space-y-6'>
          <div className='flex flex-col gap-6'>
            <div className='group p-6 bg-base-200 rounded-lg transition-all hover:bg-base-200/80'>
              <div className='flex items-center gap-4 mb-4'>
                <FaMedium size={20} className='text-primary' />
                <h3 className='font-semibold'>Writing & Sharing Knowledge</h3>
              </div>
              <p className='text-sm text-neutral-content/80 mb-4'>
                Documenting my journey and insights in software development and personal growth.
              </p>
              <a
                href='https://medium.com/@syubbanfakhriya'
                target='_blank'
                rel='noopener noreferrer'
                className='text-sm text-primary hover:underline inline-flex items-center gap-2'
              >
                Read my articles →
              </a>
            </div>

            <div className='group p-6 bg-base-200 rounded-lg transition-all hover:bg-base-200/80'>
              <div className='flex items-center gap-4 mb-4'>
                <FaLinkedin size={20} className='text-primary' />
                <h3 className='font-semibold'>Professional Work</h3>
              </div>
              <p className='text-sm text-neutral-content/80 mb-4'>
                Currently at Xendit, building solutions that empower businesses across Southeast
                Asia.
              </p>
              <a
                href='https://www.linkedin.com/in/syubban/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-sm text-primary hover:underline inline-flex items-center gap-2'
              >
                View my profile →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact - Simple and direct, inspired by brittanychiang.com */}
      <section className='space-y-6'>
        <h2 className='text-2xl font-bold text-neutral-content'>Get In Touch</h2>
        <p className='text-neutral-content/80'>
          Whether you want to discuss a project or just want to say hi, my inbox is always open.
        </p>
        <a
          href='mailto:syubbanfakhriya@gmail.com'
          className='inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-content rounded-md hover:bg-primary/90 transition-colors'
        >
          <FaEnvelope size={16} />
          Say Hello
        </a>
      </section>
    </div>
  )
}

export default AboutPage
