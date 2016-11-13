'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  actions: _react.PropTypes.object,
  player: _react.PropTypes.object,
  position: _react.PropTypes.string
};

var defaultProps = {
  position: 'left'
};

var BigPlayButton = function (_Component) {
  _inherits(BigPlayButton, _Component);

  function BigPlayButton(props, context) {
    _classCallCheck(this, BigPlayButton);

    var _this = _possibleConstructorReturn(this, (BigPlayButton.__proto__ || Object.getPrototypeOf(BigPlayButton)).call(this, props, context));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(BigPlayButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'handleClick',
    value: function handleClick() {
      var actions = this.props.actions;

      actions.play();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          player = _props.player,
          position = _props.position;

      if (player.hasStarted) {
        return null;
      }
      return _react2.default.createElement(
        'button',
        {
          className: (0, _classnames2.default)('video-react-big-play-button', 'video-react-big-play-button-' + position),
          type: 'button',
          'aria-live': 'polite',
          onClick: this.handleClick
        },
        _react2.default.createElement(
          'span',
          { className: 'video-react-control-text' },
          'Play Video'
        )
      );
    }
  }]);

  return BigPlayButton;
}(_react.Component);

exports.default = BigPlayButton;


BigPlayButton.propTypes = propTypes;
BigPlayButton.defaultProps = defaultProps;