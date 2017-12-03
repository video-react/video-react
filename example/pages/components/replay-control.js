import React, { Component } from 'react';
import Head from 'next/head';
import { PrismCode } from 'react-prism';
import { Button } from 'reactstrap';
import Layout from '../../components/ComponentsLayout';

import ReplayControlExample from '../../examples/ReplayControl';

export default class ReplayControlPage extends Component {
  static async getInitialProps ({ query }) {
    const response = await fetch(`http://localhost:9000/code/ReplayControl.js`)
    const ReplayControlExampleSource = await response.text()
    return { ReplayControlExampleSource }
  }

  render() {
    const { ReplayControlExampleSource } = this.props;
    return (
      <Layout page="ReplayControl">
        <Head>
          <title>Video-React - ReplayControl</title>
        </Head>
        <h3>ReplayControl</h3>
        <p>
        A button in control bar to go forward 5/10/30 seconds.
        </p>
        <div className="docs-example">
          <ReplayControlExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ReplayControlExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`ReplayControl.propTypes = {

  // How many seconds to go forward
  // default: 10
  seconds: React.PropTypes.oneOf([5, 10, 30]),

}`}
          </PrismCode>
        </pre>
      </Layout>
    );
  }
}
