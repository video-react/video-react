import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import Manager from '../Manager';

import BigPlayButton from './BigPlayButton';
import LoadingSpinner from './LoadingSpinner';
import PosterImage from './PosterImage';
import Video from './Video';
import Bezel from './Bezel';
import Shortcut from './Shortcut';
import ControlBar from './control-bar/ControlBar';

import * as browser from '../utils/browser';
import { mergeAndSortChildren } from '../utils';
import fullscreen from '../utils/fullscreen';

const propTypes = {
  children: PropTypes.any,

  width: PropTypes.number,
  height: PropTypes.number,
  fluid: PropTypes.bool,
  muted: PropTypes.bool,
  playsInline: PropTypes.bool,
  aspectRatio: PropTypes.string,

  startTime: PropTypes.number,
  loop: PropTypes.bool,
  autoPlay: PropTypes.bool,
  src: PropTypes.string,
  poster: PropTypes.string,
  preload: React.PropTypes.oneOf(['auto', 'metadata', 'none']),

  onLoadStart: PropTypes.func,
  onWaiting: PropTypes.func,
  onCanPlay: PropTypes.func,
  onCanPlayThrough: PropTypes.func,
  onPlaying: PropTypes.func,
  onEnded: PropTypes.func,
  onSeeking: PropTypes.func,
  onSeeked: PropTypes.func,
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onProgress: PropTypes.func,
  onDurationChange: PropTypes.func,
  onError: PropTypes.func,
  onSuspend: PropTypes.func,
  onAbort: PropTypes.func,
  onEmptied: PropTypes.func,
  onStalled: PropTypes.func,
  onLoadedMetadata: PropTypes.func,
  onLoadedData: PropTypes.func,
  onTimeUpdate: PropTypes.func,
  onRateChange: PropTypes.func,
  onVolumeChange: PropTypes.func,
};

const defaultProps = {
  fluid: true,
  aspectRatio: 'auto'
};


export default class Player extends Component {
  constructor(props) {
    super(props);

    this.controlsHideTimer = null;

    this.video = null; // the Video component
    this.manager = new Manager();
    this.actions = this.manager.getActions();
    this.manager.subscribeToPlayerStateChange(this.handleStateChange.bind(this));

    this.getStyle = this.getStyle.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.getChildren = this.getChildren.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.startControlsTimer = this.startControlsTimer.bind(this);
    this.handleFullScreenChange = this.handleFullScreenChange.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);

    fullscreen.addEventListener(this.handleFullScreenChange);
  }

  componentWillUnmount() {
    // Remove event listener
    window.addEventListener('resize', this.handleResize);
    fullscreen.removeEventListener(this.handleFullScreenChange);
    if (this.controlsHideTimer) {
      window.clearTimeout(this.controlsHideTimer);
    }
  }

  // player resize
  handleResize() {
  }

  handleFullScreenChange() {
    this.actions.handleFullscreenChange(fullscreen.isFullscreen);
  }

  handleMouseDown() {
    this.startControlsTimer();
  }

  handleMouseMove() {
    this.startControlsTimer();
  }

  startControlsTimer() {
    this.actions.activate(true);
    clearTimeout(this.controlsHideTimer);
    this.controlsHideTimer = setTimeout(() => {
      this.actions.activate(false);
    }, 3000);
  }

  getStyle() {
    const { fluid } = this.props;
    const { player } = this.manager.getState();
    const style = {};
    let width;
    let height;
    let aspectRatio;

    // The aspect ratio is either used directly or to calculate width and height.
    if (this.props.aspectRatio !== undefined
      && this.props.aspectRatio !== 'auto') {
      // Use any aspectRatio that's been specifically set
      aspectRatio = this.props.aspectRatio;
    } else if (player.videoWidth) {
      // Otherwise try to get the aspect ratio from the video metadata
      aspectRatio = `${player.videoWidth}:${player.videoHeight}`;
    } else {
      // Or use a default. The video element's is 2:1, but 16:9 is more common.
      aspectRatio = '16:9';
    }

    // Get the ratio as a decimal we can use to calculate dimensions
    const ratioParts = aspectRatio.split(':');
    const ratioMultiplier = ratioParts[1] / ratioParts[0];

    if (this.props.width !== undefined) {
      // Use any width that's been specifically set
      width = this.props.width;
    } else if (this.props.height !== undefined) {
      // Or calulate the width from the aspect ratio if a height has been set
      width = this.props.height / ratioMultiplier;
    } else {
      // Or use the video's metadata, or use the video el's default of 300
      width = player.videoWidth || 400;
    }

    if (this.props.height !== undefined) {
      // Use any height that's been specifically set
      height = this.props.height;
    } else {
      // Otherwise calculate the height from the ratio and the width
      height = width * ratioMultiplier;
    }

    if (fluid) {
      style.paddingTop = `${ratioMultiplier * 100}%`;
    } else {
      style.width = `${width}px`;
      style.height = `${height}px`;
    }

    return style;
  }

  getDefaultChildren(props) {
    return [
      <Video
        ref={(c) => {
          this.manager.video = this.video = c;
        }}
        key="video"
        order={0.0}
        {...props}
      />,
      <PosterImage
        key="poster-image"
        order={1.0}
        {...props}
      />,
      <LoadingSpinner
        key="loading-spinner"
        order={2.0}
        {...props}
      />,
      <Bezel
        key="bezel"
        order={3.0}
        {...props}
      />,
      <BigPlayButton
        key="big-play-button"
        order={4.0}
        {...props}
      />,
      <ControlBar
        key="control-bar"
        order={5.0}
        {...props}
      />,
      <Shortcut
        key="shortcut"
        order={99.0}
        {...props}
      />
    ];
  }

  getChildren(props) {
    const propsWithoutChildren = {
      ...props,
      children: null
    };
    const children = React.Children.toArray(this.props.children)
      .filter((e) => e.type !== 'source');
    const defaultChildren = this.getDefaultChildren(propsWithoutChildren);
    return mergeAndSortChildren(defaultChildren, children, propsWithoutChildren);
  }


  handleStateChange(state, prevState) {
    if (state.isFullscreen !== prevState.isFullscreen) {
      this.handleResize();
    }
    this.forceUpdate(); // re-render
  }

  render() {
    const { fluid } = this.props;
    const { player } = this.manager.getState();
    const { paused, hasStarted, waiting, seeking, isFullscreen, userActivity } = player;
    const props = {
      ...this.props,
      player,
      actions: this.actions,
      manager: this.manager,
      store: this.manager.store,
    };
    const children = this.getChildren(props);

    return (
      <div
        className={classNames({
          'video-react-controls-enabled': true,
          'video-react-has-started': hasStarted,
          'video-react-paused': paused,
          'video-react-playing': !paused,
          'video-react-waiting': waiting,
          'video-react-seeking': seeking,
          'video-react-fluid': fluid,
          'video-react-fullscreen': isFullscreen,
          'video-react-user-inactive': !userActivity,
          'video-react-user-active': userActivity,
          'video-react-workinghover': !browser.IS_IOS,
        }, 'video-react')}
        style={this.getStyle()}
        ref={(c) => {
          this.manager.rootElement = c;
        }}
        onTouchStart={this.handleMouseDown}
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}
      >
        {children}
      </div>
    );
  }
}

Player.propTypes = propTypes;
Player.defaultProps = defaultProps;
