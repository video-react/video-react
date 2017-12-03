import React, { Component } from 'react';
import Head from 'next/head';
import { PrismCode } from 'react-prism';
import { Button } from 'reactstrap';
import Layout from '../../components/ComponentsLayout';
import VolumeMenuButtonExample from '../../examples/VolumeMenuButton';

export default class VolumeMenuButtonPage extends React.Component {
  static async getInitialProps ({ query }) {
    const response = await fetch(`http://localhost:9000/code/VolumeMenuButton.js`)
    const VolumeMenuButtonExampleSource = await response.text()
    return { VolumeMenuButtonExampleSource }
  }

  render() {
    const { VolumeMenuButtonExampleSource } = this.props;
    return (
      <Layout page="VolumeMenuButton">
        <Head>
          <title>Video-React - VolumeMenuButton</title>
        </Head>
        <h3>VolumeMenuButton</h3>
        <p>
        Button for volume popup.
        </p>
        <div className="docs-example">
          <VolumeMenuButtonExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {VolumeMenuButtonExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`VolumeMenuButton.propTypes = {

  // The direction where Volume Bar popup
  // default: false
  vertical: PropTypes.bool,

}`}
          </PrismCode>
        </pre>
      </Layout>
    );
  }
}
