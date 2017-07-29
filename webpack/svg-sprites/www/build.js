/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.BrowserSpriteSymbol = factory());
}(this, (function () { 'use strict';

var SpriteSymbol = function SpriteSymbol(ref) {
  var id = ref.id;
  var viewBox = ref.viewBox;
  var content = ref.content;

  this.id = id;
  this.viewBox = viewBox;
  this.content = content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.stringify = function stringify () {
  return this.content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.toString = function toString () {
  return this.stringify();
};

SpriteSymbol.prototype.destroy = function destroy () {
    var this$1 = this;

  ['id', 'viewBox', 'content'].forEach(function (prop) { return delete this$1[prop]; });
};

var hasImportNode = !!document.importNode;

/**
 * @param {string} content
 * @return {Element}
 */
var parse = function (content) {
  var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;

  /**
   * Fix for browser which are throwing WrongDocumentError
   * if you insert an element which is not part of the document
   * @see http://stackoverflow.com/a/7986519/4624403
   */
  if (hasImportNode) {
    return document.importNode(doc, true);
  }

  return doc;
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var index = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (false) {
        undefined(factory);
    } else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object';

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var arrayMerge = options.arrayMerge || defaultArrayMerge;

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

return deepmerge

}));
});

var namespaces_1 = createCommonjsModule(function (module, exports) {
var namespaces = {
  svg: {
    name: 'xmlns',
    uri: 'http://www.w3.org/2000/svg'
  },
  xlink: {
    name: 'xmlns:xlink',
    uri: 'http://www.w3.org/1999/xlink'
  }
};

exports.default = namespaces;
module.exports = exports.default;
});

/**
 * @param {Object} attrs
 * @return {string}
 */
var objectToAttrsString = function (attrs) {
  return Object.keys(attrs).map(function (attr) {
    var value = attrs[attr].toString().replace(/"/g, '&quot;');
    return (attr + "=\"" + value + "\"");
  }).join(' ');
};

var svg = namespaces_1.svg;
var xlink = namespaces_1.xlink;

var defaultAttrs = {};
defaultAttrs[svg.name] = svg.uri;
defaultAttrs[xlink.name] = xlink.uri;

/**
 * @param {string} [content]
 * @param {Object} [attributes]
 * @return {string}
 */
var wrapInSvgString = function (content, attributes) {
  if ( content === void 0 ) content = '';

  var attrs = index(defaultAttrs, attributes || {});
  var attrsRendered = objectToAttrsString(attrs);
  return ("<svg " + attrsRendered + ">" + content + "</svg>");
};

var BrowserSpriteSymbol = (function (SpriteSymbol$$1) {
  function BrowserSpriteSymbol () {
    SpriteSymbol$$1.apply(this, arguments);
  }

  if ( SpriteSymbol$$1 ) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;
  BrowserSpriteSymbol.prototype = Object.create( SpriteSymbol$$1 && SpriteSymbol$$1.prototype );
  BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;

  var prototypeAccessors = { isMounted: {} };

  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  BrowserSpriteSymbol.prototype.destroy = function destroy () {
    if (this.isMounted) {
      this.unmount();
    }
    SpriteSymbol$$1.prototype.destroy.call(this);
  };

  /**
   * @param {Element|string} target
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.mount = function mount (target) {
    if (this.isMounted) {
      return this.node;
    }

    var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;
    var node = this.render();
    this.node = node;

    mountTarget.appendChild(node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.render = function render () {
    var content = this.stringify();
    return parse(wrapInSvgString(content)).childNodes[0];
  };

  BrowserSpriteSymbol.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  Object.defineProperties( BrowserSpriteSymbol.prototype, prototypeAccessors );

  return BrowserSpriteSymbol;
}(SpriteSymbol));

return BrowserSpriteSymbol;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.BrowserSprite = factory());
}(this, (function () { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var index = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (false) {
        undefined(factory);
    } else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object';

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var arrayMerge = options.arrayMerge || defaultArrayMerge;

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

return deepmerge

}));
});

//      
// An event handler can take an optional event argument
// and should not return a value
                                          
// An array of all currently registered event handlers for a type
                                            
// A map of event types and their corresponding event handlers.
                        
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberof mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).map(function (handler) { handler(evt); });
			(all['*'] || []).map(function (handler) { handler(type, evt); });
		}
	};
}

var namespaces_1 = createCommonjsModule(function (module, exports) {
var namespaces = {
  svg: {
    name: 'xmlns',
    uri: 'http://www.w3.org/2000/svg'
  },
  xlink: {
    name: 'xmlns:xlink',
    uri: 'http://www.w3.org/1999/xlink'
  }
};

exports.default = namespaces;
module.exports = exports.default;
});

/**
 * @param {Object} attrs
 * @return {string}
 */
var objectToAttrsString = function (attrs) {
  return Object.keys(attrs).map(function (attr) {
    var value = attrs[attr].toString().replace(/"/g, '&quot;');
    return (attr + "=\"" + value + "\"");
  }).join(' ');
};

var svg = namespaces_1.svg;
var xlink = namespaces_1.xlink;

var defaultAttrs = {};
defaultAttrs[svg.name] = svg.uri;
defaultAttrs[xlink.name] = xlink.uri;

/**
 * @param {string} [content]
 * @param {Object} [attributes]
 * @return {string}
 */
var wrapInSvgString = function (content, attributes) {
  if ( content === void 0 ) content = '';

  var attrs = index(defaultAttrs, attributes || {});
  var attrsRendered = objectToAttrsString(attrs);
  return ("<svg " + attrsRendered + ">" + content + "</svg>");
};

var svg$1 = namespaces_1.svg;
var xlink$1 = namespaces_1.xlink;

var defaultConfig = {
  attrs: ( obj = {
    style: ['position: absolute', 'width: 0', 'height: 0'].join('; ')
  }, obj[svg$1.name] = svg$1.uri, obj[xlink$1.name] = xlink$1.uri, obj )
};
var obj;

var Sprite = function Sprite(config) {
  this.config = index(defaultConfig, config || {});
  this.symbols = [];
};

/**
 * Add new symbol. If symbol with the same id exists it will be replaced.
 * @param {SpriteSymbol} symbol
 * @return {boolean} `true` - symbol was added, `false` - replaced
 */
Sprite.prototype.add = function add (symbol) {
  var ref = this;
    var symbols = ref.symbols;
  var existing = this.find(symbol.id);

  if (existing) {
    symbols[symbols.indexOf(existing)] = symbol;
    return false;
  }

  symbols.push(symbol);
  return true;
};

/**
 * Remove symbol & destroy it
 * @param {string} id
 * @return {boolean} `true` - symbol was found & successfully destroyed, `false` - otherwise
 */
Sprite.prototype.remove = function remove (id) {
  var ref = this;
    var symbols = ref.symbols;
  var symbol = this.find(id);

  if (symbol) {
    symbols.splice(symbols.indexOf(symbol), 1);
    symbol.destroy();
    return true;
  }

  return false;
};

/**
 * @param {string} id
 * @return {SpriteSymbol|null}
 */
Sprite.prototype.find = function find (id) {
  return this.symbols.filter(function (s) { return s.id === id; })[0] || null;
};

/**
 * @param {string} id
 * @return {boolean}
 */
Sprite.prototype.has = function has (id) {
  return this.find(id) !== null;
};

/**
 * @return {string}
 */
Sprite.prototype.stringify = function stringify () {
  var ref = this.config;
    var attrs = ref.attrs;
  var stringifiedSymbols = this.symbols.map(function (s) { return s.stringify(); }).join('');
  return wrapInSvgString(stringifiedSymbols, attrs);
};

/**
 * @return {string}
 */
Sprite.prototype.toString = function toString () {
  return this.stringify();
};

Sprite.prototype.destroy = function destroy () {
  this.symbols.forEach(function (s) { return s.destroy(); });
};

var defaultConfig$1 = {
  /**
   * Should following options be automatically configured:
   * - `syncUrlsWithBaseTag`
   * - `locationChangeAngularEmitter`
   * - `moveGradientsOutsideSymbol`
   * @type {boolean}
   */
  autoConfigure: true,

  /**
   * Default mounting selector
   * @type {string}
   */
  mountTo: 'body',

  /**
   * Fix disappearing SVG elements when <base href> exists.
   * Executes when sprite mounted.
   * @see http://stackoverflow.com/a/18265336/796152
   * @see https://github.com/everdimension/angular-svg-base-fix
   * @see https://github.com/angular/angular.js/issues/8934#issuecomment-56568466
   * @type {boolean}
   */
  syncUrlsWithBaseTag: false,

  /**
   * Should sprite listen custom location change event
   * @type {boolean}
   */
  listenLocationChangeEvent: true,

  /**
   * Custom window event name which should be emitted to update sprite urls
   * @type {string}
   */
  locationChangeEvent: 'locationChange',

  /**
   * Emit location change event in Angular automatically
   * @type {boolean}
   */
  locationChangeAngularEmitter: false,

  /**
   * Selector to find symbols usages when updating sprite urls
   * @type {string}
   */
  usagesToUpdate: 'use[*|href]',

  /**
   * Fix Firefox bug when gradients and patterns don't work if they are within a symbol.
   * Executes when sprite is rendered, but not mounted.
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=306674
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=353575
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=1235364
   * @type {boolean}
   */
  moveGradientsOutsideSymbol: false
};

var arrayFrom = function (arrayLike) {
  return Array.prototype.slice.call(arrayLike, 0);
};

var ua = navigator.userAgent;

var browser = {
  isChrome: /chrome/i.test(ua),
  isFirefox: /firefox/i.test(ua),
  isIE: /msie/i.test(ua),
  isEdge: /edge/i.test(ua)
};

/**
 * @param {string} name
 * @param {*} data
 */
var dispatchEvent = function (name, data) {
  var event = document.createEvent('CustomEvent');
  event.initCustomEvent(name, false, false, data);
  window.dispatchEvent(event);
};

/**
 * @param {string} [url] If not provided - current URL will be used
 * @return {string}
 */
var getUrlWithoutFragment = function (url) {
  return (url || window.location.href).split('#')[0];
};

/* global angular */
/**
 * @param {string} eventName
 */
var locationChangeAngularEmitter = function (eventName) {
  angular.module('ng').run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$locationChangeSuccess', function (e, newUrl) {
      dispatchEvent(eventName, {
        oldURL: window.location.href,
        newUrl: newUrl
      });
    });
  }]);
};

