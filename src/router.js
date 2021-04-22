(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/router.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/core/router/index.ts":
/*!*********************************!*\
  !*** ./js/core/router/index.ts ***!
  \*********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = exports.RouterLink = exports.Router = void 0;
const utils_1 = __webpack_require__(/*! ./utils */ "./js/core/router/utils.ts");
const { Subscriber, action, autorun, observable, computed, runInAction } = _obb;
function Router(options) {
    let parent = Subscriber.PARENT;
    let routing;
    let match = null;
    let subscriber = new Subscriber(function () {
        if (!routing) {
            routing = new utils_1.Routing(options, parent);
        }
        routing.update();
        update();
    });
    subscriber.mount();
    if (!match) {
        function rerender() {
            parent.parent !== undefined && parent.update();
        }
        subscriber.once("unmount", function () {
            utils_1.removeRouteChangeListener(rerender);
        });
        utils_1.addRouteChangeListener(rerender);
        return;
    }
    // 使 component 的变更能引起路由重新渲染
    let component = computed(function () { return options.component; }, parent)();
    function update() {
        let _match = routing.match();
        if (match !== null && !match !== !_match) {
            parent.parent !== undefined && parent.update();
        }
        else {
            options.match = _match;
            match = _match;
        }
    }
    utils_1.addRouteChangeListener(update);
    subscriber.once("unmount", function () {
        utils_1.removeRouteChangeListener(update);
    });
    return component ? component(options) : options.children;
}
exports.Router = Router;
const EXCLUDE_KEYS = ["mode", "tag", "children", "to", "action"];
function _Link(options, is_relative) {
    let tag_name;
    let parent = Subscriber.PARENT;
    let routing = is_relative && utils_1.getParentRouting(parent);
    let el = computed(function () {
        tag_name = options.tag || "a";
        return _webx.createElement(tag_name);
    }, parent)();
    _webx.addEventListener(el, "click", function (e) {
        e.preventDefault();
        let href = location.href;
        let url = utils_1.getUrl(options, routing);
        switch (options.action) {
            case "back":
                history.back();
                if (options.to) {
                    setTimeout(function () {
                        if (href !== url) {
                            history.replaceState(null, null, url);
                        }
                    }, 6);
                }
                break;
            case "replace":
                if (!is_relative || href !== url) {
                    history.replaceState(null, null, url);
                }
                break;
            case "append":
            default:
                if (!is_relative || href !== url) {
                    history.pushState(null, null, url);
                }
                break;
        }
    });
    if (/^a$/i.test(tag_name)
        && options.hasOwnProperty("to")
        && !options.hasOwnProperty("href")) {
        function pathChange() {
            el.href = utils_1.getUrl(options, routing);
        }
        let subscriber = new Subscriber(pathChange);
        subscriber.mount();
        utils_1.addRouteChangeListener(pathChange);
        subscriber.once("unmount", function () {
            utils_1.removeRouteChangeListener(pathChange);
        });
    }
    for (let key in options) {
        if (EXCLUDE_KEYS.includes(key)) {
            continue;
        }
        let is_literal = /^(on[^_-]*)|(value|id|checked)$/.test(key);
        autorun(function () {
            _webx.setAttribute(el, key, options[key], is_literal);
        });
    }
    autorun(function () {
        let children = el.childNodes;
        let new_children = options.children;
        let index = 0;
        if (new_children) {
            for (; index < new_children.length; index++) {
                let new_child = new_children[index];
                let current = children[index];
                if (children.length <= index) {
                    _webx.appendChild(el, new_child);
                }
                else if (current !== new_child) {
                    _webx.insertBefore(el, new_child, current);
                    if (!new_children.includes(current)) {
                        _webx.removeNode(current);
                    }
                }
            }
        }
        while (children.length > index) {
            el.removeChild(children[index]);
        }
    });
    return el;
}
function Link(options) {
    return _Link(options, false);
}
exports.Link = Link;
function RouterLink(options) {
    return _Link(options, true);
}
exports.RouterLink = RouterLink;
exports.default = Router;


/***/ }),

