import React from 'react';
import { Link } from 'react-router';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';

import Home from '../Home';
import PlayerPage from './PlayerPage';
import ShortcutPage from './ShortcutPage';
import BigPlayButtonPage from './BigPlayButtonPage';
import PosterImagePage from './PosterImagePage';
import LoadingSpinnerPage from './LoadingSpinnerPage';
import ControlBarPage from './ControlBarPage';
import PlayTogglePage from './PlayTogglePage';
import ForwardControlPage from './ForwardControlPage';
import ReplayControlPage from './ReplayControlPage';
import VolumeMenuButtonPage from './VolumeMenuButtonPage';
import PlaybackRateMenuButtonPage from './PlaybackRateMenuButtonPage';
import CaptionedVideoPage from './CaptionedVideoPage';
import NotFound from '../NotFound';

const ComponentLink = props => (
  <NavItem>
    <NavLink tag={Link} to={props.item.to} activeclassname="active">
      {props.item.name}
    </NavLink>
  </NavItem>
);

const Components = ({ match }) => {
  const navItems = [
    {
      name: 'Player',
      to: '/components/player/'
    },
    {
      name: 'Shortcut',
      to: '/components/shortcut/'
    },
    {
      name: 'BigPlayButton',
      to: '/components/big-play-button/'
    },
    {
      name: 'PosterImage',
      to: '/components/poster-image/'
    },
    {
      name: 'LoadingSpinner',
      to: '/components/loading-spinner/'
    },
    {
      name: 'ControlBar',
      to: '/components/control-bar/'
    },
    {
      name: 'PlayToggle',
      to: '/components/play-toggle/'
    },
    {
      name: 'ReplayControl',
      to: '/components/replay-control/'
    },
    {
      name: 'ForwardControl',
      to: '/components/forward-control/'
    },
    {
      name: 'VolumeMenuButton',
      to: '/components/volume-menu-button/'
    },
    {
      name: 'PlaybackRateMenuButton',
      to: '/components/playback-rate-menu-button/'
    },
    {
      name: 'ClosedCaptionButton',
      to: '/components/captioned-video'
    }
  ];
  // console.log('MATCH', match);
  return (
    <Container className="content">
      <Row>
        <Col md={{ size: 3 }}>
          <div className="docs-sidebar mb-3">
            <h5>Components</h5>
            <Nav className="flex-column">
              {navItems.map(item => (
                <ComponentLink key={item.name} item={item} />
              ))}
            </Nav>
          </div>
        </Col>
        <Col md={{ size: 9 }}>
          <Switch>
            <Route path="/components/player/" component={PlayerPage} />
            <Route path="/components/shortcut/" component={ShortcutPage} />
            <Route
              path="/components/big-play-button/"
              component={BigPlayButtonPage}
            />
            <Route
              path="/components/poster-image/"
              component={PosterImagePage}
            />
            <Route
              path="/components/loading-spinner/"
              component={LoadingSpinnerPage}
            />
            <Route path="/components/control-bar/" component={ControlBarPage} />
            <Route path="/components/play-toggle/" component={PlayTogglePage} />

            <Route
              path="/components/forward-control/"
              component={ForwardControlPage}
            />
            <Route
              path="/components/replay-control/"
              component={ReplayControlPage}
            />
            <Route
              path="/components/volume-menu-button/"
              component={VolumeMenuButtonPage}
            />
            <Route
              path="/components/playback-rate-menu-button/"
              component={PlaybackRateMenuButtonPage}
            />
            <Route path="captioned-video" component={CaptionedVideoPage} />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

export default Components;
