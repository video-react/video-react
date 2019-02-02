/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import { Button } from 'reactstrap';
import Helmet from 'react-helmet';
import ReplayControlExample from '../examples/ReplayControl';

const ReplayControlExampleSource = require('!!raw-loader!../examples/ReplayControl');

export default class ReplayControlPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="ReplayControl" />
        <h3>ReplayControl</h3>
        <p>A button in control bar to go forward 5/10/30 seconds.</p>
        <div className="docs-example">
          <ReplayControlExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ReplayControlExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
            {`ReplayControl.propTypes = {

  // How many seconds to go forward
  // default: 10
  seconds: PropTypes.oneOf([5, 10, 30]),

}`}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
