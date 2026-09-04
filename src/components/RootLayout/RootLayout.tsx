import ScrollToTop from '@/components/ScrollToTop/ScrollToTop'
import MetaTagController from '@/components/MetaTagController/MetaTagController'

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <main>
    <MetaTagController />
    <ScrollToTop />
    {children}
  </main>
)

export default RootLayout
