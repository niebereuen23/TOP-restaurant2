/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact_page.js":
/*!*****************************!*\
  !*** ./src/contact_page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_images_peepoClown_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/peepoClown.png */ \"./src/assets/images/peepoClown.png\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(target) {\n   \n   const header = document.createElement('h1');\n   const card = document.createElement('div');\n   const imgDiv = document.createElement('div');\n   const img = document.createElement('img');\n   const cardText = document.createElement('p');\n\n   header.textContent = 'Contact Us';\n   cardText.innerHTML = 'Pepe Laugh<br>912-3456789<br>pepelaugh@emote.com';\n   img.src = _assets_images_peepoClown_png__WEBPACK_IMPORTED_MODULE_0__;\n\n   imgDiv.appendChild(img);\n   card.appendChild(cardText);\n\n   return target.append(header, card, imgDiv);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFjdF9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXVEOztBQUV2RCw2QkFBZSxvQ0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsMERBQVU7O0FBRXZCO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC1yZXN0YXVyYW50Mi8uL3NyYy9jb250YWN0X3BhZ2UuanM/ZWYyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGVlcG9DbG93biBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL3BlZXBvQ2xvd24ucG5nXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odGFyZ2V0KSB7XG4gICBcbiAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICBjb25zdCBpbWdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgY29uc3QgY2FyZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzJztcbiAgIGNhcmRUZXh0LmlubmVySFRNTCA9ICdQZXBlIExhdWdoPGJyPjkxMi0zNDU2Nzg5PGJyPnBlcGVsYXVnaEBlbW90ZS5jb20nO1xuICAgaW1nLnNyYyA9IHBlZXBvQ2xvd247XG5cbiAgIGltZ0Rpdi5hcHBlbmRDaGlsZChpbWcpO1xuICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkVGV4dCk7XG5cbiAgIHJldHVybiB0YXJnZXQuYXBwZW5kKGhlYWRlciwgY2FyZCwgaW1nRGl2KTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contact_page.js\n");

/***/ }),

/***/ "./src/helper_function.js":
/*!********************************!*\
  !*** ./src/helper_function.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   glueFunction: () => (/* binding */ glueFunction)\n/* harmony export */ });\n// Sticks together the event needed to trigger a button, to trigger a function in a target in HTML\nfunction glueFunction(event, button, funct, tagFunctTarget) {\n   button.addEventListener(event, () => {\n      tagFunctTarget.textContent = '';\n      funct(tagFunctTarget);\n   });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGVscGVyX2Z1bmN0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQyLy4vc3JjL2hlbHBlcl9mdW5jdGlvbi5qcz8yNGVhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFN0aWNrcyB0b2dldGhlciB0aGUgZXZlbnQgbmVlZGVkIHRvIHRyaWdnZXIgYSBidXR0b24sIHRvIHRyaWdnZXIgYSBmdW5jdGlvbiBpbiBhIHRhcmdldCBpbiBIVE1MXG5leHBvcnQgZnVuY3Rpb24gZ2x1ZUZ1bmN0aW9uKGV2ZW50LCBidXR0b24sIGZ1bmN0LCB0YWdGdW5jdFRhcmdldCkge1xuICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsICgpID0+IHtcbiAgICAgIHRhZ0Z1bmN0VGFyZ2V0LnRleHRDb250ZW50ID0gJyc7XG4gICAgICBmdW5jdCh0YWdGdW5jdFRhcmdldCk7XG4gICB9KTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/helper_function.js\n");

/***/ }),

