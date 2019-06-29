/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import { Button } from 'reactstrap';
import Helmet from 'react-helmet';
import GoogleCastExample from '../examples/GoogleCast';

const GoogleCastExampleSource = require('!!raw-loader!../examples/GoogleCast');
const CastPlayToggleSource = require('!!raw-loader!../../../src/components/control-bar/CastPlayToggle');

export default class GoogleCastPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Google cast support" />
        <h3>Google Cast Support</h3>
        Cast support can be implemented in three steps.
        <ol>
          <li>Import the google part of the code with a script tag.</li>
          <li>
            Handle the basic framework functionality in a component wrapping
            your player.
          </li>
          <li>
            Create control bar components that are aware of whether they control
            the local or remote player. See the modified PlayToggle,
            CastPlayToggle, below.
          </li>
        </ol>
        <div className="docs-example">
          <GoogleCastExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {GoogleCastExampleSource}
          </PrismCode>
        </pre>
        <h4>CastPlayToggle</h4>
        <pre>
          <PrismCode className="language-jsx">{CastPlayToggleSource}</PrismCode>
        </pre>
        <script
          type="text/javascript"
          src="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"
        />
      </div>
    );
  }
}
