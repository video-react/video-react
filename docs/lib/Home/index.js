import React from 'react';
import { Button, Container, Row, Col, Jumbotron } from 'reactstrap';
import { Link } from 'react-router';
import VideoJsDemo from '../UI/VideoJsDemo';

const videoJsUrl = 'https://videojs.org/?utm_source=video-react';
const migrateUrl =
  'https://videojs.org/docs/framework/react/guides/migrate-from-video-js-8?utm_source=video-react';

export default () => {
  return (
    <Jumbotron tag="section" className="jumbotron-header jumbotron-hero">
      <Container>
        <Row className="align-items-center">
          <Col lg="5" className="text-center text-lg-left mb-4 mb-lg-0">
            <h1 className="jumbotron-heading display-4">
              Video-React was always Video.js at heart{' '}
              <span role="img" aria-label="heart">
                ❤️
              </span>
            </h1>
            <p className="lead">
              It began as Video.js rebuilt for React: the same components, the
              same styles. Now Video.js is built for React from the start.
            </p>
            <p>
              Video.js 10 is built by the teams behind Video.js, Vidstack, Plyr,
              and Media Chrome. Video-React is now deprecated and receives
              security fixes only. Start new projects with Video.js&nbsp;10.
            </p>
            <p>
              <Button color="danger" href={videoJsUrl}>
                Check out Video.js
              </Button>
              <Button outline color="danger" href={migrateUrl}>
                Migrate from Video-React
              </Button>
            </p>
            <p className="text-muted small">
              The{' '}
              <Link to="/getting-started/#video-react-docs">
                Video-React docs
              </Link>{' '}
              are still here if you need them.
            </p>
          </Col>
          <Col lg="7">
            <VideoJsDemo />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};
