import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Todo } from '../types'
import type { RootState } from './store'
import { mockTodoList, normalizeTodoList } from '../data'

interface TodoState {
  list: Todo[]
  selected: Todo
  modalStatus: boolean
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
  },
  modalStatus: false
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
    },
    toggleAddModal: (state, action: PayloadAction<boolean>) => {
      state.modalStatus = action.payload
    }
  }
})

// Selectors
export const getTodoList = (state: RootState): Todo[] => state.todolist.list
export const getSelectedTodo = (state: RootState): Todo => state.todolist.selected
export const getModalStatus = (state: RootState): boolean => state.todolist.modalStatus

// Actions
export const { addTodo, selectTodo, toggleAddModal } = todoSlice.actions

// Reducer
export default todoSlice.reducer
