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

function RemainingTimeDisplay(_ref) {
  var _ref$player = _ref.player,
      currentTime = _ref$player.currentTime,
      duration = _ref$player.duration;

  var remainingTime = duration - currentTime;
  var formattedTime = (0, _utils.formatTime)(remainingTime);
  return _react2.default.createElement(
    'div',
    {
      className: 'video-react-remaining-time video-react-time-control video-react-control'
    },
    _react2.default.createElement(
      'div',
      {
        className: 'video-react-remaining-time-display',
        'aria-live': 'off'
      },
      _react2.default.createElement(
        'span',
        { className: 'video-react-control-text' },
        'Remaining Time '
      ),
      '-',
      formattedTime
    )
  );
}

RemainingTimeDisplay.propTypes = propTypes;

exports.default = RemainingTimeDisplay;