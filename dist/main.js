/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\nul {\n  padding: 0;\n  list-style: none;\n}\n\n#root,\n#__next {\n  isolation: isolate;\n}\n\n/* <--reset */\n:root {\n  font-size: 24px;\n  --c-muted: var(--sl-input-placeholder-color);\n  --c-border: var(--sl-panel-border-color);\n  --c-groceries: #27ae60;\n  --c-sports: #9b51e0;\n  --c-work: #2f80ed;\n  --c-study: #f2994a;\n}\n\n/* Theme */\n:host,\n.sl-theme-dark {\n  --sl-color-primary-50: var(--sl-color-indigo-50);\n  --sl-color-primary-100: var(--sl-color-indigo-100);\n  --sl-color-primary-200: var(--sl-color-indigo-200);\n  --sl-color-primary-300: var(--sl-color-indigo-300);\n  --sl-color-primary-400: var(--sl-color-indigo-400);\n  --sl-color-primary-500: var(--sl-color-indigo-500);\n  --sl-color-primary-600: var(--sl-color-indigo-600);\n  --sl-color-primary-700: var(--sl-color-indigo-700);\n  --sl-color-primary-800: var(--sl-color-indigo-800);\n  --sl-color-primary-900: var(--sl-color-indigo-900);\n  --sl-color-primary-950: var(--sl-color-indigo-950);\n}\n\n/* Media breakpoints*/\nbody {\n  margin: 0;\n  font-family: \"Roboto\", sans-serif;\n}\n\nh1 {\n  font-size: 1.6rem;\n}\n\np {\n  margin: 0;\n}\n\n.hidden {\n  display: none;\n}\n\n.grid {\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: auto 1fr;\n  grid-template-columns: 1fr;\n}\n\n.flex {\n  display: flex;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header sl-switch {\n  padding-right: 16px;\n}\n.header sl-icon-button {\n  font-size: 1.5rem;\n}\n\n.menu {\n  position: fixed;\n  height: calc(100% - 60px);\n  width: 0;\n  z-index: 10;\n  top: 60px;\n  left: 0;\n  background-color: var(--sl-color-neutral-0);\n  overflow-x: hidden;\n  transition: width 0.5s;\n}\n.menu .close-menu {\n  position: absolute;\n  top: 0;\n  right: 15px;\n}\n.menu sl-menu-item.active-menu-item::part(base) {\n  font-weight: 600;\n  background-color: var(--sl-color-neutral-100);\n  color: var(--sl-color-neutral-1000);\n  opacity: 1;\n}\n.menu sl-menu-item sl-badge {\n  pointer-events: none;\n}\n\n.menu.active-menu {\n  width: 250px;\n  border-right: 1px solid var(--c-border);\n}\n\n.menu-inner {\n  padding-top: 50px;\n}\n\n.todos-pane {\n  flex: 1;\n  padding-inline: 16px;\n  padding-bottom: 20px;\n}\n\n.todos {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sl-spacing-x-small);\n}\n\n.todo-item {\n  display: flex;\n  justify-content: space-between;\n}\n.todo-item:last-of-type {\n  margin-bottom: 15px;\n}\n.todo-item .todo-checkbox {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.todo-item .todo-controls {\n  display: flex;\n  align-items: flex-start;\n}\n.todo-item .due-date {\n  font-size: 0.7rem;\n  color: var(--sl-color-neutral-600);\n}\n\nsl-checkbox[checked]::part(label) {\n  text-decoration: line-through;\n}\n\nsl-badge[data-project]::part(base) {\n  background-color: var(--sl-color-neutral-600);\n}\n\nsl-badge[data-project=Sports]::part(base) {\n  background-color: var(--c-sports);\n}\n\nsl-badge[data-project=Work]::part(base) {\n  background-color: var(--c-work);\n}\n\nsl-badge[data-project=Study]::part(base) {\n  background-color: var(--c-study);\n}\n\nsl-badge[data-project=Groceries]::part(base) {\n  background-color: var(--c-groceries);\n}\n\n.addtodo-form sl-button {\n  display: none;\n}\n\n.addproject-form {\n  padding-left: 1.5rem;\n}\n.addproject-form sl-input::part(base) {\n  border: none;\n  box-shadow: none;\n  background-color: inherit;\n}\n.addproject-form sl-input::part(input) {\n  padding: 0 10px;\n}\n.addproject-form sl-input sl-icon {\n  margin: 0;\n}\n\n.drawer {\n  --size: 450px;\n  --header-spacing: var(--sl-spacing-medium);\n  --body-spacing: var(--sl-spacing-medium);\n  --footer-spacing: var(--sl-spacing-medium);\n}\n.drawer sl-input,\n.drawer sl-select {\n  margin-bottom: 15px;\n}\n\n@media (width > 62em) {\n  :root {\n    font-size: 30px;\n  }\n  .todos-pane {\n    max-width: 800px;\n    padding-inline: 38px;\n  }\n  .header {\n    padding: 0 16px;\n  }\n  .menu {\n    position: relative;\n    height: 100%;\n    width: 0;\n    top: 0;\n    left: 0;\n    border-right: 1px solid var(--c-border);\n  }\n  .menu .close-menu {\n    display: none;\n  }\n  .menu.active-menu {\n    width: 440px;\n  }\n  .menu-inner {\n    padding-top: 100px;\n    padding-left: 100px;\n  }\n  .addtodo-form {\n    display: flex;\n    gap: 10px;\n  }\n  .addtodo-form sl-input {\n    flex: 1;\n  }\n  .addtodo-form sl-button {\n    display: block;\n  }\n  .todo-item .todo-controls {\n    visibility: hidden;\n    opacity: 0;\n    transition: 0.1s ease-out;\n  }\n  .todo-item:hover .todo-controls {\n    visibility: visible;\n    opacity: 1;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n}\r\nbody {\r\n  line-height: 1.5;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\nimg,\r\npicture,\r\nvideo,\r\ncanvas,\r\nsvg {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\np,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  overflow-wrap: break-word;\r\n}\r\nul {\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n#root,\r\n#__next {\r\n  isolation: isolate;\r\n}\r\n/* <--reset */\r\n\r\n:root {\r\n  font-size: 24px;\r\n  --c-muted: var(--sl-input-placeholder-color);\r\n  --c-border: var(--sl-panel-border-color);\r\n  --c-groceries: #27ae60;\r\n  --c-sports: #9b51e0;\r\n  --c-work: #2f80ed;\r\n  --c-study: #f2994a;\r\n}\r\n\r\n/* Theme */\r\n:host,\r\n.sl-theme-dark {\r\n  --sl-color-primary-50: var(--sl-color-indigo-50);\r\n  --sl-color-primary-100: var(--sl-color-indigo-100);\r\n  --sl-color-primary-200: var(--sl-color-indigo-200);\r\n  --sl-color-primary-300: var(--sl-color-indigo-300);\r\n  --sl-color-primary-400: var(--sl-color-indigo-400);\r\n  --sl-color-primary-500: var(--sl-color-indigo-500);\r\n  --sl-color-primary-600: var(--sl-color-indigo-600);\r\n  --sl-color-primary-700: var(--sl-color-indigo-700);\r\n  --sl-color-primary-800: var(--sl-color-indigo-800);\r\n  --sl-color-primary-900: var(--sl-color-indigo-900);\r\n  --sl-color-primary-950: var(--sl-color-indigo-950);\r\n}\r\n\r\n/* Media breakpoints*/\r\n$br-sm: 30em;\r\n$br-md: 48em;\r\n$br-lg: 62em;\r\n$br-xl: 75em;\r\n\r\nbody {\r\n  margin: 0;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\nh1 {\r\n  font-size: 1.6rem;\r\n}\r\n\r\np {\r\n  margin: 0;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.grid {\r\n  min-height: 100vh;\r\n  display: grid;\r\n  grid-template-rows: auto 1fr;\r\n  grid-template-columns: 1fr;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n\r\n  sl-switch {\r\n    padding-right: 16px;\r\n  }\r\n\r\n  sl-icon-button {\r\n    font-size: 1.5rem;\r\n  }\r\n}\r\n\r\n.menu {\r\n  position: fixed;\r\n  height: calc(100% - 60px);\r\n  width: 0;\r\n  z-index: 10;\r\n  top: 60px;\r\n  left: 0;\r\n  background-color: var(--sl-color-neutral-0);\r\n  overflow-x: hidden;\r\n  transition: width 0.5s;\r\n\r\n  .close-menu {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 15px;\r\n  }\r\n\r\n  sl-menu-item.active-menu-item {\r\n    &::part(base) {\r\n      font-weight: 600;\r\n      background-color: var(--sl-color-neutral-100);\r\n      color: var(--sl-color-neutral-1000);\r\n      opacity: 1;\r\n    }\r\n  }\r\n\r\n  sl-menu-item {\r\n    sl-badge {\r\n      pointer-events: none;\r\n    }\r\n  }\r\n}\r\n\r\n.menu.active-menu {\r\n  width: 250px;\r\n  border-right: 1px solid var(--c-border);\r\n}\r\n\r\n.menu-inner {\r\n  padding-top: 50px;\r\n}\r\n\r\n.todos-pane {\r\n  flex: 1;\r\n  padding-inline: 16px;\r\n  padding-bottom: 20px;\r\n}\r\n\r\n.todos {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: var(--sl-spacing-x-small);\r\n}\r\n\r\n.todo-item {\r\n  display: flex;\r\n  justify-content: space-between;\r\n\r\n  &:last-of-type {\r\n    margin-bottom: 15px;\r\n  }\r\n\r\n  .todo-checkbox {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n    gap: 10px;\r\n  }\r\n\r\n  .todo-controls {\r\n    display: flex;\r\n    align-items: flex-start;\r\n  }\r\n\r\n  .due-date {\r\n    font-size: 0.7rem;\r\n    color: var(--sl-color-neutral-600);\r\n  }\r\n}\r\n\r\nsl-checkbox[checked] {\r\n  &::part(label) {\r\n    text-decoration: line-through;\r\n  }\r\n}\r\n\r\nsl-badge[data-project] {\r\n  &::part(base) {\r\n    background-color: var(--sl-color-neutral-600);\r\n  }\r\n}\r\n\r\nsl-badge[data-project='Sports'] {\r\n  &::part(base) {\r\n    background-color: var(--c-sports);\r\n  }\r\n}\r\n\r\nsl-badge[data-project='Work'] {\r\n  &::part(base) {\r\n    background-color: var(--c-work);\r\n  }\r\n}\r\n\r\nsl-badge[data-project='Study'] {\r\n  &::part(base) {\r\n    background-color: var(--c-study);\r\n  }\r\n}\r\n\r\nsl-badge[data-project='Groceries'] {\r\n  &::part(base) {\r\n    background-color: var(--c-groceries);\r\n  }\r\n}\r\n\r\n.addtodo-form {\r\n  sl-button {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.addproject-form {\r\n  // width of sl-menu-item span part=\"checked-icon\"\r\n  padding-left: 1.5rem;\r\n\r\n  sl-input {\r\n    &::part(base) {\r\n      border: none;\r\n      box-shadow: none;\r\n      background-color: inherit;\r\n    }\r\n\r\n    &::part(input) {\r\n      padding: 0 10px;\r\n    }\r\n\r\n    sl-icon {\r\n      margin: 0;\r\n    }\r\n  }\r\n}\r\n\r\n.drawer {\r\n  --size: 450px;\r\n  --header-spacing: var(--sl-spacing-medium);\r\n  --body-spacing: var(--sl-spacing-medium);\r\n  --footer-spacing: var(--sl-spacing-medium);\r\n\r\n  sl-input,\r\n  sl-select {\r\n    margin-bottom: 15px;\r\n  }\r\n}\r\n\r\n@media (width > $br-lg) {\r\n  :root {\r\n    font-size: 30px;\r\n  }\r\n\r\n  .todos-pane {\r\n    max-width: 800px;\r\n    padding-inline: 38px;\r\n  }\r\n\r\n  .header {\r\n    padding: 0 16px;\r\n  }\r\n\r\n  .menu {\r\n    position: relative;\r\n    height: 100%;\r\n    width: 0;\r\n    top: 0;\r\n    left: 0;\r\n    border-right: 1px solid var(--c-border);\r\n\r\n    .close-menu {\r\n      display: none;\r\n    }\r\n  }\r\n\r\n  .menu.active-menu {\r\n    width: 440px;\r\n  }\r\n\r\n  .menu-inner {\r\n    padding-top: 100px;\r\n    padding-left: 100px;\r\n  }\r\n\r\n  .addtodo-form {\r\n    display: flex;\r\n    gap: 10px;\r\n\r\n    sl-input {\r\n      flex: 1;\r\n    }\r\n\r\n    sl-button {\r\n      display: block;\r\n    }\r\n  }\r\n\r\n  .todo-item {\r\n    .todo-controls {\r\n      visibility: hidden;\r\n      opacity: 0;\r\n      transition: 0.1s ease-out;\r\n    }\r\n\r\n    &:hover .todo-controls {\r\n      visibility: visible;\r\n      opacity: 1;\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");



