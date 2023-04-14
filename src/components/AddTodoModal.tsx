import type { FC, ReactNode } from 'react'
import { useForm } from 'react-hook-form'

import { useAppDispatch } from '../hooks'
import { addTodo, toggleAddModal } from '../state/todoReducer'

interface Props {
  children: ReactNode
}

interface FormValues {
  title: string
  description: string
}

const Overlay: FC<Props> = ({ children }) => {
  return (
    <div
        className='w-full h-full z-10 bg-gray-900 absolute flex justify-center items-center'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    >
      {children}
    </div>
  )
}

const AddTodoModal: FC = () => {
  const dispatch = useAppDispatch()
  const { handleSubmit, register } = useForm()
  const date = new Date()

  const onClickClose = (): void => {
    dispatch({ type: toggleAddModal.type, payload: false })
  }

  const onClickSubmit = (data: FormValues): void => {
    const newTodo = {
      id: Math.floor(Math.random() * 9999),
      createdAt: date.toDateString(),
      updatedAt: '',
      completed: false,
      ...data
    }

    dispatch({ type: addTodo.type, payload: newTodo })
    onClickClose()
  }

  return (
      <Overlay>
        <div className='border-2 border-violet-400 w-1/2 h-1/2 rounded-2xl p-5 flex flex-col bg-white'>
            <div className='flex justify-between'>
                <h1 className='text-bold text-2xl my-2'>New Todo:</h1>
                <button className='rounded-md  w-1/6 text-white h-8 bg-gray-500' onClick={onClickClose}>Close</button>
            </div>
                <form onSubmit={handleSubmit(onClickSubmit)}>
                    <div className='h-full flex flex-col mb-2'>
                        Title:
                        <input
                            {...register('title', { required: true })} className='text-bold sm:text-sm md:text-xl w-full' placeholder='enter title here' name='title'/>
                        Description:
                        <textarea {...register('description', { required: true })} className='sm:text-sm md:text-xl resize-none pb-0 h-full' rows={8} cols={38} placeholder='enter description' name='description'/>
                    </div>
                    <button type='submit' className='rounded-md bg-violet-500 w-full h-10 text-white'>Save</button>
                 </form>
        </div>
      </Overlay>
  )
}

export default AddTodoModal
