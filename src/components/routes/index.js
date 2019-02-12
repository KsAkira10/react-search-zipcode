import React, { Fragment, Component } from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import browserHistory from '../../utils/browserHistory';
import Home from '../home';
import './routes.css';

export default class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Fragment>
          {/* <Fragment>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
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
