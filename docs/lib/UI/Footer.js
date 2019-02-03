import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col className="text-center">
            <p className="social">
              <iframe
                src="https://ghbtns.com/github-btn.html?user=video-react&repo=video-react&type=star&count=true"
                frameBorder="0"
                scrolling="0"
                width="100"
                height="20px"
              />
              <iframe
                src="https://ghbtns.com/github-btn.html?user=video-react&repo=video-react&type=fork&count=true"
                frameBorder="0"
                scrolling="0"
                width="100"
                height="20px"
              />
              <a
                href="https://js.org"
                target="_blank"
                title="JS.ORG | JavaScript Community"
              >
                <img
                  src="https://logo.js.org/dark_horz.png"
                  height="20"
                  alt="JS.ORG Logo"
                />
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
