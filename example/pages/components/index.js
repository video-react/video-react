import React, { Component } from 'react';
import Router from 'next/router';
import Layout from '../../components/ComponentsLayout';


export default class PlayerPage extends Component {
  static async getInitialProps(ctx) {
    const redirectToPage = '/components/player';
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
      <Layout page="Home">
        <h3>Components</h3>
        <p>
          All the customizable components in <code>Video-Player</code>.
        </p>
      </Layout>
    );
  }
}
