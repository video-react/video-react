import React, { Component } from 'react';
import Head from 'next/head';
import { PrismCode } from 'react-prism';
import { Button } from 'reactstrap';
import Layout from '../../components/ComponentsLayout';
import PlaybackRateMenuButtonExample from '../../examples/PlaybackRateMenuButton';

export default class PlaybackRateMenuButtonPage extends Component {
  static async getInitialProps ({ query }) {
    const response = await fetch(`http://localhost:9000/code/PlaybackRateMenuButton.js`)
    const PlaybackRateMenuButtonExampleSource = await response.text()
    return { PlaybackRateMenuButtonExampleSource }
  }

  render() {
    const { PlaybackRateMenuButtonExampleSource } = this.props;
    return (
      <Layout page="PlaybackRateMenuButton">
        <Head>
          <title>Video-React - PlaybackRateMenuButton</title>
        </Head>
        <h3>PlaybackRateMenuButton</h3>
        <p>
        The dropdown menu to control the playback rates.
        </p>
        <div className="docs-example">
          <PlaybackRateMenuButtonExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {PlaybackRateMenuButtonExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`PlaybackRateMenuButton.propTypes = {

  // The direction where Volume Bar popup
  // default: [2, 1.5, 1.25, 1, 0.5, 0.25]
  rates: PropTypes.array,

}`}
          </PrismCode>
        </pre>
      </Layout>
    );
  }
}
