import React, { Component } from 'react';
import Head from 'next/head';
import { PrismCode } from 'react-prism';
import { Button } from 'reactstrap';
import Layout from '../../components/ComponentsLayout';
import ForwardControlExample from '../../examples/ForwardControl';

export default class ForwardControlPage extends Component {
  static async getInitialProps ({ query }) {
    const response = await fetch(`http://localhost:9000/code/ForwardControl.js`)
    const ForwardControlExampleSource = await response.text()
    return { ForwardControlExampleSource }
  }

  render() {
    const { ForwardControlExampleSource } = this.props;

    return (
      <Layout page="ForwardControl">
        <Head>
          <title>Video-React - ForwardControl</title>
        </Head>
        <h3>ForwardControl</h3>
        <p>
        A button in control bar to go forward 5/10/30 seconds.
        </p>
        <div className="docs-example">
          <ForwardControlExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ForwardControlExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`ForwardControl.propTypes = {

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