const App = (TodoList) => {
  /* Menu */
  const $menu = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.qs)('.menu');
  const $menuList = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.qs)('#menuList');
  const $menuBtn = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.qs)('#menuBtn');
  const $closeMenu = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.qs)('#closeMenu');
  /* Todo List */
  const $todosPane = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.qs)('#todosPane');
  const $todos = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.qs)('#todos');
  const $h1 = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.qs)('h1', $todosPane);
  const $form = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.qs)('#addTodoForm');
  const $input = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.qs)('#addTodo');
  const $addProjectForm = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.qs)('#addProjectForm');
  const $addProjectInput = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.qs)('#addProject');
  const $todosMsg = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.qs)('#todosMessage');
  /* Edit Drawer */
  const $drawer = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.qs)('.drawer');
  const $saveEditBtn = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.qs)('sl-button[value="save"]', $drawer);
  const $editForm = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.qs)('#editForm', $drawer);
  const $titleInput = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.qs)('sl-input[name="title"]', $editForm);
  const $projectSelect = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.qs)('sl-select[name="project"]', $editForm);
  const $dueDateInput = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.qs)('sl-input[name="dueDate"]', $editForm);

  const projects = {
    all: 'All Tasks',
  };
  // Selected project
  let selected = projects.all;

  function countIncompleteByProject(project) {
    return TodoList.todos.filter(
      (todo) => todo.project === project && !todo.complete
    ).length;
  }

  /** Save to localStorage */
  const save = () => {
    localStorage.setItem('todos', JSON.stringify(TodoList));
  };

  /** Render projects menu */
  function renderProjects() {
    // console.log(TodoList.projects);

    // Delete all nodes
    $menuList.innerHTML = '';

    // Add All Tasks tab
    const $allTasksMenu = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createMenuItem)(projects.all, selected);
    $allTasksMenu.dataset.projectId = projects.all;
    $menuList.append($allTasksMenu);

    // Create menu item for each project
    TodoList.projects.forEach((project) => {
      // Add count of incomplete todos
      const count = countIncompleteByProject(project);
      const item = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createMenuItem)(project, selected, count);
      item.dataset.projectId = project;
      $menuList.append(item);
    });
  }

  /** Render Todo List */
  function renderTodos(todos = []) {
    // console.log(TodoList.todos);

    // Delete all nodes
    $todos.innerHTML = '';

    // Show default message
    $todosMsg.classList.add('hidden');
    if (todos.length === 0) {
      $todosMsg.textContent = 'Nothing to do! Add a task?';
      $todosMsg.classList.remove('hidden');
      return;
    }

    // Create todo item nodes for each todo in state
    todos.forEach((todo) => {
      const { id, project } = todo;

      // Add badge if selected All Tasks
      const selectedProject = selected === projects.all ? project : null;

      const li = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createTodoItem)({ ...todo, project: selectedProject });
      li.dataset.id = id;

      // Append nodes to the todo list
      $todos.append(li);
    });

    $input.focus();
  }

  /** Render App */
  function render() {
    renderProjects();

    if (selected === null) {
      $todosPane.classList.add('hidden');
      return;
    }

    $h1.textContent = selected;
    $todosPane.classList.remove('hidden');

    if (selected === projects.all) {
      // Display All Todos
      renderTodos(TodoList.todos);
    } else {
      // Display Filtered by Project Todos
      const filtered = TodoList.filterByProject(selected);
      renderTodos(filtered);
    }

    $input.focus();
  }

  // Event handlers
  function handleMenuChange(e) {
    if (!e.target.dataset.projectId) {
      return;
    }

    selected = e.target.dataset.projectId;

    render();
    // Close menu on smaller screens
    if (window.innerWidth < 960) {
      closeMenu();
    }
  }

  function handleAddTodo(e) {
    e.preventDefault();
    const { value } = $input;
    if (value.trim() === '') {
      return;
    }

    // If selected tab is All Tasks
    // Assign project property to empty string
    const project = selected === projects.all ? '' : selected;
    const todo = { id: (0,nanoid__WEBPACK_IMPORTED_MODULE_1__.nanoid)(10), title: value, project };
    TodoList.addTodo(todo);
    save();
    render();
    $input.value = '';
  }

  function handleDeleteTodo(e) {
    if (!e.target.matches('[data-delete]')) {
      return;
    }

    const $todoItem = e.target.closest('.todo-item');
    const { id } = $todoItem.dataset;
    $todoItem.remove();
    TodoList.removeTodo(id);
    save();
    // Update task count view
    renderProjects();
  }

  function editTodo(id) {
    // Get data from drawer form
    const data = new FormData($editForm);
    const newTodo = Object.fromEntries(data);
    if (newTodo.title.trim() === '') {
      return;
    }

    TodoList.editTodo(id, newTodo);
    save();
    render();
    // Close drawer
    $drawer.hide();
  }

  // On todo edit click
  function handleEditTodo(e) {
    if (!e.target.matches('[data-edit]')) {
      return;
    }

    // Open drawer
    $drawer.show();

    // Add select project options to form
    const options = TodoList.projects
      .map((project) => `<sl-option value="${project}">${project}</sl-option>`)
      .join('');

    $projectSelect.innerHTML = options;

    // Get current todo values
    const $todoItem = e.target.closest('.todo-item');
    const { id } = $todoItem.dataset;

    const todo = TodoList.find(id);
    const { title, project, dueDate } = todo;

    // Populate drawer form inputs with todo data
    $titleInput.value = title;
    $projectSelect.value = project;
    $dueDateInput.value = dueDate;

    // On click Save button
    // update model with new data
    $saveEditBtn.onclick = () => editTodo(id);
  }

  function handleToggleTodo(e) {
    const { id } = e.target.closest('.todo-item').dataset;
    const todo = TodoList.find(id);
    todo.complete = e.target.checked;
    save();
    // Update task count view
    renderProjects();
  }

  function handleAddProject(e) {
    e.preventDefault();
    const { value } = $addProjectInput;
    if (value.trim() === '') {
      return;
    }

    // Add project and select last project
    TodoList.addProject(value);
    save();
    selected = value;
    $addProjectInput.value = '';
    render();
    // Close menu on smaller screens
    if (window.innerWidth < 960) {
      closeMenu();
    }
  }

  function toggleMenu() {
    $menu.classList.toggle('active-menu');
  }

  function closeMenu() {
    $menu.classList.remove('active-menu');
  }

  $menuBtn.onclick = toggleMenu;
  $closeMenu.onclick = closeMenu;

  // Event listeners
  $menuList.addEventListener('click', handleMenuChange);
  $form.addEventListener('submit', handleAddTodo);
  $todos.addEventListener('click', handleDeleteTodo);
  $todos.addEventListener('click', handleEditTodo);
  $todos.addEventListener('sl-change', handleToggleTodo);
  $addProjectForm.addEventListener('submit', handleAddProject);

  // Initial render
  render();

  return {
    render,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");


const defaultData = [
  { title: 'Learn MVC', project: 'Study' },
  {
    title: 'Buy Bananas for the pancakes',
    project: 'Groceries',
    complete: true,
  },
  { title: 'Go to the Gym', project: 'Sports', complete: true },
  { title: 'Prepare roadmap for MVP', project: 'Work' },
  { title: 'Read chapter 3 from Math book', project: 'Study' },
].map((todo) => ({ ...todo, id: (0,nanoid__WEBPACK_IMPORTED_MODULE_0__.nanoid)(10) }));

// Load saves todos from localStorage
const data = localStorage.todos
  ? JSON.parse(localStorage.getItem('todos'))
  : defaultData;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);


