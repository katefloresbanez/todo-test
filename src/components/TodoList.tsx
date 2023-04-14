import { FC } from 'react'
import { Todo } from '../types'

import TodoItem from './TodoItem'

type Props = {
    list: Array<Todo>
}

const TodoList: FC<Props> = ({ list }) => {
    return (
        <div className=''>
            {
                list.map((todo: Todo) => <TodoItem key={todo.id} {...todo} />)
            }
        </div>
    )
}

export default TodoList
