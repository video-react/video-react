/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import { Button } from 'reactstrap';
import Helmet from 'react-helmet';
import ControlBarExample from '../examples/ControlBar';

const ControlBarExampleSource = require('!!raw-loader!../examples/ControlBar');

export default class ControlBarPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="ControlBar" />
        <h3>ControlBar</h3>
        <p>
          The Html5 video's control bar is hidden, the player offers a
          customizable control bar to allow the user to control video playback,
          including volume, seeking, and pause/resume playback.
        </p>
        <div className="docs-example">
          <ControlBarExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ControlBarExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
            {`ControlBar.propTypes = {

  // Hide the control bar automatically after the player is inactive
  // default: true
  autoHide: PropTypes.bool,
  // The waiting time for auto hide after player is inactive (in milliseconds)
  // default: 3000
  autoHideTime: PropType.number,
  // Do not render default controls, only use custom ones provided as children of <ControlBar>
  // default: false
  disableDefaultControls: PropTypes.bool,
  // Do not render the control bar if set it to true
  // default: false
  disableCompletely: PropTypes.bool,

}`}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
