import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { IndexRoute } from 'react-router';
import 'normalize.css/normalize.css';

import rootReducer from '../reducers';
import '../styles/styles.scss';
import Welcome from '../containers/Welcome';
import MyProfile from '../components/myProfile';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class Routers extends Component {
  constructor(props){
    super(props)
    this.state = {
      modalOpen: false
    }
  }
  render(){
    return(
      <Provider store={createStoreWithMiddleware(rootReducer)}>
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
