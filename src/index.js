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

function* watchSaga() {
    // yield something
    try {
        yield takeEvery('FETCH_FAVORITE', fetchFavorite);
    }
    catch(error){
        console.log('error in watch saga', error);
    }
}

const sagaMiddleware = createSagaMiddleware();

// reducers
const favoritesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FAVORITE':
            return action.payload;
        default:
            return state;
    }
}

function* fetchFavorite(){
    try{
        const favoriteResponse = yield axios.get('/api/favorite');
        yield put ({type:'SET_FAVORITE', payload: favoriteResponse.data})
    }
    catch(error){
        console.log('error fetchFavorite', error);
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        favoritesReducer,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(watchSaga);

ReactDOM.render(<Provider store= {storeInstance}><App /></Provider>, document.getElementById('root'));
