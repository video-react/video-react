import React, { PropTypes, Component } from 'react';
import throttle from 'lodash.throttle';

const propTypes = {
  actions: PropTypes.object.isRequired,
  player: PropTypes.object.isRequired,
  children: React.PropTypes.element,
  starttime: PropTypes.number,
  loop: PropTypes.bool,
  autoplay: PropTypes.bool,
  src: PropTypes.string,
  poster: PropTypes.string,
  preload: React.PropTypes.oneOf(['auto', 'metadata', 'none']),
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

  // set playback rate
  // speed of video
  set playbackRate(rate) {
    this.video.playbackRate = rate;
  }

  // get playback rate
  get playbackRate() {
    return this.video.playbackRate;
  }

  set muted(val) {
    this.video.muted = val;
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
  handleLoadStart() {
    const { player, actions } = this.props;
    if (player.paused && player.hasStarted) {
      actions.handleLoadStart(this.video.buffered);
    }
  }

  // A handler for events that
  // signal that waiting has ended
  handleCanPlay() {
    // console.log('handleCanPlay')
    this.props.actions.handleCanPlay({
      videoWidth: this.videoWidth(),
      videoHeight: this.videoHeight(),
      duration: this.video.duration,
    });
  }

  // A handler for events that
  // signal that waiting has ended
  handleCanPlayThrough() {
    // console.log('handleCanPlayThrough')
    const { player, actions } = this.props;
    if (player.waiting) {
      actions.handleCanPlayThrough();
    }
  }

  // A handler for events that
  // signal that waiting has ended
  handlePlaying() {
    const { player, actions } = this.props;
    if (player.waiting) {
      actions.handlePlaying();
    }
  }

  // Fired whenever the media has been started
  handlePlay() {
    const { player, actions } = this.props;
    if (player.paused) {
      actions.handlePlay({
        duration: this.video.duration
      });
    }
  }

  // Fired whenever the media has been paused
  handlePause() {
    const { player, actions } = this.props;
    if (!player.paused) {
      actions.handlePause();
    }
  }

  // Fired the first time a video is played
  handleFirstPlay() {
    const { player, starttime, actions } = this.props;

    // If the first starttime attribute is specified
    // then we will start at the given offset in seconds
    if (starttime) {
      this.seek(starttime);
    }

    if (!player.hasStarted) {
      actions.handleFirstPlay();
    }
  }

  // Fired when the duration of
  // the media resource is first known or changed
  handleDurationChange() {
    const { player, actions } = this.props;
    if (player.duration !== this.video.duration) {
      actions.handleDurationChange(this.video.duration);
    }
  }

  // Fired while the user agent
  // is downloading media data
  handleProgress() {
    const { actions } = this.props;
    actions.handleProgressChange(this.video.buffered);
  }

  // Fired when the end of the media resource
  // is reached (currentTime == duration)
  handleEnded() {
    const { loop, player, actions } = this.props;
    if (loop) {
      this.seek(0);
      this.play();
    } else if (!player.paused) {
      this.pause();
    }
    if (!player.ended) {
      actions.handleEnd();
    }
  }

  // Fired whenever the media begins waiting
  handleWaiting() {
    const { player, actions } = this.props;
    if (!player.waiting) {
      actions.handleWaiting();
    }
  }

  // Fired whenever the player
  // is jumping to a new time
  handleSeeking() {
    const { player, actions } = this.props;
    if (!player.seeking) {
      actions.handleSeeking();
    }
  }

  // Fired when the player has
  // finished jumping to a new time
  handleSeeked() {
    const { player, actions } = this.props;
    if (player.seeking) {
      actions.handleSeeked();
    }
  }

  // Handle Fullscreen Change
  handleFullscreenChange() {
  }


  // Fires when the browser is
  // intentionally not getting media data
  handleSuspend() {
    // console.log('handleSuspend', this.video.duration)
  }

  // Fires when the loading of an audio/video is aborted
  handleAbort() {
    // console.log('handleAbort', this.video.duration)
  }

  // Fires when the current playlist is empty
  handleEmptied() {
  }

  // Fires when the browser is trying to
  // get media data, but data is not available
  handleStalled() {
    // console.log('handleStalled', this.video.duration)
  }

  // Fires when the browser has loaded
  // meta data for the audio/video
  handleLoadedMetaData() {
    // console.log('handleLoadedMetaData')
  }

  // Fires when the browser has loaded
  // the current frame of the audio/video
  handleLoadedData() {
    // console.log('handleLoadedData')
  }

  // Fires when the current
  // playback position has changed
  handleTimeUpdate() {
    const { player, actions } = this.props;
    if (player.currentTime !== this.video.currentTime) {
      actions.handleTimeUpdate(this.video.currentTime);
    }
  }

  /**
   * Fires when the playing speed of the audio/video is changed
   */
  handleRateChange() {
    const { player, actions } = this.props;
    if (player.playbackRate !== this.video.playbackRate) {
      actions.handleRateChange(this.video.playbackRate);
    }
  }

  // Fires when the volume has been changed
  handleVolumeChange() {
    const { player, actions } = this.props;
    if (player.volume !== this.video.volume) {
      actions.handleVolumeChange(this.video.volume);
    }
  }

  // Fires when an error occurred
  // during the loading of an audio/video
  handleError(/* event */) {
    // console.log(event, 'Video Error')
  }

  handleKeypress() {

  }

  render() {
    const { player, loop, poster, preload, src } = this.props;

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
