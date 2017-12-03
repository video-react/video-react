import React, { Component } from 'react';
import Head from 'next/head';
import { PrismCode } from 'react-prism';
import Layout from '../../components/ComponentsLayout';
import ControlBarExample from '../../examples/ControlBar';

export default class ControlBarPage extends Component {
  static async getInitialProps() {
    const response = await fetch(`http://localhost:9000/code/ControlBar.js`);
    const ControlBarExampleSource = await response.text();
    return { ControlBarExampleSource };
  }

  render() {
    const { ControlBarExampleSource } = this.props;
    return (
      <Layout page="ControlBar">
        <Head>
          <title>Video-React - ControlBar</title>
        </Head>
        <h3>ControlBar</h3>
        <p>
        The Html5 video's control bar is hidden, the player offers a customizable control bar to allow the user to control video playback, including volume, seeking, and pause/resume playback.
        </p>
        <div className="docs-example">
          <ControlBarExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ControlBarExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`ControlBar.propTypes = {

  // Hide the control bar automatically after the player is inactive
  // default: 'true'
  autoHide: PropTypes.bool,

}`}
          </PrismCode>
        </pre>
      </Layout>
    );
  }
}
