import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import Home from './Home';
import NotFound from './NotFound';
import Components from './Components';
import UI from './UI';
import PlayerPage from './Components/PlayerPage';
import ShortcutPage from './Components/ShortcutPage';
import BigPlayButtonPage from './Components/BigPlayButtonPage';
import PosterImagePage from './Components/PosterImagePage';
import LoadingSpinnerPage from './Components/LoadingSpinnerPage';
import ControlBarPage from './Components/ControlBarPage';
import PlayTogglePage from './Components/PlayTogglePage';
import ForwardControlPage from './Components/ForwardControlPage';
import ReplayControlPage from './Components/ReplayControlPage';
import VolumeMenuButtonPage from './Components/VolumeMenuButtonPage';
import PlaybackRateMenuButtonPage from './Components/PlaybackRateMenuButtonPage';
import CaptionedVideoPage from './Components/CaptionedVideoPage';

import Customize from './Customize';
import EnableDisableComponentPage from './Customize/EnableDisableComponentPage';
import CustomizeComponentPage from './Customize/CustomizeComponentPage';
import CustomizeSourcePage from './Customize/CustomizeSourcePage';

const routes = (
  <Route path="/" component={UI.Layout}>
    <IndexRoute component={Home} />
    <Route path="index.html" component={Home} />
    <Route path="/components/" component={Components}>
      <IndexRedirect to="player/" />
      <Route path="player/" component={PlayerPage} />
      <Route path="shortcut/" component={ShortcutPage} />
      <Route path="big-play-button/" component={BigPlayButtonPage} />
      <Route path="poster-image/" component={PosterImagePage} />
      <Route path="loading-spinner/" component={LoadingSpinnerPage} />
      <Route path="control-bar/" component={ControlBarPage} />
      <Route path="play-toggle/" component={PlayTogglePage} />
      <Route path="forward-control/" component={ForwardControlPage} />
      <Route path="replay-control/" component={ReplayControlPage} />
      <Route path="volume-menu-button/" component={VolumeMenuButtonPage} />
      <Route
        path="playback-rate-menu-button/"
        component={PlaybackRateMenuButtonPage}
      />
      <Route path="captioned-video" component={CaptionedVideoPage} />
    </Route>
    <Route path="/customize/" component={Customize}>
      <IndexRedirect to="enable-disable-components/" />
      <Route
        path="enable-disable-components/"
        component={EnableDisableComponentPage}
      />
      <Route path="customize-component/" component={CustomizeComponentPage} />
      <Route path="customize-source/" component={CustomizeSourcePage} />
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
