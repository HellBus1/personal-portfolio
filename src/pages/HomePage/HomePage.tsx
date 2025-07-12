import RootLayout from '@/components/RootLayout/RootLayout'
import OverviewSection from './components/OverviewSection/OverviewSection'
import ProjectSection from './components/ProjectSection/ProjectSection'
import ArticleSection from './components/ArticleSection/ArticleSection'

const HomePage = () => {
  return (
    <RootLayout>
      <OverviewSection />
      <ProjectSection />
      <div className='my-32' />
      <ArticleSection />
    </RootLayout>
  )
}

export default HomePage
