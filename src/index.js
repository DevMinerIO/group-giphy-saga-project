import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
// imported by Tim
// import './index.css';
// import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import createSagaMiddleware from 'redux-saga';

// Generator Function for getSearch with sagas
function* getSearch(action) {
    // action.payload is what we put in the search bar. sent as template literal.
    console.log(action.payload);
    try {
        const gifResponse = yield axios.get(`/api/category/search/${action.payload}`)
        yield console.log('RESPONSE HERE', gifResponse);
        yield put({ type: 'GET_GIFS', payload: gifResponse.data.data })
        // gifResult is from the variable made above this line. 
        // 'GET_GIFS has to match what is in the reducer
        // yield console.log('RESULT FROM DB', gifResult.data);
        // yield put({ type: 'GET_GIFS', payload: gifResult.data })
    }
    catch (error) {
        console.log('ERROR in getSearch in index.js:', error);
    }
}

function* watchSaga() {
    // yield something
    // action type 'GIF_SELECT' has to match what is in the Search.jsx
    yield takeEvery('GIF_SELECT', getSearch);
}

const sagaMiddleware = createSagaMiddleware();

// reducers
const gifList = (state = [], action) => {
    switch (action.type) {
        case 'GET_GIFS':
            console.log('ACTION.PAYLOAD gifList', action.payload);
            return action.payload;
        default:
            return state;
    }
}


// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        gifList,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(watchSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
