import React from 'react';
import { Link } from 'react-router';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

const CustomizeLink = props => (
  <NavItem>
    <NavLink tag={Link} to={props.item.to} activeClassName="active">
      {props.item.name}
    </NavLink>
  </NavItem>
);

class Customize extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navItems: [
        {
          name: 'Enable Disable Component',
          to: '/customize/enable-disable-components/'
        },
        {
          name: 'Customize Component',
          to: '/customize/customize-component/'
        },
        {
          name: 'Customize Video Source',
          to: '/customize/customize-source/'
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
              <h5>Customize</h5>
              <Nav className="flex-column">
                {this.state.navItems.map(item => (
                  <CustomizeLink key={item.name} item={item} />
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

export default Customize;
