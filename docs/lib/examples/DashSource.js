import React, { Component } from 'react';

const DASH_EXTENSIONS = /\.(mpd)($|\?)/i;
export const checkDash = src => DASH_EXTENSIONS.test(src);

// Note - Dash.js should be loaded in environment before using this component.
export default class DashSource extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      type: 'video/mp4'
    };
  }

  componentDidMount() {
    const { src, video, isPlaying } = this.props;
    // load dash video source base on dash.js
    if (checkDash(src)) {
      this.setState({
        type: 'application/x-mpegURL'
      });
      this.dash = window.dashjs.MediaPlayer().create();
      this.dash.initialize(video, src, isPlaying);
      this.dash.getDebug().setLogToBrowserConsole(true);
    }
  }

  componentWillUnmount() {
    // destroy dash video source
    this.props.video.removeAttribute('src');
  }

  render() {
    return <source src={this.props.src} type={this.state.type} />;
  }
}
