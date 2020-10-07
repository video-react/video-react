/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import CustomizeSourceExample from '../examples/CustomizeSource';
import CustomizeDashSourceExample from '../examples/CustomizeDashSource';

const CustomizeSourceHLSSource = require('!!raw-loader!../examples/CustomizeSource');
const CustomizeSourceDashSource = require('!!raw-loader!../examples/CustomizeDashSource');
const HLSSourceSource = require('!!raw-loader!../examples/HLSSource');
const DashSource = require('!!raw-loader!../examples/DashSource');

const CustomizeSourcePage = () => {
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
      <h4>Customize HLS Source Example</h4>
      <pre>
        <PrismCode className="language-jsx">
          {CustomizeSourceHLSSource}
        </PrismCode>
      </pre>
      <hr />
      <p>This is an example on how to customize a Dash video source.</p>
      <div className="docs-example">
        <CustomizeDashSourceExample />
      </div>
      <p />
      <h4>DashSource Component</h4>
      <pre>
        <PrismCode className="language-jsx">{DashSource}</PrismCode>
      </pre>
      <h4>Customize Dash Source Example</h4>
      <pre>
        <PrismCode className="language-jsx">
          {CustomizeSourceDashSource}
        </PrismCode>
      </pre>
    </div>
  );
};

export default CustomizeSourcePage;
