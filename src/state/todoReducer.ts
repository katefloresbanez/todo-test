import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Todo } from '../types'
import type { RootState } from './store'
import { mockTodoList, normalizeTodoList } from '../data'

interface TodoState {
  list: Todo[]
  selected: Todo
}

const initialState: TodoState = {
  list: normalizeTodoList(mockTodoList),
  selected: {
    id: 0,
    title: '',
    description: '',
    completed: false,
    createdAt: '',
    updatedAt: ''
  }
}
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.list.push(action.payload)
    },
    selectTodo: (state, action: PayloadAction<Todo>) => {
      state.selected = action.payload
    }
  }
})

// Selectors
export const getTodoList = (state: RootState): Todo[] => state.todolist.list
export const getSelectedTodo = (state: RootState): Todo => state.todolist.selected

// Actions
export const { addTodo, selectTodo } = todoSlice.actions

// Reducer
export default todoSlice.reducer
