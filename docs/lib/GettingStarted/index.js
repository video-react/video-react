import React from 'react';
import { PrismCode } from 'react-prism';
import { Button, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import BasicExample from '../examples/import-basic';

const importBasic = require('../examples/import-basic?raw');
const videoJsExample = require('../../videojs-demo/src/Player.jsx?raw');

const migrateUrl =
  'https://videojs.org/docs/framework/react/guides/migrate-from-video-react?utm_source=video-react';
const installUrl =
  'https://videojs.org/docs/guides/installation/react?utm_source=video-react';

export default () => {
  return (
    <div>
      <Helmet title="Getting Started" />
      <Container fluid className="content">
        <Row>
          <Col sm={{ size: 8, offset: 2 }}>
            <h2>Video.js 10 for React</h2>
            <hr />
            <p>
              Video.js 10 ships as <code>@videojs/react</code>. The{' '}
              <code>video.js</code> package on npm is still Video.js 8.
            </p>
            <h3>NPM</h3>
            <p>
              Install Video.js and the Mux video adapter used in this example
            </p>
            <pre>
              <PrismCode className="language-bash">
                npm install @videojs/react @videojs/mux-video
              </PrismCode>
            </pre>
            <h3>Basic example</h3>
            <p>
              The player on the <Link to="/">home page</Link>. Use{' '}
              <code>Video</code> from <code>@videojs/react/video</code> instead
              of <code>MuxVideo</code> to play a plain MP4 file. See the{' '}
              <a href={installUrl}>installation guide</a> for other sources and
              skins.
            </p>
            <pre>
              <PrismCode className="language-jsx">{videoJsExample}</PrismCode>
            </pre>

            <h3>Migrating from Video-React</h3>
            <p>
              The <a href={migrateUrl}>Migrate from Video-React guide</a> maps{' '}
              <code>Player</code> props, control bar children, the player ref,
              and Redux state to Video.js 10. Check its &quot;Known gaps&quot;
              section against the features you use before you switch.
            </p>
            <p>
              Using a coding agent? Paste the prompt from the guide&apos;s{' '}
              <a href={`${migrateUrl}#ai-quickstart`}>AI Quickstart</a> section
              into your agent.
            </p>

            <h2 id="video-react-docs" className="mt-5">
              Video-React
            </h2>
            <hr />
            <p>
              These docs are kept for existing projects. Video-React only
              receives security fixes until January 2028.
            </p>
            <h3>NPM</h3>
            <p>Install video-react and peer dependencies via NPM</p>
            <pre>
              <PrismCode className="language-bash">
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
              <PrismCode className="language-jsx">
                import "node_modules/video-react/dist/video-react.css"; //
                import css
              </PrismCode>
            </pre>
            <pre>
              <PrismCode className="language-jsx">
                @import "~video-react/styles/scss/video-react"; // or import
                scss
              </PrismCode>
            </pre>
            <pre>
              <PrismCode className="language-html">
                &lt;link rel="stylesheet" href="/css/video-react.css" /&gt;
              </PrismCode>
            </pre>
            <pre>
              <PrismCode className="language-jsx">{importBasic}</PrismCode>
            </pre>
            <p>
              <Button outline color="danger" tag={Link} to="/components/">
                View Components
              </Button>
            </p>

            <h2 className="m-t-3">Development</h2>
            <hr />
            <p>Install dependencies:</p>
            <pre>
              <PrismCode className="language-bash">npm install</PrismCode>
            </pre>
            <p>
              Run examples at{' '}
              <a href="http://localhost:9000/" target="_blank">
                http://localhost:9000/
              </a>{' '}
              with webpack dev server:
            </p>
            <pre>
              <PrismCode className="language-bash">npm start</PrismCode>
            </pre>
            <p>Run tests & coverage report:</p>
            <pre>
              <PrismCode className="language-bash">npm test</PrismCode>
            </pre>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