var defaultSelector = 'linearGradient, radialGradient, pattern';

/**
 * @param {Element} svg
 * @param {string} [selector]
 * @return {Element}
 */
var moveGradientsOutsideSymbol = function (svg, selector) {
  if ( selector === void 0 ) selector = defaultSelector;

  arrayFrom(svg.querySelectorAll('symbol')).forEach(function (symbol) {
    arrayFrom(symbol.querySelectorAll(selector)).forEach(function (node) {
      symbol.parentNode.insertBefore(node, symbol);
    });
  });
  return svg;
};

var hasImportNode = !!document.importNode;

/**
 * @param {string} content
 * @return {Element}
 */
var parse = function (content) {
  var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;

  /**
   * Fix for browser which are throwing WrongDocumentError
   * if you insert an element which is not part of the document
   * @see http://stackoverflow.com/a/7986519/4624403
   */
  if (hasImportNode) {
    return document.importNode(doc, true);
  }

  return doc;
};

/**
 * @param {NodeList} nodes
 * @param {Function} [matcher]
 * @return {Attr[]}
 */
function selectAttributes(nodes, matcher) {
  var attrs = arrayFrom(nodes).reduce(function (acc, node) {
    if (!node.attributes) {
      return acc;
    }

    var arrayfied = arrayFrom(node.attributes);
    var matched = matcher ? arrayfied.filter(matcher) : arrayfied;
    return acc.concat(matched);
  }, []);

  return attrs;
}

