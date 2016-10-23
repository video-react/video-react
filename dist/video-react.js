(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("video-react", ["react"], factory);
	else if(typeof exports === 'object')
		exports["video-react"] = factory(require("react"));
	else
		root["video-react"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodash = __webpack_require__(7);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  actions: _react.PropTypes.object.isRequired,
	  player: _react.PropTypes.object.isRequired,
	  starttime: _react.PropTypes.number,
	  loop: _react.PropTypes.bool,
	  source: _react.PropTypes.string
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
	    _this.renderSources = _this.renderSources.bind(_this);
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
	      var _props = this.props;
	      var player = _props.player;
	      var actions = _props.actions;
	
	      actions.toggleFullscreen(player);
	    }
	
	    // Fired when the user agent
	    // begins looking for media data
	
	  }, {
	    key: 'handleLoadStart',
	    value: function handleLoadStart() {
	      var _props2 = this.props;
	      var player = _props2.player;
	      var actions = _props2.actions;
	
	      if (player.paused && player.hasStarted) {
	        actions.handleLoadStart(this.video.buffered);
	      }
	    }
	
	    // A handler for events that
	    // signal that waiting has ended
	
	  }, {
	    key: 'handleCanPlay',
	    value: function handleCanPlay() {
	      this.props.actions.handleCanPlay({
	        videoWidth: this.videoWidth(),
	        videoHeight: this.videoHeight()
	      });
	    }
	
	    // A handler for events that
	    // signal that waiting has ended
	
	  }, {
	    key: 'handleCanPlayThrough',
	    value: function handleCanPlayThrough() {
	      var _props3 = this.props;
	      var player = _props3.player;
	      var actions = _props3.actions;
	
	      if (player.waiting) {
	        actions.handleCanPlayThrough();
	      }
	    }
	
	    // A handler for events that
	    // signal that waiting has ended
	
	  }, {
	    key: 'handlePlaying',
	    value: function handlePlaying() {
	      var _props4 = this.props;
	      var player = _props4.player;
	      var actions = _props4.actions;
	
	      if (player.waiting) {
	        actions.handlePlaying();
	      }
	    }
	
	    // Fired whenever the media has been started
	
	  }, {
	    key: 'handlePlay',
	    value: function handlePlay() {
	      var _props5 = this.props;
	      var player = _props5.player;
	      var actions = _props5.actions;
	
	      if (player.paused) {
	        actions.handlePlay();
	      }
	    }
	
	    // Fired whenever the media has been paused
	
	  }, {
	    key: 'handlePause',
	    value: function handlePause() {
	      var _props6 = this.props;
	      var player = _props6.player;
	      var actions = _props6.actions;
	
	      if (!player.paused) {
	        actions.handlePause();
	      }
	    }
	
	    // Fired the first time a video is played
	
	  }, {
	    key: 'handleFirstPlay',
	    value: function handleFirstPlay() {
	      var _props7 = this.props;
	      var player = _props7.player;
	      var starttime = _props7.starttime;
	      var actions = _props7.actions;
	
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
	      var _props8 = this.props;
	      var player = _props8.player;
	      var actions = _props8.actions;
	
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
	      var _props9 = this.props;
	      var loop = _props9.loop;
	      var player = _props9.player;
	      var actions = _props9.actions;
	
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
	      var _props10 = this.props;
	      var player = _props10.player;
	      var actions = _props10.actions;
	
	      if (!player.waiting) {
	        actions.handleWaiting();
	      }
	    }
	
	    // Fired whenever the player
	    // is jumping to a new time
	
	  }, {
	    key: 'handleSeeking',
	    value: function handleSeeking() {
	      var _props11 = this.props;
	      var player = _props11.player;
	      var actions = _props11.actions;
	
	      if (!player.seeking) {
	        actions.handleSeeking();
	      }
	    }
	
	    // Fired when the player has
	    // finished jumping to a new time
	
	  }, {
	    key: 'handleSeeked',
	    value: function handleSeeked() {
	      var _props12 = this.props;
	      var player = _props12.player;
	      var actions = _props12.actions;
	
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
	
	    // Fires when the loading of an audio/video is aborted
	
	  }, {
	    key: 'handleAbort',
	    value: function handleAbort() {}
	
	    // Fires when the current playlist is empty
	
	  }, {
	    key: 'handleEmptied',
	    value: function handleEmptied() {}
	
	    // Fires when the browser is trying to
	    // get media data, but data is not available
	
	  }, {
	    key: 'handleStalled',
	    value: function handleStalled() {}
	
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
	      var _props13 = this.props;
	      var player = _props13.player;
	      var actions = _props13.actions;
	
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
	      var _props14 = this.props;
	      var player = _props14.player;
	      var actions = _props14.actions;
	
	      if (player.playbackRate !== this.video.playbackRate) {
	        actions.handleRateChange(this.video.playbackRate);
	      }
	    }
	
	    // Fires when the volume has been changed
	
	  }, {
	    key: 'handleVolumeChange',
	    value: function handleVolumeChange() {
	      var _props15 = this.props;
	      var player = _props15.player;
	      var actions = _props15.actions;
	
	      if (player.volume !== this.video.volume) {
	        actions.handleVolumeChange(this.video.volume);
	      }
	    }
	
	    // Fires when an error occurred
	    // during the loading of an audio/video
	
	  }, {
	    key: 'handleError',
	    value: function handleError() /* event */{
	      // logger.exception(event, 'Video Error')
	    }
	  }, {
	    key: 'handleKeypress',
	    value: function handleKeypress() {}
	  }, {
	    key: 'renderSources',
	    value: function renderSources() {
	      var source = this.props.source;
	
	      return _react2.default.createElement('source', { src: source });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'video',
	        {
	          className: 'video-react-video',
	          ref: function ref(c) {
	            _this2.video = c;
	          },
	          controls: true,
	          style: {
	            width: '100%',
	            height: '100%'
	          },
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
	        this.renderSources()
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

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

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
	  }, {
	    key: "toggleFullscreen",
	    value: function toggleFullscreen(player) {
	      this.setState({
	        isFullscreen: !player.isFullscreen
	      });
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
	      var videoWidth = _ref.videoWidth;
	      var videoHeight = _ref.videoHeight;
	
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

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(6);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _actions = __webpack_require__(3);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _Video = __webpack_require__(1);
	
	var _Video2 = _interopRequireDefault(_Video);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  width: _react.PropTypes.number,
	  height: _react.PropTypes.number,
	  fluid: _react.PropTypes.bool,
	  aspectRatio: _react.PropTypes.string
	};
	
	var defaultProps = {
	  fluid: false,
	  width: 400,
	  height: 300
	};
	
	var Player = function (_Component) {
	  _inherits(Player, _Component);
	
	  function Player(props) {
	    _classCallCheck(this, Player);
	
	    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, props));
	
	    _this.controlsHideTimer = null;
	
	    _this.state = {
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
	        muted: false,
	        volume: 1,
	        isFullscreen: false,
	        readyState: 0,
	        networkState: 0,
	        videoWidth: 0,
	        videoHeight: 0,
	        hasStarted: false,
	        error: null
	      }
	    };
	    _this.actions = new _actions2.default(_this.setPlayerState.bind(_this));
	
	    _this.renderStyle = _this.renderStyle.bind(_this);
	    _this.handleResize = _this.handleResize.bind(_this);
	    return _this;
	  }
	
	  _createClass(Player, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.handleResize();
	      window.addEventListener('resize', this.handleResize);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      if (this.state.player.isFullscreen !== prevState.player.isFullscreen) {
	        this.handleResize();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      // Remove event listener
	      window.addEventListener('resize', this.handleResize);
	      if (this.controlsHideTimer) {
	        window.clearTimeout(this.controlsHideTimer);
	      }
	    }
	  }, {
	    key: 'setPlayerState',
	    value: function setPlayerState(player) {
	      this.setState({
	        player: Object.assign({}, this.state.player, player)
	      });
	    }
	
	    // player resize
	
	  }, {
	    key: 'handleResize',
	    value: function handleResize() {}
	  }, {
	    key: 'userActive',
	    value: function userActive(active) {
	      this.setState({
	        userActivity: active
	      });
	    }
	  }, {
	    key: 'renderStyle',
	    value: function renderStyle() {
	      var fluid = this.props.fluid;
	      var player = this.state.player;
	
	      var style = {};
	      var width = void 0;
	      var height = void 0;
	      var aspectRatio = void 0;
	
	      // The aspect ratio is either used directly or to calculate width and height.
	      if (this.props.aspectRatio !== undefined && this.props.aspectRatio !== 'auto') {
	        // Use any aspectRatio that's been specifically set
	        aspectRatio = this.props.aspectRatio;
	      } else if (player.videoWidth) {
	        // Otherwise try to get the aspect ratio from the video metadata
	        aspectRatio = player.videoWidth + ':' + player.videoHeight;
	      } else {
	        // Or use a default. The video element's is 2:1, but 16:9 is more common.
	        aspectRatio = '4:3';
	      }
	
	      // Get the ratio as a decimal we can use to calculate dimensions
	      var ratioParts = aspectRatio.split(':');
	      var ratioMultiplier = ratioParts[1] / ratioParts[0];
	
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
	        style.paddingTop = ratioMultiplier * 100 + '%';
	      } else {
	        style.width = width + 'px';
	        style.height = height + 'px';
	      }
	
	      return style;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var fluid = this.props.fluid;
	      var _state$player = this.state.player;
	      var paused = _state$player.paused;
	      var hasStarted = _state$player.hasStarted;
	      var waiting = _state$player.waiting;
	      var seeking = _state$player.seeking;
	      var isFullscreen = _state$player.isFullscreen;
	
	      var props = _extends({}, this.props, {
	        player: this.state.player,
	        actions: this.actions
	      });
	
	      return _react2.default.createElement(
	        'div',
	        {
	          className: (0, _classnames2.default)({
	            'video-react-controls-enabled': true,
	            'video-react-has-started': hasStarted,
	            'video-react-paused': paused,
	            'video-react-playing': !paused,
	            'video-react-waiting': waiting,
	            'video-react-seeking': seeking,
	            'video-react-fluid': fluid,
	            'video-react-fullscreen': isFullscreen,
	            'video-react-user-inactive': !this.state.userActivity,
	            'video-react-user-active': this.state.userActivity
	          }, 'video-react'),
	          style: this.renderStyle(),
	          ref: function ref(c) {
	            _this2.actions.setPlayerElement(c);
	          },
	          onTouchStart: this.handleMouseDown,
	          onMouseDown: this.handleMouseDown,
	          onMouseMove: this.handleMouseMove
	        },
	        _react2.default.createElement(_Video2.default, _extends({
	          ref: function ref(c) {
	            _this2.video = c;
	            _this2.actions.setVideo(c);
	          }
	        }, props))
	      );
	    }
	  }]);
	
	  return Player;
	}(_react.Component);
	
	exports.default = Player;
	
	
	Player.propTypes = propTypes;
	Player.defaultProps = defaultProps;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Video = exports.Player = undefined;
	
	var _Player = __webpack_require__(4);
	
	var _Player2 = _interopRequireDefault(_Player);
	
	var _Video = __webpack_require__(1);
	
	var _Video2 = _interopRequireDefault(_Video);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Player = _Player2.default;
	exports.Video = _Video2.default;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 7 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;
	
	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return root.Date.now();
	};
	
	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	
	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;
	
	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }
	
	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }
	
	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;
	
	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }
	
	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;
	
	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }
	
	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }
	
	  function trailingEdge(time) {
	    timerId = undefined;
	
	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }
	
	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }
	
	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }
	
	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);
	
	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;
	
	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}
	
	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed `func` invocations and a `flush` method to
	 * immediately invoke them. Provide `options` to indicate whether `func`
	 * should be invoked on the leading and/or trailing edge of the `wait`
	 * timeout. The `func` is invoked with the last arguments provided to the
	 * throttled function. Subsequent calls to the throttled function return the
	 * result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the throttled function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=true]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // Avoid excessively updating the position while scrolling.
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	 * jQuery(element).on('click', throttled);
	 *
	 * // Cancel the trailing throttled invocation.
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  if (isObject(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce(func, wait, {
	    'leading': leading,
	    'maxWait': wait,
	    'trailing': trailing
	  });
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	module.exports = throttle;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ])
});
;
//# sourceMappingURL=video-react.js.map