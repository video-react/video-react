import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import Home from './Home';
import NotFound from './NotFound';
import Components from './Components';
import UI from './UI';
import PlayerPage from './Components/PlayerPage';
import BigPlayButtonPage from './Components/BigPlayButtonPage';
import PosterImagePage from './Components/PosterImagePage';
import LoadingSpinnerPage from './Components/LoadingSpinnerPage';
import ControlBarPage from './Components/ControlBarPage';
import PlayTogglePage from './Components/PlayTogglePage';
import ForwardControlPage from './Components/ForwardControlPage';
import ReplayControlPage from './Components/ReplayControlPage';
import VolumeMenuButtonPage from './Components/VolumeMenuButtonPage';

const routes = (
  <Route path="/" component={UI.Layout}>
    <IndexRoute component={Home} />
    <Route path="index.html" component={Home} />
    <Route path="/components/" component={Components}>
      <IndexRedirect to="player/" />
      <Route path="player/" component={PlayerPage} />
      <Route path="big-play-button/" component={BigPlayButtonPage} />
      <Route path="poster-image/" component={PosterImagePage} />
      <Route path="loading-spinner/" component={LoadingSpinnerPage} />
      <Route path="control-bar/" component={ControlBarPage} />
      <Route path="play-toggle/" component={PlayTogglePage} />
      <Route path="forward-control/" component={ForwardControlPage} />
      <Route path="replay-control/" component={ReplayControlPage} />
      <Route path="volume-menu-button/" component={VolumeMenuButtonPage} />
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
