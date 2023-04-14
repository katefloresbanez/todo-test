import TodoList from './components/TodoList'

const App = () => {
  const date = new Date()

  const list = [
      {
        id: Math.random(),
        title: 'Test Todo 1',
        description: 'something something',
        completed: false,
        created_at: date.toDateString(),
        updated_at: '',
      },
      {
        id: Math.random(),
        title: 'Test Todo 2',
        description: 'something something',
        completed: false,
        created_at: date.toDateString(),
        updated_at: '',
      },
      {
        id: Math.random(),
        title: 'Test Todo 3',
        description: 'something something',
        completed: false,
        created_at: date.toDateString(),
        updated_at: '',
      }
  ]

  return (
      <div className="w-full h-full flex flex-col bg-gray-200 items-center">
        <div className='flex flex-col w-full justify-center text-center' style={{ minHeight: '20vh'}}>
            <h1 className='text-violet-500 text-5xl text-bold'>Simple TodoList</h1>
            <h4 className='text-violet-500 text-2xl text-bold'>w/ Vite and Tailwind</h4>
        </div>
          <div className='flex flex-col xm:mx-1 sm:w-5/6 md:w-5/6 lg:w-1/2 xl:mx-10 rounded-2xl p-5 bg-white h-full'>
            <div className='flex flex-col h-full'>
                <p className='text-xl py-3 text-left text-bold'>
                    List of todos:
                </p>
                <TodoList list={list}/>
            </div>
            <button className='rounded-md bg-violet-500 w-full h-10 text-white justify-self-end'>+ Add</button>
        </div>
    </div>
  )
}

export default App
