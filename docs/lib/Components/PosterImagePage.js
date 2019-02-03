/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import { Button } from 'reactstrap';
import Helmet from 'react-helmet';
import PosterImageExample from '../examples/PosterImage';
const PosterImageExampleSource = require('!!raw-loader!../examples/PosterImage');

export default class PosterImagePage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="PosterImage" />
        <h3>PosterImage</h3>
        <p>
          The <code>PosterImage</code> specifies an image to be shown while the
          video is downloading, or until the user hits the play button. If this
          is not included, the first frame of the video will be used instead.
        </p>
        <div className="docs-example">
          <PosterImageExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {PosterImageExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
            {`
PosterImage.propTypes = {

  // The poster image url
  poster: PropTypes.string,

}`}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
