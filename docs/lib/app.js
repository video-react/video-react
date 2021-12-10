import 'bootstrap-scss';
import 'video-react-scss';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import Helmet from 'react-helmet';

// import {
//   Router,
//   RouterContext,
//   match,
//   browserHistory,
//   createMemoryHistory
// } from 'react-router';

import { createMemoryHistory, BrowserHistory } from 'history';
// import { ServerRouter /* , createServerRenderContext */ } from 'react-router';

import {
  BrowserRouter,
  StaticRouter,
  Route,
  matchPath,
  Switch
} from 'react-router-dom';
import { App, routes } from './routes';

// Client render (optional):
if (typeof document !== 'undefined') {
  const outlet = document.getElementById('app');
  // BrowserHistory.listen(function(location) {
  //   // window.ga('set', 'page', location.pathname);
  //   // window.ga('send', 'pageview');
  // });

  let Holder;
  window.addEventListener('DOMContentLoaded', () => {
    Holder = require('holderjs');
  });

  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    outlet
  );

  // ReactDOM.render(
  //   <BrowserRouter
  //     onUpdate={() => {
  //       window.scrollTo(0, 0);

  //       if (Holder) {
  //         Holder.run();
  //       }
  //     }}
  //     routes={routes}
  //   />,
  //   outlet
  // );
}

// Exported static site renderer:
export default (locals, callback) => {
  // const history = createMemoryHistory();
  // const location = history.createHref(locals.path);
  // console.log('locals', locals);
  // console.log('location', location);

  // const renderProps = routes.find(route => matchPath(location, route));
  // console.log('match', activeRoute);

  // return;

  // match({ routes, location }, (error, redirectLocation, renderProps) => {
  //   let url;
  //   if (redirectLocation && redirectLocation.pathname) {
  //     url = redirectLocation.pathname;
  //     callback(
  //       null,
  //       `<!DOCTYPE html>
  //     <html>
  //     <head><link rel="canonical" href="${url}"/>
  //     <meta http-equiv="content-type" content="text/html; charset=utf-8" />
  //     <meta http-equiv="refresh" content="0;url=${url}" />
  //     </head>
  //     </html>`
  //     );
  //   }
  // <StaticRouter location={renderProps.path} history={history} context={{}}>
  //   <Route {...renderProps} />
  // </StaticRouter>;

  // console.log('renderProps', renderProps.path);
  const context = {};

  // console.log('LOCALS.path', locals.path);

  const body = ReactDOMServer.renderToString(
    <StaticRouter location={locals.path} context={context}>
      <App />
    </StaticRouter>
  );
  // console.log('renderProps', renderProps);
  // console.log('body', body);

  const head = Helmet.rewind();
  const markup = `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          ${head.title.toString()}
          ${head.meta.toString()}
          <link rel=icon href=/assets/favicon.ico>
          <link rel="stylesheet" href="/assets/main.css"/>
          <link rel="stylesheet" href="/assets/docs.css"/>
        </head>
        <body>
          <div id="app">${body}</div>
          <script src="/assets/prism.js" data-manual></script>
          <script src="/bundle.js"></script>
        </body>
      </html>`;
  callback(null, markup);
  // console.log('markup', markup);
  // });
};
