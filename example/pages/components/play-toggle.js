import React, { Component } from 'react';
import Head from 'next/head';
import { PrismCode } from 'react-prism';
import { Button } from 'reactstrap';
import Layout from '../../components/ComponentsLayout';
import PlayToggleExample from '../../examples/PlayToggle';

export default class PlayTogglePage extends Component {
  static async getInitialProps ({ query }) {
    const response = await fetch(`http://localhost:9000/code/PlayToggle.js`)
    const PlayToggleExampleSource = await response.text()
    return { PlayToggleExampleSource }
  }

  render() {
    const { PlayToggleExampleSource } = this.props;
    return (
      <Layout page="PlayToggle">
        <Head>
          <title>Video-React - PlayToggle</title>
        </Head>
        <h3>PlayToggle</h3>
        <p>
        A button component to toggle between play and pause.
        </p>
        <div className="docs-example">
          <PlayToggleExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {PlayToggleExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`PlayToggle.propTypes = {

// no customizable properties,

}`}
          </PrismCode>
        </pre>
      </Layout>
    );
  }
}
