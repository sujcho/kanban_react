import { connect } from 'react-redux';

import * as TaskActions from './actions/task-actions';
import * as DraftActions from './actions/draft-actions';
import * as CardActions from './actions/card-actions';
import App from './ui/App.jsx';

const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCards: () => {
            dispatch(CardActions.fetchCards())  
        },
        /*** for tasks ***/
        addTask: (cardId, taskName) => {
            dispatch(TaskActions.addTask(cardId,taskName));
        },
        toggleTask: (cardId, taskId) => {
            dispatch(TaskActions.toggle(cardId, taskId));
        },
        removeTask: (cardId, taskId) => {
            dispatch(TaskActions.remove(cardId, taskId));
        },
        
        /*** for draft ***/ 
        openDraft: (cardObj) => {
            dispatch(DraftActions.open(cardObj));
        },
        closeDraft: () => {
            dispatch(DraftActions.close());
        },
        updateDraft: (field, value) => {
            dispatch(DraftActions.update(field, value));
        },
        
        /*** for cards **/
        addCard: (cardObj) => {
            dispatch(CardActions.addCard(cardObj));  
        },
        updateCard: (cardObj) => {
           dispatch(CardActions.updateCard(cardObj));
        },
        removeCard: (cardId) => {
            dispatch(CardActions.removeCard(cardId));
        }
    }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;