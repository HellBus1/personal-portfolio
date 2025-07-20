import { useState, useMemo } from 'react'
import { useLocation, Link } from 'react-router-dom'
import articlesDataRaw from '../../data/articles.json'
import { Article } from '@/model/article'
import RootLayout from '@/components/RootLayout/RootLayout'
import TitleSection from './components/TitleSection/TitleSection'
import ArticleItem from './components/ArticleItem/ArticleItem'

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

  // Breadcrumbs logic
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  return (
    <RootLayout>
      <div className='w-full max-w-5xl mx-auto px-8 md:px-12 lg:px-20 pb-16 pt-24 min-h-[70vh] flex flex-col'>
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

        <div className='flex flex-col gap-8'>
          {filteredArticles.length === 0 && (
            <div className='text-center text-neutral-content/70 py-12 min-h-[200px] flex items-center justify-center'>
              No articles found.
            </div>
          )}
          {filteredArticles.map((article, idx) => (
            <ArticleItem article={article} isNotLastItem={idx !== filteredArticles.length - 1} />
          ))}
        </div>
      </div>
    </RootLayout>
  )
}

export default ArticlesPage
