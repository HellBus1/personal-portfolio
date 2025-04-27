import OverviewSection from './OverviewSection/OverviewSection'
import DrivesMeSection from './DrivesMeSection/DrivesMeSection'
import CurrentFocusSection from './CurrentFocus/CurrentFocusSection'
import ContactSection from './ContactSection/ContactSection'

const AboutPage = () => {
  return (
    <>
      <div className='container max-w-4xl mx-auto px-8 md:px-12 lg:px-20 py-16'>
        <OverviewSection />
        <DrivesMeSection />
        <CurrentFocusSection />
        <ContactSection />
      </div>
    </>
  )
}

export default AboutPage
