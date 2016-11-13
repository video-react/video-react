'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TimeDivider;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  separator: _react.PropTypes.string
};

function TimeDivider(_ref) {
  var separator = _ref.separator;

  var separatorText = separator || '/';
  return _react2.default.createElement(
    'div',
    {
      className: 'video-react-time-control video-react-time-divider',
      dir: 'ltr'
    },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'span',
        null,
        separatorText
      )
    )
  );
}

TimeDivider.propTypes = propTypes;