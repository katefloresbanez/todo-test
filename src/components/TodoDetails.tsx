import type { FC } from 'react'
import { useState } from 'react'
import cx from 'classnames'
import { getSelectedTodo } from '../state/todoReducer'
import { useAppSelector } from '../hooks'

const TodoDetails: FC = () => {
  const selected = useAppSelector(getSelectedTodo)
  const [isEditing, setEditing] = useState(false)

  const onSave = (): void => {
    setEditing(!isEditing)
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
            <form>
                <div className='h-full'>
                    {isEditing
                      ? (
                        <input className='text-bold sm:text-sm md:text-xl w-full' defaultValue={selected.title} name='todo-title'/>
                        )
                      : (
                            <h1 className='text-bold sm:text-sm md:text-xl w-full'>{selected.title}</h1>
                        )
                    }
                    {isEditing
                      ? (
                        <textarea className='sm:text:xm lg:text-md resize-none pb-0' rows={10} cols={38} defaultValue={selected.description} name='todo-description'/>
                        )
                      : (
                            <p className='sm:text:xm lg:text-md'>{selected.description}</p>
                        )
                    }
                </div>
                {isEditing && <button className='rounded-md bg-violet-500 w-full h-10 text-white' onClick={() => { onSave() }}>Save</button> }
             </form>
        </div>
  )
}

export default TodoDetails
