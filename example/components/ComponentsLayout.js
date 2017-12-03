import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'next/link';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

const ComponentLink = (props) => {
  return (
    <NavItem>
      <Link href={props.item.to}>
        <a className={classNames('nav-link', { active: props.active })}>
          {props.item.name}
        </a>
      </Link>
    </NavItem>
  );
};

const propTypes = {
  children: PropTypes.node
};

class ComponentsLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navItems: [
        {
          name: 'Player',
          to: '/components/player'
        },
        {
          name: 'Shortcut',
          to: '/components/shortcut',
        },
        {
          name: 'BigPlayButton',
          to: '/components/big-play-button',
        },
        {
          name: 'PosterImage',
          to: '/components/poster-image',
        },
        {
          name: 'LoadingSpinner',
          to: '/components/loading-spinner'
        },
        {
          name: 'ControlBar',
          to: '/components/control-bar'
        },
        {
          name: 'PlayToggle',
          to: '/components/play-toggle'
        },
        {
          name: 'ReplayControl',
          to: '/components/replay-control',
        },
        {
          name: 'ForwardControl',
          to: '/components/forward-control',
        },
        {
          name: 'VolumeMenuButton',
          to: '/components/volume-menu-button',
        },
        {
          name: 'PlaybackRateMenuButton',
          to: '/components/playback-rate-menu-button',
        },
      ]
    };
  }
  render() {
    const { page } = this.props;
    return (
      <Container className="content">
        <Row>
          <Col md={{ size: 3, push: 9 }}>
            <div className="docs-sidebar mb-3">
              <h5>Components</h5>
              <Nav className="flex-column">
                {this.state.navItems.map((item, i) => {
                  return <ComponentLink key={i} item={item} active={page == item.name} />;
                })}
              </Nav>
            </div>
          </Col>
          <Col md={{ size: 9, pull: 3 }}>
            {this.props.children}
          </Col>
        </Row>
      </Container>
    );
  }
}

ComponentsLayout.propTypes = propTypes;
export default ComponentsLayout;
