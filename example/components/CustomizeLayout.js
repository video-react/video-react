import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'next/link';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

const CustomizeLink = (props) => {
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

class CustomizeLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navItems: [
        {
          name: 'Enable Disable Component',
          to: '/customize/enable-disable-components'
        },
        {
          name: 'Customize Component',
          to: '/customize/customize-component'
        },
        {
          name: 'Customize Video Source',
          to: '/customize/customize-source'
        }
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
              <h5>Customize</h5>
              <Nav className="flex-column">
                {this.state.navItems.map((item, i) => {
                  return <CustomizeLink key={i} item={item} active={page == item.name} />;
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

CustomizeLayout.propTypes = propTypes;
export default CustomizeLayout;
