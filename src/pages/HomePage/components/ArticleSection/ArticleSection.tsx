import { useNavigate } from 'react-router-dom'
import { IoArrowForward } from 'react-icons/io5'
import articlesDataRaw from '../../../../data/articles.json'
import { Article } from '@/model/article'
import { RouteName } from '@/constants/RouteName'
import ArticleItem from '@/pages/ArticlesPage/components/ArticleItem/ArticleItem'

const ArticleSection = () => {
  const navigate = useNavigate()

  const displayedArticles = (articlesDataRaw as Article[]).filter((a) => a.featured).slice(0, 3)

  return (
    <section
      className='w-full max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 border-t border-base-content/10'
      id='articles-section'
    >
      {/* Section Header */}
      <div className='flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10'>
        <div>
          <span className='text-xs font-semibold tracking-wider text-primary uppercase mb-2 block'>
            Written Insights
          </span>
          <h2 className='text-3xl sm:text-4xl font-bold font-display text-neutral-content tracking-tight'>
            Featured Articles
          </h2>
        </div>

        <button
          onClick={() => navigate(RouteName.ARTICLES)}
          className='inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-focus transition-colors group'
        >
          <span>Read all {articlesDataRaw.length} articles</span>
          <IoArrowForward size={16} className='group-hover:translate-x-1 transition-transform' />
        </button>
      </div>

      {/* Articles List */}
      <div className='flex flex-col gap-4'>
        {displayedArticles.map((item) => (
          <ArticleItem key={item.id} article={item} />
        ))}
      </div>
    </section>
  )
}

export default ArticleSection
