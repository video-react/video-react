'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  percentage: _react.PropTypes.string,
  vertical: _react.PropTypes.bool
};

var defaultProps = {
  percentage: '100%',
  vertical: false
};

function VolumeLevel(_ref) {
  var percentage = _ref.percentage,
      vertical = _ref.vertical;

  var style = {};
  if (vertical) {
    style.height = percentage;
  } else {
    style.width = percentage;
  }

  return _react2.default.createElement(
    'div',
    {
      className: 'video-react-volume-level',
      style: style
    },
    _react2.default.createElement('span', { className: 'video-react-control-text' })
  );
}

VolumeLevel.propTypes = propTypes;
VolumeLevel.defaultProps = defaultProps;
exports.default = VolumeLevel;