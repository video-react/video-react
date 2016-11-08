'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ControlBar;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ControlBar(props) {
  return _react2.default.createElement(
    'div',
    { className: 'video-react-control-bar' },
    _react2.default.createElement(_PlayToggle2.default, props),
    _react2.default.createElement(_ReplayControl2.default, props),
    _react2.default.createElement(_ForwardControl2.default, props),
    _react2.default.createElement(_ProgressControl2.default, props),
    _react2.default.createElement(_FullscreenToggle2.default, props)
  );
}