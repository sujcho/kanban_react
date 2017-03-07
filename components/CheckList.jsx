import React from 'react';

export default class CheckList extends React.Component {
    render() {
        const tasks = this.props.tasks.map(
            (task) =>
                <li
                    className = "checklist_task"
                    key = {task.id}
                >
                    { task.name }
                </li>
        );
        
        return (
            <div>
                <ul>
                    { tasks }
                </ul>
            </div>
        )
    }
}