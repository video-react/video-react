import React, { PropTypes, Component } from 'react';
import throttle from 'lodash.throttle';

const propTypes = {
  actions: PropTypes.object,
  player: PropTypes.object,
  children: PropTypes.any,
  startTime: PropTypes.number,
  loop: PropTypes.bool,
  autoPlay: PropTypes.bool,
  playsInline: PropTypes.bool,
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
  preload: 'auto',
};

export default class Video extends Component {
  constructor(props) {
    super(props);

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.seek = this.seek.bind(this);
    this.forward = this.forward.bind(this);
    this.replay = this.replay.bind(this);
    this.toggleFullscreen = this.toggleFullscreen.bind(this);
    this.videoWidth = this.videoWidth.bind(this);
    this.videoHeight = this.videoHeight.bind(this);
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
    this.handleTimeUpdate = throttle(this.handleTimeUpdate.bind(this), 250);
    this.handleRateChange = this.handleRateChange.bind(this);
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
    this.handleDurationChange = this.handleDurationChange.bind(this);
    this.handleProgress = throttle(this.handleProgress.bind(this), 1000);
    this.handleKeypress = this.handleKeypress.bind(this);
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
    this.video.volume = val;
  }

  // play the video
  play() {
    this.video.play();
  }

  // pause the video
  pause() {
    this.video.pause();
  }

  // toggle play
  togglePlay() {
    if (this.video.paused) {
      this.play();
    } else {
      this.pause();
    }
  }

  // video width
  videoWidth() {
    return this.video.videoWidth;
  }

  // video height
  videoHeight() {
    return this.video.videoHeight;
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
    const { player, actions, onLoadStart } = this.props;
    if (player.paused && player.hasStarted) {
      actions.handleLoadStart(this.video.buffered);
    }

    if (onLoadStart) {
      onLoadStart(...args);
    }
  }

  // A handler for events that
  // signal that waiting has ended
  handleCanPlay(...args) {
    const { actions, onCanPlay } = this.props;

    actions.handleCanPlay({
      videoWidth: this.videoWidth(),
      videoHeight: this.videoHeight(),
      duration: this.video.duration,
    });

    if (onCanPlay) {
      onCanPlay(...args);
    }
  }

  // A handler for events that
  // signal that waiting has ended
  handleCanPlayThrough(...args) {
    const { player, actions, onCanPlayThrough } = this.props;
    if (player.waiting) {
      actions.handleCanPlayThrough();
    }

    if (onCanPlayThrough) {
      onCanPlayThrough(...args);
    }
  }

  // A handler for events that
  // signal that waiting has ended
  handlePlaying(...args) {
    const { player, actions, onPlaying } = this.props;
    if (player.waiting) {
      actions.handlePlaying();
    }

    if (onPlaying) {
      onPlaying(...args);
    }
  }

  // Fired whenever the media has been started
  handlePlay(...args) {
    const { player, actions, onPlay } = this.props;
    if (player.paused) {
      actions.handlePlay({
        duration: this.video.duration
      });
    }

    if (onPlay) {
      onPlay(...args);
    }
  }

  // Fired whenever the media has been paused
  handlePause(...args) {
    const { player, actions, onPause } = this.props;
    if (!player.paused) {
      actions.handlePause();
    }

    if (onPause) {
      onPause(...args);
    }
  }

  // Fired when the duration of
  // the media resource is first known or changed
  handleDurationChange(...args) {
    const { player, actions, onDurationChange } = this.props;
    if (player.duration !== this.video.duration) {
      actions.handleDurationChange(this.video.duration);
    }

    if (onDurationChange) {
      onDurationChange(...args);
    }
  }

  // Fired while the user agent
  // is downloading media data
  handleProgress(...args) {
    const { actions, onProgress } = this.props;
    if (this.video) {
      actions.handleProgressChange(this.video.buffered);
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
    if (!player.ended) {
      actions.handleEnd();
    }

    if (onEnded) {
      onEnded(...args);
    }
  }

  // Fired whenever the media begins waiting
  handleWaiting(...args) {
    const { player, actions, onWaiting } = this.props;
    if (!player.waiting) {
      actions.handleWaiting();
    }

    if (onWaiting) {
      onWaiting(...args);
    }
  }

  // Fired whenever the player
  // is jumping to a new time
  handleSeeking(...args) {
    const { player, actions, onSeeking } = this.props;
    if (!player.seeking) {
      actions.handleSeeking();
    }

    if (onSeeking) {
      onSeeking(...args);
    }
  }

  // Fired when the player has
  // finished jumping to a new time
  handleSeeked(...args) {
    const { player, actions, onSeeked } = this.props;
    if (player.seeking) {
      actions.handleSeeked();
    }

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
    const { onSuspend } = this.props;
    if (onSuspend) {
      onSuspend(...args);
    }
  }

  // Fires when the loading of an audio/video is aborted
  handleAbort(...args) {
    const { onAbort } = this.props;
    if (onAbort) {
      onAbort(...args);
    }
  }

  // Fires when the current playlist is empty
  handleEmptied(...args) {
    const { onEmptied } = this.props;
    if (onEmptied) {
      onEmptied(...args);
    }
  }

  // Fires when the browser is trying to
  // get media data, but data is not available
  handleStalled(...args) {
    const { onStalled } = this.props;
    if (onStalled) {
      onStalled(...args);
    }
  }

  // Fires when the browser has loaded
  // meta data for the audio/video
  handleLoadedMetaData(...args) {
    const { onLoadedMetadata, startTime } = this.props;

    if (startTime && startTime > 0) {
      this.video.currentTime = startTime;
    }

    if (onLoadedMetadata) {
      onLoadedMetadata(...args);
    }
  }

  // Fires when the browser has loaded
  // the current frame of the audio/video
  handleLoadedData(...args) {
    const { onLoadedData } = this.props;
    if (onLoadedData) {
      onLoadedData(...args);
    }
  }

  // Fires when the current
  // playback position has changed
  handleTimeUpdate(...args) {
    const { player, actions, onTimeUpdate } = this.props;
    if (player.currentTime !== this.video.currentTime) {
      actions.handleTimeUpdate(this.video.currentTime);
    }

    if (onTimeUpdate) {
      onTimeUpdate(...args);
    }
  }

  /**
   * Fires when the playing speed of the audio/video is changed
   */
  handleRateChange(...args) {
    const { player, actions, onRateChange } = this.props;
    if (player.playbackRate !== this.video.playbackRate) {
      actions.handleRateChange(this.video.playbackRate);
    }

    if (onRateChange) {
      onRateChange(...args);
    }
  }

  // Fires when the volume has been changed
  handleVolumeChange(...args) {
    const { player, actions, onVolumeChange } = this.props;
    if (player.volume !== this.video.volume) {
      actions.handleVolumeChange(this.video.volume);
    }

    if (onVolumeChange) {
      onVolumeChange(...args);
    }
  }

  // Fires when an error occurred
  // during the loading of an audio/video
  handleError(...args) {
    const { onError } = this.props;
    if (onError) {
      onError(...args);
    }
  }

  handleKeypress() {

  }

  render() {
    const {
      player, loop, poster,
      preload, src, autoPlay, playsInline
    } = this.props;

    // only keep <source /> elements
    const children = React.Children.toArray(this.props.children)
      .filter((c) => c.type === 'source');

    return (
      <video
        className="video-react-video"
        ref={(c) => { this.video = c; }}
        muted={player.muted}
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
        {children}
      </video>
    );
  }
}

Video.propTypes = propTypes;
Video.defaultProps = defaultProps;
