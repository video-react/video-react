"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  poster: _react.PropTypes.string,
  player: _react.PropTypes.object
};

function PosterImage(_ref) {
  var poster = _ref.poster,
      player = _ref.player;

  if (!poster || player.hasStarted) {
    return null;
  }

  return _react2.default.createElement("div", {
    className: "video-react-poster",
    tabIndex: "-1",
    style: {
      backgroundImage: "url(\"" + poster + "\")"
    }
  });
}

PosterImage.propTypes = propTypes;

exports.default = PosterImage;