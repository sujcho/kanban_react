import React from 'react'


export default class ModalCard extends React.Component{
    
    render(){
        return(
            <div>
                <div className="modal-card">
						<input type='text'
							   placeholder="Title"
							   autoFocus={true}
						/>
						<textarea 
							placeholder="Description"
						/>
						<label htmlFor="status">Status</label>
						<select id="status"
								
						>
							<option value="todo">To Do</option>
							<option value="in-progress">In Progress</option>
							<option value="done">Done</option>
						</select>
						<br />

						<div className='actions'>
							<button>Save</button>
						</div>                
                </div>
                <div className="overlay"

                />
            </div>
        )
    }
}