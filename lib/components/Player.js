'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _actions = require('../actions');

var _actions2 = _interopRequireDefault(_actions);

var _BigPlayButton = require('./BigPlayButton');

var _BigPlayButton2 = _interopRequireDefault(_BigPlayButton);

var _LoadingSpinner = require('./LoadingSpinner');

var _LoadingSpinner2 = _interopRequireDefault(_LoadingSpinner);

var _PosterImage = require('./PosterImage');

var _PosterImage2 = _interopRequireDefault(_PosterImage);

var _Video = require('./Video');

var _Video2 = _interopRequireDefault(_Video);

var _ControlBar = require('./control-bar/ControlBar');

var _ControlBar2 = _interopRequireDefault(_ControlBar);

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
      var _state$player = this.state.player,
          paused = _state$player.paused,
          hasStarted = _state$player.hasStarted,
          waiting = _state$player.waiting,
          seeking = _state$player.seeking,
          isFullscreen = _state$player.isFullscreen;

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
        }, props)),
        _react2.default.createElement(_PosterImage2.default, props),
        _react2.default.createElement(_LoadingSpinner2.default, props),
        _react2.default.createElement(_BigPlayButton2.default, props),
        _react2.default.createElement(_ControlBar2.default, props)
      );
    }
  }]);

  return Player;
}(_react.Component);

exports.default = Player;


Player.propTypes = propTypes;
Player.defaultProps = defaultProps;