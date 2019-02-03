/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import { Button } from 'reactstrap';
import Helmet from 'react-helmet';
import CustomizeSourceExample from '../examples/CustomizeSource';
const CustomizeSourceExampleSource = require('!!raw-loader!../examples/CustomizeSource');
const HLSSourceSource = require('!!raw-loader!../examples/HLSSource');

export default class CustomizeSourcePage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="CustomizeSource" />
        <h3>Customize Video Source</h3>
        <p>This is an example on how to customize a HLS video source.</p>
        <div className="docs-example">
          <CustomizeSourceExample />
        </div>
        <p />
        <h4>HLSSource Component</h4>
        <pre>
          <PrismCode className="language-jsx">{HLSSourceSource}</PrismCode>
        </pre>
        <h4>Customize Source Example</h4>
        <pre>
          <PrismCode className="language-jsx">
            {CustomizeSourceExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
