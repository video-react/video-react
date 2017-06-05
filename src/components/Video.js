import PropTypes from 'prop-types';
import React, { Component } from 'react';
import throttle from 'lodash.throttle';
import classNames from 'classnames';

import { isVideoChild, mediaProperties } from '../utils';

const propTypes = {
  actions: PropTypes.object,
  player: PropTypes.object,
  children: PropTypes.any,
  startTime: PropTypes.number,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  autoPlay: PropTypes.bool,
  playsInline: PropTypes.bool,
  src: PropTypes.string,
  poster: PropTypes.string,
  className: PropTypes.string,
  preload: PropTypes.oneOf(['auto', 'metadata', 'none']),
  crossOrigin: PropTypes.string,

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
  onResize: PropTypes.func,
};

const defaultProps = {
  preload: 'auto',
};

export default class Video extends Component {
  constructor(props) {
    super(props);

    this.video = null; // the html5 video
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.seek = this.seek.bind(this);
    this.forward = this.forward.bind(this);
    this.replay = this.replay.bind(this);
    this.toggleFullscreen = this.toggleFullscreen.bind(this);
    this.getProperties = this.getProperties.bind(this);
    this.renderChildren = this.renderChildren.bind(this);
    this.handleLoadStart = this.handleLoadStart.bind(this);
    this.handleCanPlay = this.handleCanPlay.bind(this);
    this.handleCanPlayThrough = this.handleCanPlayThrough.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePlaying = this.handlePlaying.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleEnded = this.handleEnded.bind(this);
    this.handleWaiting = this.handleWaiting.bind(this);
    this.handleSeeking = this.handleSeeking.bind(this);
    this.handleSeeked = this.handleSeeked.bind(this);
    this.handleFullscreenChange = this.handleFullscreenChange.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleSuspend = this.handleSuspend.bind(this);
    this.handleAbort = this.handleAbort.bind(this);
    this.handleEmptied = this.handleEmptied.bind(this);
    this.handleStalled = this.handleStalled.bind(this);
    this.handleLoadedMetaData = this.handleLoadedMetaData.bind(this);
    this.handleLoadedData = this.handleLoadedData.bind(this);
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    this.handleRateChange = this.handleRateChange.bind(this);
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
    this.handleDurationChange = this.handleDurationChange.bind(this);
    this.handleProgress = throttle(this.handleProgress.bind(this), 250);
    this.handleKeypress = this.handleKeypress.bind(this);
  }

  componentDidMount() {
    this.forceUpdate(); // make sure the children can get the video property
  }

  // get all video properties
  getProperties() {
    if (!this.video) {
      return null;
    }

    return mediaProperties.reduce((properties, key) => {
      properties[key] = this.video[key];
      return properties;
    }, {});
  }

  // get playback rate
  get playbackRate() {
    return this.video.playbackRate;
  }

  // set playback rate
  // speed of video
  set playbackRate(rate) {
    this.video.playbackRate = rate;
  }

  get muted() {
    return this.video.muted;
  }

  set muted(val) {
    this.video.muted = val;
  }

  get volume() {
    return this.video.volume;
  }

  set volume(val) {
    if (val > 1) {
      val = 1;
    }
    if (val < 0) {
      val = 0;
    }
    this.video.volume = val;
  }

  // video width
  get videoWidth() {
    return this.video.videoWidth;
  }

  // video height
  get videoHeight() {
    return this.video.videoHeight;
  }

  // play the video
  play() {
    this.video.play();
  }

  // pause the video
  pause() {
    this.video.pause();
  }

  // Change the video source and re-load the video:
  load() {
    this.video.load();
  }

  // Add a new text track to the video
  addTextTrack(...args) {
    this.video.addTextTrack(...args);
  }

  // Check if your browser can play different types of video:
  canPlayType(...args) {
    this.video.canPlayType(...args);
  }

  // toggle play
  togglePlay() {
    if (this.video.paused) {
      this.play();
    } else {
      this.pause();
    }
  }

  // seek video by time
  seek(time) {
    try {
      this.video.currentTime = time;
    } catch (e) {
      // console.log(e, 'Video is not ready.')
    }
  }

  // jump forward x seconds
  forward(seconds) {
    this.seek(this.video.currentTime + seconds);
  }

  // jump back x seconds
  replay(seconds) {
    this.forward(-seconds);
  }

