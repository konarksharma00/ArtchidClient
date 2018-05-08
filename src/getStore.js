import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';

import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import { initSagas } from './initSagas';
import reducer from './combineReducers';
import { defaultState } from './defaultState';

export const getStore = ()=>{
    const sagaMiddleware = createSagaMiddleware();
    const middleWares = [sagaMiddleware,thunk];
    const composables = [applyMiddleware(...middleWares)];
    const enhancer = compose(
        ... composables
);
    const store = createStore(
		reducer,
		defaultState,
        enhancer,
    );
    initSagas(sagaMiddleware);
    return store;
};