import React from 'react';
// import { Route, IndexRoute, IndexRedirect } from 'react-router';
import { Route } from 'react-router-dom';
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
import { Switch } from 'react-router';

// <IndexRoute component={Home} />

const routes = [
  { path: '/', component: Home, exact: true },
  { path: '/index.html', component: Home },

  {
    path: '/components/player/',
    component: <Components>PlayerPage</Components>
  },
  {
    path: '/components/shortcut/',
    component: <Components>ShortcutPage</Components>
  },
  {
    path: '/components/big-play-button/',
    component: <Components>BigPlayButtonPage</Components>
  },
  {
    path: '/components/poster-image/',
    component: <Components>PosterImagePage</Components>
  },
  {
    path: '/components/loading-spinner/',
    component: <Components>LoadingSpinnerPage</Components>
  },
  {
    path: '/components/control-bar/',
    component: <Components>ControlBarPage</Components>
  },
  {
    path: '/components/play-toggle/',
    component: <Components>PlayTogglePage</Components>
  },
  {
    path: '/components/forward-control/',
    component: <Components>ForwardControlPage</Components>
  },
  {
    path: '/components/replay-control/',
    component: <Components>ReplayControlPage</Components>
  },
  {
    path: '/components/volume-menu-button/',
    component: <Components>VolumeMenuButtonPage</Components>
  },
  {
    path: '/components/playback-rate-menu-button/',
    component: <Components>PlaybackRateMenuButtonPage</Components>
  },
  {
    path: '/components/captioned-video/',
    component: <Components>CaptionedVideoPage</Components>
  },
  { path: '/components', component: Components },

  {
    path: '/customize/enable-disable-components/',
    component: <Components>EnableDisableComponentPage</Components>
  },
  {
    path: '/customize/customize-component/',
    component: <Components>CustomizeComponentPage</Components>
  },
  {
    path: '/customize/customize-source/',
    component: <Components>CustomizeSourcePage</Components>
  },
  { path: '/customize/', component: Customize },
  { path: '/404.html', component: NotFound }
];
const routes2 = (
  <Route path="/" component={UI.Layout}>
    <Route path="index.html" component={Home} />
    <Route path="/components/" component={Components}>
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
      <Route
        path="enable-disable-components/"
        component={EnableDisableComponentPage}
      />
      <Route path="customize-component/" component={CustomizeComponentPage} />
      <Route path="customize-source/" component={CustomizeSourcePage} />
      <Route exact path="/" component={Home} />
    </Route>

    <Route component={NotFound} />
  </Route>
);

const App = () => {
  return (
    <UI.Layout>
      <Switch>
        <Route path="/index.html" component={Home} />
        <Route path="/" exact component={Home} />

        <Route
          path="/components"
          render={match => <Components match={match} />}
        />

        <Route
          path="/customize"
          render={match => <Customize match={match} />}
        />

        <Route path="/404.html" component={NotFound} />
      </Switch>
    </UI.Layout>
  );
};

export { routes, App };

// export default routes;

// <Route
//   path="/components"
//   render={match => <Components match={match} />}
// />
