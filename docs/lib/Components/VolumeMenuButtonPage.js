/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import { Button } from 'reactstrap';
import Helmet from 'react-helmet';
import VolumeMenuButtonExample from '../examples/VolumeMenuButton';
const VolumeMenuButtonExampleSource = require('!!raw-loader!../examples/VolumeMenuButton');

export default class VolumeMenuButtonPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="VolumeMenuButton" />
        <h3>VolumeMenuButton</h3>
        <p>Button for volume popup.</p>
        <div className="docs-example">
          <VolumeMenuButtonExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {VolumeMenuButtonExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
            {`VolumeMenuButton.propTypes = {

  // The direction where Volume Bar popup
  // default: false
  vertical: PropTypes.bool,

}`}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
