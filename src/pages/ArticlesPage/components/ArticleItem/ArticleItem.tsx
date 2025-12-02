import { Article } from '@/model/article'
import { Link } from 'react-router-dom'

interface ArticleItemProps {
  article: Article
}

const ArticleItem = ({ article }: ArticleItemProps) => {
  return (
    <Link
      to={article.path}
      target='_blank'
      rel='noopener noreferrer'
      className='card card-side bg-base-200 hover:bg-base-300 transition-all duration-300 rounded-xl p-4 md:p-6 gap-4 md:gap-6 items-start hover:shadow-lg group'
    >
      <figure className='w-32 h-24 md:w-40 md:h-32 rounded-lg overflow-hidden bg-base-300 flex-shrink-0 relative'>
        <img
          src={article.banner}
          alt={article.title}
          className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
          loading='lazy'
        />
        {article.featured && (
          <span className='absolute top-2 right-2 badge badge-primary badge-sm'>Featured</span>
        )}
      </figure>
      <div className='flex flex-col flex-1 min-w-0'>
        <div className='flex flex-wrap gap-2 mb-3'>
          {article.category && (
            <span className='badge badge-primary text-xs px-2 py-1'>{article.category}</span>
          )}
          {article.tags?.slice(0, 2).map((tag) => (
            <span key={tag} className='badge badge-outline text-xs px-2 py-1'>
              {tag}
            </span>
          ))}
        </div>
        <h3 className='text-base md:text-lg font-bold text-neutral-content group-hover:text-primary transition line-clamp-2 mb-2'>
          {article.title}
        </h3>
        <p className='text-sm md:text-base text-neutral-content/80 mb-3 line-clamp-2'>
          {article.shortDescription}
        </p>
        <div className='flex flex-wrap items-center gap-2 text-xs text-neutral-content/60 mt-auto'>
          <span>By {article.author}</span>
          {article.readTime && (
            <>
              <span>•</span>
              <span>📖 {article.readTime}</span>
            </>
          )}
        </div>
      </div>
    </Link>
  )
}

export default ArticleItem
