'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../../lib/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  player: _react.PropTypes.object
};

function CurrentTimeDisplay(_ref) {
  var _ref$player = _ref.player,
      currentTime = _ref$player.currentTime,
      duration = _ref$player.duration;

  var formattedTime = (0, _utils.formatTime)(currentTime, duration);
  return _react2.default.createElement(
    'div',
    {
      className: 'video-react-current-time video-react-time-control video-react-control'
    },
    _react2.default.createElement(
      'div',
      {
        className: 'video-react-current-time-display',
        'aria-live': 'off'
      },
      _react2.default.createElement(
        'span',
        { className: 'video-react-control-text' },
        'Current Time '
      ),
      formattedTime
    )
  );
}

CurrentTimeDisplay.propTypes = propTypes;

exports.default = CurrentTimeDisplay;