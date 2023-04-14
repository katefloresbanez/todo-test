import type { FC } from 'react'

const Header: FC = () => {
  return (
        <div className='flex flex-col w-full justify-center text-center' style={{ minHeight: '20vh' }}>
            <h1 className='text-violet-500 text-5xl text-bold'>Simple TodoList</h1>
            <h4 className='text-violet-500 text-2xl text-bold'>w/ Vite and Tailwind</h4>
        </div>
  )
}

export default Header
