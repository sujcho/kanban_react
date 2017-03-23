export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

/**for task **/
export function add(cardId, taskName){
    return{
            type: ADD_TASK,
            payload: {
                taskName: taskName,
                cardId: cardId
            }
    };
}

export function toggle(cardId, taskId){
    return{
            type: TOGGLE_TASK,
            payload: {
                taskId: taskId,
                cardId: cardId
            }
    };
}

export function remove(cardId, taskId){
    return{
            type: REMOVE_TASK,
            payload: {
                taskId: taskId,
                cardId: cardId
            }
    };
}

