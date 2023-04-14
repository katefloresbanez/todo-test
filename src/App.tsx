import type { FC } from 'react'
import Header from './components/layout/Header'
import Page from './components/layout/Page'

import TodoDetails from './components/TodoDetails'
import TodoSideBar from './components/TodoSideBar'

const App: FC = () => {
  return (
        <div className="w-full h-full flex flex-col bg-gray-200 items-center">
            <Header />
            <Page>
                <TodoSideBar />
                <TodoDetails />
            </Page>
        </div>
  )
}

export default App
