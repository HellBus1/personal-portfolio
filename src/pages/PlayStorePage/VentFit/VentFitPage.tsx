import RootLayout from '@/components/RootLayout/RootLayout'
import { Link, useLocation } from 'react-router-dom'

const VentFitPage = () => {
  // Breadcrumbs logic
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  return (
    <RootLayout>
      <div className='w-full max-w-4xl mx-auto px-6 md:px-8 lg:px-12 pb-20 pt-32 min-h-[70vh]'>
        {/* Breadcrumbs */}
        <div className='text-sm mb-8'>
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

        {/* Header Section */}
        <div className='mb-12'>
          <div className='flex items-center gap-3 mb-6'>
            <div className='w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center'>
              <svg
                className='w-8 h-8 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                />
              </svg>
            </div>
            <div>
              <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-neutral-content to-primary bg-clip-text text-transparent'>
                Privacy Policy
              </h1>
              <p className='text-neutral-content/70 mt-2'>VentFit App • Effective June 04, 2023</p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className='space-y-10'>
          {/* Intro Section */}
          <section className='bg-base-100 rounded-2xl shadow-sm border border-base-content p-8'>
            <p className='text-neutral-content/80 leading-relaxed mb-6'>
              DigiVenture built the VentFit app as a Free app. This SERVICE is provided by
              DigiVenture at no cost and is intended for use as is.
            </p>
            <p className='text-neutral-content/80 leading-relaxed mb-6'>
              This page is used to inform visitors regarding my policies with the collection, use,
              and disclosure of Personal Information if anyone decided to use my Service.
            </p>
            <p className='text-neutral-content/80 leading-relaxed mb-6'>
              If you choose to use my Service, then you agree to the collection and use of
              information in relation to this policy. The Personal Information that I collect is
              used for providing and improving the Service. I will not use or share your information
              with anyone except as described in this Privacy Policy.
            </p>
            <p className='text-neutral-content/80 leading-relaxed'>
              The terms used in this Privacy Policy have the same meanings as in our Terms and
              Conditions, which are accessible at VentFit unless otherwise defined in this Privacy
              Policy.
            </p>
          </section>

          {/* Information Collection */}
          <section className='bg-base-100 rounded-2xl shadow-sm border border-base-content p-8'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center'>
                <svg
                  className='w-5 h-5 text-primary'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                  />
                </svg>
              </div>
              <h2 className='text-2xl font-bold text-neutral-content'>
                Information Collection and Use
              </h2>
            </div>
            <p className='text-neutral-content/80 leading-relaxed mb-6'>
              For a better experience, while using our Service, I may require you to provide us with
              certain personally identifiable information. The information that I request will be
              retained on your device and is not collected by me in any way.
            </p>
            <p className='text-neutral-content/80 leading-relaxed mb-6'>
              The app does use third-party services that may collect information used to identify
              you.
            </p>
            <p className='text-neutral-content/80 leading-relaxed mb-4'>
              Link to the privacy policy of third-party service providers used by the app
            </p>
            <div className='grid gap-4'>
              <a
                href='https://www.google.com/policies/privacy/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-between p-4 bg-base-200 hover:bg-base-300 rounded-lg transition-colors group'
              >
                <span className='font-medium text-neutral-content'>Google Play Services</span>
                <svg
                  className='w-4 h-4 text-neutral-content/60 group-hover:text-primary transition-colors'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                  />
                </svg>
              </a>
              <a
                href='https://support.google.com/admob/answer/6128543?hl=en'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-between p-4 bg-base-200 hover:bg-base-300 rounded-lg transition-colors group'
              >
                <span className='font-medium text-neutral-content'>AdMob</span>
                <svg
                  className='w-4 h-4 text-neutral-content/60 group-hover:text-primary transition-colors'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                  />
                </svg>
              </a>
              <a
                href='https://firebase.google.com/policies/analytics'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-between p-4 bg-base-200 hover:bg-base-300 rounded-lg transition-colors group'
              >
                <span className='font-medium text-neutral-content'>
                  Google Analytics for Firebase
                </span>
                <svg
                  className='w-4 h-4 text-neutral-content/60 group-hover:text-primary transition-colors'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                  />
                </svg>
              </a>
              <a
                href='https://firebase.google.com/support/privacy/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-between p-4 bg-base-200 hover:bg-base-300 rounded-lg transition-colors group'
              >
                <span className='font-medium text-neutral-content'>Firebase Crashlytics</span>
                <svg
                  className='w-4 h-4 text-neutral-content/60 group-hover:text-primary transition-colors'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                  />
                </svg>
              </a>
            </div>
          </section>

          {/* Log Data */}
          <section className='bg-base-100 rounded-2xl shadow-sm border border-base-content p-8'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center'>
                <svg
                  className='w-5 h-5 text-accent'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                  />
                </svg>
              </div>
              <h2 className='text-2xl font-bold text-neutral-content'>Log Data</h2>
            </div>
            <p className='text-neutral-content/80 leading-relaxed'>
              I want to inform you that whenever you use my Service, in a case of an error in the
              app I collect data and information (through third-party products) on your phone called
              Log Data. This Log Data may include information such as your device Internet Protocol
              (“IP”) address, device name, operating system version, the configuration of the app
              when utilizing my Service, the time and date of your use of the Service, and other
              statistics.
            </p>
          </section>

          {/* Cookies */}
          <section className='bg-base-100 rounded-2xl shadow-sm border border-base-content p-8'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center'>
                <svg
                  className='w-5 h-5 text-warning'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'
                  />
                </svg>
              </div>
              <h2 className='text-2xl font-bold text-neutral-content'>Cookies</h2>
            </div>
            <p className='text-neutral-content/80 leading-relaxed mb-6'>
              Cookies are files with a small amount of data that are commonly used as anonymous
              unique identifiers. These are sent to your browser from the websites that you visit
              and are stored on your device's internal memory.
            </p>
            <p className='text-neutral-content/80 leading-relaxed'>
              This Service does not use these "cookies" explicitly. However, the app may use
              third-party code and libraries that use "cookies" to collect information and improve
              their services. You have the option to either accept or refuse these cookies and know
              when a cookie is being sent to your device. If you choose to refuse our cookies, you
              may not be able to use some portions of this Service.
            </p>
          </section>

          {/* Service Providers */}
          <section className='bg-base-100 rounded-2xl shadow-sm border border-base-content p-8'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-10 h-10 bg-info/10 rounded-lg flex items-center justify-center'>
                <svg
                  className='w-5 h-5 text-info'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
              </div>
              <h2 className='text-2xl font-bold text-neutral-content'>Service Providers</h2>
            </div>
            <p className='text-neutral-content/80 leading-relaxed mb-6'>
              I may employ third-party companies and individuals due to the following reasons:
            </p>
            <ul className='list-disc list-inside text-neutral-content/80 leading-relaxed space-y-2 mb-6 ml-4'>
              <li>To facilitate our Service;</li>
              <li>To provide the Service on our behalf;</li>
              <li>To perform Service-related services; or</li>
              <li>To assist us in analyzing how our Service is used.</li>
            </ul>
            <p className='text-neutral-content/80 leading-relaxed'>
              I want to inform users of this Service that these third parties have access to their
              Personal Information. The reason is to perform the tasks assigned to them on our
              behalf. However, they are obligated not to disclose or use the information for any
              other purpose.
            </p>
          </section>

          {/* Security */}
          <section className='bg-base-100 rounded-2xl shadow-sm border border-base-content p-8'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-10 h-10 bg-error/10 rounded-lg flex items-center justify-center'>
                <svg
                  className='w-5 h-5 text-error'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                  />
                </svg>
              </div>
              <h2 className='text-2xl font-bold text-neutral-content'>Security</h2>
            </div>
            <p className='text-neutral-content/80 leading-relaxed'>
              I value your trust in providing us your Personal Information, thus we are striving to
              use commercially acceptable means of protecting it. But remember that no method of
              transmission over the internet, or method of electronic storage is 100% secure and
              reliable, and I cannot guarantee its absolute security.
            </p>
          </section>

          {/* Links to Other Sites */}
          <section className='bg-base-100 rounded-2xl shadow-sm border border-base-content p-8'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center'>
                <svg
                  className='w-5 h-5 text-secondary'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
                  />
                </svg>
              </div>
              <h2 className='text-2xl font-bold text-neutral-content'>Links to Other Sites</h2>
            </div>
            <p className='text-neutral-content/80 leading-relaxed'>
              This Service may contain links to other sites. If you click on a third-party link, you
              will be directed to that site. Note that these external sites are not operated by me.
              Therefore, I strongly advise you to review the Privacy Policy of these websites. I
              have no control over and assume no responsibility for the content, privacy policies,
              or practices of any third-party sites or services.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className='bg-base-100 rounded-2xl shadow-sm border border-base-content p-8'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center'>
                <svg
                  className='w-5 h-5 text-pink-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                  />
                </svg>
              </div>
              <h2 className='text-2xl font-bold text-neutral-content'>Children's Privacy</h2>
            </div>
            <p className='text-neutral-content/80 leading-relaxed'>
              These Services do not address anyone under the age of 13. I do not knowingly collect
              personally identifiable information from children under 13 years of age. In the case I
              discover that a child under 13 has provided me with personal information, I
              immediately delete this from our servers. If you are a parent or guardian and you are
              aware that your child has provided us with personal information, please contact me so
              that I will be able to do the necessary actions.
            </p>
          </section>

          {/* Changes to This Privacy Policy */}
          <section className='bg-base-100 rounded-2xl shadow-sm border border-base-content p-8'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-10 h-10 bg-info/10 rounded-lg flex items-center justify-center'>
                <svg
                  className='w-5 h-5 text-info'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                  />
                </svg>
              </div>
              <h2 className='text-2xl font-bold text-neutral-content'>
                Changes to This Privacy Policy
              </h2>
            </div>
            <p className='text-neutral-content/80 leading-relaxed mb-6'>
              I may update our Privacy Policy from time to time. Thus, you are advised to review
              this page periodically for any changes. I will notify you of any changes by posting
              the new Privacy Policy on this page.
            </p>
            <p className='text-neutral-content/80 leading-relaxed'>
              This policy is effective as of 2023-06-04
            </p>
          </section>
        </div>

        {/* Contact Section */}
        <div className='mt-16 bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white'>
          <div className='flex items-center gap-4 mb-4'>
            <div className='w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center'>
              <svg
                className='w-6 h-6 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                />
              </svg>
            </div>
            <div>
              <h2 className='text-2xl font-bold'>Contact Us</h2>
              <p className='text-base-100/80'>Have questions about our privacy policy?</p>
            </div>
          </div>
          <p className='text-base-100/80 mb-4'>
            If you have any questions or suggestions about my Privacy Policy, do not hesitate to
            contact me at mosmatter1@gmail.com.
          </p>
          <a
            href='mailto:mosmatter1@gmail.com'
            className='inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-base-200 transition-colors'
          >
            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
              />
            </svg>
            mosmatter1@gmail.com
          </a>
        </div>

        {/* Footer */}
        <footer className='mt-12 pt-8 border-t border-base-content text-center text-sm text-neutral-content/60'>
          <p>
            This privacy policy page was created at{' '}
            <a
              href='https://privacypolicytemplate.net/'
              className='text-primary hover:underline'
              target='_blank'
              rel='noopener noreferrer'
            >
              privacypolicytemplate.net
            </a>{' '}
            and modified/generated by{' '}
            <a
              href='https://app-privacy-policy-generator.nisrulz.com/'
              className='text-primary hover:underline'
              target='_blank'
              rel='noopener noreferrer'
            >
              App Privacy Policy Generator
            </a>
          </p>
        </footer>
      </div>
    </RootLayout>
  )
}

export default VentFitPage
