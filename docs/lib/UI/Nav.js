import React from 'react';
import { Link } from 'react-router';
import {
  NavbarToggler,
  Container,
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

export default class UINav extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      showNavbar: false
    };
  }

  toggleNavbar(e) {
    e.preventDefault();
    this.setState(state => ({
      showNavbar: !state.showNavbar
    }));
  }

  render() {
    return (
      <Navbar className="header" color="faded" light expand="md">
        <Container>
          <NavbarToggler onClick={this.toggleNavbar} />
          <NavbarBrand className="mr-auto" tag={Link} to="/">
            Video-React
          </NavbarBrand>
          <Collapse navbar isOpen={this.state.showNavbar}>
            <Nav navbar className="ml-sm-auto">
              <NavItem>
                <NavLink
                  tag={Link}
                  className="nav-link"
                  to="/customize/"
                  activeClassName="active"
                >
                  Customize
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={Link}
                  className="nav-link"
                  to="/components/"
                  activeClassName="active"
                >
                  Components
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/video-react/video-react">
                  Github
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}
