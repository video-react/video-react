/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import { Button } from 'reactstrap';
import Helmet from 'react-helmet';
import CustomizeComponentExample from '../examples/CustomizeComponentExample';
const DownloadButtonSource = require('!!raw-loader!../examples/DownloadButton');
const CustomizeComponentExampleSource = require('!!raw-loader!../examples/CustomizeComponentExample');

export default class CustomizeComponentPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="PosterImage" />
        <h3>Customize Component</h3>
        <p>
          There is an example on how to add a download button component into{' '}
          <code>Video-React</code> Player.
        </p>
        <div className="docs-example">
          <CustomizeComponentExample />
        </div>
        <p />
        <h4>DownloadButton Component</h4>
        <pre>
          <PrismCode className="language-jsx">{DownloadButtonSource}</PrismCode>
        </pre>
        <h4>Using the Download Button Component</h4>
        <pre>
          <PrismCode className="language-jsx">
            {CustomizeComponentExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
