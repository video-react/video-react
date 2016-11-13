'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash.throttle');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  actions: _react.PropTypes.object,
  player: _react.PropTypes.object,
  children: _react.PropTypes.any,
  starttime: _react.PropTypes.number,
  loop: _react.PropTypes.bool,
  autoplay: _react.PropTypes.bool,
  src: _react.PropTypes.string,
  poster: _react.PropTypes.string,
  preload: _react2.default.PropTypes.oneOf(['auto', 'metadata', 'none'])
};

var defaultProps = {
  preload: 'auto'
};

var Video = function (_Component) {
  _inherits(Video, _Component);

  function Video(props) {
    _classCallCheck(this, Video);

    var _this = _possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).call(this, props));

    _this.play = _this.play.bind(_this);
    _this.pause = _this.pause.bind(_this);
    _this.seek = _this.seek.bind(_this);
    _this.forward = _this.forward.bind(_this);
    _this.replay = _this.replay.bind(_this);
    _this.toggleFullscreen = _this.toggleFullscreen.bind(_this);
    _this.videoWidth = _this.videoWidth.bind(_this);
    _this.videoHeight = _this.videoHeight.bind(_this);
    _this.handleLoadStart = _this.handleLoadStart.bind(_this);
    _this.handleCanPlay = _this.handleCanPlay.bind(_this);
    _this.handleCanPlayThrough = _this.handleCanPlayThrough.bind(_this);
    _this.handlePlay = _this.handlePlay.bind(_this);
    _this.handlePlaying = _this.handlePlaying.bind(_this);
    _this.handlePause = _this.handlePause.bind(_this);
    _this.handleEnded = _this.handleEnded.bind(_this);
    _this.handleWaiting = _this.handleWaiting.bind(_this);
    _this.handleSeeking = _this.handleSeeking.bind(_this);
    _this.handleSeeked = _this.handleSeeked.bind(_this);
    _this.handleFullscreenChange = _this.handleFullscreenChange.bind(_this);
    _this.handleError = _this.handleError.bind(_this);
    _this.handleSuspend = _this.handleSuspend.bind(_this);
    _this.handleAbort = _this.handleAbort.bind(_this);
    _this.handleEmptied = _this.handleEmptied.bind(_this);
    _this.handleStalled = _this.handleStalled.bind(_this);
    _this.handleLoadedMetaData = _this.handleLoadedMetaData.bind(_this);
    _this.handleLoadedData = _this.handleLoadedData.bind(_this);
    _this.handleTimeUpdate = (0, _lodash2.default)(_this.handleTimeUpdate.bind(_this), 250);
    _this.handleRateChange = _this.handleRateChange.bind(_this);
    _this.handleVolumeChange = _this.handleVolumeChange.bind(_this);
    _this.handleDurationChange = _this.handleDurationChange.bind(_this);
    _this.handleProgress = (0, _lodash2.default)(_this.handleProgress.bind(_this), 1000);
    _this.handleKeypress = _this.handleKeypress.bind(_this);
    return _this;
  }

  // set playback rate
  // speed of video


  _createClass(Video, [{
    key: 'play',


    // play the video
    value: function play() {
      this.video.play();
    }

    // pause the video

  }, {
    key: 'pause',
    value: function pause() {
      this.video.pause();
    }

    // toggle play

  }, {
    key: 'togglePlay',
    value: function togglePlay() {
      if (this.video.paused) {
        this.play();
      } else {
        this.pause();
      }
    }

    // video width

  }, {
    key: 'videoWidth',
    value: function videoWidth() {
      return this.video.videoWidth;
    }

    // video height

  }, {
    key: 'videoHeight',
    value: function videoHeight() {
      return this.video.videoHeight;
    }

    // seek video by time

  }, {
    key: 'seek',
    value: function seek(time) {
      try {
        this.video.currentTime = time;
      } catch (e) {
        // console.log(e, 'Video is not ready.')
      }
    }

    // jump forward x seconds

  }, {
    key: 'forward',
    value: function forward(seconds) {
      this.seek(this.video.currentTime + seconds);
    }

    // jump back x seconds

  }, {
    key: 'replay',
    value: function replay(seconds) {
      this.forward(-seconds);
    }

    // enter or exist full screen

  }, {
    key: 'toggleFullscreen',
    value: function toggleFullscreen() {
      var _props = this.props,
          player = _props.player,
          actions = _props.actions;

      actions.toggleFullscreen(player);
    }

    // Fired when the user agent
    // begins looking for media data

  }, {
    key: 'handleLoadStart',
    value: function handleLoadStart() {
      var _props2 = this.props,
          player = _props2.player,
          actions = _props2.actions;

      if (player.paused && player.hasStarted) {
        actions.handleLoadStart(this.video.buffered);
      }
    }

    // A handler for events that
    // signal that waiting has ended

  }, {
    key: 'handleCanPlay',
    value: function handleCanPlay() {
      // console.log('handleCanPlay')
      this.props.actions.handleCanPlay({
        videoWidth: this.videoWidth(),
        videoHeight: this.videoHeight(),
        duration: this.video.duration
      });
    }

    // A handler for events that
    // signal that waiting has ended

  }, {
    key: 'handleCanPlayThrough',
    value: function handleCanPlayThrough() {
      // console.log('handleCanPlayThrough')
      var _props3 = this.props,
          player = _props3.player,
          actions = _props3.actions;

      if (player.waiting) {
        actions.handleCanPlayThrough();
      }
    }

    // A handler for events that
    // signal that waiting has ended

  }, {
    key: 'handlePlaying',
    value: function handlePlaying() {
      var _props4 = this.props,
          player = _props4.player,
          actions = _props4.actions;

      if (player.waiting) {
        actions.handlePlaying();
      }
    }

    // Fired whenever the media has been started

  }, {
    key: 'handlePlay',
    value: function handlePlay() {
      var _props5 = this.props,
          player = _props5.player,
          actions = _props5.actions;

      if (player.paused) {
        actions.handlePlay({
          duration: this.video.duration
        });
      }
    }

    // Fired whenever the media has been paused

  }, {
    key: 'handlePause',
    value: function handlePause() {
      var _props6 = this.props,
          player = _props6.player,
          actions = _props6.actions;

      if (!player.paused) {
        actions.handlePause();
      }
    }

    // Fired the first time a video is played

  }, {
    key: 'handleFirstPlay',
    value: function handleFirstPlay() {
      var _props7 = this.props,
          player = _props7.player,
          starttime = _props7.starttime,
          actions = _props7.actions;

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

  }, {
    key: 'handleDurationChange',
    value: function handleDurationChange() {
      var _props8 = this.props,
          player = _props8.player,
          actions = _props8.actions;

      if (player.duration !== this.video.duration) {
        actions.handleDurationChange(this.video.duration);
      }
    }

    // Fired while the user agent
    // is downloading media data

  }, {
    key: 'handleProgress',
    value: function handleProgress() {
      var actions = this.props.actions;

      actions.handleProgressChange(this.video.buffered);
    }

    // Fired when the end of the media resource
    // is reached (currentTime == duration)

  }, {
    key: 'handleEnded',
    value: function handleEnded() {
      var _props9 = this.props,
          loop = _props9.loop,
          player = _props9.player,
          actions = _props9.actions;

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

  }, {
    key: 'handleWaiting',
    value: function handleWaiting() {
      var _props10 = this.props,
          player = _props10.player,
          actions = _props10.actions;

      if (!player.waiting) {
        actions.handleWaiting();
      }
    }

    // Fired whenever the player
    // is jumping to a new time

  }, {
    key: 'handleSeeking',
    value: function handleSeeking() {
      var _props11 = this.props,
          player = _props11.player,
          actions = _props11.actions;

      if (!player.seeking) {
        actions.handleSeeking();
      }
    }

    // Fired when the player has
    // finished jumping to a new time

  }, {
    key: 'handleSeeked',
    value: function handleSeeked() {
      var _props12 = this.props,
          player = _props12.player,
          actions = _props12.actions;

      if (player.seeking) {
        actions.handleSeeked();
      }
    }

    // Handle Fullscreen Change

  }, {
    key: 'handleFullscreenChange',
    value: function handleFullscreenChange() {}

    // Fires when the browser is
    // intentionally not getting media data

  }, {
    key: 'handleSuspend',
    value: function handleSuspend() {}
    // console.log('handleSuspend', this.video.duration)


    // Fires when the loading of an audio/video is aborted

  }, {
    key: 'handleAbort',
    value: function handleAbort() {}
    // console.log('handleAbort', this.video.duration)


    // Fires when the current playlist is empty

  }, {
    key: 'handleEmptied',
    value: function handleEmptied() {}

    // Fires when the browser is trying to
    // get media data, but data is not available

  }, {
    key: 'handleStalled',
    value: function handleStalled() {}
    // console.log('handleStalled', this.video.duration)


    // Fires when the browser has loaded
    // meta data for the audio/video

  }, {
    key: 'handleLoadedMetaData',
    value: function handleLoadedMetaData() {}
    // console.log('handleLoadedMetaData')


    // Fires when the browser has loaded
    // the current frame of the audio/video

  }, {
    key: 'handleLoadedData',
    value: function handleLoadedData() {}
    // console.log('handleLoadedData')


    // Fires when the current
    // playback position has changed

  }, {
    key: 'handleTimeUpdate',
    value: function handleTimeUpdate() {
      var _props13 = this.props,
          player = _props13.player,
          actions = _props13.actions;

      if (player.currentTime !== this.video.currentTime) {
        actions.handleTimeUpdate(this.video.currentTime);
      }
    }

    /**
     * Fires when the playing speed of the audio/video is changed
     */

  }, {
    key: 'handleRateChange',
    value: function handleRateChange() {
      var _props14 = this.props,
          player = _props14.player,
          actions = _props14.actions;

      if (player.playbackRate !== this.video.playbackRate) {
        actions.handleRateChange(this.video.playbackRate);
      }
    }

    // Fires when the volume has been changed

  }, {
    key: 'handleVolumeChange',
    value: function handleVolumeChange() {
      var _props15 = this.props,
          player = _props15.player,
          actions = _props15.actions;

      if (player.volume !== this.video.volume) {
        actions.handleVolumeChange(this.video.volume);
      }
    }

    // Fires when an error occurred
    // during the loading of an audio/video

  }, {
    key: 'handleError',
    value: function handleError() /* event */{
      // console.log(event, 'Video Error')
    }
  }, {
    key: 'handleKeypress',
    value: function handleKeypress() {}
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props16 = this.props,
          player = _props16.player,
          loop = _props16.loop,
          poster = _props16.poster,
          preload = _props16.preload,
          src = _props16.src;

      // only keep <source /> elements

      var children = _react2.default.Children.toArray(this.props.children).filter(function (c) {
        return c.type === 'source';
      });

      return _react2.default.createElement(
        'video',
        {
          className: 'video-react-video',
          ref: function ref(c) {
            _this2.video = c;
          },
          muted: player.muted,
          preload: preload,
          loop: loop,
          poster: poster,
          src: src,
          onLoadStart: this.handleLoadStart,
          onWaiting: this.handleWaiting,
          onCanPlay: this.handleCanPlay,
          onCanPlayThrough: this.handleCanPlayThrough,
          onPlaying: this.handlePlaying,
          onEnded: this.handleEnded,
          onSeeking: this.handleSeeking,
          onSeeked: this.handleSeeked,
          onPlay: this.handlePlay,
          onPause: this.handlePause,
          onProgress: this.handleProgress,
          onDurationChange: this.handleDurationChange,
          onError: this.handleError,
          onSuspend: this.handleSuspend,
          onAbort: this.handleAbort,
          onEmptied: this.handleEmptied,
          onStalled: this.handleStalled,
          onLoadedMetadata: this.handleLoadedMetaData,
          onLoadedData: this.handleLoadedData,
          onTimeUpdate: this.handleTimeUpdate,
          onRateChange: this.handleRateChange,
          onVolumeChange: this.handleVolumeChange
        },
        children
      );
    }
  }, {
    key: 'playbackRate',
    set: function set(rate) {
      this.video.playbackRate = rate;
    }

    // get playback rate
    ,
    get: function get() {
      return this.video.playbackRate;
    }
  }, {
    key: 'muted',
    set: function set(val) {
      this.video.muted = val;
    }
  }, {
    key: 'volume',
    set: function set(val) {
      this.video.volume = val;
    }
  }]);

  return Video;
}(_react.Component);

exports.default = Video;


Video.propTypes = propTypes;
Video.defaultProps = defaultProps;