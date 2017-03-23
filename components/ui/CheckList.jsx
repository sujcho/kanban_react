import React from 'react';

export default class CheckList extends React.Component {
    
    checkInputKeyPress(evt) {
        if (evt.key === 'Enter') {
            this.props.addTask(evt.target.value);
            evt.target.value = '';
        }    
    }
    
    render() {
        const that = this;
        
        const tasks = this.props.tasks.map(
            (task) =>
                <li
                    className = "checklist_task"
                    key = {task.get('id')}
                >
                <input
                    type="checkbox"
                    checked = {task.get('done')}
                    onChange = {
                        (evt) => that.props.toggleTask(task.get('id'))
                    }
                />
                {task.get('name')}
                   <span
                        className = "fa fa-times remove-icon"
                        onClick = {
                            (evt) => that.props.removeTask(task.get('id'))
                        }
                    />
                </li>
        );
        
        return (
            <div>
                <ul>
                    { tasks }
                </ul>
                <input
                    type="text"
                    className = "checklist_add_task"
                    placeholder = "Type then hit Enter to add a task"
                    onKeyPress = {this.checkInputKeyPress.bind(this)}
                />
            </div>
        )
    }
}