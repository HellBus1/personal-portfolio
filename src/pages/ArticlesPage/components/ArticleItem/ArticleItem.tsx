import { Article } from '@/model/article'

interface ArticleItemProps {
  article: Article
  isNotLastItem?: boolean
}

const ArticleItem = (props: ArticleItemProps) => {
  const { article, isNotLastItem } = props

  return (
    <div key={article.id}>
      <div className='card card-side bg-base-100 hover:bg-base-200 transition rounded-lg p-4 gap-6 items-center'>
        <figure className='w-36 h-28 rounded-lg overflow-hidden bg-base-200 border flex-shrink-0'>
          <img
            src={article.banner}
            alt={article.title}
            className='w-full h-full object-cover transition group-hover:scale-105'
            loading='lazy'
          />
        </figure>
        <div className='card-body p-0 flex flex-col flex-1'>
          <div className='flex flex-wrap gap-2 mb-2'>
            <span className='badge badge-primary text-xs'>{article.category}</span>
            {article.tags.slice(0, 3).map((tag) => (
              <span key={tag} className='badge badge-outline text-xs'>
                {tag}
              </span>
            ))}
            <span className='badge badge-ghost text-xs'>{article.readTime}</span>
            <span className='badge badge-ghost text-xs'>{article.year}</span>
          </div>
          <a
            href={article.path}
            target='_blank'
            rel='noopener noreferrer'
            className='text-lg md:text-xl font-bold text-neutral-content hover:text-primary transition line-clamp-2'
          >
            {article.title}
          </a>
          <p className='text-sm md:text-base text-neutral-content/80 mt-1 line-clamp-2'>
            {article.shortDescription || 'No description provided.'}
          </p>
          <div className='flex items-center gap-2 mt-3 text-xs text-neutral-content/60'>
            <span>By {article.author}</span>
            <span>•</span>
            <span>
              {new Date(article.publishedDate).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </span>
          </div>
        </div>
      </div>
      {isNotLastItem && <div className='divider my-0' />}
    </div>
  )
}

export default ArticleItem