/**
 * @param {NodeList|Node} nodes
 * @param {boolean} [clone=true]
 * @return {string}
 */

var xLinkNS = namespaces_1.xlink.uri;
var xLinkAttrName = 'xlink:href';

// eslint-disable-next-line no-useless-escape
var specialUrlCharsPattern = /[(){}|\\\^~\[\]`"<>]/g;

function encoder(url) {
  return url.replace(specialUrlCharsPattern, function (match) {
    return ("%" + (match[0].charCodeAt(0).toString(16).toUpperCase()));
  });
}

/**
 * @param {NodeList} nodes
 * @param {string} startsWith
 * @param {string} replaceWith
 * @return {NodeList}
 */
function updateReferences(nodes, startsWith, replaceWith) {
  arrayFrom(nodes).forEach(function (node) {
    var href = node.getAttribute(xLinkAttrName);
    if (href && href.indexOf(startsWith) === 0) {
      var newUrl = href.replace(startsWith, replaceWith);
      node.setAttributeNS(xLinkNS, xLinkAttrName, newUrl);
    }
  });

  return nodes;
}

/**
 * List of SVG attributes to update url() target in them
 */
var attList = [
  'clipPath',
  'colorProfile',
  'src',
  'cursor',
  'fill',
  'filter',
  'marker',
  'markerStart',
  'markerMid',
  'markerEnd',
  'mask',
  'stroke',
  'style'
];

var attSelector = attList.map(function (attr) { return ("[" + attr + "]"); }).join(',');

/**
 * Update URLs in svg image (like `fill="url(...)"`) and update referencing elements
 * @param {Element} svg
 * @param {NodeList} references
 * @param {string|RegExp} startsWith
 * @param {string} replaceWith
 * @return {void}
 *
 * @example
 * const sprite = document.querySelector('svg.sprite');
 * const usages = document.querySelectorAll('use');
 * updateUrls(sprite, usages, '#', 'prefix#');
 */
var updateUrls = function (svg, references, startsWith, replaceWith) {
  var startsWithEncoded = encoder(startsWith);
  var replaceWithEncoded = encoder(replaceWith);

  var nodes = svg.querySelectorAll(attSelector);
  var attrs = selectAttributes(nodes, function (ref) {
    var localName = ref.localName;
    var value = ref.value;

    return attList.indexOf(localName) !== -1 && value.indexOf(("url(" + startsWithEncoded)) !== -1;
  });

  attrs.forEach(function (attr) { return attr.value = attr.value.replace(startsWithEncoded, replaceWithEncoded); });
  updateReferences(references, startsWithEncoded, replaceWithEncoded);
};

/**
 * Internal emitter events
 * @enum
 * @private
 */
var Events = {
  MOUNT: 'mount'
};

var BrowserSprite = (function (Sprite$$1) {
  function BrowserSprite(cfg) {
    var this$1 = this;
    if ( cfg === void 0 ) cfg = {};

    Sprite$$1.call(this, index(defaultConfig$1, cfg));

    var emitter = mitt();
    this._emitter = emitter;
    this.node = null;

    var ref = this;
    var config = ref.config;

    if (config.autoConfigure) {
      this._autoConfigure(cfg);
    }

    if (config.syncUrlsWithBaseTag) {
      var baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
      emitter.on(Events.MOUNT, function () { return this$1.updateUrls('#', baseUrl); });
    }

    var handleLocationChange = this._handleLocationChange.bind(this);
    this._handleLocationChange = handleLocationChange;

    // Provide way to update sprite urls externally via dispatching custom window event
    if (config.listenLocationChangeEvent) {
      window.addEventListener(config.locationChangeEvent, handleLocationChange);
    }

    // Emit location change event in Angular automatically
    if (config.locationChangeAngularEmitter) {
      locationChangeAngularEmitter(config.locationChangeEvent);
    }

    if (config.moveGradientsOutsideSymbol) {
      emitter.on(Events.MOUNT, function (node) {
        moveGradientsOutsideSymbol(node);
      });
    }
  }

  if ( Sprite$$1 ) BrowserSprite.__proto__ = Sprite$$1;
  BrowserSprite.prototype = Object.create( Sprite$$1 && Sprite$$1.prototype );
  BrowserSprite.prototype.constructor = BrowserSprite;

  var prototypeAccessors = { isMounted: {} };

  /**
   * @return {boolean}
   */
  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * Automatically configure following options
   * - `syncUrlsWithBaseTag`
   * - `locationChangeAngularEmitter`
   * - `moveGradientsOutsideSymbol`
   * @param {Object} cfg
   * @private
   */
  BrowserSprite.prototype._autoConfigure = function _autoConfigure (cfg) {
    var ref = this;
    var config = ref.config;

    if (typeof cfg.syncUrlsWithBaseTag === 'undefined') {
      config.syncUrlsWithBaseTag = typeof document.getElementsByTagName('base')[0] !== 'undefined';
    }

    if (typeof cfg.locationChangeAngularEmitter === 'undefined') {
      config.locationChangeAngularEmitter = 'angular' in window;
    }

    if (typeof cfg.moveGradientsOutsideSymbol === 'undefined') {
      config.moveGradientsOutsideSymbol = browser.isFirefox;
    }
  };

  /**
   * @param {Event} event
   * @param {Object} event.detail
   * @param {string} event.detail.oldUrl
   * @param {string} event.detail.newUrl
   * @private
   */
  BrowserSprite.prototype._handleLocationChange = function _handleLocationChange (event) {
    var ref = event.detail;
    var oldUrl = ref.oldUrl;
    var newUrl = ref.newUrl;
    this.updateUrls(oldUrl, newUrl);
  };

  /**
   * Add new symbol. If symbol with the same id exists it will be replaced.
   * If sprite already mounted - `symbol.mount(sprite.node)` will be called.
   * @param {BrowserSpriteSymbol} symbol
   * @return {boolean} `true` - symbol was added, `false` - replaced
   */
  BrowserSprite.prototype.add = function add (symbol) {
    var isNewSymbol = Sprite$$1.prototype.add.call(this, symbol);

    if (this.isMounted && isNewSymbol) {
      symbol.mount(this.node);
    }

    return isNewSymbol;
  };

  BrowserSprite.prototype.destroy = function destroy () {
    var ref = this;
    var config = ref.config;
    var symbols = ref.symbols;
    var _emitter = ref._emitter;

    symbols.forEach(function (s) { return s.destroy(); });

    _emitter.off('*');
    window.removeEventListener(config.locationChangeEvent, this._handleLocationChange);

    if (this.isMounted) {
      this.unmount();
    }
  };

  /**
   * @param {Element|string} [target]
   * @param {boolean} [prepend=false]
   * @return {Element} rendered sprite node
   * @fires Events#MOUNT
   */
  BrowserSprite.prototype.mount = function mount (target, prepend) {
    if ( prepend === void 0 ) prepend = false;

    if (this.isMounted) {
      return this.node;
    }

    var mountTarget = target || this.config.mountTo;
    var parent = typeof mountTarget === 'string' ? document.querySelector(mountTarget) : mountTarget;
    var node = this.render();

    if (prepend && parent.childNodes[0]) {
      parent.insertBefore(node, parent.childNodes[0]);
    } else {
      parent.appendChild(node);
    }

    this.node = node;
    this._emitter.emit(Events.MOUNT, node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSprite.prototype.render = function render () {
    return parse(this.stringify());
  };

  /**
   * Detach sprite from the DOM
   */
  BrowserSprite.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  /**
   * Update URLs in sprite and usage elements
   * @param {string} oldUrl
   * @param {string} newUrl
   * @return {boolean} `true` - URLs was updated, `false` - sprite is not mounted
   */
  BrowserSprite.prototype.updateUrls = function updateUrls$1 (oldUrl, newUrl) {
    if (!this.isMounted) {
      return false;
    }

    var usages = document.querySelectorAll(this.config.usagesToUpdate);

    updateUrls(
      this.node,
      usages,
      ((getUrlWithoutFragment(oldUrl)) + "#"),
      ((getUrlWithoutFragment(newUrl)) + "#")
    );

    return true;
  };

  Object.defineProperties( BrowserSprite.prototype, prototypeAccessors );

  return BrowserSprite;
}(Sprite));

var ready$1 = createCommonjsModule(function (module) {
/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function (name, definition) {

  { module.exports = definition(); }

}('domready', function () {

  var fns = [], listener
    , doc = document
    , hack = doc.documentElement.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);


  if (!loaded)
  { doc.addEventListener(domContentLoaded, listener = function () {
    doc.removeEventListener(domContentLoaded, listener);
    loaded = 1;
    while (listener = fns.shift()) { listener(); }
  }); }

  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn);
  }

});
});

var sprite = new BrowserSprite();

if (document.body) {
  sprite.mount(document.body, true);
} else {
  ready$1(function () { return sprite.mount(document.body, true); });
}

return sprite;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "logo1",
  "use": "logo1-usage",
  "viewBox": "0 0 100 34",
  "content": "<symbol viewBox=\"0 0 100 34\" id=\"logo1\">\n    <path d=\"M22.9929398,12.9010914 L18.5909989,12.9010914 L18.5909989,25.3903193 L18.2672217,25.3903193 L18.2672217,25.3927 L15.0270694,25.3927 L15.0270694,25.3903193 L14.7032922,25.3903193 L14.7032922,12.9010914 L10.3013513,12.9010914 L10.3013513,9.65617767 L22.9953205,9.65617767 L22.9929398,12.9010914 L22.9929398,12.9010914 Z M32.3348632,17.5244388 C32.3348632,8.8514962 25.3117557,1.81886581 16.6459552,1.81886581 C7.98253544,1.81886581 0.957047195,8.84911549 0.957047195,17.5244388 C0.957047195,26.1997622 7.98015472,33.2276311 16.6459552,33.2276311 C25.3117557,33.2276311 32.3348632,26.1997622 32.3348632,17.5244388 L32.3348632,17.5244388 Z\" />\n    <path d=\"M89.3982071,12.9010914 L84.9962661,12.9010914 L84.9962661,25.3903193 L84.6724889,25.3903193 L84.6724889,25.3927 L81.4299559,25.3927 L81.4299559,25.3903193 L81.1061787,25.3903193 L81.1061787,12.9010914 L76.7066185,12.9010914 L76.7066185,9.65617767 L89.4005878,9.65617767 L89.3982071,12.9010914 L89.3982071,12.9010914 Z M98.7401304,17.5244388 C98.7401304,8.8514962 91.7170229,1.81886581 83.0512224,1.81886581 C74.3878027,1.81886581 67.3646951,8.84911549 67.3646951,17.5244388 C67.3646951,26.1997622 74.3878027,33.2276311 83.0512224,33.2276311 C91.7146422,33.2276311 98.7401304,26.1997622 98.7401304,17.5244388 L98.7401304,17.5244388 Z\" />\n    <path d=\"M44.4717453,18.3791153 L54.0731665,13.6724429 C53.0518401,12.5915985 51.6091271,11.9178564 50.0069063,11.9178564 C46.9143583,11.9178564 44.4050853,14.4271294 44.4050853,17.5244388 C44.4050853,17.8125053 44.4288924,18.1029524 44.4717453,18.3791153 M58.6131889,15.1651508 L45.9382654,21.374054 C46.9595919,22.4548984 48.4046855,23.1286406 50.0045256,23.1286406 C51.8257721,23.1286406 53.4446579,22.2596798 54.4683651,20.9098147 L54.5064566,20.890769 L57.9323046,21.624029 C56.4491195,24.4927899 53.4565615,26.4544986 50.0045256,26.4544986 C45.0764468,26.4544986 41.081608,22.4525177 41.081608,17.5244388 C41.081608,12.5915985 45.0788275,8.59437904 50.0045256,8.59437904 C54.1160194,8.59437904 57.5799589,11.3774342 58.6131889,15.1651508 M65.5363065,17.5244388 C65.5363065,8.8514962 58.5131989,1.81886581 49.8473985,1.81886581 C41.181598,1.81886581 34.1584904,8.8514962 34.1584904,17.5244388 C34.1584904,26.1997622 41.1839787,33.2300118 49.8473985,33.2300118 C58.5108182,33.2300118 65.5363065,26.1997622 65.5363065,17.5244388\" />\n</symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* unused harmony default export */ var _unused_webpack_default_export = (symbol);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "logo2",
  "use": "logo2-usage",
  "viewBox": "0 0 100 51",
  "content": "<symbol viewBox=\"0 0 100 51\" id=\"logo2\">\n    <path d=\"M66.4474008,22.2099039 L59.288002,22.2222222 L59.288002,20.443459 L62.8085735,20.443459 L62.8085735,13.1682681 L59.2781474,13.1682681 L59.2781474,11.2884947 L66.4498645,11.2884947 L66.4498645,0.381867455 L88.3789111,0.381867455 L88.3789111,22.2099039 L99.2953929,22.2099039 L99.2953929,33.1805864 L66.4547918,33.1805864 L66.4671101,22.2049766 C66.4671101,22.2049766 73.6831732,22.187731 77.3737374,22.187731 L77.3737374,11.3057403 L66.4523282,11.300813 L66.4474008,22.2099039 L66.4474008,22.2099039 Z\" />\n    <path d=\"M33.4540527,33.1855136 L0.859817687,33.1855136 L0.837644737,22.2468588 L11.6900714,22.2468588 L11.6900714,11.2811037 L0.84996304,11.2811037 L0.84996304,0.359694506 L22.6977088,0.359694506 L22.7223455,22.1852673 L33.4614437,22.1754126 L33.4540527,33.1855136 L33.4540527,33.1855136 Z\" />\n    <path d=\"M55.4052722,14.9741315 L59.0613452,14.9741315 L59.0613452,18.5932496 L55.4619365,18.5932496 L55.4619365,22.2468588 L51.9019463,22.2468588 L51.9019463,25.8462676 L48.2163094,25.8462676 L48.2163094,22.3010594 L44.5503818,22.3010594 L44.5503818,18.6375955 L40.9682188,18.6375955 L40.9682188,15.0135501 L44.4592264,15.0135501 L44.4592264,11.3180586 L48.102981,11.3180586 L48.102981,7.7703868 L51.8847007,7.7703868 L51.8847007,11.2318305 L55.4052722,11.2318305 L55.4052722,14.9741315 L55.4052722,14.9741315 L55.4052722,14.9741315 Z M52.6508992,19.5368317 L52.6508992,14.1069229 L47.3195369,14.1069229 L47.3195369,19.5368317 L52.6508992,19.5368317 L52.6508992,19.5368317 Z\" />\n    <path d=\"M33.4466617,11.3500863 L40.7735896,11.3500863 L40.7735896,13.059867 L37.2727273,13.059867 L37.2727273,20.4040404 L40.7760532,20.4040404 L40.7760532,22.2000493 L33.4417344,22.2000493 C33.4417344,22.2000493 33.4466617,15.0307958 33.4466617,11.3500863 L33.4466617,11.3500863 L33.4466617,11.3500863 Z\" />\n    <path d=\"M44.5922641,0.339985218 L55.370781,0.339985218 L55.370781,7.51170239 L53.7102734,7.51170239 L53.7102734,4.00098546 L46.3513181,4.00098546 L46.3513181,7.48460212 L44.5922641,7.48460212 L44.5922641,0.339985218 L44.5922641,0.339985218 Z\" />\n    <path d=\"M53.6807095,29.5959596 L53.6807095,26.0704607 L55.3609264,26.0704607 L55.3609264,33.175659 L44.5996551,33.175659 L44.5996551,26.0655333 L46.2946538,26.0655333 L46.2946538,29.5959596 L53.6807095,29.5959596 L53.6807095,29.5959596 Z\" />\n    <path d=\"M38.9652624,38.7730969 C40.0443459,38.7386056 41.0840108,38.6104952 42.1064302,38.6893323 C43.3555063,38.7878788 44.3656073,39.6698694 44.3927076,40.8130081 C44.4715447,43.7546194 44.4198079,46.7011579 44.4198079,49.7289973 L42.8430647,49.7289973 L42.8430647,48.4725302 C42.8430647,46.2946538 42.8504558,44.1167776 42.8430647,41.9413648 C42.8406011,40.2882484 42.3725056,39.9014535 40.5543237,40.167529 L40.5543237,49.7191426 L38.9726533,49.7191426 C38.9652624,46.1419069 38.9652624,42.5498891 38.9652624,38.7730969 L38.9652624,38.7730969 L38.9652624,38.7730969 Z\" />\n    <path d=\"M7.5043114,40.1872383 L7.5043114,49.7314609 L5.96452328,49.7314609 L5.96452328,38.8001971 C6.98201527,38.7410692 7.94530673,38.6006405 8.89874354,38.6474501 C10.2291205,38.7115053 11.3550135,39.6058142 11.4018231,40.842572 C11.5052969,43.7841833 11.4338507,46.7331856 11.4338507,49.7437793 L9.86942596,49.7437793 L9.86942596,48.4602119 C9.8718896,46.2798719 9.87928061,44.0995319 9.86942596,41.9216556 C9.86203495,40.3104213 9.34220253,39.8965263 7.5043114,40.1872383 L7.5043114,40.1872383 L7.5043114,40.1872383 Z\" />\n    <path d=\"M84.8706578,49.7511702 L83.313624,49.7511702 L83.313624,46.7898497 C83.313624,45.1170239 83.3308697,43.4466617 83.306233,41.7762996 C83.2840601,40.2931757 82.6385809,39.847253 80.9485095,40.2315841 L80.9485095,49.7462429 L79.3569844,49.7462429 L79.3569844,38.9578714 C80.5395417,38.5883222 81.7491993,38.4503573 82.9761025,38.7780241 C84.062577,39.0687362 84.8066026,39.832471 84.8386302,40.9214092 C84.9248584,43.8285292 84.8706578,46.7405765 84.8706578,49.7511702 L84.8706578,49.7511702 L84.8706578,49.7511702 Z\" />\n    <path d=\"M52.0448386,43.022912 C52.0768663,42.7346637 52.1039665,42.5449618 52.1088938,42.3552599 C52.18034,40.1699926 52.0546932,40.0394186 49.9113082,40.0172457 C49.5269771,40.0147819 49.150037,39.9827543 48.8001971,39.9655088 C48.4996304,39.3397389 48.6967233,38.9701897 49.2633654,38.8790342 C50.0246366,38.7558512 50.8056172,38.6154225 51.569352,38.6646958 C53.0746489,38.7607785 53.6363636,39.3840847 53.6733186,40.9016999 C53.7102734,42.6903178 53.6881005,44.4789357 53.6930279,46.2675535 L53.6930279,49.7314609 C51.9709288,50.0517369 50.2857846,50.5617147 48.874107,49.2584381 C47.5880759,48.0758808 47.7950234,46.4572555 48.2089185,44.9938408 C48.7188963,43.1510224 50.436068,43.2126139 52.0448386,43.022912 L52.0448386,43.022912 L52.0448386,43.022912 Z M52.049766,44.5553092 C51.1308204,44.4937177 50.283321,44.3483616 49.8644987,45.2057157 C49.4087213,46.1419069 49.3717665,47.2012811 49.9211628,48.102981 C50.3941858,48.8765706 51.2195122,48.7386056 52.049766,48.54644 L52.049766,44.5553092 L52.049766,44.5553092 Z\" />\n    <path d=\"M92.4956886,43.0056665 C92.4956886,42.325696 92.5080069,41.6802168 92.4907613,41.0273467 C92.4735157,40.3695492 92.1187485,40.0320276 91.4634146,40.0246366 C90.6947524,40.0172457 89.9260902,40.0246366 89.1993102,40.0246366 C88.9751171,39.4382853 88.9948263,38.9775807 89.5590046,38.9283075 C90.6282335,38.8272974 91.7048534,38.7657059 92.776546,38.8272974 C93.4392707,38.8642523 93.8556295,39.3840847 93.9960582,40.0665189 C94.0379404,40.2956393 94.1118502,40.5247598 94.1118502,40.7514166 C94.1192412,43.6979552 94.1192412,46.6469574 94.1192412,49.6994333 C92.4882976,50.0763735 90.8770633,50.5025869 89.4358216,49.3840847 C88.0734171,48.3271741 88.2163094,46.7553585 88.5168761,45.3017985 C88.9356985,43.2224686 90.7489529,43.2249322 92.4956886,43.0056665 L92.4956886,43.0056665 L92.4956886,43.0056665 Z M92.4464154,44.6513919 C91.5619611,44.3902439 90.8277901,44.4493717 90.2808574,45.1613698 C89.8620349,45.7083025 89.9063809,47.5092387 90.3054939,48.0906627 C90.6922888,48.6597684 91.3155949,48.7755605 92.4464154,48.4503573 L92.4464154,44.6513919 L92.4464154,44.6513919 Z\" />\n    <path d=\"M70.0344912,44.3656073 C70.0344912,43.3899976 69.9975364,42.4217788 70.0394186,41.4486326 C70.1084011,39.7708795 71.2589308,38.6252772 72.8332101,38.6203498 C74.4000986,38.6129589 75.6319291,39.7536339 75.6861296,41.4067504 C75.7501847,43.3481153 75.7501847,45.2919438 75.6959842,47.2357723 C75.6442474,48.9578714 74.4173441,50.0763735 72.7666913,50.0418822 C71.170239,50.0049273 70.123183,48.9159892 70.0566642,47.1643262 C70.0197093,46.2330623 70.0492732,45.2993348 70.0492732,44.3656073 L70.0344912,44.3656073 L70.0344912,44.3656073 Z M71.6334073,44.2892338 L71.6826805,44.2892338 C71.6826805,45.370781 71.6407982,46.4597192 71.7073171,47.5338754 C71.7418083,48.1719635 72.1433851,48.6080315 72.8529194,48.6080315 C73.5501355,48.6080315 73.8851934,48.1694999 74.0453313,47.5535846 C74.0847499,47.4057649 74.0896773,47.245627 74.0896773,47.0953436 C74.0921409,45.2352796 74.1093866,43.3776792 74.0822863,41.5176152 C74.069968,40.6109879 73.6117271,40.0689825 72.9292929,40.0344912 C72.1926583,39.9975364 71.6777531,40.5420055 71.6432619,41.5003696 C71.6013797,42.4316334 71.6334073,43.3628973 71.6334073,44.2892338 L71.6334073,44.2892338 L71.6334073,44.2892338 Z\" />\n    <path d=\"M28.1251539,45.2648435 L24.2276423,45.2648435 C24.1709781,45.5333826 24.1167776,45.6812022 24.1118502,45.8290219 C24.055186,48.1793545 24.1488052,48.7755605 26.7824587,48.6868687 C27.2012811,48.669623 27.9354521,48.3444198 27.987189,49.150037 C28.0339985,49.8620349 27.3244641,49.8176891 26.8686869,49.8989899 C26.2256713,50.0098546 25.5530919,50.0689825 24.9051491,50.007391 C23.5501355,49.8817442 22.5449618,48.7755605 22.4981522,47.3047548 C22.4390243,45.3264351 22.4340971,43.343188 22.4956886,41.3673318 C22.5474255,39.7462429 23.8482385,38.5760039 25.3880266,38.6203498 C26.9943335,38.6622321 28.1054446,39.8053708 28.1251539,41.4708057 C28.139936,42.6681448 28.1251539,43.8630204 28.1251539,45.2648435 L28.1251539,45.2648435 L28.1251539,45.2648435 Z M24.1488052,43.8088199 L26.5484109,43.8088199 C26.5484109,42.8479921 26.6100024,42.0004927 26.5287016,41.1653116 C26.4597192,40.4336043 25.9078591,39.9901454 25.2968711,40.0271003 C24.6045824,40.0689825 24.2177877,40.5124415 24.1709781,41.1382114 C24.0970683,42.0103474 24.1488052,42.8898743 24.1488052,43.8088199 L24.1488052,43.8088199 L24.1488052,43.8088199 Z\" />\n    <path d=\"M57.3860557,36.5311654 L58.8938162,36.5311654 C58.9554078,37.2924366 59.0145356,38.0044345 59.0761272,38.7706331 C59.884208,38.8149791 60.6183789,38.8519339 61.4313871,38.8962799 C61.4683419,39.3077112 61.4880512,39.6747968 61.5323972,40.1699926 C60.7144617,40.2217295 59.9556541,40.2710027 59.113082,40.3227396 C59.0662725,40.6331609 58.9874354,40.9263366 58.9849717,41.2219759 C58.9726533,43.1263859 58.9652624,45.0332594 58.982508,46.9352058 C58.99729,48.4577482 59.1475733,48.5907859 60.6504065,48.6302044 C60.9534368,48.6375955 61.2589308,48.6646958 61.5397881,48.6819414 C61.8231091,49.2017738 61.7048534,49.5195861 61.2219759,49.7536339 C59.2042375,50.7243164 57.4846021,49.7487066 57.413156,47.4919931 C57.3343188,45.1613698 57.3860557,42.8233556 57.3811284,40.4927322 C57.3860557,39.2165558 57.3860557,37.9354521 57.3860557,36.5311654 L57.3860557,36.5311654 L57.3860557,36.5311654 Z\" />\n    <path d=\"M15.3190441,36.533629 L16.7627495,36.533629 C16.8070954,37.2751909 16.8514412,37.9576251 16.8982508,38.7632422 C17.7112589,38.8075881 18.4996304,38.8543977 19.3446662,38.9012072 L19.3446662,40.1847745 C18.5439764,40.2315841 17.7827051,40.2734664 16.962306,40.3227396 C16.9154965,40.6159153 16.8440503,40.8745997 16.8391229,41.1308204 C16.8292683,43.1510224 16.8218773,45.1712244 16.8391229,47.1889628 C16.8489776,48.4651392 16.9992609,48.6006405 18.2409461,48.6228135 C18.6252772,48.6302044 18.9997536,48.6228135 19.6747968,48.6228135 C19.4062577,49.1352549 19.3298842,49.5466864 19.0909091,49.6895787 C17.2333087,50.8056172 15.2746982,49.7314609 15.2549889,47.5757576 C15.2204977,44.1586598 15.2451342,40.7390983 15.2500616,37.3220005 C15.2525253,37.09288 15.2894802,36.8686869 15.3190441,36.533629 L15.3190441,36.533629 L15.3190441,36.533629 Z\" />\n    <path d=\"M33.2692782,49.7560976 L31.7491993,49.7560976 C31.7048534,49.4456763 31.6407982,49.1894556 31.6407982,48.9258438 C31.6358709,46.0458241 31.6654348,43.1682681 31.6210889,40.2931757 C31.6087706,39.5245134 31.8773097,39.1303277 32.6139443,39.0145356 C33.5944814,38.8593249 34.5700911,38.6942597 35.6614929,38.5144124 C35.6984479,39.1007637 35.7156935,39.4703129 35.7427938,39.9457995 C34.9100764,40 34.1611234,40.0492732 33.2692782,40.1034737 L33.2692782,49.7560976 L33.2692782,49.7560976 L33.2692782,49.7560976 Z\" />\n    <path d=\"M99.3077112,49.9630451 C98.1571816,49.7708795 97.9132791,49.5368317 97.8763242,48.4651392 C97.8393693,46.9081055 97.8615422,45.3535354 97.8615422,43.794038 C97.8590786,41.4239961 97.8615422,39.0539541 97.8615422,36.5779748 L99.2953929,36.5779748 C99.3077112,41.0519832 99.3077112,45.5013551 99.3077112,49.9630451 L99.3077112,49.9630451 L99.3077112,49.9630451 Z\" />\n    <path d=\"M2.06208425,49.7610248 L0.628233556,49.7610248 L0.628233556,38.9184528 L2.06208425,38.9184528 L2.06208425,49.7610248 L2.06208425,49.7610248 Z\" />\n    <path d=\"M66.3217541,49.7610248 L64.8879034,49.7610248 L64.8879034,38.9110618 C65.3362897,38.8913525 65.7723577,38.8642523 66.3217541,38.8420793 L66.3217541,49.7610248 L66.3217541,49.7610248 Z\" />\n    <path d=\"M57.3663464,27.6472037 L57.3663464,24.18576 L60.8622813,24.18576 L60.8622813,27.6472037 L57.3663464,27.6472037 L57.3663464,27.6472037 Z\" />\n    <rect x=\"57.4106923\" y=\"5.80438531\" width=\"3.49593496\" height=\"3.54028086\" />\n    <path d=\"M42.4932249,27.6373491 L39.1155457,27.6373491 L39.1155457,24.1783691 L42.4932249,24.1783691 L42.4932249,27.6373491 L42.4932249,27.6373491 Z\" />\n    <path d=\"M39.1106184,9.33727519 L39.1106184,5.88322246 L42.4981522,5.88322246 L42.4981522,9.33727519 L39.1106184,9.33727519 L39.1106184,9.33727519 Z\" />\n    <path d=\"M66.3291452,36.5631929 C66.4030549,37.7827051 66.4030549,37.7876324 64.91254,37.8393693 L64.91254,36.5631929 L66.3291452,36.5631929 L66.3291452,36.5631929 Z\" />\n    <path d=\"M2.0152747,36.5631929 C2.13845775,37.7482138 2.11874846,37.7728505 0.647942838,37.8418329 L0.647942838,36.5631929 L2.0152747,36.5631929 L2.0152747,36.5631929 Z\" />\n</symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* unused harmony default export */ var _unused_webpack_default_export = (symbol);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "logo3",
  "use": "logo3-usage",
  "viewBox": "0 0 100 34",
  "content": "<symbol viewBox=\"0 0 100 34\" id=\"logo3\">\n    <path d=\"M11.1666667,9.75238095 L12.2119048,8.7952381 L14.6547619,8.7952381 L14.6547619,2.10952381 L14.6357143,1.43095238 L6.98333333,1.43095238 L0.704761905,6.69047619 L0.704761905,12.652381 L11.1666667,12.652381 L11.1666667,9.75238095 L11.1666667,9.75238095 Z M16.747619,1.43095238 L16.747619,8.7952381 L19.8880952,8.7952381 L20.9333333,9.75238095 L20.9333333,11.9261905 L0.704761905,24.9238095 L0.704761905,31.9357143 L5.58809524,31.9357143 L15.3547619,25.6261905 L30.7,15.8071429 L30.7,6.69047619 L25.1190476,1.43333333 L16.747619,1.43095238 L16.747619,1.43095238 Z M21.9,23.8619048 L9.77380952,31.652381 L9.77380952,31.9333333 L30.7,31.9333333 L30.7,24.5238095 L30.6619048,23.8690476 L21.9,23.8619048 L21.9,23.8619048 Z M55.1095238,6.69047619 L46.0404762,6.69047619 L46.0404762,14.7571429 L36.2761905,14.7571429 L36.2761905,23.8452381 L46.0404762,23.8547619 L46.0404762,31.9404762 L55.0785714,31.9404762 L55.0880952,23.8619048 L64.8761905,23.8738095 L64.8761905,14.7642857 L55.1,14.7642857 L55.1095238,6.69047619 L55.1095238,6.69047619 Z M79.5238095,9.75238095 L80.5690476,8.7952381 L83.0095238,8.7952381 L83.0095238,2.10952381 L82.9928571,1.43095238 L75.3357143,1.43095238 L69.0571429,6.68809524 L69.0571429,12.65 L79.5238095,12.65 L79.5238095,9.75238095 L79.5238095,9.75238095 Z M93.4738095,1.43095238 L85.1047619,1.43095238 L85.1047619,8.7952381 L88.2428571,8.7952381 L89.2880952,9.75238095 L89.2880952,11.9261905 L69.0595238,24.9238095 L69.0595238,31.9333333 L73.9452381,31.9333333 L83.7119048,25.6238095 L99.0547619,15.8071429 L99.0547619,6.69047619 L93.4738095,1.43095238 L93.4738095,1.43095238 Z M78.1261905,31.6547619 L78.1261905,31.9357143 L99.0547619,31.9357143 L99.0547619,24.5261905 L99.0547619,23.8714286 L90.2571429,23.8642857 L78.1261905,31.6547619 L78.1261905,31.6547619 Z\" />\n</symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* unused harmony default export */ var _unused_webpack_default_export = (symbol);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logo1_svg__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logo2_svg__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logo3_svg__ = __webpack_require__(5);






/***/ })
/******/ ]);