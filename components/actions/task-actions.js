import 'whatwg-fetch';
const API_URL = 'https://my-react-spring-2017-server-sujcho.c9users.io:8080/api'
const API_JSON_HEADERS = {
    'Content-Type': 'application/json'
}


export const ADD_TASK_REQUEST = 'add task request';
export const ADD_TASK_SUCCESS = 'add task success';
export const ADD_TASK_FAILURE = 'add task failure';

function addTaskRequest() {
    return {
        type: ADD_TASK_REQUEST
    };
}

function addTaskSuccess(cardId, taskName) {
    return {
        type: ADD_TASK_SUCCESS,
        payload: {
                taskName: taskName,
                cardId: cardId
            }
    };
}

function addTaskFailure(err) {
    return {
        type: ADD_TASK_FAILURE,
        payload: err
    };
}

export function addTask(cardId, taskName){
     return (dispatch) => {
        dispatch(addTaskRequest())
        
         return fetch(
            `${API_URL}/cards/${cardId}/tasks`,
            {
                    method: 'post',
                    headers: API_JSON_HEADERS,
                    body: JSON.stringify({ taskname: taskName})
            }
        )
        .then((response) => 
            response.json()
        )
        .then((json) =>
            dispatch(addTaskSuccess(cardId,taskName))
        )
        .catch((err) =>
            dispatch(addTaskFailure(err))
        );
    }
}


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

