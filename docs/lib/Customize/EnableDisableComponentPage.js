/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import { Button } from 'reactstrap';
import Helmet from 'react-helmet';
import EnableDisableComponentExample from '../examples/EnableDisableComponent';
const EnableDisableComponentExampleSource = require('!!raw-loader!../examples/EnableDisableComponent');

export default class EnableDisableComponentPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Enable & disable default components" />
        <h3>Enable & Disable Default Components</h3>
        <p>The components can be enabled or disabled.</p>
        <div className="docs-example">
          <EnableDisableComponentExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {EnableDisableComponentExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
