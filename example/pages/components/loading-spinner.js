import React, { Component } from 'react';
import Head from 'next/head';
import { PrismCode } from 'react-prism';
import { Button } from 'reactstrap';
import Layout from '../../components/ComponentsLayout';
import LoadingSpinnerExample from '../../examples/LoadingSpinner';

export default class LoadingSpinnerPage extends Component {
  static async getInitialProps ({ query }) {
    const response = await fetch(`http://localhost:9000/code/LoadingSpinner.js`)
    const LoadingSpinnerExampleSource = await response.text()
    return { LoadingSpinnerExampleSource }
  }

  render() {
    const { LoadingSpinnerExampleSource } = this.props;

    return (
      <Layout page="LoadingSpinner">
        <Head>
          <title>Video-React - LoadingSpinner</title>
        </Head>
        <h3>LoadingSpinner</h3>
        <p>
        There would be a loading spinner to display before the video is loaded.
        </p>
        <div className="docs-example">
          <LoadingSpinnerExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {LoadingSpinnerExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`LoadingSpinner.propTypes = {

  // no customizable properties

}`}
          </PrismCode>
        </pre>
      </Layout>
    );
  }
}
