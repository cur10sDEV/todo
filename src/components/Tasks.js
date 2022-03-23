import React from 'react'
import Task from "./Task"

const Tasks = ({tasks, onClick, onDoubleClick}) => {
	return (
		<div className="tasks">
			{tasks.map((task,i) => (
				<Task key={i} item={task.text} reminder={task.reminder} onDoubleClick={() => onDoubleClick(task.id)} day={task.day} id={task.id} onClick={onClick}/>
			))}
		</div>
	)
}

export default Tasks;