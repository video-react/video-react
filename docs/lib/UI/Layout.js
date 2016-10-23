import React from 'react';
import Helmet from 'react-helmet';
import Footer from './Footer';
import Nav from './Nav';

export default (props) => {
  return (
    <div className="wrapper">
      <Helmet
        titleTemplate="reactstrap - %s"
        title="React Bootstrap 4 components"
        defaultTitle="React Bootstrap 4 components"
        meta={[
          {
            name: 'description',
            content: 'Video-React is a web video player built from the ground up for an HTML5 world using React library.',
          },
          {
            property: 'og:type',
            content: 'article',
          }
        ]}
      />
      <Nav />
      {props.children}
      <Footer />
    </div>
  );
};
