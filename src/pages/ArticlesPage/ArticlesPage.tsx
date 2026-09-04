import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import articlesDataRaw from '../../data/articles.json'
import { Article } from '@/model/article'
import RootLayout from '@/components/RootLayout/RootLayout'
import TitleSection from './components/TitleSection/TitleSection'
import ArticleItem from './components/ArticleItem/ArticleItem'
import {
  IoSearchOutline,
  IoPricetagOutline,
  IoFolderOutline,
  IoCloseCircleOutline
} from 'react-icons/io5'

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

  const hasActiveFilters = Boolean(search || tag || category)

  const clearFilters = () => {
    setSearch('')
    setTag('')
    setCategory('')
  }

  return (
    <RootLayout>
      <div className='w-full max-w-6xl mx-auto px-6 md:px-12 pt-28 pb-20 min-h-[75vh] flex flex-col'>
        {/* Breadcrumb */}
        <nav className='flex items-center gap-2 text-xs text-base-content/60 mb-8'>
          <Link to='/' className='hover:text-primary transition-colors'>
            Home
          </Link>
          <span>/</span>
          <span className='text-neutral-content font-semibold'>Articles</span>
        </nav>

        <TitleSection />

        {/* Filters bar */}
        <div className='bg-base-200/60 border border-base-content/10 rounded-xl p-3.5 mb-8'>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
            {/* Search */}
            <div className='relative sm:col-span-1'>
              <IoSearchOutline
                className='absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50 pointer-events-none'
                size={16}
              />
              <input
                type='text'
                placeholder='Search articles...'
                className='w-full h-10 pl-9 pr-3 rounded-lg bg-base-100 border border-base-content/15 text-sm text-neutral-content placeholder:text-base-content/40 focus:outline-none focus:border-primary transition-colors'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label='Search articles'
              />
            </div>

            {/* Category Select */}
            <div className='relative'>
              <IoFolderOutline
                className='absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50 pointer-events-none'
                size={16}
              />
              <select
                className='w-full h-10 pl-9 pr-8 rounded-lg bg-base-100 border border-base-content/15 text-sm text-neutral-content focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer'
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

            {/* Tag Select */}
            <div className='relative'>
              <IoPricetagOutline
                className='absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50 pointer-events-none'
                size={16}
              />
              <select
                className='w-full h-10 pl-9 pr-8 rounded-lg bg-base-100 border border-base-content/15 text-sm text-neutral-content focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer'
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                aria-label='Filter by tag'
              >
                <option value=''>All Tags</option>
                {tags.map((t) => (
                  <option key={t} value={t}>
                    #{t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results count and clear filters */}
          <div className='flex items-center justify-between pt-3 mt-3 border-t border-base-content/10 text-xs text-base-content/70'>
            <span>
              Showing <strong className='text-neutral-content'>{filteredArticles.length}</strong>{' '}
              {filteredArticles.length === 1 ? 'article' : 'articles'}
            </span>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className='inline-flex items-center gap-1 text-primary hover:underline font-semibold'
              >
                <IoCloseCircleOutline size={14} />
                <span>Reset filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Articles List */}
        <div className='flex flex-col gap-4'>
          {filteredArticles.length === 0 ? (
            <div className='card-clean p-12 text-center flex flex-col items-center justify-center gap-3 min-h-[260px]'>
              <IoSearchOutline size={36} className='text-base-content/40' />
              <h3 className='text-base font-bold text-neutral-content'>No articles found</h3>
              <p className='text-xs text-base-content/70 max-w-sm'>
                Try adjusting your search query or selecting a different category.
              </p>
              {hasActiveFilters && (
                <button onClick={clearFilters} className='btn-secondary-custom text-xs mt-2'>
                  Clear filters
                </button>
              )}
            </div>
          ) : (
            filteredArticles.map((article) => <ArticleItem key={article.id} article={article} />)
          )}
        </div>
      </div>
    </RootLayout>
  )
}

export default ArticlesPage
