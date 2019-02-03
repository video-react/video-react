import 'bootstrap-scss';
import 'video-react-scss';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import Helmet from 'react-helmet';
import {
  Router,
  RouterContext,
  match,
  browserHistory,
  createMemoryHistory
} from 'react-router';
import routes from './routes';

// Client render (optional):
if (typeof document !== 'undefined') {
  const outlet = document.getElementById('app');
  browserHistory.listen(function(location) {
    // window.ga('set', 'page', location.pathname);
    // window.ga('send', 'pageview');
  });

  let Holder;
  window.addEventListener('DOMContentLoaded', () => {
    Holder = require('holderjs');
  });

  ReactDOM.render(
    <Router
      onUpdate={() => {
        window.scrollTo(0, 0);

        if (Holder) {
          Holder.run();
        }
      }}
      history={browserHistory}
      routes={routes}
    />,
    outlet
  );
}

// Exported static site renderer:
export default (locals, callback) => {
  const history = createMemoryHistory();
  const location = history.createLocation(locals.path);

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    let url;
    if (redirectLocation && redirectLocation.pathname) {
      url = redirectLocation.pathname;
      callback(
        null,
        `<!DOCTYPE html>
      <html>
      <head><link rel="canonical" href="${url}"/>
      <meta http-equiv="content-type" content="text/html; charset=utf-8" />
      <meta http-equiv="refresh" content="0;url=${url}" />
      </head>
      </html>`
      );
    }
    const body = ReactDOMServer.renderToString(
      <RouterContext {...renderProps} />
    );
    const head = Helmet.rewind();
    let markup = `<!DOCTYPE html>
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
  });
};
