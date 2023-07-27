/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./PressStart.ttf */ "./src/PressStart.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./zap.svg */ "./src/zap.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./circle.svg */ "./src/circle.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
}

@font-face {
    font-family: 'PressStart';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

body, html {
    height: 100vh;
    background-color: var(--bg);
    font-family: 'PressStart', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--accent);
}

:root {
    --bg: #000000;
    --contrast: #ffffff;
    --accent: #1df900;
    --empty: #686868;
    --ship: rgba(16,142,0, .5);
    --sunk: rgba(255, 0, 0, .5);
    --hit: #ff0000;
}

h2 {
    text-align: center;
    color: var(--accent);
    white-space: nowrap;
    font-size: clamp(16px, 3vw, 36px);
}

#gameboards {
    display: flex;
    gap: 10px;
    width: 100%;
    justify-content: space-around;
}

.gameboard {
    width: 40%;
    display: grid;
    grid-template-columns: 10% auto;
    grid-template-rows: 1fr 10% auto;
    grid-template-areas: 
        "header header"
        ". x-labels"
        "y-labels board-cells";
}

.gameboard > h2 {
    grid-area: header;
    place-content: center;
    margin: .5rem 0;
}

.x-labels {
    grid-area: x-labels;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    place-items: center;
}

.y-labels {
    grid-area: y-labels;
    display: grid;
    grid-template-rows: repeat(7, 1fr);
    place-items: center;
}

.board-cells {
    grid-area: board-cells;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    aspect-ratio: 1 / 1;
    border: solid 3px var(--accent);
}

.board-cells > div {
    background-color: var(--empty);
    border: solid 1px var(--accent);
}

.board-cells > .has-ship {
    background-color: var(--ship);
}

.board-cells > .sunk-ship {
    background-color: var(--sunk);
}

.hit {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

.miss {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

#modal-container {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    background-color: rgba(0,0,0,.5);
}

#modal {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 5px;
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: clamp(200px, 20vh, 250px);
    width: clamp(300px, 20vw, 400px);
    padding: 10px;
    border: solid 3px var(--accent);
    color: var(--contrast);
    background-color: var(--bg);
}

form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
}

input:invalid {
    border: solid 2px var(--hit);
}

#modal-text {
    text-align: center;
}

button {
    appearance: none;
    font-family: 'PressStart';
    background-color: var(--bg);
    padding: .8rem 20px;
    border: solid 2px var(--contrast);
    color: var(--contrast);
}

button:hover {
    border: solid 2px var(--accent);
    color: var(--accent);
}

button:focus-visible {
    outline: max(2px, 0.15em) solid var(--accent);
    outline-offset: max(3px, 0.15em);
}

button:active {
    transform: translate(2px, 3px);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,yBAAyB;IACzB,4CAA4B;AAChC;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,iKAAiK;IACjK,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;IAChB,0BAA0B;IAC1B,2BAA2B;IAC3B,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,mBAAmB;IACnB,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,SAAS;IACT,WAAW;IACX,6BAA6B;AACjC;;AAEA;IACI,UAAU;IACV,aAAa;IACb,+BAA+B;IAC/B,gCAAgC;IAChC;;;8BAG0B;AAC9B;;AAEA;IACI,iBAAiB;IACjB,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,qCAAqC;IACrC,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,kCAAkC;IAClC,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,qCAAqC;IACrC,mBAAmB;IACnB,+BAA+B;AACnC;;AAEA;IACI,8BAA8B;IAC9B,+BAA+B;AACnC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,yDAAkC;AACtC;;AAEA;IACI,yDAAqC;AACzC;;AAEA;IACI,aAAa;IACb,eAAe;IACf,MAAM;IACN,QAAQ;IACR,SAAS;IACT,OAAO;IACP,aAAa;IACb,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;IACnB,QAAQ;IACR,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,iCAAiC;IACjC,gCAAgC;IAChC,aAAa;IACb,+BAA+B;IAC/B,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,2BAA2B;IAC3B,mBAAmB;IACnB,iCAAiC;IACjC,sBAAsB;AAC1B;;AAEA;IACI,+BAA+B;IAC/B,oBAAoB;AACxB;;AAEA;IACI,6CAA6C;IAC7C,gCAAgC;AACpC;;AAEA;IACI,8BAA8B;AAClC","sourcesContent":["*, *:before, *:after {\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n}\n\n@font-face {\n    font-family: 'PressStart';\n    src: url('./PressStart.ttf');\n}\n\nbody, html {\n    height: 100vh;\n    background-color: var(--bg);\n    font-family: 'PressStart', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    color: var(--accent);\n}\n\n:root {\n    --bg: #000000;\n    --contrast: #ffffff;\n    --accent: #1df900;\n    --empty: #686868;\n    --ship: rgba(16,142,0, .5);\n    --sunk: rgba(255, 0, 0, .5);\n    --hit: #ff0000;\n}\n\nh2 {\n    text-align: center;\n    color: var(--accent);\n    white-space: nowrap;\n    font-size: clamp(16px, 3vw, 36px);\n}\n\n#gameboards {\n    display: flex;\n    gap: 10px;\n    width: 100%;\n    justify-content: space-around;\n}\n\n.gameboard {\n    width: 40%;\n    display: grid;\n    grid-template-columns: 10% auto;\n    grid-template-rows: 1fr 10% auto;\n    grid-template-areas: \n        \"header header\"\n        \". x-labels\"\n        \"y-labels board-cells\";\n}\n\n.gameboard > h2 {\n    grid-area: header;\n    place-content: center;\n    margin: .5rem 0;\n}\n\n.x-labels {\n    grid-area: x-labels;\n    display: grid;\n    grid-template-columns: repeat(7, 1fr);\n    place-items: center;\n}\n\n.y-labels {\n    grid-area: y-labels;\n    display: grid;\n    grid-template-rows: repeat(7, 1fr);\n    place-items: center;\n}\n\n.board-cells {\n    grid-area: board-cells;\n    display: grid;\n    grid-template-columns: repeat(7, 1fr);\n    aspect-ratio: 1 / 1;\n    border: solid 3px var(--accent);\n}\n\n.board-cells > div {\n    background-color: var(--empty);\n    border: solid 1px var(--accent);\n}\n\n.board-cells > .has-ship {\n    background-color: var(--ship);\n}\n\n.board-cells > .sunk-ship {\n    background-color: var(--sunk);\n}\n\n.hit {\n    background-image: url('./zap.svg');\n}\n\n.miss {\n    background-image: url('./circle.svg');\n}\n\n#modal-container {\n    display: none;\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1000;\n    background-color: rgba(0,0,0,.5);\n}\n\n#modal {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    gap: 5px;\n    position: absolute;\n    top: 25%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    height: clamp(200px, 20vh, 250px);\n    width: clamp(300px, 20vw, 400px);\n    padding: 10px;\n    border: solid 3px var(--accent);\n    color: var(--contrast);\n    background-color: var(--bg);\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    gap: 30px;\n}\n\ninput:invalid {\n    border: solid 2px var(--hit);\n}\n\n#modal-text {\n    text-align: center;\n}\n\nbutton {\n    appearance: none;\n    font-family: 'PressStart';\n    background-color: var(--bg);\n    padding: .8rem 20px;\n    border: solid 2px var(--contrast);\n    color: var(--contrast);\n}\n\nbutton:hover {\n    border: solid 2px var(--accent);\n    color: var(--accent);\n}\n\nbutton:focus-visible {\n    outline: max(2px, 0.15em) solid var(--accent);\n    outline-offset: max(3px, 0.15em);\n}\n\nbutton:active {\n    transform: translate(2px, 3px);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/PressStart.ttf":
/*!****************************!*\
  !*** ./src/PressStart.ttf ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2ebf1a35a67b4271603e.ttf";

/***/ }),

/***/ "./src/circle.svg":
/*!************************!*\
  !*** ./src/circle.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8050bf367f37e752a62e.svg";

/***/ }),

/***/ "./src/zap.svg":
/*!*********************!*\
  !*** ./src/zap.svg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "56bd805ca876104cae38.svg";

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGameboard: () => (/* binding */ createGameboard)
/* harmony export */ });
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");
/* harmony import */ var _interface_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface.js */ "./src/interface.js");



const createGameboard = () => {
    let gameboard = {};
    let gameboardShips = [];
    let shotList = [];
    let lastHit;

    const placeShip = (name, coordinates) => {
        const length = coordinates.length;
        coordinates.forEach(coordinate => {
            gameboard[coordinate] = name;
        });
        return (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.createShip)(name, length);
    }

    const allSunk = (coordinate, shipName) => {
        if (gameboardShips.every(item => item.ship.sunk === true)) {
            (0,_interface_js__WEBPACK_IMPORTED_MODULE_1__.reportEnd)(coordinate, shipName);
        } else {
            (0,_interface_js__WEBPACK_IMPORTED_MODULE_1__.reportSunk)(coordinate, shipName);
        }
    }

    const receiveAttack = (coordinate) => {
        shotList.push(coordinate);
        if (gameboard[coordinate] === undefined) {
            (0,_interface_js__WEBPACK_IMPORTED_MODULE_1__.reportMiss)(coordinate);
        } else {
            const hitShip = gameboardShips.find(item => item.ship.name === gameboard[coordinate]);
            hitShip.hit();
            if (hitShip.ship.sunk === true) {
                lastHit = undefined;
                allSunk(coordinate, hitShip.ship.name);
                return lastHit;
            } else {
                lastHit = coordinate;
                (0,_interface_js__WEBPACK_IMPORTED_MODULE_1__.reportHit)(coordinate);
            }
        }
    }

    const getLastHit = () => lastHit;

    return { placeShip, receiveAttack, allSunk, gameboard, gameboardShips, shotList, getLastHit };
}   



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   game: () => (/* binding */ game),
/* harmony export */   playGame: () => (/* binding */ playGame)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ "./src/player.js");
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard.js */ "./src/gameboard.js");
/* harmony import */ var _interface_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interface.js */ "./src/interface.js");





const playGame = () => {
    //reverse initiation of players and boards once ship placement is in control of players
    const playerOneBoard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_2__.createGameboard)();
    const playerTwoBoard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_2__.createGameboard)();
    const playerOne = (0,_player_js__WEBPACK_IMPORTED_MODULE_1__.Player)(null, playerOneBoard, playerTwoBoard);
    const playerTwo = (0,_player_js__WEBPACK_IMPORTED_MODULE_1__.Player)(null, playerTwoBoard, playerOneBoard);
    const gameStart = (0,_interface_js__WEBPACK_IMPORTED_MODULE_3__.buildSetupPrompts)();
    const players = [ playerOne, playerTwo ];

    gameStart.askGameMode();

    return { playerOneBoard, playerTwoBoard, playerOne, playerTwo, players };
}

const game = playGame();



/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildSetupPrompts: () => (/* binding */ buildSetupPrompts),
/* harmony export */   populateBoard: () => (/* binding */ populateBoard),
/* harmony export */   reportEnd: () => (/* binding */ reportEnd),
/* harmony export */   reportHit: () => (/* binding */ reportHit),
/* harmony export */   reportMiss: () => (/* binding */ reportMiss),
/* harmony export */   reportSunk: () => (/* binding */ reportSunk)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
//when it is playerX's turn, populate board with left side playerXBoard (non-interactable), self-a1 etc for display hook


//self- and enemy- are coded in so that the board is flexible to reclassing if playerTwo becomes a human
const enemyCells = document.getElementById('enemy-cells');
const selfCells = document.getElementById('self-cells');

