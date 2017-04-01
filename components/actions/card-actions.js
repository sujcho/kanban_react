import 'whatwg-fetch';
const API_URL = 'https://my-react-spring-2017-server-sujcho.c9users.io:8080/api'
const API_JSON_HEADERS = {
    'Content-Type': 'application/json'
}

export const FETCH_CARDS_REQUEST = 'fetch cards request';
export const FETCH_CARDS_SUCCESS = 'fetch cards success';
export const FETCH_CARDS_FAILURE = 'fetch cards failure';

function fetchCardsRequest() {
    return {
        type: FETCH_CARDS_REQUEST
    };
}

function fetchCardsSuccess(cards) {
    return {
        type: FETCH_CARDS_SUCCESS,
        payload: cards
    };
}

function fetchCardsFailure(err) {
    return {
        type: FETCH_CARDS_FAILURE,
        payload: err
    };
}

export function fetchCards(){
    return (dispatch) => {
        dispatch(fetchCardsRequest());
        
        return fetch(
            `${API_URL}/cards`
        )
        .then((response) =>
            response.json()
        )
        .then((json) =>
            dispatch(fetchCardsSuccess(json))
        )
        .catch((err) => 
            dispatch(fetchCardsFailure(err))
        );
    };
}

export const ADD_CARD_REQUEST = 'add card request';
export const ADD_CARD_SUCCESS = 'add card success';
export const ADD_CARD_FAILURE = 'add card failure';

function addCardRequest() {
    return {
        type: ADD_CARD_REQUEST
    };
}
function addCardSuccess(card) {
    return {
        type: ADD_CARD_SUCCESS,
        payload: card
    };
}
function addCardFailure(err) {
    return {
        type: ADD_CARD_FAILURE,
        payload: err
    };
}

export function addCard(draft){
    return (dispatch) => {
        dispatch(addCardRequest());
        
        return fetch(
            `${API_URL}/cards`,
            {
                method: 'post',
                headers: API_JSON_HEADERS,
                body: JSON.stringify(draft)
            }
        )
        .then((response) => 
            response.json()
        )
        .then((json) =>
            dispatch(addCardSuccess(json))
        )
        .catch((err) =>
            dispatch(addCardFailure(err))
        );
    }
}


export const REMOVE_CARD_REQUEST = 'remove card request';
export const REMOVE_CARD_SUCCESS = 'remove card success';
export const REMOVE_CARD_FAILURE = 'remove card failure';

function removeCardRequest() {
    return {
        type: REMOVE_CARD_REQUEST
    };
}
function removeCardSuccess(cardId) {
    return {
        type: REMOVE_CARD_SUCCESS,
        payload: card
    };
}
function removeCardFailure(err) {
    return {
        type: REMOVE_CARD_FAILURE,
        payload: err
    };
}

export function removeCard(cardId){
    return (dispatch) => {
        dispatch(removeCardRequest())
        
         return fetch(
            `${API_URL}/cards/${cardId}`,
            {
                    method: 'delete',
                    headers: API_JSON_HEADERS
            }
        )
        .then(
                (response) => {
                    if (response.status === 204) {
                        dispatch(removeCardSuccess(cardId));
                    } else {
                        dispatch(removeCardFailure('remove card error'));
                    }
                }
            )
            .catch(
                (err) =>
                    dispatch(removeCardFailure(err))
            )
    }
}

export const UPDATE_CARD_REQUEST = 'update card request';
export const UPDATE_CARD_SUCCESS = 'update card success';
export const UPDATE_CARD_FAILURE = 'update card failure';

function updateCardRequest() {
    return {
        type: UPDATE_CARD_REQUEST
    };
}
function updateCardSuccess(card) {
    return {
        type: UPDATE_CARD_SUCCESS,
        payload: card
    };
}
function updateCardFailure(err) {
    return {
        type: UPDATE_CARD_FAILURE,
        payload: err
    };
}


export function updateCard(card){
    return (dispatch) => {
        dispatch(removeCardRequest())
        
         return fetch(
            `${API_URL}/cards/${card.id}`,
            {
                    method: 'put',
                    headers: API_JSON_HEADERS,
                    body: JSON.stringify(card)
            }
        )
        .then(
                (response) => {
                    if (response.status === 204) {
                        dispatch(updateCardSuccess(card));
                    } else {
                        dispatch(updateCardFailure('update card error'));
                    }
                }
            )
            .catch(
                (err) =>
                    dispatch(updateCardFailure(err))
            )
    }
}

