import React from 'react';

import KanbanBoard from './KanbanBoard.jsx';

const kanbanState = [
    {
        id: 'c1',
        title: 'Read the book',
        description: 'I should read this book.',
        status: 'in-progress',
        tasks: []
    },
    {
        id: 'c2',
        title: 'Write some code',
        description: 'practice my coding skill',
        status: 'todo',
        tasks: [
            {
                id: 't1',
                name: 'hello world example',
                done: true
            },
            {
                id: 't2',
                name: 'kanban example',
                done: false
            },
            {
                id: 't3',
                name: 'assignment code',
                done: true
            }
        ]
    }
]

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Kanban Board</h1>
                 <KanbanBoard 
                    cards = {kanbanState}
                 />
            </div>
        )
    }
}