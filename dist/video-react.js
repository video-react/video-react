(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define("video-react", ["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["video-react"] = factory(require("react"), require("react-dom"));
	else
		root["video-react"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(38);
	module.exports = __webpack_require__(40);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.formatTime = formatTime;
	/**
	 * @file format-time.js
	 *
	 * Format seconds as a time string, H:MM:SS or M:SS
	 * Supplying a guide (in seconds) will force a number of leading zeros
	 * to cover the length of the guide
	 *
	 * @param  {Number} seconds Number of seconds to be turned into a string
	 * @param  {Number} guide   Number (in seconds) to model the string after
	 * @return {String}         Time formatted as H:MM:SS or M:SS
	 * @private
	 * @function formatTime
	 */
	function formatTime() {
	  var seconds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	  var guide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : seconds;
	
	  var s = Math.floor(seconds % 60);
	  var m = Math.floor(seconds / 60 % 60);
	  var h = Math.floor(seconds / 3600);
	  var gm = Math.floor(guide / 60 % 60);
	  var gh = Math.floor(guide / 3600);
	
	  // handle invalid times
	  if (isNaN(seconds) || seconds === Infinity) {
	    // '-' is false for all relational operators (e.g. <, >=) so this setting
	    // will add the minimum number of fields specified by the guide
	    h = m = s = '-';
	  }
	
	  // Check if we need to show hours
	  h = h > 0 || gh > 0 ? h + ':' : '';
	
	  // If hours are showing, we may need to add a leading zero.
	  // Always show at least one digit of minutes.
	  m = ((h || gm >= 10) && m < 10 ? '0' + m : m) + ':';
	
	  // Check if leading zero is need for seconds
	  s = s < 10 ? '0' + s : s;
	
	  return h + m + s;
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.findElPosition = findElPosition;
	exports.getPointerPosition = getPointerPosition;
	exports.blurNode = blurNode;
	
	var _reactDom = __webpack_require__(6);
	
	/**
	 * Offset Left
	 * getBoundingClientRect technique from
	 * John Resig http://ejohn.org/blog/getboundingclientrect-is-awesome/
	 *
	 * @function findElPosition
	 * @param {Element} el Element from which to get offset
	 * @return {Object}
	 */
	function findElPosition(el) {
	  var box = void 0;
	
	  if (el.getBoundingClientRect && el.parentNode) {
	    box = el.getBoundingClientRect();
	  }
	
	  if (!box) {
	    return {
	      left: 0,
	      top: 0
	    };
	  }
	
	  var docEl = document.documentElement;
	  var body = document.body;
	
	  var clientLeft = docEl.clientLeft || body.clientLeft || 0;
	  var scrollLeft = window.pageXOffset || body.scrollLeft;
	  var left = box.left + scrollLeft - clientLeft;
	
	  var clientTop = docEl.clientTop || body.clientTop || 0;
	  var scrollTop = window.pageYOffset || body.scrollTop;
	  var top = box.top + scrollTop - clientTop;
	
	  // Android sometimes returns slightly off decimal values, so need to round
	  return {
	    left: Math.round(left),
	    top: Math.round(top)
	  };
	}
	
	/**
	 * Get pointer position in element
	 * Returns an object with x and y coordinates.
	 * The base on the coordinates are the bottom left of the element.
	 *
	 * @function getPointerPosition
	 * @param {Element} el Element on which to get the pointer position on
	 * @param {Event} event Event object
	 * @return {Object} This object will have x and y coordinates corresponding to the mouse position
	 */
	function getPointerPosition(el, event) {
	  var position = {};
	  var box = findElPosition(el);
	  var boxW = el.offsetWidth;
	  var boxH = el.offsetHeight;
	
	  var boxY = box.top;
	  var boxX = box.left;
	  var pageY = event.pageY;
	  var pageX = event.pageX;
	
	  if (event.changedTouches) {
	    pageX = event.changedTouches[0].pageX;
	    pageY = event.changedTouches[0].pageY;
	  }
	
	  position.y = Math.max(0, Math.min(1, (boxY - pageY + boxH) / boxH));
	  position.x = Math.max(0, Math.min(1, (pageX - boxX) / boxW));
	
	  return position;
	}
	
	// blur an element
	function blurNode(reactNode) {
	  var domNode = (0, _reactDom.findDOMNode)(reactNode);
	  if (domNode && domNode.blur) {
	    domNode.blur();
	  }
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(6);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _dom = __webpack_require__(4);
	
	var Dom = _interopRequireWildcard(_dom);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  className: _react.PropTypes.string,
	  onMouseDown: _react.PropTypes.func,
	  onMouseMove: _react.PropTypes.func,
	  onMouseUp: _react.PropTypes.func,
	  getPercent: _react.PropTypes.func,
	  vertical: _react.PropTypes.bool,
	  children: _react.PropTypes.node,
	  player: _react.PropTypes.object,
	  label: _react.PropTypes.string,
	  valuenow: _react.PropTypes.string,
	  valuetext: _react.PropTypes.string
	};
	
	var Slider = function (_Component) {
	  _inherits(Slider, _Component);
	
	  function Slider(props, context) {
	    _classCallCheck(this, Slider);
	
	    var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props, context));
	
	    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
	    _this.handleMouseMove = _this.handleMouseMove.bind(_this);
	    _this.handleMouseUp = _this.handleMouseUp.bind(_this);
	    _this.handleFocus = _this.handleFocus.bind(_this);
	    _this.handleBlur = _this.handleBlur.bind(_this);
	    _this.handleClick = _this.handleClick.bind(_this);
	    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
	    _this.stepForward = _this.stepForward.bind(_this);
	    _this.stepBack = _this.stepBack.bind(_this);
	    _this.calculateDistance = _this.calculateDistance.bind(_this);
	    _this.getProgress = _this.getProgress.bind(_this);
	    _this.renderChildren = _this.renderChildren.bind(_this);
	
	    _this.state = {
	      active: false
	    };
	    return _this;
	  }
	
	  _createClass(Slider, [{
	    key: 'getProgress',
	    value: function getProgress() {
	      var getPercent = this.props.getPercent;
	
	      if (!getPercent) {
	        return 0;
	      }
	      var progress = getPercent();
	
	      // Protect against no duration and other division issues
	      if (typeof progress !== 'number' || progress < 0 || progress === Infinity) {
	        progress = 0;
	      }
	      return progress;
	    }
	  }, {
	    key: 'handleMouseDown',
	    value: function handleMouseDown(event) {
	      var onMouseDown = this.props.onMouseDown;
	
	      event.preventDefault();
	      event.stopPropagation();
	
	      document.addEventListener('mousemove', this.handleMouseMove, true);
	      document.addEventListener('mouseup', this.handleMouseUp, true);
	      document.addEventListener('touchmove', this.handleMouseMove, true);
	      document.addEventListener('touchend', this.handleMouseUp, true);
	
	      this.setState({
	        active: true,
	        distance: 0
	      });
	
	      this.handleMouseMove(event);
	
	      if (onMouseDown) {
	        onMouseDown(event);
	      }
	    }
	  }, {
	    key: 'handleMouseMove',
	    value: function handleMouseMove(event) {
	      var onMouseMove = this.props.onMouseMove;
	
	
	      if (onMouseMove) {
	        onMouseMove(event);
	      }
	    }
	  }, {
	    key: 'handleMouseUp',
	    value: function handleMouseUp(event) {
	      var onMouseUp = this.props.onMouseUp;
	
	
	      document.removeEventListener('mousemove', this.handleMouseMove, true);
	      document.removeEventListener('mouseup', this.handleMouseUp, true);
	      document.removeEventListener('touchmove', this.handleMouseMove, true);
	      document.removeEventListener('touchend', this.handleMouseUp, true);
	
	      this.setState({
	        active: false
	      });
	
	      if (onMouseUp) {
	        onMouseUp(event);
	      }
	    }
	  }, {
	    key: 'handleFocus',
	    value: function handleFocus() {
	      document.addEventListener('keydown', this.handleKeyPress, true);
	    }
	  }, {
	    key: 'handleBlur',
	    value: function handleBlur() {
	      document.removeEventListener('keydown', this.handleKeyPress, true);
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(event) {
	      event.preventDefault();
	      event.stopPropagation();
	    }
	  }, {
	    key: 'handleKeyPress',
	    value: function handleKeyPress(event) {
	      if (event.which === 37 || event.which === 40) {
	        // Left and Down Arrows
	        event.preventDefault();
	        event.stopPropagation();
	        this.stepBack();
	      } else if (event.which === 38 || event.which === 39) {
	        // Up and Right Arrows
	        event.preventDefault();
	        event.stopPropagation();
	        this.stepForward();
	      }
	    }
	  }, {
	    key: 'stepForward',
	    value: function stepForward() {}
	  }, {
	    key: 'stepBack',
	    value: function stepBack() {}
	  }, {
	    key: 'calculateDistance',
	    value: function calculateDistance(event) {
	      var node = (0, _reactDom.findDOMNode)(this);
	      var position = Dom.getPointerPosition(node, event);
	      if (this.props.vertical) {
	        return position.y;
	      }
	      return position.x;
	    }
	  }, {
	    key: 'renderChildren',
	    value: function renderChildren() {
	      var progress = this.getProgress();
	      var percentage = (progress * 100).toFixed(2) + '%';
	      return _react2.default.Children.map(this.props.children, function (child) {
	        return _react2.default.cloneElement(child, { progress: progress, percentage: percentage });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          vertical = _props.vertical,
	          label = _props.label,
	          valuenow = _props.valuenow,
	          valuetext = _props.valuetext;
	
	
	      return _react2.default.createElement(
	        'div',
	        {
	          className: (0, _classnames2.default)(this.props.className, {
	            'video-react-slider-vertical': vertical,
	            'video-react-slider-horizontal': !vertical,
	            'video-react-sliding': this.state.active
	          }, 'video-react-slider'),
	          onMouseDown: this.handleMouseDown,
	          onTouchStart: this.handleMouseDown,
	          onFocus: this.handleFocus,
	          onBlur: this.handleBlur,
	          onClick: this.handleClick,
	          tabIndex: 0,
	          'aria-label': label || '',
	          'aria-valuenow': valuenow || '',
	          'aria-valuetext': valuetext || '',
	          'aria-valuemin': 0,
	          'aria-valuemax': 100
	        },
	        this.renderChildren()
	      );
	    }
	  }]);
	
	  return Slider;
	}(_react.Component);
	
	exports.default = Slider;
	
	
	Slider.propTypes = propTypes;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
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

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  player: _react.PropTypes.object
	};
	
	var LoadingSpinner = function (_Component) {
	  _inherits(LoadingSpinner, _Component);
	
	  function LoadingSpinner(props, context) {
	    _classCallCheck(this, LoadingSpinner);
	
	    return _possibleConstructorReturn(this, (LoadingSpinner.__proto__ || Object.getPrototypeOf(LoadingSpinner)).call(this, props, context));
	  }
	
	  _createClass(LoadingSpinner, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {}
	  }, {
	    key: "render",
	    value: function render() {
	      var player = this.props.player;
	
	      if (!player.seeking && !player.waiting) {
	        return null;
	      }
	      return _react2.default.createElement("div", { className: "video-react-loading-spinner" });
	    }
	  }]);
	
	  return LoadingSpinner;
	}(_react.Component);
	
	exports.default = LoadingSpinner;
	
	
	LoadingSpinner.propTypes = propTypes;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
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

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodash = __webpack_require__(41);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  actions: _react.PropTypes.object,
	  player: _react.PropTypes.object,
	  children: _react.PropTypes.any,
	  starttime: _react.PropTypes.number,
	  loop: _react.PropTypes.bool,
	  autoplay: _react.PropTypes.bool,
	  src: _react.PropTypes.string,
	  poster: _react.PropTypes.string,
	  preload: _react2.default.PropTypes.oneOf(['auto', 'metadata', 'none'])
	};
	
	var defaultProps = {
	  preload: 'auto'
	};
	
	var Video = function (_Component) {
	  _inherits(Video, _Component);
	
	  function Video(props) {
	    _classCallCheck(this, Video);
	
	    var _this = _possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).call(this, props));
	
	    _this.play = _this.play.bind(_this);
	    _this.pause = _this.pause.bind(_this);
	    _this.seek = _this.seek.bind(_this);
	    _this.forward = _this.forward.bind(_this);
	    _this.replay = _this.replay.bind(_this);
	    _this.toggleFullscreen = _this.toggleFullscreen.bind(_this);
	    _this.videoWidth = _this.videoWidth.bind(_this);
	    _this.videoHeight = _this.videoHeight.bind(_this);
	    _this.handleLoadStart = _this.handleLoadStart.bind(_this);
	    _this.handleCanPlay = _this.handleCanPlay.bind(_this);
	    _this.handleCanPlayThrough = _this.handleCanPlayThrough.bind(_this);
	    _this.handlePlay = _this.handlePlay.bind(_this);
	    _this.handlePlaying = _this.handlePlaying.bind(_this);
	    _this.handlePause = _this.handlePause.bind(_this);
	    _this.handleEnded = _this.handleEnded.bind(_this);
	    _this.handleWaiting = _this.handleWaiting.bind(_this);
	    _this.handleSeeking = _this.handleSeeking.bind(_this);
	    _this.handleSeeked = _this.handleSeeked.bind(_this);
	    _this.handleFullscreenChange = _this.handleFullscreenChange.bind(_this);
	    _this.handleError = _this.handleError.bind(_this);
	    _this.handleSuspend = _this.handleSuspend.bind(_this);
	    _this.handleAbort = _this.handleAbort.bind(_this);
	    _this.handleEmptied = _this.handleEmptied.bind(_this);
	    _this.handleStalled = _this.handleStalled.bind(_this);
	    _this.handleLoadedMetaData = _this.handleLoadedMetaData.bind(_this);
	    _this.handleLoadedData = _this.handleLoadedData.bind(_this);
	    _this.handleTimeUpdate = (0, _lodash2.default)(_this.handleTimeUpdate.bind(_this), 250);
	    _this.handleRateChange = _this.handleRateChange.bind(_this);
	    _this.handleVolumeChange = _this.handleVolumeChange.bind(_this);
	    _this.handleDurationChange = _this.handleDurationChange.bind(_this);
	    _this.handleProgress = (0, _lodash2.default)(_this.handleProgress.bind(_this), 1000);
	    _this.handleKeypress = _this.handleKeypress.bind(_this);
	    return _this;
	  }
	
	  // set playback rate
	  // speed of video
	
	
	  _createClass(Video, [{
	    key: 'play',
	
	
	    // play the video
	    value: function play() {
	      this.video.play();
	    }
	
	    // pause the video
	
	  }, {
	    key: 'pause',
	    value: function pause() {
	      this.video.pause();
	    }
	
	    // toggle play
	
	  }, {
	    key: 'togglePlay',
	    value: function togglePlay() {
	      if (this.video.paused) {
	        this.play();
	      } else {
	        this.pause();
	      }
	    }
	
	    // video width
	
	  }, {
	    key: 'videoWidth',
	    value: function videoWidth() {
	      return this.video.videoWidth;
	    }
	
	    // video height
	
	  }, {
	    key: 'videoHeight',
	    value: function videoHeight() {
	      return this.video.videoHeight;
	    }
	
	    // seek video by time
	
	  }, {
	    key: 'seek',
	    value: function seek(time) {
	      try {
	        this.video.currentTime = time;
	      } catch (e) {
	        // console.log(e, 'Video is not ready.')
	      }
	    }
	
	    // jump forward x seconds
	
	  }, {
	    key: 'forward',
	    value: function forward(seconds) {
	      this.seek(this.video.currentTime + seconds);
	    }
	
	    // jump back x seconds
	
	  }, {
	    key: 'replay',
	    value: function replay(seconds) {
	      this.forward(-seconds);
	    }
	
	    // enter or exist full screen
	
	  }, {
	    key: 'toggleFullscreen',
	    value: function toggleFullscreen() {
	      var _props = this.props,
	          player = _props.player,
	          actions = _props.actions;
	
	      actions.toggleFullscreen(player);
	    }
	
	    // Fired when the user agent
	    // begins looking for media data
	
	  }, {
	    key: 'handleLoadStart',
	    value: function handleLoadStart() {
	      var _props2 = this.props,
	          player = _props2.player,
	          actions = _props2.actions;
	
	      if (player.paused && player.hasStarted) {
	        actions.handleLoadStart(this.video.buffered);
	      }
	    }
	
	    // A handler for events that
	    // signal that waiting has ended
	
	  }, {
	    key: 'handleCanPlay',
	    value: function handleCanPlay() {
	      // console.log('handleCanPlay')
	      this.props.actions.handleCanPlay({
	        videoWidth: this.videoWidth(),
	        videoHeight: this.videoHeight(),
	        duration: this.video.duration
	      });
	    }
	
	    // A handler for events that
	    // signal that waiting has ended
	
	  }, {
	    key: 'handleCanPlayThrough',
	    value: function handleCanPlayThrough() {
	      // console.log('handleCanPlayThrough')
	      var _props3 = this.props,
	          player = _props3.player,
	          actions = _props3.actions;
	
	      if (player.waiting) {
	        actions.handleCanPlayThrough();
	      }
	    }
	
	    // A handler for events that
	    // signal that waiting has ended
	
	  }, {
	    key: 'handlePlaying',
	    value: function handlePlaying() {
	      var _props4 = this.props,
	          player = _props4.player,
	          actions = _props4.actions;
	
	      if (player.waiting) {
	        actions.handlePlaying();
	      }
	    }
	
	    // Fired whenever the media has been started
	
	  }, {
	    key: 'handlePlay',
	    value: function handlePlay() {
	      var _props5 = this.props,
	          player = _props5.player,
	          actions = _props5.actions;
	
	      if (player.paused) {
	        actions.handlePlay({
	          duration: this.video.duration
	        });
	      }
	    }
	
	    // Fired whenever the media has been paused
	
	  }, {
	    key: 'handlePause',
	    value: function handlePause() {
	      var _props6 = this.props,
	          player = _props6.player,
	          actions = _props6.actions;
	
	      if (!player.paused) {
	        actions.handlePause();
	      }
	    }
	
	    // Fired the first time a video is played
	
	  }, {
	    key: 'handleFirstPlay',
	    value: function handleFirstPlay() {
	      var _props7 = this.props,
	          player = _props7.player,
	          starttime = _props7.starttime,
	          actions = _props7.actions;
	
	      // If the first starttime attribute is specified
	      // then we will start at the given offset in seconds
	
	      if (starttime) {
	        this.seek(starttime);
	      }
	
	      if (!player.hasStarted) {
	        actions.handleFirstPlay();
	      }
	    }
	
	    // Fired when the duration of
	    // the media resource is first known or changed
	
	  }, {
	    key: 'handleDurationChange',
	    value: function handleDurationChange() {
	      var _props8 = this.props,
	          player = _props8.player,
	          actions = _props8.actions;
	
	      if (player.duration !== this.video.duration) {
	        actions.handleDurationChange(this.video.duration);
	      }
	    }
	
	    // Fired while the user agent
	    // is downloading media data
	
	  }, {
	    key: 'handleProgress',
	    value: function handleProgress() {
	      var actions = this.props.actions;
	
	      actions.handleProgressChange(this.video.buffered);
	    }
	
	    // Fired when the end of the media resource
	    // is reached (currentTime == duration)
	
	  }, {
	    key: 'handleEnded',
	    value: function handleEnded() {
	      var _props9 = this.props,
	          loop = _props9.loop,
	          player = _props9.player,
	          actions = _props9.actions;
	
	      if (loop) {
	        this.seek(0);
	        this.play();
	      } else if (!player.paused) {
	        this.pause();
	      }
	      if (!player.ended) {
	        actions.handleEnd();
	      }
	    }
	
	    // Fired whenever the media begins waiting
	
	  }, {
	    key: 'handleWaiting',
	    value: function handleWaiting() {
	      var _props10 = this.props,
	          player = _props10.player,
	          actions = _props10.actions;
	
	      if (!player.waiting) {
	        actions.handleWaiting();
	      }
	    }
	
	    // Fired whenever the player
	    // is jumping to a new time
	
	  }, {
	    key: 'handleSeeking',
	    value: function handleSeeking() {
	      var _props11 = this.props,
	          player = _props11.player,
	          actions = _props11.actions;
	
	      if (!player.seeking) {
	        actions.handleSeeking();
	      }
	    }
	
	    // Fired when the player has
	    // finished jumping to a new time
	
	  }, {
	    key: 'handleSeeked',
	    value: function handleSeeked() {
	      var _props12 = this.props,
	          player = _props12.player,
	          actions = _props12.actions;
	
	      if (player.seeking) {
	        actions.handleSeeked();
	      }
	    }
	
	    // Handle Fullscreen Change
	
	  }, {
	    key: 'handleFullscreenChange',
	    value: function handleFullscreenChange() {}
	
	    // Fires when the browser is
	    // intentionally not getting media data
	
	  }, {
	    key: 'handleSuspend',
	    value: function handleSuspend() {}
	    // console.log('handleSuspend', this.video.duration)
	
	
	    // Fires when the loading of an audio/video is aborted
	
	  }, {
	    key: 'handleAbort',
	    value: function handleAbort() {}
	    // console.log('handleAbort', this.video.duration)
	
	
	    // Fires when the current playlist is empty
	
	  }, {
	    key: 'handleEmptied',
	    value: function handleEmptied() {}
	
	    // Fires when the browser is trying to
	    // get media data, but data is not available
	
	  }, {
	    key: 'handleStalled',
	    value: function handleStalled() {}
	    // console.log('handleStalled', this.video.duration)
	
	
	    // Fires when the browser has loaded
	    // meta data for the audio/video
	
	  }, {
	    key: 'handleLoadedMetaData',
	    value: function handleLoadedMetaData() {}
	    // console.log('handleLoadedMetaData')
	
	
	    // Fires when the browser has loaded
	    // the current frame of the audio/video
	
	  }, {
	    key: 'handleLoadedData',
	    value: function handleLoadedData() {}
	    // console.log('handleLoadedData')
	
	
	    // Fires when the current
	    // playback position has changed
	
	  }, {
	    key: 'handleTimeUpdate',
	    value: function handleTimeUpdate() {
	      var _props13 = this.props,
	          player = _props13.player,
	          actions = _props13.actions;
	
	      if (player.currentTime !== this.video.currentTime) {
	        actions.handleTimeUpdate(this.video.currentTime);
	      }
	    }
	
	    /**
	     * Fires when the playing speed of the audio/video is changed
	     */
	
	  }, {
	    key: 'handleRateChange',
	    value: function handleRateChange() {
	      var _props14 = this.props,
	          player = _props14.player,
	          actions = _props14.actions;
	
	      if (player.playbackRate !== this.video.playbackRate) {
	        actions.handleRateChange(this.video.playbackRate);
	      }
	    }
	
	    // Fires when the volume has been changed
	
	  }, {
	    key: 'handleVolumeChange',
	    value: function handleVolumeChange() {
	      var _props15 = this.props,
	          player = _props15.player,
	          actions = _props15.actions;
	
	      if (player.volume !== this.video.volume) {
	        actions.handleVolumeChange(this.video.volume);
	      }
	    }
	
	    // Fires when an error occurred
	    // during the loading of an audio/video
	
	  }, {
	    key: 'handleError',
	    value: function handleError() /* event */{
	      // console.log(event, 'Video Error')
	    }
	  }, {
	    key: 'handleKeypress',
	    value: function handleKeypress() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props16 = this.props,
	          player = _props16.player,
	          loop = _props16.loop,
	          poster = _props16.poster,
	          preload = _props16.preload,
	          src = _props16.src;
	
	      // only keep <source /> elements
	
	      var children = _react2.default.Children.toArray(this.props.children).filter(function (c) {
	        return c.type === 'source';
	      });
	
	      return _react2.default.createElement(
	        'video',
	        {
	          className: 'video-react-video',
	          ref: function ref(c) {
	            _this2.video = c;
	          },
	          muted: player.muted,
	          preload: preload,
	          loop: loop,
	          poster: poster,
	          src: src,
	          onLoadStart: this.handleLoadStart,
	          onWaiting: this.handleWaiting,
	          onCanPlay: this.handleCanPlay,
	          onCanPlayThrough: this.handleCanPlayThrough,
	          onPlaying: this.handlePlaying,
	          onEnded: this.handleEnded,
	          onSeeking: this.handleSeeking,
	          onSeeked: this.handleSeeked,
	          onPlay: this.handlePlay,
	          onPause: this.handlePause,
	          onProgress: this.handleProgress,
	          onDurationChange: this.handleDurationChange,
	          onError: this.handleError,
	          onSuspend: this.handleSuspend,
	          onAbort: this.handleAbort,
	          onEmptied: this.handleEmptied,
	          onStalled: this.handleStalled,
	          onLoadedMetadata: this.handleLoadedMetaData,
	          onLoadedData: this.handleLoadedData,
	          onTimeUpdate: this.handleTimeUpdate,
	          onRateChange: this.handleRateChange,
	          onVolumeChange: this.handleVolumeChange
	        },
	        children
	      );
	    }
	  }, {
	    key: 'playbackRate',
	    set: function set(rate) {
	      this.video.playbackRate = rate;
	    }
	
	    // get playback rate
	    ,
	    get: function get() {
	      return this.video.playbackRate;
	    }
	  }, {
	    key: 'muted',
	    set: function set(val) {
	      this.video.muted = val;
	    }
	  }, {
	    key: 'volume',
	    set: function set(val) {
	      this.video.volume = val;
	    }
	  }]);
	
	  return Video;
	}(_react.Component);
	
	exports.default = Video;
	
	
	Video.propTypes = propTypes;
	Video.defaultProps = defaultProps;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ProgressControl = __webpack_require__(20);
	
	var _ProgressControl2 = _interopRequireDefault(_ProgressControl);
	
	var _PlayToggle = __webpack_require__(18);
	
	var _PlayToggle2 = _interopRequireDefault(_PlayToggle);
	
	var _ForwardControl = __webpack_require__(12);
	
	var _ForwardControl2 = _interopRequireDefault(_ForwardControl);
	
	var _ReplayControl = __webpack_require__(21);
	
	var _ReplayControl2 = _interopRequireDefault(_ReplayControl);
	
	var _FullscreenToggle = __webpack_require__(14);
	
	var _FullscreenToggle2 = _interopRequireDefault(_FullscreenToggle);
	
	var _RemainingTimeDisplay = __webpack_require__(26);
	
	var _RemainingTimeDisplay2 = _interopRequireDefault(_RemainingTimeDisplay);
	
	var _CurrentTimeDisplay = __webpack_require__(24);
	
	var _CurrentTimeDisplay2 = _interopRequireDefault(_CurrentTimeDisplay);
	
	var _DurationDisplay = __webpack_require__(25);
	
	var _DurationDisplay2 = _interopRequireDefault(_DurationDisplay);
	
	var _TimeDivider = __webpack_require__(27);
	
	var _TimeDivider2 = _interopRequireDefault(_TimeDivider);
	
	var _VolumeMenuButton = __webpack_require__(23);
	
	var _VolumeMenuButton2 = _interopRequireDefault(_VolumeMenuButton);
	
	var _PlaybackRate = __webpack_require__(19);
	
	var _PlaybackRate2 = _interopRequireDefault(_PlaybackRate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  actions: _react.PropTypes.object,
	  player: _react.PropTypes.object,
	  children: _react.PropTypes.any
	};
	
	var ControlBar = function (_Component) {
	  _inherits(ControlBar, _Component);
	
	  function ControlBar(props) {
	    _classCallCheck(this, ControlBar);
	
	    var _this = _possibleConstructorReturn(this, (ControlBar.__proto__ || Object.getPrototypeOf(ControlBar)).call(this, props));
	
	    _this.getDefaultChildren = _this.getDefaultChildren.bind(_this);
	    _this.getFullChildren = _this.getFullChildren.bind(_this);
	    return _this;
	  }
	
	  _createClass(ControlBar, [{
	    key: 'getDefaultChildren',
	    value: function getDefaultChildren() {
	      return [_react2.default.createElement(_PlayToggle2.default, _extends({}, this.props, {
	        key: 'play-toggle',
	        order: 1
	      })), _react2.default.createElement(_ReplayControl2.default, _extends({}, this.props, {
	        key: 'replay-control',
	        order: 2
	      })), _react2.default.createElement(_ForwardControl2.default, _extends({}, this.props, {
	        key: 'forward-control',
	        order: 3
	      })), _react2.default.createElement(_VolumeMenuButton2.default, _extends({}, this.props, {
	        key: 'volume-menu-button',
	        order: 4
	      })), _react2.default.createElement(_DurationDisplay2.default, _extends({}, this.props, {
	        key: 'duration-display',
	        order: 5
	      })), _react2.default.createElement(_ProgressControl2.default, _extends({}, this.props, {
	        key: 'progress-control',
	        order: 6
	      })), _react2.default.createElement(_RemainingTimeDisplay2.default, _extends({}, this.props, {
	        key: 'remaining-time-display',
	        order: 7
	      })), _react2.default.createElement(_FullscreenToggle2.default, _extends({}, this.props, {
	        key: 'fullscreen-toggle',
	        order: 8
	      }))];
	    }
	  }, {
	    key: 'getFullChildren',
	    value: function getFullChildren() {
	      return [_react2.default.createElement(_PlayToggle2.default, _extends({}, this.props, {
	        key: 'play-toggle',
	        order: 1
	      })), _react2.default.createElement(_ReplayControl2.default, _extends({}, this.props, {
	        key: 'replay-control',
	        order: 2
	      })), _react2.default.createElement(_ForwardControl2.default, _extends({}, this.props, {
	        key: 'forward-control',
	        order: 3
	      })), _react2.default.createElement(_VolumeMenuButton2.default, _extends({}, this.props, {
	        key: 'volume-menu-button',
	        order: 4
	      })), _react2.default.createElement(_CurrentTimeDisplay2.default, _extends({}, this.props, {
	        key: 'current-time-display',
	        order: 5
	      })), _react2.default.createElement(_TimeDivider2.default, _extends({}, this.props, {
	        key: 'time-divider',
	        order: 6
	      })), _react2.default.createElement(_DurationDisplay2.default, _extends({}, this.props, {
	        key: 'duration-display',
	        order: 7
	      })), _react2.default.createElement(_ProgressControl2.default, _extends({}, this.props, {
	        key: 'progress-control',
	        order: 8
	      })), _react2.default.createElement(_RemainingTimeDisplay2.default, _extends({}, this.props, {
	        key: 'remaining-time-display',
	        order: 9
	      })), _react2.default.createElement(_PlaybackRate2.default, _extends({}, this.props, {
	        rates: [1, 1.25, 1.5, 2],
	        key: 'playback-rate',
	        order: 10
	      })), _react2.default.createElement(_FullscreenToggle2.default, _extends({}, this.props, {
	        key: 'fullscreen-toggle',
	        order: 11
	      }))];
	    }
	  }, {
	    key: 'getChildren',
	    value: function getChildren() {
	      var _this2 = this;
	
	      var children = _react2.default.Children.toArray(this.props.children);
	      var defaultChildren = this.getDefaultChildren();
	      children = children.concat(defaultChildren.filter(function (c) {
	        return !children.find(function (component) {
	          return component.type === c.type;
	        });
	      }));
	      return children.sort(function (a, b) {
	        return (a.props.order || 1) - (b.props.order - 1);
	      }).map(function (element) {
	        var e = _react2.default.cloneElement(element, _this2.props);
	        return e;
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var children = this.getChildren();
	      return _react2.default.createElement(
	        'div',
	        { className: 'video-react-control-bar' },
	        children
	      );
	    }
	  }]);
	
	  return ControlBar;
	}(_react.Component);
	
	exports.default = ControlBar;
	
	
	ControlBar.propTypes = propTypes;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ForwardReplayControl = __webpack_require__(13);
	
	var _ForwardReplayControl2 = _interopRequireDefault(_ForwardReplayControl);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Pass mode into parent function 
	exports.default = new _ForwardReplayControl2.default('forward');

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _dom = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  actions: _react.PropTypes.object,
	  player: _react.PropTypes.object,
	  seconds: _react2.default.PropTypes.oneOf([5, 10, 30])
	};
	
	var defaultProps = {
	  seconds: 10
	};
	
	exports.default = function (mode) {
	  var ForwardReplayControl = function (_Component) {
	    _inherits(ForwardReplayControl, _Component);
	
	    function ForwardReplayControl(props, context) {
	      _classCallCheck(this, ForwardReplayControl);
	
	      var _this = _possibleConstructorReturn(this, (ForwardReplayControl.__proto__ || Object.getPrototypeOf(ForwardReplayControl)).call(this, props, context));
	
	      _this.handleClick = _this.handleClick.bind(_this);
	      return _this;
	    }
	
	    _createClass(ForwardReplayControl, [{
	      key: 'handleClick',
	      value: function handleClick() {
	        var _props = this.props,
	            actions = _props.actions,
	            seconds = _props.seconds;
	        // Depends mode to implement different actions
	
	        if (mode === 'forward') {
	          actions.forward(seconds);
	        } else {
	          actions.replay(seconds);
	        }
	        (0, _dom.blurNode)(this.button);
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        var _this2 = this,
	            _classNames;
	
	        var seconds = this.props.seconds;
	
	        return _react2.default.createElement(
	          'button',
	          {
	            ref: function ref(c) {
	              _this2.button = c;
	            },
	            className: (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, 'video-react-icon-' + mode + '-' + seconds, true), _defineProperty(_classNames, 'video-react-' + mode + '-control', true), _classNames), 'video-react-control video-react-button video-react-icon'),
	            onClick: this.handleClick
	          },
	          _react2.default.createElement(
	            'span',
	            { className: 'video-react-control-text' },
	            mode + ' ' + seconds + ' seconds'
	          )
	        );
	      }
	    }]);
	
	    return ForwardReplayControl;
	  }(_react.Component);
	
	  ForwardReplayControl.propTypes = propTypes;
	  ForwardReplayControl.defaultProps = defaultProps;
	  return ForwardReplayControl;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _dom = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  actions: _react.PropTypes.object,
	  player: _react.PropTypes.object
	};
	
	var FullscreenToggle = function (_Component) {
	  _inherits(FullscreenToggle, _Component);
	
	  function FullscreenToggle(props, context) {
	    _classCallCheck(this, FullscreenToggle);
	
	    var _this = _possibleConstructorReturn(this, (FullscreenToggle.__proto__ || Object.getPrototypeOf(FullscreenToggle)).call(this, props, context));
	
	    _this.handleClick = _this.handleClick.bind(_this);
	    _this.requestFullscreen = _this.requestFullscreen.bind(_this);
	    _this.handleFullScreenChange = _this.handleFullScreenChange.bind(_this);
	    return _this;
	  }
	
	  _createClass(FullscreenToggle, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      document.addEventListener('fullscreenchange', this.handleFullScreenChange);
	      document.addEventListener('webkitfullscreenchange', this.handleFullScreenChange);
	      document.addEventListener('mozfullscreenchange', this.handleFullScreenChange);
	      document.addEventListener('MSFullscreenChange', this.handleFullScreenChange);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      document.removeEventListener('fullscreenchange', this.handleFullScreenChange);
	      document.removeEventListener('webkitfullscreenchange', this.handleFullScreenChange);
	      document.removeEventListener('mozfullscreenchange', this.handleFullScreenChange);
	      document.removeEventListener('MSFullscreenChange', this.handleFullScreenChange);
	    }
	  }, {
	    key: 'handleFullScreenChange',
	    value: function handleFullScreenChange() {
	      var actions = this.props.actions;
	
	      actions.handleFullscreenChange(this.isFullscreen());
	    }
	  }, {
	    key: 'isFullscreen',
	    value: function isFullscreen() {
	      return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
	    }
	  }, {
	    key: 'isFullscreenEnabled',
	    value: function isFullscreenEnabled() {
	      return document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;
	    }
	
	    // go full-screen
	
	  }, {
	    key: 'requestFullscreen',
	    value: function requestFullscreen() {
	      var playerElement = this.props.actions.playerElement;
	
	
	      if (playerElement.requestFullscreen) {
	        playerElement.requestFullscreen();
	      } else if (playerElement.webkitRequestFullscreen) {
	        playerElement.webkitRequestFullscreen();
	      } else if (playerElement.mozRequestFullScreen) {
	        playerElement.mozRequestFullScreen();
	      } else if (playerElement.msRequestFullscreen) {
	        playerElement.msRequestFullscreen();
	      }
	    }
	  }, {
	    key: 'exitFullscreen',
	    value: function exitFullscreen() {
	      if (document.exitFullscreen) {
	        document.exitFullscreen();
	      } else if (document.webkitExitFullscreen) {
	        document.webkitExitFullscreen();
	      } else if (document.mozCancelFullScreen) {
	        document.mozCancelFullScreen();
	      } else if (document.msExitFullscreen) {
	        document.msExitFullscreen();
	      }
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick() {
	      var _props = this.props,
	          player = _props.player,
	          actions = _props.actions;
	
	      if (this.isFullscreenEnabled()) {
	        if (this.isFullscreen()) {
	          this.exitFullscreen();
	        } else {
	          this.requestFullscreen();
	        }
	      } else {
	        actions.handleFullscreenChange(!player.isFullscreen);
	      }
	
	      (0, _dom.blurNode)(this.button);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var player = this.props.player;
	
	      return _react2.default.createElement(
	        'button',
	        {
	          className: (0, _classnames2.default)({
	            'video-react-icon-fullscreen-exit': player.isFullscreen,
	            'video-react-icon-fullscreen': !player.isFullscreen
	          }, 'video-react-fullscreen-control video-react-control video-react-button video-react-icon'),
	          ref: function ref(c) {
	            _this2.button = c;
	          },
	          type: 'button',
	          'aria-live': 'polite',
	          onClick: this.handleClick
	        },
	        _react2.default.createElement(
	          'span',
	          { className: 'video-react-control-text' },
	          'Non-Fullscreen'
	        )
	      );
	    }
	  }]);
	
	  return FullscreenToggle;
	}(_react.Component);
	
	exports.default = FullscreenToggle;
	
	
	FullscreenToggle.propTypes = propTypes;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = LoadProgressBar;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var propTypes = {
	  duration: _react.PropTypes.number,
	  buffered: _react.PropTypes.object
	};
	
	// Shows load progress
	function LoadProgressBar(_ref) {
	  var buffered = _ref.buffered,
	      duration = _ref.duration;
	
	  if (!buffered || !buffered.length) {
	    return null;
	  }
	  var bufferedEnd = buffered.end(buffered.length - 1);
	  var style = {};
	
	  if (bufferedEnd > duration) {
	    bufferedEnd = duration;
	  }
	
	  // get the percent width of a time compared to the total end
	  function percentify(time, end) {
	    var percent = time / end || 0; // no NaN
	    return (percent >= 1 ? 1 : percent) * 100 + "%";
	  }
	
	  // the width of the progress bar
	  style.width = percentify(bufferedEnd, duration);
	
	  var parts = [];
	
	  // add child elements to represent the individual buffered time ranges
	  for (var i = 0; i < buffered.length; i++) {
	    var start = buffered.start(i);
	    var end = buffered.end(i);
	    // set the percent based on the width of the progress bar (bufferedEnd)
	    var part = _react2.default.createElement("div", {
	      style: {
	        left: percentify(start, bufferedEnd),
	        width: percentify(end - start, bufferedEnd)
	      },
	      key: "part-" + i
	    });
	    parts.push(part);
	  }
	
	  if (parts.length === 0) {
	    parts = null;
	  }
	
	  return _react2.default.createElement(
	    "div",
	    {
	      style: style,
	      className: "video-react-load-progress"
	    },
	    _react2.default.createElement(
	      "span",
	      { className: "video-react-control-text" },
	      _react2.default.createElement(
	        "span",
	        null,
	        "Loaded"
	      ),
	      ": 0%"
	    ),
	    parts
	  );
	}
	
	LoadProgressBar.propTypes = propTypes;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function MouseTimeDisplay(_ref) {
	  var duration = _ref.duration,
	      mouseTime = _ref.mouseTime;
	
	  if (!mouseTime.time) {
	    return null;
	  }
	
	  var time = (0, _utils.formatTime)(mouseTime.time, duration);
	
	  return _react2.default.createElement('div', {
	    className: 'video-react-mouse-display',
	    style: {
	      left: mouseTime.position + 'px'
	    },
	    'data-current-time': time
	  });
	}
	
	MouseTimeDisplay.propTypes = {
	  duration: _react.PropTypes.number,
	  mouseTime: _react.PropTypes.object
	};
	
	exports.default = MouseTimeDisplay;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = PlayProgressBar;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var propTypes = {
	  currentTime: _react.PropTypes.number,
	  duration: _react.PropTypes.number,
	  percentage: _react.PropTypes.string
	};
	
	// Shows play progress
	function PlayProgressBar(_ref) {
	  var currentTime = _ref.currentTime,
	      duration = _ref.duration,
	      percentage = _ref.percentage;
	
	  return _react2.default.createElement(
	    'div',
	    {
	      'data-current-time': (0, _utils.formatTime)(currentTime, duration),
	      className: 'video-react-play-progress video-react-slider-bar',
	      style: {
	        width: percentage
	      }
	    },
	    _react2.default.createElement(
	      'span',
	      { className: 'video-react-control-text' },
	      _react2.default.createElement(
	        'span',
	        null,
	        'Progress'
	      ),
	      ': ',
	      percentage
	    )
	  );
	}
	
	PlayProgressBar.propTypes = propTypes;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _dom = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  actions: _react.PropTypes.object,
	  player: _react.PropTypes.object
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

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _MenuButton = __webpack_require__(32);
	
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

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(6);
	
	var _dom = __webpack_require__(4);
	
	var Dom = _interopRequireWildcard(_dom);
	
	var _SeekBar = __webpack_require__(22);
	
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

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ForwardReplayControl = __webpack_require__(13);
	
	var _ForwardReplayControl2 = _interopRequireDefault(_ForwardReplayControl);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Pass mode into parent function 
	exports.default = new _ForwardReplayControl2.default('replay');

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Slider = __webpack_require__(5);
	
	var _Slider2 = _interopRequireDefault(_Slider);
	
	var _PlayProgressBar = __webpack_require__(17);
	
	var _PlayProgressBar2 = _interopRequireDefault(_PlayProgressBar);
	
	var _LoadProgressBar = __webpack_require__(15);
	
	var _LoadProgressBar2 = _interopRequireDefault(_LoadProgressBar);
	
	var _MouseTimeDisplay = __webpack_require__(16);
	
	var _MouseTimeDisplay2 = _interopRequireDefault(_MouseTimeDisplay);
	
	var _utils = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  player: _react.PropTypes.object,
	  mouseTime: _react.PropTypes.object,
	  actions: _react.PropTypes.object
	};
	
	var SeekBar = function (_Component) {
	  _inherits(SeekBar, _Component);
	
	  function SeekBar(props, context) {
	    _classCallCheck(this, SeekBar);
	
	    var _this = _possibleConstructorReturn(this, (SeekBar.__proto__ || Object.getPrototypeOf(SeekBar)).call(this, props, context));
	
	    _this.getPercent = _this.getPercent.bind(_this);
	    _this.getNewTime = _this.getNewTime.bind(_this);
	
	    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
	    _this.handleMouseMove = _this.handleMouseMove.bind(_this);
	    _this.handleMouseUp = _this.handleMouseUp.bind(_this);
	    return _this;
	  }
	
	  _createClass(SeekBar, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {}
	
	    /**
	     * Get percentage of video played
	     *
	     * @return {Number} Percentage played
	     * @method getPercent
	     */
	
	  }, {
	    key: 'getPercent',
	    value: function getPercent() {
	      var _props$player = this.props.player,
	          currentTime = _props$player.currentTime,
	          seekingTime = _props$player.seekingTime,
	          duration = _props$player.duration;
	
	      var time = seekingTime || currentTime;
	      var percent = time / duration;
	      return percent >= 1 ? 1 : percent;
	    }
	  }, {
	    key: 'getNewTime',
	    value: function getNewTime(event) {
	      var duration = this.props.player.duration;
	
	      var distance = this.slider.calculateDistance(event);
	      var newTime = distance * duration;
	
	      // Don't let video end while scrubbing.
	      return newTime === duration ? newTime - 0.1 : newTime;
	    }
	  }, {
	    key: 'handleMouseDown',
	    value: function handleMouseDown() {
	      var _props = this.props,
	          actions = _props.actions,
	          player = _props.player;
	
	      this.videoWasPlaying = !player.paused;
	      actions.pause();
	    }
	  }, {
	    key: 'handleMouseUp',
	    value: function handleMouseUp(event) {
	      var actions = this.props.actions;
	
	      var newTime = this.getNewTime(event);
	      // Set new time (tell video to seek to new time)
	      actions.seek(newTime);
	      if (this.videoWasPlaying) {
	        actions.play();
	      }
	      actions.handleEndSeeking(newTime);
	    }
	  }, {
	    key: 'handleMouseMove',
	    value: function handleMouseMove(event) {
	      var actions = this.props.actions;
	
	      var newTime = this.getNewTime(event);
	      actions.handleSeekingTime(newTime);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props2 = this.props,
	          _props2$player = _props2.player,
	          currentTime = _props2$player.currentTime,
	          seekingTime = _props2$player.seekingTime,
	          duration = _props2$player.duration,
	          buffered = _props2$player.buffered,
	          mouseTime = _props2.mouseTime;
	
	      var time = seekingTime || currentTime;
	
	      return _react2.default.createElement(
	        _Slider2.default,
	        {
	          ref: function ref(input) {
	            _this2.slider = input;
	          },
	          label: 'video progress bar',
	          className: 'video-react-progress-holder',
	          valuenow: (this.getPercent() * 100).toFixed(2),
	          valuetext: (0, _utils.formatTime)(time, duration),
	          onMouseDown: this.handleMouseDown,
	          onMouseMove: this.handleMouseMove,
	          onMouseUp: this.handleMouseUp,
	          getPercent: this.getPercent
	        },
	        _react2.default.createElement(_LoadProgressBar2.default, {
	          buffered: buffered,
	          currentTime: time,
	          duration: duration
	        }),
	        _react2.default.createElement(_MouseTimeDisplay2.default, {
	          duration: duration,
	          mouseTime: mouseTime
	        }),
	        _react2.default.createElement(_PlayProgressBar2.default, {
	          currentTime: time,
	          duration: duration
	        })
	      );
	    }
	  }]);
	
	  return SeekBar;
	}(_react.Component);
	
	exports.default = SeekBar;
	
	
	SeekBar.propTypes = propTypes;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _PopupButton = __webpack_require__(35);
	
	var _PopupButton2 = _interopRequireDefault(_PopupButton);
	
	var _VolumeBar = __webpack_require__(36);
	
	var _VolumeBar2 = _interopRequireDefault(_VolumeBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  player: _react.PropTypes.object,
	  actions: _react.PropTypes.object,
	  inline: _react.PropTypes.bool,
	  vertical: _react.PropTypes.bool
	};
	
	var defaultProps = {
	  inline: true,
	  vertical: false
	};
	
	var VolumeMenuButton = function (_Component) {
	  _inherits(VolumeMenuButton, _Component);
	
	  function VolumeMenuButton(props, context) {
	    _classCallCheck(this, VolumeMenuButton);
	
	    var _this = _possibleConstructorReturn(this, (VolumeMenuButton.__proto__ || Object.getPrototypeOf(VolumeMenuButton)).call(this, props, context));
	
	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }
	
	  _createClass(VolumeMenuButton, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      // const { player, actions } = this.props;
	      // actions.toggleMuted(!player.muted);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          vertical = _props.vertical,
	          player = _props.player;
	
	      var level = this.volumeLevel;
	      return _react2.default.createElement(
	        _PopupButton2.default,
	        {
	          className: (0, _classnames2.default)({
	            'video-react-volume-menu-button-vertical': vertical,
	            'video-react-volume-menu-button-horizontal': !vertical,
	            'video-react-vol-muted': player.muted,
	            'video-react-vol-0': level === 0 && !player.muted,
	            'video-react-vol-1': level === 1,
	            'video-react-vol-2': level === 2,
	            'video-react-vol-3': level === 3
	          }, 'video-react-volume-menu-button'),
	          onClick: this.handleClick
	        },
	        _react2.default.createElement(_VolumeBar2.default, this.props)
	      );
	    }
	  }, {
	    key: 'volumeLevel',
	    get: function get() {
	      var _props$player = this.props.player,
	          volume = _props$player.volume,
	          muted = _props$player.muted;
	
	      var level = 3;
	      if (volume === 0 || muted) {
	        level = 0;
	      } else if (volume < 0.33) {
	        level = 1;
	      } else if (volume < 0.67) {
	        level = 2;
	      }
	      return level;
	    }
	  }]);
	
	  return VolumeMenuButton;
	}(_react.Component);
	
	VolumeMenuButton.propTypes = propTypes;
	VolumeMenuButton.defaultProps = defaultProps;
	exports.default = VolumeMenuButton;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var propTypes = {
	  player: _react.PropTypes.object
	};
	
	function CurrentTimeDisplay(_ref) {
	  var _ref$player = _ref.player,
	      currentTime = _ref$player.currentTime,
	      duration = _ref$player.duration;
	
	  var formattedTime = (0, _utils.formatTime)(currentTime, duration);
	  return _react2.default.createElement(
	    'div',
	    {
	      className: 'video-react-current-time video-react-time-control video-react-control'
	    },
	    _react2.default.createElement(
	      'div',
	      {
	        className: 'video-react-current-time-display',
	        'aria-live': 'off'
	      },
	      _react2.default.createElement(
	        'span',
	        { className: 'video-react-control-text' },
	        'Current Time '
	      ),
	      formattedTime
	    )
	  );
	}
	
	CurrentTimeDisplay.propTypes = propTypes;
	
	exports.default = CurrentTimeDisplay;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var propTypes = {
	  player: _react.PropTypes.object
	};
	
	function DurationDisplay(_ref) {
	  var duration = _ref.player.duration;
	
	  var formattedTime = (0, _utils.formatTime)(duration);
	  return _react2.default.createElement(
	    'div',
	    {
	      className: 'video-react-duration video-react-time-control video-react-control'
	    },
	    _react2.default.createElement(
	      'div',
	      {
	        className: 'video-react-duration-display',
	        'aria-live': 'off'
	      },
	      _react2.default.createElement(
	        'span',
	        { className: 'video-react-control-text' },
	        'Duration Time '
	      ),
	      formattedTime
	    )
	  );
	}
	
	DurationDisplay.propTypes = propTypes;
	
	exports.default = DurationDisplay;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var propTypes = {
	  player: _react.PropTypes.object
	};
	
	function RemainingTimeDisplay(_ref) {
	  var _ref$player = _ref.player,
	      currentTime = _ref$player.currentTime,
	      duration = _ref$player.duration;
	
	  var remainingTime = duration - currentTime;
	  var formattedTime = (0, _utils.formatTime)(remainingTime);
	  return _react2.default.createElement(
	    'div',
	    {
	      className: 'video-react-remaining-time video-react-time-control video-react-control'
	    },
	    _react2.default.createElement(
	      'div',
	      {
	        className: 'video-react-remaining-time-display',
	        'aria-live': 'off'
	      },
	      _react2.default.createElement(
	        'span',
	        { className: 'video-react-control-text' },
	        'Remaining Time '
	      ),
	      '-',
	      formattedTime
	    )
	  );
	}
	
	RemainingTimeDisplay.propTypes = propTypes;
	
	exports.default = RemainingTimeDisplay;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = TimeDivider;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var propTypes = {
	  separator: _react.PropTypes.string
	};
	
	function TimeDivider(_ref) {
	  var separator = _ref.separator;
	
	  var separatorText = separator || '/';
	  return _react2.default.createElement(
	    'div',
	    {
	      className: 'video-react-time-control video-react-time-divider',
	      dir: 'ltr'
	    },
	    _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'span',
	        null,
	        separatorText
	      )
	    )
	  );
	}
	
	TimeDivider.propTypes = propTypes;

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Actions = function () {
	  function Actions(setState) {
	    _classCallCheck(this, Actions);
	
	    this.setState = setState;
	  }
	
	  _createClass(Actions, [{
	    key: "setVideo",
	    value: function setVideo(video) {
	      this.video = video;
	    }
	  }, {
	    key: "setPlayerElement",
	    value: function setPlayerElement(playerElement) {
	      this.playerElement = playerElement;
	    }
	  }, {
	    key: "play",
	    value: function play() {
	      this.video.play();
	    }
	  }, {
	    key: "pause",
	    value: function pause() {
	      this.video.pause();
	    }
	
	    // seek video by time
	
	  }, {
	    key: "seek",
	    value: function seek(time) {
	      this.video.seek(time);
	    }
	
	    // jump forward x seconds
	
	  }, {
	    key: "forward",
	    value: function forward(seconds) {
	      this.video.forward(seconds);
	    }
	
	    // jump back x seconds
	
	  }, {
	    key: "replay",
	    value: function replay(seconds) {
	      this.video.replay(seconds);
	    }
	  }, {
	    key: "changeRate",
	    value: function changeRate(rate) {
	      this.video.playbackRate = rate;
	    }
	  }, {
	    key: "changeVolume",
	    value: function changeVolume(volume) {
	      this.video.volume = volume;
	    }
	  }, {
	    key: "toggleMuted",
	    value: function toggleMuted(muted) {
	      this.setState({
	        muted: muted
	      });
	    }
	  }, {
	    key: "handleFullscreenChange",
	    value: function handleFullscreenChange(isFullscreen) {
	      this.setState({
	        isFullscreen: isFullscreen
	      });
	    }
	  }, {
	    key: "handleLoadStart",
	    value: function handleLoadStart(buffered) {
	      this.setState({
	        hasStarted: false,
	        ended: false,
	        buffered: buffered
	      });
	    }
	  }, {
	    key: "handleCanPlay",
	    value: function handleCanPlay(_ref) {
	      var videoWidth = _ref.videoWidth,
	          videoHeight = _ref.videoHeight,
	          duration = _ref.duration;
	
	      this.setState({
	        waiting: false,
	        videoWidth: videoWidth,
	        videoHeight: videoHeight,
	        duration: duration
	      });
	    }
	  }, {
	    key: "handleWaiting",
	    value: function handleWaiting() {
	      this.setState({
	        waiting: true
	      });
	    }
	  }, {
	    key: "handleCanPlayThrough",
	    value: function handleCanPlayThrough() {
	      this.setState({
	        waiting: false
	      });
	    }
	  }, {
	    key: "handlePlaying",
	    value: function handlePlaying() {
	      this.setState({
	        waiting: false
	      });
	    }
	  }, {
	    key: "handlePlay",
	    value: function handlePlay(_ref2) {
	      var duration = _ref2.duration;
	
	      this.setState({
	        ended: false,
	        paused: false,
	        autoPaused: false,
	        waiting: false,
	        hasStarted: true,
	        duration: duration
	      });
	    }
	  }, {
	    key: "handlePause",
	    value: function handlePause() {
	      this.setState({
	        paused: true
	      });
	    }
	  }, {
	    key: "handleEnd",
	    value: function handleEnd() {
	      this.setState({
	        ended: true
	      });
	    }
	  }, {
	    key: "handleSeeking",
	    value: function handleSeeking() {
	      this.setState({
	        seeking: true
	      });
	    }
	  }, {
	    key: "handleSeeked",
	    value: function handleSeeked() {
	      this.setState({
	        seeking: false
	      });
	    }
	  }, {
	    key: "handleSeekingTime",
	    value: function handleSeekingTime(time) {
	      this.setState({
	        seekingTime: time
	      });
	    }
	  }, {
	    key: "handleEndSeeking",
	    value: function handleEndSeeking(time) {
	      this.setState({
	        seekingTime: 0,
	        currentTime: time
	      });
	    }
	  }, {
	    key: "handleDurationChange",
	    value: function handleDurationChange(duration) {
	      this.setState({
	        duration: duration
	      });
	    }
	  }, {
	    key: "handleTimeUpdate",
	    value: function handleTimeUpdate(time) {
	      this.setState({
	        currentTime: time
	      });
	    }
	  }, {
	    key: "handleVolumeChange",
	    value: function handleVolumeChange(volume) {
	      this.setState({
	        volume: volume
	      });
	    }
	  }, {
	    key: "handleProgressChange",
	    value: function handleProgressChange(buffered) {
	      this.setState({
	        buffered: buffered
	      });
	    }
	  }, {
	    key: "handleRateChange",
	    value: function handleRateChange(rate) {
	      this.setState({
	        playbackRate: rate
	      });
	    }
	  }, {
	    key: "handleMute",
	    value: function handleMute(muted) {
	      this.setState({
	        muted: muted
	      });
	    }
	  }]);
	
	  return Actions;
	}();
	
	exports.default = Actions;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _actions = __webpack_require__(28);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _BigPlayButton = __webpack_require__(7);
	
	var _BigPlayButton2 = _interopRequireDefault(_BigPlayButton);
	
	var _LoadingSpinner = __webpack_require__(8);
	
	var _LoadingSpinner2 = _interopRequireDefault(_LoadingSpinner);
	
	var _PosterImage = __webpack_require__(9);
	
	var _PosterImage2 = _interopRequireDefault(_PosterImage);
	
	var _Video = __webpack_require__(10);
	
	var _Video2 = _interopRequireDefault(_Video);
	
	var _ControlBar = __webpack_require__(11);
	
	var _ControlBar2 = _interopRequireDefault(_ControlBar);
	
	var _browser = __webpack_require__(39);
	
	var browser = _interopRequireWildcard(_browser);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  width: _react.PropTypes.number,
	  height: _react.PropTypes.number,
	  fluid: _react.PropTypes.bool,
	  muted: _react.PropTypes.bool,
	  aspectRatio: _react.PropTypes.string,
	  children: _react.PropTypes.any
	};
	
	var defaultProps = {
	  fluid: true
	};
	
	var Player = function (_Component) {
	  _inherits(Player, _Component);
	
	  function Player(props) {
	    _classCallCheck(this, Player);
	
	    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, props));
	
	    _this.controlsHideTimer = null;
	
	    _this.state = {
	      userActivity: true,
	      player: {
	        duration: 0,
	        currentTime: 0,
	        seekingTime: 0,
	        buffered: null,
	        waiting: true,
	        seeking: false,
	        paused: true,
	        autoPaused: false,
	        ended: false,
	        playbackRate: 1,
	        muted: props.muted || false,
	        volume: 1,
	        isFullscreen: false,
	        readyState: 0,
	        networkState: 0,
	        videoWidth: 0,
	        videoHeight: 0,
	        hasStarted: false,
	        error: null
	      }
	    };
	    _this.actions = new _actions2.default(_this.setPlayerState.bind(_this));
	
	    _this.getStyle = _this.getStyle.bind(_this);
	    _this.handleResize = _this.handleResize.bind(_this);
	    _this.getChildren = _this.getChildren.bind(_this);
	    return _this;
	  }
	
	  _createClass(Player, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.handleResize();
	      window.addEventListener('resize', this.handleResize);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      if (this.state.player.isFullscreen !== prevState.player.isFullscreen) {
	        this.handleResize();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      // Remove event listener
	      window.addEventListener('resize', this.handleResize);
	      if (this.controlsHideTimer) {
	        window.clearTimeout(this.controlsHideTimer);
	      }
	    }
	  }, {
	    key: 'setPlayerState',
	    value: function setPlayerState(player) {
	      this.setState(function (prevState) {
	        return _extends({}, prevState, {
	          player: _extends({}, prevState.player, player)
	        });
	      });
	    }
	
	    // player resize
	
	  }, {
	    key: 'handleResize',
	    value: function handleResize() {}
	  }, {
	    key: 'userActive',
	    value: function userActive(active) {
	      this.setState({
	        userActivity: active
	      });
	    }
	  }, {
	    key: 'getStyle',
	    value: function getStyle() {
	      var fluid = this.props.fluid;
	      var player = this.state.player;
	
	      var style = {};
	      var width = void 0;
	      var height = void 0;
	      var aspectRatio = void 0;
	
	      // The aspect ratio is either used directly or to calculate width and height.
	      if (this.props.aspectRatio !== undefined && this.props.aspectRatio !== 'auto') {
	        // Use any aspectRatio that's been specifically set
	        aspectRatio = this.props.aspectRatio;
	      } else if (player.videoWidth) {
	        // Otherwise try to get the aspect ratio from the video metadata
	        aspectRatio = player.videoWidth + ':' + player.videoHeight;
	      } else {
	        // Or use a default. The video element's is 2:1, but 16:9 is more common.
	        aspectRatio = '16:9';
	      }
	
	      // Get the ratio as a decimal we can use to calculate dimensions
	      var ratioParts = aspectRatio.split(':');
	      var ratioMultiplier = ratioParts[1] / ratioParts[0];
	
	      if (this.props.width !== undefined) {
	        // Use any width that's been specifically set
	        width = this.props.width;
	      } else if (this.props.height !== undefined) {
	        // Or calulate the width from the aspect ratio if a height has been set
	        width = this.props.height / ratioMultiplier;
	      } else {
	        // Or use the video's metadata, or use the video el's default of 300
	        width = player.videoWidth || 400;
	      }
	
	      if (this.props.height !== undefined) {
	        // Use any height that's been specifically set
	        height = this.props.height;
	      } else {
	        // Otherwise calculate the height from the ratio and the width
	        height = width * ratioMultiplier;
	      }
	
	      if (fluid) {
	        style.paddingTop = ratioMultiplier * 100 + '%';
	      } else {
	        style.width = width + 'px';
	        style.height = height + 'px';
	      }
	
	      return style;
	    }
	  }, {
	    key: 'getDefaultChildren',
	    value: function getDefaultChildren(props) {
	      return [_react2.default.createElement(_PosterImage2.default, _extends({
	        key: 'poster-image',
	        order: 10
	      }, props)), _react2.default.createElement(_LoadingSpinner2.default, _extends({
	        key: 'loading-spinner',
	        order: 11
	      }, props)), _react2.default.createElement(_BigPlayButton2.default, _extends({
	        key: 'big-play-button',
	        order: 12
	      }, props)), _react2.default.createElement(_ControlBar2.default, _extends({
	        key: 'control-bar',
	        order: 13
	      }, props))];
	    }
	  }, {
	    key: 'getChildren',
	    value: function getChildren(props) {
	      var propsWithoutChildren = _extends({}, props, {
	        children: null
	      });
	      var children = _react2.default.Children.toArray(this.props.children);
	      var defaultChildren = this.getDefaultChildren(propsWithoutChildren);
	      return children.filter(function (e) {
	        return e.type !== 'source';
	      }).concat(defaultChildren.filter(function (c) {
	        return !children.find(function (component) {
	          return component.type === c.type;
	        });
	      })).sort(function (a, b) {
	        return (a.props.order || 1) - (b.props.order - 1);
	      }).map(function (element) {
	        var e = _react2.default.cloneElement(element, propsWithoutChildren, element.props.children);
	        return e;
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var fluid = this.props.fluid;
	      var _state$player = this.state.player,
	          paused = _state$player.paused,
	          hasStarted = _state$player.hasStarted,
	          waiting = _state$player.waiting,
	          seeking = _state$player.seeking,
	          isFullscreen = _state$player.isFullscreen;
	
	      var props = _extends({}, this.props, {
	        player: this.state.player,
	        actions: this.actions
	      });
	      var children = this.getChildren(props);
	
	      return _react2.default.createElement(
	        'div',
	        {
	          className: (0, _classnames2.default)({
	            'video-react-controls-enabled': true,
	            'video-react-has-started': hasStarted,
	            'video-react-paused': paused,
	            'video-react-playing': !paused,
	            'video-react-waiting': waiting,
	            'video-react-seeking': seeking,
	            'video-react-fluid': fluid,
	            'video-react-fullscreen': isFullscreen,
	            'video-react-user-inactive': !this.state.userActivity,
	            'video-react-user-active': this.state.userActivity,
	            'video-react-workinghover': !browser.IS_IOS
	          }, 'video-react'),
	          style: this.getStyle(),
	          ref: function ref(c) {
	            _this2.actions.setPlayerElement(c);
	          },
	          onTouchStart: this.handleMouseDown,
	          onMouseDown: this.handleMouseDown,
	          onMouseMove: this.handleMouseMove
	        },
	        _react2.default.createElement(_Video2.default, _extends({
	          ref: function ref(c) {
	            _this2.video = c;
	            _this2.actions.setVideo(c);
	          }
	        }, props)),
	        children
	      );
	    }
	  }]);
	
	  return Player;
	}(_react.Component);
	
	exports.default = Player;
	
	
	Player.propTypes = propTypes;
	Player.defaultProps = defaultProps;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Source;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var propTypes = {
	  src: _react.PropTypes.string.isRequired,
	  media: _react.PropTypes.string,
	  type: _react.PropTypes.string
	};
	
	function Source(props) {
	  var src = props.src,
	      media = props.media,
	      type = props.type;
	
	
	  return _react2.default.createElement('source', {
	    src: src,
	    media: media,
	    type: type
	  });
	}
	
	Source.propTypes = propTypes;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  children: _react.PropTypes.any
	};
	
	var Menu = function (_Component) {
	  _inherits(Menu, _Component);
	
	  function Menu(props, context) {
	    _classCallCheck(this, Menu);
	
	    var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props, context));
	
	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }
	
	  _createClass(Menu, [{
	    key: "handleClick",
	    value: function handleClick(event) {
	      event.preventDefault();
	      event.stopPropagation();
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        {
	          className: "video-react-menu",
	          role: "presentation",
	          onClick: this.handleClick
	        },
	        _react2.default.createElement(
	          "ul",
	          { className: "video-react-menu-content" },
	          this.props.children
	        )
	      );
	    }
	  }]);
	
	  return Menu;
	}(_react.Component);
	
	exports.default = Menu;
	
	
	Menu.propTypes = propTypes;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Menu = __webpack_require__(31);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _MenuItem = __webpack_require__(33);
	
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

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
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

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  player: _react.PropTypes.object,
	  children: _react.PropTypes.any
	};
	
	var Popup = function (_Component) {
	  _inherits(Popup, _Component);
	
	  function Popup(props, context) {
	    _classCallCheck(this, Popup);
	
	    var _this = _possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).call(this, props, context));
	
	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }
	
	  _createClass(Popup, [{
	    key: "handleClick",
	    value: function handleClick(event) {
	      event.preventDefault();
	      event.stopPropagation();
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var children = this.props.children;
	
	      return _react2.default.createElement(
	        "div",
	        {
	          className: "video-react-menu",
	          onClick: this.handleClick
	        },
	        _react2.default.createElement(
	          "div",
	          { className: "video-react-menu-content" },
	          children
	        )
	      );
	    }
	  }]);
	
	  return Popup;
	}(_react.Component);
	
	exports.default = Popup;
	
	
	Popup.propTypes = propTypes;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Popup = __webpack_require__(34);
	
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

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Slider = __webpack_require__(5);
	
	var _Slider2 = _interopRequireDefault(_Slider);
	
	var _VolumeLevel = __webpack_require__(37);
	
	var _VolumeLevel2 = _interopRequireDefault(_VolumeLevel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  actions: _react.PropTypes.object,
	  player: _react.PropTypes.object
	};
	
	var VolumeBar = function (_Component) {
	  _inherits(VolumeBar, _Component);
	
	  function VolumeBar(props, context) {
	    _classCallCheck(this, VolumeBar);
	
	    var _this = _possibleConstructorReturn(this, (VolumeBar.__proto__ || Object.getPrototypeOf(VolumeBar)).call(this, props, context));
	
	    _this.state = {
	      percentage: '0%'
	    };
	
	    _this.handleMouseMove = _this.handleMouseMove.bind(_this);
	    _this.handlePercentageChange = _this.handlePercentageChange.bind(_this);
	    _this.checkMuted = _this.checkMuted.bind(_this);
	    _this.getPercent = _this.getPercent.bind(_this);
	    _this.stepForward = _this.stepForward.bind(_this);
	    _this.stepBack = _this.stepBack.bind(_this);
	    return _this;
	  }
	
	  _createClass(VolumeBar, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'getPercent',
	    value: function getPercent() {
	      var player = this.props.player;
	
	      if (player.muted) {
	        return 0;
	      }
	      return player.volume;
	    }
	  }, {
	    key: 'checkMuted',
	    value: function checkMuted() {
	      var _props = this.props,
	          player = _props.player,
	          actions = _props.actions;
	
	      if (player.muted) {
	        actions.toggleMuted(false);
	      }
	    }
	  }, {
	    key: 'handleMouseMove',
	    value: function handleMouseMove(event) {
	      var actions = this.props.actions;
	
	      this.checkMuted();
	      var distance = this.slider.calculateDistance(event);
	      actions.changeVolume(distance);
	    }
	  }, {
	    key: 'stepForward',
	    value: function stepForward() {
	      var _props2 = this.props,
	          player = _props2.player,
	          actions = _props2.actions;
	
	      this.checkMuted();
	      actions.changeVolume(player.volume + 0.1);
	    }
	  }, {
	    key: 'stepBack',
	    value: function stepBack() {
	      var _props3 = this.props,
	          player = _props3.player,
	          actions = _props3.actions;
	
	      this.checkMuted();
	      actions.changeVolume(player.volume - 0.1);
	    }
	  }, {
	    key: 'handlePercentageChange',
	    value: function handlePercentageChange(percentage) {
	      if (percentage !== this.state.percentage) {
	        this.setState({
	          percentage: percentage
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var player = this.props.player;
	
	
	      var volume = (player.volume * 100).toFixed(2);
	      return _react2.default.createElement(
	        _Slider2.default,
	        {
	          ref: function ref(c) {
	            _this2.slider = c;
	          },
	          label: 'volume level',
	          valuenow: volume,
	          valuetext: volume + '%',
	          onMouseMove: this.handleMouseMove,
	          getPercent: this.getPercent,
	          onPercentageChange: this.handlePercentageChange,
	          className: 'video-react-volume-bar video-react-slider-bar'
	        },
	        _react2.default.createElement(_VolumeLevel2.default, this.props)
	      );
	    }
	  }]);
	
	  return VolumeBar;
	}(_react.Component);
	
	VolumeBar.propTypes = propTypes;
	
	exports.default = VolumeBar;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var propTypes = {
	  percentage: _react.PropTypes.string,
	  vertical: _react.PropTypes.bool
	};
	
	var defaultProps = {
	  percentage: '100%',
	  vertical: false
	};
	
	function VolumeLevel(_ref) {
	  var percentage = _ref.percentage,
	      vertical = _ref.vertical;
	
	  var style = {};
	  if (vertical) {
	    style.height = percentage;
	  } else {
	    style.width = percentage;
	  }
	
	  return _react2.default.createElement(
	    'div',
	    {
	      className: 'video-react-volume-level',
	      style: style
	    },
	    _react2.default.createElement('span', { className: 'video-react-control-text' })
	  );
	}
	
	VolumeLevel.propTypes = propTypes;
	VolumeLevel.defaultProps = defaultProps;
	exports.default = VolumeLevel;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PlaybackRate = exports.VolumeMenuButton = exports.TimeDivider = exports.DurationDisplay = exports.CurrentTimeDisplay = exports.RemainingTimeDisplay = exports.MouseTimeDisplay = exports.LoadProgressBar = exports.PlayProgressBar = exports.Slider = exports.SeekBar = exports.ProgressControl = exports.FullscreenToggle = exports.ReplayControl = exports.ForwardControl = exports.PlayToggle = exports.ControlBar = exports.PosterImage = exports.LoadingSpinner = exports.BigPlayButton = exports.Source = exports.Video = exports.Player = undefined;
	
	var _Player = __webpack_require__(29);
	
	var _Player2 = _interopRequireDefault(_Player);
	
	var _Video = __webpack_require__(10);
	
	var _Video2 = _interopRequireDefault(_Video);
	
	var _BigPlayButton = __webpack_require__(7);
	
	var _BigPlayButton2 = _interopRequireDefault(_BigPlayButton);
	
	var _LoadingSpinner = __webpack_require__(8);
	
	var _LoadingSpinner2 = _interopRequireDefault(_LoadingSpinner);
	
	var _PosterImage = __webpack_require__(9);
	
	var _PosterImage2 = _interopRequireDefault(_PosterImage);
	
	var _Slider = __webpack_require__(5);
	
	var _Slider2 = _interopRequireDefault(_Slider);
	
	var _Source = __webpack_require__(30);
	
	var _Source2 = _interopRequireDefault(_Source);
	
	var _ControlBar = __webpack_require__(11);
	
	var _ControlBar2 = _interopRequireDefault(_ControlBar);
	
	var _PlayToggle = __webpack_require__(18);
	
	var _PlayToggle2 = _interopRequireDefault(_PlayToggle);
	
	var _ForwardControl = __webpack_require__(12);
	
	var _ForwardControl2 = _interopRequireDefault(_ForwardControl);
	
	var _ReplayControl = __webpack_require__(21);
	
	var _ReplayControl2 = _interopRequireDefault(_ReplayControl);
	
	var _FullscreenToggle = __webpack_require__(14);
	
	var _FullscreenToggle2 = _interopRequireDefault(_FullscreenToggle);
	
	var _ProgressControl = __webpack_require__(20);
	
	var _ProgressControl2 = _interopRequireDefault(_ProgressControl);
	
	var _SeekBar = __webpack_require__(22);
	
	var _SeekBar2 = _interopRequireDefault(_SeekBar);
	
	var _PlayProgressBar = __webpack_require__(17);
	
	var _PlayProgressBar2 = _interopRequireDefault(_PlayProgressBar);
	
	var _LoadProgressBar = __webpack_require__(15);
	
	var _LoadProgressBar2 = _interopRequireDefault(_LoadProgressBar);
	
	var _MouseTimeDisplay = __webpack_require__(16);
	
	var _MouseTimeDisplay2 = _interopRequireDefault(_MouseTimeDisplay);
	
	var _VolumeMenuButton = __webpack_require__(23);
	
	var _VolumeMenuButton2 = _interopRequireDefault(_VolumeMenuButton);
	
	var _PlaybackRate = __webpack_require__(19);
	
	var _PlaybackRate2 = _interopRequireDefault(_PlaybackRate);
	
	var _RemainingTimeDisplay = __webpack_require__(26);
	
	var _RemainingTimeDisplay2 = _interopRequireDefault(_RemainingTimeDisplay);
	
	var _CurrentTimeDisplay = __webpack_require__(24);
	
	var _CurrentTimeDisplay2 = _interopRequireDefault(_CurrentTimeDisplay);
	
	var _DurationDisplay = __webpack_require__(25);
	
	var _DurationDisplay2 = _interopRequireDefault(_DurationDisplay);
	
	var _TimeDivider = __webpack_require__(27);
	
	var _TimeDivider2 = _interopRequireDefault(_TimeDivider);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Player = _Player2.default;
	exports.Video = _Video2.default;
	exports.Source = _Source2.default;
	exports.BigPlayButton = _BigPlayButton2.default;
	exports.LoadingSpinner = _LoadingSpinner2.default;
	exports.PosterImage = _PosterImage2.default;
	exports.ControlBar = _ControlBar2.default;
	exports.PlayToggle = _PlayToggle2.default;
	exports.ForwardControl = _ForwardControl2.default;
	exports.ReplayControl = _ReplayControl2.default;
	exports.FullscreenToggle = _FullscreenToggle2.default;
	exports.ProgressControl = _ProgressControl2.default;
	exports.SeekBar = _SeekBar2.default;
	exports.Slider = _Slider2.default;
	exports.PlayProgressBar = _PlayProgressBar2.default;
	exports.LoadProgressBar = _LoadProgressBar2.default;
	exports.MouseTimeDisplay = _MouseTimeDisplay2.default;
	exports.RemainingTimeDisplay = _RemainingTimeDisplay2.default;
	exports.CurrentTimeDisplay = _CurrentTimeDisplay2.default;
	exports.DurationDisplay = _DurationDisplay2.default;
	exports.TimeDivider = _TimeDivider2.default;
	exports.VolumeMenuButton = _VolumeMenuButton2.default;
	exports.PlaybackRate = _PlaybackRate2.default;

/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var USER_AGENT = typeof window !== 'undefined' && window.navigator ? window.navigator.userAgent : '';
	var webkitVersionMap = /AppleWebKit\/([\d.]+)/i.exec(USER_AGENT);
	var appleWebkitVersion = webkitVersionMap ? parseFloat(webkitVersionMap.pop()) : null;
	
	/*
	 * Device is an iPhone
	 *
	 * @type {Boolean}
	 * @constant
	 * @private
	 */
	var IS_IPAD = exports.IS_IPAD = /iPad/i.test(USER_AGENT);
	
	// The Facebook app's UIWebView identifies as both an iPhone and iPad, so
	// to identify iPhones, we need to exclude iPads.
	// http://artsy.github.io/blog/2012/10/18/the-perils-of-ios-user-agent-sniffing/
	var IS_IPHONE = exports.IS_IPHONE = /iPhone/i.test(USER_AGENT) && !IS_IPAD;
	var IS_IPOD = exports.IS_IPOD = /iPod/i.test(USER_AGENT);
	var IS_IOS = exports.IS_IOS = IS_IPHONE || IS_IPAD || IS_IPOD;

/***/ },
/* 40 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 41 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;
	
	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return root.Date.now();
	};
	
	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	
	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;
	
	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }
	
	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }
	
	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;
	
	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }
	
	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;
	
	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }
	
	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }
	
	  function trailingEdge(time) {
	    timerId = undefined;
	
	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }
	
	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }
	
	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }
	
	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);
	
	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;
	
	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}
	
	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed `func` invocations and a `flush` method to
	 * immediately invoke them. Provide `options` to indicate whether `func`
	 * should be invoked on the leading and/or trailing edge of the `wait`
	 * timeout. The `func` is invoked with the last arguments provided to the
	 * throttled function. Subsequent calls to the throttled function return the
	 * result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the throttled function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=true]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // Avoid excessively updating the position while scrolling.
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	 * jQuery(element).on('click', throttled);
	 *
	 * // Cancel the trailing throttled invocation.
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  if (isObject(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce(func, wait, {
	    'leading': leading,
	    'maxWait': wait,
	    'trailing': trailing
	  });
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	module.exports = throttle;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ])
});
;
//# sourceMappingURL=video-react.js.map