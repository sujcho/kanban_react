import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import AppContainer from './components/AppContainer.jsx';
import indexReducer from './components/reducers/index-reducer';
import createLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

const middleware = applyMiddleware(ReduxThunk,createLogger());
const store = createStore(indexReducer, middleware);

ReactDOM.render(
    <Provider store = {store} >
        <AppContainer />
    </Provider>,
    document.getElementById('app')
);