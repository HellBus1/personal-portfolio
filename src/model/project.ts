export interface CreatedAt {
  seconds: number
  nanoseconds: number
}

export interface Project {
  id: string
  name: string
  shortDescription: string
  banner: string
  path: string
  createdAt: CreatedAt
  stacks: string[]
  featured?: boolean
  year?: string
  platform?: string
}
