import ScrollToTop from '@/components/ScrollToTop/ScrollToTop'

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <main>
    <ScrollToTop />
    {children}
  </main>
)

export default RootLayout
