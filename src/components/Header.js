import React from 'react'
import Button from './Button'

const Header = ({onClick,showAddTask}) => {
	return (
		<div className="header">
			<h1>Task Tracker</h1>
			<Button showAddTask={showAddTask} onClick={onClick} />
		</div>
	)
}

export default Header