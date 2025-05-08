/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/scripts/base.js":
/*!********************************!*\
  !*** ./assets/scripts/base.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Navigation */ \"./assets/scripts/components/Navigation.js\");\n/* harmony import */ var _components_Poster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Poster */ \"./assets/scripts/components/Poster.js\");\n/* harmony import */ var _components_Poster__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_Poster__WEBPACK_IMPORTED_MODULE_1__);\n\n\nwindow.addEventListener(\"DOMContentLoaded\", () => {\n  document.body.classList.remove(\"preload\");\n  const menu = new _components_Navigation__WEBPACK_IMPORTED_MODULE_0__.mainNavigation();\n  menu.createMenu();\n});\n/*!\n* preload class\n*/\n\n\n//# sourceURL=webpack://Afec_starter_kit/./assets/scripts/base.js?");

/***/ }),

/***/ "./assets/scripts/components/Navigation.js":
/*!*************************************************!*\
  !*** ./assets/scripts/components/Navigation.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mainNavigation: () => (/* binding */ mainNavigation)\n/* harmony export */ });\n/* harmony import */ var _data_Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/Menu */ \"./assets/scripts/data/Menu.js\");\n\nclass mainNavigation {\n  constructor() {\n    this.menuContainer = document.getElementById(\"Menu\");\n    this.html = document.querySelector(\"html\");\n    this.navLinks = document.querySelectorAll(\".navbar__menu__link\");\n    this.bindMenuEvents();\n  }\n  createMenu() {\n    let menu = `<ul class=\"navbar__menu\">`;\n    _data_Menu__WEBPACK_IMPORTED_MODULE_0__.links.forEach(function(link) {\n      menu += `<li class=\"navbar__menu__item\"><a href=\"${link.url}\" class=\"navbar__menu__link\">${link.label}</a></li>`;\n    });\n    menu += `<li class=\"navbar__menu__item bottom-image\"><img src=\"pictures/header_open_menu/character_header.webp\" alt=\"bottom image\"></li>`;\n    menu += `</ul>`;\n    this.renderMenu(menu);\n  }\n  renderMenu(menu) {\n    this.menuContainer.innerHTML = menu;\n  }\n  bindMenuEvents() {\n    const hamburger = document.querySelector(\".hamburger\");\n    hamburger.addEventListener(\"click\", () => {\n      hamburger.classList.toggle(\"active\");\n      this.html.classList.toggle(\"has-menu-opened\");\n    });\n    this.navLinks.forEach((n) => n.addEventListener(\"click\", () => {\n      hamburger.classList.remove(\"active\");\n      this.html.classList.remove(\"has-menu-opened\");\n    }));\n  }\n}\n\n\n//# sourceURL=webpack://Afec_starter_kit/./assets/scripts/components/Navigation.js?");

/***/ }),

/***/ "./assets/scripts/components/Poster.js":
/*!*********************************************!*\
  !*** ./assets/scripts/components/Poster.js ***!
  \*********************************************/
/***/ (() => {

eval("function handleParallaxEffect(selector, speedFactor) {\n  const scrollY = window.scrollY;\n  const parallaxElement = document.querySelector(selector);\n  if (parallaxElement) {\n    parallaxElement.style.transform = `translateY(${scrollY * speedFactor}px)`;\n  }\n}\ndocument.addEventListener(\"scroll\", () => {\n  handleParallaxEffect(\".poster__picture\", 0.6);\n  handleParallaxEffect(\".poster__pictureform\", 0.5);\n});\n\n\n//# sourceURL=webpack://Afec_starter_kit/./assets/scripts/components/Poster.js?");

/***/ }),

/***/ "./assets/scripts/data/Menu.js":
/*!*************************************!*\
  !*** ./assets/scripts/data/Menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   links: () => (/* binding */ links)\n/* harmony export */ });\nlet links = [\n  {\n    label: \"Builds\",\n    url: \"builds.html\"\n  },\n  {\n    label: \"TierLists\",\n    url: \"tierlists.html\"\n  },\n  {\n    label: \"Patch Note\",\n    url: \"patchnote.html\"\n  },\n  {\n    label: \"Encyclopedia\",\n    url: \"encyclopedia.html\"\n  },\n  {\n    label: \"Login\",\n    url: \"login.html\"\n  }\n];\n\n\n//# sourceURL=webpack://Afec_starter_kit/./assets/scripts/data/Menu.js?");

/***/ }),

/***/ "./assets/styles/base.scss":
/*!*********************************!*\
  !*** ./assets/styles/base.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Afec_starter_kit/./assets/styles/base.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./assets/scripts/base.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/styles/base.scss");
/******/ 	
/******/ })()
;