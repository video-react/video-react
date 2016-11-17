import React from 'react';
import { Link } from 'react-router';
import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default () => {
  return (
    <Navbar className="header" color="faded" light>
      <Container fluid>
        <NavbarBrand tag={Link} to="/">Video-React</NavbarBrand>
        <Nav className="nav navbar-nav float-xs-right">
          <NavItem>
            <NavLink tag={Link} className="nav-link" to="/components/" activeClassName="active">Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/video-react/video-react">Github</NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};
