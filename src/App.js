import './App.css';
import Header from './components/Header'
import Tasks from "./components/Tasks"
import {useState, useEffect} from "react"
import AddTask from "./components/AddTask"

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "To remind of clothes",
      day: "Today 6pm evening",
      reminder: true
    },
    {
      id: 2,
      text: "To remind of shoes",
      day: "Today 10pm night",
      reminder: true
    },
    {
      id: 3,
      text: "To remind of shaving",
      day: "Tommorow 3pm afternoon",
      reminder: true
    },
    {
      id: 4,
      text: "Code weather app",
      day: "Every Day",
      reminder: false
    }
  ]);

  // Add Task
  const addTask = (task) => {
    console.log(task)
    const newTask = {id: tasks.length + 1, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== parseInt(id)))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
    console.log(tasks)
  }

  return (
    <div className="App">
      <Header />
      <AddTask 
        addTask={addTask}/>
      {
        tasks.length > 0 ? <Tasks tasks={tasks} onClick={(e) => deleteTask(e.target.id)} onDoubleClick={toggleReminder} /> : "No Tasks Found"
      }
    </div>
  );
}

export default App;
