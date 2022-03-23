import './App.css';
import Header from './components/Header'
import Tasks from "./components/Tasks"
import {useState} from "react"
import AddTask from "./components/AddTask"
import Footer from "./components/Footer"

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Click Add to add Task",
      day: "Today",
      reminder: true
    },
    {
      id: 2,
      text: "Double Click on any task to set/unset reminder",
      day: "Today",
      reminder: true
    },
    {
      id: 3,
      text: "Click X do delete any task",
      day: "Today",
      reminder: true
    },
    {
      id: 4,
      text: "Thanks for Trying",
      day: "Every Day",
      reminder: false
    }
  ]);
  const [showAddTask, setShowAddTask] = useState(false)

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
      <Header showAddTask={showAddTask} onClick={() => setShowAddTask(!showAddTask)}/>
      { showAddTask && <AddTask addTask={addTask}/> }
      {
        tasks.length > 0 ? <Tasks tasks={tasks} onClick={(e) => deleteTask(e.target.id)} onDoubleClick={toggleReminder} /> : "No Tasks Found"
      }
      <Footer />
    </div>
  );
}

export default App;
