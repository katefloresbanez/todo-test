import type { FC } from 'react'
import TodoList from './TodoList'

const TodoSideBar: FC = () => {
  return (
        <div className='flex flex-col h-full mr-3 w-80'>
            <div className='pt-3 pr-5 flex justify-between items-center'>
                <div className='text-xl text-left text-bold'>
                    List of todos:
                </div>
                <button className='rounded-md bg-violet-500 w-1/3 h-8 text-white m-2'>+ Add</button>
            </div>
            <TodoList />
        </div>
  )
}

export default TodoSideBar