//reset board to show new player's ships, hits, misses
function clearBoard() {
    clearCells(enemyCells);
    clearCells(selfCells);
}

function clearCells(boardDisplay) {
    for (const cell of boardDisplay.children) {
        cell.className = '';
    }
}

function populateBoard(selfBoard, enemyBoard) {
    const handleAttack = (e) => {
        enemyBoard.receiveAttack(e.currentTarget.id.slice(6));
        markAttacks('enemy', enemyBoard);
        for (const cell of enemyCells.children) {
            cell.removeEventListener('click', handleAttack);
        }
    }

    //to populate hits and misses on each gameboard side using input of self vs enemy board
    function markAttacks(designation, board) {
        if (board.shotList === []) {
            return;
        } else {
            board.shotList.forEach(shot => {
                const cellDiv = document.getElementById(`${designation}-${shot}`);
                if (board.gameboard.hasOwnProperty(shot)) {
                    //if the attack logged in the attack history matches a property name in the gameboard, mark with class hit
                    cellDiv.classList.add('hit');
                    cellDiv.classList.add('has-ship');
                    //if the matching name ship in gameboardShips is sunk, mark the cell as sunk
                    const matchShip = board.gameboardShips.find(item => item.ship.name === board.gameboard[shot]);
                    if (matchShip.ship.sunk === true) {
                        cellDiv.classList.add('sunk-ship');
                    }
                } else {
                    //if the attack logged does not match a property name in the gameboard, mark with class miss
                    cellDiv.classList.add('miss');
                } 
            }); 
        }  
    }

    function intializeBoard() {
        clearBoard();

        //for cell properties in gameboard object - if they exist (have designated ship), give matching id on selfBoard class has-ship
        for (const cell in selfBoard.gameboard) {
            const cellDiv = document.getElementById(`self-${cell}`);
            cellDiv.classList.add('has-ship');
        }

        markAttacks('self', selfBoard);
        markAttacks('enemy', enemyBoard);
        
        //add listeners to enemyBoard to call the player's attack function
        for (const cell of enemyCells.children) {
            if (!enemyBoard.shotList.includes(cell.id.slice(6))) {
                cell.addEventListener('click', handleAttack);
            }
        }
    }
    
    return { handleAttack, markAttacks, intializeBoard }
}

//Modal for game prompts
const modalContainer = document.getElementById('modal-container');
const modalText = document.getElementById('modal-text');
const modalBtn = document.getElementById('modal-btn');
function hideModal() {
    modalContainer.style.display = 'none';
}
modalBtn.addEventListener('click', hideModal);

//Controls modal action once game has started
let playerTurn = 1;
function controller() {
    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.game.playerOneBoard.gameboardShips.every(item => item.ship.sunk === true) || _index_js__WEBPACK_IMPORTED_MODULE_0__.game.playerTwoBoard.gameboardShips.every(item => item.ship.sunk === true)) {
        return;
    } else {
        if (playerTurn === 0) {
            playerTurn = 1;
        } else {
            playerTurn = 0;
        }

        if (_index_js__WEBPACK_IMPORTED_MODULE_0__.game.players.at(playerTurn).isComputer === true) {
            _index_js__WEBPACK_IMPORTED_MODULE_0__.game.players.at(playerTurn).attack(_index_js__WEBPACK_IMPORTED_MODULE_0__.game.players.at(playerTurn).generateAttack());
            _index_js__WEBPACK_IMPORTED_MODULE_0__.game.players.at(playerTurn).populatePlayerBoard.markAttacks('self', _index_js__WEBPACK_IMPORTED_MODULE_0__.game.players.at(playerTurn).enemyBoard);
        } else {
            _index_js__WEBPACK_IMPORTED_MODULE_0__.game.players.at(playerTurn).populatePlayerBoard.intializeBoard();
        }
    }
}

function reportMiss(coordinate) {
    modalBtn.removeEventListener('click', controller);
    modalText.textContent = `${_index_js__WEBPACK_IMPORTED_MODULE_0__.game.players.at(playerTurn).playerName} missed at ${coordinate}.`;
    modalBtn.textContent = 'Continue';
    modalContainer.style.display = 'block';
    modalBtn.addEventListener('click', displayPassDevice);
}

function reportHit(coordinate) {
    modalBtn.removeEventListener('click', controller);
    modalText.textContent = `${_index_js__WEBPACK_IMPORTED_MODULE_0__.game.players.at(playerTurn).playerName} hit at ${coordinate}.`;
    modalBtn.textContent = 'Continue';
    modalContainer.style.display = 'block';
    modalBtn.addEventListener('click', displayPassDevice);
}

function reportSunk(coordinate, shipName) {
    modalBtn.removeEventListener('click', controller);
    let opponent;
    if (playerTurn === 0) {
        opponent = _index_js__WEBPACK_IMPORTED_MODULE_0__.game.players.at(1);
    } else {
        opponent = _index_js__WEBPACK_IMPORTED_MODULE_0__.game.players.at(0);
    }
    modalText.textContent = `With a hit at ${coordinate}, ${_index_js__WEBPACK_IMPORTED_MODULE_0__.game.players.at(playerTurn).playerName} sunk ${opponent.playerName}'s ${shipName}.`
    modalBtn.textContent = 'Continue'
    modalContainer.style.display = 'block';
    modalBtn.addEventListener('click', displayPassDevice);
}

function reportEnd(coordinate, shipName) {
    modalBtn.removeEventListener('click', controller);
    modalText.textContent = `${_index_js__WEBPACK_IMPORTED_MODULE_0__.game.players.at(playerTurn).playerName} hit ${shipName} at ${coordinate} and has won the game!`
    modalBtn.textContent = 'Play Again';
    modalContainer.style.display = 'block';
    //Reset the game conditions
    //modalBtn.addEventListener('click', playGame);
}

function displayPassDevice() {
    modalBtn.removeEventListener('click', displayPassDevice);
    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.game.playerTwo.isComputer === false) {
        clearBoard();
        modalText.textContent = 'Pass the device';
        modalBtn.textContent = 'Done';
        modalContainer.style.display = 'block';
        if (_index_js__WEBPACK_IMPORTED_MODULE_0__.game.players.at(playerTurn).isFirstTurn === true) {
            _index_js__WEBPACK_IMPORTED_MODULE_0__.game.players.at(playerTurn).isFirstTurn = false;
            modalBtn.addEventListener('click', promptGameplay);
        } else {
            modalBtn.addEventListener('click', controller);
        }
    } else {
        controller();
    }
}

function promptGameplay() {
    modalBtn.removeEventListener('click', promptGameplay);
    modalText.textContent = 'Make attacks by clicking on a cell on the enemy board. Good luck!'
    modalBtn.textContent = 'Begin'
    modalContainer.style.display = 'block';
    modalBtn.addEventListener('click', controller);
}

