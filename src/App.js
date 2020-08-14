import React from 'react';
import { Route, Switch} from 'react-router-dom'

import Layout1 from './layouts/Layout1';
import AuthLayout1 from './layouts/AuthLayout1';
import BlankLayout from './layouts/BlankLayout';

class App extends React.Component {

  render() {
    return (
        <div className="App">
          <Switch>
            <Route exact path="/" component={Layout1} />
            <Route path="/pages/:page" component={BlankLayout} />
            <Route path="/dashboard3/:page" component={Layout1} />
            <Route path="/dashboard4/:page" component={Layout1} />
            <Route path="/auth/:page" component={AuthLayout1} />
          </Switch>
        </div>
    );
  }
}

export default App;
