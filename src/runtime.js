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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/runtime.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/core/runtime/index.ts":
/*!**********************************!*\
  !*** ./js/core/runtime/index.ts ***!
  \**********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createTextNode = exports.createElement = exports.insertBefore = exports.appendChild = exports.addEventListener = exports.setText = exports.setAttribute = exports.removeAllSibling = exports.entryStatement = exports.nextEntrySibling = exports.nextIfSibling = exports.setNodes = exports.nextNodes = exports.nextSibling = exports.nextChild = exports.observable = exports.runInAction = exports.action = exports.autorun = exports.prevent = void 0;
const obb_1 = __webpack_require__(/*! ../../obb/js/obb */ "./js/obb/js/obb.ts");
Object.defineProperty(exports, "observable", { enumerable: true, get: function () { return obb_1.observable; } });
Object.defineProperty(exports, "action", { enumerable: true, get: function () { return obb_1.action; } });
Object.defineProperty(exports, "runInAction", { enumerable: true, get: function () { return obb_1.runInAction; } });
const siblings_1 = __webpack_require__(/*! ./siblings */ "./js/core/runtime/siblings.ts");
const polyfill_1 = __webpack_require__(/*! ./polyfill */ "./js/core/runtime/polyfill.ts");
Object.defineProperty(exports, "entryStatement", { enumerable: true, get: function () { return polyfill_1.entryStatement; } });
Object.defineProperty(exports, "nextIfSibling", { enumerable: true, get: function () { return polyfill_1.nextIfSibling; } });
Object.defineProperty(exports, "nextEntrySibling", { enumerable: true, get: function () { return polyfill_1.nextEntrySibling; } });
function prevent(fn) {
    return obb_1.sandbox(fn, 1 /* PREVENT_COLLECT */)();
}
exports.prevent = prevent;
function autorun(fn, passive) {
    let subscriber = new obb_1.Subscriber(fn, passive ? obb_1.SUBSCRIBE_OPTION.PREVENT_COLLECT : obb_1.SUBSCRIBE_OPTION.DEFAULT);
    return subscriber.mount().res;
}
exports.autorun = autorun;
function removeAllSibling(sibling) {
    return sibling.removeAllSibling();
}
exports.removeAllSibling = removeAllSibling;
function nextSibling(sibling) {
    return sibling.nextSibling();
}
exports.nextSibling = nextSibling;
function nextNodes(sibling, els) {
    return sibling.nextSibling().setNodes(els);
}
exports.nextNodes = nextNodes;
function nextChild(el, getter, is_reactive, passive) {
    let sibling = el instanceof Array ? new siblings_1.NodeList(el) : new siblings_1.Children(el);
    if (getter !== undefined) {
        is_reactive
            ? autorun(function () {
                sibling.setNodes(getter());
            }, passive)
            : sibling.setNodes(getter);
    }
    return sibling;
}
exports.nextChild = nextChild;
function setAttribute(el, name, value, literal) {
    //console.log("_webx_set_attribute:", { el, name, value, literal });
    !literal ? el.setAttribute(name, value) : (el[name] = value);
}
exports.setAttribute = setAttribute;
function setText(node, text) {
    //console.log("setText:", { node, text });
    // CharacterData
    node.data = text;
}
exports.setText = setText;
function addEventListener(el, ...args) {
    el.addEventListener(...args);
}
exports.addEventListener = addEventListener;
function appendChild(el, child) {
    el.appendChild(child);
}
exports.appendChild = appendChild;
function insertBefore(parent, target, ref) {
    parent.insertBefore(target, ref);
}
exports.insertBefore = insertBefore;
function createElement(tagName) {
    //console.log("_webx_create_element:", { tagName });
    return document.createElement(tagName);
}
exports.createElement = createElement;
function createTextNode(data) {
    //console.log("_webx_create_text_node:", { data });
    return document.createTextNode(data);
}
exports.createTextNode = createTextNode;
function setNodes(sibling, els) {
    sibling.setNodes(els);
}
exports.setNodes = setNodes;
let webx = {
    prevent,
    autorun,
    action: obb_1.action,
    runInAction: obb_1.runInAction,
    observable: obb_1.observable,
    nextChild,
    nextSibling,
    nextNodes,
    setNodes,
    nextIfSibling: polyfill_1.nextIfSibling,
    nextEntrySibling: polyfill_1.nextEntrySibling,
    entryStatement: polyfill_1.entryStatement,
    removeAllSibling,
    setAttribute,
    setText,
    addEventListener,
    appendChild,
    insertBefore,
    createElement,
    createTextNode
};
typeof window === "object" && (window._webx = webx);
exports.default = webx;
/*
function validate(sib: Sibling) {
    let siblings = sib.siblings;
    for (let s of siblings) {
        if (sib.next !== s) {
            debugger;
        }
        if (s.prev !== sib) {
            debugger;
        }
        sib = validate(s);
    }
    return sib
}*/ 


/***/ }),

