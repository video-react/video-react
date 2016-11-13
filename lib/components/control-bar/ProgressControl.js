'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _dom = require('../../lib/dom');

var Dom = _interopRequireWildcard(_dom);

var _SeekBar = require('./SeekBar');

var _SeekBar2 = _interopRequireDefault(_SeekBar);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  player: _react.PropTypes.object
};

var ProgressControl = function (_Component) {
  _inherits(ProgressControl, _Component);

  function ProgressControl(props, context) {
    _classCallCheck(this, ProgressControl);

    var _this = _possibleConstructorReturn(this, (ProgressControl.__proto__ || Object.getPrototypeOf(ProgressControl)).call(this, props, context));

    _this.state = {
      mouseTime: {
        time: null,
        position: 0
      }
    };

    _this.handleMouseMoveThrottle = _this.handleMouseMove.bind(_this);
    return _this;
  }

  _createClass(ProgressControl, [{
    key: 'handleMouseMove',
    value: function handleMouseMove(event) {
      if (!event.pageX) {
        return;
      }
      var duration = this.props.player.duration;

      var node = (0, _reactDom.findDOMNode)(this.seekBar);
      var newTime = Dom.getPointerPosition(node, event).x * duration;
      var position = event.pageX - Dom.findElPosition(node).left;

      this.setState({
        mouseTime: {
          time: newTime,
          position: position
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        {
          onMouseMove: this.handleMouseMoveThrottle,
          className: 'video-react-progress-control video-react-control'
        },
        _react2.default.createElement(_SeekBar2.default, _extends({
          mouseTime: this.state.mouseTime,
          ref: function ref(c) {
            _this2.seekBar = c;
          }
        }, this.props))
      );
    }
  }]);

  return ProgressControl;
}(_react.Component);

exports.default = ProgressControl;


ProgressControl.propTypes = propTypes;