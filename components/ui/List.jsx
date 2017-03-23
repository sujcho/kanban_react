import React from 'react';

import Card from './Card.jsx';

export default class List extends React.Component {
    render() {
        const cards = this.props.cards.map(
            (card) =>
                <Card
                    key = {card.id}
                    id = {card.get('id')}
                    title = {card.title}
                    description = {card.description}
                    tasks = {card.get('tasks')}
                    addTask = {this.props.addTask}
                    toggleTask = {this.props.toggleTask}
                    removeTask = {this.props.removeTask}
                    
                    openDraft = {this.props.openDraft}
                />
        )
        return(
            <div className='list'>
                <h3>{ this.props.title }</h3>
                { cards }
            </div>
        )
    }
}