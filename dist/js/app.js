/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Http = __webpack_require__(1);

	var _Http2 = _interopRequireDefault(_Http);

	var _modifyClassList = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var http = new _Http2.default();
	var blogPost = document.getElementById('blog-post');

	var init = function init() {
	    var popout = document.getElementsByClassName('popout')[0];
	    var photoBtn = document.getElementsByClassName('profile-photo')[0];

	    photoBtn.addEventListener('click', function (e) {
	        if (popout.children[0].classList[2] === "hide") {
	            (0, _modifyClassList.modifyClassList)(popout, "remove");
	        } else {
	            (0, _modifyClassList.modifyClassList)(popout, "add");
	        }
	    });
	};

	init();

	http.fetch().then(function (response) {
	    blogPost.setAttribute('href', response.url);
	    blogPost.textContent = response.title;
	}).catch(function (error) {
	    console.log("Error! :", error);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Http = function () {
	    function Http() {
	        _classCallCheck(this, Http);
	    }

	    _createClass(Http, [{
	        key: 'fetch',
	        value: function fetch() {
	            var promise = new Promise(function (resolve, reject) {
	                var client = new XMLHttpRequest();

	                // Change to location.origin on launch
	                client.open('GET', '/posts.php', true);
	                client.send();

	                client.onload = function () {

	                    if (this.status == 200) {

	                        resolve(JSON.parse(this.response));
	                    } else {

	                        reject(this.statusText);
	                    }
	                };

	                client.onerror = function () {

	                    reject(this.statusText);
	                };
	            });

	            return promise;
	        }
	    }]);

	    return Http;
	}();

	exports.default = Http;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.modifyClassList = modifyClassList;
	function modifyClassList(element, method, n) {
	    var length = element.children.length;
	    var iter = n || 0;

	    if (iter >= length) return;

	    if (method === "remove") element.children[iter].classList.remove("hide");
	    if (method === "add") element.children[iter].classList.add("hide");

	    setTimeout(function () {
	        modifyClassList(element, method, iter + 1);
	    }, 100);
	}

/***/ }
/******/ ]);