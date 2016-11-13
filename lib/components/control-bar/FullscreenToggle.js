'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _dom = require('../../lib/dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  actions: _react.PropTypes.object,
  player: _react.PropTypes.object
};

var FullscreenToggle = function (_Component) {
  _inherits(FullscreenToggle, _Component);

  function FullscreenToggle(props, context) {
    _classCallCheck(this, FullscreenToggle);

    var _this = _possibleConstructorReturn(this, (FullscreenToggle.__proto__ || Object.getPrototypeOf(FullscreenToggle)).call(this, props, context));

    _this.handleClick = _this.handleClick.bind(_this);
    _this.requestFullscreen = _this.requestFullscreen.bind(_this);
    _this.handleFullScreenChange = _this.handleFullScreenChange.bind(_this);
    return _this;
  }

  _createClass(FullscreenToggle, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('fullscreenchange', this.handleFullScreenChange);
      document.addEventListener('webkitfullscreenchange', this.handleFullScreenChange);
      document.addEventListener('mozfullscreenchange', this.handleFullScreenChange);
      document.addEventListener('MSFullscreenChange', this.handleFullScreenChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('fullscreenchange', this.handleFullScreenChange);
      document.removeEventListener('webkitfullscreenchange', this.handleFullScreenChange);
      document.removeEventListener('mozfullscreenchange', this.handleFullScreenChange);
      document.removeEventListener('MSFullscreenChange', this.handleFullScreenChange);
    }
  }, {
    key: 'handleFullScreenChange',
    value: function handleFullScreenChange() {
      var actions = this.props.actions;

      actions.handleFullscreenChange(this.isFullscreen());
    }
  }, {
    key: 'isFullscreen',
    value: function isFullscreen() {
      return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
    }
  }, {
    key: 'isFullscreenEnabled',
    value: function isFullscreenEnabled() {
      return document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;
    }

    // go full-screen

  }, {
    key: 'requestFullscreen',
    value: function requestFullscreen() {
      var playerElement = this.props.actions.playerElement;


      if (playerElement.requestFullscreen) {
        playerElement.requestFullscreen();
      } else if (playerElement.webkitRequestFullscreen) {
        playerElement.webkitRequestFullscreen();
      } else if (playerElement.mozRequestFullScreen) {
        playerElement.mozRequestFullScreen();
      } else if (playerElement.msRequestFullscreen) {
        playerElement.msRequestFullscreen();
      }
    }
  }, {
    key: 'exitFullscreen',
    value: function exitFullscreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      var _props = this.props,
          player = _props.player,
          actions = _props.actions;

      if (this.isFullscreenEnabled()) {
        if (this.isFullscreen()) {
          this.exitFullscreen();
        } else {
          this.requestFullscreen();
        }
      } else {
        actions.handleFullscreenChange(!player.isFullscreen);
      }

      (0, _dom.blurNode)(this.button);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var player = this.props.player;

      return _react2.default.createElement(
        'button',
        {
          className: (0, _classnames2.default)({
            'video-react-icon-fullscreen-exit': player.isFullscreen,
            'video-react-icon-fullscreen': !player.isFullscreen
          }, 'video-react-fullscreen-control video-react-control video-react-button video-react-icon'),
          ref: function ref(c) {
            _this2.button = c;
          },
          type: 'button',
          'aria-live': 'polite',
          onClick: this.handleClick
        },
        _react2.default.createElement(
          'span',
          { className: 'video-react-control-text' },
          'Non-Fullscreen'
        )
      );
    }
  }]);

  return FullscreenToggle;
}(_react.Component);

exports.default = FullscreenToggle;


FullscreenToggle.propTypes = propTypes;