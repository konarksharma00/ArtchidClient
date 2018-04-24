import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { IndexRoute } from 'react-router';
import 'normalize.css/normalize.css';

import { getStore } from '../getStore';
import rootReducer from '../combineReducers';
import '../styles/styles.scss';
import Welcome from '../containers/Welcome';
import MyProfile from '../components/myProfile';
import { initSagas } from '../initSagas';

// const sagaMiddleware = createSagaMiddleware()

const store = getStore();

// const store = createStore(
//   rootReducer,
//   applyMiddleware(sagaMiddleware)
// )

// initSagas(sagaMiddleware);

class Routers extends Component {
  constructor(props){
    super(props)
    this.state = {
      modalOpen: false
    }
  }
  render(){
    return(
      <Provider store={store}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/profile" component={ MyProfile } />
            <Route  path="/" component={ Welcome } />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
    )
  }
}

export default Routers;
