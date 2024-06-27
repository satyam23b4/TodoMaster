import { useEffect, useState } from 'react'
// import Navbar from '../components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { FaBeer } from 'react-icons/fa';
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
function Home() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([]) // array in which we will store our todos
  const [showFinished, setShowFinished] = useState(false)

  useEffect(() => {
    let todoString = localStorage.getItem('todos')
    if (todoString) {
      let todos = JSON.parse(todoString)
      setTodos(todos)
    }
  }, [])

  const saveToLS = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const toggleShowFinished = (e) => {
    setShowFinished(!showFinished)
  }

  const HandleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const HandleDelete = (e, id) => {
    let newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
    saveToLS()
  }

  const HandleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo('')
  }

  const HandleChange = (e) => {
    setTodo(e.target.value)
  }

  const HandleCheckBox = (e) => {
    let id = e.target.name
    let index = todos.findIndex((todo) => todo.id === id)
    let newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
  }

  useEffect(() => {
    saveToLS()
  }, [todos])

  return (
    <div className='bg-black text-white md:min-h-screen'>
      {/* <Navbar /> */}
        <div className='bg-slate-900 my-5 rounded-md mx-3 py-2 justify-center flex-grow px-5 min-h-[80vh] md:container md:mx-auto md:w-[40%]'>
            <div className='flex justify-center items-center py-3 text-2xl mb-5 font-light'>TodoMaster - Your online progress tracker</div>
          <div className='AddTodos my-3'>
            <h1 className='font-semibold text-lg'>Add a Todo</h1>
              <input onChange={HandleChange} value={todo} type='text' className='w-full text-black px-1 py-1 rounded-lg bg-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500' />
              <button onClick={HandleAdd} disabled={todo.length<=0} className='w-full rounded-md my-3 bg-blue-800 py-1 p-3 hover:bg-blue-950 font-semibold hover:cursor-pointer'>Add</button>
          </div>
          <input className='my-5' onChange={toggleShowFinished} type="checkbox" checked={showFinished} /> Show Finished
          <h1 className='text-lg font-semibold'>Your Todos</h1>
          <div className='Todos font-thin'>
            {todos.length === 0 && <h1>No Todos to show</h1>}
            {todos.map((item, index) => (
              (showFinished || !item.isCompleted) && (
                <div key={index} className='Todo flex gap-2 my-3 justify-between'>
                  <div className='flex gap-5'>
                    <input onChange={HandleCheckBox} type="checkbox" checked={item.isCompleted} name={item.id} className="mr-2" />
                    <div className={item.isCompleted ? 'line-through' : ''}>{item.todo}</div>
                  </div>
                  <div className='Buttons flex h-full gap-2'>
                    <button onClick={(e) => HandleEdit(e, item.id)} className='rounded-md bg-blue-800 px-2 py-1 flex items-center gap-2 hover:bg-blue-950 text-sm font-bold text-white'>Edit<FaEdit /></button>
                    <button onClick={(e) => HandleDelete(e, item.id)} className='rounded-md bg-blue-800 px-2 py-1 flex items-center gap-2 hover:bg-blue-950 text-sm font-bold text-white'>Delete<FaDeleteLeft /></button>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
    </div>
  )
}

export default Home