/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./classes/Chip8.js":
/*!**************************!*\
  !*** ./classes/Chip8.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });

/*
 * Author: Samuel Stidham
 * Project: Chip-8 Emulator
 * 
 * I used the following websites when building this emulator (used them for reference):
 *  - http://www.multigesture.net/articles/how-to-write-an-emulator-chip-8-interpreter/
 *  - https://en.wikipedia.org/wiki/CHIP-8
 *  - http://devernay.free.fr/hacks/chip8/C8TECH10.HTM
 *  - http://www.multigesture.net/wp-content/uploads/mirror/goldroad/chip8_instruction_set.shtml
 */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Chip8 = function Chip8() {
  _classCallCheck(this, Chip8);

  // Configure the Display - The Chip-8 display area is a total of 2048 pixels (or 64 pixels wide by 32 pixels high). Each
  // pixel of the display will be controlled by using an array.
  this.screenHeight = 32;
  this.screenWidth = 64;
  this.display = new Array(this.screenWidth * this.screenHeight);
  /* ##################
   * ### MEMORY MAP ###
   * ##################
   * 0x000 - 0x1FF -> CHIP-8 Interpreter (Contains font set)
   * 0X050 - 0x0A0 -> Used for the built in 4x5 poxel font set (0 - F)
   * 0x200 - 0xFFF -> Program ROM and work RAM
   */
  // Configure the Memory - The length (or size) of an ArrayBuffer is measured in bytes. Chip-8 uses up to 4K bytes of memory.
  // Convert the 4K bytes into an unsigned 8-bit integer array

  var mem = new ArrayBuffer(0x1000);
  this.memory = new Uint8Array(mem); // The Chip-8 has 16 general purpose registers. The last is used for "carry flag"

  this.V = new Array(0x10); // The Chip-8 has an index register

  this.I = 0x0; // The Chip-8 has a program counter (pc) that starts at memory location 0x200

  this.PC = 0x200; // The system has 16 levels of stack. The stack is used to remember the current location of the program counter before
  // jumping to another location or executing a subroutine. The stack pointer (sp) keeps track of which level of stack is being
  // used

  this.stack = new Array(0x10);
  this.sp = 0x0; // Chip-8 has two timers. They both count down at 60 hertz until they reach 0. The delay timer is used for timing events of games.
  // It's value can be set and read. The sound timer is used for sound effects. When it's value is nonzero, a beeping sound is made.

  this.delayTimer = 0x0;
  this.soundTimer = 0x0;
  this.keys = {};
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chip8);

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_Chip8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Chip8 */ "./classes/Chip8.js");



var myChip8 = new _classes_Chip8__WEBPACK_IMPORTED_MODULE_0__.default();
console.log(myChip8);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map