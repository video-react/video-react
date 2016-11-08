'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../../lib/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MouseTimeDisplay(_ref) {
  var duration = _ref.duration,
      mouseTime = _ref.mouseTime;

  if (!mouseTime.time) {
    return null;
  }

  var time = (0, _utils.formatTime)(mouseTime.time, duration);

  return _react2.default.createElement('div', {
    className: 'video-react-mouse-display',
    style: {
      left: mouseTime.position + 'px'
    },
    'data-current-time': time
  });
}

MouseTimeDisplay.propTypes = {
  duration: _react.PropTypes.number.isRequired,
  mouseTime: _react.PropTypes.object.isRequired
};

exports.default = MouseTimeDisplay;