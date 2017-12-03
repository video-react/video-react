import React from 'react';
import { PrismCode } from 'react-prism';
import { Button } from 'reactstrap';
import Head from 'next/head';
import Layout from '../../components/CustomizeLayout';
import CustomizeSourceExample from '../../examples/CustomizeSource';

export default class CustomizeSourcePage extends React.Component {

  static async getInitialProps ({ query }) {
    const responseCustomizeSource = await fetch(`http://localhost:9000/code/CustomizeSource.js`)
    const responseHLSSource = await fetch(`http://localhost:9000/code/HLSSource.js`)
    const CustomizeSourceExampleSource = await responseCustomizeSource.text()
    const HLSSourceSource = await responseHLSSource.text()
    return { CustomizeSourceExampleSource, HLSSourceSource }
  }

  render() {
    const { CustomizeSourceExampleSource, HLSSourceSource } = this.props;
    return (
      <Layout page="Customize Video Source">
        <Head>
          <title>Video-React - Customize Video Source</title>
        </Head>
        <h3>Customize Video Source</h3>
        <p>
        This is an example on how to customize a HLS video source.
        </p>
        <div className="docs-example">
          <CustomizeSourceExample />
        </div>
        <p></p>
        <h4>HLSSource Component</h4>
        <pre>
          <PrismCode className="language-jsx">
            {HLSSourceSource}
          </PrismCode>
        </pre>
        <h4>Customize Source Example</h4>
        <pre>
          <PrismCode className="language-jsx">
            {CustomizeSourceExampleSource}
          </PrismCode>
        </pre>
      </Layout>
    );
  }
}
