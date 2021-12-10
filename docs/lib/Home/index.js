import React from 'react';
import { Prism as PrismCode } from 'react-syntax-highlighter';
import { Button, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router';
import BasicExample from '../examples/import-basic';

const importBasic = require('!!raw-loader!../examples/import-basic');

export default function Home() {
  return (
    <div>
      <div className="rounded px-3 px-sm-4 py-3 py-sm-5">
        <Container>
          <Row>
            <Col>
              <p className="lead">
                <img src="/assets/logo.png" alt="" width="150px" />
              </p>
              <h1 className="jumbotron-heading display-4">Video-React</h1>
              <p className="lead">
                The web video player built from the ground up for an HTML5 world
                using React library.
              </p>
              <p>
                <Button
                  outline
                  color="danger"
                  href="https://github.com/video-react/video-react"
                >
                  View on Github
                </Button>
                <Button color="danger" tag={Link} to="/components/">
                  View Components
                </Button>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container fluid>
        <Row>
          <Col sm={{ size: 8, offset: 2 }}>
            <h2>Installation</h2>
            <hr />
            <h3>NPM</h3>
            <p>Install video-react and peer dependencies via NPM</p>
            <pre>
              <PrismCode language="bash">
                npm install --save video-react react react-dom redux
              </PrismCode>
            </pre>
            <h3>Basic example</h3>
            <p>The basic player</p>
            <div className="docs-example">
              <BasicExample />
            </div>
            <p>import css in your app or add video-react styles in your page</p>
            <pre>
              <PrismCode language="jsx">
                import "node_modules/video-react/dist/video-react.css"; //
                import css
              </PrismCode>
            </pre>
            <pre>
              <PrismCode language="jsx">
                @import "~video-react/styles/scss/video-react"; // or import
                scss
              </PrismCode>
            </pre>
            <pre>
              <PrismCode language="html">
                &lt;link rel="stylesheet" href="/css/video-react.css" /&gt;
              </PrismCode>
            </pre>
            <pre>
              <PrismCode language="jsx">{importBasic}</PrismCode>
            </pre>

            <h2 className="m-t-3">Development</h2>
            <hr />
            <p>Install dependencies:</p>
            <pre>
              <PrismCode language="bash">npm install</PrismCode>
            </pre>
            <p>
              Run examples at{' '}
              <a href="http://localhost:9000/" target="_blank" rel="noreferrer">
                http://localhost:9000/
              </a>{' '}
              with webpack dev server:
            </p>
            <pre>
              <PrismCode language="bash">npm start</PrismCode>
            </pre>
            <p>Run tests & coverage report:</p>
            <pre>
              <PrismCode language="bash">npm test</PrismCode>
            </pre>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
