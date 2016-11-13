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
  item: _react.PropTypes.object
};

var MenuItem = function (_Component) {
  _inherits(MenuItem, _Component);

  function MenuItem(props, context) {
    _classCallCheck(this, MenuItem);

    var _this = _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this, props, context));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(MenuItem, [{
    key: 'handleClick',
    value: function handleClick() {
      var item = this.props.item;

      if (item.onClick) {
        item.onClick(item);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var item = this.props.item;

      return _react2.default.createElement(
        'li',
        {
          className: (0, _classnames2.default)({
            'video-react-menu-item': true,
            'video-react-selected': item.selected
          }),
          onClick: this.handleClick
        },
        item.label,
        _react2.default.createElement('span', { className: 'video-react-control-text' })
      );
    }
  }]);

  return MenuItem;
}(_react.Component);

exports.default = MenuItem;


MenuItem.propTypes = propTypes;