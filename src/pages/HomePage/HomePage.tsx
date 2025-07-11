import RootLayout from '@/components/RootLayout/RootLayout'
import OverviewSection from './components/OverviewSection/OverviewSection'
import ProjectSection from './components/ProjectSection/ProjectSection'

const HomePage = () => {
  return (
    <RootLayout>
      <OverviewSection />
      <ProjectSection />
    </RootLayout>
  )
}

export default HomePage
