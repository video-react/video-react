/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import { Button } from 'reactstrap';
import Helmet from 'react-helmet';
import PlayerExample from '../examples/Player';
const PlayerExampleSource = require('!!raw!../examples/Player');

export default class PlayerPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Player" />
        <h3>Player</h3>
        <p>
          <code>Player</code> is the root component of the Video-React player. All the others components should be in this component.
        </p>
        <div className="docs-example">
          <PlayerExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {PlayerExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`Player.propTypes = {

  width: PropTypes.number,
  height: PropTypes.number,

  // In fluid mode, no need to set the width and height,
  // the width will be '100%',
  // height will be calculated by the video ratio
  // default: 'true'
  fluid: PropTypes.bool,
  muted: PropTypes.bool, // default: false
  aspectRatio: PropTypes.string, // default: 'auto'
  autoPlay: PropTypes.bool, // default: false
  startTime: PropTypes.number, // Seek the Video at A Specific Time On Load
}`}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
