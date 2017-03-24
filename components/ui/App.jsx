import React from 'react';

import KanbanBoard from './KanbanBoard.jsx';
import ModalCard from './ModalCard.jsx'

import '../../index.scss';


export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Kanban Board</h1>
                 <KanbanBoard 
                    cards = {this.props.cards}
                    addTask = {this.props.addTask}
                    toggleTask = {this.props.toggleTask}
                    removeTask = {this.props.removeTask}
                    
                    openDraft = {this.props.openDraft}
                    
                    removeCard = {this.props.removeCard}
                 />
                 {
                    this.props.draft.get('show')
                    ?
                    <ModalCard
                        draft = {this.props.draft}
                        addCard = {this.props.addCard}
                        updateCard = {this.props.updateCard}
                        closeDraft = {this.props.closeDraft}
                        updateDraft = {this.props.updateDraft}
                    />
                    :
                    ''
                 }
            </div>
        )
    }
}