/***/ "./js/core/runtime/polyfill.ts":
/*!*************************************!*\
  !*** ./js/core/runtime/polyfill.ts ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.nextEntrySibling = exports.nextIfSibling = exports.entryStatement = void 0;
const obb_1 = __webpack_require__(/*! ../../obb/js/obb */ "./js/obb/js/obb.ts");
function entryStatement(object, body) {
    if (!object) {
        return;
    }
    let newest_keys = Object.keys(object);
    let newest_values = Object.values(object);
    for (let index = 0, limit = newest_keys.length; index < limit; index++) {
        body(newest_values[index], newest_keys[index], index, object);
    }
}
exports.entryStatement = entryStatement;
function nextIfSibling(parent, test, consequent, alternate) {
    let parent_subscriber = obb_1.Subscriber.PARENT;
    let subscriber;
    obb_1.watch(test, function (new_val, old_val) {
        let callback;
        if (!subscriber || !new_val !== !old_val) {
            callback = new_val ? consequent : alternate;
            if (subscriber) {
                subscriber.unmount();
                parent.removeAllSibling();
            }
            subscriber = callback && new obb_1.Subscriber(callback);
            subscriber && subscriber.mount(parent_subscriber);
        }
    }, true);
}
exports.nextIfSibling = nextIfSibling;
function nextEntrySibling(parent, data, callback) {
    let siblings;
    if (parent) {
        parent.removeAllSibling();
        siblings = parent.siblings;
    }
    let target;
    let old_control_set = [];
    let old_value_set = [];
    let old_key_set = [];
    let old_index_set = [];
    let new_control_set;
    let new_value_set;
    let new_key_set;
    let new_index_set;
    let newest_keys;
    let newest_values;
    function addRecord(control, value, key, index) {
        /*new_control_set.push(control);
        new_value_set.push(value);
        new_key_set.push(key);
        new_index_set.push(index);*/
        new_control_set[index] = control;
        new_value_set[index] = value;
        new_key_set[index] = key;
        new_index_set[index] = index;
    }
    function delRecord(index, length) {
        if (index === 0 && length === 1) {
            old_control_set.shift();
            old_value_set.shift();
            old_key_set.shift();
            old_index_set.shift();
            return;
        }
        old_control_set.splice(index, length);
        old_value_set.splice(index, length);
        old_key_set.splice(index, length);
        old_index_set.splice(index, length);
    }
    const reuse = obb_1.action(function (_index, value, key, index) {
        //console.log("reuse", old_index_set[_index], value, key, index)
        let control = old_control_set[_index];
        let entry = control[0 /* ENTRY */];
        addRecord(control, value, key, index);
        if (old_index_set[_index] !== index) {
            parent && control[2 /* SIBLING */].moveTo(index);
            //console.log("index", _index, index);
            entry.i = index;
        }
        if (old_key_set[_index] !== key) {
            //console.log("key", bak_key_set[_index], key);
            entry.k = key;
        }
        if (old_value_set[_index] !== value) {
            //console.log("key", bak_value_set[_index], value);
            entry.v = value;
        }
    });
    function destory(index) {
        let control = old_control_set[index];
        //console.log("destory", index, control)
        control[1 /* SUBSCRIBER */].parent = subscriber.parent;
        control[1 /* SUBSCRIBER */].unmount();
        parent && control[2 /* SIBLING */].destory();
        //old_value_set[index] = old_key_set[index] = MARK_NOTUSED;
        delRecord(index, 1);
    }
    function add(value, key, index) {
        //console.log("add", value, key, index)
        let entry = obb_1.observable({ v: value, k: key, i: index, t: target });
        let last_index = parent && siblings.length;
        /**
         * subscriber.parent
         * 使 _subscriber 只跟随上级订阅环境自动释放
         * 由当前订阅环境自有逻辑精确处理子订阅关系
         */
        let current_subscriber = new obb_1.Subscriber(function () {
            callback(entry);
        }, obb_1.SUBSCRIBE_OPTION.PREVENT_COLLECT).mount(subscriber.parent);
        /**
         * 能防止冗余的订阅回调
         */
        current_subscriber.parent = subscriber;
        let current_sibling = parent && siblings[last_index];
        addRecord([entry, current_subscriber, current_sibling], value, key, index);
        parent && current_sibling.moveTo(index);
    }
    let subscriber = new obb_1.Subscriber(function () {
        let brokens = subscriber.brokens;
        let accus = brokens.map(sub => sub.accu);
        target = getData(); //计算方法能穿透订阅，当内部有变更时当前订阅也会被回调
        newest_keys = [];
        newest_values = [];
        if (target !== null && target !== undefined) {
            let ob = obb_1.Observer.TO_OB(target);
            if (ob) { // 提高执行效率， 10000 个数据项 大概能提升10ms
                let raw = ob.target;
                ob.collect(obb_1.MASK_ITERATE, 1 /* OWN */);
                for (let key in raw) {
                    ob.collect(key, 2 /* REF */);
                    newest_keys.push(key);
                    newest_values.push(obb_1.observable(raw[key]));
                }
            }
            else {
                newest_keys = Object.keys(target);
                newest_values = Object.values(target);
            }
        }
        new_control_set = [];
        new_value_set = [];
        new_key_set = [];
        new_index_set = [];
        let t;
        let index = 0;
        let _index;
        let value;
        let key;
        let length = newest_values.length;
        while (index < length) {
            value = newest_values.shift();
            key = newest_keys.shift();
            if (old_value_set.length) {
                /**
                 * 这里 value key index 中，其中两个因素确定结果的匹配
                 * 作用是尽可能的保持循环体内闭包环境的稳定性（不会因为数值差异过大而大量重新生成）
                 * 即是不需要给循环项绑定key（绑定key的方式仅是key与dom的确认关系，当key为下标时将没有意义）
                 * ，也能维持dom与数据稳定的一一确认关系
                 */
                _index = old_value_set.indexOf(value);
                if (_index < 0) {
                    _index = old_key_set.indexOf(key);
                    if (_index >= 0) {
                        t = old_value_set[_index];
                        if (t && typeof t === "object"
                            && newest_values.includes(t)) {
                            _index = -1;
                        }
                    }
                    else if (!newest_values.includes(old_value_set[0])) {
                        _index = 0;
                    }
                }
                else if (old_index_set[_index] !== index
                    && old_key_set[_index] !== key
                    && typeof value !== "object") {
                    t = newest_keys.indexOf(old_key_set[_index]);
                    if (t >= 0 && newest_values[t] === old_value_set[_index]) {
                        _index = newest_values.includes(old_value_set[0]) ? -1 : 0;
                    }
                }
                if (_index >= 0) {
                    t = _index;
                    reuse(_index++, value, key, index++);
                    while (newest_values.length && _index < old_value_set.length) {
                        if (newest_values[0] === old_value_set[_index]) {
                            reuse(_index++, newest_values.shift(), newest_keys.shift(), index++);
                        }
                        else {
                            break;
                        }
                    }
                    delRecord(t, _index - t);
                    continue;
                }
            }
            add(value, key, index++);
        }
        while (old_value_set.length) {
            destory(0);
        }
        old_control_set = new_control_set;
        old_value_set = new_value_set;
        old_key_set = new_key_set;
        old_index_set = new_index_set;
        for (let i = 0, sub; i < brokens.length; i++) {
            sub = brokens[i];
            if (sub.accu === accus[i]
                && sub.parent !== undefined
                && !sub.is_run) {
                sub.update();
            }
        }
    });
    let getData = obb_1.computed(data, subscriber);
    subscriber.mount();
}
exports.nextEntrySibling = nextEntrySibling;


