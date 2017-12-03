import React, { Component } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import Layout from '../../components/CustomizeLayout';

export default class EnableDisableComponentPage extends Component {
  static async getInitialProps(ctx) {
    const redirectToPage = '/customize/enable-disable-components';
    if (ctx && ctx.res) {
      if (ctx.res.writeHead) {
        ctx.res.writeHead(301, {
          Location: redirectToPage,
        });
        ctx.res.end();
      }
    } else {
      Router.push(redirectToPage);
    }
    return {};
  }

  render() {
    return (
      <Layout>
        <Head>
          <title>Video-React - Customize</title>
        </Head>
        <h3>Customize</h3>
        <p>
        This is the document on how to customize your player.
        </p>
      </Layout>
    );
  }
}