/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "createMenuItem": () => (/* binding */ createMenuItem),
/* harmony export */   "createTodoItem": () => (/* binding */ createTodoItem),
/* harmony export */   "qs": () => (/* binding */ qs)
/* harmony export */ });
/** querySelector wrapper
 * @returns { Node } an element from the DOM
 */
function qs(selector, scope) {
  if (scope) {
    return scope.querySelector(selector);
  }
  return document.querySelector(selector);
}

/** Create an element with an optional CSS class
 * @returns { Node } an element
 */
function createElement(tag, className) {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);

  return element;
}

// Create View components
function createMenuItem(title, selected, count) {
  const item = createElement('sl-menu-item');
  item.textContent = title;

  // Set active menu element
  if (title == selected) {
    item.classList.add('active-menu-item');
  }

  // Add count todos badge
  if (count > 0) {
    item.insertAdjacentHTML(
      'beforeend',
      `<sl-badge slot="suffix" variant="neutral" pill>${count}</sl-badge>`
    );
  }

  return item;
}

function createTodoItem({ title, complete, project, dueDate }) {
  const li = createElement('li', 'todo-item');

  const html = /*html*/ `
    <div class="todo-checkbox">
      <sl-checkbox ${complete && 'checked'} >${title}</sl-checkbox>
      ${
        project
          ? `<sl-badge slot="suffix" data-project="${project}" pill>${project}</sl-badge>`
          : ''
      }
      ${
        dueDate
          ? `<span class="due-date">Due 
              <sl-format-date
                weekday="short"
                month="long" 
                day="numeric"
                date=${dueDate}
              ></sl-format-date
              </span>`
          : ''
      }      
    </div>
    <div class="todo-controls">
      <sl-icon-button name="pencil-square" label="Edit" data-edit></sl-icon-button>
      <sl-icon-button name="x-lg" label="Delete" data-delete></sl-icon-button>
    </div>
  `;

  li.innerHTML = html;

  return li;
}


/***/ }),

/***/ "./src/domain/Todo.js":
/*!****************************!*\
  !*** ./src/domain/Todo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
  constructor({ id, title, project, dueDate, complete = false }) {
    this.id = id;
    this.title = title;
    this.project = project;
    this.dueDate = dueDate;
    this.complete = complete;
  }
}


/***/ }),

/***/ "./src/domain/TodoList.js":
/*!********************************!*\
  !*** ./src/domain/TodoList.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoList)
/* harmony export */ });
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo */ "./src/domain/Todo.js");


class TodoList {
  // Initialize with an optional array of data
  constructor(dataArr) {
    if (dataArr) {
      // map it into an array of Todo objects
      this.todos = dataArr.map((todo) => new _Todo__WEBPACK_IMPORTED_MODULE_0__["default"](todo));
    } else {
      this.todos = [];
    }

    this.projects = this.todos.reduce(
      (values, todo) => {
        if (todo.project && !values.includes(todo.project)) {
          values.push(todo.project);
        }
        return values;
      },
      // Default projects can not be deleted
      ['Work', 'Study', 'Sports', 'Groceries']
    );
  }

  addProject(title) {
    this.projects.push(title);
  }

  addTodo(task) {
    if (!task) return;

    const todo = new _Todo__WEBPACK_IMPORTED_MODULE_0__["default"](task);
    this.todos.push(todo);
  }

  find(id) {
    return this.todos.find((todo) => todo.id === id);
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  editTodo(id, newTodo) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? new _Todo__WEBPACK_IMPORTED_MODULE_0__["default"]({ ...todo, ...newTodo }) : todo
    );
  }

  removeCompleted() {
    this.todos = this.todos.filter((todo) => !todo.complete);
  }

  filterByProject(project) {
    return this.todos.filter((todo) => todo.project === project);
  }

  /**
   * Converts this model into a simple object for
   * JSON serialization
   */
  toJSON() {
    return this.todos;
  }
}


/***/ }),

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/***/ (() => {

(() => {
  const themeSwitch = document.querySelector('#theme');
  const icon = themeSwitch.querySelector('sl-icon');
  const root = document.documentElement;

  function setDark() {
    root.classList.add('sl-theme-dark');
    icon.name = 'moon-fill';
    icon.style.color = '#818cf8';
  }

  function setLight() {
    root.classList.remove('sl-theme-dark');
    icon.name = 'sun';
    icon.style.color = '#eab308';
  }

  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    themeSwitch.checked = true;
    setDark();
  }

  themeSwitch.addEventListener('sl-change', (e) => {
    const { checked } = e.target;
    let theme = 'light';

    if (checked) {
      // Add Dark theme
      theme = 'dark';
      setDark();
    } else {
      // Light theme
      setLight();
    }

    localStorage.setItem('theme', theme);
  });
})();


/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customAlphabet": () => (/* binding */ customAlphabet),
/* harmony export */   "customRandom": () => (/* binding */ customRandom),
/* harmony export */   "nanoid": () => (/* binding */ nanoid),
/* harmony export */   "random": () => (/* binding */ random),
/* harmony export */   "urlAlphabet": () => (/* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet)
/* harmony export */ });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");

let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  let step = -~((1.6 * mask * defaultSize) / alphabet.length)
  return (size = defaultSize) => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let j = step
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size = 21) =>
  customRandom(alphabet, size, random)
let nanoid = (size = 21) =>
  crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
    byte &= 63
    if (byte < 36) {
      id += byte.toString(36)
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte > 62) {
      id += '-'
    } else {
      id += '_'
    }
    return id
  }, '')


/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "urlAlphabet": () => (/* binding */ urlAlphabet)
/* harmony export */ });
const urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _domain_TodoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domain/TodoList */ "./src/domain/TodoList.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme */ "./src/theme.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_theme__WEBPACK_IMPORTED_MODULE_4__);