  // enter or exist full screen
  toggleFullscreen() {
    const { player, actions } = this.props;
    actions.toggleFullscreen(player);
  }

  // Fired when the user agent
  // begins looking for media data
  handleLoadStart(...args) {
    const { actions, onLoadStart } = this.props;
    actions.handleLoadStart(this.getProperties());
    if (onLoadStart) {
      onLoadStart(...args);
    }
  }

  // A handler for events that
  // signal that waiting has ended
  handleCanPlay(...args) {
    const { actions, onCanPlay } = this.props;

    actions.handleCanPlay(this.getProperties());

    if (onCanPlay) {
      onCanPlay(...args);
    }
  }

  // A handler for events that
  // signal that waiting has ended
  handleCanPlayThrough(...args) {
    const { actions, onCanPlayThrough } = this.props;
    actions.handleCanPlayThrough(this.getProperties());

    if (onCanPlayThrough) {
      onCanPlayThrough(...args);
    }
  }

  // A handler for events that
  // signal that waiting has ended
  handlePlaying(...args) {
    const { actions, onPlaying } = this.props;
    actions.handlePlaying(this.getProperties());

    if (onPlaying) {
      onPlaying(...args);
    }
  }

  // Fired whenever the media has been started
  handlePlay(...args) {
    const { actions, onPlay } = this.props;
    actions.handlePlay(this.getProperties());

    if (onPlay) {
      onPlay(...args);
    }
  }

  // Fired whenever the media has been paused
  handlePause(...args) {
    const { actions, onPause } = this.props;
    actions.handlePause(this.getProperties());

    if (onPause) {
      onPause(...args);
    }
  }

  // Fired when the duration of
  // the media resource is first known or changed
  handleDurationChange(...args) {
    const { actions, onDurationChange } = this.props;
    actions.handleDurationChange(this.getProperties());

    if (onDurationChange) {
      onDurationChange(...args);
    }
  }

  // Fired while the user agent
  // is downloading media data
  handleProgress(...args) {
    const { actions, onProgress } = this.props;
    if (this.video) {
      actions.handleProgressChange(this.getProperties());
    }

    if (onProgress) {
      onProgress(...args);
    }
  }

  // Fired when the end of the media resource
  // is reached (currentTime == duration)
  handleEnded(...args) {
    const { loop, player, actions, onEnded } = this.props;
    if (loop) {
      this.seek(0);
      this.play();
    } else if (!player.paused) {
      this.pause();
    }
    actions.handleEnd(this.getProperties());

    if (onEnded) {
      onEnded(...args);
    }
  }

  // Fired whenever the media begins waiting
  handleWaiting(...args) {
    const { actions, onWaiting } = this.props;
    actions.handleWaiting(this.getProperties());

    if (onWaiting) {
      onWaiting(...args);
    }
  }

  // Fired whenever the player
  // is jumping to a new time
  handleSeeking(...args) {
    const { actions, onSeeking } = this.props;
    actions.handleSeeking(this.getProperties());

    if (onSeeking) {
      onSeeking(...args);
    }
  }

  // Fired when the player has
  // finished jumping to a new time
  handleSeeked(...args) {
    const { actions, onSeeked } = this.props;
    actions.handleSeeked(this.getProperties());

    if (onSeeked) {
      onSeeked(...args);
    }
  }

  // Handle Fullscreen Change
  handleFullscreenChange() {
  }


  // Fires when the browser is
  // intentionally not getting media data
  handleSuspend(...args) {
    const { actions, onSuspend } = this.props;
    actions.handleSuspend(this.getProperties());
    if (onSuspend) {
      onSuspend(...args);
    }
  }

  // Fires when the loading of an audio/video is aborted
  handleAbort(...args) {
    const { actions, onAbort } = this.props;
    actions.handleAbort(this.getProperties());
    if (onAbort) {
      onAbort(...args);
    }
  }

  // Fires when the current playlist is empty
  handleEmptied(...args) {
    const { actions, onEmptied } = this.props;
    actions.handleEmptied(this.getProperties());
    if (onEmptied) {
      onEmptied(...args);
    }
  }

  // Fires when the browser is trying to
  // get media data, but data is not available
  handleStalled(...args) {
    const { actions, onStalled } = this.props;
    actions.handleStalled(this.getProperties());

    if (onStalled) {
      onStalled(...args);
    }
  }

