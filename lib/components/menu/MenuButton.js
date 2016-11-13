'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = require('./MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  inline: _react.PropTypes.bool,
  items: _react.PropTypes.array,
  className: _react.PropTypes.string,
  onClick: _react.PropTypes.func,
  children: _react.PropTypes.any
};

var MenuButton = function (_Component) {
  _inherits(MenuButton, _Component);

  function MenuButton(props, context) {
    _classCallCheck(this, MenuButton);

    var _this = _possibleConstructorReturn(this, (MenuButton.__proto__ || Object.getPrototypeOf(MenuButton)).call(this, props, context));

    _this.handleClick = _this.handleClick.bind(_this);
    _this.renderMenu = _this.renderMenu.bind(_this);
    return _this;
  }

  _createClass(MenuButton, [{
    key: 'handleClick',
    value: function handleClick(event) {
      if (this.props.onClick) {
        this.props.onClick(event);
      }
    }
  }, {
    key: 'renderMenu',
    value: function renderMenu() {
      var items = this.props.items;

      var i = 0;
      return _react2.default.createElement(
        _Menu2.default,
        null,
        items.reverse().map(function (item) {
          return _react2.default.createElement(_MenuItem2.default, { item: item, key: 'item-' + i++ });
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          inline = _props.inline,
          className = _props.className;


      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)(className, {
            'video-react-menu-button-inline': !!inline,
            'video-react-menu-button-popup': !inline
          }, 'video-react-control video-react-button video-react-menu-button'),
          role: 'presentation',
          onClick: this.handleClick
        },
        this.props.children,
        this.renderMenu()
      );
    }
  }]);

  return MenuButton;
}(_react.Component);

exports.default = MenuButton;


MenuButton.propTypes = propTypes;