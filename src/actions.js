
export default class Actions {

  constructor(setState) {
    this.setState = setState;
  }

  setVideo(video) {
    this.video = video;
  }

  setPlayerElement(playerElement) {
    this.playerElement = playerElement;
  }

  play() {
    this.video.play();
  }

  pause() {
    this.video.pause();
  }

  // seek video by time
  seek(time) {
    this.video.seek(time);
  }

  // jump forward x seconds
  forward(seconds) {
    this.video.forward(seconds);
  }

  // jump back x seconds
  replay(seconds) {
    this.video.replay(seconds);
  }

  changeRate(rate) {
    this.video.playbackRate = rate;
  }

  changeVolume(volume) {
    this.video.volume = volume;
  }

  toggleMuted(muted) {
    this.setState({
      muted,
    });
  }

  handleFullscreenChange(isFullscreen) {
    this.setState({
      isFullscreen,
    });
  }

  handleLoadStart(buffered) {
    this.setState({
      hasStarted: false,
      ended: false,
      buffered,
    });
  }

  handleCanPlay({ videoWidth, videoHeight, duration }) {
    this.setState({
      waiting: false,
      videoWidth,
      videoHeight,
      duration
    });
  }

  handleWaiting() {
    this.setState({
      waiting: true,
    });
  }

  handleCanPlayThrough() {
    this.setState({
      waiting: false,
    });
  }

  handlePlaying() {
    this.setState({
      waiting: false,
    });
  }

  handlePlay({ duration }) {
    this.setState({
      ended: false,
      paused: false,
      autoPaused: false,
      waiting: false,
      hasStarted: true,
      duration
    });
  }

  handlePause() {
    this.setState({
      paused: true,
    });
  }

  handleEnd() {
    this.setState({
      ended: true,
    });
  }

  handleSeeking() {
    this.setState({
      seeking: true,
    });
  }

  handleSeeked() {
    this.setState({
      seeking: false,
    });
  }

  handleSeekingTime(time) {
    this.setState({
      seekingTime: time,
    });
  }

  handleEndSeeking(time) {
    this.setState({
      seekingTime: 0,
      currentTime: time,
    });
  }

  handleDurationChange(duration) {
    this.setState({
      duration,
    });
  }

  handleTimeUpdate(time) {
    this.setState({
      currentTime: time,
    });
  }

  handleVolumeChange(volume) {
    this.setState({
      volume,
    });
  }

  handleProgressChange(buffered) {
    this.setState({
      buffered,
    });
  }

  handleRateChange(rate) {
    this.setState({
      playbackRate: rate,
    });
  }

  handleMute(muted) {
    this.setState({
      muted,
    });
  }


}
