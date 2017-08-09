/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import PresentationPage from './containers/PresentationPage';

export default () => (
  <App>
    <Switch>
      <Route path="/counter" component={CounterPage} />
      <Route path="/presentation" component={PresentationPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
