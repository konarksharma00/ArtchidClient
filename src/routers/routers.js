import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import 'normalize.css/normalize.css';

import { getStore } from '../getStore';
import '../styles/styles.scss';
import Welcome from '../containers/Welcome';
import MyProfile from '../components/myProfile';

const store = getStore();

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
