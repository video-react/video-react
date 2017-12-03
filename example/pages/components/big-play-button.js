import React, { Component } from 'react';
import Head from 'next/head';
import { PrismCode } from 'react-prism';
import Layout from '../../components/ComponentsLayout';

import BigPlayButtonExample from '../../examples/BigPlayButton';

export default class BigPlayButtonPage extends Component {
  static async getInitialProps() {
    const response = await fetch(`http://localhost:9000/code/BigPlayButton.js`);
    const BigPlayButtonExampleSource = await response.text();
    return { BigPlayButtonExampleSource };
  }

  render() {
    const { BigPlayButtonExampleSource } = this.props;
    return (
      <Layout page="BigPlayButton">
        <Head>
          <title>Video-React - BigPlayButton</title>
        </Head>
        <h3>BigPlayButton</h3>
        <p>
        Initial play button. Shows before the video has played. The hiding of the big play button is done via CSS and player states.
        </p>
        <div className="docs-example">
          <BigPlayButtonExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {BigPlayButtonExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`BigPlayButton.propTypes = {

  // The default position is left-top,
  // another position is 'center'
  // it has a css named \`video-react-big-play-button-$\{position\}\`
  // default: 'left'
  position: PropTypes.string,

}`}
          </PrismCode>
        </pre>
      </Layout>
    );
  }
}
