import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import AppContainer from './components/AppContainer.jsx';
import indexReducer from './components/reducers/index-reducer';
import createLogger from 'redux-logger';

const middleware = applyMiddleware(createLogger());
const store = createStore(indexReducer, middleware);

ReactDOM.render(
    <Provider store = {store} >
        <AppContainer />
    </Provider>,
    document.getElementById('app')
);