/***/ }),

/***/ "./js/core/runtime/siblings.ts":
/*!*************************************!*\
  !*** ./js/core/runtime/siblings.ts ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeList = exports.Children = exports.Sibling = void 0;
const obb_1 = __webpack_require__(/*! ../../obb/js/obb */ "./js/obb/js/obb.ts");
const ELEMENT_TO_LAST_SIBLING = new WeakMap();
class Sibling {
    constructor(target, prev) {
        this.target = target;
        this.prev = prev;
        this.nodes = [];
        this.siblings = [];
        if (prev || (this.prev = prev = ELEMENT_TO_LAST_SIBLING.get(target))) {
            if (prev.next) {
                prev.next.prev = this;
                this.next = prev.next;
            }
            prev.next = this;
        }
        ELEMENT_TO_LAST_SIBLING.set(target, this);
    }
    setNodes(val) {
        if (!this.target) {
            //console.log("warn", this);
            return;
        }
        let nodes = this.nodes;
        let has_bak = nodes.length;
        let bak_nodes = has_bak && nodes.slice();
        has_bak && this.removeAllNodes();
        this.addNodes(val, bak_nodes);
    }
    moveTo(to) {
        let from = this.index;
        let parent = this.parent;
        //console.log("moveTo", from, to);
        if (from === to) {
            return;
        }
        else if (!parent) {
            debugger;
        }
        let siblings = parent.siblings;
        siblings.splice(from, 1);
        let first_sibling = this.firstSibling();
        let last_sibling = this.lastSibling();
        let prev_sibling = first_sibling.prev;
        let next_sibling = last_sibling.next;
        if (prev_sibling) {
            prev_sibling.next = next_sibling;
        }
        if (next_sibling) {
            next_sibling.prev = prev_sibling;
        }
        let to_first_sibling = siblings[to] || parent.lastSibling().next;
        let first_node = to_first_sibling && to_first_sibling.firstNode();
        let to_prev_sibling = to_first_sibling ? to_first_sibling.prev : parent.lastSibling();
        first_node ? this.insertBefore(first_node) : this.appendTo();
        if (to_prev_sibling) {
            to_prev_sibling.next = first_sibling;
        }
        if (to_first_sibling) {
            to_first_sibling.prev = last_sibling;
        }
        first_sibling.prev = to_prev_sibling;
        last_sibling.next = to_first_sibling;
        to = Math.min(to, siblings.length);
        siblings.splice(to, 0, this);
        for (let i = Math.min(from, to), limit = Math.max(from, to); i <= limit; i++) {
            siblings[i].index = i;
        }
    }
    firstNode() {
        let nodes = this.nodes;
        return nodes.length ? nodes[0] : this.next && this.next.firstNode();
    }
    firstSibling() {
        return this;
    }
    lastSibling() {
        let last_sibling = this.siblings[this.siblings.length - 1];
        return last_sibling ? last_sibling.lastSibling() : this;
    }
    nextSibling() {
        if (!this.target) {
            //console.log("warn", this);
            return this;
        }
        let new_sibling = new this.constructor(this.target, this.lastSibling());
        let siblings = this.siblings;
        new_sibling.parent = this;
        new_sibling.index = siblings.length;
        siblings.push(new_sibling);
        return new_sibling;
    }
    removeAllSibling() {
        let siblings = this.siblings;
        for (let i = siblings.length - 1; i >= 0; i--) {
            this.removeSibling(siblings[i]);
        }
    }
    removeSibling(sibling) {
        let siblings = this.siblings;
        let index = sibling.index;
        if (siblings[index] === sibling) {
            let prev_sibling = sibling.prev;
            let last_sibling = sibling.lastSibling();
            let next_sibling = last_sibling.next;
            sibling.prev = null;
            last_sibling.next = null;
            if (prev_sibling) {
                prev_sibling.next = next_sibling;
            }
            if (next_sibling) {
                next_sibling.prev = prev_sibling;
            }
            sibling.setNodes(null);
            siblings.splice(index, 1);
            while (index < siblings.length) {
                siblings[index++].index -= 1;
            }
            sibling.removeAllSibling();
            sibling.target = null;
        }
        else {
            debugger;
        }
    }
    destory() {
        this.parent.removeSibling(this);
    }
}
exports.Sibling = Sibling;
class Children extends Sibling {
    constructor() {
        super(...arguments);
        this.insertBefore = (referenceNode) => {
            let parentNode = referenceNode.parentElement;
            for (let node of this.nodes) {
                parentNode.insertBefore(node, referenceNode);
            }
            for (let sibling of this.siblings) {
                sibling.insertBefore(referenceNode);
            }
        };
    }
    appendTo() {
        for (let node of this.nodes) {
            this.target.appendChild(node);
        }
        for (let sibling of this.siblings) {
            sibling.appendTo();
        }
    }
    removeAllNodes() {
        for (let node of this.nodes) {
            let parent = node.parentElement;
            parent && parent.removeChild(node);
        }
        this.nodes.length = 0;
    }
    addNodes(val, reuses) {
        if (val === undefined || val === null) {
            return;
        }
        let nodes = this.nodes;
        let node;
        switch (true) {
            case val instanceof Node:
                nodes.push(node = val);
                break;
            case val instanceof Array:
                for (let item of val) {
                    this.addNodes(item, reuses);
                }
                return;
            default:
                /**
                 * 复用大部分在数据特征鉴定部分完成（nextEntrySibling autorun），
                 * 这里仅做对 TextNode 的简单处理
                 */
                if (reuses && reuses.length && reuses[0].nodeType === Node.TEXT_NODE) {
                    _webx.setText(node = reuses.shift(), val);
                }
                else {
                    node = _webx.createTextNode(val);
                }
                nodes.push(node);
                break;
        }
        let reference_node = this.next && this.next.firstNode();
        reference_node
            ? _webx.insertBefore(this.target, node, reference_node)
            : _webx.appendChild(this.target, node);
    }
}
exports.Children = Children;
class NodeList extends Sibling {
    constructor(target, prev) {
        super(target, prev);
        this.insertBefore = (referenceNode) => {
            let list = this.target;
            let raw_list = this.raw;
            let nodes = this.nodes;
            if (nodes.length) {
                let index = raw_list.indexOf(referenceNode);
                list.splice(raw_list.indexOf(nodes[0]), nodes.length);
                for (let node of nodes) {
                    list.splice(index, 0, node);
                }
            }
            for (let sibling of this.siblings) {
                sibling.insertBefore(referenceNode);
            }
        };
        this.raw = obb_1.Observer.TO_RAW(target);
    }
    /*setNodes = sandbox(
        // target 可能是可观测对象，这里用 sanbox 防止当前操作所需数据被订阅
        super.setNodes.bind(this),
        SANDOBX_OPTION.PREVENT_COLLECT
    )*/
    setNodes(val) {
        /**
         * 基础功能使用 subscriber.option 比 sandbox 效率 更高一些
         * 现有的使用 sibling 管理节点执行环境中不存 Subscriber.PARENT 为空的情况
         */
        let subscriber = obb_1.Subscriber.PARENT;
        let option = subscriber.option;
        subscriber.option = option | obb_1.SUBSCRIBE_OPTION.PREVENT_COLLECT;
        super.setNodes(val);
        subscriber.option = option;
    }
    moveTo(to) {
        let subscriber = obb_1.Subscriber.PARENT;
        let option = subscriber.option;
        subscriber.option = option | obb_1.SUBSCRIBE_OPTION.PREVENT_COLLECT;
        super.moveTo(to);
        subscriber.option = option;
    }
    removeSibling(sibling) {
        let subscriber = obb_1.Subscriber.PARENT;
        let option = subscriber.option;
        subscriber.option = option | obb_1.SUBSCRIBE_OPTION.PREVENT_COLLECT;
        super.removeSibling(sibling);
        subscriber.option = option;
    }
    appendTo() {
        let list = this.target;
        let raw_list = this.raw; //使用 raw_list 是为了在一定不产生变更的操作中节省开销
        let nodes = this.nodes;
        if (nodes.length) {
            list.splice(raw_list.indexOf(nodes[0]), nodes.length);
            for (let node of nodes) {
                list.push(node);
            }
        }
        for (let sibling of this.siblings) {
            sibling.appendTo();
        }
    }
    removeAllNodes() {
        let list = this.target;
        let raw_list = this.raw;
        for (let node of this.nodes) {
            list.splice(raw_list.indexOf(node), 1);
        }
        this.nodes.length = 0;
    }
    addNodes(val, reuses) {
        if (val === undefined || val === null) {
            return;
        }
        let nodes = this.nodes;
        let node;
        switch (true) {
            case val instanceof Node:
                nodes.push(node = val);
                break;
            case val instanceof Array:
                for (let item of val) {
                    this.addNodes(item, reuses);
                }
                return;
            default:
                /**
                 * 复用大部分在数据特征鉴定部分完成（nextEntrySibling autorun），
                 * 这里仅做对 TextNode 的简单处理
                 */
                if (reuses && reuses.length && reuses[0].nodeType === Node.TEXT_NODE) {
                    _webx.setText(node = reuses.shift(), val);
                }
                else {
                    node = _webx.createTextNode(val);
                }
                nodes.push(node);
                break;
        }
        let reference_node = this.next && this.next.firstNode();
        let list = this.target;
        let raw_list = this.raw;
        if (reference_node) {
            list.splice(raw_list.indexOf(reference_node), 0, node);
        }
        else {
            list.push(node);
        }
    }
}
exports.NodeList = NodeList;


