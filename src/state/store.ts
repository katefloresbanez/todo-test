import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoReducer'

const store = configureStore({
  reducer: {
    todolist: todoReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
