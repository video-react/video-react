"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actions = function () {
  function Actions(setState) {
    _classCallCheck(this, Actions);

    this.setState = setState;
  }

  _createClass(Actions, [{
    key: "setVideo",
    value: function setVideo(video) {
      this.video = video;
    }
  }, {
    key: "setPlayerElement",
    value: function setPlayerElement(playerElement) {
      this.playerElement = playerElement;
    }
  }, {
    key: "play",
    value: function play() {
      this.video.play();
    }
  }, {
    key: "pause",
    value: function pause() {
      this.video.pause();
    }

    // seek video by time

  }, {
    key: "seek",
    value: function seek(time) {
      this.video.seek(time);
    }

    // jump forward x seconds

  }, {
    key: "forward",
    value: function forward(seconds) {
      this.video.forward(seconds);
    }

    // jump back x seconds

  }, {
    key: "replay",
    value: function replay(seconds) {
      this.video.replay(seconds);
    }
  }, {
    key: "handleFullscreenChange",
    value: function handleFullscreenChange(isFullscreen) {
      this.setState({
        isFullscreen: isFullscreen
      });
    }
  }, {
    key: "handleLoadStart",
    value: function handleLoadStart(buffered) {
      this.setState({
        hasStarted: false,
        ended: false,
        buffered: buffered
      });
    }
  }, {
    key: "handleCanPlay",
    value: function handleCanPlay(_ref) {
      var videoWidth = _ref.videoWidth,
          videoHeight = _ref.videoHeight;

      this.setState({
        waiting: false,
        videoWidth: videoWidth,
        videoHeight: videoHeight
      });
    }
  }, {
    key: "handleWaiting",
    value: function handleWaiting() {
      this.setState({
        waiting: true
      });
    }
  }, {
    key: "handleCanPlayThrough",
    value: function handleCanPlayThrough() {
      this.setState({
        waiting: false
      });
    }
  }, {
    key: "handlePlaying",
    value: function handlePlaying() {
      this.setState({
        waiting: false
      });
    }
  }, {
    key: "handlePlay",
    value: function handlePlay() {
      this.setState({
        ended: false,
        paused: false,
        autoPaused: false,
        waiting: false,
        hasStarted: true
      });
    }
  }, {
    key: "handlePause",
    value: function handlePause() {
      this.setState({
        paused: true
      });
    }
  }, {
    key: "handleEnd",
    value: function handleEnd() {
      this.setState({
        ended: true
      });
    }
  }, {
    key: "handleSeeking",
    value: function handleSeeking() {
      this.setState({
        seeking: true
      });
    }
  }, {
    key: "handleSeeked",
    value: function handleSeeked() {
      this.setState({
        seeking: false
      });
    }
  }, {
    key: "handleSeekingTime",
    value: function handleSeekingTime(time) {
      this.setState({
        seekingTime: time
      });
    }
  }, {
    key: "handleEndSeeking",
    value: function handleEndSeeking(time) {
      this.setState({
        seekingTime: 0,
        currentTime: time
      });
    }
  }, {
    key: "handleDurationChange",
    value: function handleDurationChange(duration) {
      this.setState({
        duration: duration
      });
    }
  }, {
    key: "handleTimeUpdate",
    value: function handleTimeUpdate(time) {
      this.setState({
        currentTime: time
      });
    }
  }, {
    key: "handleVolumeChange",
    value: function handleVolumeChange(volume) {
      this.setState({
        volume: volume
      });
    }
  }, {
    key: "handleProgressChange",
    value: function handleProgressChange(buffered) {
      this.setState({
        buffered: buffered
      });
    }
  }, {
    key: "handleRateChange",
    value: function handleRateChange(rate) {
      this.setState({
        playbackRate: rate
      });
    }
  }, {
    key: "handleMute",
    value: function handleMute(muted) {
      this.setState({
        muted: muted
      });
    }
  }]);

  return Actions;
}();

exports.default = Actions;