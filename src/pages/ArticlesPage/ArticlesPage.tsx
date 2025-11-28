import { useState, useMemo } from 'react'
import { useLocation, Link } from 'react-router-dom'
import articlesDataRaw from '../../data/articles.json'
import { Article } from '@/model/article'
import RootLayout from '@/components/RootLayout/RootLayout'
import TitleSection from './components/TitleSection/TitleSection'
import ArticleItem from './components/ArticleItem/ArticleItem'
import { IoSearchSharp, IoPricetagSharp, IoFolderSharp, IoCloseCircle } from 'react-icons/io5'

const getAllTags = (articles: Article[]) =>
  Array.from(new Set(articles.flatMap((a) => a.tags).filter(Boolean)))

const getAllCategories = (articles: Article[]) =>
  Array.from(new Set(articles.map((a) => a.category).filter(Boolean)))

const ArticlesPage = () => {
  const articles = articlesDataRaw as Article[]

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

  const hasActiveFilters = search || tag || category

  const clearFilters = () => {
    setSearch('')
    setTag('')
    setCategory('')
  }

  // Breadcrumbs logic
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  return (
    <RootLayout>
      <div className='w-full max-w-6xl mx-auto px-8 md:px-12 lg:px-20 pb-16 pt-24 min-h-[70vh] flex flex-col'>
        <div className='text-sm mb-12'>
          <div className='breadcrumbs'>
            <ul>
              <li>
                <Link to='/' className='link link-hover'>
                  Home
                </Link>
              </li>
              {pathnames.map((value, idx) => {
                const to = '/' + pathnames.slice(0, idx + 1).join('/')
                const isLast = idx === pathnames.length - 1
                return (
                  <li key={to}>
                    {isLast ? (
                      <span className='font-semibold'>
                        {value.charAt(0).toUpperCase() + value.slice(1)}
                      </span>
                    ) : (
                      <Link to={to} className='link link-hover'>
                        {value.charAt(0).toUpperCase() + value.slice(1)}
                      </Link>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <TitleSection />

        {/* Filters */}
        <div className='flex flex-col gap-4 mb-6 w-full'>
          <div className='flex flex-col md:flex-row gap-4'>
            {/* Search */}
            <div className='relative w-full md:flex-1'>
              <IoSearchSharp
                className='absolute left-3 top-1/2 -translate-y-1/2 text-neutral-content/50'
                size={20}
              />
              <input
                type='text'
                placeholder='Search articles...'
                className='input input-bordered w-full pl-10'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label='Search articles'
              />
            </div>

            {/* Tag Filter */}
            <div className='relative w-full md:w-48'>
              <IoPricetagSharp
                className='absolute left-3 top-1/2 -translate-y-1/2 text-neutral-content/50 pointer-events-none z-10'
                size={18}
              />
              <select
                className='select select-bordered w-full pl-10'
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
            </div>

            {/* Category Filter */}
            <div className='relative w-full md:w-48'>
              <IoFolderSharp
                className='absolute left-3 top-1/2 -translate-y-1/2 text-neutral-content/50 pointer-events-none z-10'
                size={18}
              />
              <select
                className='select select-bordered w-full pl-10'
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
          </div>

          {/* Results count and clear filters */}
          <div className='flex items-center justify-between'>
            <span className='text-sm text-neutral-content/70'>
              {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'}{' '}
              found
            </span>
            {hasActiveFilters && (
              <button onClick={clearFilters} className='btn btn-ghost btn-sm gap-2'>
                <IoCloseCircle size={18} />
                Clear Filters
              </button>
            )}
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          {filteredArticles.length === 0 && (
            <div className='text-center py-12 min-h-[300px] flex flex-col items-center justify-center gap-4'>
              <IoSearchSharp size={48} className='text-neutral-content/30' />
              <div>
                <p className='text-lg font-semibold text-neutral-content/70 mb-2'>
                  No articles found
                </p>
                <p className='text-sm text-neutral-content/50'>
                  Try adjusting your filters or search term
                </p>
              </div>
              {hasActiveFilters && (
                <button onClick={clearFilters} className='btn btn-primary btn-sm mt-2'>
                  Clear All Filters
                </button>
              )}
            </div>
          )}
          {filteredArticles.map((article, idx) => (
            <div key={article.id}>
              <ArticleItem article={article} />
              {idx !== filteredArticles.length - 1 && <div className='divider my-0' />}
            </div>
          ))}
        </div>
      </div>
    </RootLayout>
  )
}

export default ArticlesPage
