import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
// imported by Tim
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import createSagaMiddleware from 'redux-saga';

function* watchSaga() {
    // yield something
}

const sagaMiddleware = createSagaMiddleware();

// reducers


// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        basketReducer,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(watchSaga);

ReactDOM.render(<Provider store= {storeInstance}><App /></Provider>, document.getElementById('root'));
