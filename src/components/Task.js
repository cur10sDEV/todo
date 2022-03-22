import React from 'react'

const Task = ({item, day, onClick, id}) => {
	return (
		<div className="task">
			<h3>{item}<span id={id} onClick={onClick} className="delete">X</span></h3>
			<h4>{day}</h4>
		</div>
	)
}

export default Task