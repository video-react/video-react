/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import { Button } from 'reactstrap';
import Helmet from 'react-helmet';
import LoadingSpinnerExample from '../examples/LoadingSpinner';
const LoadingSpinnerExampleSource = require('!!raw-loader!../examples/LoadingSpinner');

export default class LoadingSpinnerPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="LoadingSpinner" />
        <h3>LoadingSpinner</h3>
        <p>
          There would be a loading spinner to display before the video is
          loaded.
        </p>
        <div className="docs-example">
          <LoadingSpinnerExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {LoadingSpinnerExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
            {`LoadingSpinner.propTypes = {

  // no customizable properties

}`}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
