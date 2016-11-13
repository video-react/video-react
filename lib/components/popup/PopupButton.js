'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Popup = require('./Popup');

var _Popup2 = _interopRequireDefault(_Popup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  inline: _react.PropTypes.bool,
  onClick: _react.PropTypes.func.isRequired,
  className: _react.PropTypes.string
};

var defaultProps = {
  inline: true
};

var PopupButton = function (_Component) {
  _inherits(PopupButton, _Component);

  function PopupButton(props, context) {
    _classCallCheck(this, PopupButton);

    var _this = _possibleConstructorReturn(this, (PopupButton.__proto__ || Object.getPrototypeOf(PopupButton)).call(this, props, context));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(PopupButton, [{
    key: 'handleClick',
    value: function handleClick(event) {
      var onClick = this.props.onClick;

      onClick(event);
    }
  }, {
    key: 'render',
    value: function render() {
      var inline = this.props.inline;

      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)(this.props.className, {
            'video-react-menu-button-inline': !!inline,
            'video-react-menu-button-popup': !inline
          }, 'video-react-control video-react-button video-react-menu-button'),
          role: 'button',
          onClick: this.handleClick
        },
        _react2.default.createElement(_Popup2.default, this.props)
      );
    }
  }]);

  return PopupButton;
}(_react.Component);

exports.default = PopupButton;


PopupButton.propTypes = propTypes;
PopupButton.defaultProps = defaultProps;