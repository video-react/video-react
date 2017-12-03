import React, { Component } from 'react';
import Head from 'next/head';
import { PrismCode } from 'react-prism';
import { Button } from 'reactstrap';
import Layout from '../../components/ComponentsLayout';

import PosterImageExample from '../../examples/PosterImage';

export default class PosterImagePage extends React.Component {
  static async getInitialProps ({ query }) {
    const response = await fetch(`http://localhost:9000/code/PosterImage.js`)
    const PosterImageExampleSource = await response.text()
    return { PosterImageExampleSource }
  }

  render() {
    const { PosterImageExampleSource } = this.props;
    return (
      <Layout page="PosterImage">
        <Head>
          <title>Video-React - PosterImage</title>
        </Head>
        <h3>PosterImage</h3>
        <p>
        The <code>PosterImage</code> specifies an image to be shown while the video is downloading, or until the user hits the play button. If this is not included, the first frame of the video will be used instead.
        </p>
        <div className="docs-example">
          <PosterImageExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {PosterImageExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`
PosterImage.propTypes = {

  // The poster image url
  poster: PropTypes.string,

}`}
          </PrismCode>
        </pre>
      </Layout>
    );
  }
}
