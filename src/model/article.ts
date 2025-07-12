import { CreatedAt } from './createdAt'

export interface Article {
  id: string
  title: string
  shortDescription: string
  banner: string
  path: string
  createdAt: CreatedAt
  tags: string[]
  category: string
  readTime: string
  year: string
  featured: boolean
  author: string
  publishedDate: number
}
