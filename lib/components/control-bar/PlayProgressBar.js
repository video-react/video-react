'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PlayProgressBar;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../../lib/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  currentTime: _react.PropTypes.number.isRequired,
  duration: _react.PropTypes.number.isRequired,
  percentage: _react.PropTypes.string
};

// Shows play progress
function PlayProgressBar(_ref) {
  var currentTime = _ref.currentTime,
      duration = _ref.duration,
      percentage = _ref.percentage;

  return _react2.default.createElement(
    'div',
    {
      'data-current-time': (0, _utils.formatTime)(currentTime, duration),
      className: 'video-react-play-progress video-react-slider-bar',
      style: {
        width: percentage
      }
    },
    _react2.default.createElement(
      'span',
      { className: 'video-react-control-text' },
      _react2.default.createElement(
        'span',
        null,
        'Progress'
      ),
      ': ',
      percentage
    )
  );
}

PlayProgressBar.propTypes = propTypes;