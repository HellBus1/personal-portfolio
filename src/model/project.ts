import { CreatedAt } from './createdAt'

export interface Project {
  id: string
  name: string
  shortDescription: string
  banner: string
  project_link: string
  path: string
  createdAt: CreatedAt
  stacks: string[]
  featured?: boolean
  year?: string
  platform?: string
}
