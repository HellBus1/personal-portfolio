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
          Some of my articles on software development, technology, and best practices.
        </p>
      </div>

      <div className='w-full max-w-6xl mt-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {displayedArticles.map((item, index) => (
            <Link
              to={item.path}
              key={`${item.id}-${index}`}
              target='_blank'
              rel='noopener noreferrer'
              className='card card-compact w-full h-80 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-base-200 flex flex-col'
              style={{ minHeight: 320, height: '100%' }}
            >
              <figure className='h-48'>
                <img
                  alt={item.title}
                  src={item.banner}
                  className='rounded-t-lg w-full h-full border object-cover'
                />
              </figure>
              <div className='card-body flex flex-col justify-between flex-1 px-5 py-4'>
                <div>
                  <h3 className='text-lg font-semibold text-neutral-content line-clamp-2'>
                    {item.title}
                  </h3>
                  <p className='text-base text-neutral-content/80 mt-2 line-clamp-2'>
                    {item.shortDescription}
                  </p>
                </div>
                <div>
                  <div className='flex flex-col mt-2'>
                    <div className='flex flex-wrap gap-2'>
                      {item.tags?.slice(0, 3).map((tag) => (
                        <span key={tag} className='badge badge-outline text-xs px-2 py-1'>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className='mt-4'>
                      {item.readTime && <span className='text text-xs'>{item.readTime}</span>}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className='mt-12'>
        <button
          className='btn btn-outline text-neutral-content px-8 text-base md:text-lg capitalize'
          onClick={() => navigate(RouteName.ARTICLES)}
        >
          {'See more articles'}
        </button>
      </div>
    </section>
  )
}

export default ArticleSection
