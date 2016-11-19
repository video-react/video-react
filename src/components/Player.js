import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Actions from '../actions';
import BigPlayButton from './BigPlayButton';
import LoadingSpinner from './LoadingSpinner';
import PosterImage from './PosterImage';
import Video from './Video';
import Bezel from './Bezel';
import Shortcut from './Shortcut';
import ControlBar from './control-bar/ControlBar';

import * as browser from '../utils/browser';
import { mergeAndSortChildren } from '../utils';

const propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fluid: PropTypes.bool,
  muted: PropTypes.bool,
  aspectRatio: PropTypes.string,
  children: PropTypes.any,
};

const defaultProps = {
  fluid: true,
  aspectRatio: 'auto'
};


export default class Player extends Component {
  constructor(props) {
    super(props);

    this.controlsHideTimer = null;

    this.state = {
      userActivity: true,
      player: {
        duration: 0,
        currentTime: 0,
        seekingTime: 0,
        buffered: null,
        waiting: true,
        seeking: false,
        paused: true,
        autoPaused: false,
        ended: false,
        playbackRate: 1,
        muted: props.muted || false,
        volume: 1,
        isFullscreen: false,
        readyState: 0,
        networkState: 0,
        videoWidth: 0,
        videoHeight: 0,
        hasStarted: false,

        bezelCount: 0,
        bezelStatus: null,
        error: null,
      },
    };
    this.actions = new Actions(this.setPlayerState.bind(this));

    this.getStyle = this.getStyle.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.getChildren = this.getChildren.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.startControlsTimer = this.startControlsTimer.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.player.isFullscreen !== prevState.player.isFullscreen) {
      this.handleResize();
    }
  }

  componentWillUnmount() {
    // Remove event listener
    window.addEventListener('resize', this.handleResize);
    if (this.controlsHideTimer) {
      window.clearTimeout(this.controlsHideTimer);
    }
  }

  setPlayerState(player) {
    this.setState((prevState) => {
      return {
        ...prevState,
        player: {
          ...prevState.player,
          ...player
        }
      };
    });
  }

  // player resize
  handleResize() {
  }

  handleMouseDown() {
    this.startControlsTimer()
  }

  handleMouseMove() {
    this.startControlsTimer()
  }

  startControlsTimer() {
    this.setState({
      userActivity: true,
    });
    clearTimeout(this.controlsHideTimer)
    this.controlsHideTimer = setTimeout(() => {
      this.setState({
        userActivity: false,
      });
    }, 3000)
  }

  getStyle() {
    const { fluid } = this.props;
    const { player } = this.state;
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

  render() {
    const { fluid } = this.props;
    const { paused, hasStarted, waiting, seeking, isFullscreen } = this.state.player;
    const props = {
      ...this.props,
      player: this.state.player,
      actions: this.actions,
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
          'video-react-user-inactive': !this.state.userActivity,
          'video-react-user-active': this.state.userActivity,
          'video-react-workinghover': !browser.IS_IOS,
        }, 'video-react')}
        style={this.getStyle()}
        ref={(c) => {
          this.actions.setPlayerElement(c);
        }}
        onTouchStart={this.handleMouseDown}
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}
      >
        <Video
          ref={(c) => {
            this.video = c;
            this.actions.setVideo(c);
          }}
          {...props}
        />
        {children}
      </div>
    );
  }
}

Player.propTypes = propTypes;
Player.defaultProps = defaultProps;
