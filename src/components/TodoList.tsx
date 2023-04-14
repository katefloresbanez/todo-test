import { FC } from 'react'
import { Todo } from '../types'

import TodoItem from './TodoItem'

type Props = {
    list: Array<Todo>
}

const TodoList: FC<Props> = ({ list }) => {
    return (
        <div className=''>
            <div className='border-3 border-dashed border-gray-300'>Ongoing</div>
            {
                list.map((todo: Todo) => <TodoItem key={todo.id} {...todo} />)
            }
            <div className='border-3 border-dashed border-gray-300'>Completed</div>
        </div>
    )
}

export default TodoList
