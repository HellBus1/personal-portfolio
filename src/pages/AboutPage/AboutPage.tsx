import OverviewSection from './OverviewSection/OverviewSection'
import DrivesMeSection from './DrivesMeSection/DrivesMeSection'
import CurrentFocusSection from './CurrentFocus/CurrentFocusSection'
import ContactSection from './ContactSection/ContactSection'
import RootLayout from '@/components/RootLayout/RootLayout'

const AboutPage = () => {
  return (
    <RootLayout>
      <div className='container max-w-5xl mx-auto px-8 md:px-12 lg:px-20 pb-16 pt-32'>
        <OverviewSection />
        <DrivesMeSection />
        <CurrentFocusSection />
        <ContactSection />
      </div>
    </RootLayout>
  )
}

export default AboutPage
