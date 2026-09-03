import OverviewSection from './OverviewSection/OverviewSection'
import SkillsSection from './SkillsSection/SkillsSection'
import DrivesMeSection from './DrivesMeSection/DrivesMeSection'
import TimelineSection from './TimelineSection/TimelineSection'
import ContactSection from './ContactSection/ContactSection'
import RootLayout from '@/components/RootLayout/RootLayout'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <RootLayout>
      <div className='w-full max-w-4xl mx-auto px-6 md:px-12 pt-28 pb-20'>
        {/* Breadcrumb */}
        <nav className='flex items-center gap-2 text-xs text-base-content/60 mb-10'>
          <Link to='/' className='hover:text-primary transition-colors'>
            Home
          </Link>
          <span>/</span>
          <span className='text-neutral-content font-semibold'>About</span>
        </nav>

        <div className='space-y-16 md:space-y-20'>
          <OverviewSection />
          <SkillsSection />
          <DrivesMeSection />
          <TimelineSection />
          <ContactSection />
        </div>
      </div>
    </RootLayout>
  )
}

export default AboutPage
