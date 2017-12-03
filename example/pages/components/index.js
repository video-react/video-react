import React, { Component } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { PrismCode } from 'react-prism';
import { Table } from 'reactstrap';
import Layout from '../../components/ComponentsLayout';


export default class PlayerPage extends Component {
  static async getInitialProps (ctx) {
    const redirectToPage = '/components/player'
    if (ctx && ctx.req) {
      ctx.res.writeHead(301, {
        Location: redirectToPage
      })
      ctx.res.end()
    } else {
      Router.push(redirectToPage)
    }
  }

  render() {
    const { PlayerExampleSource, PlayerControlExampleSource } = this.props;
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