  // Fires when the browser has loaded
  // meta data for the audio/video
  handleLoadedMetaData(...args) {
    const { actions, onLoadedMetadata, startTime } = this.props;

    if (startTime && startTime > 0) {
      this.video.currentTime = startTime;
    }

    actions.handleLoadedMetaData(this.getProperties());

    if (onLoadedMetadata) {
      onLoadedMetadata(...args);
    }
  }

  // Fires when the browser has loaded
  // the current frame of the audio/video
  handleLoadedData(...args) {
    const { actions, onLoadedData } = this.props;
    actions.handleLoadedData(this.getProperties());

    if (onLoadedData) {
      onLoadedData(...args);
    }
  }

  // Fires when the current
  // playback position has changed
  handleTimeUpdate(...args) {
    const { actions, onTimeUpdate } = this.props;
    actions.handleTimeUpdate(this.getProperties());

    if (onTimeUpdate) {
      onTimeUpdate(...args);
    }
  }

  /**
   * Fires when the playing speed of the audio/video is changed
   */
  handleRateChange(...args) {
    const { actions, onRateChange } = this.props;
    actions.handleRateChange(this.getProperties());

    if (onRateChange) {
      onRateChange(...args);
    }
  }

  // Fires when the volume has been changed
  handleVolumeChange(...args) {
    const { actions, onVolumeChange } = this.props;
    actions.handleVolumeChange(this.getProperties());

    if (onVolumeChange) {
      onVolumeChange(...args);
    }
  }

  // Fires when an error occurred
  // during the loading of an audio/video
  handleError(...args) {
    const { actions, onError } = this.props;
    actions.handleError(this.getProperties());
    if (onError) {
      onError(...args);
    }
  }

  handleResize(...args) {
    const { actions, onResize } = this.props;
    actions.handleResize(this.getProperties());
    if (onResize) {
      onResize(...args);
    }
  }

  handleKeypress() {

  }

  renderChildren() {
    const props = {
      ...this.props,
      video: this.video,
    };

    // to make sure the children can get video property
    if (!this.video) {
      return null;
    }

    // only keep <source />, <track />, <MyComponent isVideoChild /> elements
    return React.Children.toArray(this.props.children)
      .filter(isVideoChild)
      .map((c) => {
        let cprops;
        if (typeof c.type === 'string') {
          // add onError to <source />
          if (c.type === 'source') {
            cprops = { ...c.props };
            const preOnError = cprops.onError;
            cprops.onError = (...args) => {
              if (preOnError) {
                preOnError(...args);
              }
              this.handleError(...args);
            };
          }
        } else {
          cprops = props;
        }
        return React.cloneElement(
          c,
          cprops
        );
      });
  }

  render() {
    const {
      loop, poster, preload, src, autoPlay,
      playsInline, muted, crossOrigin
    } = this.props;

    return (
      <video
        className={classNames(
          'video-react-video',
          this.props.className
        )}
        crossOrigin={crossOrigin}
        ref={(c) => { this.video = c; }}
        muted={muted}
        preload={preload}
        loop={loop}
        playsInline={playsInline}
        autoPlay={autoPlay}
        poster={poster}
        src={src}
        onLoadStart={this.handleLoadStart}
        onWaiting={this.handleWaiting}
        onCanPlay={this.handleCanPlay}
        onCanPlayThrough={this.handleCanPlayThrough}
        onPlaying={this.handlePlaying}
        onEnded={this.handleEnded}
        onSeeking={this.handleSeeking}
        onSeeked={this.handleSeeked}
        onPlay={this.handlePlay}
        onPause={this.handlePause}
        onProgress={this.handleProgress}
        onDurationChange={this.handleDurationChange}
        onError={this.handleError}
        onSuspend={this.handleSuspend}
        onAbort={this.handleAbort}
        onEmptied={this.handleEmptied}
        onStalled={this.handleStalled}
        onLoadedMetadata={this.handleLoadedMetaData}
        onLoadedData={this.handleLoadedData}
        onTimeUpdate={this.handleTimeUpdate}
        onRateChange={this.handleRateChange}
        onVolumeChange={this.handleVolumeChange}
      >
        {this.renderChildren()}
      </video>
    );
  }
}

Video.propTypes = propTypes;
Video.defaultProps = defaultProps;
