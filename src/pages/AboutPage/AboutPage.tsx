import OverviewSection from './OverviewSection/OverviewSection'
import DrivesMeSection from './DrivesMeSection/DrivesMeSection'
import CurrentFocusSection from './CurrentFocus/CurrentFocusSection'
import ContactSection from './ContactSection/ContactSection'
import RootLayout from '@/components/RootLayout/RootLayout'
import { useLocation, Link } from 'react-router-dom'

const AboutPage = () => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  return (
    <RootLayout>
      <div className='container max-w-5xl mx-auto px-8 md:px-12 lg:px-20 pb-16 pt-24'>
        <div className='text-sm mb-12'>
          <div className='breadcrumbs'>
            <ul>
              <li>
                <Link to='/' className='link link-hover'>
                  Home
                </Link>
              </li>
              {pathnames.map((value, idx) => {
                const to = '/' + pathnames.slice(0, idx + 1).join('/')
                const isLast = idx === pathnames.length - 1
                return (
                  <li key={to}>
                    {isLast ? (
                      <span className='font-semibold'>
                        {value.charAt(0).toUpperCase() + value.slice(1)}
                      </span>
                    ) : (
                      <Link to={to} className='link link-hover'>
                        {value.charAt(0).toUpperCase() + value.slice(1)}
                      </Link>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <OverviewSection />
        <DrivesMeSection />
        <CurrentFocusSection />
        <ContactSection />
      </div>
    </RootLayout>
  )
}

export default AboutPage
