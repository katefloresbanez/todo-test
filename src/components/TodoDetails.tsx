import type { FC } from 'react'
import { useState } from 'react'
import cx from 'classnames'
import { useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'

import { getSelectedTodo, editTodo } from '../state/todoReducer'
import { useAppDispatch, useAppSelector } from '../hooks'
import type { Todo } from '../types'

interface TodoFormValues {
  title: string
  description: string
}

const date = new Date()

const TodoDetails: FC = () => {
  const selected = useAppSelector(getSelectedTodo)
  const dispatch = useAppDispatch()
  const [isEditing, setEditing] = useState(false)

  const { register, handleSubmit } = useForm<TodoFormValues>()

  const onSave: SubmitHandler<TodoFormValues> = (data: TodoFormValues): void => {
    const editedPayload: Todo = {
      ...selected,
      ...data,
      updatedAt: date.toUTCString()
    }
    setEditing(!isEditing)
    dispatch({ type: editTodo.type, payload: editedPayload })
  }

  if (selected.id === 0) {
    return (
      <div className='border-2 border-violet-400 w-full h-full rounded-2xl p-5 lg:w-min-1/2 flex flex-col justify-center items-center'>
        <p className='text-gray-500 text-xl'>Select a note to show it&apos;s details!</p>
      </div>
    )
  }

  return (
        <div className='border-2 border-violet-400 w-full h-full rounded-2xl p-5 lg:w-min-1/2 flex flex-col'>
            <div className='flex justify-end'>
                <button
                    className={cx('rounded-md  w-1/6 text-white', {
                      'bg-violet-500': !isEditing,
                      'bg-rose-500': isEditing

                    })}
                    onClick={() => { setEditing(!isEditing) }}
                >
                    {isEditing ? 'X' : 'Edit'}
                </button>
            </div>
            <form onSubmit={handleSubmit(onSave)}>
                <div className='h-full'>
                    {isEditing
                      ? (
                        <input {...register('title')} className='text-bold sm:text-sm md:text-xl w-full' defaultValue={selected.title} />
                        )
                      : (
                            <h1 className='text-bold sm:text-sm md:text-xl w-full'>{selected.title}</h1>
                        )
                    }
                    {isEditing
                      ? (
                        <textarea {...register('description')}className='sm:text:xm lg:text-md resize-none pb-0' rows={10} cols={38} defaultValue={selected.description} />
                        )
                      : (
                            <p className='sm:text:xm lg:text-md'>{selected.description}</p>
                        )
                    }
                </div>
                {isEditing && <button type='submit' className='rounded-md bg-violet-500 w-full h-10 text-white'>Save</button> }
             </form>
        </div>
  )
}

export default TodoDetails
