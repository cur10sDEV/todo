import React from 'react'
import Task from "./Task"

const Tasks = ({tasks, onClick}) => {
	return (
		<div className="tasks">
			{tasks.map((task,i) => (
				<Task key={i} item={task.text} day={task.day} id={task.id} onClick={onClick}/>
			))}
		</div>
	)
}

export default Tasks;