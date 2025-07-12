import { RouteName } from '@/constants/RouteName'
import articlesDataRaw from '../../../../data/articles.json'
import { Article } from '@/model/article'
import { Link, useNavigate } from 'react-router-dom'

const ArticleSection = () => {
  const navigate = useNavigate()
  const displayedArticles = (articlesDataRaw as Article[]).filter((a) => a.featured).slice(0, 3)

  return (
    <section
      className='flex flex-col items-center px-8 md:px-12 lg:px-20 mt-16 mb-32'
      id='articles-section'
    >
      <div className='w-full max-w-6xl'>
        <h2 className='text-3xl md:text-4xl font-bold text-neutral-content text-center'>
          Featured <span className='text-primary'>Articles</span>
        </h2>
        <p className='text-base md:text-lg mt-4 text-center text-neutral-content/80'>
          A selection of my latest and most impactful writings on software development, technology,
          and best practices.
        </p>
      </div>

      {/* <div className="w-full max-w-6xl mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedArticles.map((article, index) => (
            <div
              key={`${article.id}-${index}`}
              className="card card-compact w-full h-80 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-base-200"
            >
              <figure className="h-48">
                <img
                  alt={article.title}
                  src={article.banner}
                  className="rounded-t-lg w-full h-full border object-cover"
                />
              </figure>
              <div className="card-body flex flex-col h-[calc(100%-12rem)]">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg md:text-xl font-bold text-neutral-content line-clamp-2">
                    {article.title}
                  </h3>
                </div>
                <p className="text-base md:text-lg line-clamp-2 text-neutral-content/80 mt-2">
                  {article.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {article.tags?.slice(0, 3).map((tag) => (
                    <span key={tag} className="badge badge-outline text-xs px-2 py-1">
                      {tag}
                    </span>
                  ))}
                  {article.readTime && (
                    <span className="badge badge-ghost text-xs px-2 py-1">
                      {article.readTime}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* <div className="mt-12">
        <button
          className="btn btn-outline text-neutral-content px-8 text-base md:text-lg capitalize"
          onClick={() => navigate('/articles')}
        >
          {'See more articles'}
        </button>
      </div> */}

      <div className='w-full max-w-6xl mt-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {displayedArticles.map((item, index) => {
            if (item.featured) {
              return (
                <Link
                  to={item.path}
                  key={`${item.id}-${index}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='card card-compact w-full h-80 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'
                >
                  <figure className='h-48'>
                    <img
                      alt={item.title}
                      src={item.banner}
                      className='rounded-t-lg w-full h-full border object-cover'
                    />
                  </figure>
                  <div className='px-5 py-4'>
                    {/* <div className='flex flex-row mt-2 mb-3 space-x-3 items-center'>
                      {item.stacks.map((stack, index) => {
                        return <div key={index}>{iconMapper[stack]}</div>
                      })}
                    </div> */}
                    <h3 className='text-lg font-semibold text-neutral-content line-clamp-2'>
                      {item.title}
                    </h3>
                    <p className='text-base line-clamp-2 text-neutral-content/80 mt-2'>
                      {item.shortDescription}
                    </p>
                  </div>
                </Link>
              )
            }
          })}
        </div>
      </div>

      <div className='mt-12'>
        <button
          className='btn btn-outline text-neutral-content px-8 text-base md:text-lg capitalize'
          onClick={() => navigate(RouteName.ARTICLES)}
        >
          {'See more projects'}
        </button>
      </div>
    </section>
  )
}

export default ArticleSection
