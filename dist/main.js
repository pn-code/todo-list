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

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ generateDOM)\n/* harmony export */ });\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\n\nfunction generateDOM(){\n\nconst tasksArr = [];\n\nconst body = document.querySelector(\"body\")\n\nconst content = document.createElement(\"div\");\nbody.append(content);\n\nconst contentTitle = document.createElement(\"h1\")\ncontentTitle.innerText = \"To-Do List\"\ncontent.append(contentTitle);\n\n//Content Containers\n\nconst inputContainer = document.createElement(\"div\");\ncontent.append(inputContainer);\n\nconst todoContainer = document.createElement(\"ul\");\ncontent.append(todoContainer);\n\n//inputs\nconst inputTask = document.createElement(\"input\");\ninputTask.placeholder = \"task\";\ninputContainer.append(inputTask);\n\nconst inputDueDate = document.createElement(\"input\");\ninputDueDate.placeholder = \"due date\";\ninputContainer.append(inputDueDate);\n\nconst inputPriority = document.createElement(\"input\");\ninputPriority.placeholder = \"priority\";\ninputContainer.append(inputPriority);\n\n//add button\n\nconst addBtn = document.createElement(\"button\");\naddBtn.innerText = \"ADD\";\ninputContainer.append(addBtn);\n\n//add button functionality:\n\naddBtn.addEventListener(\"click\", () => {\n    const newTask = //creates task via factory function\n        (0,_tasks__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(inputTask.value, inputDueDate.value, inputPriority.value);\n    tasksArr.push(newTask.info()); //pushes to tasksArr\n    todoContainer.innerText = \"\"; //clears content before loading tasksArr\n    tasksArr.map((item) => { // displays tasksArr as list\n        const taskItem = document.createElement(\"li\");\n        taskItem.innerText = item;\n        todoContainer.append(taskItem);\n\n        const removeBtn = document.createElement(\"button\")\n        removeBtn.innerText = \"X\"\n        taskItem.append(removeBtn)\n\n        removeBtn.addEventListener(\"click\", () => {\n            //remove from array\n            tasksArr.splice(\n            tasksArr.indexOf(item), 1\n            );\n            //remove from display\n            taskItem.innerText = \"\";\n\n        })\n    });\n})\n\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/DOM.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\n\nconst tasksArr = [];\n\n(0,_DOM__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ taskFactory)\n/* harmony export */ });\n//handles task creation\nfunction taskFactory(task, dueDate, priority){\n    const info = () => \n        task + \" due on \" + dueDate + \" with priority level: \" + priority;\n    return {task, dueDate, priority, info};\n}\n\n\n//# sourceURL=webpack://todo-list/./src/tasks.js?");

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