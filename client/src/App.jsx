
import { useEffect, useState } from 'react'
import './App.css'
import ListHeader from './components/ListHeader'
import ListItem from './components/ListItem'

function App() {
  
  const userEmail = 'yasharth@test.com'
  const [tasks, setTask] = useState(null)

  const getData = async() => {
    try{
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`)
      const data = await response.json()
      setTask(data)
    }catch(err){
      console.error(err)
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const sortedTasks = tasks?.sort((a,b) => new Date(a.date) - new Date(b.date))

  return (
    <div className='app'>
      <ListHeader listname = {"To Do List"} getData = {getData}/>
      {sortedTasks?.map((task) => <ListItem key = {task.id} task = {task} getData = {getData} />)}  
    </div>
  )
}

export default App
