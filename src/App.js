import './App.css';
import Header from './components/Header'
import Tasks from "./components/Tasks"
import {useState, useEffect} from "react"

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
  const [newTask, SetNewTask] = useState({
    id: (tasks.length + 1),
    text: "",
    day: "",
    reminder: false
  })

  const deleteTask = (id) => {
    console.log(id)
    setTasks(tasks.filter(task => task.id !== parseInt(id)))
    console.log(tasks)
  }

  return (
    <div className="App">
      <Header />
      {
        tasks.length > 0 ? <Tasks tasks={tasks} onClick={(e) => deleteTask(e.target.id)} /> : "No Tasks Found"
      }
    </div>
  );
}

export default App;
