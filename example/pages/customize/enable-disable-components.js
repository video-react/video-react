import React from 'react';
import { PrismCode } from 'react-prism';
import { Button } from 'reactstrap';
import Head from 'next/head';
import Layout from '../../components/CustomizeLayout';
import EnableDisableComponentExample from '../../examples/EnableDisableComponent';

export default class EnableDisableComponentPage extends React.Component {
  static async getInitialProps ({ query }) {
    const response = await fetch(`http://localhost:9000/code/EnableDisableComponent.js`)
    const EnableDisableComponentExampleSource = await response.text()
    return { EnableDisableComponentExampleSource }
  }

  render() {
    const { EnableDisableComponentExampleSource } = this.props;
    return (
      <Layout page="Enable Disable Component">
        <Head>
          <title>Video-React - Enable Disable Default Components</title>
        </Head>
        <h3>Enable & Disable Default Components</h3>
        <p>
        The components can be enabled or disabled.
        </p>
        <div className="docs-example">
          <EnableDisableComponentExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {EnableDisableComponentExampleSource}
          </PrismCode>
        </pre>
      </Layout>
    );
  }
}
