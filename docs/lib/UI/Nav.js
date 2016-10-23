import React from 'react';
import { Link } from 'react-router';
import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default () => {
  return (
    <Navbar className="header" color="faded" light>
      <Container fluid>
        <NavbarBrand tag={Link} to="/">video-react</NavbarBrand>
        <Nav className="nav navbar-nav pull-xs-right">
          <NavItem>
            <NavLink href="https://github.com/video-react/video-react">Github</NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};
