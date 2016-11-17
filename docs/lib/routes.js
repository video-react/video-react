import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import Home from './Home';
import NotFound from './NotFound';
import Components from './Components';
import UI from './UI';
import PlayerPage from './Components/PlayerPage';
import BigPlayButtonPage from './Components/BigPlayButtonPage';

const routes = (
  <Route path="/" component={UI.Layout}>
    <IndexRoute component={Home} />
        <Route path="/components/" component={Components}>
       <IndexRedirect to="player/" />
       <Route path="player/" component={PlayerPage} />
       <Route path="big-play-button/" component={BigPlayButtonPage} />
     </Route>
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
