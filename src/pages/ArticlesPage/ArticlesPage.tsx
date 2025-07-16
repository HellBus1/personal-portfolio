import { useState, useMemo } from 'react'
import articlesDataRaw from '../../data/articles.json'
import { Article } from '@/model/article'
import RootLayout from '@/components/RootLayout/RootLayout'

const getAllTags = (articles: Article[]) =>
  Array.from(new Set(articles.flatMap((a) => a.tags).filter(Boolean)))

const getAllCategories = (articles: Article[]) =>
  Array.from(new Set(articles.map((a) => a.category).filter(Boolean)))

const ArticlesPage = () => {
  const articles = (articlesDataRaw as Article[]).filter((a) => a.featured)

  const [search, setSearch] = useState('')
  const [tag, setTag] = useState('')
  const [category, setCategory] = useState('')

  const tags = getAllTags(articles)
  const categories = getAllCategories(articles)

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(search.toLowerCase()) ||
        article.shortDescription.toLowerCase().includes(search.toLowerCase())

      const matchesTag = tag ? article.tags.includes(tag) : true
      const matchesCategory = category ? article.category === category : true

      return matchesSearch && matchesTag && matchesCategory
    })
  }, [articles, search, tag, category])

  return (
    <RootLayout>
      <div className='w-full max-w-4xl mx-auto px-4 md:px-8 lg:px-0 pt-32 pb-24 min-h-[70vh]'>
        <h1 className='text-3xl md:text-4xl font-bold mb-2 text-primary drop-shadow-sm tracking-tight'>
          Articles
        </h1>
        <p className='mb-8 text-base md:text-lg text-neutral-content/80 max-w-2xl'>
          Explore my featured articles on software engineering, productivity, and technology.
        </p>
        {/* Filters */}
        <div className='flex flex-col md:flex-row gap-4 mb-8'>
          <input
            type='text'
            placeholder='Search articles...'
            className='input input-bordered w-full md:w-1/2'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label='Search articles'
          />
          <select
            className='select select-bordered w-full md:w-40'
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            aria-label='Filter by tag'
          >
            <option value=''>All Tags</option>
            {tags.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <select
            className='select select-bordered w-full md:w-40'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            aria-label='Filter by category'
          >
            <option value=''>All Categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        {/* Article List */}
        <div className='flex flex-col gap-8'>
          {filteredArticles.length === 0 && (
            <div className='text-center text-neutral-content/70 py-12 min-h-[200px] flex items-center justify-center'>
              No articles found.
            </div>
          )}
          {filteredArticles.map((article) => (
            <a
              key={article.id}
              href={article.path}
              target='_blank'
              rel='noopener noreferrer'
              className='flex gap-6 group border-b border-base-300 pb-8 hover:bg-base-100 transition rounded-lg'
            >
              <div className='flex-shrink-0 w-36 h-28 rounded-lg overflow-hidden bg-base-200 border'>
                <img
                  src={article.banner}
                  alt={article.title}
                  className='w-full h-full object-cover transition group-hover:scale-105'
                  loading='lazy'
                />
              </div>
              <div className='flex flex-col flex-1'>
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
                <h2 className='text-lg md:text-xl font-bold text-neutral-content group-hover:text-primary transition line-clamp-2'>
                  {article.title}
                </h2>
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
            </a>
          ))}
        </div>
      </div>
    </RootLayout>
  )
}

export default ArticlesPage
