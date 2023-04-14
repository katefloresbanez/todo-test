import { FC, useState } from 'react'
import cx from 'classnames'

import { Todo } from '../types'

type Props = Todo

const TodoItem: FC<Props> = (todo: Todo) => {
    const [isCompleted, setIsCompleted] = useState(todo.completed)

    return (
        <div 
            className={
                cx('flex border-2 p-4 rounded-md mb-3',
                    { 
                        'bg-gray-300': isCompleted,
                        'border-gray-400': isCompleted ,
                        'border-violet-400': !isCompleted
                    }
                )
            }>
            <div className='flex w-10'>
                <input type='checkbox' className='w-full border-1 border-gray-300' checked={isCompleted} onChange={() => setIsCompleted(!isCompleted)}></input>
            </div>
            <div className='flex flex-col w-full ml-5 text-left'>
                <h3 className={cx('text-gray-900 font-bold', { 'line-through': isCompleted})}>
                    {todo.title}
                </h3>
                <p className={cx('text-gray-800', { 'line-through': isCompleted})}>
                    {todo.description}
                </p>
                <p className='text-gray-400 text-right text-sm'>{todo.created_at}</p>
            </div>
        </div>
    )
}

export default TodoItem
