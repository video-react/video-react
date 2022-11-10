import React from 'react';
import { Link } from 'react-router';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

const ComponentLink = props => (
  <NavItem>
    <NavLink tag={Link} to={props.item.to} activeClassName="active">
      {props.item.name}
    </NavLink>
  </NavItem>
);

class Components extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navItems: [
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
      ]
    };
  }

  render() {
    return (
      <Container className="content">
        <Row>
          <Col md={{ size: 3 }}>
            <div className="docs-sidebar mb-3">
              <h5>Components</h5>
              <Nav className="flex-column">
                {this.state.navItems.map(item => (
                  <ComponentLink key={item.name} item={item} />
                ))}
              </Nav>
            </div>
          </Col>
          <Col md={{ size: 9 }}>{this.props.children}</Col>
        </Row>
      </Container>
    );
  }
}

export default Components;
