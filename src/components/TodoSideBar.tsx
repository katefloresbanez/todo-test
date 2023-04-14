import type { FC } from 'react'

import TodoList from './TodoList'
import { useAppDispatch } from '../hooks'
import { toggleAddModal } from '../state/todoReducer'

const TodoSideBar: FC = () => {
  const dispatch = useAppDispatch()

  const onClickAddTodo = (): void => {
    dispatch({ type: toggleAddModal.type, payload: true })
  }

  return (
        <div className='flex flex-col h-max-1/2 w-2/3 overflow-scroll overflow-hidden'>
            <div className='pt-3 pr-5 flex justify-between items-center'>
                <div className='text-xl text-left text-bold'>
                    List of todos:
                </div>
                <button className='rounded-md bg-violet-500 w-1/3 h-8 text-white m-2' onClick={onClickAddTodo}>+ Add</button>
            </div>
            <TodoList />
        </div>
  )
}

export default TodoSideBar