/***/ "./src/home_page.js":
/*!**************************!*\
  !*** ./src/home_page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_images_DALLE_Dulce_Oasis_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/DALLE-Dulce-Oasis.webp */ \"./src/assets/images/DALLE-Dulce-Oasis.webp\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(target) {\n   const imgDiv = document.createElement('div');\n   const img = document.createElement('img');\n   const div2 = document.createElement('div');\n   const p = document.createElement('p');\n\n   imgDiv.appendChild(img);\n   img.src = _assets_images_DALLE_Dulce_Oasis_webp__WEBPACK_IMPORTED_MODULE_0__;\n   div2.textContent = 'Dulce Oasis';\n   p.textContent = 'Welcome to the a cringy world of delicious food prepared keeping the highest standards for cleanness and freshness';\n\n   return target.append(div2, p, imgDiv);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZV9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWdFOztBQUVoRSw2QkFBZSxvQ0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsa0VBQVU7QUFDdkI7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQyLy4vc3JjL2hvbWVfcGFnZS5qcz9lZDRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkdWxjZU9hc2lzIGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvREFMTEUtRHVsY2UtT2FzaXMud2VicFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih0YXJnZXQpIHtcbiAgIGNvbnN0IGltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICBpbWdEaXYuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgIGltZy5zcmMgPSBkdWxjZU9hc2lzO1xuICAgZGl2Mi50ZXh0Q29udGVudCA9ICdEdWxjZSBPYXNpcyc7XG4gICBwLnRleHRDb250ZW50ID0gJ1dlbGNvbWUgdG8gdGhlIGEgY3Jpbmd5IHdvcmxkIG9mIGRlbGljaW91cyBmb29kIHByZXBhcmVkIGtlZXBpbmcgdGhlIGhpZ2hlc3Qgc3RhbmRhcmRzIGZvciBjbGVhbm5lc3MgYW5kIGZyZXNobmVzcyc7XG5cbiAgIHJldHVybiB0YXJnZXQuYXBwZW5kKGRpdjIsIHAsIGltZ0Rpdik7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/home_page.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home_page */ \"./src/home_page.js\");\n/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact_page */ \"./src/contact_page.js\");\n/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu_page */ \"./src/menu_page.js\");\n/* harmony import */ var _helper_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper_function */ \"./src/helper_function.js\");\n\n\n\n\n\n\n// Selectors\nconst contactButton = document.querySelector('#contact_button');\nconst homeButton = document.querySelector('#home_button');\nconst menuButton = document.querySelector('#menu_button');\n\n// HTML target for display\nconst contentIdDiv = document.querySelector('#content');\n\n// Add functionality to tab buttons\n(0,_helper_function__WEBPACK_IMPORTED_MODULE_3__.glueFunction)('click', homeButton, _home_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"], contentIdDiv);\n(0,_helper_function__WEBPACK_IMPORTED_MODULE_3__.glueFunction)('click', contactButton, _contact_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"], contentIdDiv);\n(0,_helper_function__WEBPACK_IMPORTED_MODULE_3__.glueFunction)('click', menuButton, _menu_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"], contentIdDiv);\n\n// Display initial page: home\n(0,_home_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(contentIdDiv);\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBeUM7QUFDRTtBQUNOO0FBQ1k7OztBQUdqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsOERBQVksc0JBQXNCLGtEQUFjO0FBQ2hELDhEQUFZLHlCQUF5QixxREFBYTtBQUNsRCw4REFBWSxzQkFBc0Isa0RBQVU7O0FBRTVDO0FBQ0Esc0RBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudDIvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9hZEhvbWVQYWdlVG8gZnJvbSBcIi4vaG9tZV9wYWdlXCI7XG5pbXBvcnQgbG9hZENvbnRhY3RUbyBmcm9tIFwiLi9jb250YWN0X3BhZ2VcIjtcbmltcG9ydCBsb2FkTWVudVRvIGZyb20gXCIuL21lbnVfcGFnZVwiO1xuaW1wb3J0IHsgZ2x1ZUZ1bmN0aW9uIH0gZnJvbSBcIi4vaGVscGVyX2Z1bmN0aW9uXCI7XG5cblxuLy8gU2VsZWN0b3JzXG5jb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RfYnV0dG9uJyk7XG5jb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWVfYnV0dG9uJyk7XG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnVfYnV0dG9uJyk7XG5cbi8vIEhUTUwgdGFyZ2V0IGZvciBkaXNwbGF5XG5jb25zdCBjb250ZW50SWREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4vLyBBZGQgZnVuY3Rpb25hbGl0eSB0byB0YWIgYnV0dG9uc1xuZ2x1ZUZ1bmN0aW9uKCdjbGljaycsIGhvbWVCdXR0b24sIGxvYWRIb21lUGFnZVRvLCBjb250ZW50SWREaXYpO1xuZ2x1ZUZ1bmN0aW9uKCdjbGljaycsIGNvbnRhY3RCdXR0b24sIGxvYWRDb250YWN0VG8sIGNvbnRlbnRJZERpdik7XG5nbHVlRnVuY3Rpb24oJ2NsaWNrJywgbWVudUJ1dHRvbiwgbG9hZE1lbnVUbywgY29udGVudElkRGl2KTtcblxuLy8gRGlzcGxheSBpbml0aWFsIHBhZ2U6IGhvbWVcbmxvYWRIb21lUGFnZVRvKGNvbnRlbnRJZERpdik7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/menu_page.js":
/*!**************************!*\
  !*** ./src/menu_page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(target) {\n   const text = document.createElement('p');\n   text.textContent = 'We are out of business, no menu available :(';\n   target.append(text);\n\n   return target;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudV9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSw2QkFBZSxvQ0FBUztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC1yZXN0YXVyYW50Mi8uL3NyYy9tZW51X3BhZ2UuanM/MWQyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih0YXJnZXQpIHtcbiAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICB0ZXh0LnRleHRDb250ZW50ID0gJ1dlIGFyZSBvdXQgb2YgYnVzaW5lc3MsIG5vIG1lbnUgYXZhaWxhYmxlIDooJztcbiAgIHRhcmdldC5hcHBlbmQodGV4dCk7XG5cbiAgIHJldHVybiB0YXJnZXQ7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/menu_page.js\n");

/***/ }),

/***/ "./src/assets/images/DALLE-Dulce-Oasis.webp":
/*!**************************************************!*\
  !*** ./src/assets/images/DALLE-Dulce-Oasis.webp ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e803be13410b16fe3b24.webp";

/***/ }),

/***/ "./src/assets/images/peepoClown.png":
/*!******************************************!*\
  !*** ./src/assets/images/peepoClown.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5bca9ae652ec91cc9591.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;