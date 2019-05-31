import React, { Component } from 'react';
import dashjs from 'dashjs';

const DASH_EXTENSIONS = /\.(mpd)($|\?)/i;
export const checkDash = src => DASH_EXTENSIONS.test(src);

export default class DashSource extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      type: 'video/mp4',
    };
    this.load = this.load.bind(this);
    this.dash = dashjs.MediaPlayer().create();
  }

  componentDidMount() {
    this.load();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.src !== this.props.src) {
      this.load();
    }
  }

  componentWillUnmount() {
    // destroy dash video source
    this.props.video.removeAttribute('src');
  }

  load() {
    const {
      src, video, isPlaying,
    } = this.props;
    // load dash video source base on dash.js
    if (checkDash(src)) {
      this.setState({
        type: 'application/x-mpegURL',
      });
      this.dash.initialize(video, src, isPlaying);
      this.dash.getDebug().setLogToBrowserConsole(false);
    }
  }

  render() {
    return (
      <source
        src={this.props.src}
        type={this.state.type}
      />
    );
  }
}
