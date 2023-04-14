import './App.css'
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
      <div className="w-full h-full flex flex-col justify-center">
        <div className='flex w-full justify-center bg-gray-200' style={{ minHeight: '20vh'}} >
            <h1 className='text-violet-500 text-5xl m-auto'>Simple TodoList with Vite and Tailwind</h1>
        </div>
        <div className='w-1/2 m-auto'>
            <div className='flex justify-between items-center'>
                <p className='text-xl py-3 text-left'>
                    List of todos:
                </p>
                <button className='rounded-md bg-violet-500 w-1/6 text-white h-7 w-10'> + Add</button>
            </div>
            <TodoList list={list}/>
        </div>
    </div>
  )
}

export default App
