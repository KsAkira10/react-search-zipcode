import React, { Fragment, Component } from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import browserHistory from '../../utils/browserHistory';
import Home from '../home';

export default class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Fragment>
          {/* <Fragment>
            <header>
              <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">Navbar</span>
              </nav>
            </header>
          </Fragment> */}
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
