import React from 'react';
import Helmet from 'react-helmet';
import { Alert } from 'reactstrap';
import Footer from './Footer';
import Nav from './Nav';

// The home page is just the hero; its "Video-React docs" link leads into the rest of the site.
const HOME_PATHS = ['/', '/index.html'];

export default props => {
  const isHome = HOME_PATHS.includes(props.location.pathname);

  return (
    <div className="wrapper">
      <Helmet
        titleTemplate="Video-React - %s"
        title="React Video Component"
        defaultTitle="React Video Component"
        meta={[
          {
            name: 'description',
            content:
              'Video-React is a web video player built from the ground up for an HTML5 world using React library.'
          },
          {
            property: 'og:type',
            content: 'article'
          }
        ]}
      />
      {!isHome && <Nav />}
      <Alert color="warning" className="mb-0 text-center rounded-0">
        Video-React is in security-only maintenance until January 2028. Its
        successor is{' '}
        <a href="https://videojs.org?utm_source=video-react">Video.js 10</a>.{' '}
        <a href="https://videojs.org/docs/guides/installation/react?utm_source=video-react">
          Get started
        </a>
      </Alert>
      <main className={isHome ? 'main main-home' : 'main'}>
        {props.children}
      </main>
      <Footer />
    </div>
  );
};
