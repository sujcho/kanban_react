import React from 'react'


export default class ModalCard extends React.Component{
    
	handleClick(){
    	const id = this.props.draft.getIn(['draft', 'id']);
        const title = this.props.draft.getIn(['draft', 'title']);
        const description = this.props.draft.getIn(['draft', 'description']);
        const status = this.props.draft.getIn(['draft', 'status']);
        
        if (id === '') {
            this.props.addCard({
                title: title,
                description: description,
                status: status
            });
        } else {
            this.props.updateCard({
                id: id,
                title: title,
                description: description,
                status: status
            });
        }
        
        this.props.closeDraft();
    }
    
    render(){
        return(
            <div>
                <div className="modal-card">
						<input type='text'
							   placeholder="Title"
							   value = {this.props.draft.getIn(['draft', 'title'])}
							   onChange = {
							       (evt) => this.props.updateDraft('title', evt.target.value)
							   }
							   autoFocus={true}
						/>
						<textarea 
							placeholder="Description"
							value = {this.props.draft.getIn(['draft', 'description'])}
						    onChange = {
							 (evt) => this.props.updateDraft('description', evt.target.value)
							}
						/>
						<label htmlFor="status">Status</label>
						<select id="status"
						    value = {this.props.draft.getIn(['draft','status'])}
						    onChange = {
						        (evt) => this.props.updateDraft('status',evt.target.value)
						    }
						>
							<option value="todo">To Do</option>
							<option value="in-progress">In Progress</option>
							<option value="done">Done</option>
						</select>
						<br />

						<div className='actions'>
							<button onClick = {this.handleClick.bind(this)}>Save</button>
						</div> 
                </div>
                <div className="overlay"

                />
            </div>
        )
    }
}