import { connect } from 'react-redux';

import * as TaskActions from './actions/task-actions';
import * as DraftActions from './actions/draft-actions';
import App from './ui/App.jsx';

const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = (dispatch) => {
    return {
        /*** for tasks ***/
        addTask: (cardId, taskName) => {
            dispatch(TaskActions.add(cardId, taskName));
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
        }
    }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;