/* Init App */
const todoList = new _domain_TodoList__WEBPACK_IMPORTED_MODULE_1__["default"](_data__WEBPACK_IMPORTED_MODULE_3__["default"]);
const app = (0,_App__WEBPACK_IMPORTED_MODULE_2__["default"])(todoList);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLFVBQVUsTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxXQUFXLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxN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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksVUFBVTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q29EO0FBQzlDO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDSTtBQUNQOzs7Ozs7O1VDREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNtQjtBQUNqQjtBQUNFO0FBQ1Q7QUFDakI7QUFDQTtBQUNBLHFCQUFxQix3REFBUSxDQUFDLDZDQUFJO0FBQ2xDLFlBQVksZ0RBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvQXBwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbWFpbi9Ub2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21haW4vVG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RoZW1lLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9uYW5vaWQvaW5kZXguYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvbmFub2lkL3VybC1hbHBoYWJldC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuXFxuaW1nLFxcbnBpY3R1cmUsXFxudmlkZW8sXFxuY2FudmFzLFxcbnN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG5wLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbnVsIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4jcm9vdCxcXG4jX19uZXh0IHtcXG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcXG59XFxuXFxuLyogPC0tcmVzZXQgKi9cXG46cm9vdCB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICAtLWMtbXV0ZWQ6IHZhcigtLXNsLWlucHV0LXBsYWNlaG9sZGVyLWNvbG9yKTtcXG4gIC0tYy1ib3JkZXI6IHZhcigtLXNsLXBhbmVsLWJvcmRlci1jb2xvcik7XFxuICAtLWMtZ3JvY2VyaWVzOiAjMjdhZTYwO1xcbiAgLS1jLXNwb3J0czogIzliNTFlMDtcXG4gIC0tYy13b3JrOiAjMmY4MGVkO1xcbiAgLS1jLXN0dWR5OiAjZjI5OTRhO1xcbn1cXG5cXG4vKiBUaGVtZSAqL1xcbjpob3N0LFxcbi5zbC10aGVtZS1kYXJrIHtcXG4gIC0tc2wtY29sb3ItcHJpbWFyeS01MDogdmFyKC0tc2wtY29sb3ItaW5kaWdvLTUwKTtcXG4gIC0tc2wtY29sb3ItcHJpbWFyeS0xMDA6IHZhcigtLXNsLWNvbG9yLWluZGlnby0xMDApO1xcbiAgLS1zbC1jb2xvci1wcmltYXJ5LTIwMDogdmFyKC0tc2wtY29sb3ItaW5kaWdvLTIwMCk7XFxuICAtLXNsLWNvbG9yLXByaW1hcnktMzAwOiB2YXIoLS1zbC1jb2xvci1pbmRpZ28tMzAwKTtcXG4gIC0tc2wtY29sb3ItcHJpbWFyeS00MDA6IHZhcigtLXNsLWNvbG9yLWluZGlnby00MDApO1xcbiAgLS1zbC1jb2xvci1wcmltYXJ5LTUwMDogdmFyKC0tc2wtY29sb3ItaW5kaWdvLTUwMCk7XFxuICAtLXNsLWNvbG9yLXByaW1hcnktNjAwOiB2YXIoLS1zbC1jb2xvci1pbmRpZ28tNjAwKTtcXG4gIC0tc2wtY29sb3ItcHJpbWFyeS03MDA6IHZhcigtLXNsLWNvbG9yLWluZGlnby03MDApO1xcbiAgLS1zbC1jb2xvci1wcmltYXJ5LTgwMDogdmFyKC0tc2wtY29sb3ItaW5kaWdvLTgwMCk7XFxuICAtLXNsLWNvbG9yLXByaW1hcnktOTAwOiB2YXIoLS1zbC1jb2xvci1pbmRpZ28tOTAwKTtcXG4gIC0tc2wtY29sb3ItcHJpbWFyeS05NTA6IHZhcigtLXNsLWNvbG9yLWluZGlnby05NTApO1xcbn1cXG5cXG4vKiBNZWRpYSBicmVha3BvaW50cyovXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZ3JpZCB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxufVxcblxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5oZWFkZXIgc2wtc3dpdGNoIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XFxufVxcbi5oZWFkZXIgc2wtaWNvbi1idXR0b24ge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5tZW51IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjBweCk7XFxuICB3aWR0aDogMDtcXG4gIHotaW5kZXg6IDEwO1xcbiAgdG9wOiA2MHB4O1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNsLWNvbG9yLW5ldXRyYWwtMCk7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzO1xcbn1cXG4ubWVudSAuY2xvc2UtbWVudSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMTVweDtcXG59XFxuLm1lbnUgc2wtbWVudS1pdGVtLmFjdGl2ZS1tZW51LWl0ZW06OnBhcnQoYmFzZSkge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNsLWNvbG9yLW5ldXRyYWwtMTAwKTtcXG4gIGNvbG9yOiB2YXIoLS1zbC1jb2xvci1uZXV0cmFsLTEwMDApO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuLm1lbnUgc2wtbWVudS1pdGVtIHNsLWJhZGdlIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ubWVudS5hY3RpdmUtbWVudSB7XFxuICB3aWR0aDogMjUwcHg7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1jLWJvcmRlcik7XFxufVxcblxcbi5tZW51LWlubmVyIHtcXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xcbn1cXG5cXG4udG9kb3MtcGFuZSB7XFxuICBmbGV4OiAxO1xcbiAgcGFkZGluZy1pbmxpbmU6IDE2cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnRvZG9zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiB2YXIoLS1zbC1zcGFjaW5nLXgtc21hbGwpO1xcbn1cXG5cXG4udG9kby1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi50b2RvLWl0ZW06bGFzdC1vZi10eXBlIHtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcbi50b2RvLWl0ZW0gLnRvZG8tY2hlY2tib3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDEwcHg7XFxufVxcbi50b2RvLWl0ZW0gLnRvZG8tY29udHJvbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG4udG9kby1pdGVtIC5kdWUtZGF0ZSB7XFxuICBmb250LXNpemU6IDAuN3JlbTtcXG4gIGNvbG9yOiB2YXIoLS1zbC1jb2xvci1uZXV0cmFsLTYwMCk7XFxufVxcblxcbnNsLWNoZWNrYm94W2NoZWNrZWRdOjpwYXJ0KGxhYmVsKSB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuc2wtYmFkZ2VbZGF0YS1wcm9qZWN0XTo6cGFydChiYXNlKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zbC1jb2xvci1uZXV0cmFsLTYwMCk7XFxufVxcblxcbnNsLWJhZGdlW2RhdGEtcHJvamVjdD1TcG9ydHNdOjpwYXJ0KGJhc2UpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWMtc3BvcnRzKTtcXG59XFxuXFxuc2wtYmFkZ2VbZGF0YS1wcm9qZWN0PVdvcmtdOjpwYXJ0KGJhc2UpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWMtd29yayk7XFxufVxcblxcbnNsLWJhZGdlW2RhdGEtcHJvamVjdD1TdHVkeV06OnBhcnQoYmFzZSkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYy1zdHVkeSk7XFxufVxcblxcbnNsLWJhZGdlW2RhdGEtcHJvamVjdD1Hcm9jZXJpZXNdOjpwYXJ0KGJhc2UpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWMtZ3JvY2VyaWVzKTtcXG59XFxuXFxuLmFkZHRvZG8tZm9ybSBzbC1idXR0b24ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFkZHByb2plY3QtZm9ybSB7XFxuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcXG59XFxuLmFkZHByb2plY3QtZm9ybSBzbC1pbnB1dDo6cGFydChiYXNlKSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG59XFxuLmFkZHByb2plY3QtZm9ybSBzbC1pbnB1dDo6cGFydChpbnB1dCkge1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbn1cXG4uYWRkcHJvamVjdC1mb3JtIHNsLWlucHV0IHNsLWljb24ge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uZHJhd2VyIHtcXG4gIC0tc2l6ZTogNDUwcHg7XFxuICAtLWhlYWRlci1zcGFjaW5nOiB2YXIoLS1zbC1zcGFjaW5nLW1lZGl1bSk7XFxuICAtLWJvZHktc3BhY2luZzogdmFyKC0tc2wtc3BhY2luZy1tZWRpdW0pO1xcbiAgLS1mb290ZXItc3BhY2luZzogdmFyKC0tc2wtc3BhY2luZy1tZWRpdW0pO1xcbn1cXG4uZHJhd2VyIHNsLWlucHV0LFxcbi5kcmF3ZXIgc2wtc2VsZWN0IHtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbkBtZWRpYSAod2lkdGggPiA2MmVtKSB7XFxuICA6cm9vdCB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gIH1cXG4gIC50b2Rvcy1wYW5lIHtcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG4gICAgcGFkZGluZy1pbmxpbmU6IDM4cHg7XFxuICB9XFxuICAuaGVhZGVyIHtcXG4gICAgcGFkZGluZzogMCAxNnB4O1xcbiAgfVxcbiAgLm1lbnUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYy1ib3JkZXIpO1xcbiAgfVxcbiAgLm1lbnUgLmNsb3NlLW1lbnUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLm1lbnUuYWN0aXZlLW1lbnUge1xcbiAgICB3aWR0aDogNDQwcHg7XFxuICB9XFxuICAubWVudS1pbm5lciB7XFxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcXG4gIH1cXG4gIC5hZGR0b2RvLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICB9XFxuICAuYWRkdG9kby1mb3JtIHNsLWlucHV0IHtcXG4gICAgZmxleDogMTtcXG4gIH1cXG4gIC5hZGR0b2RvLWZvcm0gc2wtYnV0dG9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICAudG9kby1pdGVtIC50b2RvLWNvbnRyb2xzIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2Utb3V0O1xcbiAgfVxcbiAgLnRvZG8taXRlbTpob3ZlciAudG9kby1jb250cm9scyB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6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O0lBQ0EsdUNBQUE7RUFuQ0Y7RUFxQ0U7SUFDRSxhQUFBO0VBbkNKO0VBdUNBO0lBQ0UsWUFBQTtFQXJDRjtFQXdDQTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7RUF0Q0Y7RUF5Q0E7SUFDRSxhQUFBO0lBQ0EsU0FBQTtFQXZDRjtFQXlDRTtJQUNFLE9BQUE7RUF2Q0o7RUEwQ0U7SUFDRSxjQUFBO0VBeENKO0VBNkNFO0lBQ0Usa0JBQUE7SUFDQSxVQUFBO0lBQ0EseUJBQUE7RUEzQ0o7RUE4Q0U7SUFDRSxtQkFBQTtJQUNBLFVBQUE7RUE1Q0o7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG59XFxyXFxuaW1nLFxcclxcbnBpY3R1cmUsXFxyXFxudmlkZW8sXFxyXFxuY2FudmFzLFxcclxcbnN2ZyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuaW5wdXQsXFxyXFxuYnV0dG9uLFxcclxcbnRleHRhcmVhLFxcclxcbnNlbGVjdCB7XFxyXFxuICBmb250OiBpbmhlcml0O1xcclxcbn1cXHJcXG5wLFxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0LFxcclxcbmg1LFxcclxcbmg2IHtcXHJcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxufVxcclxcbnVsIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG4jcm9vdCxcXHJcXG4jX19uZXh0IHtcXHJcXG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcXHJcXG59XFxyXFxuLyogPC0tcmVzZXQgKi9cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAtLWMtbXV0ZWQ6IHZhcigtLXNsLWlucHV0LXBsYWNlaG9sZGVyLWNvbG9yKTtcXHJcXG4gIC0tYy1ib3JkZXI6IHZhcigtLXNsLXBhbmVsLWJvcmRlci1jb2xvcik7XFxyXFxuICAtLWMtZ3JvY2VyaWVzOiAjMjdhZTYwO1xcclxcbiAgLS1jLXNwb3J0czogIzliNTFlMDtcXHJcXG4gIC0tYy13b3JrOiAjMmY4MGVkO1xcclxcbiAgLS1jLXN0dWR5OiAjZjI5OTRhO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUaGVtZSAqL1xcclxcbjpob3N0LFxcclxcbi5zbC10aGVtZS1kYXJrIHtcXHJcXG4gIC0tc2wtY29sb3ItcHJpbWFyeS01MDogdmFyKC0tc2wtY29sb3ItaW5kaWdvLTUwKTtcXHJcXG4gIC0tc2wtY29sb3ItcHJpbWFyeS0xMDA6IHZhcigtLXNsLWNvbG9yLWluZGlnby0xMDApO1xcclxcbiAgLS1zbC1jb2xvci1wcmltYXJ5LTIwMDogdmFyKC0tc2wtY29sb3ItaW5kaWdvLTIwMCk7XFxyXFxuICAtLXNsLWNvbG9yLXByaW1hcnktMzAwOiB2YXIoLS1zbC1jb2xvci1pbmRpZ28tMzAwKTtcXHJcXG4gIC0tc2wtY29sb3ItcHJpbWFyeS00MDA6IHZhcigtLXNsLWNvbG9yLWluZGlnby00MDApO1xcclxcbiAgLS1zbC1jb2xvci1wcmltYXJ5LTUwMDogdmFyKC0tc2wtY29sb3ItaW5kaWdvLTUwMCk7XFxyXFxuICAtLXNsLWNvbG9yLXByaW1hcnktNjAwOiB2YXIoLS1zbC1jb2xvci1pbmRpZ28tNjAwKTtcXHJcXG4gIC0tc2wtY29sb3ItcHJpbWFyeS03MDA6IHZhcigtLXNsLWNvbG9yLWluZGlnby03MDApO1xcclxcbiAgLS1zbC1jb2xvci1wcmltYXJ5LTgwMDogdmFyKC0tc2wtY29sb3ItaW5kaWdvLTgwMCk7XFxyXFxuICAtLXNsLWNvbG9yLXByaW1hcnktOTAwOiB2YXIoLS1zbC1jb2xvci1pbmRpZ28tOTAwKTtcXHJcXG4gIC0tc2wtY29sb3ItcHJpbWFyeS05NTA6IHZhcigtLXNsLWNvbG9yLWluZGlnby05NTApO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNZWRpYSBicmVha3BvaW50cyovXFxyXFxuJGJyLXNtOiAzMGVtO1xcclxcbiRici1tZDogNDhlbTtcXHJcXG4kYnItbGc6IDYyZW07XFxyXFxuJGJyLXhsOiA3NWVtO1xcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQge1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcbiAgc2wtc3dpdGNoIHtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHNsLWljb24tYnV0dG9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5tZW51IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjBweCk7XFxyXFxuICB3aWR0aDogMDtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbiAgdG9wOiA2MHB4O1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNsLWNvbG9yLW5ldXRyYWwtMCk7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzO1xcclxcblxcclxcbiAgLmNsb3NlLW1lbnUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgcmlnaHQ6IDE1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBzbC1tZW51LWl0ZW0uYWN0aXZlLW1lbnUtaXRlbSB7XFxyXFxuICAgICY6OnBhcnQoYmFzZSkge1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2wtY29sb3ItbmV1dHJhbC0xMDApO1xcclxcbiAgICAgIGNvbG9yOiB2YXIoLS1zbC1jb2xvci1uZXV0cmFsLTEwMDApO1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHNsLW1lbnUtaXRlbSB7XFxyXFxuICAgIHNsLWJhZGdlIHtcXHJcXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubWVudS5hY3RpdmUtbWVudSB7XFxyXFxuICB3aWR0aDogMjUwcHg7XFxyXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1jLWJvcmRlcik7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWlubmVyIHtcXHJcXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb3MtcGFuZSB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgcGFkZGluZy1pbmxpbmU6IDE2cHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiB2YXIoLS1zbC1zcGFjaW5nLXgtc21hbGwpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICAmOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudG9kby1jaGVja2JveCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRvZG8tY29udHJvbHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kdWUtZGF0ZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tc2wtY29sb3ItbmV1dHJhbC02MDApO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5zbC1jaGVja2JveFtjaGVja2VkXSB7XFxyXFxuICAmOjpwYXJ0KGxhYmVsKSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5zbC1iYWRnZVtkYXRhLXByb2plY3RdIHtcXHJcXG4gICY6OnBhcnQoYmFzZSkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zbC1jb2xvci1uZXV0cmFsLTYwMCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbnNsLWJhZGdlW2RhdGEtcHJvamVjdD0nU3BvcnRzJ10ge1xcclxcbiAgJjo6cGFydChiYXNlKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWMtc3BvcnRzKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuc2wtYmFkZ2VbZGF0YS1wcm9qZWN0PSdXb3JrJ10ge1xcclxcbiAgJjo6cGFydChiYXNlKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWMtd29yayk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbnNsLWJhZGdlW2RhdGEtcHJvamVjdD0nU3R1ZHknXSB7XFxyXFxuICAmOjpwYXJ0KGJhc2UpIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYy1zdHVkeSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbnNsLWJhZGdlW2RhdGEtcHJvamVjdD0nR3JvY2VyaWVzJ10ge1xcclxcbiAgJjo6cGFydChiYXNlKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWMtZ3JvY2VyaWVzKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmFkZHRvZG8tZm9ybSB7XFxyXFxuICBzbC1idXR0b24ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYWRkcHJvamVjdC1mb3JtIHtcXHJcXG4gIC8vIHdpZHRoIG9mIHNsLW1lbnUtaXRlbSBzcGFuIHBhcnQ9XFxcImNoZWNrZWQtaWNvblxcXCJcXHJcXG4gIHBhZGRpbmctbGVmdDogMS41cmVtO1xcclxcblxcclxcbiAgc2wtaW5wdXQge1xcclxcbiAgICAmOjpwYXJ0KGJhc2UpIHtcXHJcXG4gICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6OnBhcnQoaW5wdXQpIHtcXHJcXG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgc2wtaWNvbiB7XFxyXFxuICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5kcmF3ZXIge1xcclxcbiAgLS1zaXplOiA0NTBweDtcXHJcXG4gIC0taGVhZGVyLXNwYWNpbmc6IHZhcigtLXNsLXNwYWNpbmctbWVkaXVtKTtcXHJcXG4gIC0tYm9keS1zcGFjaW5nOiB2YXIoLS1zbC1zcGFjaW5nLW1lZGl1bSk7XFxyXFxuICAtLWZvb3Rlci1zcGFjaW5nOiB2YXIoLS1zbC1zcGFjaW5nLW1lZGl1bSk7XFxyXFxuXFxyXFxuICBzbC1pbnB1dCxcXHJcXG4gIHNsLXNlbGVjdCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAod2lkdGggPiAkYnItbGcpIHtcXHJcXG4gIDpyb290IHtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRvZG9zLXBhbmUge1xcclxcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcclxcbiAgICBwYWRkaW5nLWlubGluZTogMzhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkZXIge1xcclxcbiAgICBwYWRkaW5nOiAwIDE2cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVudSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1jLWJvcmRlcik7XFxyXFxuXFxyXFxuICAgIC5jbG9zZS1tZW51IHtcXHJcXG4gICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVudS5hY3RpdmUtbWVudSB7XFxyXFxuICAgIHdpZHRoOiA0NDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51LWlubmVyIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFkZHRvZG8tZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG5cXHJcXG4gICAgc2wtaW5wdXQge1xcclxcbiAgICAgIGZsZXg6IDE7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgc2wtYnV0dG9uIHtcXHJcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLnRvZG8taXRlbSB7XFxyXFxuICAgIC50b2RvLWNvbnRyb2xzIHtcXHJcXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2Utb3V0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6aG92ZXIgLnRvZG8tY29udHJvbHMge1xcclxcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgbmFub2lkIH0gZnJvbSAnbmFub2lkJztcclxuaW1wb3J0IHsgcXMsIGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZU1lbnVJdGVtLCBjcmVhdGVUb2RvSXRlbSB9IGZyb20gJy4vZG9tJztcclxuXHJcbmNvbnN0IEFwcCA9IChUb2RvTGlzdCkgPT4ge1xyXG4gIC8qIE1lbnUgKi9cclxuICBjb25zdCAkbWVudSA9IHFzKCcubWVudScpO1xyXG4gIGNvbnN0ICRtZW51TGlzdCA9IHFzKCcjbWVudUxpc3QnKTtcclxuICBjb25zdCAkbWVudUJ0biA9IHFzKCcjbWVudUJ0bicpO1xyXG4gIGNvbnN0ICRjbG9zZU1lbnUgPSBxcygnI2Nsb3NlTWVudScpO1xyXG4gIC8qIFRvZG8gTGlzdCAqL1xyXG4gIGNvbnN0ICR0b2Rvc1BhbmUgPSBxcygnI3RvZG9zUGFuZScpO1xyXG4gIGNvbnN0ICR0b2RvcyA9IHFzKCcjdG9kb3MnKTtcclxuICBjb25zdCAkaDEgPSBxcygnaDEnLCAkdG9kb3NQYW5lKTtcclxuICBjb25zdCAkZm9ybSA9IHFzKCcjYWRkVG9kb0Zvcm0nKTtcclxuICBjb25zdCAkaW5wdXQgPSBxcygnI2FkZFRvZG8nKTtcclxuICBjb25zdCAkYWRkUHJvamVjdEZvcm0gPSBxcygnI2FkZFByb2plY3RGb3JtJyk7XHJcbiAgY29uc3QgJGFkZFByb2plY3RJbnB1dCA9IHFzKCcjYWRkUHJvamVjdCcpO1xyXG4gIGNvbnN0ICR0b2Rvc01zZyA9IHFzKCcjdG9kb3NNZXNzYWdlJyk7XHJcbiAgLyogRWRpdCBEcmF3ZXIgKi9cclxuICBjb25zdCAkZHJhd2VyID0gcXMoJy5kcmF3ZXInKTtcclxuICBjb25zdCAkc2F2ZUVkaXRCdG4gPSBxcygnc2wtYnV0dG9uW3ZhbHVlPVwic2F2ZVwiXScsICRkcmF3ZXIpO1xyXG4gIGNvbnN0ICRlZGl0Rm9ybSA9IHFzKCcjZWRpdEZvcm0nLCAkZHJhd2VyKTtcclxuICBjb25zdCAkdGl0bGVJbnB1dCA9IHFzKCdzbC1pbnB1dFtuYW1lPVwidGl0bGVcIl0nLCAkZWRpdEZvcm0pO1xyXG4gIGNvbnN0ICRwcm9qZWN0U2VsZWN0ID0gcXMoJ3NsLXNlbGVjdFtuYW1lPVwicHJvamVjdFwiXScsICRlZGl0Rm9ybSk7XHJcbiAgY29uc3QgJGR1ZURhdGVJbnB1dCA9IHFzKCdzbC1pbnB1dFtuYW1lPVwiZHVlRGF0ZVwiXScsICRlZGl0Rm9ybSk7XHJcblxyXG4gIGNvbnN0IHByb2plY3RzID0ge1xyXG4gICAgYWxsOiAnQWxsIFRhc2tzJyxcclxuICB9O1xyXG4gIC8vIFNlbGVjdGVkIHByb2plY3RcclxuICBsZXQgc2VsZWN0ZWQgPSBwcm9qZWN0cy5hbGw7XHJcblxyXG4gIGZ1bmN0aW9uIGNvdW50SW5jb21wbGV0ZUJ5UHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICByZXR1cm4gVG9kb0xpc3QudG9kb3MuZmlsdGVyKFxyXG4gICAgICAodG9kbykgPT4gdG9kby5wcm9qZWN0ID09PSBwcm9qZWN0ICYmICF0b2RvLmNvbXBsZXRlXHJcbiAgICApLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIC8qKiBTYXZlIHRvIGxvY2FsU3RvcmFnZSAqL1xyXG4gIGNvbnN0IHNhdmUgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeShUb2RvTGlzdCkpO1xyXG4gIH07XHJcblxyXG4gIC8qKiBSZW5kZXIgcHJvamVjdHMgbWVudSAqL1xyXG4gIGZ1bmN0aW9uIHJlbmRlclByb2plY3RzKCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coVG9kb0xpc3QucHJvamVjdHMpO1xyXG5cclxuICAgIC8vIERlbGV0ZSBhbGwgbm9kZXNcclxuICAgICRtZW51TGlzdC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAvLyBBZGQgQWxsIFRhc2tzIHRhYlxyXG4gICAgY29uc3QgJGFsbFRhc2tzTWVudSA9IGNyZWF0ZU1lbnVJdGVtKHByb2plY3RzLmFsbCwgc2VsZWN0ZWQpO1xyXG4gICAgJGFsbFRhc2tzTWVudS5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3RzLmFsbDtcclxuICAgICRtZW51TGlzdC5hcHBlbmQoJGFsbFRhc2tzTWVudSk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIG1lbnUgaXRlbSBmb3IgZWFjaCBwcm9qZWN0XHJcbiAgICBUb2RvTGlzdC5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgIC8vIEFkZCBjb3VudCBvZiBpbmNvbXBsZXRlIHRvZG9zXHJcbiAgICAgIGNvbnN0IGNvdW50ID0gY291bnRJbmNvbXBsZXRlQnlQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgICBjb25zdCBpdGVtID0gY3JlYXRlTWVudUl0ZW0ocHJvamVjdCwgc2VsZWN0ZWQsIGNvdW50KTtcclxuICAgICAgaXRlbS5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3Q7XHJcbiAgICAgICRtZW51TGlzdC5hcHBlbmQoaXRlbSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBSZW5kZXIgVG9kbyBMaXN0ICovXHJcbiAgZnVuY3Rpb24gcmVuZGVyVG9kb3ModG9kb3MgPSBbXSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coVG9kb0xpc3QudG9kb3MpO1xyXG5cclxuICAgIC8vIERlbGV0ZSBhbGwgbm9kZXNcclxuICAgICR0b2Rvcy5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAvLyBTaG93IGRlZmF1bHQgbWVzc2FnZVxyXG4gICAgJHRvZG9zTXNnLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgaWYgKHRvZG9zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAkdG9kb3NNc2cudGV4dENvbnRlbnQgPSAnTm90aGluZyB0byBkbyEgQWRkIGEgdGFzaz8nO1xyXG4gICAgICAkdG9kb3NNc2cuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDcmVhdGUgdG9kbyBpdGVtIG5vZGVzIGZvciBlYWNoIHRvZG8gaW4gc3RhdGVcclxuICAgIHRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcclxuICAgICAgY29uc3QgeyBpZCwgcHJvamVjdCB9ID0gdG9kbztcclxuXHJcbiAgICAgIC8vIEFkZCBiYWRnZSBpZiBzZWxlY3RlZCBBbGwgVGFza3NcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gc2VsZWN0ZWQgPT09IHByb2plY3RzLmFsbCA/IHByb2plY3QgOiBudWxsO1xyXG5cclxuICAgICAgY29uc3QgbGkgPSBjcmVhdGVUb2RvSXRlbSh7IC4uLnRvZG8sIHByb2plY3Q6IHNlbGVjdGVkUHJvamVjdCB9KTtcclxuICAgICAgbGkuZGF0YXNldC5pZCA9IGlkO1xyXG5cclxuICAgICAgLy8gQXBwZW5kIG5vZGVzIHRvIHRoZSB0b2RvIGxpc3RcclxuICAgICAgJHRvZG9zLmFwcGVuZChsaSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkaW5wdXQuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIC8qKiBSZW5kZXIgQXBwICovXHJcbiAgZnVuY3Rpb24gcmVuZGVyKCkge1xyXG4gICAgcmVuZGVyUHJvamVjdHMoKTtcclxuXHJcbiAgICBpZiAoc2VsZWN0ZWQgPT09IG51bGwpIHtcclxuICAgICAgJHRvZG9zUGFuZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgICRoMS50ZXh0Q29udGVudCA9IHNlbGVjdGVkO1xyXG4gICAgJHRvZG9zUGFuZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuXHJcbiAgICBpZiAoc2VsZWN0ZWQgPT09IHByb2plY3RzLmFsbCkge1xyXG4gICAgICAvLyBEaXNwbGF5IEFsbCBUb2Rvc1xyXG4gICAgICByZW5kZXJUb2RvcyhUb2RvTGlzdC50b2Rvcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBEaXNwbGF5IEZpbHRlcmVkIGJ5IFByb2plY3QgVG9kb3NcclxuICAgICAgY29uc3QgZmlsdGVyZWQgPSBUb2RvTGlzdC5maWx0ZXJCeVByb2plY3Qoc2VsZWN0ZWQpO1xyXG4gICAgICByZW5kZXJUb2RvcyhmaWx0ZXJlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgJGlucHV0LmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICAvLyBFdmVudCBoYW5kbGVyc1xyXG4gIGZ1bmN0aW9uIGhhbmRsZU1lbnVDaGFuZ2UoZSkge1xyXG4gICAgaWYgKCFlLnRhcmdldC5kYXRhc2V0LnByb2plY3RJZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0ZWQgPSBlLnRhcmdldC5kYXRhc2V0LnByb2plY3RJZDtcclxuXHJcbiAgICByZW5kZXIoKTtcclxuICAgIC8vIENsb3NlIG1lbnUgb24gc21hbGxlciBzY3JlZW5zXHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA5NjApIHtcclxuICAgICAgY2xvc2VNZW51KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVBZGRUb2RvKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHsgdmFsdWUgfSA9ICRpbnB1dDtcclxuICAgIGlmICh2YWx1ZS50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiBzZWxlY3RlZCB0YWIgaXMgQWxsIFRhc2tzXHJcbiAgICAvLyBBc3NpZ24gcHJvamVjdCBwcm9wZXJ0eSB0byBlbXB0eSBzdHJpbmdcclxuICAgIGNvbnN0IHByb2plY3QgPSBzZWxlY3RlZCA9PT0gcHJvamVjdHMuYWxsID8gJycgOiBzZWxlY3RlZDtcclxuICAgIGNvbnN0IHRvZG8gPSB7IGlkOiBuYW5vaWQoMTApLCB0aXRsZTogdmFsdWUsIHByb2plY3QgfTtcclxuICAgIFRvZG9MaXN0LmFkZFRvZG8odG9kbyk7XHJcbiAgICBzYXZlKCk7XHJcbiAgICByZW5kZXIoKTtcclxuICAgICRpbnB1dC52YWx1ZSA9ICcnO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlRGVsZXRlVG9kbyhlKSB7XHJcbiAgICBpZiAoIWUudGFyZ2V0Lm1hdGNoZXMoJ1tkYXRhLWRlbGV0ZV0nKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgJHRvZG9JdGVtID0gZS50YXJnZXQuY2xvc2VzdCgnLnRvZG8taXRlbScpO1xyXG4gICAgY29uc3QgeyBpZCB9ID0gJHRvZG9JdGVtLmRhdGFzZXQ7XHJcbiAgICAkdG9kb0l0ZW0ucmVtb3ZlKCk7XHJcbiAgICBUb2RvTGlzdC5yZW1vdmVUb2RvKGlkKTtcclxuICAgIHNhdmUoKTtcclxuICAgIC8vIFVwZGF0ZSB0YXNrIGNvdW50IHZpZXdcclxuICAgIHJlbmRlclByb2plY3RzKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBlZGl0VG9kbyhpZCkge1xyXG4gICAgLy8gR2V0IGRhdGEgZnJvbSBkcmF3ZXIgZm9ybVxyXG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgkZWRpdEZvcm0pO1xyXG4gICAgY29uc3QgbmV3VG9kbyA9IE9iamVjdC5mcm9tRW50cmllcyhkYXRhKTtcclxuICAgIGlmIChuZXdUb2RvLnRpdGxlLnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIFRvZG9MaXN0LmVkaXRUb2RvKGlkLCBuZXdUb2RvKTtcclxuICAgIHNhdmUoKTtcclxuICAgIHJlbmRlcigpO1xyXG4gICAgLy8gQ2xvc2UgZHJhd2VyXHJcbiAgICAkZHJhd2VyLmhpZGUoKTtcclxuICB9XHJcblxyXG4gIC8vIE9uIHRvZG8gZWRpdCBjbGlja1xyXG4gIGZ1bmN0aW9uIGhhbmRsZUVkaXRUb2RvKGUpIHtcclxuICAgIGlmICghZS50YXJnZXQubWF0Y2hlcygnW2RhdGEtZWRpdF0nKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT3BlbiBkcmF3ZXJcclxuICAgICRkcmF3ZXIuc2hvdygpO1xyXG5cclxuICAgIC8vIEFkZCBzZWxlY3QgcHJvamVjdCBvcHRpb25zIHRvIGZvcm1cclxuICAgIGNvbnN0IG9wdGlvbnMgPSBUb2RvTGlzdC5wcm9qZWN0c1xyXG4gICAgICAubWFwKChwcm9qZWN0KSA9PiBgPHNsLW9wdGlvbiB2YWx1ZT1cIiR7cHJvamVjdH1cIj4ke3Byb2plY3R9PC9zbC1vcHRpb24+YClcclxuICAgICAgLmpvaW4oJycpO1xyXG5cclxuICAgICRwcm9qZWN0U2VsZWN0LmlubmVySFRNTCA9IG9wdGlvbnM7XHJcblxyXG4gICAgLy8gR2V0IGN1cnJlbnQgdG9kbyB2YWx1ZXNcclxuICAgIGNvbnN0ICR0b2RvSXRlbSA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50b2RvLWl0ZW0nKTtcclxuICAgIGNvbnN0IHsgaWQgfSA9ICR0b2RvSXRlbS5kYXRhc2V0O1xyXG5cclxuICAgIGNvbnN0IHRvZG8gPSBUb2RvTGlzdC5maW5kKGlkKTtcclxuICAgIGNvbnN0IHsgdGl0bGUsIHByb2plY3QsIGR1ZURhdGUgfSA9IHRvZG87XHJcblxyXG4gICAgLy8gUG9wdWxhdGUgZHJhd2VyIGZvcm0gaW5wdXRzIHdpdGggdG9kbyBkYXRhXHJcbiAgICAkdGl0bGVJbnB1dC52YWx1ZSA9IHRpdGxlO1xyXG4gICAgJHByb2plY3RTZWxlY3QudmFsdWUgPSBwcm9qZWN0O1xyXG4gICAgJGR1ZURhdGVJbnB1dC52YWx1ZSA9IGR1ZURhdGU7XHJcblxyXG4gICAgLy8gT24gY2xpY2sgU2F2ZSBidXR0b25cclxuICAgIC8vIHVwZGF0ZSBtb2RlbCB3aXRoIG5ldyBkYXRhXHJcbiAgICAkc2F2ZUVkaXRCdG4ub25jbGljayA9ICgpID0+IGVkaXRUb2RvKGlkKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVRvZ2dsZVRvZG8oZSkge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gZS50YXJnZXQuY2xvc2VzdCgnLnRvZG8taXRlbScpLmRhdGFzZXQ7XHJcbiAgICBjb25zdCB0b2RvID0gVG9kb0xpc3QuZmluZChpZCk7XHJcbiAgICB0b2RvLmNvbXBsZXRlID0gZS50YXJnZXQuY2hlY2tlZDtcclxuICAgIHNhdmUoKTtcclxuICAgIC8vIFVwZGF0ZSB0YXNrIGNvdW50IHZpZXdcclxuICAgIHJlbmRlclByb2plY3RzKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVBZGRQcm9qZWN0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHsgdmFsdWUgfSA9ICRhZGRQcm9qZWN0SW5wdXQ7XHJcbiAgICBpZiAodmFsdWUudHJpbSgpID09PSAnJykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIHByb2plY3QgYW5kIHNlbGVjdCBsYXN0IHByb2plY3RcclxuICAgIFRvZG9MaXN0LmFkZFByb2plY3QodmFsdWUpO1xyXG4gICAgc2F2ZSgpO1xyXG4gICAgc2VsZWN0ZWQgPSB2YWx1ZTtcclxuICAgICRhZGRQcm9qZWN0SW5wdXQudmFsdWUgPSAnJztcclxuICAgIHJlbmRlcigpO1xyXG4gICAgLy8gQ2xvc2UgbWVudSBvbiBzbWFsbGVyIHNjcmVlbnNcclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDk2MCkge1xyXG4gICAgICBjbG9zZU1lbnUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZU1lbnUoKSB7XHJcbiAgICAkbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUtbWVudScpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xvc2VNZW51KCkge1xyXG4gICAgJG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLW1lbnUnKTtcclxuICB9XHJcblxyXG4gICRtZW51QnRuLm9uY2xpY2sgPSB0b2dnbGVNZW51O1xyXG4gICRjbG9zZU1lbnUub25jbGljayA9IGNsb3NlTWVudTtcclxuXHJcbiAgLy8gRXZlbnQgbGlzdGVuZXJzXHJcbiAgJG1lbnVMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTWVudUNoYW5nZSk7XHJcbiAgJGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlQWRkVG9kbyk7XHJcbiAgJHRvZG9zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRGVsZXRlVG9kbyk7XHJcbiAgJHRvZG9zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRWRpdFRvZG8pO1xyXG4gICR0b2Rvcy5hZGRFdmVudExpc3RlbmVyKCdzbC1jaGFuZ2UnLCBoYW5kbGVUb2dnbGVUb2RvKTtcclxuICAkYWRkUHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlQWRkUHJvamVjdCk7XHJcblxyXG4gIC8vIEluaXRpYWwgcmVuZGVyXHJcbiAgcmVuZGVyKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICByZW5kZXIsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiaW1wb3J0IHsgbmFub2lkIH0gZnJvbSAnbmFub2lkJztcclxuXHJcbmNvbnN0IGRlZmF1bHREYXRhID0gW1xyXG4gIHsgdGl0bGU6ICdMZWFybiBNVkMnLCBwcm9qZWN0OiAnU3R1ZHknIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdCdXkgQmFuYW5hcyBmb3IgdGhlIHBhbmNha2VzJyxcclxuICAgIHByb2plY3Q6ICdHcm9jZXJpZXMnLFxyXG4gICAgY29tcGxldGU6IHRydWUsXHJcbiAgfSxcclxuICB7IHRpdGxlOiAnR28gdG8gdGhlIEd5bScsIHByb2plY3Q6ICdTcG9ydHMnLCBjb21wbGV0ZTogdHJ1ZSB9LFxyXG4gIHsgdGl0bGU6ICdQcmVwYXJlIHJvYWRtYXAgZm9yIE1WUCcsIHByb2plY3Q6ICdXb3JrJyB9LFxyXG4gIHsgdGl0bGU6ICdSZWFkIGNoYXB0ZXIgMyBmcm9tIE1hdGggYm9vaycsIHByb2plY3Q6ICdTdHVkeScgfSxcclxuXS5tYXAoKHRvZG8pID0+ICh7IC4uLnRvZG8sIGlkOiBuYW5vaWQoMTApIH0pKTtcclxuXHJcbi8vIExvYWQgc2F2ZXMgdG9kb3MgZnJvbSBsb2NhbFN0b3JhZ2VcclxuY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS50b2Rvc1xyXG4gID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSlcclxuICA6IGRlZmF1bHREYXRhO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGF0YTtcclxuIiwiLyoqIHF1ZXJ5U2VsZWN0b3Igd3JhcHBlclxyXG4gKiBAcmV0dXJucyB7IE5vZGUgfSBhbiBlbGVtZW50IGZyb20gdGhlIERPTVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHFzKHNlbGVjdG9yLCBzY29wZSkge1xyXG4gIGlmIChzY29wZSkge1xyXG4gICAgcmV0dXJuIHNjb3BlLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gIH1cclxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbn1cclxuXHJcbi8qKiBDcmVhdGUgYW4gZWxlbWVudCB3aXRoIGFuIG9wdGlvbmFsIENTUyBjbGFzc1xyXG4gKiBAcmV0dXJucyB7IE5vZGUgfSBhbiBlbGVtZW50XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWcsIGNsYXNzTmFtZSkge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XHJcbiAgaWYgKGNsYXNzTmFtZSkgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcblxyXG4gIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG4vLyBDcmVhdGUgVmlldyBjb21wb25lbnRzXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNZW51SXRlbSh0aXRsZSwgc2VsZWN0ZWQsIGNvdW50KSB7XHJcbiAgY29uc3QgaXRlbSA9IGNyZWF0ZUVsZW1lbnQoJ3NsLW1lbnUtaXRlbScpO1xyXG4gIGl0ZW0udGV4dENvbnRlbnQgPSB0aXRsZTtcclxuXHJcbiAgLy8gU2V0IGFjdGl2ZSBtZW51IGVsZW1lbnRcclxuICBpZiAodGl0bGUgPT0gc2VsZWN0ZWQpIHtcclxuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLW1lbnUtaXRlbScpO1xyXG4gIH1cclxuXHJcbiAgLy8gQWRkIGNvdW50IHRvZG9zIGJhZGdlXHJcbiAgaWYgKGNvdW50ID4gMCkge1xyXG4gICAgaXRlbS5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICdiZWZvcmVlbmQnLFxyXG4gICAgICBgPHNsLWJhZGdlIHNsb3Q9XCJzdWZmaXhcIiB2YXJpYW50PVwibmV1dHJhbFwiIHBpbGw+JHtjb3VudH08L3NsLWJhZGdlPmBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaXRlbTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvZG9JdGVtKHsgdGl0bGUsIGNvbXBsZXRlLCBwcm9qZWN0LCBkdWVEYXRlIH0pIHtcclxuICBjb25zdCBsaSA9IGNyZWF0ZUVsZW1lbnQoJ2xpJywgJ3RvZG8taXRlbScpO1xyXG5cclxuICBjb25zdCBodG1sID0gLypodG1sKi8gYFxyXG4gICAgPGRpdiBjbGFzcz1cInRvZG8tY2hlY2tib3hcIj5cclxuICAgICAgPHNsLWNoZWNrYm94ICR7Y29tcGxldGUgJiYgJ2NoZWNrZWQnfSA+JHt0aXRsZX08L3NsLWNoZWNrYm94PlxyXG4gICAgICAke1xyXG4gICAgICAgIHByb2plY3RcclxuICAgICAgICAgID8gYDxzbC1iYWRnZSBzbG90PVwic3VmZml4XCIgZGF0YS1wcm9qZWN0PVwiJHtwcm9qZWN0fVwiIHBpbGw+JHtwcm9qZWN0fTwvc2wtYmFkZ2U+YFxyXG4gICAgICAgICAgOiAnJ1xyXG4gICAgICB9XHJcbiAgICAgICR7XHJcbiAgICAgICAgZHVlRGF0ZVxyXG4gICAgICAgICAgPyBgPHNwYW4gY2xhc3M9XCJkdWUtZGF0ZVwiPkR1ZSBcclxuICAgICAgICAgICAgICA8c2wtZm9ybWF0LWRhdGVcclxuICAgICAgICAgICAgICAgIHdlZWtkYXk9XCJzaG9ydFwiXHJcbiAgICAgICAgICAgICAgICBtb250aD1cImxvbmdcIiBcclxuICAgICAgICAgICAgICAgIGRheT1cIm51bWVyaWNcIlxyXG4gICAgICAgICAgICAgICAgZGF0ZT0ke2R1ZURhdGV9XHJcbiAgICAgICAgICAgICAgPjwvc2wtZm9ybWF0LWRhdGVcclxuICAgICAgICAgICAgICA8L3NwYW4+YFxyXG4gICAgICAgICAgOiAnJ1xyXG4gICAgICB9ICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0b2RvLWNvbnRyb2xzXCI+XHJcbiAgICAgIDxzbC1pY29uLWJ1dHRvbiBuYW1lPVwicGVuY2lsLXNxdWFyZVwiIGxhYmVsPVwiRWRpdFwiIGRhdGEtZWRpdD48L3NsLWljb24tYnV0dG9uPlxyXG4gICAgICA8c2wtaWNvbi1idXR0b24gbmFtZT1cIngtbGdcIiBsYWJlbD1cIkRlbGV0ZVwiIGRhdGEtZGVsZXRlPjwvc2wtaWNvbi1idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICBgO1xyXG5cclxuICBsaS5pbm5lckhUTUwgPSBodG1sO1xyXG5cclxuICByZXR1cm4gbGk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XHJcbiAgY29uc3RydWN0b3IoeyBpZCwgdGl0bGUsIHByb2plY3QsIGR1ZURhdGUsIGNvbXBsZXRlID0gZmFsc2UgfSkge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBUb2RvIGZyb20gJy4vVG9kbyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdCB7XHJcbiAgLy8gSW5pdGlhbGl6ZSB3aXRoIGFuIG9wdGlvbmFsIGFycmF5IG9mIGRhdGFcclxuICBjb25zdHJ1Y3RvcihkYXRhQXJyKSB7XHJcbiAgICBpZiAoZGF0YUFycikge1xyXG4gICAgICAvLyBtYXAgaXQgaW50byBhbiBhcnJheSBvZiBUb2RvIG9iamVjdHNcclxuICAgICAgdGhpcy50b2RvcyA9IGRhdGFBcnIubWFwKCh0b2RvKSA9PiBuZXcgVG9kbyh0b2RvKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRvZG9zID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMudG9kb3MucmVkdWNlKFxyXG4gICAgICAodmFsdWVzLCB0b2RvKSA9PiB7XHJcbiAgICAgICAgaWYgKHRvZG8ucHJvamVjdCAmJiAhdmFsdWVzLmluY2x1ZGVzKHRvZG8ucHJvamVjdCkpIHtcclxuICAgICAgICAgIHZhbHVlcy5wdXNoKHRvZG8ucHJvamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZXM7XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIERlZmF1bHQgcHJvamVjdHMgY2FuIG5vdCBiZSBkZWxldGVkXHJcbiAgICAgIFsnV29yaycsICdTdHVkeScsICdTcG9ydHMnLCAnR3JvY2VyaWVzJ11cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBhZGRQcm9qZWN0KHRpdGxlKSB7XHJcbiAgICB0aGlzLnByb2plY3RzLnB1c2godGl0bGUpO1xyXG4gIH1cclxuXHJcbiAgYWRkVG9kbyh0YXNrKSB7XHJcbiAgICBpZiAoIXRhc2spIHJldHVybjtcclxuXHJcbiAgICBjb25zdCB0b2RvID0gbmV3IFRvZG8odGFzayk7XHJcbiAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XHJcbiAgfVxyXG5cclxuICBmaW5kKGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b2Rvcy5maW5kKCh0b2RvKSA9PiB0b2RvLmlkID09PSBpZCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVUb2RvKGlkKSB7XHJcbiAgICB0aGlzLnRvZG9zID0gdGhpcy50b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8uaWQgIT09IGlkKTtcclxuICB9XHJcblxyXG4gIGVkaXRUb2RvKGlkLCBuZXdUb2RvKSB7XHJcbiAgICB0aGlzLnRvZG9zID0gdGhpcy50b2Rvcy5tYXAoKHRvZG8pID0+XHJcbiAgICAgIHRvZG8uaWQgPT09IGlkID8gbmV3IFRvZG8oeyAuLi50b2RvLCAuLi5uZXdUb2RvIH0pIDogdG9kb1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUNvbXBsZXRlZCgpIHtcclxuICAgIHRoaXMudG9kb3MgPSB0aGlzLnRvZG9zLmZpbHRlcigodG9kbykgPT4gIXRvZG8uY29tcGxldGUpO1xyXG4gIH1cclxuXHJcbiAgZmlsdGVyQnlQcm9qZWN0KHByb2plY3QpIHtcclxuICAgIHJldHVybiB0aGlzLnRvZG9zLmZpbHRlcigodG9kbykgPT4gdG9kby5wcm9qZWN0ID09PSBwcm9qZWN0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlcnRzIHRoaXMgbW9kZWwgaW50byBhIHNpbXBsZSBvYmplY3QgZm9yXHJcbiAgICogSlNPTiBzZXJpYWxpemF0aW9uXHJcbiAgICovXHJcbiAgdG9KU09OKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9kb3M7XHJcbiAgfVxyXG59XHJcbiIsIigoKSA9PiB7XHJcbiAgY29uc3QgdGhlbWVTd2l0Y2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhlbWUnKTtcclxuICBjb25zdCBpY29uID0gdGhlbWVTd2l0Y2gucXVlcnlTZWxlY3Rvcignc2wtaWNvbicpO1xyXG4gIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcblxyXG4gIGZ1bmN0aW9uIHNldERhcmsoKSB7XHJcbiAgICByb290LmNsYXNzTGlzdC5hZGQoJ3NsLXRoZW1lLWRhcmsnKTtcclxuICAgIGljb24ubmFtZSA9ICdtb29uLWZpbGwnO1xyXG4gICAgaWNvbi5zdHlsZS5jb2xvciA9ICcjODE4Y2Y4JztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldExpZ2h0KCkge1xyXG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdzbC10aGVtZS1kYXJrJyk7XHJcbiAgICBpY29uLm5hbWUgPSAnc3VuJztcclxuICAgIGljb24uc3R5bGUuY29sb3IgPSAnI2VhYjMwOCc7XHJcbiAgfVxyXG5cclxuICBjb25zdCB0aGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpO1xyXG4gIGlmICh0aGVtZSA9PT0gJ2RhcmsnKSB7XHJcbiAgICB0aGVtZVN3aXRjaC5jaGVja2VkID0gdHJ1ZTtcclxuICAgIHNldERhcmsoKTtcclxuICB9XHJcblxyXG4gIHRoZW1lU3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ3NsLWNoYW5nZScsIChlKSA9PiB7XHJcbiAgICBjb25zdCB7IGNoZWNrZWQgfSA9IGUudGFyZ2V0O1xyXG4gICAgbGV0IHRoZW1lID0gJ2xpZ2h0JztcclxuXHJcbiAgICBpZiAoY2hlY2tlZCkge1xyXG4gICAgICAvLyBBZGQgRGFyayB0aGVtZVxyXG4gICAgICB0aGVtZSA9ICdkYXJrJztcclxuICAgICAgc2V0RGFyaygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gTGlnaHQgdGhlbWVcclxuICAgICAgc2V0TGlnaHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCB0aGVtZSk7XHJcbiAgfSk7XHJcbn0pKCk7XHJcbiIsImV4cG9ydCB7IHVybEFscGhhYmV0IH0gZnJvbSAnLi91cmwtYWxwaGFiZXQvaW5kZXguanMnXG5leHBvcnQgbGV0IHJhbmRvbSA9IGJ5dGVzID0+IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoYnl0ZXMpKVxuZXhwb3J0IGxldCBjdXN0b21SYW5kb20gPSAoYWxwaGFiZXQsIGRlZmF1bHRTaXplLCBnZXRSYW5kb20pID0+IHtcbiAgbGV0IG1hc2sgPSAoMiA8PCAoTWF0aC5sb2coYWxwaGFiZXQubGVuZ3RoIC0gMSkgLyBNYXRoLkxOMikpIC0gMVxuICBsZXQgc3RlcCA9IC1+KCgxLjYgKiBtYXNrICogZGVmYXVsdFNpemUpIC8gYWxwaGFiZXQubGVuZ3RoKVxuICByZXR1cm4gKHNpemUgPSBkZWZhdWx0U2l6ZSkgPT4ge1xuICAgIGxldCBpZCA9ICcnXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGxldCBieXRlcyA9IGdldFJhbmRvbShzdGVwKVxuICAgICAgbGV0IGogPSBzdGVwXG4gICAgICB3aGlsZSAoai0tKSB7XG4gICAgICAgIGlkICs9IGFscGhhYmV0W2J5dGVzW2pdICYgbWFza10gfHwgJydcbiAgICAgICAgaWYgKGlkLmxlbmd0aCA9PT0gc2l6ZSkgcmV0dXJuIGlkXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5leHBvcnQgbGV0IGN1c3RvbUFscGhhYmV0ID0gKGFscGhhYmV0LCBzaXplID0gMjEpID0+XG4gIGN1c3RvbVJhbmRvbShhbHBoYWJldCwgc2l6ZSwgcmFuZG9tKVxuZXhwb3J0IGxldCBuYW5vaWQgPSAoc2l6ZSA9IDIxKSA9PlxuICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KHNpemUpKS5yZWR1Y2UoKGlkLCBieXRlKSA9PiB7XG4gICAgYnl0ZSAmPSA2M1xuICAgIGlmIChieXRlIDwgMzYpIHtcbiAgICAgIGlkICs9IGJ5dGUudG9TdHJpbmcoMzYpXG4gICAgfSBlbHNlIGlmIChieXRlIDwgNjIpIHtcbiAgICAgIGlkICs9IChieXRlIC0gMjYpLnRvU3RyaW5nKDM2KS50b1VwcGVyQ2FzZSgpXG4gICAgfSBlbHNlIGlmIChieXRlID4gNjIpIHtcbiAgICAgIGlkICs9ICctJ1xuICAgIH0gZWxzZSB7XG4gICAgICBpZCArPSAnXydcbiAgICB9XG4gICAgcmV0dXJuIGlkXG4gIH0sICcnKVxuIiwiZXhwb3J0IGNvbnN0IHVybEFscGhhYmV0ID1cbiAgJ3VzZWFuZG9tLTI2VDE5ODM0MFBYNzVweEpBQ0tWRVJZTUlOREJVU0hXT0xGX0dRWmJmZ2hqa2xxdnd5enJpY3QnXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XHJcbmltcG9ydCBUb2RvTGlzdCBmcm9tICcuL2RvbWFpbi9Ub2RvTGlzdCc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xyXG5pbXBvcnQgZGF0YSBmcm9tICcuL2RhdGEnO1xyXG5pbXBvcnQgJy4vdGhlbWUnO1xyXG5cclxuLyogSW5pdCBBcHAgKi9cclxuY29uc3QgdG9kb0xpc3QgPSBuZXcgVG9kb0xpc3QoZGF0YSk7XHJcbmNvbnN0IGFwcCA9IEFwcCh0b2RvTGlzdCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==