//Controls initialization of game
function buildSetupPrompts() {
    //Prompt for game mode: vs computer or 2 player mode
    let currentPlayer;
    const modal = document.getElementById('modal');
    const modalBtnTwo = document.createElement('button');
    const nameForm = document.createElement('form');
    const nameInput = document.createElement('input');
    nameInput.setAttribute('required', '');
    
    function askGameMode() {
        modalText.textContent = 'Welcome to Battleship, a classic warfare strategy game. What mode do you want to play?'
        modalBtn.textContent = 'vs. Computer'
        modalBtnTwo.textContent = '2 Player';
        modal.appendChild(modalBtnTwo);
        modalContainer.style.display = 'block';
        modalBtn.addEventListener('click', storeGameMode);
        modalBtnTwo.addEventListener('click', storeGameMode);
    }

    function storeGameMode(e) {
        modalBtn.removeEventListener('click', storeGameMode);
        modalBtnTwo.removeEventListener('click', storeGameMode);
        let playerDisplay;
        currentPlayer = _index_js__WEBPACK_IMPORTED_MODULE_0__.game.playerOne;
        if (e.currentTarget.id === 'modal-btn') {
            _index_js__WEBPACK_IMPORTED_MODULE_0__.game.playerTwo.isComputer = true;
            _index_js__WEBPACK_IMPORTED_MODULE_0__.game.playerTwo.playerName = 'The Computer';
            playerDisplay = 'your';
        } else {
            playerDisplay = `Player One's`;
        }
        modal.removeChild(modalBtn);
        modal.removeChild(modalBtnTwo);
        namePrompt(playerDisplay);
    }

    //Prompt for player name for each human player
    function namePrompt(player) {
        modalText.textContent = `Enter ${player} name (required)`;
        modalBtn.textContent = 'Submit';
        modal.appendChild(nameForm);
        nameForm.appendChild(nameInput);
        nameForm.appendChild(modalBtn);
        modalContainer.style.display = 'block';
        modalBtn.addEventListener('click', storePlayerName);
    }

    function storePlayerName(e) {
        modalBtn.removeEventListener('click', storePlayerName);
        e.preventDefault();
        currentPlayer.playerName = nameInput.value;
        nameInput.value = '';
        modal.removeChild(nameForm);
        modal.appendChild(modalBtn);
        promptPlaceShips();
    } 

    //Prompt to place each ship in descending order of size. Ship length feeds into drag event loop
    function promptPlaceShips() {
        let s = 0;
        let ship;
        let shipLength;
        let shipName;
        let shipIds;
        placeEach();

        function placeEach() {
            ship = Object.entries(currentPlayer.playerArgs).at(s).at(0);
            shipLength = ship.slice(-1);
            shipName = ship.substring(0,ship.length - 1);
            modalText.textContent = `Place your ${shipName} by dragging and dropping on your board. The ${shipName} takes up ${shipLength} squares on the grid.`;
            modalBtn.textContent = 'Ready';
            modalContainer.style.display = 'block';
            modalBtn.addEventListener('click', dragPlacement);

            function dragPlacement() {
                modalBtn.removeEventListener('click', dragPlacement);
                shipIds = [];
                let i = 0;
                //Event listeners placed on self gameboard cells
                for (const cell of selfCells.children) {
                    cell.setAttribute('draggable', 'true');
                    cell.addEventListener('dragstart', dragStart);
                }

                function dragStart(e) {
                    for (const cell of selfCells.children) {
                        cell.removeEventListener('dragstart', dragStart);
                    }
                    i++;
                    const firstCellId = e.currentTarget.id.slice(5);
                    shipIds.push(firstCellId);
                    e.currentTarget.classList.add('sunk-ship');
                    //Remove ghost image while dragged
                    const img = new Image();
                    e.dataTransfer.setDragImage(img, 0, 0);
                    //Set next options for ship placement as perpendicular adjacent cells
                    const xOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
                    const xIndex = parseInt(xOptions.indexOf(firstCellId.slice(0,1)));
                    const yCoord = parseInt(firstCellId.slice(1));
                    let nextCells = [];
                    if (yCoord !== 0) {
                        nextCells.push('self-' + xOptions.at(xIndex) + (yCoord - 1));
                    }
                    if (yCoord !== 6) {
                        nextCells.push('self-' + xOptions.at(xIndex) + (yCoord + 1));
                    }
                    if (xIndex !== 0) {
                        nextCells.push('self-' + xOptions.at(xIndex - 1) + yCoord);
                    }
                    if (xIndex !== 6) {
                        nextCells.push('self-' + xOptions.at(xIndex + 1) + yCoord);
                    }

                    for (const item of nextCells) {
                        if (!item.includes(undefined) && currentPlayer.selfBoard.gameboard[item.slice(5)] === undefined) {
                            const cell = document.getElementById(item);
                            if (shipLength > 2) {
                                cell.addEventListener('dragenter', dragContinue);
                            } else {
                                cell.addEventListener('dragover', dragFinish);
                                cell.addEventListener('drop', placeDragged);
                            }
                        }
                    }

                    function dragContinue(e) {
                        for (const item of nextCells) {
                            const cell = document.getElementById(item);
                            cell.removeEventListener('dragenter', dragContinue);
                        }
                        e.currentTarget.removeEventListener('dragenter', dragContinue);
                        i++;
                        const currentCellId = e.currentTarget.id.slice(5);
                        e.currentTarget.classList.add('sunk-ship');
                        shipIds.push(currentCellId);
                        //compare the firstCellId with currentCellId
                        //if their letter is the same, check to see if the number increments or decrements
                        if (firstCellId.slice(0,1) === currentCellId.slice(0,1)) {
                            //if it decrements, add a listener to the cell minus one
                            if (firstCellId.slice(1) > currentCellId.slice(1)) {
                                const nextCellY = parseInt(currentCellId.slice(1)) - 1;
                                if (nextCellY < 0) {
                                    interruptDrag();
                                } else {
                                    const nextCell = document.getElementById('self-' + currentCellId.slice(0,1) + nextCellY);
                                    listenNextCell(nextCell);
                                }
                            } else {
                                //if it increments, add a listener to the cell plus one
                                const nextCellY = parseInt(currentCellId.slice(1)) + 1;
                                if (nextCellY > 6) {
                                    interruptDrag();
                                } else {
                                    const nextCell = document.getElementById('self-' + currentCellId.slice(0,1) + nextCellY);
                                    listenNextCell(nextCell);
                                }
                            }
                        } else {
                            //if their number is the same, check to see if the letter increments or decrements vs the xOptions array
                            //if it decrements, add a listener to the cell minus a letter in the xOptions array
                            if(xOptions.indexOf(firstCellId.slice(0,1)) > xOptions.indexOf(currentCellId.slice(0,1))) {
                                const nextCellXIndex = xOptions.indexOf(currentCellId.slice(0,1)) - 1;
                                if (nextCellXIndex < 0) {
                                    interruptDrag();
                                } else {
                                    const nextCell = document.getElementById('self-' + xOptions.at(nextCellXIndex) + currentCellId.slice(1));
                                    listenNextCell(nextCell);
                                }
                            } else {
                                //if it increments, add a listener to the cell plus 1 index in the xOptions array
                                const nextCellXIndex = xOptions.indexOf(currentCellId.slice(0,1)) + 1;
                                if (nextCellXIndex > 6) {
                                    interruptDrag();
                                } else {
                                    const nextCell = document.getElementById('self-' + xOptions.at(nextCellXIndex) + currentCellId.slice(1));
                                    listenNextCell(nextCell);
                                }
                            }
                        }

                        function listenNextCell(nextCell) {
                            if (currentPlayer.selfBoard.gameboard[nextCell.id.slice(5)] === undefined) {
                                if (i < (shipLength - 1)) {
                                    nextCell.addEventListener('dragenter', dragContinue);
                                } else {
                                    nextCell.addEventListener('dragover', dragFinish);
                                    nextCell.addEventListener('drop', placeDragged);
                                }
                            } else {
                                interruptDrag();
                            }
                        }
                    }

                    function dragFinish(e) {
                        //highlight this and other cells green to indicate the ship can be placed
                        e.currentTarget.classList.add('has-ship');
                        for (const item of shipIds) {
                            const shipCell = document.getElementById('self-' + item);
                            shipCell.classList.remove('sunk-ship');
                            shipCell.classList.add('has-ship');
                        }
                        e.preventDefault();
                    }

                    function placeDragged(e) {
                        e.currentTarget.removeEventListener('dragover', dragFinish);
                        for (const item of nextCells) {
                            const cell = document.getElementById(item);
                            cell.removeEventListener('dragover', dragFinish);
                        }
                        e.currentTarget.removeEventListener('drop', placeDragged);
                        e.preventDefault();
                        const lastCellId = e.currentTarget.id.slice(5);
                        shipIds.push(lastCellId);
                        //Add the ship to the selfBoard
                        const placedShip = currentPlayer.selfBoard.placeShip(`${shipName}`, shipIds);
                        currentPlayer.selfBoard.gameboardShips.push(placedShip);
                        //increment s, if s is less than or equal to playerArgs.entries.length, placeEach again. 
                        //otherwise, remove draggable cells and start game/move to next player selection
                        s++;
                        if (s < Object.entries(currentPlayer.playerArgs).length) {
                            placeEach();
                        } else {
                            if (currentPlayer === _index_js__WEBPACK_IMPORTED_MODULE_0__.game.playerOne && _index_js__WEBPACK_IMPORTED_MODULE_0__.game.playerTwo.isComputer === false) {
                                for (const cell of selfCells.children) {
                                    cell.classList.remove('has-ship');
                                }
                                currentPlayer = _index_js__WEBPACK_IMPORTED_MODULE_0__.game.playerTwo;
                                namePrompt(`Player Two's`);
                            } else if (_index_js__WEBPACK_IMPORTED_MODULE_0__.game.playerTwo.isComputer === true) {
                                currentPlayer = _index_js__WEBPACK_IMPORTED_MODULE_0__.game.playerTwo;
                                generateShips();
                            } else {
                                for (const cell of selfCells.children) {
                                    cell.setAttribute('draggable', 'false');
                                }
                                displayPassDevice();
                            }
                        }
                        
                    }

                    function interruptDrag() {
                        for (const item of shipIds) {
                            const shipCell = document.getElementById('self-' + item);
                            shipCell.classList.remove('sunk-ship');
                        }                        
                        dragPlacement();
                    }
                }
            }
        }
    }

    function generateShips() {
        let s = 0;
        let ship;
        let shipLength;
        let shipName;
        generateEach();

        function generateEach() {
            let shipCoords = [];
            ship = Object.entries(currentPlayer.playerArgs).at(s).at(0);
            shipLength = ship.slice(-1);
            shipName = ship.substring(0,ship.length - 1);

            while (shipCoords.length < shipLength) {
                shipCoords = [];
                const xOptions = 'abcdefg';
                const xNum = Math.floor(Math.random() * xOptions.length);
                const xCoord = xOptions[xNum];
                const yCoord = Math.floor(Math.random() * xOptions.length);
                const randomCoord = xCoord + yCoord;
                if (!currentPlayer.selfBoard.gameboard[randomCoord]) {
                    shipCoords.push(randomCoord);
                    //generate a random number 0 or 1 to determine vertical or horizontal ship placement
                    const direction = Math.floor(Math.random() * 2);
                    if (direction === 0) {
                        //take randomCoord and increase the yCoord of the string shipLength - 1 times
                        for (let n = 0; n < (shipLength - 1); n++) {
                            const newY = yCoord + (n + 1);
                            //if the yCoord of any becomes greater than 6, break the loop
                            if (newY > 6) { break; } else {
                                const newCoord = xCoord + newY;
                                if (!currentPlayer.selfBoard.gameboard[newCoord]) {
                                    shipCoords.push(newCoord);
                                }
                            }
                        }
                    } else {
                        //take randomCoord and increase the xCoord of the string shipLength - 1 times
                        for (let n = 0; n < (shipLength - 1); n++) {
                            const newXNum = xNum + (n + 1);
                            //before converting to a letter and concatenating, if the xCoord pre-number becomes greate than 6, break
                            if (newXNum > 6) { break; } else {
                                const newCoord = xOptions[newXNum] + yCoord;
                                if (!currentPlayer.selfBoard.gameboard[newCoord]) {
                                    shipCoords.push(newCoord);
                                }
                            }
                        }
                    }
                }
            }

            const placedShip = currentPlayer.selfBoard.placeShip(`${shipName}`, shipCoords);
            currentPlayer.selfBoard.gameboardShips.push(placedShip);
            s++;
            if (s < Object.entries(currentPlayer.playerArgs).length) {
                generateEach();
            } else {
                promptGameplay();
            }
        }
    }

    return { askGameMode }
}



/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _interface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface.js */ "./src/interface.js");


const Player = (name, selfBoard, enemyBoard) => {
    const playerName = name;
    let isComputer = false;
    let isFirstTurn = true;
    const playerArgs = {
        carrier5: null,
        battleship4: null,
        destroyer3: null,
        submarine3: null,
        patrol2: null
    }
    selfBoard = selfBoard;
    enemyBoard = enemyBoard;
    
    const populatePlayerBoard = (0,_interface_js__WEBPACK_IMPORTED_MODULE_0__.populateBoard)(selfBoard, enemyBoard);
    const attack = (coordinate) => {
        enemyBoard.receiveAttack(coordinate);
    }

    const generateAttack = () => {
        const xOptions = 'abcdefg';
        let newAttack;
        console.log(enemyBoard.getLastHit());
        //from the last hit, generate an attack against one of the adjacent cells
        if (enemyBoard.getLastHit() !== undefined) {
            let i = 0;
            while (newAttack === undefined || enemyBoard.shotList.includes(newAttack)) {
                if (i < 50) {
                    i++;
                    const xCoord = enemyBoard.getLastHit().slice(0,1);
                    const yCoord = enemyBoard.getLastHit().slice(1);
                    const direction = Math.floor(Math.random() * 4);
                    if (direction === 0) {
                        const newXNum = xOptions.search(xCoord) - 1;
                        if (newXNum < 0) {
                            continue;
                        } else {
                            newAttack = xOptions[newXNum] + yCoord;
                        }
                    } else if (direction === 1) {
                        const newXNum = xOptions.search(xCoord) + 1;
                        if (newXNum > 6) {
                            continue;
                        } else {
                            newAttack = xOptions[newXNum] + yCoord;
                        }
                    } else if (direction === 2) {
                        const newYCoord = yCoord - 1;
                        if (newYCoord < 0) {
                            continue;
                        } else {
                            newAttack = xCoord + newYCoord;
                        }
                    } else if (direction === 3) {
                        const newYCoord = yCoord + 1;
                        if (newYCoord > 6) {
                            continue;
                        } else {
                            newAttack = xCoord + newYCoord;
                        }
                    }
                } else {
                    randomAttack();
                }
            }
        } else {
            randomAttack();
        }

        function randomAttack() {
            //generate a random number 1-7 twice, one translates to a-g, concatenate with the number
            //called with xOptions length so changes in board size happen in both dimensions
            //check the enemy board's shotList, then attack, otherwise loop again
            for (let i = 0; i < 1000; i++) {
                const xCoord = xOptions[Math.floor(Math.random() * xOptions.length)];
                const yCoord = Math.floor(Math.random() * xOptions.length);
                newAttack = xCoord + yCoord;
                if (!enemyBoard.shotList.includes(newAttack)) {
                    break;
                }
            }
        }

        return newAttack;
    };

    return { playerName, playerArgs, selfBoard, enemyBoard, isComputer, isFirstTurn, attack, generateAttack, populatePlayerBoard };
}





