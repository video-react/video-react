import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import Home from './Home';
import NotFound from './NotFound';
import UI from './UI';

const routes = (
  <Route path="/" component={UI.Layout}>
    <IndexRoute component={Home} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
