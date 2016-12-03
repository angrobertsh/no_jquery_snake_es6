/******/ (function(modules) { // webpackBootstrap
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

	"use strict";
	
	var _snakeView = __webpack_require__(1);
	
	var _snakeView2 = _interopRequireDefault(_snakeView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	document.addEventListener("DOMContentLoaded", function () {
	  var view = new _snakeView2.default();
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _board = __webpack_require__(2);
	
	var _board2 = _interopRequireDefault(_board);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var View = function () {
	  function View() {
	    _classCallCheck(this, View);
	
	    this.board = new _board2.default();
	    document.addEventListener("keypress", this.handleKeyEvent.bind(this));
	    this.gamePlaying = window.setInterval(this.step.bind(this), 500);
	  }
	
	  _createClass(View, [{
	    key: "handleKeyEvent",
	    value: function handleKeyEvent(event) {
	      var pressedLetter = event.keyCode;
	      switch (pressedLetter) {
	        case 119:
	          this.board.snake.turn("N");
	          return;
	        case 97:
	          this.board.snake.turn("W");
	          return;
	        case 115:
	          this.board.snake.turn("S");
	          return;
	        case 100:
	          this.board.snake.turn("E");
	          return;
	        default:
	          return;
	      }
	    }
	  }, {
	    key: "step",
	    value: function step() {
	      if (this.board.snake.move() === true) {
	        window.clearInterval(this.gamePlaying);
	        alert("You lost!");
	      } else {
	        this.board.render();
	      }
	    }
	  }]);
	
	  return View;
	}();
	
	exports.default = View;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _snake = __webpack_require__(3);
	
	var _snake2 = _interopRequireDefault(_snake);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Board = function () {
	  function Board() {
	    _classCallCheck(this, Board);
	
	    this.snake = new _snake2.default();
	    this.apples = [];
	    this.dimensions = [20, 20];
	    this.render();
	  }
	
	  _createClass(Board, [{
	    key: "render",
	    value: function render() {
	      var board = document.getElementById("board");
	      board.innerHTML = "";
	      for (var i = 0; i < this.dimensions[0]; i += 1) {
	        var rowName = i;
	        var newRow = document.createElement("LI");
	        newRow.id = "row" + rowName;
	        newRow.className = 'row';
	        board.appendChild(newRow);
	        var currentRow = document.getElementById("row" + rowName);
	        for (var j = 0; j < this.dimensions[1]; j += 1) {
	          var colName = j;
	          var newCell = document.createElement("div");
	          newCell.id = "row" + rowName + "col" + colName;
	          newCell.className = 'cell empty';
	          currentRow.appendChild(newCell);
	        }
	      }
	      this.insertSnake();
	    }
	  }, {
	    key: "insertSnake",
	    value: function insertSnake() {
	      var snakeCoords = this.snake.segments;
	      var x = void 0;
	      var y = void 0;
	      var snakeSeg = void 0;
	      for (var i = 0; i < snakeCoords.length; i += 1) {
	        x = snakeCoords[i].x;
	        y = snakeCoords[i].y;
	        snakeSeg = document.getElementById("row" + x + "col" + y);
	        snakeSeg.className = 'cell snake';
	      }
	    }
	  }]);
	
	  return Board;
	}();
	
	//
	// <div id='board'>
	//   <li class="row" id='row1'>
	//     <div id="row0col0" class="cell empty"> //20 of these divs to represent cells
	//     <div id="row0col1" class="cell empty">
	//     ...
	//     <div id="row0col11" class="cell empty"> //20 of these divs to represent cells
	//     ...
	//   </li>
	//   <li class="row" id="row2">
	//     <div id="row1col0" class="cell empty"> //20 of these divs to represent cells
	//     ...
	//   <li class="row" id="row10">
	//     ...
	//     <div id="row10col10" class="cell snake">
	//     ...
	//   </li>
	//
	//   ...
	// </div>
	
	
	exports.default = Board;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _coord = __webpack_require__(4);
	
	var _coord2 = _interopRequireDefault(_coord);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Snake = function () {
	  function Snake() {
	    _classCallCheck(this, Snake);
	
	    this.direction = "N";
	    this.segments = [new _coord2.default(7, 10), new _coord2.default(8, 10), new _coord2.default(9, 10), new _coord2.default(10, 10)];
	  }
	
	  _createClass(Snake, [{
	    key: "move",
	    value: function move() {
	      this.segments.splice(this.segments.length - 1, 1);
	      this.segments.unshift(this.segments[0].plus(this.dirToCoord(this.direction)));
	      return this.outOfBounds(this.segments[0]);
	    }
	  }, {
	    key: "dirToCoord",
	    value: function dirToCoord(dir) {
	      switch (dir) {
	        case "N":
	          return new _coord2.default(-1, 0);
	        case "S":
	          return new _coord2.default(1, 0);
	        case "E":
	          return new _coord2.default(0, 1);
	        default:
	          return new _coord2.default(0, -1);
	      }
	    }
	  }, {
	    key: "turn",
	    value: function turn(newDir) {
	      if (this.dirToCoord(newDir).isOpposite(this.dirToCoord(this.direction))) {
	        return;
	      } else {
	        this.direction = newDir;
	      }
	    }
	  }, {
	    key: "outOfBounds",
	    value: function outOfBounds(coord) {
	      var x = coord.x;
	      var y = coord.y;
	      if (x < 0 || x > 19) {
	        return true;
	      }
	      if (y < 0 || y > 19) {
	        return true;
	      }
	      return false;
	    }
	  }]);
	
	  return Snake;
	}();
	
	exports.default = Snake;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Coord = function () {
	  function Coord(x, y) {
	    _classCallCheck(this, Coord);
	
	    this.x = x;
	    this.y = y;
	  }
	
	  _createClass(Coord, [{
	    key: "plus",
	    value: function plus(coord) {
	      return new Coord(coord.x + this.x, coord.y + this.y);
	    }
	  }, {
	    key: "equals",
	    value: function equals(coord) {
	      return this.y === coord.y && this.x === coord.x;
	    }
	  }, {
	    key: "isOpposite",
	    value: function isOpposite(coord) {
	      return this.y * -1 === coord.y && this.x * -1 === coord.x;
	    }
	  }]);
	
	  return Coord;
	}();
	
	exports.default = Coord;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map