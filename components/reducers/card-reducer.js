import Immutable from 'immutable';
import uuid from 'node-uuid';

import { ADD_TASK, TOGGLE_TASK, REMOVE_TASK } from '../actions/task-actions';
import {ADD_CARD, UPDATE_CARD, REMOVE_CARD} from '../actions/card-actions';

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
    },
    {
        id: 'c3',
        title: 'Workout',
        description: 'I should read this book.',
        status: 'done',
        tasks: []
    }
]

function createInitialState() {
    const cards = kanbanState.map(
        (card) => {
            const tasks = card.tasks.map(
                (task) => {
                    const TaskRecord = Immutable.Record(task);
                    return new TaskRecord();
                }
            )
            
            const CardRecord = Immutable.Record(
                Object.assign({}, card, {
                    tasks: Immutable.List(tasks)
                })
            );
            return new CardRecord();
        }
    );
    return Immutable.List(cards);
}

export function reduce(state=createInitialState(),action){
    let cardId, taskId, cardIndex, taskIndex, card, task;

    switch(action.type){
        case ADD_TASK:
            cardId = action.payload.cardId;
            const taskName = action.payload.taskName;
            
            const TaskRecord = Immutable.Record({
                id: uuid.v4(),
                name: taskName,
            });
            task = new TaskRecord();
            
            cardIndex = state.findIndex(
                (c) => c.get('id') === cardId
            );
            card = state.get(cardIndex);
            return state.setIn([cardIndex, 'tasks'], card.get('tasks').push(task));
            
        case TOGGLE_TASK:
            cardId = action.payload.cardId;
            taskId = action.payload.taskId;
            
            cardIndex = state.findIndex(
                (c) => c.get('id') === cardId
            );
            card = state.get(cardIndex);
            
            taskIndex = card.tasks.findIndex(
                (t) => t.get('id') === taskId
            );
            
            return state.setIn([cardIndex, 'tasks', taskIndex, 'done'],
                        !state.getIn([cardIndex, 'tasks', taskIndex, 'done']))
            
        case REMOVE_TASK:
            cardId = action.payload.cardId;
            taskId = action.payload.taskId;
            
            cardIndex = state.findIndex(
                (c) => c.get('id') === cardId
            );
            card = state.get(cardIndex);
            
            taskIndex = card.tasks.findIndex(
                (t) => t.get('id') === taskId
            );
            
            return state.deleteIn([cardIndex, 'tasks', taskIndex]);
        /**** for card **/
        
        case ADD_CARD:
            card = action.payload;
            
            const CardRecord = Immutable.Record({
                id: uuid.v4(),
                title: card.title,
                description: card.description,
                status: card.status,
                tasks: Immutable.List()
            });
            return state.push(new CardRecord());
            
        case UPDATE_CARD:
            card = action.payload;
            cardIndex = state.findIndex(
                (c) => c.get('id') === card.id
            );
            
            return state.setIn([cardIndex, 'title'], card.title)
                 .setIn([cardIndex, 'description'], card.description)
                 .setIn([cardIndex, 'status'], card.status);
            
        case REMOVE_CARD:
            cardId = action.payload;
            cardIndex = state.findIndex(
                (c) => c.get('id') === cardId
            );
            return state.delete(cardIndex);
            
        default:
            return state;

    }
}
