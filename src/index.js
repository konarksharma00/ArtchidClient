import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import rootReducer from './reducers';
import Routers from './routers/routers';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const App = (
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <Routers />
    </Provider>
);

ReactDOM.render(App , document.querySelector('#artchidWeb'));