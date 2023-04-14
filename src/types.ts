export interface TodoFromApi {
  id: number
  title: string
  description: string
  completed: boolean
  created_at: string
  updated_at: string
}

export interface Todo {
  id: number
  title: string
  description: string
  completed: boolean
  createdAt: string
  updatedAt: string
}
