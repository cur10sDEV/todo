import React from 'react'

const AddTask = ({newTask, onChange, onTextChange, onDayChange, onCheckChange}) => {
	return (
		<form className="add-form">
			<div className="form-control">
				<label>Task</label>
				<input 
					type="text"
					id="text"
					placeholder="Add Task"
					value={newTask.text}
					onChange={onChange}
				/>
			</div>
			<div className="form-control">
				<label>Day/Date & Time</label>
				<input 
					type="text"
					id="day"
					placeholder="Add Day/Date and Time"
					value={newTask.day}
					onChange={onChange}
				/>
			</div>
			<div className="form-control">
				<label>Set Reminder</label>
				<input 
					type="checkbox"
					id="reminder"
					checked={newTask.reminder}
					value={newTask.reminder}
					onChange={onChange}
				/>
				<input type="submit" value="Save Task" className="btn btn-block" />
			</div>
		</form>
	)
}

export default AddTask