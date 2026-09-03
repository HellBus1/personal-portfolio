import { Article } from '@/model/article'
import { Link } from 'react-router-dom'
import { IoTimeOutline, IoArrowForward } from 'react-icons/io5'

interface ArticleItemProps {
  article: Article
}

const ArticleItem = ({ article }: ArticleItemProps) => {
  return (
    <Link
      to={article.path}
      target='_blank'
      rel='noopener noreferrer'
      className='card-clean group flex flex-col sm:flex-row p-4 sm:p-5 gap-4 sm:gap-6 items-start overflow-hidden'
    >
      {/* Banner Thumbnail */}
      <div className='w-full sm:w-44 h-36 sm:h-32 rounded-lg overflow-hidden bg-base-300 flex-shrink-0 relative border border-base-content/10'>
        <img
          src={article.banner}
          alt={article.title}
          className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
          loading='lazy'
        />
        {article.featured && (
          <span className='absolute top-2 left-2 px-2 py-0.5 rounded text-[11px] font-semibold bg-primary text-primary-content shadow-sm'>
            Featured
          </span>
        )}
      </div>

      {/* Details */}
      <div className='flex flex-col flex-1 min-w-0 w-full'>
        {/* Category & Tags */}
        <div className='flex flex-wrap items-center gap-2 mb-2'>
          {article.category && (
            <span className='px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20'>
              {article.category}
            </span>
          )}
          {article.tags?.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className='px-2 py-0.5 rounded-md text-[11px] font-medium bg-base-300/80 text-base-content/80 border border-base-content/10'
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className='text-base sm:text-lg font-bold text-neutral-content group-hover:text-primary transition-colors line-clamp-2 mb-2 leading-snug'>
          {article.title}
        </h3>

        {/* Short description if available */}
        {article.shortDescription && (
          <p className='text-xs sm:text-sm text-base-content/80 line-clamp-2 mb-3 leading-relaxed'>
            {article.shortDescription}
          </p>
        )}

        {/* Metadata Footer */}
        <div className='flex items-center justify-between mt-auto pt-2 text-xs text-base-content/60 border-t border-base-content/5'>
          <div className='flex items-center gap-3'>
            <span>{article.author || 'Syubban Fakhriya'}</span>
            {article.readTime && (
              <span className='flex items-center gap-1 text-base-content/50'>
                <IoTimeOutline size={13} />
                <span>{article.readTime}</span>
              </span>
            )}
          </div>

          <span className='inline-flex items-center gap-1 text-primary font-semibold group-hover:translate-x-0.5 transition-transform'>
            <span>Read</span>
            <IoArrowForward size={13} />
          </span>
        </div>
      </div>
    </Link>
  )
}

export default ArticleItem
