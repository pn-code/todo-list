/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ generateDOM)\n/* harmony export */ });\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\r\n\r\nfunction generateDOM() {\r\n    const tasksArr = [];\r\n\r\n    // Content Containers\r\n    const todoContainer = document.getElementById(\"todo-container\")\r\n\r\n    // INPUTS\r\n    const inputTask = document.getElementById(\"task-input\")\r\n    const inputDate = document.getElementById(\"date-input\");\r\n    const inputPriority = document.getElementById(\"priority-input\");\r\n\r\n    // add button\r\n    const addBtn = document.getElementById(\"add-btn\");\r\n\r\n    // add button functionality:\r\n    addBtn.addEventListener(\"click\", () => {\r\n        // creates task via factory function\r\n        if ( inputTask.value !== \"\" ){\r\n            const newTask = (0,_tasks__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( inputTask.value, inputDate.value, inputPriority.value );\r\n            tasksArr.push(newTask.info());  // pushes to tasksArr\r\n            todoContainer.innerText = \"\";   // clears content before loading tasksArr\r\n            inputTask.value = \"\"\r\n            inputDate.value = \"\"\r\n        } else {\r\n            alert(\"Please enter a valid task.\")\r\n        }\r\n\r\n        // displays tasksArr as list\r\n        tasksArr.map( item => { \r\n            const taskItem = document.createElement(\"li\");\r\n            taskItem.innerText = item;\r\n            todoContainer.append(taskItem);\r\n\r\n            //remove button\r\n            const removeBtn = document.createElement(\"button\")\r\n            removeBtn.innerText = \"X\"\r\n            taskItem.append(removeBtn)\r\n\r\n            //remove button functionality:\r\n            removeBtn.addEventListener(\"click\", () => {\r\n                tasksArr.splice(tasksArr.indexOf(item), 1);\r\n                taskItem.remove()\r\n            })\r\n\r\n            //edit button\r\n            const editBtn = document.createElement(\"button\")\r\n            editBtn.innerText = \"EDIT\"\r\n            taskItem.append(editBtn)\r\n\r\n            //edit button functionality\r\n            editBtn.addEventListener(\"click\", () => {\r\n                console.log(tasksArr)\r\n            })\r\n        });\r\n    })\r\n\r\n};\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ taskFactory)\n/* harmony export */ });\nfunction taskFactory(task, dueDate, priority){\r\n    const info = () => ( `${task} by ${dueDate} having ${priority} priority.` );\r\n\r\n    return { task, dueDate, priority, info };\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/tasks.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;