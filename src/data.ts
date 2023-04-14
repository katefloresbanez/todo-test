import { type TodoFromApi, type Todo } from './types'

const date = new Date()

export const mockTodoList = [
  {
    id: Math.floor(Math.random() * 9999),
    title: 'Test Todo 1',
    description: 'something something something something something something something something',
    completed: false,
    created_at: date.toDateString(),
    updated_at: ''
  },
  {
    id: Math.floor(Math.random() * 9999),
    title: 'Test Todo 2',
    description: 'something something',
    completed: false,
    created_at: date.toDateString(),
    updated_at: ''
  },
  {
    id: Math.floor(Math.random() * 9999),
    title: 'Test Todo 3',
    description: 'something something',
    completed: false,
    created_at: date.toDateString(),
    updated_at: ''
  }
]

export const normalizeTodoList = (list: TodoFromApi[]): Todo[] => {
  return list.map(todo => ({
    id: todo.id,
    title: todo.title,
    description: todo.description,
    completed: todo.completed,
    createdAt: todo.created_at,
    updatedAt: todo.updated_at
  })).sort((a: Todo, b: Todo) => {
    const dateA = new Date(a.createdAt)
    const dateB = new Date(b.createdAt)
    return dateB - dateA
  })
}
