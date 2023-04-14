import type { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Page: FC<Props> = ({ children }) => {
  return (
        <div className='flex xm:mx-1 sm:w-5/6 md:w-5/6 lg:w-2/3 xl:mx-10 rounded-2xl p-5 bg-white h-max-2/3'>
            {children}
        </div>
  )
}

export default Page
