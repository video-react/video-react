'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ForwardReplayControl = require('./ForwardReplayControl');

var _ForwardReplayControl2 = _interopRequireDefault(_ForwardReplayControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Pass mode into parent function 
exports.default = new _ForwardReplayControl2.default('replay');