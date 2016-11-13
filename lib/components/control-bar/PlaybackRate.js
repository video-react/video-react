'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _MenuButton = require('../menu/MenuButton');

var _MenuButton2 = _interopRequireDefault(_MenuButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  player: _react.PropTypes.object,
  actions: _react.PropTypes.object,
  rates: _react.PropTypes.array
};

var PlaybackRate = function (_Component) {
  _inherits(PlaybackRate, _Component);

  function PlaybackRate(props, context) {
    _classCallCheck(this, PlaybackRate);

    var _this = _possibleConstructorReturn(this, (PlaybackRate.__proto__ || Object.getPrototypeOf(PlaybackRate)).call(this, props, context));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(PlaybackRate, [{
    key: 'handleClick',
    value: function handleClick() {
      var _props = this.props,
          player = _props.player,
          actions = _props.actions,
          rates = _props.rates;

      // this will select first one if the last one currently selected

      var newRate = rates[0];
      for (var i = 0; i < rates.length; i++) {
        if (rates[i] > player.playbackRate) {
          newRate = rates[i];
          break;
        }
      }
      actions.changeRate(newRate);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          rates = _props2.rates,
          player = _props2.player,
          actions = _props2.actions;

      var items = rates.map(function (rate) {
        return {
          label: rate + 'x',
          value: rate,
          selected: rate === player.playbackRate,
          onClick: function onClick() {
            actions.changeRate(rate);
          }
        };
      });

      return _react2.default.createElement(
        _MenuButton2.default,
        {
          className: (0, _classnames2.default)({
            'video-react-playback-rate': true
          }),
          onClick: this.handleClick,
          items: items
        },
        _react2.default.createElement(
          'span',
          { className: 'video-react-control-text' },
          'Playback Rate'
        ),
        _react2.default.createElement(
          'div',
          { className: 'video-react-playback-rate-value' },
          player.playbackRate.toFixed(2),
          'x'
        )
      );
    }
  }]);

  return PlaybackRate;
}(_react.Component);

PlaybackRate.propTypes = propTypes;
exports.default = PlaybackRate;