import { useState } from 'react'
import type { FC } from 'react'
import cx from 'classnames'

import { useAppDispatch, useAppSelector } from '../hooks'
import type { Todo } from '../types'
import { selectTodo, getSelectedTodo } from '../state/todoReducer'

interface Props {
  todo: Todo
}

const TodoItem: FC<Props> = ({ todo }) => {
  const [isCompleted, setIsCompleted] = useState(todo.completed)
  const selected = useAppSelector(getSelectedTodo)
  const dispatch = useAppDispatch()

  const onClickTodo = (currentTodo: Todo): void => {
    // navigate(`/todo/${todo.id}`)
    dispatch({ type: selectTodo.type, payload: currentTodo })
  }

  const isSelected = selected.id === todo.id

  return (
        <div
            className={
                cx('flex border-2 p-3 rounded-md mb-3 cursor-pointer overflow-hidden',
                  {
                    'bg-white': !isCompleted && !isSelected,
                    'border-gray-400': !isCompleted && !isSelected,
                    'border-gray-500': isCompleted,
                    'bg-gray-300': isCompleted,
                    'bg-violet-200': !isCompleted && isSelected,
                    'border-violet-400': !isCompleted && isSelected
                  }
                )
            }
            onClick={() => { onClickTodo(todo) }}
        >
            <div className='flex w-10'>
                <input type='checkbox' className='w-full border-1 border-gray-300' checked={isCompleted} onChange={() => { setIsCompleted(!isCompleted) }}/>
            </div>
            <div className='flex flex-col w-3/4 ml-5 text-left'>
                <h3 className={cx('text-gray-900 font-bold', { 'line-through': isCompleted })}>
                    {todo.title}
                </h3>
                <p className={cx('text-gray-800 overflow-hidden overflow-ellipsis whitespace-nowrap', { 'line-through': isCompleted })}>
                    {todo.description}
                </p>
                <p className='text-gray-400 text-right text-sm'>{todo.createdAt}</p>
            </div>
        </div>
  )
}

export default TodoItem
