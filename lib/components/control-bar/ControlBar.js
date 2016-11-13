'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ProgressControl = require('./ProgressControl');

var _ProgressControl2 = _interopRequireDefault(_ProgressControl);

var _PlayToggle = require('./PlayToggle');

var _PlayToggle2 = _interopRequireDefault(_PlayToggle);

var _ForwardControl = require('./ForwardControl');

var _ForwardControl2 = _interopRequireDefault(_ForwardControl);

var _ReplayControl = require('./ReplayControl');

var _ReplayControl2 = _interopRequireDefault(_ReplayControl);

var _FullscreenToggle = require('./FullscreenToggle');

var _FullscreenToggle2 = _interopRequireDefault(_FullscreenToggle);

var _RemainingTimeDisplay = require('../time-controls/RemainingTimeDisplay');

var _RemainingTimeDisplay2 = _interopRequireDefault(_RemainingTimeDisplay);

var _CurrentTimeDisplay = require('../time-controls/CurrentTimeDisplay');

var _CurrentTimeDisplay2 = _interopRequireDefault(_CurrentTimeDisplay);

var _DurationDisplay = require('../time-controls/DurationDisplay');

var _DurationDisplay2 = _interopRequireDefault(_DurationDisplay);

var _TimeDivider = require('../time-controls/TimeDivider');

var _TimeDivider2 = _interopRequireDefault(_TimeDivider);

var _VolumeMenuButton = require('./VolumeMenuButton');

var _VolumeMenuButton2 = _interopRequireDefault(_VolumeMenuButton);

var _PlaybackRate = require('./PlaybackRate');

var _PlaybackRate2 = _interopRequireDefault(_PlaybackRate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  actions: _react.PropTypes.object,
  player: _react.PropTypes.object,
  children: _react.PropTypes.any
};

var ControlBar = function (_Component) {
  _inherits(ControlBar, _Component);

  function ControlBar(props) {
    _classCallCheck(this, ControlBar);

    var _this = _possibleConstructorReturn(this, (ControlBar.__proto__ || Object.getPrototypeOf(ControlBar)).call(this, props));

    _this.getDefaultChildren = _this.getDefaultChildren.bind(_this);
    _this.getFullChildren = _this.getFullChildren.bind(_this);
    return _this;
  }

  _createClass(ControlBar, [{
    key: 'getDefaultChildren',
    value: function getDefaultChildren() {
      return [_react2.default.createElement(_PlayToggle2.default, _extends({}, this.props, {
        key: 'play-toggle',
        order: 1
      })), _react2.default.createElement(_ReplayControl2.default, _extends({}, this.props, {
        key: 'replay-control',
        order: 2
      })), _react2.default.createElement(_ForwardControl2.default, _extends({}, this.props, {
        key: 'forward-control',
        order: 3
      })), _react2.default.createElement(_VolumeMenuButton2.default, _extends({}, this.props, {
        key: 'volume-menu-button',
        order: 4
      })), _react2.default.createElement(_DurationDisplay2.default, _extends({}, this.props, {
        key: 'duration-display',
        order: 5
      })), _react2.default.createElement(_ProgressControl2.default, _extends({}, this.props, {
        key: 'progress-control',
        order: 6
      })), _react2.default.createElement(_RemainingTimeDisplay2.default, _extends({}, this.props, {
        key: 'remaining-time-display',
        order: 7
      })), _react2.default.createElement(_FullscreenToggle2.default, _extends({}, this.props, {
        key: 'fullscreen-toggle',
        order: 8
      }))];
    }
  }, {
    key: 'getFullChildren',
    value: function getFullChildren() {
      return [_react2.default.createElement(_PlayToggle2.default, _extends({}, this.props, {
        key: 'play-toggle',
        order: 1
      })), _react2.default.createElement(_ReplayControl2.default, _extends({}, this.props, {
        key: 'replay-control',
        order: 2
      })), _react2.default.createElement(_ForwardControl2.default, _extends({}, this.props, {
        key: 'forward-control',
        order: 3
      })), _react2.default.createElement(_VolumeMenuButton2.default, _extends({}, this.props, {
        key: 'volume-menu-button',
        order: 4
      })), _react2.default.createElement(_CurrentTimeDisplay2.default, _extends({}, this.props, {
        key: 'current-time-display',
        order: 5
      })), _react2.default.createElement(_TimeDivider2.default, _extends({}, this.props, {
        key: 'time-divider',
        order: 6
      })), _react2.default.createElement(_DurationDisplay2.default, _extends({}, this.props, {
        key: 'duration-display',
        order: 7
      })), _react2.default.createElement(_ProgressControl2.default, _extends({}, this.props, {
        key: 'progress-control',
        order: 8
      })), _react2.default.createElement(_RemainingTimeDisplay2.default, _extends({}, this.props, {
        key: 'remaining-time-display',
        order: 9
      })), _react2.default.createElement(_PlaybackRate2.default, _extends({}, this.props, {
        rates: [1, 1.25, 1.5, 2],
        key: 'playback-rate',
        order: 10
      })), _react2.default.createElement(_FullscreenToggle2.default, _extends({}, this.props, {
        key: 'fullscreen-toggle',
        order: 11
      }))];
    }
  }, {
    key: 'getChildren',
    value: function getChildren() {
      var _this2 = this;

      var children = _react2.default.Children.toArray(this.props.children);
      var defaultChildren = this.getDefaultChildren();
      children = children.concat(defaultChildren.filter(function (c) {
        return !children.find(function (component) {
          return component.type === c.type;
        });
      }));
      return children.sort(function (a, b) {
        return (a.props.order || 1) - (b.props.order - 1);
      }).map(function (element) {
        var e = _react2.default.cloneElement(element, _this2.props);
        return e;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.getChildren();
      return _react2.default.createElement(
        'div',
        { className: 'video-react-control-bar' },
        children
      );
    }
  }]);

  return ControlBar;
}(_react.Component);

exports.default = ControlBar;


ControlBar.propTypes = propTypes;