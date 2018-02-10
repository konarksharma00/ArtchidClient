import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Welcome from '../containers/Welcome';

const Routers = () => {
    return (
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" component={ Welcome } />
            </Switch>
          </div>
        </BrowserRouter>
    )
}

export default Routers;
