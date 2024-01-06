import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import './App.css'

function App() {

  const [todos, settodos] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/todos");
        const json = await response.json();
        settodos(json.todos);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []); 

  return (
    <div className=' h-screen bg-gradient-to-r from-black via-red-900 to-blue-900'>
      <CreateTodo />
      <Todos {...todos} />
    </div>
  )
}

export default App
