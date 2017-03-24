import React from 'react';

import Card from './Card.jsx';

export default class List extends React.Component {
    render() {
        const cards = this.props.cards.map(
            (card) =>
                <Card
                    key = {card.get('id')}
                    card_id = {card.get('id')}
                    title = {card.get('title')}
                    description = {card.get('description')}
                    status = {card.get('status')}
                    tasks = {card.get('tasks')}
                    addTask = {this.props.addTask}
                    toggleTask = {this.props.toggleTask}
                    removeTask = {this.props.removeTask}
                 
                    openDraft = {this.props.openDraft}
                    removeCard = {this.props.removeCard}
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