/***/ }),

/***/ "./js/obb/js/obb.ts":
/*!**************************!*\
  !*** ./js/obb/js/obb.ts ***!
  \**************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.MASK_UNDEFINED = exports.MASK_ITERATE = exports.reaction = exports.watch = exports.computed = exports.SUBSCRIBE_OPTION = exports.transacts = exports.runInSandbox = exports.sandbox = exports.runInAction = exports.action = exports.runInAtom = exports.atom = exports.autorun = exports.observable = exports.Subscriber = exports.Observer = void 0;
var SUBSCRIBE_OPTION;
(function (SUBSCRIBE_OPTION) {
    SUBSCRIBE_OPTION[SUBSCRIBE_OPTION["DEFAULT"] = 0] = "DEFAULT";
    SUBSCRIBE_OPTION[SUBSCRIBE_OPTION["PREVENT_COLLECT"] = 1] = "PREVENT_COLLECT";
    SUBSCRIBE_OPTION[SUBSCRIBE_OPTION["COMPUTED"] = 2] = "COMPUTED";
})(SUBSCRIBE_OPTION || (SUBSCRIBE_OPTION = {}));
exports.SUBSCRIBE_OPTION = SUBSCRIBE_OPTION;
// ------------------------------------------------------
const GLOBAL = typeof window === "object" ? window : global;
const SUBSCRIBER_STACK = [];
const REACTION_STATE_LIST = [];
const REACTION_TARGET_LIST = [];
const ACTION_STACK = [];
const OBSERVER_MAP = new WeakMap();
const SANDBOX_STACK = [];
const MASK_ITERATE = ["iterate"];
exports.MASK_ITERATE = MASK_ITERATE;
const MASK_UNDEFINED = ["undefined"];
exports.MASK_UNDEFINED = MASK_UNDEFINED;
class Observer {
    constructor(target) {
        this.target = target;
        this.refmap = new Map();
        this.ownmap = new Map();
        this._has = (key) => {
            return key in this.target;
        };
        this._val = (key) => {
            return this.target[key];
        };
        this._del = (key) => {
            return delete this.target[key];
        };
        this._set = (key, value) => {
            return this.target[key] = value;
        };
        this._proxy_handler = {
            get: (target, prop) => {
                //console.log("get", target, prop);
                let value = target[prop];
                if (prop !== "__proto__") { //target.hasOwnProperty(prop) // 允许收集未定义属性
                    value = observable(value);
                    this.collect(prop);
                }
                return value;
            },
            set: (target, prop, value) => {
                //console.log("set", target, prop, value);
                let bak_value = target[prop];
                let ob = OBSERVER_MAP.get(value);
                let raw_value = ob ? ob.target : value;
                let own = target.hasOwnProperty(prop);
                let eq = equal(bak_value, raw_value);
                if (!eq || !own) {
                    _runInPlain(() => {
                        target[prop] = raw_value;
                        if (!own) {
                            this.notify(prop, false, 1 /* OWN */);
                            this.notify(MASK_ITERATE, MASK_ITERATE, 1 /* OWN */);
                        }
                        if (!eq) {
                            this.notify(prop, bak_value);
                        }
                        //this.notify(MASK_ITERATE, MASK_ITERATE, RECORD_TYPE.REF);
                    });
                }
                return true;
            },
            ownKeys: (target) => {
                this.collect(MASK_ITERATE, 1 /* OWN */);
                return ownKeys(target);
            },
            has: (target, key) => {
                this.collect(key, 1 /* OWN */);
                return key in target;
            },
            deleteProperty: (target, key) => {
                //console.log("deleteProperty",target,key);
                return _runInPlain(() => {
                    if (target.hasOwnProperty(key)) {
                        this.notify(key, target[key]);
                        this.notify(key, true, 1 /* OWN */);
                        this.notify(MASK_ITERATE, MASK_ITERATE, 1 /* OWN */);
                        //this.notify(MASK_ITERATE, MASK_ITERATE, RECORD_TYPE.REF);
                    }
                    return delete target[key];
                });
            },
        };
        switch (true) {
            case target instanceof WeakSet:
            case target instanceof WeakMap:
            case target instanceof Map:
            case target instanceof Set:
                obInternalData(this);
                break;
            case target[Symbol.iterator]: // array-like
            case target instanceof Array:
                obArray(this);
                break;
        }
        this.proxy = new Proxy(target, this._proxy_handler);
        OBSERVER_MAP.set(this.proxy, this);
        OBSERVER_MAP.set(target, this);
    }
    static TO_RAW(obj) {
        let ob = OBSERVER_MAP.get(obj);
        return ob ? ob.target : obj;
    }
    static TO_OB(obj) {
        return OBSERVER_MAP.get(obj);
    }
    collect(prop, type = 2 /* REF */) {
        let subscriber = SUBSCRIBER_STACK[0];
        if (subscriber && !(subscriber.option & SUBSCRIBE_OPTION.PREVENT_COLLECT)) {
            let map = this._map(type);
            let ref = map.get(prop);
            ref || map.set(prop, ref = new Set());
            subscriber.depend(ref);
        }
    }
    release() {
        for (let map of [this.refmap, this.ownmap]) {
            map.forEach(set => {
                set.forEach(sub => sub.undepend(set));
            });
            map.clear();
        }
    }
    notify(prop, value, type = 2 /* REF */) {
        let record = [this, prop, value, type];
        SANDBOX_STACK.length && SANDBOX_STACK[0][0 /* RECORDS */].push(record);
        let set = this._map(type).get(prop);
        if (set && set.size) {
            if (ACTION_STACK.length) {
                set.forEach(sub => sub.addRecord(record));
            }
            else {
                let reactions;
                let min_depth = Number.MAX_SAFE_INTEGER;
                set.forEach(sub => {
                    reactions.push(sub);
                    min_depth > sub.depth && (min_depth = sub.depth);
                });
                deepReactive(reactions, min_depth);
            }
        }
    }
    _map(type) {
        return type & 2 /* REF */ ? this.refmap : this.ownmap;
    }
}
exports.Observer = Observer;
class Subscriber {
    constructor(fn, option = SUBSCRIBE_OPTION.DEFAULT) {
        this.fn = fn;
        this.option = option;
        this.depth = 0;
        this.children = [];
        this._deps = new Set();
        this.is_run = false;
        this.brokens = [];
        this.accu = 0;
    }
    static get PARENT() {
        return SUBSCRIBER_STACK[0];
    }
    undepend(set) {
        this._deps.delete(set);
        set.delete(this);
    }
    depend(set) {
        this._deps.add(set);
        set.add(this);
        if (this.option & SUBSCRIBE_OPTION.COMPUTED
            && this.parent && this.parent.parent !== undefined) {
            this.parent.depend(set);
        }
    }
    clear(shallow) {
        this._deps.forEach(ref => ref.delete(this));
        this._deps.clear();
        if (!shallow) {
            for (let child of this.children) {
                child.clear();
                child.parent = undefined;
            }
        }
        this.children.length = 0;
    }
    unmount(shallow) {
        this.clear(shallow);
        if (!shallow) {
            let siblings = this.parent && this.parent.children;
            siblings && siblings.splice(siblings.indexOf(this), 1);
            if (this._sandbox) {
                let index = this._sandbox[1 /* SUBSCRIBERS */].indexOf(this);
                index >= 0 && this._sandbox[1 /* SUBSCRIBERS */].splice(index, 1);
            }
        }
        this._sandbox = undefined;
        this.parent = undefined;
    }
    mount(parent) {
        if (this.parent !== undefined) {
            // 可能存者一个 Subscriber 实例发生递归 mount 或其他复用执行的情况
            return new Subscriber(this.fn).mount(parent);
        }
        this.parent = parent || SUBSCRIBER_STACK[0];
        if (this.parent) {
            if (this.parent.parent === undefined) {
                /**
                 * 可能存在挂载下一个子订阅时当前订阅已被释放（当前订阅方法执行过程中产生更改导致上级订阅刷新）
                 * 这不一定是使用放方发生错误，但挂载方不应该错误的允许此行为
                 */
                this.parent = undefined;
                return this;
            }
            this.depth = this.parent.depth + 1;
        }
        else {
            this.parent = null;
        }
        if (SANDBOX_STACK.length) {
            this._sandbox = SANDBOX_STACK[0];
            this._sandbox[1 /* SUBSCRIBERS */].push(this);
        }
        this.parent && this.parent.children.push(this);
        this._run();
        return this;
    }
    update() {
        this.clear();
        return this._run();
    }
    addRecord(record) {
        let depth = ACTION_STACK[0][0 /* DEPTH */];
        let index = REACTION_TARGET_LIST.indexOf(this);
        if (index < 0 || REACTION_STATE_LIST[index][0 /* DEPTH */] < depth) {
            REACTION_STATE_LIST.unshift([depth, [record]]);
            REACTION_TARGET_LIST.unshift(this);
        }
        else {
            REACTION_STATE_LIST[index][1 /* RECORDS */].push(record);
        }
        if (this.option & SUBSCRIBE_OPTION.COMPUTED
            && this.parent && this.parent.parent !== undefined) {
            this.parent.addRecord(record);
        }
    }
    _run() {
        this.is_run = true;
        SUBSCRIBER_STACK.unshift(this);
        this.accu += 1;
        try {
            return this.res = this.fn();
        }
        catch (e) {
            throw e;
        }
        finally {
            SUBSCRIBER_STACK.shift();
            this.is_run = false;
            this.brokens.length = 0;
        }
    }
}
exports.Subscriber = Subscriber;
function ownKeys(obj) {
    //return Reflect.ownKeys(target);
    return Array.prototype.concat.call(Object.getOwnPropertySymbols(obj), Object.getOwnPropertyNames(obj));
}
function transacts(option, fn, ...args) {
    transacting(option);
    try {
        return fn(...args);
    }
    catch (e) {
        throw e;
    }
    finally {
        transacted();
    }
}
exports.transacts = transacts;
function atom(fn) {
    return transacts.bind(null, fn, 2 /* ATOM */);
}
exports.atom = atom;
const runInAtom = transacts.bind(null, 2 /* ATOM */);
exports.runInAtom = runInAtom;
const _runInPlain = transacts.bind(null, 18 /* PLAIN */);
function action(fn) {
    return transacts.bind(null, 1 /* ACTION */, fn);
}
exports.action = action;
const runInAction = transacts.bind(null, 1 /* ACTION */);
exports.runInAction = runInAction;
function sandbox(fn, option = 7 /* DEFAULT */) {
    return _runInSandbox.bind(null, option, fn);
}
exports.sandbox = sandbox;
const runInSandbox = _runInSandbox.bind(null, 7 /* DEFAULT */);
exports.runInSandbox = runInSandbox;
function _runInSandbox(option, fn, ...args) {
    let parent_sandbox = SANDBOX_STACK[0];
    let parent_subscrber = SUBSCRIBER_STACK[0];
    let bakopt = parent_subscrber && parent_subscrber.option;
    let subs = option & 4 /* CLEAN_CHANGE */ || !parent_sandbox
        ? []
        : parent_sandbox[1 /* SUBSCRIBERS */];
    let start = subs.length;
    let records = option & 4 /* CLEAN_CHANGE */ || !parent_sandbox
        ? []
        : parent_sandbox[0 /* RECORDS */];
    parent_subscrber && (parent_subscrber.option = option & 1 /* PREVENT_COLLECT */
        ? (bakopt | SUBSCRIBE_OPTION.PREVENT_COLLECT)
        : (bakopt & ~SUBSCRIBE_OPTION.PREVENT_COLLECT));
    SANDBOX_STACK.unshift([
        records,
        subs,
        option | (
        // 用于外部判断逻辑，使能根据上层 sandbox 配置过滤掉不应当的订阅响应
        parent_sandbox
            && parent_sandbox[2 /* OPTION */] & 4 /* CLEAN_CHANGE */)
    ]);
    try {
        return fn(...args);
    }
    catch (e) {
        throw e;
    }
    finally {
        SANDBOX_STACK.shift();
        if (option & 4 /* CLEAN_CHANGE */) {
            cleanChanges(records);
        }
        if (option & 2 /* CLEAN_SUBSCRIBE */) {
            for (let i = subs.length - 1; i >= start; i--) {
                let sub = subs[i];
                sub.unmount(sub.parent !== parent_subscrber);
            }
            subs.length = start; //节省消耗，unmount 参数 1 不一定都是 true
        }
        else if (parent_sandbox && option & 4 /* CLEAN_CHANGE */) {
            Array.prototype.push.apply(parent_sandbox[1 /* SUBSCRIBERS */], subs);
        }
        parent_subscrber && (parent_subscrber.option = bakopt);
    }
}
function cleanChanges(records) {
    let volatile_records = [];
    diffRecords(records, function (record) {
        let ob = record[0 /* OBSERVER */];
        let key = record[1 /* KEY */];
        let type = record[3 /* TYPE */];
        if (type & 1 /* OWN */) {
            // 当前方法非返回 -1 则不会出现 type === RECORD_TYPE.OWN 
            // 而 value 不为 false 的情况
            ob._del(key);
        }
        else if (~type & 4 /* READONLY */) {
            if (type & 8 /* VOLATILE */) {
                volatile_records.push(record);
                return;
            }
            ob._set(key, record[2 /* VALUE */]);
        }
    });
    for (let record of volatile_records) {
        record[0 /* OBSERVER */]._set(record[1 /* KEY */], record[2 /* VALUE */]);
    }
}
function autorun(fn) {
    let sub = new Subscriber(fn);
    sub.mount();
    return function disposer() {
        sub.unmount();
    };
}
exports.autorun = autorun;
/*
const BUILTIN_LITERAL_SET = new Set(
    [Date, RegExp, Number, String, Blob]
);//[Date, RegExp, Number, String], GLOBAL.BigInt
*/
const SHOULD_OBSERVABLE_SET = new Set([
    Object, Array, Map, Set, WeakMap, WeakSet,
]);
function observable(obj) {
    if (obj && typeof obj === "object") {
        let ob = OBSERVER_MAP.get(obj);
        if (ob) {
            obj = ob.proxy;
        }
        else {
            let constructor = obj.constructor;
            if (SHOULD_OBSERVABLE_SET.has(constructor)
                || GLOBAL[constructor.name] !== constructor) {
                obj = new Observer(obj).proxy;
            }
        }
    }
    return obj;
}
exports.observable = observable;
function computed(calc, parent = null) {
    let value;
    let changed = 0;
    let subscriber = new Subscriber(function () {
        if (changed ^= 1) {
            value = calc();
        }
    }, SUBSCRIBE_OPTION.COMPUTED);
    subscriber.parent = parent;
    return function () {
        changed || subscriber.update();
        return value;
    };
}
exports.computed = computed;
function watch(handle, watcher, immediately) {
    let value_stack = [];
    let subscriber = new Subscriber(function () {
        value_stack.unshift(handle());
        if (value_stack.length > 1) {
            let [new_val, old_val] = value_stack;
            equal(new_val, old_val) || watcher(new_val, old_val);
        }
        else if (value_stack.length === 1 && immediately) {
            watcher(value_stack[0]);
        }
        value_stack.length = 1;
    });
    subscriber.mount();
    return function disposer() {
        subscriber.unmount();
    };
}
exports.watch = watch;
function reaction(handle, watcher) {
    return watch(handle, function (new_val, old_val) {
        equal(new_val, old_val) || watcher(new_val);
    });
}
exports.reaction = reaction;
function transacting(option) {
    let action = ACTION_STACK[0];
    let hook;
    if (option === undefined) {
        option = action
            ? action[1 /* TYPE */] & 2 /* ATOM */
            : 1 /* DEFAULT */;
    }
    else if (typeof option !== "number") {
        hook = option.hook;
        option = option.option;
    }
    ACTION_STACK.unshift([
        ACTION_STACK.length,
        option,
        hook
    ]);
}
function diffRecords(records, callback) {
    let obj_map = new Map();
    let res = false;
    for (let record of records) {
        let ob = record[0 /* OBSERVER */];
        let key = record[1 /* KEY */];
        let key_set = obj_map.get(ob);
        if (key_set) {
            if (key_set.has(key)) {
                continue;
            }
            else {
                key_set.add(key);
            }
        }
        else {
            obj_map.set(ob, new Set([key]));
        }
        if (equal(record[3 /* TYPE */] !== 1 /* OWN */
            ? ob._val(key)
            : ob._has(key), record[2 /* VALUE */])) {
            continue;
        }
        if (!callback) {
            return true;
        }
        else if (callback(record) === -1) {
            key_set.delete(key);
        }
        res = true;
    }
    return res;
}
function transacted() {
    let reactions = [];
    let reaction_depth = Number.MAX_SAFE_INTEGER;
    let action = ACTION_STACK.shift();
    let depth = action[0 /* DEPTH */];
    let hook = action[2 /* HOOK */];
    if (ACTION_STACK.length !== 0
        && (action[1 /* TYPE */] & (18 /* PLAIN */ & ~2 /* ATOM */)
            || action[1 /* TYPE */] & 2 /* ATOM */
                && ACTION_STACK[0][1 /* TYPE */] & 2 /* ATOM */)) {
        return;
    }
    while (REACTION_TARGET_LIST.length
        && REACTION_STATE_LIST[0][0 /* DEPTH */] >= depth) {
        let subscriber = REACTION_TARGET_LIST.shift();
        let state = REACTION_STATE_LIST.shift();
        if (reactions.indexOf(subscriber) < 0
            && diffRecords(state[1 /* RECORDS */])) {
            let index;
            while ((index = REACTION_TARGET_LIST.lastIndexOf(subscriber)) >= 0) {
                REACTION_TARGET_LIST.splice(index, 1);
                REACTION_STATE_LIST.splice(index, 1);
            }
            reaction_depth = Math.min(reaction_depth, subscriber.depth);
            reactions.unshift(subscriber);
        }
    }
    hook && hook(reactions);
    if (reactions.length) {
        if (action[1 /* TYPE */] & 8 /* WRAPUP */) {
            runInAction(function () {
                deepReactive(reactions, reaction_depth);
            });
        }
        else {
            deepReactive(reactions, reaction_depth);
        }
    }
}
function deepReactive(reactions, min_depth = 0) {
    let sandbox = SANDBOX_STACK[0];
    let includes = sandbox
        && sandbox[2 /* OPTION */] & 4 /* CLEAN_CHANGE */
        && sandbox[1 /* SUBSCRIBERS */];
    const inScoped = function (sub) {
        return !includes || includes.indexOf(sub) >= 0;
    };
    let sub;
    let index;
    next: for (let i = reactions.length - 1; i >= 0; i--) {
        sub = reactions[i];
        if (sub.option & SUBSCRIBE_OPTION.COMPUTED) {
            reactions.splice(i, 1);
            sub.update();
            continue;
        }
        while ((sub = sub.parent) && sub.depth >= min_depth) {
            if (sub.is_run || !inScoped(sub)) {
                break;
            }
            index = reactions.indexOf(sub);
            if (index >= 0) {
                reactions[index].brokens.unshift(reactions[i]);
                //reactions[i].brokens.length = 0;
                reactions.splice(i, 1);
                continue next;
            }
        }
        sub = reactions[i];
        if (sub.is_run || !inScoped(sub)) {
            reactions.splice(i, 1);
        }
    }
    for (let i = 0; i < reactions.length; i++) {
        sub = reactions[i];
        sub.parent !== undefined && sub.update();
    }
}
function equal(a, b) {
    return a === b || a !== a && b !== b;
}
function obArray(ob) {
    let target = ob.target;
    let prototype = target.__proto__;
    let original = ob._proxy_handler.set;
    target.__proto__ = Object.create(prototype, Array.prototype.concat.call(['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].map(
    // 一个方法可能产生多次变更，这里使可能的多次变更最多对应一次订阅响应
    function (key) {
        const original = prototype[key];
        return original && [key, function () {
                let args = arguments;
                return _runInPlain(() => original.apply(this, args));
            }];
    }), ["values", Symbol.iterator].map(
    // 对于内部隐藏实现，这里使之产生相应的订阅
    function (key) {
        const original = prototype[key];
        return original && [key, function () {
                //ob.collect(MASK_ITERATE, RECORD_TYPE.REF);
                ob.collect(MASK_ITERATE, 1 /* OWN */);
                let index = 0;
                let proxy = ob.proxy;
                return {
                    next() {
                        let done = index >= target.length;
                        let value;
                        if (!done) {
                            ob.collect(index);
                            value = proxy[index++];
                        }
                        return { done, value };
                    }
                };
                //return obIterator(target, original);
            }];
    })).reduce(function (prototype, patch) {
        patch && (prototype[patch[0]] = { value: patch[1] });
        return prototype;
    }, {}));
    ob._proxy_handler.set = function (_target, key, value) {
        let length = target.length;
        return _runInPlain(function () {
            let res = original(_target, key, value);
            target.length !== length
                && ob.notify("length", length, 10 /* REF_AND_VOLATILE */);
            return res;
        });
    };
}
function obInternalData(ob) {
    var _a;
    let target = ob.target;
    let prototype = target.__proto__;
    let internal_ob = new Observer({});
    let _size = ((_a = Object.getOwnPropertyDescriptor(prototype, "size")) === null || _a === void 0 ? void 0 : _a.get.bind(target)) || function () { };
    let is_map = target instanceof Map || target instanceof WeakMap;
    ob.release = function () {
        internal_ob.release();
        return ob.release();
    };
    internal_ob._has = prototype.has.bind(target);
    if (is_map) {
        internal_ob._val = function (key) {
            return prototype.get.call(target, key);
            ;
        };
    }
    else {
        internal_ob._val = function (value) {
            return prototype.has.call(target, value) ? value : MASK_UNDEFINED;
        };
    }
    internal_ob._del = function (key) {
        return prototype.delete.call(target, key);
    };
    internal_ob._set = prototype.set
        ? function (key, value) {
            return prototype.set.call(target, key, value);
        } : function (key, value) {
        return prototype.add.call(target, key);
    };
    function gen_enters_value(value) {
        internal_ob.collect(value[0]);
        return [value[0], observable(value[1])];
    }
    function gen_value(value) {
        internal_ob.collect(value[0]);
        return observable(value[1]);
    }
    let proxyMethods = Object.assign({ get(key) {
            internal_ob.collect(key);
            return observable(prototype.get.call(target, key));
        },
        set(key, value) {
            let kob = OBSERVER_MAP.get(key);
            kob && (key = kob.target);
            let has_key = prototype.has.call(target, key);
            let bak_value = has_key ? prototype.get.call(target, key) : MASK_UNDEFINED;
            if (!has_key || !equal(bak_value, value)) {
                _runInPlain(() => {
                    prototype.set.call(target, key, value);
                    if (!has_key) {
                        internal_ob.notify(key, false, 1 /* OWN */);
                        internal_ob.notify(MASK_ITERATE, MASK_ITERATE, 1 /* OWN */);
                    }
                    internal_ob.notify(key, bak_value);
                });
            }
            return this;
        },
        add(key) {
            if (!prototype.has.call(target, key)) {
                _runInPlain(() => {
                    let size = _size();
                    prototype.add.call(target, key);
                    size !== undefined && ob.notify("size", size, 6 /* REF_AND_READONLY */);
                    internal_ob.notify(key, false, 1 /* OWN */);
                    internal_ob.notify(key, MASK_UNDEFINED);
                    internal_ob.notify(MASK_ITERATE, MASK_ITERATE, 1 /* OWN */);
                });
            }
            return this;
        },
        delete(key) {
            let get = prototype.get;
            let value = get ? get.call(target, key) : key;
            let size = _size();
            let res = prototype.delete.call(target, key);
            if (res) {
                _runInPlain(() => {
                    internal_ob.notify(key, value);
                    internal_ob.notify(key, true, 1 /* OWN */);
                    internal_ob.notify(MASK_ITERATE, MASK_ITERATE, 1 /* OWN */);
                    size !== undefined && ob.notify("size", size, 6 /* REF_AND_READONLY */);
                });
            }
            return res;
        },
        clear() {
            let size = _size();
            if (!size) {
                return;
            }
            _runInPlain(() => {
                prototype.forEach.call(target, (value, key) => {
                    internal_ob.notify(key, value);
                    internal_ob.notify(key, true, 1 /* OWN */);
                });
                internal_ob.notify(MASK_ITERATE, MASK_ITERATE, 1 /* OWN */);
                ob.notify("size", size, 6 /* REF_AND_READONLY */);
                prototype.clear.call(target);
            });
        },
        forEach(cb, ...args) {
            internal_ob.collect(MASK_ITERATE, 1 /* OWN */);
            return prototype.forEach.call(target, function (value, ...rest) {
                cb(observable(value), ...rest);
            }, ...args);
        },
        has(value) {
            internal_ob.collect(value, 1 /* OWN */);
            let res = prototype.has.call(target, value);
            return res;
        }, size: _size }, [
        ["keys", (value) => value[0]],
        ["entries", gen_enters_value],
        ["values", gen_value],
        [Symbol.iterator, is_map ? gen_enters_value : gen_value]
    ].reduce(function (res, [key, _value]) {
        let original = prototype["entries" /*key*/];
        if (original) {
            res[key] = function () {
                internal_ob.collect(MASK_ITERATE, 1 /* OWN */);
                let iterator = original.call(target);
                let originalNext = iterator.next.bind(iterator);
                iterator.next = function () {
                    let { done, value } = originalNext();
                    if (!done) {
                        value = _value(value);
                    }
                    return { done, value };
                };
                return iterator;
            };
        }
        return res;
    }, {}));
    let descriptors = {}; // Object.getOwnPropertyDescriptors(prototype);
    let keys = ownKeys(prototype);
    for (let key of keys) {
        let proxy = proxyMethods[key];
        let descriptor = Object.getOwnPropertyDescriptor(prototype, key);
        if (proxy) {
            if (descriptor.value !== undefined) {
                descriptor.value = proxy;
            }
            else {
                descriptor.get = proxy;
            }
        }
        descriptors[key] = descriptor;
    }
    target.__proto__ = Object.create(target.__proto__.__proto__, descriptors);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./js/runtime.js":
/*!***********************!*\
  !*** ./js/runtime.js ***!
  \***********************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/runtime */ "./js/core/runtime/index.ts");
/* harmony import */ var _core_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _core_runtime__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _core_runtime__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ })));
//# sourceMappingURL=runtime.js.map