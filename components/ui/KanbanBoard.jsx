import React from 'react';
import List from './List.jsx';


export default class KanbanBoard extends React.Component {
    render() {
        return (
            <div>
                <div className = "float-button"
                >+</div>
                <List
                    title = "To Do"
                    cards = {
                        this.props.cards.filter(
                            (card) => card.status === 'todo'
                        )
                    }
                    addTask = {this.props.addTask}
                    toggleTask = {this.props.toggleTask}
                    removeTask = {this.props.removeTask}
                    
                    openDraft = {this.props.openDraft}

                />
                <List
                    title = "In Progress"
                    cards = {
                        this.props.cards.filter(
                            (card) => card.status === 'in-progress'
                        )
                    }
                    addTask = {this.props.addTask}
                    toggleTask = {this.props.toggleTask}
                    removeTask = {this.props.removeTask}
                    
                    openDraft = {this.props.openDraft}
                />
                <List
                    title = "Done"
                    cards = {
                        this.props.cards.filter(
                            (card) => card.status === 'done'
                        )
                    }
                    addTask = {this.props.addTask}
                    toggleTask = {this.props.toggleTask}
                    removeTask = {this.props.removeTask}
                    
                    openDraft = {this.props.openDraft}
                />
            </div>
        )
    }
}