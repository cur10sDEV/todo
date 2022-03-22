import React from 'react'
import Button from './Button'

const Header = ({onClick}) => {
	return (
		<div className="header">
			<h1>Task Tracker</h1>
			<Button onClick={onClick} />
		</div>
	)
}

export default Header