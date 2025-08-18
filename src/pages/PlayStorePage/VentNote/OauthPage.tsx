import RootLayout from '@/components/RootLayout/RootLayout'
import { Link, useLocation } from 'react-router-dom'

const OauthPage = () => {
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
                OAuth Privacy Policy
              </h1>
              <p className='text-neutral-content/70 mt-2'>Last updated: See below</p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className='space-y-10'>
          {/* Main Policy Section */}
          <section className='bg-base-100 rounded-2xl shadow-sm border border-base-content p-8'>
            <div className='prose prose-neutral max-w-none text-neutral-content/90'>
              <p className='text-neutral-content/80 leading-relaxed mb-6'>
                This Privacy Policy describes Our policies and procedures on the collection, use and
                disclosure of Your information when You use the Service and tells You about Your
                privacy rights and how the law protects You.
              </p>
              <p className='text-neutral-content/80 leading-relaxed mb-6'>
                We use Your Personal data to provide and improve the Service. By using the Service,
                You agree to the collection and use of information in accordance with this Privacy
                Policy.
              </p>
            </div>
          </section>

          <section className='bg-base-100 rounded-2xl shadow-sm border border-base-content p-8'>
            <h2 className='text-2xl font-bold text-neutral-content mb-8'>
              Interpretation and Definitions
            </h2>

            <h3 className='text-2xl font-bold text-neutral-content'>Interpretation</h3>
            <p className='text-neutral-content/80 leading-relaxed mb-6'>
              The words of which the initial letter is capitalized have meanings defined under the
              following conditions. The following definitions shall have the same meaning regardless
              of whether they appear in singular or in plural.
            </p>

            <h3 className='text-2xl font-bold text-neutral-content'>Definitions</h3>
            <ul className='list-disc list-inside text-neutral-content/80 leading-relaxed space-y-2 mb-6 ml-4'>
              <li>
                <b>Account</b> means a unique account created for You to access our Service or parts
                of our Service.
              </li>
              <li>
                <b>Affiliate</b> means an entity that controls, is controlled by or is under common
                control with a party, where "control" means ownership of 50% or more of the shares,
                equity interest or other securities entitled to vote for election of directors or
                other managing authority.
              </li>
              <li>
                <b>Application</b> refers to VentNote, the software program provided by the Company.
              </li>
              <li>
                <b>Company</b> (referred to as either "the Company", "We", "Us" or "Our" in this
                Agreement) refers to VentNote.
              </li>
              <li>
                <b>Country</b> refers to: Indonesia
              </li>
              <li>
                <b>Device</b> means any device that can access the Service such as a computer, a
                cellphone or a digital tablet.
              </li>
              <li>
                <b>Personal Data</b> is any information that relates to an identified or
                identifiable individual.
              </li>
              <li>
                <b>Service</b> refers to the Application.
              </li>
              <li>
                <b>Service Provider</b> means any natural or legal person who processes the data on
                behalf of the Company. It refers to third-party companies or individuals employed by
                the Company to facilitate the Service, to provide the Service on behalf of the
                Company, to perform services related to the Service or to assist the Company in
                analyzing how the Service is used.
              </li>
              <li>
                <b>Usage Data</b> refers to data collected automatically, either generated by the
                use of the Service or from the Service infrastructure itself (for example, the
                duration of a page visit).
              </li>
              <li>
                <b>You</b> means the individual accessing or using the Service, or the company, or
                other legal entity on behalf of which such individual is accessing or using the
                Service, as applicable.
              </li>
            </ul>
          </section>

          <section className='bg-base-100 rounded-2xl shadow-sm border border-base-content p-8'>
            <h2 className='text-2xl font-bold text-neutral-content mb-4'>
              Collecting and Using Your Personal Data
            </h2>
            <h3 className='text-2xl font-bold text-neutral-content mb-8'>
              Types of Data Collected
            </h3>

            <h4 className='text-xl font-bold text-neutral-content'>Personal Data</h4>
            <p className='text-neutral-content/80 leading-relaxed mb-6'>
              While using Our Service, We may ask You to provide Us with certain personally
              identifiable information that can be used to contact or identify You. Personally
              identifiable information may include, but is not limited to: Usage Data
            </p>

            <h4 className='text-xl font-bold text-neutral-content'>Usage Data</h4>
            <p className='text-neutral-content/80 leading-relaxed mb-6'>
              Usage Data is collected automatically when using the Service. Usage Data may include
              information such as Your Device's Internet Protocol address (e.g. IP address), browser
              type, browser version, the pages of our Service that You visit, the time and date of
              Your visit, the time spent on those pages, unique device identifiers and other
              diagnostic data.
            </p>
            <p className='text-neutral-content/80 leading-relaxed mb-6'>
              When You access the Service by or through a mobile device, We may collect certain
              information automatically, including, but not limited to, the type of mobile device
              You use, Your mobile device unique ID, the IP address of Your mobile device, Your
              mobile operating system, the type of mobile Internet browser You use, unique device
              identifiers and other diagnostic data.
            </p>
          </section>

          <section className='bg-base-100 rounded-2xl shadow-sm border border-base-content p-8'>
            <h3 className='text-2xl font-bold text-neutral-content'>Use of Your Personal Data</h3>
            <ul className='list-disc list-inside text-neutral-content/80 leading-relaxed space-y-2 mb-6 ml-4'>
              <li>
                To provide and maintain our Service, including to monitor the usage of our Service.
              </li>
              <li>To manage Your Account: to manage Your registration as a user of the Service.</li>
              <li>
                For the performance of a contract: the development, compliance and undertaking of
                the purchase contract for the products, items or services You have purchased or of
                any other contract with Us through the Service.
              </li>
              <li>
                To contact You: To contact You by email, telephone calls, SMS, or other equivalent
                forms of electronic communication, such as a mobile application's push notifications
                regarding updates or informative communications related to the functionalities,
                products or contracted services, including the security updates, when necessary or
                reasonable for their implementation.
              </li>
              <li>
                To provide You with news, special offers and general information about other goods,
                services and events which we offer that are similar to those that you have already
                purchased or enquired about unless You have opted not to receive such information.
              </li>
              <li>To manage Your requests: To attend and manage Your requests to Us.</li>
              <li>
                For business transfers: We may use Your information to evaluate or conduct a merger,
                divestiture, restructuring, reorganization, dissolution, or other sale or transfer
                of some or all of Our assets, whether as a going concern or as part of bankruptcy,
                liquidation, or similar proceeding, in which Personal Data held by Us about our
                Service users is among the assets transferred.
              </li>
              <li>
                For other purposes: We may use Your information for other purposes, such as data
                analysis, identifying usage trends, determining the effectiveness of our promotional
                campaigns and to evaluate and improve our Service, products, services, marketing and
                your experience.
              </li>
            </ul>
          </section>

          <section className='bg-base-100 rounded-2xl shadow-sm border border-base-content p-8'>
            <h3 className='text-2xl font-bold text-neutral-content'>Sharing Your Personal Data</h3>
            <ul className='list-disc list-inside text-neutral-content/80 leading-relaxed space-y-2 mb-6 ml-4'>
              <li>
                With Service Providers: We may share Your personal information with Service
                Providers to monitor and analyze the use of our Service, to contact You.
              </li>
              <li>
                For business transfers: We may share or transfer Your personal information in
                connection with, or during negotiations of, any merger, sale of Company assets,
                financing, or acquisition of all or a portion of Our business to another company.
              </li>
              <li>
                With Affiliates: We may share Your information with Our affiliates, in which case we
                will require those affiliates to honor this Privacy Policy. Affiliates include Our
                parent company and any other subsidiaries, joint venture partners or other companies
                that We control or that are under common control with Us.
              </li>
              <li>
                With business partners: We may share Your information with Our business partners to
                offer You certain products, services or promotions.
              </li>
              <li>
                With other users: when You share personal information or otherwise interact in the
                public areas with other users, such information may be viewed by all users and may
                be publicly distributed outside.
              </li>
              <li>
                With Your consent: We may disclose Your personal information for any other purpose
                with Your consent.
              </li>
            </ul>
          </section>

          <section className='bg-base-100 rounded-2xl shadow-sm border border-base-content p-8'>
            <h3 className='text-2xl font-bold text-neutral-content'>
              Retention of Your Personal Data
            </h3>
            <p className='text-neutral-content/80 leading-relaxed mb-6'>
              The Company will retain Your Personal Data only for as long as is necessary for the
              purposes set out in this Privacy Policy. We will retain and use Your Personal Data to
              the extent necessary to comply with our legal obligations (for example, if we are
              required to retain your data to comply with applicable laws), resolve disputes, and
              enforce our legal agreements and policies.
            </p>
            <p className='text-neutral-content/80 leading-relaxed mb-6'>
              The Company will also retain Usage Data for internal analysis purposes. Usage Data is
              generally retained for a shorter period of time, except when this data is used to
              strengthen the security or to improve the functionality of Our Service, or We are
              legally obligated to retain this data for longer time periods.
            </p>
          </section>

          <section className='bg-base-100 rounded-2xl shadow-sm border border-base-content p-8'>
            <h3 className='text-2xl font-bold text-neutral-content'>
              Transfer of Your Personal Data
            </h3>
            <p className='text-neutral-content/80 leading-relaxed mb-6'>
              Your information, including Personal Data, is processed at the Company's operating
              offices and in any other places where the parties involved in the processing are
              located. It means that this information may be transferred to — and maintained on —
              computers located outside of Your state, province, country or other governmental
              jurisdiction where the data protection laws may differ than those from Your
              jurisdiction.
            </p>
            <p className='text-neutral-content/80 leading-relaxed mb-6'>
              Your consent to this Privacy Policy followed by Your submission of such information
              represents Your agreement to that transfer.
            </p>
            <p className='text-neutral-content/80 leading-relaxed mb-6'>
              The Company will take all steps reasonably necessary to ensure that Your data is
              treated securely and in accordance with this Privacy Policy and no transfer of Your
              Personal Data will take place to an organization or a country unless there are
              adequate controls in place including the security of Your data and other personal
              information.
            </p>
          </section>

          <section className='bg-base-100 rounded-2xl shadow-sm border border-base-content p-8'>
            <h3 className='text-2xl font-bold text-neutral-content'>Delete Your Personal Data</h3>
            <p className='text-neutral-content/80 leading-relaxed mb-6'>
              You have the right to delete or request that We assist in deleting the Personal Data
              that We have collected about You.
            </p>
            <p className='text-neutral-content/80 leading-relaxed mb-6'>
              Our Service may give You the ability to delete certain information about You from
              within the Service.
            </p>
            <p className='text-neutral-content/80 leading-relaxed mb-6'>
              You may update, amend, or delete Your information at any time by signing in to Your
              Account, if you have one, and visiting the account settings section that allows you to
              manage Your personal information. You may also contact Us to request access to,
              correct, or delete any personal information that You have provided to Us.
            </p>
            <p className='text-neutral-content/80 leading-relaxed mb-6'>
              Please note, however, that We may need to retain certain information when we have a
              legal obligation or lawful basis to do so.
            </p>
          </section>

          <section className='bg-base-100 rounded-2xl shadow-sm border border-base-content p-8'>
            <h3 className='text-2xl font-bold text-neutral-content'>
              Disclosure of Your Personal Data
            </h3>
            <ul className='list-disc list-inside text-neutral-content/80 leading-relaxed space-y-2 mb-6 ml-4'>
              <li>
                Business Transactions: If the Company is involved in a merger, acquisition or asset
                sale, Your Personal Data may be transferred. We will provide notice before Your
                Personal Data is transferred and becomes subject to a different Privacy Policy.
              </li>
              <li>
                Law enforcement: Under certain circumstances, the Company may be required to
                disclose Your Personal Data if required to do so by law or in response to valid
                requests by public authorities (e.g. a court or a government agency).
              </li>
              <li>
                Other legal requirements: The Company may disclose Your Personal Data in the good
                faith belief that such action is necessary to:
                <ul className='list-disc list-inside text-neutral-content/80 leading-relaxed space-y-2 mb-6 ml-4'>
                  <li>Comply with a legal obligation</li>
                  <li>Protect and defend the rights or property of the Company</li>
                  <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                  <li>Protect the personal safety of Users of the Service or the public</li>
                  <li>Protect against legal liability</li>
                </ul>
              </li>
            </ul>
          </section>

          <section className='bg-base-100 rounded-2xl shadow-sm border border-base-content p-8'>
            <h3 className='text-2xl font-bold text-neutral-content'>
              Security of Your Personal Data
            </h3>
            <p className='text-neutral-content/80 leading-relaxed mb-6'>
              The security of Your Personal Data is important to Us, but remember that no method of
              transmission over the Internet, or method of electronic storage is 100% secure. While
              We strive to use commercially acceptable means to protect Your Personal Data, We
              cannot guarantee its absolute security.
            </p>
          </section>

          <section className='bg-base-100 rounded-2xl shadow-sm border border-base-content p-8'>
            <h3 className='text-2xl font-bold text-neutral-content'>Children's Privacy</h3>
            <p className='text-neutral-content/80 leading-relaxed mb-6'>
              Our Service does not address anyone under the age of 13. We do not knowingly collect
              personally identifiable information from anyone under the age of 13. If You are a
              parent or guardian and You are aware that Your child has provided Us with Personal
              Data, please contact Us. If We become aware that We have collected Personal Data from
              anyone under the age of 13 without verification of parental consent, We take steps to
              remove that information from Our servers.
            </p>
            <p className='text-neutral-content/80 leading-relaxed mb-6'>
              If We need to rely on consent as a legal basis for processing Your information and
              Your country requires consent from a parent, We may require Your parent's consent
              before We collect and use that information.
            </p>
          </section>

          <section className='bg-base-100 rounded-2xl shadow-sm border border-base-content p-8'>
            <h3 className='text-2xl font-bold text-neutral-content'>Links to Other Websites</h3>
            <p className='text-neutral-content/80 leading-relaxed mb-6'>
              Our Service may contain links to other websites that are not operated by Us. If You
              click on a third party link, You will be directed to that third party's site. We
              strongly advise You to review the Privacy Policy of every site You visit.
            </p>
            <p className='text-neutral-content/80 leading-relaxed mb-6'>
              We have no control over and assume no responsibility for the content, privacy policies
              or practices of any third party sites or services.
            </p>
          </section>

          <section className='bg-base-100 rounded-2xl shadow-sm border border-base-content p-8'>
            <h3 className='text-2xl font-bold text-neutral-content'>
              Changes to this Privacy Policy
            </h3>
            <p className='text-neutral-content/80 leading-relaxed mb-6'>
              We may update Our Privacy Policy from time to time. We will notify You of any changes
              by posting the new Privacy Policy on this page.
            </p>
            <p className='text-neutral-content/80 leading-relaxed mb-6'>
              We will let You know via email and/or a prominent notice on Our Service, prior to the
              change becoming effective and update the "Last updated" date at the top of this
              Privacy Policy.
            </p>
            <p className='text-neutral-content/80 leading-relaxed mb-6'>
              You are advised to review this Privacy Policy periodically for any changes. Changes to
              this Privacy Policy are effective when they are posted on this page.
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
            If you have any questions or suggestions about our Privacy Policy, do not hesitate to
            contact us at mosmatter1@gmail.com.
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

export default OauthPage
