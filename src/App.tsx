import type { FC } from 'react'
import Header from './components/layout/Header'
import Page from './components/layout/Page'

import TodoDetails from './components/TodoDetails'
import TodoSideBar from './components/TodoSideBar'
import AddTodoModal from './components/AddTodoModal'
import { getModalStatus } from './state/todoReducer'
import { useAppSelector } from './hooks'

const App: FC = () => {
  const showAddModal = useAppSelector(getModalStatus)

  return (
    <div className="w-full h-full flex flex-col bg-gray-200 items-center relative">
        <Header />
        <Page>
            <TodoSideBar />
            <TodoDetails />
        </Page>
        {!!showAddModal && <AddTodoModal />}
    </div>
  )
}

export default App
