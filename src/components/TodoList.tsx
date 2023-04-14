import type { FC } from 'react'
import type { Todo } from '../types'

import TodoItem from './TodoItem'
import { getTodoList } from '../state/todoReducer'
import { useAppSelector } from '../hooks'

const TodoList: FC = () => {
  const list = useAppSelector(getTodoList)

  return (
        <div className='pt-4 pr-4 flex flex-col overflow-scroll'>
            {
                list.map((todo: Todo) => <TodoItem key={todo.id} todo={todo} />)
            }
        </div>
  )
}

export default TodoList
