/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Prism as PrismCode } from 'react-syntax-highlighter';
import Helmet from 'react-helmet';
import PlayerWithCaptions from '../examples/PlayerWithCaptions';

const PlayerWithCaptionsSource = require('!!raw-loader!../examples/PlayerWithCaptions');

export default function CaptionedVideoPage() {
  return (
    <div>
      <Helmet title="ClosedCaptionButton" />
      <h3>ClosedCaptionButton</h3>
      <p>
        There is an example on how to add a ClosedCaption button component into{' '}
        <code>Video-React</code> Player.
      </p>
      <div className="docs-example">
        <PlayerWithCaptions />
      </div>
      <p />
      <h4>ClosedCaptionButton</h4>
      <pre>
        <PrismCode language="jsx">{PlayerWithCaptionsSource}</PrismCode>
      </pre>
    </div>
  );
}
