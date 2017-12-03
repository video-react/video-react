import React from 'react';
import { PrismCode } from 'react-prism';
import { Button } from 'reactstrap';
import Head from 'next/head';
import Layout from '../../components/CustomizeLayout';
import CustomizeComponentExample from '../../examples/CustomizeComponentExample';

export default class CustomizeComponentPage extends React.Component {

  static async getInitialProps ({ query }) {
    const responseDownloadButton = await fetch(`http://localhost:9000/code/DownloadButton.js`)
    const responseCustomizeComponentExample = await fetch(`http://localhost:9000/code/CustomizeComponentExample.js`)
    const DownloadButtonSource = await responseDownloadButton.text()
    const CustomizeComponentExampleSource = await responseCustomizeComponentExample.text()
    return { DownloadButtonSource, CustomizeComponentExampleSource }
  }

  render() {
    const { DownloadButtonSource, CustomizeComponentExampleSource } = this.props;
    return (
      <Layout page="Customize Component">
        <Head>
          <title>Video-React - Customize Component</title>
        </Head>
        <h3>Customize Component</h3>
        <p>
          There is an example on how to add a download button component into <code>Video-React</code> Player.
        </p>
        <div className="docs-example">
          <CustomizeComponentExample />
        </div>
        <p />
        <h4>DownloadButton Component</h4>
        <pre>
          <PrismCode className="language-jsx">
            {DownloadButtonSource}
          </PrismCode>
        </pre>
        <h4>Using the Download Button Component</h4>
        <pre>
          <PrismCode className="language-jsx">
            {CustomizeComponentExampleSource}
          </PrismCode>
        </pre>
      </Layout>
    );
  }
}
