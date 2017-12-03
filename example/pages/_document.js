import 'isomorphic-fetch';
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import Link from 'next/link';
import {
  NavbarToggler, Container,
  Collapse, Navbar,
  Nav, NavItem,
  Row, Col,
} from 'reactstrap';

export default class extends Document {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      showNavbar: false,
    };
  }
  toggleNavbar(e) {
    e.preventDefault();
    this.setState({
      showNavbar: !this.state.showNavbar,
    });
  }

  render () {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <title>Video-React - React Video Component</title>
          <meta name="description" content="Video-React is a web video player built from the ground up for an HTML5 world using React library."/>
          <link rel="icon" href="/static/favicon.ico" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossOrigin="anonymous" />
          <link rel="stylesheet" href="/static/docs.css" />
          <link rel="stylesheet" href="/static/video-react.css" />
          <link rel="stylesheet" href="/static/prism.css" />
          <script src="/static/prism.js" data-manual></script>
        </Head>
        <body>
          <div className="wrapper">
            <Navbar className="header" color="faded" light expand="md">
              <Container>
                <NavbarToggler onClick={this.toggleNavbar} />
                <Link href="/">
                  <a className="mr-auto navbar-brand">Video-React</a>
                </Link>
                <Collapse navbar isOpen={this.state.showNavbar}>
                  <Nav navbar className="ml-sm-auto">
                    <NavItem>
                      <Link href="/customize/">
                        <a className="nav-link">Customize</a>
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link href="/components/">
                        <a className="nav-link">Components</a>
                      </Link>
                    </NavItem>
                    <NavItem>
                      <a href="https://github.com/video-react/video-react" className="nav-link">Github</a>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Container>
            </Navbar>
            <Main />
            <div className="footer">
              <Container>
                <Row>
                  <Col className="text-center">
                    <p className="social">
                      <iframe src="https://ghbtns.com/github-btn.html?user=video-react&repo=video-react&type=star&count=true" frameBorder="0" scrolling="0" width="100" height="20px" />
                      <iframe src="https://ghbtns.com/github-btn.html?user=video-react&repo=video-react&type=fork&count=true" frameBorder="0" scrolling="0" width="100" height="20px" />
                      <a href="https://js.org" target="_blank" title="JS.ORG | JavaScript Community">
                        <img src="https://logo.js.org/dark_horz.png" height="20" alt="JS.ORG Logo" />
                      </a>
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>

          <NextScript />
        </body>
      </html>
    )
  }
}
