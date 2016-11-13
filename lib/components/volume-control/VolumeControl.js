'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = VolumeControl;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _VolumeBar = require('./VolumeBar');

var _VolumeBar2 = _interopRequireDefault(_VolumeBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function VolumeControl() {
  return _react2.default.createElement(
    'div',
    {
      className: 'video-react-volume-control video-react-control'
    },
    _react2.default.createElement(_VolumeBar2.default, this.props)
  );
}