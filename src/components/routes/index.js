import React, { Fragment, Component } from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import browserHistory from '../../utils/browserHistory';
import Home from '../home';

export default class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Fragment>
          <Route
            render={() => (
              <Switch>
                <Route exact path="/" component={Home} />
                <Redirect to="/" />
              </Switch>
            )}
          />
        </Fragment>
      </Router>
    );
  }
}
