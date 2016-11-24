import React, { PropTypes, Component } from 'react';
import { Player } from 'video-react';
import Hls from 'hls.js';


const propTypes = {
  src: PropTypes.string.isRequired,
  type: PropTypes.string
};

export default class HLSSource extends Component {
  constructor(props, context) {
    super(props, context);
    this.hls = new Hls();
  }

  componentDidUpdate(prevProps) {
    // `src` is the property get from this component
    // `video` is the property insert from `Video` component
    // `video` is the html5 video element
    const { src, video } = this.props;
    if (src != prevProps.src
      || video != prevProps.video) {
      // load hls video source base on hls.js
      if (Hls.isSupported() && video) {
        this.hls.loadSource(src);
        this.hls.attachMedia(video);
        this.hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play();
        });
      }
    }
  }

  render() {
    return (
      <source
        src={this.props.src}
        type={this.props.type || 'application/x-mpegURL'}
      />
    );
  }

}

HLSSource.propTypes = propTypes;