/***/ "./js/core/router/utils.ts":
/*!*********************************!*\
  !*** ./js/core/router/utils.ts ***!
  \*********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.removeRouteChangeListener = exports.addRouteChangeListener = exports.getParentRouting = exports.getUrl = exports.Routing = void 0;
const { runInAction, action } = _obb;
const { pathToRegexp } = __webpack_require__(/*! path-to-regexp */ "./node_modules/path-to-regexp/dist.es2015/index.js");
const SUBSCRIBER_TO_ROUTING = new WeakMap();
let is_listening = false;
const dispatch = action(function () {
    // 保证响应期间的 STATE_CHANGE_LISTENERS 变更不会影响当前进程
    for (let callback of Array.from(ROUTE_CHANGE_LISTENERS)) {
        callback();
    }
});
for (let prop of ["pushState", "replaceState"]) {
    let original = history[prop];
    history[prop] = function () {
        original.apply(history, arguments);
        is_listening && dispatch();
    };
}
const ROUTE_CHANGE_LISTENERS = new Set();
;
function addRouteChangeListener(callback) {
    ROUTE_CHANGE_LISTENERS.add(callback);
    if (!is_listening) {
        addEventListener("hashchange", dispatch);
        addEventListener("popstate", dispatch);
        is_listening = true;
    }
}
exports.addRouteChangeListener = addRouteChangeListener;
function removeRouteChangeListener(callback) {
    ROUTE_CHANGE_LISTENERS.delete(callback);
    if (!ROUTE_CHANGE_LISTENERS.size) {
        is_listening = false;
        removeEventListener("hashchange", dispatch);
        removeEventListener("popstate", dispatch);
    }
}
exports.removeRouteChangeListener = removeRouteChangeListener;
function join(original, target) {
    if (/^[^#]*\:/.test(target)) {
        return target;
    }
    let res = /^\s*\/+/.exec(target);
    if (res) {
        target = target.slice(res[0].length);
        return (target && "/") + target;
    }
    res = /^(\s*\.\/+)+/.exec(target);
    original = original.replace(/\/*$/, "");
    if (res) {
        target = target.slice(res[0].length);
    }
    while ((res = /^\s*\.\.\/+(\s*\.\/+)*/.exec(target))) {
        target = target.slice(res[0].length);
        original = original.replace(/\/+[^\/]*$/, "");
    }
    return original + (target && "/") + target;
}
function getNormalizelocation() {
    let { origin, pathname, hash, protocol } = location;
    if (protocol === "blob:") {
        pathname = pathname.slice(origin.length);
        origin = protocol + origin;
    }
    return { origin, pathname, hash };
}
function getUrl(options, routing) {
    let mode = options.mode || (routing ? routing.mode : "hash");
    let href = options.to;
    let { origin, pathname, hash } = getNormalizelocation();
    if (routing) {
        hash = routing.hash;
        pathname = routing.path;
    }
    if (href) {
        if (mode === "hash") {
            hash = join(hash.replace(/^#+/, ""), href);
            hash && (hash = "#" + hash);
        }
        else {
            pathname = join(pathname, href);
            let match = /#+\/*([\s\S]*)$/.exec(pathname);
            if (match) {
                pathname = pathname.slice(0, -match[0].length);
                hash = (match[1] && "#/") + match[1];
            }
        }
    }
    return origin + pathname + hash;
}
exports.getUrl = getUrl;
function getParentRouting(subscriber) {
    while ((subscriber = subscriber.parent)) {
        let routing = SUBSCRIBER_TO_ROUTING.get(subscriber);
        if (routing) {
            return routing;
        }
    }
}
exports.getParentRouting = getParentRouting;
class Routing {
    constructor(options, subscriber) {
        this.options = options;
        this.subscriber = subscriber;
        this.patterns = [];
        SUBSCRIBER_TO_ROUTING.set(subscriber, this);
        this.parent = getParentRouting(subscriber);
    }
    update() {
        let options = this.options;
        this.mode = options.mode || (this.parent && this.parent.mode) || "hash";
        let paths = options.path;
        if (!paths) {
            paths = [""];
        }
        else if (!(paths instanceof Array)) {
            paths = [paths];
        }
        let patterns = this.patterns;
        patterns.length = 0;
        for (let path of paths) {
            let flag = 0;
            let keys = [];
            let res = /^\s*\/+/.exec(path);
            if (res) {
                path = path.slice(res[0].length);
                flag = -1;
            }
            else {
                if ((res = /^(\s*\.\/+)+/.exec(path))) {
                    path = path.slice(res[0].length);
                }
                while ((res = /^\s*\.\.\/+(\s*\.\/+)*/.exec(path))) {
                    path = path.slice(res[0].length);
                    flag += 1;
                }
            }
            patterns.push([
                pathToRegexp("/" + path, keys, { end: false }),
                keys,
                flag,
                path.split(/\/+/).length
            ]);
        }
        patterns.sort(function (v1, v2) {
            return v2[3] - v1[3];
        });
    }
    match() {
        let location = getNormalizelocation();
        let mode = this.mode;
        let is_hash = mode !== "history";
        function _get_parent(routing, is_hash) {
            if (is_hash === (routing.mode !== "history")) {
                return routing;
            }
            else if (routing.parent) {
                return _get_parent(routing.parent, is_hash);
            }
        }
        let parent = this.parent;
        if (parent) {
            let hash_routing = _get_parent(parent, true);
            let path_routing = _get_parent(parent, false);
            this.hash = is_hash ? (hash_routing ? hash_routing.hash : "") : parent.hash;
            this.path = is_hash ? parent.path : (path_routing ? path_routing.path : "");
            this.last_hash = parent.last_hash;
            this.last_path = parent.last_path;
        }
        else {
            this.hash = is_hash ? "" : location.hash;
            this.path = is_hash ? location.pathname : "";
            this.last_hash = location.hash.slice(1);
            this.last_path = location.pathname;
        }
        let ref = is_hash ? "last_hash" : "last_path";
        let pathname = this[ref];
        let full_path = is_hash ? location.hash.slice(1) : location.pathname;
        for (let [regexp, keys, flag] of this.patterns) {
            let path = pathname;
            if (flag === -1) {
                path = full_path;
            }
            else if (flag > 0) {
                let clip_path = full_path.slice(0, full_path.length - path.length);
                for (let i = 0; i < flag; i++) {
                    clip_path = clip_path.replace(/\/+[^\/]*$/, "");
                }
                path = full_path.slice(clip_path.length);
            }
            let res = regexp.exec(path);
            if (res) {
                let match = {};
                this[is_hash ? "hash" : "path"] = full_path.slice(0, full_path.length - path.length) + res[0];
                for (let i = 1, limit = keys.length + 1; i < res.length && i < limit; i++) {
                    if (res[i] !== undefined) {
                        let key = keys[i - 1].name;
                        if (match[key] === undefined) {
                            match[key] = res[i];
                        }
                        else {
                            match[key] instanceof Array || (match[key] = [match[key]]);
                            match[key].push(res[i]);
                        }
                    }
                }
                this[ref] = path.slice(res[0].length);
                return match;
            }
        }
    }
}
exports.Routing = Routing;


/***/ }),

/***/ "./js/router.ts":
/*!**********************!*\
  !*** ./js/router.ts ***!
  \**********************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./core/router */ "./js/core/router/index.ts"), exports);


/***/ }),

/***/ "./node_modules/path-to-regexp/dist.es2015/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/path-to-regexp/dist.es2015/index.js ***!
  \**********************************************************/
/*! exports provided: parse, compile, tokensToFunction, match, regexpToFunction, tokensToRegexp, pathToRegexp */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./js/core/router/utils.ts (referenced with cjs require) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return compile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokensToFunction", function() { return tokensToFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match", function() { return match; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regexpToFunction", function() { return regexpToFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokensToRegexp", function() { return tokensToRegexp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathToRegexp", function() { return pathToRegexp; });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
    var index = 0;
    var execResult = groupsRegex.exec(path.source);
    while (execResult) {
        keys.push({
            // Use parenthesized substring match if available, index otherwise
            name: execResult[1] || index++,
            prefix: "",
            suffix: "",
            modifier: "",
            pattern: ""
        });
        execResult = groupsRegex.exec(path.source);
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
//# sourceMappingURL=index.js.map

/***/ })

/******/ })));
//# sourceMappingURL=router.js.map