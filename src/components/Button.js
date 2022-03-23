import React from 'react'

const Button = ({onClick, showAddTask}) => {
	return (
		<button onClick={onClick} style={{backgroundColor: showAddTask ? "red" : "#000"}} className="btn">{showAddTask ? "Close" : "Add"}</button>
	)
}

export default Button