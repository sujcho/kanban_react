import React from 'react';
import List from './List.jsx';


export default class KanbanBoard extends React.Component {
    render() {
        return (
            <div>
                <List
                    title = "To Do"
                    cards = {
                        this.props.cards.filter(
                            (card) => card.status === 'todo'
                        )
                    }
                />
                <List
                    title = "In Progress"
                    cards = {
                        this.props.cards.filter(
                            (card) => card.status === 'in-progress'
                        )
                    }
                />
                <List
                    title = "Done"
                    cards = {
                        this.props.cards.filter(
                            (card) => card.status === 'done'
                        )
                    }
                />
            </div>
        )
    }
}