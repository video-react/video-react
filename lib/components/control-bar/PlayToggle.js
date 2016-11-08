'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _dom = require('../../lib/dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  actions: _react.PropTypes.object.isRequired,
  player: _react.PropTypes.object.isRequired
};

var PlayToggle = function (_Component) {
  _inherits(PlayToggle, _Component);

  function PlayToggle(props, context) {
    _classCallCheck(this, PlayToggle);

    var _this = _possibleConstructorReturn(this, (PlayToggle.__proto__ || Object.getPrototypeOf(PlayToggle)).call(this, props, context));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(PlayToggle, [{
    key: 'handleClick',
    value: function handleClick() {
      var _props = this.props,
          actions = _props.actions,
          player = _props.player;

      if (player.paused) {
        actions.play();
      } else {
        actions.pause();
      }
      (0, _dom.blurNode)(this.button);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var player = this.props.player;

      var controlText = player.paused ? 'Play' : 'Pause';

      return _react2.default.createElement(
        'button',
        {
          ref: function ref(c) {
            _this2.button = c;
          },
          className: (0, _classnames2.default)({
            'video-react-play-control': true,
            'video-react-control': true,
            'video-react-button': true,
            'video-react-paused': player.paused,
            'video-react-playing': !player.paused
          }),
          onClick: this.handleClick
        },
        _react2.default.createElement(
          'span',
          { className: 'video-react-control-text' },
          controlText
        )
      );
    }
  }]);

  return PlayToggle;
}(_react.Component);

exports.default = PlayToggle;


PlayToggle.propTypes = propTypes;