/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createShip: () => (/* binding */ createShip)
/* harmony export */ });
const createShip = (name, length) => {
    const ship = {
        name: name,
        length: length,
        hits: 0,
        sunk: false
    };

    const isSunk = () => {
        ship.sunk = true;
    }

    const hit = () => {
        ship.hits = ship.hits + 1;
        if (ship.hits === ship.length) {
            isSunk();
        }
        return ship;
    };

    return { ship, hit };
}



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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL1ByZXNzU3RhcnQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi96YXAuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9jaXJjbGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosICo6YmVmb3JlLCAqOmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1ByZXNzU3RhcnQnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5ib2R5LCBodG1sIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnKTtcbiAgICBmb250LWZhbWlseTogJ1ByZXNzU3RhcnQnLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbn1cblxuOnJvb3Qge1xuICAgIC0tYmc6ICMwMDAwMDA7XG4gICAgLS1jb250cmFzdDogI2ZmZmZmZjtcbiAgICAtLWFjY2VudDogIzFkZjkwMDtcbiAgICAtLWVtcHR5OiAjNjg2ODY4O1xuICAgIC0tc2hpcDogcmdiYSgxNiwxNDIsMCwgLjUpO1xuICAgIC0tc3VuazogcmdiYSgyNTUsIDAsIDAsIC41KTtcbiAgICAtLWhpdDogI2ZmMDAwMDtcbn1cblxuaDIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMTZweCwgM3Z3LCAzNnB4KTtcbn1cblxuI2dhbWVib2FyZHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uZ2FtZWJvYXJkIHtcbiAgICB3aWR0aDogNDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMCUgYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMCUgYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICAgICAgXCJoZWFkZXIgaGVhZGVyXCJcbiAgICAgICAgXCIuIHgtbGFiZWxzXCJcbiAgICAgICAgXCJ5LWxhYmVscyBib2FyZC1jZWxsc1wiO1xufVxuXG4uZ2FtZWJvYXJkID4gaDIge1xuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IC41cmVtIDA7XG59XG5cbi54LWxhYmVscyB7XG4gICAgZ3JpZC1hcmVhOiB4LWxhYmVscztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbn1cblxuLnktbGFiZWxzIHtcbiAgICBncmlkLWFyZWE6IHktbGFiZWxzO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNywgMWZyKTtcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xufVxuXG4uYm9hcmQtY2VsbHMge1xuICAgIGdyaWQtYXJlYTogYm9hcmQtY2VsbHM7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XG4gICAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0tYWNjZW50KTtcbn1cblxuLmJvYXJkLWNlbGxzID4gZGl2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lbXB0eSk7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tYWNjZW50KTtcbn1cblxuLmJvYXJkLWNlbGxzID4gLmhhcy1zaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwKTtcbn1cblxuLmJvYXJkLWNlbGxzID4gLnN1bmstc2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3Vuayk7XG59XG5cbi5oaXQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuLm1pc3Mge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbn1cblxuI21vZGFsLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuNSk7XG59XG5cbiNtb2RhbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjUlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBoZWlnaHQ6IGNsYW1wKDIwMHB4LCAyMHZoLCAyNTBweCk7XG4gICAgd2lkdGg6IGNsYW1wKDMwMHB4LCAyMHZ3LCA0MDBweCk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1hY2NlbnQpO1xuICAgIGNvbG9yOiB2YXIoLS1jb250cmFzdCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmcpO1xufVxuXG5mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAzMHB4O1xufVxuXG5pbnB1dDppbnZhbGlkIHtcbiAgICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1oaXQpO1xufVxuXG4jbW9kYWwtdGV4dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5idXR0b24ge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6ICdQcmVzc1N0YXJ0JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZyk7XG4gICAgcGFkZGluZzogLjhyZW0gMjBweDtcbiAgICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1jb250cmFzdCk7XG4gICAgY29sb3I6IHZhcigtLWNvbnRyYXN0KTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1hY2NlbnQpO1xuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xufVxuXG5idXR0b246Zm9jdXMtdmlzaWJsZSB7XG4gICAgb3V0bGluZTogbWF4KDJweCwgMC4xNWVtKSBzb2xpZCB2YXIoLS1hY2NlbnQpO1xuICAgIG91dGxpbmUtb2Zmc2V0OiBtYXgoM3B4LCAwLjE1ZW0pO1xufVxuXG5idXR0b246YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDNweCk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsNENBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixpS0FBaUs7SUFDakssb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsV0FBVztJQUNYLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQzs7OzhCQUcwQjtBQUM5Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLG1CQUFtQjtJQUNuQiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0kseURBQWtDO0FBQ3RDOztBQUVBO0lBQ0kseURBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0lBQ1AsYUFBYTtJQUNiLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLGlDQUFpQztJQUNqQyxnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLCtCQUErQjtJQUMvQixzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLDZDQUE2QztJQUM3QyxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1ByZXNzU3RhcnQnO1xcbiAgICBzcmM6IHVybCgnLi9QcmVzc1N0YXJ0LnR0ZicpO1xcbn1cXG5cXG5ib2R5LCBodG1sIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmcpO1xcbiAgICBmb250LWZhbWlseTogJ1ByZXNzU3RhcnQnLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudCk7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1iZzogIzAwMDAwMDtcXG4gICAgLS1jb250cmFzdDogI2ZmZmZmZjtcXG4gICAgLS1hY2NlbnQ6ICMxZGY5MDA7XFxuICAgIC0tZW1wdHk6ICM2ODY4Njg7XFxuICAgIC0tc2hpcDogcmdiYSgxNiwxNDIsMCwgLjUpO1xcbiAgICAtLXN1bms6IHJnYmEoMjU1LCAwLCAwLCAuNSk7XFxuICAgIC0taGl0OiAjZmYwMDAwO1xcbn1cXG5cXG5oMiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMTZweCwgM3Z3LCAzNnB4KTtcXG59XFxuXFxuI2dhbWVib2FyZHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAlIGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwJSBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICAgICAgXFxcIi4geC1sYWJlbHNcXFwiXFxuICAgICAgICBcXFwieS1sYWJlbHMgYm9hcmQtY2VsbHNcXFwiO1xcbn1cXG5cXG4uZ2FtZWJvYXJkID4gaDIge1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IC41cmVtIDA7XFxufVxcblxcbi54LWxhYmVscyB7XFxuICAgIGdyaWQtYXJlYTogeC1sYWJlbHM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi55LWxhYmVscyB7XFxuICAgIGdyaWQtYXJlYTogeS1sYWJlbHM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDcsIDFmcik7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZC1jZWxscyB7XFxuICAgIGdyaWQtYXJlYTogYm9hcmQtY2VsbHM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuICAgIGJvcmRlcjogc29saWQgM3B4IHZhcigtLWFjY2VudCk7XFxufVxcblxcbi5ib2FyZC1jZWxscyA+IGRpdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVtcHR5KTtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tYWNjZW50KTtcXG59XFxuXFxuLmJvYXJkLWNlbGxzID4gLmhhcy1zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcCk7XFxufVxcblxcbi5ib2FyZC1jZWxscyA+IC5zdW5rLXNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdW5rKTtcXG59XFxuXFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi96YXAuc3ZnJyk7XFxufVxcblxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2NpcmNsZS5zdmcnKTtcXG59XFxuXFxuI21vZGFsLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC41KTtcXG59XFxuXFxuI21vZGFsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjUlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBoZWlnaHQ6IGNsYW1wKDIwMHB4LCAyMHZoLCAyNTBweCk7XFxuICAgIHdpZHRoOiBjbGFtcCgzMDBweCwgMjB2dywgNDAwcHgpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1hY2NlbnQpO1xcbiAgICBjb2xvcjogdmFyKC0tY29udHJhc3QpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZyk7XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuaW5wdXQ6aW52YWxpZCB7XFxuICAgIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWhpdCk7XFxufVxcblxcbiNtb2RhbC10ZXh0IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBmb250LWZhbWlseTogJ1ByZXNzU3RhcnQnO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZyk7XFxuICAgIHBhZGRpbmc6IC44cmVtIDIwcHg7XFxuICAgIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWNvbnRyYXN0KTtcXG4gICAgY29sb3I6IHZhcigtLWNvbnRyYXN0KTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tYWNjZW50KTtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudCk7XFxufVxcblxcbmJ1dHRvbjpmb2N1cy12aXNpYmxlIHtcXG4gICAgb3V0bGluZTogbWF4KDJweCwgMC4xNWVtKSBzb2xpZCB2YXIoLS1hY2NlbnQpO1xcbiAgICBvdXRsaW5lLW9mZnNldDogbWF4KDNweCwgMC4xNWVtKTtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgM3B4KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjcmVhdGVTaGlwIH0gZnJvbSAnLi9zaGlwLmpzJztcbmltcG9ydCB7IHJlcG9ydE1pc3MsIHJlcG9ydEhpdCwgcmVwb3J0U3VuaywgcmVwb3J0RW5kIH0gZnJvbSAnLi9pbnRlcmZhY2UuanMnO1xuXG5jb25zdCBjcmVhdGVHYW1lYm9hcmQgPSAoKSA9PiB7XG4gICAgbGV0IGdhbWVib2FyZCA9IHt9O1xuICAgIGxldCBnYW1lYm9hcmRTaGlwcyA9IFtdO1xuICAgIGxldCBzaG90TGlzdCA9IFtdO1xuICAgIGxldCBsYXN0SGl0O1xuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKG5hbWUsIGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGNvb3JkaW5hdGVzLmxlbmd0aDtcbiAgICAgICAgY29vcmRpbmF0ZXMuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgIGdhbWVib2FyZFtjb29yZGluYXRlXSA9IG5hbWU7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY3JlYXRlU2hpcChuYW1lLCBsZW5ndGgpO1xuICAgIH1cblxuICAgIGNvbnN0IGFsbFN1bmsgPSAoY29vcmRpbmF0ZSwgc2hpcE5hbWUpID0+IHtcbiAgICAgICAgaWYgKGdhbWVib2FyZFNoaXBzLmV2ZXJ5KGl0ZW0gPT4gaXRlbS5zaGlwLnN1bmsgPT09IHRydWUpKSB7XG4gICAgICAgICAgICByZXBvcnRFbmQoY29vcmRpbmF0ZSwgc2hpcE5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVwb3J0U3Vuayhjb29yZGluYXRlLCBzaGlwTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgc2hvdExpc3QucHVzaChjb29yZGluYXRlKTtcbiAgICAgICAgaWYgKGdhbWVib2FyZFtjb29yZGluYXRlXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXBvcnRNaXNzKGNvb3JkaW5hdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgaGl0U2hpcCA9IGdhbWVib2FyZFNoaXBzLmZpbmQoaXRlbSA9PiBpdGVtLnNoaXAubmFtZSA9PT0gZ2FtZWJvYXJkW2Nvb3JkaW5hdGVdKTtcbiAgICAgICAgICAgIGhpdFNoaXAuaGl0KCk7XG4gICAgICAgICAgICBpZiAoaGl0U2hpcC5zaGlwLnN1bmsgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBsYXN0SGl0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGFsbFN1bmsoY29vcmRpbmF0ZSwgaGl0U2hpcC5zaGlwLm5hbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBsYXN0SGl0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsYXN0SGl0ID0gY29vcmRpbmF0ZTtcbiAgICAgICAgICAgICAgICByZXBvcnRIaXQoY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRMYXN0SGl0ID0gKCkgPT4gbGFzdEhpdDtcblxuICAgIHJldHVybiB7IHBsYWNlU2hpcCwgcmVjZWl2ZUF0dGFjaywgYWxsU3VuaywgZ2FtZWJvYXJkLCBnYW1lYm9hcmRTaGlwcywgc2hvdExpc3QsIGdldExhc3RIaXQgfTtcbn0gICBcblxuZXhwb3J0IHsgY3JlYXRlR2FtZWJvYXJkIH07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL3BsYXllci5qcyc7XG5pbXBvcnQgeyBjcmVhdGVHYW1lYm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZC5qcyc7XG5pbXBvcnQgeyBidWlsZFNldHVwUHJvbXB0cyB9IGZyb20gJy4vaW50ZXJmYWNlLmpzJztcblxuY29uc3QgcGxheUdhbWUgPSAoKSA9PiB7XG4gICAgLy9yZXZlcnNlIGluaXRpYXRpb24gb2YgcGxheWVycyBhbmQgYm9hcmRzIG9uY2Ugc2hpcCBwbGFjZW1lbnQgaXMgaW4gY29udHJvbCBvZiBwbGF5ZXJzXG4gICAgY29uc3QgcGxheWVyT25lQm9hcmQgPSBjcmVhdGVHYW1lYm9hcmQoKTtcbiAgICBjb25zdCBwbGF5ZXJUd29Cb2FyZCA9IGNyZWF0ZUdhbWVib2FyZCgpO1xuICAgIGNvbnN0IHBsYXllck9uZSA9IFBsYXllcihudWxsLCBwbGF5ZXJPbmVCb2FyZCwgcGxheWVyVHdvQm9hcmQpO1xuICAgIGNvbnN0IHBsYXllclR3byA9IFBsYXllcihudWxsLCBwbGF5ZXJUd29Cb2FyZCwgcGxheWVyT25lQm9hcmQpO1xuICAgIGNvbnN0IGdhbWVTdGFydCA9IGJ1aWxkU2V0dXBQcm9tcHRzKCk7XG4gICAgY29uc3QgcGxheWVycyA9IFsgcGxheWVyT25lLCBwbGF5ZXJUd28gXTtcblxuICAgIGdhbWVTdGFydC5hc2tHYW1lTW9kZSgpO1xuXG4gICAgcmV0dXJuIHsgcGxheWVyT25lQm9hcmQsIHBsYXllclR3b0JvYXJkLCBwbGF5ZXJPbmUsIHBsYXllclR3bywgcGxheWVycyB9O1xufVxuXG5jb25zdCBnYW1lID0gcGxheUdhbWUoKTtcblxuZXhwb3J0IHsgZ2FtZSwgcGxheUdhbWUgfTsiLCIvL3doZW4gaXQgaXMgcGxheWVyWCdzIHR1cm4sIHBvcHVsYXRlIGJvYXJkIHdpdGggbGVmdCBzaWRlIHBsYXllclhCb2FyZCAobm9uLWludGVyYWN0YWJsZSksIHNlbGYtYTEgZXRjIGZvciBkaXNwbGF5IGhvb2tcbmltcG9ydCB7IGdhbWUgfSBmcm9tICcuL2luZGV4LmpzJztcblxuLy9zZWxmLSBhbmQgZW5lbXktIGFyZSBjb2RlZCBpbiBzbyB0aGF0IHRoZSBib2FyZCBpcyBmbGV4aWJsZSB0byByZWNsYXNzaW5nIGlmIHBsYXllclR3byBiZWNvbWVzIGEgaHVtYW5cbmNvbnN0IGVuZW15Q2VsbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW5lbXktY2VsbHMnKTtcbmNvbnN0IHNlbGZDZWxscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxmLWNlbGxzJyk7XG5cbi8vcmVzZXQgYm9hcmQgdG8gc2hvdyBuZXcgcGxheWVyJ3Mgc2hpcHMsIGhpdHMsIG1pc3Nlc1xuZnVuY3Rpb24gY2xlYXJCb2FyZCgpIHtcbiAgICBjbGVhckNlbGxzKGVuZW15Q2VsbHMpO1xuICAgIGNsZWFyQ2VsbHMoc2VsZkNlbGxzKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDZWxscyhib2FyZERpc3BsYXkpIHtcbiAgICBmb3IgKGNvbnN0IGNlbGwgb2YgYm9hcmREaXNwbGF5LmNoaWxkcmVuKSB7XG4gICAgICAgIGNlbGwuY2xhc3NOYW1lID0gJyc7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUJvYXJkKHNlbGZCb2FyZCwgZW5lbXlCb2FyZCkge1xuICAgIGNvbnN0IGhhbmRsZUF0dGFjayA9IChlKSA9PiB7XG4gICAgICAgIGVuZW15Qm9hcmQucmVjZWl2ZUF0dGFjayhlLmN1cnJlbnRUYXJnZXQuaWQuc2xpY2UoNikpO1xuICAgICAgICBtYXJrQXR0YWNrcygnZW5lbXknLCBlbmVteUJvYXJkKTtcbiAgICAgICAgZm9yIChjb25zdCBjZWxsIG9mIGVuZW15Q2VsbHMuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVBdHRhY2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy90byBwb3B1bGF0ZSBoaXRzIGFuZCBtaXNzZXMgb24gZWFjaCBnYW1lYm9hcmQgc2lkZSB1c2luZyBpbnB1dCBvZiBzZWxmIHZzIGVuZW15IGJvYXJkXG4gICAgZnVuY3Rpb24gbWFya0F0dGFja3MoZGVzaWduYXRpb24sIGJvYXJkKSB7XG4gICAgICAgIGlmIChib2FyZC5zaG90TGlzdCA9PT0gW10pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvYXJkLnNob3RMaXN0LmZvckVhY2goc2hvdCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2Rlc2lnbmF0aW9ufS0ke3Nob3R9YCk7XG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkLmdhbWVib2FyZC5oYXNPd25Qcm9wZXJ0eShzaG90KSkge1xuICAgICAgICAgICAgICAgICAgICAvL2lmIHRoZSBhdHRhY2sgbG9nZ2VkIGluIHRoZSBhdHRhY2sgaGlzdG9yeSBtYXRjaGVzIGEgcHJvcGVydHkgbmFtZSBpbiB0aGUgZ2FtZWJvYXJkLCBtYXJrIHdpdGggY2xhc3MgaGl0XG4gICAgICAgICAgICAgICAgICAgIGNlbGxEaXYuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGxEaXYuY2xhc3NMaXN0LmFkZCgnaGFzLXNoaXAnKTtcbiAgICAgICAgICAgICAgICAgICAgLy9pZiB0aGUgbWF0Y2hpbmcgbmFtZSBzaGlwIGluIGdhbWVib2FyZFNoaXBzIGlzIHN1bmssIG1hcmsgdGhlIGNlbGwgYXMgc3Vua1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaFNoaXAgPSBib2FyZC5nYW1lYm9hcmRTaGlwcy5maW5kKGl0ZW0gPT4gaXRlbS5zaGlwLm5hbWUgPT09IGJvYXJkLmdhbWVib2FyZFtzaG90XSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaFNoaXAuc2hpcC5zdW5rID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsRGl2LmNsYXNzTGlzdC5hZGQoJ3N1bmstc2hpcCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy9pZiB0aGUgYXR0YWNrIGxvZ2dlZCBkb2VzIG5vdCBtYXRjaCBhIHByb3BlcnR5IG5hbWUgaW4gdGhlIGdhbWVib2FyZCwgbWFyayB3aXRoIGNsYXNzIG1pc3NcbiAgICAgICAgICAgICAgICAgICAgY2VsbERpdi5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH0pOyBcbiAgICAgICAgfSAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW50aWFsaXplQm9hcmQoKSB7XG4gICAgICAgIGNsZWFyQm9hcmQoKTtcblxuICAgICAgICAvL2ZvciBjZWxsIHByb3BlcnRpZXMgaW4gZ2FtZWJvYXJkIG9iamVjdCAtIGlmIHRoZXkgZXhpc3QgKGhhdmUgZGVzaWduYXRlZCBzaGlwKSwgZ2l2ZSBtYXRjaGluZyBpZCBvbiBzZWxmQm9hcmQgY2xhc3MgaGFzLXNoaXBcbiAgICAgICAgZm9yIChjb25zdCBjZWxsIGluIHNlbGZCb2FyZC5nYW1lYm9hcmQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGxEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc2VsZi0ke2NlbGx9YCk7XG4gICAgICAgICAgICBjZWxsRGl2LmNsYXNzTGlzdC5hZGQoJ2hhcy1zaGlwJyk7XG4gICAgICAgIH1cblxuICAgICAgICBtYXJrQXR0YWNrcygnc2VsZicsIHNlbGZCb2FyZCk7XG4gICAgICAgIG1hcmtBdHRhY2tzKCdlbmVteScsIGVuZW15Qm9hcmQpO1xuICAgICAgICBcbiAgICAgICAgLy9hZGQgbGlzdGVuZXJzIHRvIGVuZW15Qm9hcmQgdG8gY2FsbCB0aGUgcGxheWVyJ3MgYXR0YWNrIGZ1bmN0aW9uXG4gICAgICAgIGZvciAoY29uc3QgY2VsbCBvZiBlbmVteUNlbGxzLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBpZiAoIWVuZW15Qm9hcmQuc2hvdExpc3QuaW5jbHVkZXMoY2VsbC5pZC5zbGljZSg2KSkpIHtcbiAgICAgICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQXR0YWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4geyBoYW5kbGVBdHRhY2ssIG1hcmtBdHRhY2tzLCBpbnRpYWxpemVCb2FyZCB9XG59XG5cbi8vTW9kYWwgZm9yIGdhbWUgcHJvbXB0c1xuY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtY29udGFpbmVyJyk7XG5jb25zdCBtb2RhbFRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtdGV4dCcpO1xuY29uc3QgbW9kYWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtYnRuJyk7XG5mdW5jdGlvbiBoaWRlTW9kYWwoKSB7XG4gICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cbm1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZU1vZGFsKTtcblxuLy9Db250cm9scyBtb2RhbCBhY3Rpb24gb25jZSBnYW1lIGhhcyBzdGFydGVkXG5sZXQgcGxheWVyVHVybiA9IDE7XG5mdW5jdGlvbiBjb250cm9sbGVyKCkge1xuICAgIGlmIChnYW1lLnBsYXllck9uZUJvYXJkLmdhbWVib2FyZFNoaXBzLmV2ZXJ5KGl0ZW0gPT4gaXRlbS5zaGlwLnN1bmsgPT09IHRydWUpIHx8IGdhbWUucGxheWVyVHdvQm9hcmQuZ2FtZWJvYXJkU2hpcHMuZXZlcnkoaXRlbSA9PiBpdGVtLnNoaXAuc3VuayA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChwbGF5ZXJUdXJuID09PSAwKSB7XG4gICAgICAgICAgICBwbGF5ZXJUdXJuID0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBsYXllclR1cm4gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGdhbWUucGxheWVycy5hdChwbGF5ZXJUdXJuKS5pc0NvbXB1dGVyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBnYW1lLnBsYXllcnMuYXQocGxheWVyVHVybikuYXR0YWNrKGdhbWUucGxheWVycy5hdChwbGF5ZXJUdXJuKS5nZW5lcmF0ZUF0dGFjaygpKTtcbiAgICAgICAgICAgIGdhbWUucGxheWVycy5hdChwbGF5ZXJUdXJuKS5wb3B1bGF0ZVBsYXllckJvYXJkLm1hcmtBdHRhY2tzKCdzZWxmJywgZ2FtZS5wbGF5ZXJzLmF0KHBsYXllclR1cm4pLmVuZW15Qm9hcmQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2FtZS5wbGF5ZXJzLmF0KHBsYXllclR1cm4pLnBvcHVsYXRlUGxheWVyQm9hcmQuaW50aWFsaXplQm9hcmQoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVwb3J0TWlzcyhjb29yZGluYXRlKSB7XG4gICAgbW9kYWxCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250cm9sbGVyKTtcbiAgICBtb2RhbFRleHQudGV4dENvbnRlbnQgPSBgJHtnYW1lLnBsYXllcnMuYXQocGxheWVyVHVybikucGxheWVyTmFtZX0gbWlzc2VkIGF0ICR7Y29vcmRpbmF0ZX0uYDtcbiAgICBtb2RhbEJ0bi50ZXh0Q29udGVudCA9ICdDb250aW51ZSc7XG4gICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgbW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5UGFzc0RldmljZSk7XG59XG5cbmZ1bmN0aW9uIHJlcG9ydEhpdChjb29yZGluYXRlKSB7XG4gICAgbW9kYWxCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250cm9sbGVyKTtcbiAgICBtb2RhbFRleHQudGV4dENvbnRlbnQgPSBgJHtnYW1lLnBsYXllcnMuYXQocGxheWVyVHVybikucGxheWVyTmFtZX0gaGl0IGF0ICR7Y29vcmRpbmF0ZX0uYDtcbiAgICBtb2RhbEJ0bi50ZXh0Q29udGVudCA9ICdDb250aW51ZSc7XG4gICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgbW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5UGFzc0RldmljZSk7XG59XG5cbmZ1bmN0aW9uIHJlcG9ydFN1bmsoY29vcmRpbmF0ZSwgc2hpcE5hbWUpIHtcbiAgICBtb2RhbEJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnRyb2xsZXIpO1xuICAgIGxldCBvcHBvbmVudDtcbiAgICBpZiAocGxheWVyVHVybiA9PT0gMCkge1xuICAgICAgICBvcHBvbmVudCA9IGdhbWUucGxheWVycy5hdCgxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBvcHBvbmVudCA9IGdhbWUucGxheWVycy5hdCgwKTtcbiAgICB9XG4gICAgbW9kYWxUZXh0LnRleHRDb250ZW50ID0gYFdpdGggYSBoaXQgYXQgJHtjb29yZGluYXRlfSwgJHtnYW1lLnBsYXllcnMuYXQocGxheWVyVHVybikucGxheWVyTmFtZX0gc3VuayAke29wcG9uZW50LnBsYXllck5hbWV9J3MgJHtzaGlwTmFtZX0uYFxuICAgIG1vZGFsQnRuLnRleHRDb250ZW50ID0gJ0NvbnRpbnVlJ1xuICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIG1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheVBhc3NEZXZpY2UpO1xufVxuXG5mdW5jdGlvbiByZXBvcnRFbmQoY29vcmRpbmF0ZSwgc2hpcE5hbWUpIHtcbiAgICBtb2RhbEJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnRyb2xsZXIpO1xuICAgIG1vZGFsVGV4dC50ZXh0Q29udGVudCA9IGAke2dhbWUucGxheWVycy5hdChwbGF5ZXJUdXJuKS5wbGF5ZXJOYW1lfSBoaXQgJHtzaGlwTmFtZX0gYXQgJHtjb29yZGluYXRlfSBhbmQgaGFzIHdvbiB0aGUgZ2FtZSFgXG4gICAgbW9kYWxCdG4udGV4dENvbnRlbnQgPSAnUGxheSBBZ2Fpbic7XG4gICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgLy9SZXNldCB0aGUgZ2FtZSBjb25kaXRpb25zXG4gICAgLy9tb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXlHYW1lKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVBhc3NEZXZpY2UoKSB7XG4gICAgbW9kYWxCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5UGFzc0RldmljZSk7XG4gICAgaWYgKGdhbWUucGxheWVyVHdvLmlzQ29tcHV0ZXIgPT09IGZhbHNlKSB7XG4gICAgICAgIGNsZWFyQm9hcmQoKTtcbiAgICAgICAgbW9kYWxUZXh0LnRleHRDb250ZW50ID0gJ1Bhc3MgdGhlIGRldmljZSc7XG4gICAgICAgIG1vZGFsQnRuLnRleHRDb250ZW50ID0gJ0RvbmUnO1xuICAgICAgICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgaWYgKGdhbWUucGxheWVycy5hdChwbGF5ZXJUdXJuKS5pc0ZpcnN0VHVybiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZ2FtZS5wbGF5ZXJzLmF0KHBsYXllclR1cm4pLmlzRmlyc3RUdXJuID0gZmFsc2U7XG4gICAgICAgICAgICBtb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByb21wdEdhbWVwbGF5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udHJvbGxlcik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb250cm9sbGVyKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwcm9tcHRHYW1lcGxheSgpIHtcbiAgICBtb2RhbEJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHByb21wdEdhbWVwbGF5KTtcbiAgICBtb2RhbFRleHQudGV4dENvbnRlbnQgPSAnTWFrZSBhdHRhY2tzIGJ5IGNsaWNraW5nIG9uIGEgY2VsbCBvbiB0aGUgZW5lbXkgYm9hcmQuIEdvb2QgbHVjayEnXG4gICAgbW9kYWxCdG4udGV4dENvbnRlbnQgPSAnQmVnaW4nXG4gICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgbW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250cm9sbGVyKTtcbn1cblxuLy9Db250cm9scyBpbml0aWFsaXphdGlvbiBvZiBnYW1lXG5mdW5jdGlvbiBidWlsZFNldHVwUHJvbXB0cygpIHtcbiAgICAvL1Byb21wdCBmb3IgZ2FtZSBtb2RlOiB2cyBjb21wdXRlciBvciAyIHBsYXllciBtb2RlXG4gICAgbGV0IGN1cnJlbnRQbGF5ZXI7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcbiAgICBjb25zdCBtb2RhbEJ0blR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IG5hbWVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgXG4gICAgZnVuY3Rpb24gYXNrR2FtZU1vZGUoKSB7XG4gICAgICAgIG1vZGFsVGV4dC50ZXh0Q29udGVudCA9ICdXZWxjb21lIHRvIEJhdHRsZXNoaXAsIGEgY2xhc3NpYyB3YXJmYXJlIHN0cmF0ZWd5IGdhbWUuIFdoYXQgbW9kZSBkbyB5b3Ugd2FudCB0byBwbGF5PydcbiAgICAgICAgbW9kYWxCdG4udGV4dENvbnRlbnQgPSAndnMuIENvbXB1dGVyJ1xuICAgICAgICBtb2RhbEJ0blR3by50ZXh0Q29udGVudCA9ICcyIFBsYXllcic7XG4gICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKG1vZGFsQnRuVHdvKTtcbiAgICAgICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RvcmVHYW1lTW9kZSk7XG4gICAgICAgIG1vZGFsQnRuVHdvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RvcmVHYW1lTW9kZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcmVHYW1lTW9kZShlKSB7XG4gICAgICAgIG1vZGFsQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RvcmVHYW1lTW9kZSk7XG4gICAgICAgIG1vZGFsQnRuVHdvLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RvcmVHYW1lTW9kZSk7XG4gICAgICAgIGxldCBwbGF5ZXJEaXNwbGF5O1xuICAgICAgICBjdXJyZW50UGxheWVyID0gZ2FtZS5wbGF5ZXJPbmU7XG4gICAgICAgIGlmIChlLmN1cnJlbnRUYXJnZXQuaWQgPT09ICdtb2RhbC1idG4nKSB7XG4gICAgICAgICAgICBnYW1lLnBsYXllclR3by5pc0NvbXB1dGVyID0gdHJ1ZTtcbiAgICAgICAgICAgIGdhbWUucGxheWVyVHdvLnBsYXllck5hbWUgPSAnVGhlIENvbXB1dGVyJztcbiAgICAgICAgICAgIHBsYXllckRpc3BsYXkgPSAneW91cic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwbGF5ZXJEaXNwbGF5ID0gYFBsYXllciBPbmUnc2A7XG4gICAgICAgIH1cbiAgICAgICAgbW9kYWwucmVtb3ZlQ2hpbGQobW9kYWxCdG4pO1xuICAgICAgICBtb2RhbC5yZW1vdmVDaGlsZChtb2RhbEJ0blR3byk7XG4gICAgICAgIG5hbWVQcm9tcHQocGxheWVyRGlzcGxheSk7XG4gICAgfVxuXG4gICAgLy9Qcm9tcHQgZm9yIHBsYXllciBuYW1lIGZvciBlYWNoIGh1bWFuIHBsYXllclxuICAgIGZ1bmN0aW9uIG5hbWVQcm9tcHQocGxheWVyKSB7XG4gICAgICAgIG1vZGFsVGV4dC50ZXh0Q29udGVudCA9IGBFbnRlciAke3BsYXllcn0gbmFtZSAocmVxdWlyZWQpYDtcbiAgICAgICAgbW9kYWxCdG4udGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQobmFtZUZvcm0pO1xuICAgICAgICBuYW1lRm9ybS5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuICAgICAgICBuYW1lRm9ybS5hcHBlbmRDaGlsZChtb2RhbEJ0bik7XG4gICAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBtb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0b3JlUGxheWVyTmFtZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcmVQbGF5ZXJOYW1lKGUpIHtcbiAgICAgICAgbW9kYWxCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdG9yZVBsYXllck5hbWUpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGN1cnJlbnRQbGF5ZXIucGxheWVyTmFtZSA9IG5hbWVJbnB1dC52YWx1ZTtcbiAgICAgICAgbmFtZUlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIG1vZGFsLnJlbW92ZUNoaWxkKG5hbWVGb3JtKTtcbiAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxCdG4pO1xuICAgICAgICBwcm9tcHRQbGFjZVNoaXBzKCk7XG4gICAgfSBcblxuICAgIC8vUHJvbXB0IHRvIHBsYWNlIGVhY2ggc2hpcCBpbiBkZXNjZW5kaW5nIG9yZGVyIG9mIHNpemUuIFNoaXAgbGVuZ3RoIGZlZWRzIGludG8gZHJhZyBldmVudCBsb29wXG4gICAgZnVuY3Rpb24gcHJvbXB0UGxhY2VTaGlwcygpIHtcbiAgICAgICAgbGV0IHMgPSAwO1xuICAgICAgICBsZXQgc2hpcDtcbiAgICAgICAgbGV0IHNoaXBMZW5ndGg7XG4gICAgICAgIGxldCBzaGlwTmFtZTtcbiAgICAgICAgbGV0IHNoaXBJZHM7XG4gICAgICAgIHBsYWNlRWFjaCgpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHBsYWNlRWFjaCgpIHtcbiAgICAgICAgICAgIHNoaXAgPSBPYmplY3QuZW50cmllcyhjdXJyZW50UGxheWVyLnBsYXllckFyZ3MpLmF0KHMpLmF0KDApO1xuICAgICAgICAgICAgc2hpcExlbmd0aCA9IHNoaXAuc2xpY2UoLTEpO1xuICAgICAgICAgICAgc2hpcE5hbWUgPSBzaGlwLnN1YnN0cmluZygwLHNoaXAubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICBtb2RhbFRleHQudGV4dENvbnRlbnQgPSBgUGxhY2UgeW91ciAke3NoaXBOYW1lfSBieSBkcmFnZ2luZyBhbmQgZHJvcHBpbmcgb24geW91ciBib2FyZC4gVGhlICR7c2hpcE5hbWV9IHRha2VzIHVwICR7c2hpcExlbmd0aH0gc3F1YXJlcyBvbiB0aGUgZ3JpZC5gO1xuICAgICAgICAgICAgbW9kYWxCdG4udGV4dENvbnRlbnQgPSAnUmVhZHknO1xuICAgICAgICAgICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICBtb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRyYWdQbGFjZW1lbnQpO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBkcmFnUGxhY2VtZW50KCkge1xuICAgICAgICAgICAgICAgIG1vZGFsQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZHJhZ1BsYWNlbWVudCk7XG4gICAgICAgICAgICAgICAgc2hpcElkcyA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgICAgICAvL0V2ZW50IGxpc3RlbmVycyBwbGFjZWQgb24gc2VsZiBnYW1lYm9hcmQgY2VsbHNcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNlbGwgb2Ygc2VsZkNlbGxzLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWdTdGFydCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZHJhZ1N0YXJ0KGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBjZWxsIG9mIHNlbGZDZWxscy5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnU3RhcnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlyc3RDZWxsSWQgPSBlLmN1cnJlbnRUYXJnZXQuaWQuc2xpY2UoNSk7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBJZHMucHVzaChmaXJzdENlbGxJZCk7XG4gICAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdzdW5rLXNoaXAnKTtcbiAgICAgICAgICAgICAgICAgICAgLy9SZW1vdmUgZ2hvc3QgaW1hZ2Ugd2hpbGUgZHJhZ2dlZFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RHJhZ0ltYWdlKGltZywgMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIC8vU2V0IG5leHQgb3B0aW9ucyBmb3Igc2hpcCBwbGFjZW1lbnQgYXMgcGVycGVuZGljdWxhciBhZGphY2VudCBjZWxsc1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB4T3B0aW9ucyA9IFsnYScsICdiJywgJ2MnLCAnZCcsICdlJywgJ2YnLCAnZyddO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB4SW5kZXggPSBwYXJzZUludCh4T3B0aW9ucy5pbmRleE9mKGZpcnN0Q2VsbElkLnNsaWNlKDAsMSkpKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeUNvb3JkID0gcGFyc2VJbnQoZmlyc3RDZWxsSWQuc2xpY2UoMSkpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dENlbGxzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGlmICh5Q29vcmQgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRDZWxscy5wdXNoKCdzZWxmLScgKyB4T3B0aW9ucy5hdCh4SW5kZXgpICsgKHlDb29yZCAtIDEpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoeUNvb3JkICE9PSA2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0Q2VsbHMucHVzaCgnc2VsZi0nICsgeE9wdGlvbnMuYXQoeEluZGV4KSArICh5Q29vcmQgKyAxKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHhJbmRleCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dENlbGxzLnB1c2goJ3NlbGYtJyArIHhPcHRpb25zLmF0KHhJbmRleCAtIDEpICsgeUNvb3JkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoeEluZGV4ICE9PSA2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0Q2VsbHMucHVzaCgnc2VsZi0nICsgeE9wdGlvbnMuYXQoeEluZGV4ICsgMSkgKyB5Q29vcmQpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIG5leHRDZWxscykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpdGVtLmluY2x1ZGVzKHVuZGVmaW5lZCkgJiYgY3VycmVudFBsYXllci5zZWxmQm9hcmQuZ2FtZWJvYXJkW2l0ZW0uc2xpY2UoNSldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXBMZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgZHJhZ0NvbnRpbnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZHJhZ0ZpbmlzaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHBsYWNlRHJhZ2dlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZHJhZ0NvbnRpbnVlKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBuZXh0Q2VsbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBkcmFnQ29udGludWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGRyYWdDb250aW51ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50Q2VsbElkID0gZS5jdXJyZW50VGFyZ2V0LmlkLnNsaWNlKDUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3N1bmstc2hpcCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcElkcy5wdXNoKGN1cnJlbnRDZWxsSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb21wYXJlIHRoZSBmaXJzdENlbGxJZCB3aXRoIGN1cnJlbnRDZWxsSWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vaWYgdGhlaXIgbGV0dGVyIGlzIHRoZSBzYW1lLCBjaGVjayB0byBzZWUgaWYgdGhlIG51bWJlciBpbmNyZW1lbnRzIG9yIGRlY3JlbWVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaXJzdENlbGxJZC5zbGljZSgwLDEpID09PSBjdXJyZW50Q2VsbElkLnNsaWNlKDAsMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2lmIGl0IGRlY3JlbWVudHMsIGFkZCBhIGxpc3RlbmVyIHRvIHRoZSBjZWxsIG1pbnVzIG9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaXJzdENlbGxJZC5zbGljZSgxKSA+IGN1cnJlbnRDZWxsSWQuc2xpY2UoMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dENlbGxZID0gcGFyc2VJbnQoY3VycmVudENlbGxJZC5zbGljZSgxKSkgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dENlbGxZIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJydXB0RHJhZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dENlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZi0nICsgY3VycmVudENlbGxJZC5zbGljZSgwLDEpICsgbmV4dENlbGxZKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Rlbk5leHRDZWxsKG5leHRDZWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaWYgaXQgaW5jcmVtZW50cywgYWRkIGEgbGlzdGVuZXIgdG8gdGhlIGNlbGwgcGx1cyBvbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dENlbGxZID0gcGFyc2VJbnQoY3VycmVudENlbGxJZC5zbGljZSgxKSkgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dENlbGxZID4gNikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJydXB0RHJhZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dENlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZi0nICsgY3VycmVudENlbGxJZC5zbGljZSgwLDEpICsgbmV4dENlbGxZKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Rlbk5leHRDZWxsKG5leHRDZWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pZiB0aGVpciBudW1iZXIgaXMgdGhlIHNhbWUsIGNoZWNrIHRvIHNlZSBpZiB0aGUgbGV0dGVyIGluY3JlbWVudHMgb3IgZGVjcmVtZW50cyB2cyB0aGUgeE9wdGlvbnMgYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2lmIGl0IGRlY3JlbWVudHMsIGFkZCBhIGxpc3RlbmVyIHRvIHRoZSBjZWxsIG1pbnVzIGEgbGV0dGVyIGluIHRoZSB4T3B0aW9ucyBhcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHhPcHRpb25zLmluZGV4T2YoZmlyc3RDZWxsSWQuc2xpY2UoMCwxKSkgPiB4T3B0aW9ucy5pbmRleE9mKGN1cnJlbnRDZWxsSWQuc2xpY2UoMCwxKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dENlbGxYSW5kZXggPSB4T3B0aW9ucy5pbmRleE9mKGN1cnJlbnRDZWxsSWQuc2xpY2UoMCwxKSkgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dENlbGxYSW5kZXggPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnJ1cHREcmFnKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh0Q2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxmLScgKyB4T3B0aW9ucy5hdChuZXh0Q2VsbFhJbmRleCkgKyBjdXJyZW50Q2VsbElkLnNsaWNlKDEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Rlbk5leHRDZWxsKG5leHRDZWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaWYgaXQgaW5jcmVtZW50cywgYWRkIGEgbGlzdGVuZXIgdG8gdGhlIGNlbGwgcGx1cyAxIGluZGV4IGluIHRoZSB4T3B0aW9ucyBhcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh0Q2VsbFhJbmRleCA9IHhPcHRpb25zLmluZGV4T2YoY3VycmVudENlbGxJZC5zbGljZSgwLDEpKSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0Q2VsbFhJbmRleCA+IDYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycnVwdERyYWcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHRDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGYtJyArIHhPcHRpb25zLmF0KG5leHRDZWxsWEluZGV4KSArIGN1cnJlbnRDZWxsSWQuc2xpY2UoMSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuTmV4dENlbGwobmV4dENlbGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBsaXN0ZW5OZXh0Q2VsbChuZXh0Q2VsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGxheWVyLnNlbGZCb2FyZC5nYW1lYm9hcmRbbmV4dENlbGwuaWQuc2xpY2UoNSldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPCAoc2hpcExlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0Q2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBkcmFnQ29udGludWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dENlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBkcmFnRmluaXNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBwbGFjZURyYWdnZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJydXB0RHJhZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRyYWdGaW5pc2goZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9oaWdobGlnaHQgdGhpcyBhbmQgb3RoZXIgY2VsbHMgZ3JlZW4gdG8gaW5kaWNhdGUgdGhlIHNoaXAgY2FuIGJlIHBsYWNlZFxuICAgICAgICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hhcy1zaGlwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc2hpcElkcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGYtJyArIGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBDZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3N1bmstc2hpcCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBDZWxsLmNsYXNzTGlzdC5hZGQoJ2hhcy1zaGlwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBwbGFjZURyYWdnZWQoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZHJhZ0ZpbmlzaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbmV4dENlbGxzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBkcmFnRmluaXNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgcGxhY2VEcmFnZ2VkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RDZWxsSWQgPSBlLmN1cnJlbnRUYXJnZXQuaWQuc2xpY2UoNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwSWRzLnB1c2gobGFzdENlbGxJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL0FkZCB0aGUgc2hpcCB0byB0aGUgc2VsZkJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwbGFjZWRTaGlwID0gY3VycmVudFBsYXllci5zZWxmQm9hcmQucGxhY2VTaGlwKGAke3NoaXBOYW1lfWAsIHNoaXBJZHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBsYXllci5zZWxmQm9hcmQuZ2FtZWJvYXJkU2hpcHMucHVzaChwbGFjZWRTaGlwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vaW5jcmVtZW50IHMsIGlmIHMgaXMgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIHBsYXllckFyZ3MuZW50cmllcy5sZW5ndGgsIHBsYWNlRWFjaCBhZ2Fpbi4gXG4gICAgICAgICAgICAgICAgICAgICAgICAvL290aGVyd2lzZSwgcmVtb3ZlIGRyYWdnYWJsZSBjZWxscyBhbmQgc3RhcnQgZ2FtZS9tb3ZlIHRvIG5leHQgcGxheWVyIHNlbGVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgcysrO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMgPCBPYmplY3QuZW50cmllcyhjdXJyZW50UGxheWVyLnBsYXllckFyZ3MpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlRWFjaCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBsYXllciA9PT0gZ2FtZS5wbGF5ZXJPbmUgJiYgZ2FtZS5wbGF5ZXJUd28uaXNDb21wdXRlciA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBjZWxsIG9mIHNlbGZDZWxscy5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtc2hpcCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQbGF5ZXIgPSBnYW1lLnBsYXllclR3bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVByb21wdChgUGxheWVyIFR3bydzYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChnYW1lLnBsYXllclR3by5pc0NvbXB1dGVyID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQbGF5ZXIgPSBnYW1lLnBsYXllclR3bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVTaGlwcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY2VsbCBvZiBzZWxmQ2VsbHMuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5UGFzc0RldmljZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gaW50ZXJydXB0RHJhZygpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBzaGlwSWRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hpcENlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZi0nICsgaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcENlbGwuY2xhc3NMaXN0LnJlbW92ZSgnc3Vuay1zaGlwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFnUGxhY2VtZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVNoaXBzKCkge1xuICAgICAgICBsZXQgcyA9IDA7XG4gICAgICAgIGxldCBzaGlwO1xuICAgICAgICBsZXQgc2hpcExlbmd0aDtcbiAgICAgICAgbGV0IHNoaXBOYW1lO1xuICAgICAgICBnZW5lcmF0ZUVhY2goKTtcblxuICAgICAgICBmdW5jdGlvbiBnZW5lcmF0ZUVhY2goKSB7XG4gICAgICAgICAgICBsZXQgc2hpcENvb3JkcyA9IFtdO1xuICAgICAgICAgICAgc2hpcCA9IE9iamVjdC5lbnRyaWVzKGN1cnJlbnRQbGF5ZXIucGxheWVyQXJncykuYXQocykuYXQoMCk7XG4gICAgICAgICAgICBzaGlwTGVuZ3RoID0gc2hpcC5zbGljZSgtMSk7XG4gICAgICAgICAgICBzaGlwTmFtZSA9IHNoaXAuc3Vic3RyaW5nKDAsc2hpcC5sZW5ndGggLSAxKTtcblxuICAgICAgICAgICAgd2hpbGUgKHNoaXBDb29yZHMubGVuZ3RoIDwgc2hpcExlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNoaXBDb29yZHMgPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCB4T3B0aW9ucyA9ICdhYmNkZWZnJztcbiAgICAgICAgICAgICAgICBjb25zdCB4TnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogeE9wdGlvbnMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB4Q29vcmQgPSB4T3B0aW9uc1t4TnVtXTtcbiAgICAgICAgICAgICAgICBjb25zdCB5Q29vcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB4T3B0aW9ucy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmRvbUNvb3JkID0geENvb3JkICsgeUNvb3JkO1xuICAgICAgICAgICAgICAgIGlmICghY3VycmVudFBsYXllci5zZWxmQm9hcmQuZ2FtZWJvYXJkW3JhbmRvbUNvb3JkXSkge1xuICAgICAgICAgICAgICAgICAgICBzaGlwQ29vcmRzLnB1c2gocmFuZG9tQ29vcmQpO1xuICAgICAgICAgICAgICAgICAgICAvL2dlbmVyYXRlIGEgcmFuZG9tIG51bWJlciAwIG9yIDEgdG8gZGV0ZXJtaW5lIHZlcnRpY2FsIG9yIGhvcml6b250YWwgc2hpcCBwbGFjZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGFrZSByYW5kb21Db29yZCBhbmQgaW5jcmVhc2UgdGhlIHlDb29yZCBvZiB0aGUgc3RyaW5nIHNoaXBMZW5ndGggLSAxIHRpbWVzXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBuID0gMDsgbiA8IChzaGlwTGVuZ3RoIC0gMSk7IG4rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1kgPSB5Q29vcmQgKyAobiArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaWYgdGhlIHlDb29yZCBvZiBhbnkgYmVjb21lcyBncmVhdGVyIHRoYW4gNiwgYnJlYWsgdGhlIGxvb3BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3WSA+IDYpIHsgYnJlYWs7IH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0Nvb3JkID0geENvb3JkICsgbmV3WTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50UGxheWVyLnNlbGZCb2FyZC5nYW1lYm9hcmRbbmV3Q29vcmRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwQ29vcmRzLnB1c2gobmV3Q29vcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy90YWtlIHJhbmRvbUNvb3JkIGFuZCBpbmNyZWFzZSB0aGUgeENvb3JkIG9mIHRoZSBzdHJpbmcgc2hpcExlbmd0aCAtIDEgdGltZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IG4gPSAwOyBuIDwgKHNoaXBMZW5ndGggLSAxKTsgbisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3WE51bSA9IHhOdW0gKyAobiArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYmVmb3JlIGNvbnZlcnRpbmcgdG8gYSBsZXR0ZXIgYW5kIGNvbmNhdGVuYXRpbmcsIGlmIHRoZSB4Q29vcmQgcHJlLW51bWJlciBiZWNvbWVzIGdyZWF0ZSB0aGFuIDYsIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1hOdW0gPiA2KSB7IGJyZWFrOyB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdDb29yZCA9IHhPcHRpb25zW25ld1hOdW1dICsgeUNvb3JkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnRQbGF5ZXIuc2VsZkJvYXJkLmdhbWVib2FyZFtuZXdDb29yZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBDb29yZHMucHVzaChuZXdDb29yZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHBsYWNlZFNoaXAgPSBjdXJyZW50UGxheWVyLnNlbGZCb2FyZC5wbGFjZVNoaXAoYCR7c2hpcE5hbWV9YCwgc2hpcENvb3Jkcyk7XG4gICAgICAgICAgICBjdXJyZW50UGxheWVyLnNlbGZCb2FyZC5nYW1lYm9hcmRTaGlwcy5wdXNoKHBsYWNlZFNoaXApO1xuICAgICAgICAgICAgcysrO1xuICAgICAgICAgICAgaWYgKHMgPCBPYmplY3QuZW50cmllcyhjdXJyZW50UGxheWVyLnBsYXllckFyZ3MpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGdlbmVyYXRlRWFjaCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9tcHRHYW1lcGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgYXNrR2FtZU1vZGUgfVxufVxuXG5leHBvcnQgeyBwb3B1bGF0ZUJvYXJkLCByZXBvcnRNaXNzLCByZXBvcnRIaXQsIHJlcG9ydFN1bmssIHJlcG9ydEVuZCwgYnVpbGRTZXR1cFByb21wdHMgfTsiLCJpbXBvcnQgeyBwb3B1bGF0ZUJvYXJkIH0gZnJvbSAnLi9pbnRlcmZhY2UuanMnO1xuXG5jb25zdCBQbGF5ZXIgPSAobmFtZSwgc2VsZkJvYXJkLCBlbmVteUJvYXJkKSA9PiB7XG4gICAgY29uc3QgcGxheWVyTmFtZSA9IG5hbWU7XG4gICAgbGV0IGlzQ29tcHV0ZXIgPSBmYWxzZTtcbiAgICBsZXQgaXNGaXJzdFR1cm4gPSB0cnVlO1xuICAgIGNvbnN0IHBsYXllckFyZ3MgPSB7XG4gICAgICAgIGNhcnJpZXI1OiBudWxsLFxuICAgICAgICBiYXR0bGVzaGlwNDogbnVsbCxcbiAgICAgICAgZGVzdHJveWVyMzogbnVsbCxcbiAgICAgICAgc3VibWFyaW5lMzogbnVsbCxcbiAgICAgICAgcGF0cm9sMjogbnVsbFxuICAgIH1cbiAgICBzZWxmQm9hcmQgPSBzZWxmQm9hcmQ7XG4gICAgZW5lbXlCb2FyZCA9IGVuZW15Qm9hcmQ7XG4gICAgXG4gICAgY29uc3QgcG9wdWxhdGVQbGF5ZXJCb2FyZCA9IHBvcHVsYXRlQm9hcmQoc2VsZkJvYXJkLCBlbmVteUJvYXJkKTtcbiAgICBjb25zdCBhdHRhY2sgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBlbmVteUJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2VuZXJhdGVBdHRhY2sgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHhPcHRpb25zID0gJ2FiY2RlZmcnO1xuICAgICAgICBsZXQgbmV3QXR0YWNrO1xuICAgICAgICBjb25zb2xlLmxvZyhlbmVteUJvYXJkLmdldExhc3RIaXQoKSk7XG4gICAgICAgIC8vZnJvbSB0aGUgbGFzdCBoaXQsIGdlbmVyYXRlIGFuIGF0dGFjayBhZ2FpbnN0IG9uZSBvZiB0aGUgYWRqYWNlbnQgY2VsbHNcbiAgICAgICAgaWYgKGVuZW15Qm9hcmQuZ2V0TGFzdEhpdCgpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgIHdoaWxlIChuZXdBdHRhY2sgPT09IHVuZGVmaW5lZCB8fCBlbmVteUJvYXJkLnNob3RMaXN0LmluY2x1ZGVzKG5ld0F0dGFjaykpIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA8IDUwKSB7XG4gICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeENvb3JkID0gZW5lbXlCb2FyZC5nZXRMYXN0SGl0KCkuc2xpY2UoMCwxKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeUNvb3JkID0gZW5lbXlCb2FyZC5nZXRMYXN0SGl0KCkuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdYTnVtID0geE9wdGlvbnMuc2VhcmNoKHhDb29yZCkgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1hOdW0gPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0F0dGFjayA9IHhPcHRpb25zW25ld1hOdW1dICsgeUNvb3JkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3WE51bSA9IHhPcHRpb25zLnNlYXJjaCh4Q29vcmQpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdYTnVtID4gNikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdBdHRhY2sgPSB4T3B0aW9uc1tuZXdYTnVtXSArIHlDb29yZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1lDb29yZCA9IHlDb29yZCAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3WUNvb3JkIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdBdHRhY2sgPSB4Q29vcmQgKyBuZXdZQ29vcmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdZQ29vcmQgPSB5Q29vcmQgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1lDb29yZCA+IDYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3QXR0YWNrID0geENvb3JkICsgbmV3WUNvb3JkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tQXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmFuZG9tQXR0YWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByYW5kb21BdHRhY2soKSB7XG4gICAgICAgICAgICAvL2dlbmVyYXRlIGEgcmFuZG9tIG51bWJlciAxLTcgdHdpY2UsIG9uZSB0cmFuc2xhdGVzIHRvIGEtZywgY29uY2F0ZW5hdGUgd2l0aCB0aGUgbnVtYmVyXG4gICAgICAgICAgICAvL2NhbGxlZCB3aXRoIHhPcHRpb25zIGxlbmd0aCBzbyBjaGFuZ2VzIGluIGJvYXJkIHNpemUgaGFwcGVuIGluIGJvdGggZGltZW5zaW9uc1xuICAgICAgICAgICAgLy9jaGVjayB0aGUgZW5lbXkgYm9hcmQncyBzaG90TGlzdCwgdGhlbiBhdHRhY2ssIG90aGVyd2lzZSBsb29wIGFnYWluXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDA7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHhDb29yZCA9IHhPcHRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHhPcHRpb25zLmxlbmd0aCldO1xuICAgICAgICAgICAgICAgIGNvbnN0IHlDb29yZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHhPcHRpb25zLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgbmV3QXR0YWNrID0geENvb3JkICsgeUNvb3JkO1xuICAgICAgICAgICAgICAgIGlmICghZW5lbXlCb2FyZC5zaG90TGlzdC5pbmNsdWRlcyhuZXdBdHRhY2spKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdBdHRhY2s7XG4gICAgfTtcblxuICAgIHJldHVybiB7IHBsYXllck5hbWUsIHBsYXllckFyZ3MsIHNlbGZCb2FyZCwgZW5lbXlCb2FyZCwgaXNDb21wdXRlciwgaXNGaXJzdFR1cm4sIGF0dGFjaywgZ2VuZXJhdGVBdHRhY2ssIHBvcHVsYXRlUGxheWVyQm9hcmQgfTtcbn1cblxuXG5cbmV4cG9ydCB7IFBsYXllciB9OyIsImNvbnN0IGNyZWF0ZVNoaXAgPSAobmFtZSwgbGVuZ3RoKSA9PiB7XG4gICAgY29uc3Qgc2hpcCA9IHtcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgbGVuZ3RoOiBsZW5ndGgsXG4gICAgICAgIGhpdHM6IDAsXG4gICAgICAgIHN1bms6IGZhbHNlXG4gICAgfTtcblxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICAgICAgc2hpcC5zdW5rID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgICAgIHNoaXAuaGl0cyA9IHNoaXAuaGl0cyArIDE7XG4gICAgICAgIGlmIChzaGlwLmhpdHMgPT09IHNoaXAubGVuZ3RoKSB7XG4gICAgICAgICAgICBpc1N1bmsoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2hpcDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgc2hpcCwgaGl0IH07XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVNoaXAgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=