/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import { Button } from 'reactstrap';
import Helmet from 'react-helmet';
import PlayToggleExample from '../examples/PlayToggle';
const PlayToggleExampleSource = require('!!raw-loader!../examples/PlayToggle');

export default class PlayTogglePage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="PlayToggle" />
        <h3>PlayToggle</h3>
        <p>A button component to toggle between play and pause.</p>
        <div className="docs-example">
          <PlayToggleExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {PlayToggleExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
            {`PlayToggle.propTypes = {

// no customizable properties,

}`}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
