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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/webx.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/Dison/js/character.ts":
/*!**********************************!*\
  !*** ./js/Dison/js/character.ts ***!
  \**********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//import { Token } from './interfaces'
const IdentifierStart = /[\x24\x5f\x41-\x5a\x61-\x7a]|[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDEC0-\uDEEB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/;
const IdentifierPart = /[\x24\x5f\x41-\x5a\x61-\x7a\x30-\x39]|[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D3-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDD30-\uDD39\uDF00-\uDF1C\uDF27\uDF30-\uDF50\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD46\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E\uDC5F\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCE9\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/;
class default_1 {
    testCodePoint(regexp) {
        if ((this.input.charCodeAt(this.index) & 0xfc00) === 0xd800
            && (this.input.charCodeAt(this.index + 1) & 0xfc00) === 0xdc00) {
            this._volatility = this.input[this.index] + this.input[this.index + 1];
            return regexp.test(this._volatility) ? 2 : 0;
        }
        else {
            return regexp.test(this.input[this.index]) ? 1 : 0;
        }
    }
    testUnicodeEscape(regexp) {
        let index = this.index + 1, code = 0;
        if (this.input[index++] === "u") {
            let cp = 0;
            if (this.input[index] === "{") {
                while ((code = this.hexValue(this.input.charCodeAt(++index))) >= 0) {
                    cp = cp * 16 + code;
                }
                if (this.input[index++] !== "}") { /* || index < this.index + 5*/
                    return 0;
                }
            }
            else {
                let len = 4;
                while (len--) {
                    code = this.hexValue(this.input.charCodeAt(index++));
                    if (code >= 0) {
                        cp = cp * 16 + code;
                    }
                    else {
                        return 0;
                    }
                }
            }
            return regexp.test(this.fromCodePoint(cp))
                ? index - this.index
                : -(index - this.index);
        }
        return 0;
    }
    scanHex(length = this.end) {
        let value = 0, code = 0, len = length;
        while (len) {
            code = this.hexValue(this.input.charCodeAt(this.index));
            if (code >= 0) {
                len--;
                value = value * 16 + code;
            }
            else {
                break;
            }
            this.index++;
        }
        return [value, length - len];
    }
    hexValue(ch) {
        return ch >= 0x30 && ch <= 0x39 ? ch - 0x30 :
            ch >= 0x41 && ch <= 0x46 ? ch - 0x41 + 10 :
                ch >= 0x61 && ch <= 0x66 ? ch - 0x61 + 10 : -1;
    }
    decimalValue(ch) {
        return ch >= 0x30 && ch <= 0x39 ? ch - 0x30 : -1;
    }
    octalValue(ch) {
        return ch >= 0x30 && ch <= 0x37 ? ch - 0x30 : -1;
    }
    binaryValue(ch) {
        return ch === 0x30 || ch == 0x31 ? ch - 0x30 : -1;
    }
    //https://github.com/jquery/esprima/blob/master/src/character.ts
    isWhiteSpace(ch) {
        return (ch === 0x20) || (ch === 0x09) || (ch === 0x0B) || (ch === 0x0C) || (ch === 0xA0) ||
            (ch >= 0x1680 && [0x1680, 0x2000, 0x2001, 0x2002, 0x2003, 0x2004, 0x2005, 0x2006, 0x2007, 0x2008, 0x2009, 0x200A, 0x202F, 0x205F, 0x3000, 0xFEFF].indexOf(ch) >= 0);
        /*return /^\x20|\x09|\x0B|\x0C|\xA0|\xfeff$/.test(char);*/
    }
    isLineTerminator(ch) {
        return (ch === 0x0A) || (ch === 0x0D) || (ch === 0x2028) || (ch === 0x2029);
        /*return /^\x0A|\x0D|\x2028|\x2029$/.test(char);*/
    }
    fromCodePoint(cp) {
        return this._volatility = cp < 0x10000
            ? String.fromCharCode(cp)
            : String.fromCharCode(0xd800 + (cp - 0x10000) >> 10)
                + String.fromCharCode(0xdc00 + (cp - 0x10000) & 1023);
    }
    inIdentifierStart() {
        let ch = this.input.charCodeAt(this.index);
        return (ch === 0x24) || (ch === 0x5F) ||
            (ch >= 0x41 && ch <= 0x5A) ||
            (ch >= 0x61 && ch <= 0x7A) ? 1 : (ch >= 0x80
            ? this.testCodePoint(IdentifierStart)
            : (ch === 0x5c ? this.testUnicodeEscape(IdentifierStart) : 0));
        /*return /^[_$a-zA-Z\u0080-\uffffff]$/.test(char);*/
    }
    inIdentifierPart() {
        let ch = this.input.charCodeAt(this.index);
        return (ch === 0x24) || (ch === 0x5F) ||
            (ch >= 0x41 && ch <= 0x5A) ||
            (ch >= 0x61 && ch <= 0x7A) ||
            (ch >= 0x30 && ch <= 0x39) ? 1 : (ch >= 0x80
            ? this.testCodePoint(IdentifierPart)
            : (ch === 0x5c ? this.testUnicodeEscape(IdentifierPart) : 0));
        /*return /^[\w$\u0080-\uffffff]$/.test(char);*/
    }
}
exports.default = default_1;


/***/ }),

/***/ "./js/Dison/js/interfaces.ts":
/*!***********************************!*\
  !*** ./js/Dison/js/interfaces.ts ***!
  \***********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NUMERIC_KEYWORD_MAPPINGS = void 0;
var NUMERIC_KEYWORD_MAPPINGS;
(function (NUMERIC_KEYWORD_MAPPINGS) {
    NUMERIC_KEYWORD_MAPPINGS[NUMERIC_KEYWORD_MAPPINGS["."] = 36] = ".";
    NUMERIC_KEYWORD_MAPPINGS[NUMERIC_KEYWORD_MAPPINGS["x"] = 8] = "x";
    NUMERIC_KEYWORD_MAPPINGS[NUMERIC_KEYWORD_MAPPINGS["b"] = 1] = "b";
    NUMERIC_KEYWORD_MAPPINGS[NUMERIC_KEYWORD_MAPPINGS["o"] = 2] = "o";
    NUMERIC_KEYWORD_MAPPINGS[NUMERIC_KEYWORD_MAPPINGS["X"] = 8] = "X";
    NUMERIC_KEYWORD_MAPPINGS[NUMERIC_KEYWORD_MAPPINGS["B"] = 1] = "B";
    NUMERIC_KEYWORD_MAPPINGS[NUMERIC_KEYWORD_MAPPINGS["O"] = 2] = "O";
})(NUMERIC_KEYWORD_MAPPINGS || (NUMERIC_KEYWORD_MAPPINGS = {}));
exports.NUMERIC_KEYWORD_MAPPINGS = NUMERIC_KEYWORD_MAPPINGS;
;


/***/ }),

/***/ "./js/Dison/js/lexical/head.ts":
/*!*************************************!*\
  !*** ./js/Dison/js/lexical/head.ts ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports._Scanner = exports.createSearchTree = void 0;
function createSearchTree(data, root = {}, block_list = []) {
    for (let item of data) {
        let node = root;
        switch (true) {
            case typeof item === "string":
                item = {
                    type: "Punctuator",
                    key: item,
                };
                break;
            default:
                item.type === undefined && (item.type = "Punctuator");
                break;
        }
        if (~block_list.indexOf(item.key)) {
            continue;
        }
        for (const part of item.key) {
            node = node[part] || (node[part] = {});
        }
        if (node[" END" /* END */] && !item.overload) {
            let next_item = node[" END" /* END */];
            let curr_item = item;
            if (typeof next_item === "function") {
                if (curr_item.filter) {
                    node[" END" /* END */] = function (tokenizer) {
                        return curr_item.filter(tokenizer) ? curr_item : next_item(tokenizer);
                    };
                }
                else {
                    node[" END" /* END */] = function (tokenizer) {
                        return next_item(tokenizer) || curr_item;
                    };
                }
                continue;
            }
            else if (curr_item.filter) {
                node[" END" /* END */] = function (tokenizer) {
                    return curr_item.filter(tokenizer) ? curr_item : next_item;
                };
                continue;
            }
            else {
                console.warn("conflict:", node, node[" END" /* END */], item);
            }
        }
        node[" END" /* END */] = item.filter ?
            function (tokenizer) { return item.filter(tokenizer) && item; } :
            item;
    }
    return root;
}
exports.createSearchTree = createSearchTree;
function _Scanner(use_escape_mode = false) {
    return function (tokenizer, start = tokenizer.index) {
        let error;
        let line_number = tokenizer.line_number;
        let line_start = tokenizer.line_start;
        let root = this.scan_tree;
        let nodes = [];
        let str = "";
        let char;
        let backslash_count = 0;
        let token;
        let self = this;
        if (use_escape_mode) {
            let has_escape;
            while (char = tokenizer.input[tokenizer.index++]) {
                has_escape = backslash_count % 2;
                if (char === "\\" /* ESCAPE */) {
                    backslash_count += 1;
                    if (has_escape) {
                        str += char;
                        token = _next("\\" /* ESCAPE */);
                        if (token) {
                            return token;
                        }
                    }
                }
                else {
                    str += char;
                    backslash_count = 0;
                    if (tokenizer.isLineTerminator(char.charCodeAt(0))) {
                        tokenizer.index -= 1;
                        token = _next(has_escape ? `${"\\" /* ESCAPE */}\n` : "\n");
                        if (token) {
                            return token;
                        }
                        tokenizer.index += 1;
                        tokenizer.line_number += 1;
                        tokenizer.line_start = tokenizer.index;
                    }
                    else {
                        token = _next(!has_escape ? char : "\\" /* ESCAPE */ + char);
                        if (token) {
                            return token;
                        }
                    }
                }
            }
        }
        else {
            while (char = tokenizer.input[tokenizer.index]) {
                str += char;
                backslash_count = 0;
                if (tokenizer.isLineTerminator(char.charCodeAt(0))) {
                    token = _next("\n");
                    if (token) {
                        return token;
                    }
                    tokenizer.index += 1;
                    tokenizer.line_number += 1;
                    tokenizer.line_start = tokenizer.index;
                }
                else {
                    tokenizer.index += 1;
                    token = _next(char);
                    if (token) {
                        return token;
                    }
                }
            }
        }
        if ((token = _next("" /* EOF */))) {
            return token;
        }
        else {
            let token = _get_token(tokenizer.index);
            tokenizer.err(token);
            return token;
        }
        function _next(key) {
            let index = 0, node, res;
            for (; index < nodes.length; index += 2) {
                node = nodes[index][key];
                if (node) {
                    if (res = _finally(node, nodes[index + 1])) {
                        if (res === " RESET" /* RESET */) {
                            nodes.length = 0;
                            return;
                        }
                        return res;
                    }
                    nodes[index] = node;
                }
                else {
                    nodes.splice(index, 2);
                    index -= 2;
                }
            }
            if (node = root[key]) {
                if (res = _finally(node, str.length - 1)) {
                    if (res == " RESET" /* RESET */) {
                        nodes.length = 0;
                        return;
                    }
                    return res;
                }
                nodes.push(node, str.length - 1);
            }
        }
        function _get_token(end_index) {
            tokenizer._scopes = self;
            tokenizer._volatility = str.slice(0, end_index);
            return tokenizer.createToken(self.type, [start, tokenizer.index], undefined, { line: line_number, column: start - line_start });
        }
        function _finally(node, end_index) {
            node[" ERR" /* ERROR */] && (error = node[" ERR" /* ERROR */]);
            let part = node[" ATT" /* ATTACH */] ? node[" ATT" /* ATTACH */](tokenizer, self) : node[" STR" /* STRING */];
            if (part !== undefined) {
                str = str.slice(0, end_index) + part;
            }
            switch (true) {
                case node[" END" /* END */] && true:
                    if (node[" END" /* END */] === true || node[" END" /* END */](tokenizer, self)) {
                        let token = _get_token(end_index);
                        if (error) {
                            token.error = error;
                            tokenizer.err(token);
                        }
                        return token;
                    }
                    break;
                case node[" NEXT" /* NEXT */] && true:
                    tokenizer._scopes = self;
                    tokenizer._volatility = str.slice(0, end_index);
                    return node[" NEXT" /* NEXT */](tokenizer, self);
            }
        }
    };
}
exports._Scanner = _Scanner;
/**
function createScanTree(data: Array<any>[]) {
    let root: Record<string, any> = {};
    for (let branch of data) {
        let node = root;
        for (let i = 0, limit = branch.length - 1, part: string; i < limit; i++) {
            part = branch[i];
            node = node[part] || (node[part] = {});
        }
        let actions = branch[branch.length - 1];
        for (let i = 0; i < actions.length; i += 2) {
            node[actions[i]] = actions[i + 1];
        }
    }
    return root;
}



 */ 


/***/ }),

/***/ "./js/Dison/js/lexical/index.ts":
/*!**************************************!*\
  !*** ./js/Dison/js/lexical/index.ts ***!
  \**************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.REGEXP_DESCRIPTOR = exports.TOKEN_TYPE_SET = exports.PUNCTUATORS = exports.TYPE_ENUMS = void 0;
const head_1 = __webpack_require__(/*! ./head */ "./js/Dison/js/lexical/head.ts");
let TOKEN_TYPE_SET = [
    [
        "Keyword",
        [
            "void",
            "delete",
            "new",
            "class", "extends",
            "function",
            "throw",
            "with",
            "yield",
            "in", "instanceof", "typeof",
            "this", "super",
            "var", "const",
            "break", "continue", "return",
            "if", "else",
            "switch", "case", "default",
            "try", "catch", "finally",
            "do", "while", "for",
            "await",
            "import", "export",
            "debugger",
            "enum" //用于错误检测
        ]
    ],
    ["Identifier", ["let", "async"]],
    ["Boolean", ["true", "false"]],
    ["Null", ["null"]]
];
exports.TOKEN_TYPE_SET = TOKEN_TYPE_SET;
let octal_escape = {
    //_state: MATCH_STATUS.ATTACH,
    [" ATT" /* ATTACH */](tokenizer, self) {
        let code = tokenizer.octalValue(tokenizer.input.charCodeAt(tokenizer.index - 1));
        let value = 0;
        code && (self.octal = true);
        let len = code <= 3 ? 2 : 1;
        while (true) {
            value = value * 8 + code;
            code = tokenizer.octalValue(tokenizer.input.charCodeAt(tokenizer.index));
            if (code < 0 || --len < 0) {
                break;
            }
            self.octal = true;
            tokenizer.index += 1;
        }
        return String.fromCharCode(value);
    }
};
let octal_escape_tree = {
    "\\0": octal_escape,
    "\\1": octal_escape,
    "\\2": octal_escape,
    "\\3": octal_escape,
    "\\4": octal_escape,
    "\\5": octal_escape,
    "\\6": octal_escape,
    "\\7": octal_escape,
};
let strbase_scan_tree = {
    ["\\" /* ESCAPE */ + "\n"]: { [" STR" /* STRING */]: "" },
    "\\n": { [" STR" /* STRING */]: "\n" },
    "\\r": { [" STR" /* STRING */]: "\r" },
    "\\t": { [" STR" /* STRING */]: "\t" },
    "\\b": { [" STR" /* STRING */]: "\b" },
    "\\f": { [" STR" /* STRING */]: "\f" },
    "\\v": { [" STR" /* STRING */]: "\v" },
    "\\u": {
        //_state: MATCH_STATUS.ATTACH,
        [" ATT" /* ATTACH */](tokenizer) {
            if (tokenizer.input[tokenizer.index] === "{") {
                tokenizer.index++;
                let [code] = tokenizer.scanHex();
                if (tokenizer.input[tokenizer.index] === "}") {
                    tokenizer.index++;
                    if (code <= 0x10ffff) {
                        return String.fromCharCode(code);
                    }
                }
            }
            else {
                let [code, len] = tokenizer.scanHex(4);
                if (len === 4) {
                    return String.fromCharCode(code);
                }
            }
            return false;
        }
    },
    "\\x": {
        //_state: MATCH_STATUS.ATTACH,
        [" ATT" /* ATTACH */](tokenizer) {
            let [code, len] = tokenizer.scanHex(2);
            if (len === 2) {
                return String.fromCharCode(code);
            }
            return false;
        }
    }
};
let not_allow_octal_escape = {
    //_state: MATCH_STATUS.ERROR,
    [" ERR" /* ERROR */]: "Octal escape sequences are not allowed in template strings"
};
//let template_curly_stack = [];
let template_base = {
    type: "Template",
    scan_tree: Object.assign({ ["" /* EOF */]: {
            //_state: MATCH_STATUS.END,
            [" ERR" /* ERROR */]: "Unexpected token",
            [" END" /* END */](tokenizer) {
                tokenizer.curly_stack.shift();
                return true;
            }
        }, "\\0": { [" STR" /* STRING */]: "\0" }, "\\1": not_allow_octal_escape, "\\2": not_allow_octal_escape, "\\3": not_allow_octal_escape, "\\4": not_allow_octal_escape, "\\5": not_allow_octal_escape, "\\6": not_allow_octal_escape, "\\7": not_allow_octal_escape, "`": {
            [" END" /* END */](tokenizer) {
                tokenizer.curly_stack.shift();
                return true;
            }
        }, "$": {
            "{": {
                [" END" /* END */]: true
            }
        } }, strbase_scan_tree),
    scanner: head_1._Scanner(true)
};
const PUNCTUATORS = [
    {
        key: `"`, type: "String",
        scan_tree: Object.assign(Object.assign({ '"': {
                [" END" /* END */]: true
            }, "\n": {
                //_state: MATCH_STATUS.ERROR
                [" ERR" /* ERROR */]: "Invalid or unexpected token"
            } }, strbase_scan_tree), octal_escape_tree),
        escape_scan: head_1._Scanner(true),
        octal: false,
        scanner(tokenizer, start) {
            this.octal = false;
            return this.escape_scan(tokenizer, start);
        }
    },
    {
        key: `'`, type: "String",
        scan_tree: Object.assign(Object.assign({ "'": {
                [" END" /* END */]: true
            }, "\n": {
                //_state: MATCH_STATUS.ERROR
                [" ERR" /* ERROR */]: "Invalid or unexpected token"
            } }, strbase_scan_tree), octal_escape_tree),
        escape_scan: head_1._Scanner(true),
        octal: false,
        scanner(tokenizer, start) {
            this.octal = false;
            return this.escape_scan(tokenizer, start);
        }
    },
    Object.assign(Object.assign({ key: "`" }, template_base), { escape_scan: head_1._Scanner(true), scanner(tokenizer, start) {
            tokenizer.curly_stack.unshift("`");
            return this.escape_scan(tokenizer, start);
        } }),
    Object.assign(Object.assign({ key: "}" }, template_base), { filter(tokenizer) {
            return tokenizer.curly_stack[0] === "`";
        } }),
    {
        key: '/*', bound: '*/', type: "Comments",
        scan_tree: {
            "*": {
                "/": {
                    //_state: MATCH_STATUS.END
                    [" END" /* END */]: true
                }
            },
            ["" /* EOF */]: {
                [" END" /* END */]: true,
                [" ERR" /* ERROR */]: "Unexpected token"
            }
        },
        scanner: head_1._Scanner(false)
    },
    {
        key: '//', bound: '\n', type: "Comments",
        scan_tree: {
            "\n": {
                [" END" /* END */]: true
            },
            ["" /* EOF */]: {
                [" END" /* END */]: true
            }
        },
        scanner: head_1._Scanner(false)
    },
    //["(", ")"], ["[", "]"], ["{", "}"],
    "(", ")", "[", "]", "{", "}",
    ';', '.', '?.',
    '++', '--', '~', '!',
    '**', '*', '/', '%',
    '+', '-',
    '<<', '>>', '>>>',
    '<', '>', '<=', '>=', '==', '!=', '===', '!==',
    '&',
    '^',
    '|',
    '&&',
    '||',
    '?', ":",
    '=', '+=', '-=', '*=', '/=', '%=', '**=', '<<=', '>>=', '>>>=', '&=', '|=', '^=',
    '...',
    ',',
    '=>'
];
exports.PUNCTUATORS = PUNCTUATORS;
const REGEXP_DESCRIPTOR = {
    key: '/', type: "RegularExpression",
    scan_tree: {
        '/': {
            [" END" /* END */](tokenizer, self) {
                return !self.class_marker;
            }
        },
        '[': {
            [" ATT" /* ATTACH */](tokenizer, self) {
                self.class_marker = true;
            }
        },
        ']': {
            [" ATT" /* ATTACH */](tokenizer, self) {
                self.class_marker = false;
            }
        },
        '\n': {
            [" ERR" /* ERROR */]: "Invalid or unexpected token"
        },
        '\\\n': {
            [" ERR" /* ERROR */]: "Invalid or unexpected token"
        },
        ["" /* EOF */]: {
            [" END" /* END */]: true,
            [" ERR" /* ERROR */]: "Invalid or unexpected token"
        }
    },
    overload: true,
    escape_scan: head_1._Scanner(true),
    class_marker: false,
    scanner(tokenizer, start) {
        this.class_marker = false;
        let token = this.escape_scan(tokenizer, start);
        if (token) {
            token.regex = {
                pattern: token.value.slice(1, token.value[token.value.length - 1] !== "/" ? undefined : -1),
                flags: ""
            };
            let start = tokenizer.index;
            let length = 0;
            do {
                tokenizer.index += length;
                length = tokenizer.inIdentifierPart();
            } while (length);
            if (start !== tokenizer.index) {
                token.regex.flags = tokenizer.input.slice(start, tokenizer.index);
                token.value += token.regex.flags;
                token.range[1] += tokenizer.index - start;
                token.loc.end.column += tokenizer.index - start;
            }
            return token;
        }
    }
};
exports.REGEXP_DESCRIPTOR = REGEXP_DESCRIPTOR;
//const IS_RADIX = NUMERIC_TYPE.BINARY | NUMERIC_TYPE.OCTAL | NUMERIC_TYPE.HEX;
const TYPE_ENUMS = {
    Identifier: "Identifier",
    Keyword: "Keyword",
    String: "String",
    Boolean: "Boolean",
    Numeric: "Numeric",
    Punctuator: "Punctuator",
    RegularExpression: "RegularExpression",
    Template: "Template",
    TemplateElement: "TemplateElement",
    Comments: "Comments",
    Null: "Null"
};
exports.TYPE_ENUMS = TYPE_ENUMS;


/***/ }),

/***/ "./js/Dison/js/parser.ts":
/*!*******************************!*\
  !*** ./js/Dison/js/parser.ts ***!
  \*******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
Object.defineProperty(exports, "__esModule", { value: true });
const tokenizer_1 = __webpack_require__(/*! ./tokenizer */ "./js/Dison/js/tokenizer.ts");
const head_1 = __webpack_require__(/*! ./syntax/head */ "./js/Dison/js/syntax/head.ts");
const { Script, Module } = head_1.NODES;
class default_1 extends tokenizer_1.default {
    constructor() {
        super();
        this.TYPE_ALIAS = head_1.TYPE_ALIAS;
        this.padding_token = {
            type: "" /* BOUNDARY */,
            value: "" /* BOUNDARY */
        };
        this.save_comments = false;
    }
    isPrimaryExprStart() {
        var _a;
        if (this.tokens.length) {
            let last_node = this.tokens[this.tokens.length - 1];
            return this.isStatementListItem(last_node)
                || last_node.type === this.TYPE_ENUMS.Keyword
                || last_node.type === this.TYPE_ENUMS.Punctuator
                    && !(/^\{\}|\[\]$/.test(last_node.value)
                        || last_node.value === "()"
                            && !/^if|while|for|with$/.test((_a = this.tokens[this.tokens.length - 2]) === null || _a === void 0 ? void 0 : _a.value));
            //!(/^\{\}|\(\)|\[\]$/.test(last_node.value));
        }
        else {
            return true;
        }
    }
    //token_hooks: Record<string, (token: Token, tokenizer?: Tokenizer) => Token> = token_hooks;
    err(...args) {
        debugger;
        this.error_logs.push.apply(this.error_logs, args);
    }
    parse(input) {
        return this.parseScript(input);
    }
    parseModule(input) {
        let tokens = this._parse(input, 13 /* isModule */, true, 12 /* strict */, true);
        let module = new Module(tokens);
        if (tokens.length) {
            head_1.attachLocation(module, tokens[0], tokens[tokens.length - 1]);
        }
        return module;
    }
    parseScript(input) {
        let tokens = this._parse(input);
        let script = new Script(tokens);
        if (tokens.length) {
            head_1.attachLocation(module, tokens[0], tokens[tokens.length - 1]);
        }
        return script;
    }
    parseExpression(context) {
        context.wrap(14 /* isExpression */, true);
        let res = this.parseNode(this.EXPRESSION_TREE, context, this.isExpression);
        context.unwrap();
        return res;
    }
    parseNode(match_tree, context, test) {
        let tokens = context.tokens;
        this.parseCustom(match_tree, context);
        let res;
        if (tokens.length) {
            let index = 0;
            if (test(tokens[0])) {
                index = 1;
                res = tokens[0];
            }
            if (tokens.length > index) {
                this.err(...tokens.slice(index));
            }
        }
        return res;
    }
    parseRangeAsNode(match_tree, context, left, lexcal_terminator, test) {
        let res = this.parseRange(match_tree, context, left, lexcal_terminator, test);
        if (!res.content) {
            this.err(res);
        }
        return res.content;
    }
    parseRangeAsExpression(context, left, lexcal_terminator) {
        context.wrap(14 /* isExpression */, true);
        let res = this.parseRangeAsNode(this.EXPRESSION_TREE, context, left, lexcal_terminator, this.isExpression);
        context.unwrap();
        return res;
    }
    parseRangeAsBlock(context, left, lexcal_terminator = head_1.is_right_braces) {
        let res = this.parseRange(this.SYNTAX_TREE, context, left, lexcal_terminator);
        res.type = "Block";
        let tokens = res.content;
        if (tokens.length) {
            if (!this.isStatementListItem(tokens[tokens.length - 1])) {
                this.err(tokens.pop());
            }
        }
        return res;
    }
    _parse(input, ...environments) {
        //this.logs = [];
        this.match_tree_stack = [];
        this.context_stack = [];
        this.init(input);
        let context = head_1._Context(this);
        environments.length && context.store(...environments);
        //this.parseBlock(context);
        let tokens = context.tokens;
        this.parseCustom(this.SYNTAX_TREE, context);
        if (tokens.length) {
            if (!this.isStatementListItem(tokens[tokens.length - 1])) {
                this.err(tokens.pop());
            }
        }
        if (this.error_logs.length) {
            console.warn("error:", this.error_logs);
        }
        //console.log("logs:", this.logs);
        return this.tokens;
    }
    parseCustom(root, context, begin = 0, test) {
        let point = context.store(6 /* begin */, begin);
        let cursor = begin - 1;
        let backflow_tape = new Array(begin);
        backflow_tape.push(cursor);
        let extreme;
        let state;
        this.context_stack.unshift(context);
        this.match_tree_stack.unshift(root);
        while (true) {
            if (cursor < begin || context.getToken(cursor)) {
                if (!(extreme
                    && (extreme[2 /* right */] < cursor
                        && backflow_tape.length <= 3 + extreme[2 /* right */]
                    //匹配边界断句
                    )
                    && ((state = this.finallize(context, extreme))
                        || (extreme = undefined)))) {
                    let longest = this.walk(root, context, cursor, backflow_tape, extreme === null || extreme === void 0 ? void 0 : extreme[2 /* right */]);
                    //longest && this.logs.push("walk", longest[MATCHED_RECORDS.left], longest[MATCHED_RECORDS.right], longest[MATCHED_RECORDS.matched][MATCHED.wrapper].name);
                    if (longest) {
                        let longest_precedence = longest[0 /* precedence */];
                        let extreme_precedence = extreme && extreme[0 /* precedence */];
                        if (( //如果该记录优先级为true，则立即处理
                        longest_precedence[0 /* VALUE */] !== true
                            || (extreme = longest, false)) && (!extreme_precedence
                            || !(extreme_precedence[0 /* VALUE */] > longest_precedence[0 /* VALUE */]
                                || extreme_precedence[1 /* RIGHT_ASSOCIATIVE */] === longest_precedence[0 /* VALUE */] //左结合
                            )) || !(state = this.finallize(context, extreme))) {
                            extreme = longest;
                            //cursor += 1;
                            //也可以单步步进，不过这样更效率一些也和当前收集器无冲突
                            cursor += longest[2 /* right */] - longest[1 /* left */] || 1;
                            continue;
                        }
                    }
                    else {
                        cursor += 1;
                        continue;
                    }
                }
            }
            else if (!(extreme
                && (state = this.finallize(context, extreme)))) {
                break;
            }
            if (extreme) {
                if (test
                    && extreme[1 /* left */] <= begin
                    && test(context.getToken(begin))) {
                    context.restore(point);
                    this.context_stack.shift();
                    this.match_tree_stack.shift();
                    return context.getToken(begin);
                }
                cursor = extreme[1 /* left */];
            }
            cursor >= begin && state !== -1 && (cursor = backflow_tape[cursor]);
            state = 0;
            extreme = undefined;
            backflow_tape.splice(cursor + 1, backflow_tape.length - (cursor + 1));
        }
        this.context_stack.shift();
        this.match_tree_stack.shift();
        context.restore(point);
    }
    parseRange(match_tree, context, left, lexcal_terminator, test) {
        let tokens = context.tokens;
        this.terminator_stack.unshift(lexcal_terminator);
        this.parseCustom(match_tree, context, left + 1);
        this.terminator_stack.shift();
        let before_token = tokens[left];
        let after_token = tokens[tokens.length - 1];
        let value = before_token.value;
        let end = tokens.length - 1;
        if (lexcal_terminator(after_token)) {
            value += after_token.value;
        }
        else {
            end += 1;
            this.err(before_token);
        }
        let content = null, next = left + 1;
        if (test) {
            if (test(tokens[next])) {
                content = tokens[next];
                next += 1;
            }
            if (next < end) {
                this.err(...this.tokens.splice(next, end - next));
            }
        }
        else {
            content = tokens.splice(next, end - next);
        }
        let res = {
            type: this.TYPE_ENUMS.Punctuator,
            value,
            content
        };
        head_1.attachLocation(res, before_token, after_token);
        tokens.splice(left, tokens.length - left, res);
        return res;
    }
    walk(root, context, start, backflow_tape, minimum) {
        let padding_token = this.padding_token;
        let TYPE_ALIAS = this.TYPE_ALIAS;
        let tokens = context.tokens;
        let begin = context[6 /* begin */];
        //let steps: Array<number> = [];
        return explore(root, start);
        function get_records(matched, end) {
            if (!matched[5 /* filter */]
                || matched[5 /* filter */](context, start, end)) {
                return [
                    matched[0 /* precedence */],
                    start,
                    end,
                    matched
                ];
            }
        }
        function explore(parent, index) {
            let res;
            let matched;
            if (parent[" WAL" /* WALKER */]) {
                parent[" WAL" /* WALKER */](context, index - 1);
            }
            if (parent[" TER" /* TERMINAL */]) {
                if (!(index - 1 <= minimum)) {
                    matched = parent[" END" /* END */];
                    if (matched && (res = get_records(matched, index - 1))) {
                        minimum = index - 1;
                    }
                }
                return res;
            }
            let token = index >= begin
                ? context.getToken(index) || (index <= tokens.length && padding_token)
                : padding_token;
            if (!token) {
                return;
            }
            let has_backflow = false;
            if (backflow_tape.length <= index + 1) {
                has_backflow = true;
                backflow_tape.push(start);
            }
            let matched_node;
            let alias = TYPE_ALIAS[token.type];
            let cursor = 0, length = 1, type;
            let longest;
            let node;
            let value_node, type_node;
            if (alias) {
                length = alias.length;
                type = alias[cursor];
            }
            else {
                type = token.type;
            }
            while (true) {
                if (node = parent[type]) {
                    res = undefined;
                    if (!((value_node = node[token.value])
                        && (res = explore(value_node, index + 1)))
                        && !((type_node = node[" TYPE" /* TYPE_ONLY */])
                            && (res = explore(type_node, index + 1)))
                        && !(index <= minimum)) {
                        if (matched = (matched_node = value_node) && matched_node[" END" /* END */]
                            || (matched_node = type_node) && matched_node[" END" /* END */]) {
                            if ((res = get_records(matched, index))) {
                                minimum = index;
                            }
                            else if (has_backflow && index > start) {
                                backflow_tape.splice(index + 1, backflow_tape.length - index - 1);
                            }
                        }
                    }
                    longest = res || longest;
                }
                if (++cursor >= length) {
                    return longest;
                }
                else {
                    type = alias[cursor];
                }
            }
        }
    }
    createNode(context) {
        let left = context[2 /* left */];
        let right = context[3 /* right */];
        let matched = context[9 /* matched */];
        let tokens = context.tokens;
        let begin = context[6 /* begin */];
        let node = new matched[2 /* wrapper */]();
        let length = tokens.length;
        let start = left, end = right < length ? right : length - 1;
        let offset = left, key, pipes, nth;
        let token, res;
        context[0 /* collected */] = node;
        function restore_volatility() {
            context[2 /* left */] = left;
            context[3 /* right */] = right;
            context[9 /* matched */] = matched;
            context[0 /* collected */] = node;
        }
        for (const prop of matched[1 /* props */]) {
            [key, nth, pipes] = prop;
            if (key instanceof head_1.Mark) {
                token = key.data(context, offset);
                restore_volatility();
                if (token === undefined) {
                    continue;
                }
                key = key.key;
            }
            else {
                token = offset >= begin && offset < length ? tokens[offset] : null;
                for (let i in pipes) {
                    res = pipes[i](context, token, offset);
                    res === undefined || (token = res);
                    restore_volatility();
                }
                if (key instanceof head_1.Cover) {
                    if (key.value === null) {
                        if (offset === start) {
                            offset < end && (start = offset + 1);
                        }
                        else if (offset > begin && offset - 1 < end) {
                            end = offset - 1;
                        }
                    }
                    else if (offset < length && end < offset) {
                        end = offset;
                    }
                    offset += 1;
                    continue;
                }
                else if (offset < length && end < offset) {
                    end = offset;
                }
                offset += 1;
            }
            if (nth <= 1) {
                node[key] = nth === 0 ? token : [token];
            }
            else {
                node[key].push(token);
            }
        }
        start >= begin || (start = begin);
        let start_token = tokens[start];
        let end_token = tokens[end];
        head_1.attachLocation(node, start_token, end_token);
        context[4 /* start */] = start;
        context[5 /* end */] = end;
        return node;
    }
    getToken(index) {
        return this.tokens.length > index ? this.tokens[index] : this.nextToken();
    }
    finallize(context, record) {
        let [, left, right, matched /*, steps*/] = record;
        let validator = matched[4 /* validator */];
        let collected;
        let start, end;
        context[2 /* left */] = left;
        context[3 /* right */] = right;
        context[9 /* matched */] = matched;
        let tokens = context.tokens;
        let handler = matched[3 /* handler */];
        //this.logs.push("finallize", left, right, matched[MATCHED.wrapper].name);
        if (!validator || (collected = validator(context)) === true) {
            collected = this.createNode(context);
            start = context[4 /* start */];
            end = context[5 /* end */];
            if (handler) {
                collected = handler(context);
            }
        }
        else if (collected) {
            start = context[4 /* start */];
            end = context[5 /* end */];
        }
        if (!collected) {
            return collected === undefined || collected === false
                ? 0
                : (collected === null ? 1 : -1);
        }
        //debugger;
        //this.logs.push("finallize", collected);
        let length = end - start + 1;
        if (collected instanceof Array) {
            tokens.splice(start, length, ...collected);
        }
        else {
            tokens.splice(start, length, collected);
        }
        return length;
    }
}
exports.default = default_1;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./js/Dison/js/syntax/declaration.ts":
/*!*******************************************!*\
  !*** ./js/Dison/js/syntax/declaration.ts ***!
  \*******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.get_variable_declarator = void 0;
const head_1 = __webpack_require__(/*! ./head */ "./js/Dison/js/syntax/head.ts");
//import { Expressions, UNIT_EXPRESSION_TREE } from './expression';
let Grouping = head_1.NODES.Grouping;
function get_variable_declarator(context, id, init, range, loc) {
    let parser = context[1 /* parser */];
    validate(id);
    /*
    if (id instanceof Grouping) {
        parser.err(id);
    }if (context[CONTEXT.strict]) {
        init || validateBinding(context, id);
    } if (id.name === "let") {
        let kind = context.tokens[context[CONTEXT.begin] - 1];
        if (kind.value === "let" || kind.value === "const") {
            parser.err(id);
        }
    }*/
    return {
        type: "VariableDeclarator",
        id, init, range, loc
    };
    function validate(id) {
        if (id instanceof Grouping) {
            parser.err(id);
            return;
        }
        switch (id.type) {
            case "Identifier":
                if (context[12 /* strict */]) {
                    head_1.validateBinding(context, id);
                }
                else if (id.name === "let") {
                    let kind = context.tokens[context[6 /* begin */] - 1];
                    if (kind.value === "let" || kind.value === "const") {
                        parser.err(id);
                    }
                }
                break;
            case "ObjectPattern":
                for (let property of id.properties) {
                    validate(property.value);
                }
                break;
            case "ArrayPattern":
                for (let element of id.elements) {
                    element && validate(element);
                }
                break;
            case "RestElement":
                validate(id.argument);
                break;
            case "AssignmentPattern":
                validate(id.left);
                break;
            default:
                parser.err(id);
                break;
        }
    }
}
exports.get_variable_declarator = get_variable_declarator;
let VariableDeclarators = {
    Success: {
        handler: [
            head_1.join_content,
            function (context) {
                let [collected] = context;
                head_1.validateLineTerminator(context);
                collected.content = head_1.join_content(context).content;
                return collected;
            }
        ],
        precedence: [true, 0],
        collector: [
            {
                success: head_1._Or("Success", "" /* BOUNDARY */),
                content: head_1._Or(head_1._Pattern("Identifier").pipe(function (context, identifier) {
                    return get_variable_declarator(context, identifier, null, identifier.range, identifier.loc);
                }), head_1._Pattern("AssignmentPattern").pipe(function (context, pattern) {
                    return get_variable_declarator(context, pattern.left, pattern.right, pattern.range, pattern.loc);
                })),
                _next: head_1._NonCollecting("Punctuator ,"),
            },
            [
                ["type", head_1._Mark("VariableDeclarators")],
                ["_next", head_1._Option("Punctuator ;")]
            ]
        ]
    }
};
let VARIABLE_DECLARATOR_TREE;
head_1.async_getter.get("UNIT_EXPRESSION_TREE", function (UNIT_EXPRESSION_TREE) {
    VARIABLE_DECLARATOR_TREE = head_1.createMatchTree(VariableDeclarators, UNIT_EXPRESSION_TREE);
});
function reinterpreat_expression_as_declaration(context, expr) {
    let [collected, parser] = context;
    expr.type = collected.type;
    if (expr.id) {
        if (head_1.isRestrictedWord(expr.id.name)) {
            parser.err(expr.id);
        }
    }
    else {
        parser.err(expr);
    }
    for (let key in expr) {
        collected[key] = expr[key];
    }
    return expr.id;
}
const Declarations = head_1.async_getter.Declarations = {
    "ClassDeclaration": {
        filter(context, left, right) {
            let tokens = context.tokens;
            return !(tokens[right] instanceof Grouping);
        },
        collector: [
            {
                _prev: head_1._NonCapturing(head_1.TOPLEVEL_ITEM_PATTERN),
                id: head_1._Pattern("ClassExpression").pipe(reinterpreat_expression_as_declaration)
            }
        ]
    },
    "FunctionDeclaration": {
        filter: "ClassDeclaration",
        collector: [
            {
                _prev: head_1._NonCapturing(head_1.TOPLEVEL_ITEM_PATTERN),
                id: head_1._Pattern("FunctionExpression").pipe(reinterpreat_expression_as_declaration)
            }
        ]
    },
    "VariableDeclaration": [
        {
            validator: [
                function (context) {
                    let [, parser, left] = context;
                    context.wrap(18 /* bindingElement */, true);
                    let res = parser.parseCustom(VARIABLE_DECLARATOR_TREE, context, left + 1, (node) => node.type === "VariableDeclarators");
                    context.unwrap();
                    return res && 0;
                },
                null
            ],
            collector: [
                {
                    //_: _NonCapturing(TOPLEVEL_ITEM_PATTERN),
                    kind: head_1._Or("Keyword var const let", "Identifier let").pipe(function (context, token) {
                        return token.name === undefined ? token.value : token.name;
                    }),
                    declarations: head_1._Or("Identifier", "Punctuator [ {")
                },
                [
                    ["declarations", head_1._Pattern("VariableDeclarators").pipe(function (context, token) {
                            return token.content;
                        })],
                ]
            ]
        }
    ]
};
head_1.async_getter.get("Declarations", function (declarations) {
    for (const type_name in declarations) {
        type_name && (head_1.TYPE_ALIAS[type_name] = [type_name, "[Declaration]"]);
    }
});
exports.default = Declarations;


/***/ }),

/***/ "./js/Dison/js/syntax/expression.ts":
/*!******************************************!*\
  !*** ./js/Dison/js/syntax/expression.ts ***!
  \******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parse_params = exports.parseObjectPattern = exports.parseArrayPattern = exports.Expressions = exports.PrimaryExpressions = exports.FUNCTION_BODY_PATTERN = exports.PARAMS_PATTERN = exports.ArrayElements = void 0;
const head_1 = __webpack_require__(/*! ./head */ "./js/Dison/js/syntax/head.ts");
const pattern_1 = __webpack_require__(/*! ./pattern */ "./js/Dison/js/syntax/pattern.ts");
Object.defineProperty(exports, "parseArrayPattern", { enumerable: true, get: function () { return pattern_1.parseArrayPattern; } });
Object.defineProperty(exports, "parseObjectPattern", { enumerable: true, get: function () { return pattern_1.parseObjectPattern; } });
const Grouping = head_1.NODES.Grouping;
init_token_hooks();
function walk_primary_expression(context, index) {
    context[1 /* parser */].parseRange(PRIMARY_EXPRESSION_TREE, context, index, head_1.is_right_parentheses);
}
const ARGUMENTS_PATTERN = head_1._Or(head_1._Punctuator("(").walk(walk_primary_expression), "Punctuator ()").pipe(function (context, token, index) {
    let parser = context[1 /* parser */];
    let store = context.store(14 /* isExpression */, true, 18 /* bindingElement */, false, 19 /* spreadElement */, true, 7 /* tokens */, token.content);
    let res = parser.parseNode(ARGUMENTS_TREE, context, function (node) { return node.type === "Success"; });
    context.restore(store);
    return res ? res.content : [];
});
const PARAMS_PATTERN = head_1._Or(head_1._Punctuator("(").walk(function (context, left) {
    let parser = context[1 /* parser */];
    let store = context.store(18 /* bindingElement */, true, 19 /* spreadElement */, true, 10 /* bindingSet */, []);
    parser.parseRange(PARAMS_TREE, context, left, head_1.is_right_parentheses, function (node) { return node.type === "Success"; }).type = "Params";
    context.restore(store);
}), head_1._Pattern("Params")).pipe(function (context, token, left) {
    let [collected, parser] = context;
    let kind = collected.kind;
    let params = token.content ? token.content.content : [];
    let params_count = kind === "get" ? 0 : kind === "set" ? 1 : false;
    if (params_count !== false && params.length !== params_count) {
        parser.err(...params.splice(params_count, params.length - params_count));
    }
    return params;
});
exports.PARAMS_PATTERN = PARAMS_PATTERN;
const BODY_PATTERN = head_1._Or(head_1._Punctuator("{").walk(function (context, left) {
    let generator = !!this.generator, async = !!this.async;
    let parser = context[1 /* parser */];
    let body_context = head_1._Context(parser);
    body_context[15 /* inFunctionBody */] = left + 1;
    body_context[12 /* strict */] = context[12 /* strict */];
    body_context[21 /* allowYield */] = generator;
    body_context[20 /* allowAwait */] = async;
    let node = parser.parseRangeAsBlock(body_context, left);
    /*parser.parseRange(
        parser.SYNTAX_TREE, body_context, left, is_right_braces
    )*/
    node.type = "Body";
    node.generator = generator;
    node.async = async;
    let block = new head_1.NODES.BlockStatement();
    block.body = node.content;
    head_1.attachLocation(block, node);
    node.content = block;
}, true), "Body");
const FUNCTION_BODY_PATTERN = head_1._Or(BODY_PATTERN).pipe(function (context, token) {
    return token.content;
});
exports.FUNCTION_BODY_PATTERN = FUNCTION_BODY_PATTERN;
const PrimaryExpressions = {
    "": [
        {
            collector: {
                type: head_1._Mark("Punctuator"),
                value: head_1._Mark("{}"),
                content: head_1._Punctuator("{").pipe(function (context, token, left) {
                    return context[1 /* parser */].parseRange(PROPERTIES_TREE, context, left, head_1.is_right_braces).content || [];
                })
            }
        },
        {
            collector: {
                type: head_1._Mark("Punctuator"),
                value: head_1._Mark("()"),
                content: head_1._Punctuator("(").walk(walk_primary_expression).pipe(function (context, token, index) {
                    return token.content;
                })
            }
        },
        {
            collector: {
                type: head_1._Mark("Punctuator"),
                value: head_1._Mark("[]"),
                content: head_1._Punctuator("[").pipe(function (context, node, index) {
                    return context[1 /* parser */].parseRange(PRIMARY_EXPRESSION_TREE, context, index, head_1.is_right_brackets).content;
                })
            }
        },
    ],
    "Identifier": [],
    "Literal": [ //已在 tokenizer => token_hooks 中处理
    ],
    "ThisExpression": {
        collector: {
            token: head_1._NonCollecting("Keyword this")
        }
    },
    "TemplateLiteral": {
        filter(context, left, right) {
            let value = context.getToken(right).value;
            return value[0] === "`";
        },
        collector: [
            {
                _: head_1._NonCapturing(head_1._Option("[Expression]")),
                expressions: head_1._Mark(() => []),
                quasis: head_1._Pattern("Template").pipe(function (context, token, index) {
                    let [collected, parser] = context;
                    let value;
                    let expressions = collected.expressions;
                    let quasis = [];
                    let tail = false;
                    let end;
                    while (true) {
                        token = context.getToken(index);
                        value = token.value;
                        token.value = "";
                        if (value[value.length - 1] === "`") {
                            end = -1;
                            tail = true;
                        }
                        else {
                            end = -2;
                            tail = false;
                        }
                        quasis.push({
                            type: "TemplateElement",
                            value: {
                                raw: value.slice(1, end),
                                cooked: parser._volatility
                            },
                            tail
                        });
                        if (tail) {
                            break;
                        }
                        expressions.push(parser.parseRangeAsExpression(context, index, function (token) {
                            return token.type === parser.TYPE_ENUMS.Template
                                && token.value[0] === "}";
                        }));
                    }
                    return quasis;
                }),
            }
        ]
    },
    "FunctionExpression": [
        {
            collector: [
                {
                    async: head_1._Or(head_1._Series(head_1._Mark(true), head_1._NonCollecting("Keyword async")), head_1._Mark(false)),
                    __: head_1._NonCollecting("Keyword function"),
                    generator: head_1._Or(head_1._Series(head_1._Mark(true), head_1._NonCollecting("Punctuator *")), head_1._Mark(false)),
                    id: head_1._Or(head_1.IDENTIFIER_OR_THROW_STRICT_RESERVED_WORDS_PATTERN, head_1._Mark(null)),
                    params: PARAMS_PATTERN,
                    body: FUNCTION_BODY_PATTERN,
                    expression: head_1._Mark(false)
                }
            ]
        },
        {
            validator(context) {
                let [, parser, left] = context;
                context[4 /* start */] = context[5 /* end */] = left;
                return head_1.reinterpretIdentifierAsKeyword(context.getToken(left));
                //return parser.parseKeyword(context.getToken(left));
            },
            filter: [
                function () {
                    return false;
                },
                head_1.isAligned
            ],
            collector: [
                { _: head_1._Series("Identifier async", "Identifier") },
                {
                    async: "Identifier async",
                    _next: head_1._NonCapturing("Keyword function"),
                },
                {
                    async: "Identifier async",
                    params: head_1._NonCapturing(head_1._Punctuator("(").walk(walk_primary_expression), "Punctuator ()", "Identifier"),
                    token: head_1._NonCapturing("Punctuator =>"),
                },
            ]
        }
    ],
    "ArrowFunctionExpression": {
        handler: [
            null,
            function (context) {
                let [collected, parser, left, right] = context;
                let token = context.getToken(right);
                token.value = "_=>";
                let body_context = head_1._Context(parser);
                body_context[12 /* strict */] = context[12 /* strict */];
                body_context[20 /* allowAwait */] = collected.async;
                if (parser.parseCustom(parser.EXPRESSION_TREE, body_context, left, (node) => true)) {
                    return null;
                }
            },
            null
        ],
        precedence: [3, true, new Number(3)],
        collector: [
            {
                async: head_1._Or(head_1._Series(head_1._Mark(true), head_1._NonCollecting("Keyword async")), head_1._Mark(false)),
                generator: head_1._Mark(false),
                id: head_1._Mark(null),
                params: head_1._Or(head_1._Punctuator("()").pipe(function (context, token) {
                    context.wrap(7 /* tokens */, token.content);
                    let res = parse_params(context, token.content);
                    context.unwrap();
                    return res;
                }), head_1._Pattern("Identifier").pipe(function (context, token) {
                    head_1.validateAssignment(context, token);
                    return [token];
                })),
                token: head_1._NonCollecting("Punctuator =>"),
                body: FUNCTION_BODY_PATTERN,
                expression: head_1._Mark(false)
            },
            ["body", head_1._Mark()],
            [
                //_=>作用为隔断匹配，使后续的表达式使用当前方法声明的环境
                ["token", head_1._NonCollecting("Punctuator _=>")],
                ["body", "[Expression]"],
                ["expression", head_1._Mark(true)]
            ]
        ]
    },
    "ClassExpression": {
        collector: [
            {
                _: head_1._NonCollecting("Keyword class"),
                id: head_1._Or(head_1.IDENTIFIER_OR_VALIDATE_STRICT_RESERVED_WORDS_PATTERN, head_1._Mark(null)),
                superClass: head_1._Or(head_1._Series(head_1._NonCollecting("Keyword extends"), head_1.IDENTIFIER_OR_VALIDATE_STRICT_RESERVED_WORDS_PATTERN), head_1._Mark(null)),
                body: head_1._Punctuator("{").pipe(function (context, token, left) {
                    var _a;
                    let parser = context[1 /* parser */];
                    let res = parser.parseRange(METHOD_DEFINITIONS_TREE, context, left, head_1.is_right_braces, function (node) { return node.type === "Success"; });
                    return {
                        type: "ClassBody",
                        body: ((_a = res.content) === null || _a === void 0 ? void 0 : _a.content) || [],
                        range: res.range,
                        loc: res.loc
                    };
                })
            }
        ]
    },
    "Super": {
        validator(context) {
            let [, parser, left, right] = context;
            if (!context[15 /* inFunctionBody */] || right === left) {
                parser.err(context.getToken(left));
            }
            return true;
        },
        collector: {
            token: head_1._NonCollecting("Keyword super"),
            _next: head_1._NonCapturing("Punctuator ( . [")
        }
    },
};
exports.PrimaryExpressions = PrimaryExpressions;
const Expressions = head_1.async_getter.Expressions = Object.assign(Object.assign({}, PrimaryExpressions), { "": PrimaryExpressions[""].concat({
        validator(context) {
            let parser = context[1 /* parser */];
            let left = context[2 /* left */];
            let token = context.getToken(left);
            let store = context.store(10 /* bindingSet */, null, 18 /* bindingElement */, false, 7 /* tokens */, token.content);
            let grouping = new Grouping(parser.parseExpression(context), token);
            context.restore(store);
            context[4 /* start */] = context[5 /* end */] = left;
            return grouping;
        },
        collector: {
            token: "Punctuator ()"
        }
    }), "ArrayExpression": {
        precedence: 20,
        collector: {
            elements: head_1._Punctuator("[]").pipe(function (context, node, index) {
                let store = context.store(19 /* spreadElement */, true, 18 /* bindingElement */, false);
                let res = head_1.parse_and_extract(ARRAY_ELEMENTS_TREE, context, node);
                context.restore(store);
                return res;
            }),
        }
    }, "ObjectExpression": {
        precedence: 20,
        collector: {
            properties: head_1._Punctuator("{}").pipe(function (context, node, index) {
                return head_1.parse_and_extract(OBJECT_PROPERTIES_TREE, context, node);
                //return node.content || [];
            }),
        }
    }, "TaggedTemplateExpression": {
        collector: [
            {
                tag: head_1.EXPRESSION_OR_THROW_STRICT_RESERVED_WORDS_PATTERN,
                quasi: "TemplateLiteral"
            }
        ]
    }, "MemberExpression": [
        {
            precedence: 20,
            collector: {
                object: head_1.EXPRESSION_OR_THROW_STRICT_RESERVED_WORDS_PATTERN,
                property: head_1._Series(head_1._NonCollecting("Punctuator ."), head_1._Or("Identifier", head_1._Pattern("Keyword").pipe(function (context, token) {
                    return head_1.reinterpretKeywordAsIdentifier(token);
                    //return context[CONTEXT.parser].parseIdentifier(token);
                }))),
                computed: head_1._Mark(false)
            }
        },
        {
            filter: "CallExpression",
            precedence: 20,
            collector: {
                object: head_1.EXPRESSION_OR_VALIDATE_STRICT_RESERVED_WORDS_PATTERN,
                property: head_1._Or(head_1._Punctuator("[").pipe(function (context, token, left) {
                    let store = context.store(18 /* bindingElement */, false);
                    let res = context[1 /* parser */].parseRangeAsExpression(context, left, head_1.is_right_brackets);
                    context.restore(store);
                    return res;
                }), head_1._Punctuator("[]").pipe(function (context, token, left) {
                    let store = context.store(7 /* tokens */, token.content, 18 /* bindingElement */, false);
                    let res = context[1 /* parser */].parseExpression(context);
                    context.restore(store);
                    return res;
                })),
                computed: head_1._Mark(true)
            }
        }
    ], "MetaProperty": {
        handler([collected]) {
            collected.meta.type = "Identifier";
            return collected;
        },
        collector: [
            {
                meta: "Keyword import",
                _: head_1._NonCollecting("Punctuator ."),
                property: "Identifier meta"
            },
            {
                meta: "Keyword new",
                _: head_1._NonCollecting("Punctuator ."),
                property: "Identifier target"
            }
        ]
    }, "NewExpression": {
        precedence: new Number(20) /*_Precedence(20, PRECEDENCE_FEATURES.RIGHT_TERMINAL)*/,
        collector: [
            {
                token: head_1._NonCollecting("Keyword new"),
                callee: head_1._Or(head_1.EXPRESSION_OR_THROW_STRICT_RESERVED_WORDS_PATTERN, head_1._Pattern("ArrowFunctionExpression").pipe(function (context, token) {
                    context[1 /* parser */].err(token);
                })),
                arguments: head_1._Or(head_1._Mark(() => []), ARGUMENTS_PATTERN)
            }
        ]
    }, "CallExpression": {
        precedence: 20 /* _Precedence(20, PRECEDENCE_FEATURES.RIGHT_TERMINAL)*/,
        filter(context, left) {
            let tokens = context.tokens;
            let first_token = tokens[left], second_token = tokens[left + 1];
            if (second_token === context[8 /* rightAssociativeNode */]) {
                return false;
            }
            let first_token_type = first_token.type;
            if (first_token instanceof Grouping
                || first_token_type !== "ArrowFunctionExpression") {
                return true;
            }
        },
        collector: {
            callee: head_1.EXPRESSION_OR_THROW_STRICT_RESERVED_WORDS_PATTERN,
            arguments: ARGUMENTS_PATTERN
        }
    }, "UpdateExpression": [
        {
            handler(context) {
                let [collected] = context;
                collected.operator = collected.operator.value;
                return collected;
            },
            precedence: 17,
            collector: {
                operator: "Punctuator ++ --",
                argument: head_1._Or("MemberExpression", head_1.IDENTIFIER_OR_THROW_STRICT_RESERVED_WORDS_PATTERN),
                prefix: head_1._Mark(true),
            }
        },
        {
            validator(context) {
                let collected = context[1 /* parser */].createNode(context);
                collected.operator = collected.operator.value;
                return collected;
            },
            filter(context, left, right) {
                return head_1.isAligned(context, left, left + 1);
            },
            precedence: 18,
            collector: {
                argument: head_1._Or("MemberExpression", head_1.IDENTIFIER_OR_THROW_STRICT_RESERVED_WORDS_PATTERN),
                operator: "Punctuator ++ --",
                prefix: head_1._Mark(false),
                _: head_1._Option(head_1._NonCapturing(head_1._Punctuator("[", "(").pipe(function (context, token) {
                    context[8 /* rightAssociativeNode */] = token;
                }), head_1._Punctuator(".").pipe(function (context, token) {
                    context[1 /* parser */].err(token);
                })))
            }
        }
    ], "AwaitExpression": [
        {
            precedence: 17,
            filter(context) {
                return context[20 /* allowAwait */];
            },
            collector: {
                token: head_1._NonCollecting("Keyword await"),
                argument: head_1.EXPRESSION_OR_THROW_STRICT_RESERVED_WORDS_PATTERN
            }
        },
        {
            handler([{ token }]) {
                return head_1.reinterpretKeywordAsIdentifier(token);
                //return parser.parseIdentifier(collected.token);
            },
            filter(context) {
                return !context[20 /* allowAwait */];
            },
            collector: {
                token: "Keyword await",
            }
        },
    ], "UnaryExpression": {
        handler(context) {
            let [collected] = context;
            collected.operator = collected.operator.value;
            return collected;
        },
        precedence: 17,
        collector: [
            {
                operator: head_1._Or("Punctuator ~ ! + -", "Keyword delete void typeof"),
                argument: head_1.EXPRESSION_OR_THROW_STRICT_RESERVED_WORDS_PATTERN,
                prefix: head_1._Mark(true)
            }
        ]
    }, "BinaryExpression": {
        handler(context) {
            let [collected] = context;
            collected.operator = collected.operator.value;
            return collected;
        },
        validator(context) {
            return context[3 /* right */] - context[2 /* left */] >= 2;
        },
        precedence: [16, 15, 14, 13, 12, 11, 10, 9, 8, 7],
        collector: [
            {
                left: head_1.EXPRESSION_OR_THROW_STRICT_RESERVED_WORDS_PATTERN,
                operator: `Punctuator **`,
                right: head_1._Option(head_1.EXPRESSION_OR_VALIDATE_STRICT_RESERVED_WORDS_PATTERN)
            },
            ["operator", `Punctuator * / %`],
            ["operator", `Punctuator + -`],
            ["operator", `Punctuator << >> >>>`],
            ["operator", head_1._Or(`Punctuator < <= > >=`, `Keyword in instanceof`)],
            ["operator", `Punctuator == != === !==`],
            ["operator", `Punctuator &`],
            ["operator", `Punctuator ^`],
            ["operator", `Punctuator |`],
            ["operator", `Punctuator ??`]
        ]
    }, "LogicalExpression": {
        validator(context) {
            if (context[3 /* right */] - context[2 /* left */] === 2) {
                let collected = context[1 /* parser */].createNode(context);
                collected.operator = collected.operator.value;
                return collected;
            }
        },
        precedence: [6, 5],
        collector: [
            {
                left: head_1.EXPRESSION_OR_THROW_STRICT_RESERVED_WORDS_PATTERN,
                operator: "Punctuator &&",
                right: head_1._Option(head_1.EXPRESSION_OR_THROW_STRICT_RESERVED_WORDS_PATTERN)
            },
            ["operator", "Punctuator ||"]
        ]
    }, "ConditionalExpression": [
        {
            validator(context) {
                let [, parser, left, right] = context;
                if (right - left >= 4) {
                    return true;
                }
                if (!context[14 /* isExpression */] || context[18 /* bindingElement */]) {
                    let store = context.store(14 /* isExpression */, true, 18 /* bindingElement */, null);
                    parser.parseCustom(parser.EXPRESSION_TREE, context, left, (node) => node.type === "ConditionalExpression");
                    context.restore(store);
                    return null;
                }
            },
            precedence: new Number(3),
            collector: [
                {
                    test: head_1.EXPRESSION_OR_THROW_STRICT_RESERVED_WORDS_PATTERN,
                    token: head_1._NonCollecting("Punctuator ?")
                },
                ["consequent", head_1.EXPRESSION_OR_VALIDATE_STRICT_RESERVED_WORDS_PATTERN],
                ["_", head_1._NonCollecting("Punctuator :")],
                ["alternate", head_1.EXPRESSION_OR_VALIDATE_STRICT_RESERVED_WORDS_PATTERN]
            ]
        },
    ], "YieldExpression": [
        {
            /*filter(context: Context) {
                return context[CONTEXT.allowYield];
            },*/
            precedence: 2,
            collector: [
                {
                    token: head_1._NonCollecting("Keyword yield"),
                    _: head_1._NonCollecting("Punctuator *"),
                    argument: head_1.EXPRESSION_OR_THROW_STRICT_RESERVED_WORDS_PATTERN,
                    delegate: head_1._Mark(true)
                },
                {
                    token: head_1._NonCollecting("Keyword yield"),
                    argument: head_1.EXPRESSION_OR_THROW_STRICT_RESERVED_WORDS_PATTERN,
                    delegate: head_1._Mark(false)
                }
            ]
        },
    ], "AssignmentExpression": {
        validator: "LogicalExpression",
        precedence: new Number(3),
        collector: {
            left: head_1._Or(head_1._Or("[Expression]").pipe(function (context, expr) {
                context[1 /* parser */].err(expr);
            }), "AssignmentExpression", "MemberExpression", "AssignmentPattern", "ArrayPattern", "ObjectPattern", head_1.IDENTIFIER_OR_THROW_STRICT_RESERVED_WORDS_PATTERN),
            operator: head_1.ASSIGNMENT_PUNCTUATORS_PATTERN,
            right: head_1._Option("[Expression]") //占位避免错误断句
        }
    }, "SequenceExpression": {
        handler(context) {
            let [collected] = context;
            let expressions = collected.expressions;
            if (expressions[0] instanceof head_1.NODES.SequenceExpression) {
                expressions[0].expressions.push(expressions[1]);
                collected.expressions = expressions[0].expressions;
            }
            return collected;
        },
        validator(context) {
            let [, , left, right] = context;
            if (right - left === 2) {
                return true;
            }
        },
        precedence: 1,
        collector: {
            expressions: head_1._Series(head_1.EXPRESSION_OR_THROW_STRICT_RESERVED_WORDS_PATTERN, head_1._NonCollecting("Punctuator ,"), head_1._Option(head_1.EXPRESSION_OR_THROW_STRICT_RESERVED_WORDS_PATTERN))
        }
    } });
exports.Expressions = Expressions;
const COMPUTED_PROPERTY_NAME_PATTERN = head_1._Punctuator("[]").pipe(function (context, token) {
    let [collected, parser] = context;
    collected.computed = true;
    context.wrap(7 /* tokens */, token.content);
    let res = parser.parseExpression(context);
    context.unwrap();
    return res;
});
const LITERAL_PROPERTY_NAME_PATTERN = head_1._Or("Identifier", "Keyword", "Literal").pipe(function (context, key) {
    let [, parser] = context;
    if (key instanceof Grouping) {
        parser.err(key);
    }
    else {
        switch (key.type) {
            case "Keyword":
                return head_1.reinterpretKeywordAsIdentifier(key);
            //return parser.parseIdentifier(key);
            case "Literal":
                if (key.regex) {
                    parser.err(key);
                }
                break;
        }
    }
});
const PROPERTY_NAME_PATTERN = head_1._Or(COMPUTED_PROPERTY_NAME_PATTERN, LITERAL_PROPERTY_NAME_PATTERN);
const MethodDefinitions = Object.assign(Object.assign({}, head_1._SuccessCollector(head_1._Pattern("MethodDefinition"))), { "": {
        validator(context) {
            context[4 /* start */] = context[5 /* end */] = context[3 /* right */];
            return [];
        },
        collector: {
            _: head_1._NonCapturing("" /* BOUNDARY */, "Success"),
            __: "Punctuator ;"
        }
    }, MethodDefinition: {
        handler(context) {
            let [collected] = context;
            let { value } = collected;
            collected.kind = value.kind;
            delete value.kind;
            collected.computed = value.computed;
            delete value.computed;
            collected.key = value.key;
            delete value.key;
            return collected;
        },
        collector: [
            {
                _prev: head_1._NonCapturing("" /* BOUNDARY */, "Success"),
                key: head_1._Mark(""),
                static: head_1._Mark(true),
                computed: head_1._Mark(false),
                _static: head_1._NonCollecting("Identifier static"),
                value: "FunctionExpression",
                kind: head_1._Mark(""),
            },
            [
                ["static", head_1._Mark(false)],
                ["_static", head_1._Mark()]
            ]
        ]
    }, FunctionExpression: {
        collector: [
            {
                _prev: head_1._NonCapturing("" /* BOUNDARY */, "Success"),
                static: head_1._Option(head_1._NonCapturing("Identifier static")),
                async: head_1._Or(head_1._Series(head_1._Mark(true), head_1._NonCollecting("Identifier async")), head_1._Mark(false)),
                generator: head_1._Or(head_1._Series(head_1._Mark(true), head_1._NonCollecting("Punctuator *")), head_1._Mark(false)),
                kind: head_1._Mark("method"),
                computed: head_1._Mark(false),
                key: PROPERTY_NAME_PATTERN,
                id: head_1._Mark(null),
                params: PARAMS_PATTERN,
                expression: head_1._Mark(false),
                body: FUNCTION_BODY_PATTERN
            },
            [
                ["generator", head_1._Mark(false)],
                [
                    "kind",
                    head_1._Or("Identifier get set").pipe(function (context, token, left) {
                        return token.value;
                    })
                ]
            ]
        ]
    } });
const Arguments = {
    "Success": {
        handler: head_1.join_content,
        //precedence: 0,
        collector: {
            success: head_1._Or(head_1._NonCollecting("" /* BOUNDARY */), "Success"),
            content: head_1._Or("SpreadElement", head_1.EXPRESSION_OR_THROW_STRICT_RESERVED_WORDS_PATTERN),
            _: head_1._Or(head_1._NonCollecting("Punctuator ,"), "" /* BOUNDARY */, head_1._NonCapturing("Punctuator )")),
        }
    }
};
function validateParamDeclarator(context, token) {
    let parser = context[1 /* parser */];
    validate(token);
    function validate(id) {
        if (id instanceof Grouping) {
            parser.err(id);
            return;
        }
        switch (id.type) {
            case "Identifier":
                head_1.validateBinding(context, id);
                break;
            case "ObjectPattern":
                for (let property of id.properties) {
                    validate(property.value);
                }
                break;
            case "ArrayPattern":
                for (let element of id.elements) {
                    element && validate(element);
                }
                break;
            case "RestElement":
                validate(id.argument);
                break;
            case "AssignmentPattern":
                validate(id.left);
                break;
            default:
                parser.err(id);
                break;
        }
    }
}
const Params = {
    "Success": {
        handler(context) {
            let [collected, parser] = context;
            if (collected.content instanceof Grouping) {
                parser.err(collected.content);
            }
            return head_1.join_content(context);
        },
        collector: [
            {
                success: head_1._Or(head_1._NonCollecting("" /* BOUNDARY */), "Success"),
                content: "AssignmentPattern",
                _: head_1._Or(head_1._NonCollecting("Punctuator ,", "" /* BOUNDARY */), head_1._NonCapturing("Punctuator )")),
            },
            [
                "content",
                head_1._Or("Identifier").pipe(function (context, token) {
                    head_1.validateBinding(context, token);
                })
            ],
            ["content", head_1._Or("ArrayPattern", "ObjectPattern").pipe(validateParamDeclarator)],
            [
                ["content", head_1._Or("RestElement").pipe(validateParamDeclarator)],
                ["_", head_1._Or(head_1._NonCollecting("" /* BOUNDARY */), head_1._NonCapturing("Punctuator )"))]
            ]
        ]
    }
};
const ArrayElements = {
    "Success": {
        handler: head_1.join_content,
        precedence: 0,
        collector: [
            {
                success: head_1._Or(head_1._NonCollecting("" /* BOUNDARY */), "Success"),
                content: head_1._Or("SpreadElement", head_1.EXPRESSION_OR_VALIDATE_STRICT_RESERVED_WORDS_PATTERN),
                _: head_1._NonCollecting("Punctuator ,", "" /* BOUNDARY */),
            },
            [
                ["content", head_1._Mark(null)],
                ["_", head_1._NonCollecting("Punctuator ,")]
            ]
        ]
    }
};
exports.ArrayElements = ArrayElements;
const Properties = {
    "Property": {
        handler(context) {
            let [collected, parser, left, right] = context;
            let { value: [params, body] } = collected;
            let expr = new head_1.NODES.FunctionExpression();
            expr.id = null;
            expr.params = params;
            expr.body = body.content;
            expr.generator = body.generator;
            expr.expression = false;
            expr.async = body.async;
            head_1.attachLocation(expr, collected, context.getToken(right - 1));
            collected.value = expr;
            collected.type = "ObjectProperty";
            return collected;
        },
        collector: [
            {
                _prev: head_1._NonCapturing("" /* BOUNDARY */, "Punctuator ,", "ObjectProperty"),
                async: head_1._Option(head_1._NonCollecting("Identifier async")),
                generator: head_1._Option(head_1._NonCollecting("Punctuator *")),
                kind: head_1._Mark("init"),
                computed: head_1._Mark(false),
                key: PROPERTY_NAME_PATTERN,
                value: head_1._Series(PARAMS_PATTERN, BODY_PATTERN),
                _next: head_1._Or(head_1._NonCollecting("" /* BOUNDARY */, "Punctuator ,"), head_1._NonCapturing("Punctuator }")),
                //_NonCapturing(MATCH_MARKS.BOUNDARY, "Punctuator ,", "Punctuator }"),
                method: head_1._Mark(true),
                shorthand: head_1._Mark(false)
            },
            [
                ["async", head_1._Mark()],
                ["generator", head_1._Mark()],
                [
                    "kind", head_1._Or(head_1._Series(head_1._NonCollecting("Identifier get"), head_1._Mark("get")), head_1._Series(head_1._NonCollecting("Identifier set"), head_1._Mark("set")))
                ],
                ["method", head_1._Mark(false)]
            ]
        ]
    }
};
const ObjectProperties = Object.assign(Object.assign({}, head_1._SuccessCollector(head_1._Or("Property", head_1._Or("ObjectProperty").pipe(function (context, token) {
    token.type = "Property";
})))), { "Property": {
        collector: [
            {
                _prev: head_1._NonCapturing("" /* BOUNDARY */, "Success"),
                key: PROPERTY_NAME_PATTERN,
                value: head_1._Series(head_1._NonCollecting("Punctuator :"), head_1.EXPRESSION_OR_VALIDATE_STRICT_RESERVED_WORDS_PATTERN),
                _next: head_1._Or(head_1._NonCollecting("" /* BOUNDARY */, "Punctuator ,"), head_1._NonCapturing("Punctuator }")),
                kind: head_1._Mark("init"),
                computed: head_1._Mark(false),
                method: head_1._Mark(false),
                shorthand: head_1._Mark(false),
            },
            [
                ["key", "Identifier"],
                ["value", head_1._Mark(function (context) {
                        return context[0 /* collected */].key;
                    })],
                ["shorthand", head_1._Mark(true)]
            ]
        ]
    } });
/*
let PRIMARY_EXPRESSION_TREE = createMatchTree(
    PrimaryExpressions
)
let METHOD_DEFINITIONS_TREE = createMatchTree(
    MethodDefinitions, PRIMARY_EXPRESSION_TREE
);
let PROPERTIES_TREE = createMatchTree(
    Properties,
    PRIMARY_EXPRESSION_TREE
);*/
let PRIMARY_EXPRESSION_TREE, METHOD_DEFINITIONS_TREE, PROPERTIES_TREE, UNIT_EXPRESSION_TREE, ARRAY_ELEMENTS_TREE, OBJECT_PROPERTIES_TREE, PARAMS_TREE, ARGUMENTS_TREE, EXPRESSION_TREE;
head_1.async_getter.get("Patterns", function (Patterns) {
    PRIMARY_EXPRESSION_TREE = head_1.createMatchTree(PrimaryExpressions);
    METHOD_DEFINITIONS_TREE = head_1.createMatchTree(MethodDefinitions, PRIMARY_EXPRESSION_TREE);
    PROPERTIES_TREE = head_1.createMatchTree(Properties, PRIMARY_EXPRESSION_TREE);
    UNIT_EXPRESSION_TREE = head_1.createMatchTree([Expressions, Patterns], undefined, ["SequenceExpression"]);
    ARRAY_ELEMENTS_TREE = head_1.createMatchTree(ArrayElements, UNIT_EXPRESSION_TREE);
    OBJECT_PROPERTIES_TREE = head_1.createMatchTree(ObjectProperties, UNIT_EXPRESSION_TREE);
    PARAMS_TREE = head_1.createMatchTree(Params, UNIT_EXPRESSION_TREE);
    ARGUMENTS_TREE = head_1.createMatchTree(Arguments, UNIT_EXPRESSION_TREE);
    EXPRESSION_TREE = head_1.createMatchTree({ SequenceExpression: Expressions.SequenceExpression }, UNIT_EXPRESSION_TREE);
    head_1.async_getter.EXPRESSION_TREE = EXPRESSION_TREE;
    head_1.async_getter.UNIT_EXPRESSION_TREE = UNIT_EXPRESSION_TREE;
});
head_1.async_getter.get("Expressions", function (expressions) {
    for (const type_name in expressions) {
        if (type_name) {
            head_1.TYPE_ALIAS[type_name] = [type_name, "[Expression]"];
        }
    }
});
exports.default = Expressions;
function parse_params(context, tokens) {
    if (tokens.length) {
        let parser = context[1 /* parser */];
        let restore = context.store(7 /* tokens */, tokens, 18 /* bindingElement */, true);
        context[12 /* strict */] && context.wrap(10 /* bindingSet */, []);
        parser.parseCustom(PARAMS_TREE, context);
        context.restore(restore);
        return head_1.extract_success(parser, tokens);
    }
    return [];
}
exports.parse_params = parse_params;
function init_token_hooks() {
    function getLiteral(parse_value, token, tokenizer) {
        return {
            type: "Literal",
            value: parse_value(token, tokenizer),
            raw: token.value,
            range: token.range,
            loc: token.loc
        };
    }
    let getStringLiteral = getLiteral.bind(null, (token, tokenizer) => tokenizer._volatility);
    let getRegularLiteral = getLiteral.bind(null, (token, tokenizer) => {
        let regex = token.regex;
        try {
            return new RegExp(regex.pattern, regex.flags);
        }
        catch (e) {
            return null;
        }
    });
    head_1.token_hooks.Keyword = function (token, parser) {
        let context = parser.context_stack[0];
        if (!context[21 /* allowYield */] && token.value === "yield") {
            return head_1.reinterpretKeywordAsIdentifier(token);
        }
        return token;
    };
    head_1.token_hooks.Identifier = head_1.reinterpretKeywordAsIdentifier;
    head_1.token_hooks.Numeric = getLiteral.bind(null, (token) => Number(token.value));
    head_1.token_hooks.Boolean = getLiteral.bind(null, (token) => token.value === "true");
    head_1.token_hooks.String = function (token, parser) {
        token = getStringLiteral(token, parser);
        if (parser._scopes.octal && parser.context_stack[0][12 /* strict */]) {
            parser.err(token);
        }
        return token;
    };
    head_1.token_hooks.Null = getLiteral.bind(null, () => null);
    head_1.token_hooks.RegularExpression = function (token, tokenizer) {
        let res = getRegularLiteral(token, tokenizer);
        res.regex = token.regex;
        return res;
    };
}


/***/ }),

/***/ "./js/Dison/js/syntax/head.ts":
/*!************************************!*\
  !*** ./js/Dison/js/syntax/head.ts ***!
  \************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports._Loop = exports._Mark = exports._NonCollecting = exports._NonCapturing = exports._Series = exports._Or = exports._Option = exports._Context = exports.validateAssignment = exports.validateIdentifier = exports.isStrictModeReservedWord = exports.isFutureReservedWord = exports.isRestrictedWord = exports.createMatchTree = exports.TYPE_ALIAS = exports.NODES = exports.validateLineTerminator = exports.validateBinding = exports.ASSIGNMENT_PUNCTUATORS_PATTERN = exports.EXPRESSION_OR_THROW_STRICT_RESERVED_WORDS_PATTERN = exports.IDENTIFIER_OR_THROW_STRICT_RESERVED_WORDS_PATTERN = exports.EXPRESSION_OR_VALIDATE_STRICT_RESERVED_WORDS_PATTERN = exports.IDENTIFIER_OR_VALIDATE_STRICT_RESERVED_WORDS_PATTERN = exports.join_content = exports._SuccessCollector = exports.TOPLEVEL_ITEM_PATTERN = exports.RIGHT_SIDE_TOPLEVEL_ITEM_PATTERN = exports.STATEMANT_LIST_ITEM_PATTERN = exports.isAligned = exports.Mark = exports.Cover = exports.attachLocation = exports.reinterpretKeywordAsIdentifier = exports.reinterpretIdentifierAsKeyword = exports._Validate = exports.is_right_braces = exports.is_right_brackets = exports.is_right_parentheses = exports._Pattern = exports._Identifier = exports._Keyword = exports._Punctuator = exports.parse_and_extract = exports.extract_success = exports.get_inner_group = exports.parse_next_statement = exports.token_hooks = exports.async_getter = exports.Operator = void 0;
const index_1 = __webpack_require__(/*! ../lexical/index */ "./js/Dison/js/lexical/index.ts");
let type_punctuator = index_1.TYPE_ENUMS.Punctuator;
let type_keyword = index_1.TYPE_ENUMS.Keyword;
let type_identifier = index_1.TYPE_ENUMS.Identifier;
function _Punctuator(...values) {
    values.unshift(type_punctuator);
    return _Or(values);
}
exports._Punctuator = _Punctuator;
function _Keyword(...values) {
    values.unshift(type_keyword);
    return _Or(values);
}
exports._Keyword = _Keyword;
function _Identifier(...values) {
    values.unshift(type_identifier);
    return _Or(values);
}
exports._Identifier = _Identifier;
function _Pattern(...args) {
    return _Or(args);
}
exports._Pattern = _Pattern;
let OPERATOR_ID = 0;
function _calc_nth(props, key) {
    let nth = 0;
    if (!(key instanceof Cover) && props.length) {
        key instanceof Mark && (key = key.key);
        for (let i = props.length - 1; i >= 0; i--) {
            let prop = props[i], _key = prop[0];
            if (_key === key
                || _key instanceof Mark
                    && _key.key === key
                    && (_key.value !== undefined || _key.data !== Mark.prototype.data)) {
                if (prop[1] === 0) {
                    prop = props[i] = [prop[0], 1, prop[2]];
                }
                nth = prop[1] + 1;
            }
            else if (!(_key instanceof Cover && _key.origin === key)) {
                break;
            }
        }
    }
    return nth;
}
class Operator {
    constructor(operands) {
        this.operands = operands;
        this.sub_operators = [];
    }
    pipe(pipe) {
        if (this._pipes) {
            this._pipes.push(pipe);
        }
        else {
            this._pipes = [pipe];
        }
        return this;
    }
    walk(walker, bind_env) {
        this._walker = walker;
        this._bind_env = !!bind_env;
        return this;
    }
    get factors() {
        if (!this._factors) {
            this._factors = [];
            for (const operand of this.operands) {
                if (operand instanceof Operator || operand instanceof Mark) {
                    this._factors.push(operand);
                }
                else {
                    let parts = typeof operand === "string" ?
                        operand.replace(/^\s+|\s+$/g, "").split(/\s+/) :
                        operand;
                    this._factors.push([
                        parts[0],
                        parts.length > 1
                            ? parts.slice(1)
                            : [" TYPE" /* TYPE_ONLY */]
                    ]);
                }
            }
        }
        return this._factors;
    }
    map(parents, factor, key, pipes) {
        let result = [];
        let _pipes = pipes
            ? this._pipes ?
                this._pipes.concat(pipes)
                : pipes
            : this._pipes;
        if (factor instanceof Operator || factor instanceof Mark) {
            return factor.attach(parents, key, _pipes);
        }
        else {
            let type = factor[0], values = factor[1];
            for (const prev_item of parents) {
                let [root, props] = prev_item;
                props = props.slice();
                props.push([key, _calc_nth(props, key), _pipes]);
                let parent = this.getNode(root, type);
                let walker = this._walker;
                if (walker && this._bind_env) {
                    walker = walker.bind(props.reduce((res, prop) => {
                        let key = prop[0];
                        if (key instanceof Mark) {
                            res[key.key] = key.value;
                        }
                        else {
                            res[key instanceof Cover ? key.origin : key] = true;
                        }
                        return res;
                    }, {}));
                }
                for (const value of values) {
                    let value_node = this.getNode(parent, value, root);
                    if (value_node[" WAL" /* WALKER */]
                        && value_node[" WAL" /* WALKER */] !== walker) {
                        console.warn("conflict:", value_node, value_node[" WAL" /* WALKER */], walker);
                    }
                    if (walker) {
                        value_node[" WAL" /* WALKER */] = walker;
                    }
                    result.push([
                        value_node,
                        props,
                        null /*[root, factor[0], value, prev_item]//Loop*/
                    ]);
                }
            }
        }
        return result;
    }
    getNode(parent, key, root) {
        let child = parent[key];
        if (child) {
            if (child[" ID" /* IDENTIFIER */] !== OPERATOR_ID) {
                parent[key] = child = Object.assign({}, child);
                child[" ID" /* IDENTIFIER */] = OPERATOR_ID;
            }
            return child;
        }
        child = parent[key] = {
            [" ID" /* IDENTIFIER */]: OPERATOR_ID
        };
        if (root) {
            child[" DEEP" /* DEEPTH */] = root[" DEEP" /* DEEPTH */] + 1;
            root[" TER" /* TERMINAL */] = false;
            child[" TER" /* TERMINAL */] = true;
            /*if (root[MATCH_MARKS.MATCH_END]) {
                root[MATCH_MARKS.MATCH_END][MATCHED_RECORDS.precedence][PRECEDENCE.TERMINAL] = false;
            }*/
        }
        return child;
    }
    setWrap(records) {
        throw 'not used';
        for (const record of records) {
            let prev_item = record, curr_item = prev_item;
            while ((curr_item = prev_item[2] && prev_item[2][3]) && curr_item[2]) {
                prev_item = curr_item;
            }
            if (prev_item[2]) {
                let linked = prev_item[2];
                let node = this.getNode(record[0], linked[1]);
                if (node[linked[2]] && node[linked[2]] !== prev_item[0]) {
                    throw node[linked[2]];
                }
                node[linked[2]] = prev_item[0];
            }
        }
        return records;
    }
    getDeepNodes(parents, key, pipes) {
        let children = parents, factors = this.factors;
        for (const factor of factors) {
            children = this.map(children, factor, key, pipes);
        }
        return children;
    }
    getNextNodes(parents, key, pipes) {
        let children = [], factors = this.factors;
        for (const factor of factors) {
            Array.prototype.push.apply(children, this.map(parents, factor, key, pipes));
        }
        return children;
    }
}
exports.Operator = Operator;
class Option extends Operator {
    attach(parents, key, pipes) {
        let children = this.getNextNodes(parents, key, pipes).concat(parents);
        return children;
    }
}
class Or extends Operator {
    attach(parents, key, pipes) {
        return this.getNextNodes(parents, key, pipes);
    }
}
class Series extends Operator {
    attach(parents, key, pipes) {
        return this.getDeepNodes(parents, key, pipes);
    }
}
/*
class And extends Operator  {
    attach(parents: IterationRecord, key: string) {
        throw "not used";
        return [];
    }
}
class Not extends Operator {
    attach(parents: IterationRecord, key: string) {
        throw "not used";
        return [];
        
    }
}*/
class Cover {
    constructor(origin, value) {
        this.origin = origin;
        this.value = value;
        if (origin instanceof Cover) {
            this.origin = origin.origin;
        }
    }
}
exports.Cover = Cover;
class NonCapturing extends Operator {
    attach(parents, key, pipes) {
        return this.getNextNodes(parents, new Cover(key, null), pipes);
    }
}
class NonCollecting extends Operator {
    attach(parents, key, pipes) {
        return this.getNextNodes(parents, new Cover(key, ""), pipes);
    }
}
class Loop extends Operator {
    //Loop 内部的 Option 可能会导致 Loop 取值混乱(当前用不到这种情况，不处理这种情况能减少消耗)
    attach(parents, key) {
        throw 'not used';
        //有点耗费性能，不是很必要用这个，已在parser核心部分去除Loop的支持
        let baks = [];
        for (const parent of parents) {
            baks.push(parent[2]);
            parent[2] = null;
        }
        let res = this.setWrap(this.getNextNodes(parents, key));
        for (const index in parents) {
            parents[index][2] = baks[index];
        }
        return res;
    }
}
class Mark {
    constructor(value) {
        if (typeof value === "function") {
            this.data = value;
        }
        else {
            this.value = value;
        }
    }
    data(context, index) {
        return this.value;
    }
    attach(parents, key, pipes) {
        let value = this.value;
        if (!(key instanceof Cover) && (value !== undefined || this.data !== Mark.prototype.data)) {
            if (key === "type") {
                Mark.MATCHED_RECORD[2 /* wrapper */] = _get_wrapper_function(value);
                ;
            }
            else {
                let result = [];
                this.key = key;
                for (const parent of parents) {
                    let props = parent[1].slice();
                    props.push([this, _calc_nth(props, this), undefined]);
                    result.push([parent[0], props, parent[2]]);
                }
                return result;
            }
        }
        return parents;
    }
}
exports.Mark = Mark;
function _Option(...some) {
    return new Option(some);
}
exports._Option = _Option;
/*
function _Not(...some: Operands) {
    return new Not(some);
}
function _And(...some: Operands) {
    return new And(some);
}*/
function _Or(...some) {
    return new Or(some);
}
exports._Or = _Or;
function _Series(...some) {
    return new Series(some);
}
exports._Series = _Series;
function _NonCapturing(...some) {
    return new NonCapturing(some);
}
exports._NonCapturing = _NonCapturing;
function _NonCollecting(...some) {
    return new NonCollecting(some);
}
exports._NonCollecting = _NonCollecting;
function _Loop(...some) {
    return new Loop(some);
}
exports._Loop = _Loop;
function _Mark(some) {
    return new Mark(some);
}
exports._Mark = _Mark;
let NODES = {
    Grouping: function (node, grouping) {
        this.type = "Grouping";
        for (const key in node) {
            this[key] = node[key];
        }
        if (grouping) {
            this.range = grouping.range;
            this.loc = grouping.loc;
        }
    },
    Directive: function (type, expression, directive, range, loc) {
        this.type = type;
        this.expression = expression;
        this.directive = directive;
        this.range = range;
        this.loc = loc;
    },
    Script: function (body) {
        this.type = "Program";
        this.sourceType = "script";
        this.body = body;
    },
    Module: function (body) {
        this.type = "Program";
        this.sourceType = "module";
        this.body = body;
    }
};
exports.NODES = NODES;
function _get_adapt(data, index) {
    return data instanceof Array ? index < data.length
        ? data[index]
        : data[data.length - 1] : data;
}
function _get_wrapper_function(type) {
    return NODES[type]
        || (NODES[type]
            = type ? eval(`(function ${type}(){this.type="${type}"})`) : function () { });
}
function createMatchTree(data, root, block_list = [], prevent_update = false) {
    prevent_update || (OPERATOR_ID += 1);
    root = root ? prevent_update ? root : Object.assign({}, root) : { [" DEEP" /* DEEPTH */]: -1 };
    if (data instanceof Array) {
        for (const item of data) {
            root = createMatchTree(item, root, block_list, true);
        }
    }
    else {
        for (const type in data) {
            let wrapper = _get_wrapper_function(type);
            for (let item of data[type] instanceof Array ? data[type] : [data[type]]) {
                let { collector: collectors, handler: handlers, overload, precedence: precedences = true /*PRECEDENCE_FEATURES.IMMEDIATE*/, filter: filters, validator: validators } = item;
                if (!collectors || ~block_list.indexOf(type)) {
                    continue;
                }
                typeof filters === "string" && (filters = data[filters].filter);
                typeof handlers === "string" && (handlers = data[handlers].handler);
                typeof validators === "string" && (validators = data[validators].validator);
                collectors instanceof Array || (collectors = [collectors]);
                for (let index = 0; index < collectors.length; index++) {
                    let collector = collectors[index];
                    let precedence = _get_adapt(precedences, index);
                    let handler = _get_adapt(handlers, index);
                    let filter = _get_adapt(filters, index);
                    let validator = _get_adapt(validators, index);
                    Mark.MATCHED_RECORD = [
                        [precedence instanceof Number ? Number(precedence) : precedence, precedence],
                        null,
                        wrapper,
                        handler,
                        validator,
                        filter
                    ];
                    if (collector instanceof Array) {
                        let _collector = Object.assign({}, collectors[index - 1]);
                        collector[0] && !(collector[0] instanceof Array) && (collector = [collector]);
                        for (const [key, value] of collector) {
                            _collector[key] = value;
                        }
                        collectors[index] = collector = _collector;
                    }
                    let nodes = [[root, [], null]];
                    //保证所有 key 都是同类型字符开头(否则可能会出现遍历顺序与定义顺序不同)
                    for (const key in collector) {
                        let operator = collector[key];
                        if (!(operator instanceof Operator || operator instanceof Mark)) {
                            operator = _Or(operator);
                        }
                        nodes = operator.attach(nodes, key);
                    }
                    for (const [last_node, props] of nodes) {
                        let matched_record = Mark.MATCHED_RECORD.slice();
                        matched_record[1 /* props */] = props;
                        if (!overload && last_node[" END" /* END */]) {
                            console.warn("conflict:", last_node, last_node[" END" /* END */], matched_record);
                        }
                        last_node[" END" /* END */] = matched_record;
                    }
                }
            }
        }
    }
    return root;
}
exports.createMatchTree = createMatchTree;
function _Context(parser) {
    let state_stack = [];
    let context = new Array(22 /* length */);
    context[1 /* parser */] = parser;
    context[11 /* labelSet */] = [];
    //context[CONTEXT.tokens] = tokens;
    context.wrap = wrap;
    context.unwrap = unwrap;
    context.store = store;
    context.restore = restore;
    context.getToken = getToken;
    Object.defineProperty(context, "tokens", {
        get() {
            return this[7 /* tokens */] || this[1 /* parser */].tokens;
        }
    });
    return context;
    function getToken(index) {
        let tokens = this[7 /* tokens */];
        return !tokens ? this[1 /* parser */].getToken(index) : tokens[index];
        //return context[CONTEXT.tokens][index];
    }
    function wrap(key, value) {
        state_stack.push(context[key], key);
        context[key] = value;
        return context;
    }
    ;
    function unwrap() {
        context[state_stack.pop()] = state_stack.pop();
        return context;
    }
    ;
    function store() {
        let restore_point = state_stack.length;
        for (let index = 0; index < arguments.length; index += 2) {
            wrap(arguments[index], arguments[index + 1]);
        }
        return restore_point;
    }
    function restore(point) {
        while (state_stack.length > point) {
            unwrap();
        }
        return state_stack.length;
    }
}
exports._Context = _Context;
const FutureReservedWord = ["enum", "export", "import", "super"];
const StrictModeReservedWord = [
    "implements", "interface", "package", "private", "protected", "public", "static", "yield", "let"
];
const RestrictedWord = ["eval", "arguments"];
function isFutureReservedWord(id) {
    return FutureReservedWord.indexOf(id) >= 0;
}
exports.isFutureReservedWord = isFutureReservedWord;
function isStrictModeReservedWord(id) {
    return StrictModeReservedWord.indexOf(id) >= 0;
}
exports.isStrictModeReservedWord = isStrictModeReservedWord;
function isRestrictedWord(id) {
    return RestrictedWord.indexOf(id) >= 0;
}
exports.isRestrictedWord = isRestrictedWord;
function _if_strict_throw_err(context, token) {
    if (context[12 /* strict */]) {
        context[1 /* parser */].err(token);
    }
}
function _if_reserved_throw_err(context, token) {
    validateIdentifier(context, token);
}
const THROW_RESTRICT_WORDS_PATTERN = _Or("Identifier eval arguments").pipe(_if_strict_throw_err);
const THROW_STRICT_RESERVED_WORDS_PATTERN = _Or("Identifier implements interface package private protected public static yield let").pipe(_if_strict_throw_err);
const IDENTIFIER_OR_THROW_STRICT_RESERVED_WORDS_PATTERN = _Or("Identifier", THROW_STRICT_RESERVED_WORDS_PATTERN);
exports.IDENTIFIER_OR_THROW_STRICT_RESERVED_WORDS_PATTERN = IDENTIFIER_OR_THROW_STRICT_RESERVED_WORDS_PATTERN;
const EXPRESSION_OR_THROW_STRICT_RESERVED_WORDS_PATTERN = _Or("[Expression]", THROW_STRICT_RESERVED_WORDS_PATTERN);
exports.EXPRESSION_OR_THROW_STRICT_RESERVED_WORDS_PATTERN = EXPRESSION_OR_THROW_STRICT_RESERVED_WORDS_PATTERN;
const IDENTIFIER_OR_VALIDATE_STRICT_RESERVED_WORDS_PATTERN = _Or("Identifier").pipe(_if_reserved_throw_err);
exports.IDENTIFIER_OR_VALIDATE_STRICT_RESERVED_WORDS_PATTERN = IDENTIFIER_OR_VALIDATE_STRICT_RESERVED_WORDS_PATTERN;
const EXPRESSION_OR_VALIDATE_STRICT_RESERVED_WORDS_PATTERN = _Or("[Expression]", IDENTIFIER_OR_VALIDATE_STRICT_RESERVED_WORDS_PATTERN);
exports.EXPRESSION_OR_VALIDATE_STRICT_RESERVED_WORDS_PATTERN = EXPRESSION_OR_VALIDATE_STRICT_RESERVED_WORDS_PATTERN;
/*const STRICT_RESERVED_WORDS = _Or(
    "Identifier implements interface package private protected public static yield let"
);*/
function validateIdentifier(context, node) {
    if (context[12 /* strict */]) {
        if (!isStrictModeReservedWord(node.name)) {
            return true;
        }
        context[1 /* parser */].err(node);
        return false;
    }
}
exports.validateIdentifier = validateIdentifier;
function validateAssignment(context, node) {
    if (context[12 /* strict */]) {
        if (!(isRestrictedWord(node.name)
            || isStrictModeReservedWord(node.name))) {
            return true;
        }
        context[1 /* parser */].err(node);
        return false;
    }
}
exports.validateAssignment = validateAssignment;
function validateBinding(context, node) {
    if (validateAssignment(context, node) === true) {
        let binding_set = context[10 /* bindingSet */];
        if (binding_set) {
            binding_set.push(node.name);
            if (binding_set.indexOf(node.name) !== binding_set.length - 1) {
                context[1 /* parser */].err(node);
                return false;
            }
        }
        return true;
    }
}
exports.validateBinding = validateBinding;
function validateLineTerminator(context) {
    let [collected, parser, , right] = context;
    if (collected._next) {
        delete collected._next;
    }
    else {
        let next_token = context.getToken(right + 1);
        if (next_token
            && !(next_token.type === type_punctuator && next_token.value === "}")
            && next_token.loc.start.line === collected.loc.end.line) {
            parser.err(next_token);
        }
    }
    return collected;
}
exports.validateLineTerminator = validateLineTerminator;
function _SuccessCollector(pattern) {
    return {
        Success: {
            handler: join_content,
            precedence: 0,
            collector: [
                {
                    success: _Or(_NonCollecting("" /* BOUNDARY */), "Success"),
                    content: pattern,
                }
            ]
        }
    };
}
exports._SuccessCollector = _SuccessCollector;
let join_content = function ([collected]) {
    let { success, content } = collected;
    if (success) {
        success.content.push(content);
        return success;
    }
    else {
        collected.content = [content];
        return collected;
    }
};
exports.join_content = join_content;
let TYPE_ALIAS = {};
exports.TYPE_ALIAS = TYPE_ALIAS;
const ASSIGNMENT_PUNCTUATORS_PATTERN = _Or("Punctuator = += -= **= *= /= %= <<= >>= >>>= &= ^= |=");
exports.ASSIGNMENT_PUNCTUATORS_PATTERN = ASSIGNMENT_PUNCTUATORS_PATTERN;
const MODULE_ITEM_PATTERN = _Or("ImportDeclaration", "ExportAllDeclaration", "ExportNamedDeclaration", "ExportDefaultDeclaration");
const STATEMANT_LIST_ITEM_PATTERN = _Or("[Declaration]", "[Statement]");
exports.STATEMANT_LIST_ITEM_PATTERN = STATEMANT_LIST_ITEM_PATTERN;
const RIGHT_SIDE_TOPLEVEL_ITEM_PATTERN = _Or("SwitchCase", MODULE_ITEM_PATTERN, STATEMANT_LIST_ITEM_PATTERN);
exports.RIGHT_SIDE_TOPLEVEL_ITEM_PATTERN = RIGHT_SIDE_TOPLEVEL_ITEM_PATTERN;
const TOPLEVEL_ITEM_PATTERN = _Or("" /* BOUNDARY */, "SwitchCase", MODULE_ITEM_PATTERN, STATEMANT_LIST_ITEM_PATTERN);
exports.TOPLEVEL_ITEM_PATTERN = TOPLEVEL_ITEM_PATTERN;
function isAligned(context, left, right) {
    let tokens = context.tokens;
    for (let index = left; index < right; index++) {
        if (tokens[index].loc.end.line !== tokens[index + 1].loc.start.line) {
            return false;
        }
    }
    return true;
}
exports.isAligned = isAligned;
function attachLocation(source, start, end = start) {
    let start_loc = start.loc.start;
    let end_loc = end.loc.end;
    source.range = [start.range[0], end.range[1]];
    source.loc = {
        start: { line: start_loc.line, column: start_loc.column },
        end: { line: end_loc.line, column: end_loc.column }
    };
}
exports.attachLocation = attachLocation;
function reinterpretKeywordAsIdentifier({ value, range, loc }, tokenizer) {
    let name = tokenizer ? tokenizer._volatility : value;
    let identifier = {
        type: "Identifier", name, range, loc
    };
    Object.defineProperty(identifier, "value", {
        configurable: true,
        enumerable: false,
        value: name
    });
    return identifier;
}
exports.reinterpretKeywordAsIdentifier = reinterpretKeywordAsIdentifier;
function reinterpretIdentifierAsKeyword({ value, range, loc }) {
    return {
        type: "Keyword",
        value,
        range,
        loc
    };
}
exports.reinterpretIdentifierAsKeyword = reinterpretIdentifierAsKeyword;
function _Validate(type, value) {
    return function (token) {
        return token.type === type && token.value === value;
    };
}
exports._Validate = _Validate;
let is_right_parentheses = _Validate(type_punctuator, ")");
exports.is_right_parentheses = is_right_parentheses;
let is_right_brackets = _Validate(type_punctuator, "]");
exports.is_right_brackets = is_right_brackets;
let is_right_braces = _Validate(type_punctuator, "}");
exports.is_right_braces = is_right_braces;
function extract_success(parser, nodes) {
    let res = nodes;
    if (nodes.length) {
        let index = 0;
        if (nodes[0].type === "Success") {
            index = 1;
            res = nodes[0].content;
        }
        else {
            res = [];
        }
        if (nodes.length > index) {
            parser.err(...nodes.slice(index));
        }
    }
    return res;
}
exports.extract_success = extract_success;
function parse_and_extract(match_tree, context, node) {
    let [, parser] = context;
    let tokens = node.content;
    if (tokens.length) {
        context.wrap(7 /* tokens */, tokens);
        //context[CONTEXT.tokens] = tokens;
        parser.parseCustom(match_tree, context);
        tokens = extract_success(parser, tokens);
        context.unwrap();
    }
    return tokens;
}
exports.parse_and_extract = parse_and_extract;
function get_inner_group(token) {
    while (token.content.length === 1
        && token.content[0].value === "()"
        && token.content[0].type === type_punctuator) {
        token = token.content[0];
    }
    return token;
}
exports.get_inner_group = get_inner_group;
function parse_next_statement(context, start = context[3 /* right */] + 1) {
    let parser = context[1 /* parser */];
    if (parser.parseCustom(parser.SYNTAX_TREE, context, start, parser.isStatementListItem)) {
        return 0;
    }
}
exports.parse_next_statement = parse_next_statement;
let token_hooks = {};
exports.token_hooks = token_hooks;
function AsyncGetter() {
    let await_tasks = {};
    let async_data = {};
    let is_open = false;
    let async_mapper = {
        open() {
            is_open = true;
            let tasks = [];
            for (const key in await_tasks) {
                if (async_data.hasOwnProperty(key)) {
                    let data = async_data[key];
                    for (let task of await_tasks[key]) {
                        tasks.push([task, data]);
                    }
                }
            }
            for (const task of tasks) {
                task[0](task[1]);
            }
        },
        get(key, callback) {
            if (await_tasks[key]) {
                await_tasks[key].push(callback);
                if (is_open && async_data.hasOwnProperty(key)) {
                    callback(async_data[key]);
                }
            }
            else {
                if (async_mapper.hasOwnProperty(key)) {
                    async_data[key] = async_mapper[key];
                    is_open && callback(async_data[key]);
                }
                Object.defineProperty(async_mapper, key, {
                    enumerable: true,
                    configurable: true,
                    set(data) {
                        if (async_data.hasOwnProperty(key)) {
                            debugger;
                        }
                        async_data[key] = data;
                        if (is_open) {
                            for (const cbfun of await_tasks[key]) {
                                cbfun(data);
                            }
                        }
                    },
                    get() {
                        return async_data[key];
                    }
                });
                await_tasks[key] = [callback];
            }
        }
    };
    return async_mapper;
}
let async_getter = AsyncGetter();
exports.async_getter = async_getter;


/***/ }),

/***/ "./js/Dison/js/syntax/module_declaration.ts":
/*!**************************************************!*\
  !*** ./js/Dison/js/syntax/module_declaration.ts ***!
  \**************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const head_1 = __webpack_require__(/*! ./head */ "./js/Dison/js/syntax/head.ts");
let Grouping = head_1.NODES.Grouping;
const STRING_LITERAL_PATTERN = head_1._Or("Literal").pipe(function (context, token) {
    if (token instanceof Grouping || typeof token.value !== "string") {
        context[1 /* parser */].err(token);
    }
});
let ImportSpecifiers = Object.assign(Object.assign({}, head_1._SuccessCollector(head_1._Pattern("ImportSpecifier"))), { 
    /*"Success": {
        handler: join_content,
        precedence: 0,
        collector: [
            {
                success: _Or(MARKS.BOUNDARY, "Success"),
                content: "ImportSpecifier",
            }
        ]
    },*/
    ImportSpecifier: {
        collector: {
            _prev: head_1._NonCapturing("Success", "" /* BOUNDARY */),
            imported: "Identifier",
            local: head_1._Or(head_1._Series(head_1._NonCollecting("Identifier as"), "Identifier", head_1._NonCollecting("Punctuator ,", "" /* BOUNDARY */)), head_1._Or("Punctuator ,", "" /* BOUNDARY */).pipe(function (context) {
                let [collected] = context;
                return collected.imported;
            }))
        }
    } });
const IMPORT_SPECIFIERS_TREE = head_1.createMatchTree(ImportSpecifiers);
const EXPORT_SPECIFIERS_TREE = head_1.createMatchTree(Object.assign(Object.assign({}, head_1._SuccessCollector(head_1._Pattern("ExportSpecifier"))), { ExportSpecifier: {
        collector: {
            _prev: head_1._NonCapturing("Success", "" /* BOUNDARY */),
            local: "Identifier",
            exported: head_1._Or(head_1._Series(head_1._NonCollecting("Identifier as"), "Identifier", head_1._NonCollecting("Punctuator ,", "" /* BOUNDARY */)), head_1._Or("Punctuator ,", "" /* BOUNDARY */).pipe(function (context) {
                let [collected] = context;
                return collected.local;
            }))
        }
    } }));
const ModuleDeclarations = {
    "ImportDeclaration": {
        handler(context) {
            let [collected, parser] = context;
            head_1.validateLineTerminator(context);
            if (!context[13 /* isModule */]) {
                parser.err(collected);
            }
            return collected;
        },
        collector: [
            {
                token: head_1._NonCollecting("Keyword import"),
                specifiers: head_1._Or(head_1._Punctuator("{}").pipe(function (context, token) {
                    return head_1.parse_and_extract(IMPORT_SPECIFIERS_TREE, context, token);
                }), head_1._Series(head_1._NonCollecting("Punctuator *"), head_1._NonCollecting("Identifier as"), head_1._Identifier().pipe(function (context, token) {
                    return [
                        {
                            type: "ImportNamespaceSpecifier",
                            local: token
                        }
                    ];
                })), head_1._Series(head_1._Identifier().pipe(function (context, Identifier) {
                    return {
                        type: "ImportDefaultSpecifier",
                        local: Identifier
                    };
                }), head_1._Option(head_1._Series(head_1._NonCollecting("Punctuator ,"), head_1._Or(head_1._Series(head_1._Punctuator("{}").pipe(function (context, token) {
                    return head_1.parse_and_extract(IMPORT_SPECIFIERS_TREE, context, token);
                }), head_1._Mark(function (context) {
                    let [collected] = context;
                    let specifiers = collected.specifiers;
                    specifiers.splice(1, 1, ...specifiers[1]);
                })), head_1._Series(head_1._NonCollecting("Punctuator *"), head_1._NonCollecting("Identifier as"), head_1._Identifier().pipe(function (context, token) {
                    return {
                        type: "ImportNamespaceSpecifier",
                        local: token
                    };
                }))))), head_1._Mark(function () { }) //使结果收集为数组
                )),
                _: head_1._NonCollecting("Identifier from"),
                source: STRING_LITERAL_PATTERN,
                _next: head_1._Option("Punctuator ;")
            },
            [
                ["specifiers", head_1._Mark(function () { return []; })],
                ["_", head_1._Mark()],
            ]
        ]
    },
    "ExportAllDeclaration": {
        handler(context) {
            let [collected, parser] = context;
            head_1.validateLineTerminator(context);
            if (!context[13 /* isModule */]) {
                parser.err(collected);
            }
            return collected;
        },
        collector: {
            _: head_1._NonCollecting(head_1._Series("Keyword export", "Punctuator *", "Identifier from")),
            source: STRING_LITERAL_PATTERN,
            _next: head_1._Option("Punctuator ;"),
        },
    },
    "ExportNamedDeclaration": {
        handler(context) {
            let [collected, parser] = context;
            collected.declaration || head_1.validateLineTerminator(context);
            if (!context[13 /* isModule */]) {
                parser.err(collected);
            }
            return collected;
        },
        collector: [
            {
                _: head_1._NonCollecting("Keyword export"),
                declaration: "VariableDeclaration",
                specifiers: head_1._Mark(() => []),
                source: head_1._Mark(null)
            },
            {
                _: head_1._NonCollecting("Keyword export"),
                declaration: head_1._Mark(null),
                specifiers: head_1._Punctuator("{}").pipe(function (context, token) {
                    return head_1.parse_and_extract(EXPORT_SPECIFIERS_TREE, context, token);
                }),
                source: head_1._Mark(null),
                _next: head_1._Option("Punctuator ;")
            }
        ]
    },
    "ExportDefaultDeclaration": {
        handler(context) {
            let [collected] = context;
            head_1.validateLineTerminator(context);
            if (!context[13 /* isModule */]) {
                context[1 /* parser */].err(collected);
            }
            return collected;
        },
        precedence: 1.5,
        collector: [
            {
                type: head_1._Mark("ExportDefaultDeclaration"),
                _: head_1._NonCollecting("Keyword export"),
                __: head_1._NonCollecting("Keyword default"),
                declaration: "[Expression]",
                _next: head_1._Option("Punctuator ;")
            }
        ]
    }
};
exports.default = ModuleDeclarations;


/***/ }),

/***/ "./js/Dison/js/syntax/pattern.ts":
/*!***************************************!*\
  !*** ./js/Dison/js/syntax/pattern.ts ***!
  \***************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseObjectPattern = exports.parseArrayPattern = exports.Patterns = void 0;
const head_1 = __webpack_require__(/*! ./head */ "./js/Dison/js/syntax/head.ts");
//import { UNIT_EXPRESSION_TREE } from './expression';
const Grouping = head_1.NODES.Grouping;
let UNIT_EXPRESSION_TREE;
let PETTERN_ELEMENTS_TREE;
let PATTERN_PROPERTIES_TREE;
//console.log(123123, UNIT_EXPRESSION_TREE, UNIT_EXPRESSION_TREE);
head_1.async_getter.get("UNIT_EXPRESSION_TREE", function (data) {
    UNIT_EXPRESSION_TREE = data;
    PETTERN_ELEMENTS_TREE = head_1.createMatchTree(PatternElements, UNIT_EXPRESSION_TREE);
    PATTERN_PROPERTIES_TREE = head_1.createMatchTree(PatternProperties, UNIT_EXPRESSION_TREE);
});
const Patterns = head_1.async_getter.Patterns = {
    ArrayPattern: {
        handler(context) {
            let [collected] = context;
            collected.is_binding || context.wrap(10 /* bindingSet */, null);
            let res = parseArrayPattern(context, collected.elements);
            collected.is_binding || context.unwrap();
            return res;
        },
        precedence: 20,
        filter: [
            null,
            function (context) {
                return context[18 /* bindingElement */] /* === context[CONTEXT.tokens]*/;
            }
        ],
        collector: [
            {
                elements: head_1._Or("Punctuator []"),
                _next: head_1._NonCapturing(head_1.ASSIGNMENT_PUNCTUATORS_PATTERN),
            },
            {
                _prev: head_1._NonCapturing("Punctuator  ...", "" /* BOUNDARY */, "Success"),
                elements: head_1._Or("Punctuator []"),
                is_binding: head_1._Mark(true)
            }
        ]
    },
    ObjectPattern: {
        handler: function (context) {
            let [collected] = context;
            collected.is_binding || context.wrap(10 /* bindingSet */, null);
            let res = parseObjectPattern(context, collected.properties);
            collected.is_binding || context.unwrap();
            return res;
        },
        precedence: 20,
        filter: [
            null, null,
            function (context, left, right) {
                return context[18 /* bindingElement */] /* === tokens*/
                    || context[14 /* isExpression */];
            },
            function (context) {
                return context[18 /* bindingElement */] /*=== context[CONTEXT.tokens]*/;
            }
        ],
        collector: [
            {
                _prev: head_1._NonCapturing(head_1.ASSIGNMENT_PUNCTUATORS_PATTERN),
                properties: head_1._Or("Punctuator {}"),
                _next: head_1._NonCapturing(head_1.ASSIGNMENT_PUNCTUATORS_PATTERN)
            },
            [
                ["_prev", head_1._NonCapturing("Punctuator  ,")],
                ["is_binding", head_1._Mark(true)]
            ],
            ["_prev", head_1._Mark()],
            [
                ["_prev", head_1._NonCapturing("Punctuator ...", "" /* BOUNDARY */, "Success")],
                ["_next", head_1._Mark()],
            ]
        ]
    },
    AssignmentPattern: {
        filter(context) {
            return context[18 /* bindingElement */] /* === context[CONTEXT.tokens]*/;
        },
        precedence: 1.5,
        collector: {
            _: head_1._NonCapturing("" /* BOUNDARY */, "Success"),
            left: head_1._Or("ArrayPattern", "ObjectPattern", "Identifier"
            /*_Or("Identifier").pipe(
                function (context: Context, identifier: Node) {
                    if (identifier instanceof Grouping) {
                        context[CONTEXT.parser].err(identifier);
                    } else {
                        validateBinding(context, identifier);
                    }
                }
            )*/
            ),
            __: head_1._NonCollecting("Punctuator ="),
            right: "[Expression]"
        }
    },
    "": [
        {
            handler(context) {
                let [{ token }, parser, left, right] = context;
                token = head_1.get_inner_group(token);
                let store = context.store(7 /* tokens */, token.content, 18 /* bindingElement */, true, 10 /* bindingSet */, null);
                let node = parser.parseNode(UNIT_EXPRESSION_TREE, context, node => parser.isExpression(node)
                    || node.type === "ArrayPattern"
                    || node.type === "ObjectPattern"
                    || node.type === "AssignmentPattern");
                context.restore(store);
                if (!node) {
                    parser.err(token);
                }
                return new Grouping(node, token);
            },
            collector: [
                {
                    _prev: head_1._NonCapturing(head_1._Series("Keyword export", "Keyword default"), "Punctuator ,", "Success", head_1.TOPLEVEL_ITEM_PATTERN, head_1.ASSIGNMENT_PUNCTUATORS_PATTERN),
                    token: head_1._Or("Punctuator ()"),
                    _next: head_1._NonCapturing(head_1.ASSIGNMENT_PUNCTUATORS_PATTERN)
                }
            ]
        },
        {
            validator(context) {
                let [, parser, , right] = context;
                let argument = context.getToken(right);
                argument instanceof Grouping && parser.err(argument);
                return true;
            },
            filter(context) {
                return context[19 /* spreadElement */];
            },
            precedence: 1.5,
            collector: {
                type: head_1._Mark("SpreadElement"),
                token: head_1._NonCollecting("Punctuator ..."),
                argument: "[Expression]"
            }
        },
        {
            validator(context) {
                let [, parser, , right] = context;
                let argument = context.getToken(right);
                argument instanceof Grouping && parser.err(argument);
                return true;
            },
            filter: function (context) {
                return context[18 /* bindingElement */];
            },
            precedence: 1.5,
            collector: {
                type: head_1._Mark("RestElement"),
                token: head_1._NonCollecting("Punctuator ..."),
                argument: head_1._Or(
                /*_Or("Identifier").pipe(
                    function (context: Context, token: Token) {
                        validateBinding(context, token)
                    }
                )*/
                "Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern")
            }
        }
    ]
};
exports.Patterns = Patterns;
function parseArrayPattern(context, token) {
    let pattern = new head_1.NODES.ArrayPattern();
    context.wrap(18 /* bindingElement */, true);
    pattern.elements = head_1.parse_and_extract(PETTERN_ELEMENTS_TREE, context, token);
    context.unwrap();
    pattern.range = token.range;
    pattern.loc = token.loc;
    return pattern;
}
exports.parseArrayPattern = parseArrayPattern;
function parseObjectPattern(context, token) {
    let pattern = new head_1.NODES.ObjectPattern();
    context.wrap(18 /* bindingElement */, true);
    pattern.properties = head_1.parse_and_extract(PATTERN_PROPERTIES_TREE, context, token);
    context.unwrap();
    pattern.range = token.range;
    pattern.loc = token.loc;
    return pattern;
}
exports.parseObjectPattern = parseObjectPattern;
let PatternElements = {
    Success: {
        handler: head_1.join_content,
        collector: [
            {
                success: head_1._Or("" /* BOUNDARY */, "Success"),
                content: head_1._Or(
                /*_Or("Identifier").pipe(
                    function (context: Context, identifier: Token) {
                        if (identifier instanceof Grouping) {
                            context[CONTEXT.parser].err(identifier);
                        } else {
                        validateBinding(context, identifier);
                        }
                    }
                ),*/
                "Identifier", "MemberExpression", head_1._Or("ArrayPattern", "ObjectPattern", "AssignmentPattern")),
                _next: head_1._NonCollecting(head_1._Or("Punctuator ,", "" /* BOUNDARY */))
            },
            [
                ["content", "RestElement"],
                ["_next", head_1._NonCollecting("" /* BOUNDARY */)]
            ],
            {
                success: head_1._Or("" /* BOUNDARY */, "Success"),
                content: head_1._Mark(null),
                _next: head_1._NonCollecting("Punctuator ,")
            }
        ]
    }
};
const PatternProperties = Object.assign(Object.assign({}, head_1._SuccessCollector(head_1._Pattern("Property"))), { Property: [
        {
            collector: [
                {
                    _prev: head_1._NonCapturing("" /* BOUNDARY */, "Success"),
                    key: head_1._Or("Punctuator []").pipe(function (context, token) {
                        context.wrap(7 /* tokens */, token.content);
                        let res = context[1 /* parser */].parseExpression(context);
                        context.unwrap();
                        return res;
                    }),
                    value: head_1._Series(head_1._NonCollecting("Punctuator :"), head_1._Or(
                    /*_Or("Identifier").pipe(function (context: Context, token: Token) {
                        validateBinding(context, token);
                    }),
                    _Or("MemberExpression"),*/
                    "Identifier", "MemberExpression", head_1._Or("Punctuator []").pipe(parseArrayPattern), head_1._Or("Punctuator {}").pipe(parseObjectPattern)), head_1._Option(head_1._Series(head_1._NonCollecting("Punctuator ="), "[Expression]")), head_1._Mark(function (context) {
                        let [collected] = context;
                        let { value } = collected;
                        if (value.length > 1) {
                            let _value = new head_1.NODES.AssignmentPattern();
                            _value.left = value[0];
                            _value.right = value[1];
                            head_1.attachLocation(_value, value[0], value[1]);
                            collected.value = _value;
                        }
                        else {
                            collected.value = value[0];
                        }
                        return undefined;
                    })),
                    _next: head_1._NonCollecting("" /* BOUNDARY */, "Punctuator ,"),
                    computed: head_1._Mark(true),
                    kind: head_1._Mark("init"),
                    method: head_1._Mark(false),
                    shorthand: head_1._Mark(false),
                },
                [
                    [
                        "key",
                        head_1._Or("Identifier").pipe(function (context, identifier) {
                            if (identifier instanceof Grouping) {
                                context[1 /* parser */].err(identifier);
                            }
                        })
                    ],
                    ["computed", head_1._Mark(false)]
                ],
                [
                    [
                        "value",
                        head_1._Or(head_1._Series(head_1._NonCollecting("Punctuator ="), "[Expression]").pipe(function (context, token) {
                            let [collected] = context;
                            let left = collected.key;
                            let res = new head_1.NODES.AssignmentPattern();
                            res.left = left;
                            res.right = token;
                            head_1.attachLocation(res, left, token);
                            return res;
                        }), head_1._Mark(function (context) {
                            return context[0 /* collected */].key;
                        }))
                    ],
                    [
                        "shorthand",
                        head_1._Mark(true)
                        /*_Mark(
                            function (context: Context) {
                                validateBinding(context, context[CONTEXT.collected].key);
                                return true;
                            }
                        )*/
                    ]
                ]
            ]
        },
        {
            validator() {
                return false;
            },
            precedence: new Number(3),
            collector: {
                __: head_1._Series(head_1._Or("" /* BOUNDARY */, "Success"), head_1._Or("Punctuator []", "Identifier"), "Punctuator :", head_1._Or("Identifier", "Punctuator [] {}"), "Punctuator =")
            }
        }
    ] });


/***/ }),

/***/ "./js/Dison/js/syntax/statement.ts":
/*!*****************************************!*\
  !*** ./js/Dison/js/syntax/statement.ts ***!
  \*****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const head_1 = __webpack_require__(/*! ./head */ "./js/Dison/js/syntax/head.ts");
const expression_1 = __webpack_require__(/*! ./expression */ "./js/Dison/js/syntax/expression.ts");
const declaration_1 = __webpack_require__(/*! ./declaration */ "./js/Dison/js/syntax/declaration.ts");
const Grouping = head_1.NODES.Grouping;
let { VariableDeclaration } = declaration_1.default;
let STATEMANT_LIST_ITEM_AND_VALIDATE_DECLARATION_PATTERN = head_1._Or(head_1.STATEMANT_LIST_ITEM_PATTERN).pipe(function (context, node) {
    if (node.type === "VariableDeclaration" && node.kind !== "var") {
        context[1 /* parser */].err(node);
    }
});
let BLOCK_STATEMENT_PATTERN = head_1._Or("Block", head_1._Or("Punctuator {").walk(function (context, left) {
    let parser = context[1 /* parser */];
    parser.parseRangeAsBlock(context, left);
    //parser.parseRange(parser.SYNTAX_TREE, context, left, is_right_braces).type = "Block";
})).pipe(function (context, token) {
    let res = new head_1.NODES.BlockStatement();
    res.body = token.content;
    head_1.attachLocation(res, token);
    return res;
});
let GROUPING_EXPRESSION = head_1._Or("Punctuator ()", head_1._Punctuator("(").walk(function (context, index) {
    let [, parser] = context;
    let store = context.store(10 /* bindingSet */, null, 18 /* bindingElement */, false);
    parser.parseRange(parser.EXPRESSION_TREE, context, index, head_1.is_right_parentheses, parser.isExpression);
    context.restore(store);
})).pipe(function (context, token) {
    if (token.content) {
        return token.content;
    }
    else {
        context[1 /* parser */].err(token);
        return null;
    }
});
const Statements = head_1.async_getter.Statements = {
    "": {
        handler([collected, parser]) {
            parser.err(collected.error);
            return [];
        },
        precedence: 0,
        collector: [
            {
                error: head_1._Or("Punctuator", "Keyword"),
                _next: head_1._NonCapturing(head_1.RIGHT_SIDE_TOPLEVEL_ITEM_PATTERN),
            }
        ]
    },
    "BreakStatement": {
        handler(context) {
            let [collected, parser] = context;
            head_1.validateLineTerminator(context);
            let label = collected.label;
            if (label) {
                if (label instanceof Grouping
                    || context[11 /* labelSet */].indexOf(label.name) < 0) {
                    parser.err(label);
                }
            }
            else if (!context[16 /* inIteration */] && !context[17 /* inSwitch */]) {
                parser.err(collected);
            }
            return collected;
        },
        filter: [
            function (context, left) {
                return head_1.isAligned(context, left, left + 1);
            },
            null,
        ],
        collector: [
            {
                token: head_1._NonCollecting("Keyword break"),
                label: head_1.IDENTIFIER_OR_THROW_STRICT_RESERVED_WORDS_PATTERN,
                _next: head_1._Option("Punctuator ;")
            },
            ["label", head_1._Mark(null)]
        ]
    },
    "ContinueStatement": {
        handler(context) {
            let [collected, parser] = context;
            let label = collected.label;
            head_1.validateLineTerminator(context);
            if (label) {
                if (label instanceof Grouping
                    || context[11 /* labelSet */].indexOf(label.name) < 0) {
                    parser.err(label);
                }
            }
            else if (!context[16 /* inIteration */]) {
                parser.err(collected);
            }
            return collected;
        },
        filter: "BreakStatement",
        collector: [
            {
                token: head_1._NonCollecting("Keyword continue"),
                label: head_1.IDENTIFIER_OR_THROW_STRICT_RESERVED_WORDS_PATTERN,
                _next: head_1._Option("Punctuator ;")
            },
            ["label", head_1._Mark(null)],
        ]
    },
    "ReturnStatement": {
        handler(context) {
            let [collected, parser] = context;
            head_1.validateLineTerminator(context);
            if (!context[15 /* inFunctionBody */]) {
                parser.err(collected);
            }
            return collected;
        },
        validator(context) {
            let [, , left, right] = context;
            if (left === right) {
                let next_token = context.getToken(left + 1);
                if (next_token && context.getToken(left).loc.end.line === next_token.loc.start.line) {
                    return false;
                }
            }
            return true;
        },
        filter: "BreakStatement",
        precedence: 0,
        collector: [
            {
                token: head_1._NonCollecting("Keyword return"),
                argument: head_1.EXPRESSION_OR_THROW_STRICT_RESERVED_WORDS_PATTERN,
                _next: head_1._Option("Punctuator ;")
            },
            ["argument", head_1._Mark(null)]
        ]
    },
    "BlockStatement": {
        overload: true,
        //precedence: 0,
        collector: [
            {
                _prev: head_1._NonCapturing(head_1.TOPLEVEL_ITEM_PATTERN),
                body: head_1._Punctuator("{").pipe(function (context, token, left) {
                    let parser = context[1 /* parser */];
                    return parser.parseRangeAsBlock(context, left).content;
                    //return parser.parseRange(parser.SYNTAX_TREE, context, left, is_right_braces).content;
                })
            }
        ]
    },
    "DoWhileStatement": {
        validator: "ForStatement",
        handler(context) {
            let [collected, parser] = context;
            head_1.validateLineTerminator(context);
            //collected.test = parser.parseExpression(context, collected.test);
            return collected;
        },
        collector: [
            {
                keyword: head_1._NonCollecting("Keyword do"),
            },
            [
                ["body", STATEMANT_LIST_ITEM_AND_VALIDATE_DECLARATION_PATTERN],
                ["test", head_1._Series(head_1._NonCollecting("Keyword while"), GROUPING_EXPRESSION)],
                ["_next", head_1._Option("Punctuator ;")]
            ]
        ]
    },
    "DebuggerStatement": {
        handler: head_1.validateLineTerminator,
        collector: {
            _: head_1._NonCollecting(head_1._Keyword("debugger")),
            _next: head_1._Option("Punctuator ;")
        }
    },
    "EmptyStatement": [
        {
            collector: [
                {
                    _prev: head_1._NonCapturing(head_1.TOPLEVEL_ITEM_PATTERN),
                    _: head_1._NonCollecting("Punctuator ;")
                }
            ]
        }
    ],
    "ExpressionStatement": [
        {
            handler(context) {
                let [collected, parser, left] = context;
                head_1.validateLineTerminator(context);
                let begin = context[6 /* begin */];
                if ((!context[7 /* tokens */] ||
                    context[15 /* inFunctionBody */] === begin)
                    && (begin >= left ||
                        context.getToken(left - 1).directive)) {
                    let expression = collected.expression;
                    if (expression
                        && expression.type === "Literal"
                        && typeof expression.value === "string"
                        && expression.raw.length > 2) {
                        collected = new head_1.NODES.Directive(collected.type, expression, expression.raw.slice(1, -1), collected.range, collected.loc);
                        if (collected.directive === "use strict") {
                            context[12 /* strict */] = true;
                        }
                    }
                }
                return collected;
            },
            precedence: 0,
            collector: [
                {
                    expression: head_1.EXPRESSION_OR_VALIDATE_STRICT_RESERVED_WORDS_PATTERN,
                    _next: head_1._Option("Punctuator ;")
                }
            ]
        }
    ],
    "ForStatement": {
        validator: [
            function (context) {
                context.wrap(16 /* inIteration */, true);
                //context.wrap(CONTEXT.bindingElement, true);
                let res = head_1.parse_next_statement(context);
                //context.unwrap();
                context.unwrap();
                return res;
            },
            null
        ],
        handler(context) {
            let [collected, parser] = context;
            let { iterator, body, range, loc } = collected;
            collected = iterator.content;
            if (collected) {
                collected.body = body;
                collected.range = range;
                collected.loc = loc;
                return collected;
            }
            else {
                parser.err(iterator);
                return [];
            }
        },
        collector: [
            {
                keyword: head_1._NonCollecting("Keyword for"),
                iterator: head_1._Or("Punctuator ()", head_1._Punctuator("(").walk(function (context, left) {
                    let parser = context[1 /* parser */];
                    context.wrap(14 /* isExpression */, true);
                    parser.parseRange(FOR_ITERATOR_TREE, context, left, head_1.is_right_parentheses, parser.isStatement);
                    context.unwrap();
                }))
            },
            ["body", STATEMANT_LIST_ITEM_AND_VALIDATE_DECLARATION_PATTERN]
        ]
    },
    "ForInStatement": { //ForStatement
    },
    "ForOfStatement": { //ForStatement
    },
    "IfStatement": {
        validator(context) {
            let [, , left, right] = context;
            if ((right - left) % 2 === 1) {
                return head_1.parse_next_statement(context);
            }
            return true;
        },
        collector: [
            {
                token: head_1._NonCollecting("Keyword if"),
                test: GROUPING_EXPRESSION,
                consequent: head_1._Mark(null),
                alternate: head_1._Mark(null)
            },
            ["consequent", STATEMANT_LIST_ITEM_AND_VALIDATE_DECLARATION_PATTERN],
            [
                "alternate", head_1._Series(head_1._NonCollecting("Keyword else"), head_1._Option(STATEMANT_LIST_ITEM_AND_VALIDATE_DECLARATION_PATTERN))
            ]
        ]
    },
    "LabeledStatement": {
        validator: [
            function (context) {
                let [, parser, left] = context;
                let label = context.getToken(left);
                let label_name = label.name;
                let label_set = context[11 /* labelSet */];
                if (label_set.indexOf(label_name) >= 0) {
                    parser.err(label);
                }
                label_set.unshift(label_name);
                let res = head_1.parse_next_statement(context);
                label_set.shift();
                return res;
            },
            null
        ],
        precedence: 0,
        collector: [
            {
                label: head_1._Series(head_1.IDENTIFIER_OR_THROW_STRICT_RESERVED_WORDS_PATTERN, head_1._NonCollecting("Punctuator :"))
            },
            ["body", head_1.STATEMANT_LIST_ITEM_PATTERN]
        ]
    },
    "SwitchStatement": [
        {
            collector: [
                {
                    token: head_1._NonCollecting("Keyword switch"),
                    discriminant: GROUPING_EXPRESSION,
                    cases: head_1._Punctuator("{").pipe(function (context, token, left) {
                        let parser = context[1 /* parser */];
                        context.wrap(17 /* inSwitch */, true);
                        let cases = parser.parseRange(parser.SYNTAX_TREE, context, left, head_1.is_right_braces).content;
                        context.unwrap();
                        let has_default = false;
                        for (const item of cases) {
                            if (item.type === "SwitchCase") {
                                if (item.test) {
                                    continue;
                                }
                                if (!has_default) {
                                    has_default = true;
                                    continue;
                                }
                            }
                            parser.err(item);
                        }
                        return cases;
                    })
                }
            ]
        },
        {
            handler([collected]) {
                collected.consequent = [];
                return collected;
            },
            precedence: 0,
            filter(content) {
                return content[17 /* inSwitch */] /*=== content[CONTEXT.tokens]*/;
            },
            collector: [
                {
                    type: head_1._Mark("SwitchCase"),
                    test: head_1._Or(head_1._Series(head_1._NonCollecting("Keyword case"), head_1.EXPRESSION_OR_THROW_STRICT_RESERVED_WORDS_PATTERN), head_1._Series(head_1._NonCollecting("Keyword default"), head_1._Mark(null))),
                    __: head_1._NonCollecting("Punctuator :")
                },
            ]
        },
        {
            handler([collected]) {
                collected.token.consequent.push(collected.consequent);
                return collected.token;
            },
            collector: {
                token: "SwitchCase",
                consequent: head_1.STATEMANT_LIST_ITEM_PATTERN
            }
        }
    ],
    "ThrowStatement": {
        handler(context) {
            let [collected, parser] = context;
            head_1.validateLineTerminator(context);
            if (collected.loc.start.line !== collected.argument.loc.start.line) {
                parser.err(collected);
            }
            return collected;
        },
        precedence: 0,
        collector: [
            {
                token: head_1._NonCollecting("Keyword throw"),
                argument: head_1.EXPRESSION_OR_THROW_STRICT_RESERVED_WORDS_PATTERN,
                _next: head_1._Option("Punctuator ;")
            }
        ]
    },
    "TryStatement": {
        collector: [
            {
                token: head_1._NonCollecting("Keyword try"),
                block: BLOCK_STATEMENT_PATTERN /*"Punctuator {}"*/,
                handler: head_1._Series(head_1._NonCollecting("Keyword catch"), "Punctuator ()", BLOCK_STATEMENT_PATTERN, head_1._Mark(function (context) {
                    let [collected, parser] = context;
                    let [param, body] = collected.handler;
                    let params = expression_1.parse_params(context, param.content);
                    if (params.length !== 1) {
                        parser.err(param);
                    }
                    collected.handler = {
                        type: "CatchClause",
                        param: params[0],
                        body
                    };
                })),
                finalizer: head_1._Mark(null)
            },
            ["finalizer", head_1._Series(head_1._NonCollecting("Keyword finally"), BLOCK_STATEMENT_PATTERN)],
            ["handler", head_1._Mark(null)],
        ]
    },
    "WhileStatement": {
        validator: "ForStatement",
        /*handler(context: Context) {
            let [collected, parser] = context;
            //collected.test = parser.parseExpression(context, collected.test);
            return collected;
        },*/
        collector: [
            {
                token: head_1._NonCollecting("Keyword while"),
                test: GROUPING_EXPRESSION
            },
            ["body", STATEMANT_LIST_ITEM_AND_VALIDATE_DECLARATION_PATTERN]
        ]
    },
    "WithStatement": {
        validator: [
            head_1.parse_next_statement,
            null
        ],
        handler(context) {
            let [collected, parser] = context;
            if (context[12 /* strict */]) {
                parser.err(collected);
            }
            //collected.object = parser.parseExpression(context, collected.object);
            return collected;
        },
        collector: [
            {
                token: "Keyword with",
                object: "Punctuator ()"
            },
            ["body", STATEMANT_LIST_ITEM_AND_VALIDATE_DECLARATION_PATTERN]
        ]
    }
};
head_1.async_getter.get("Statements", function (statements) {
    for (const type_name in statements) {
        if (type_name) {
            type_name && (head_1.TYPE_ALIAS[type_name] = [type_name, "[Statement]"]);
        }
    }
});
let ForIterator = {
    //VariableDeclaration,
    "": {
        handler(context) {
            return head_1.reinterpretIdentifierAsKeyword(context[0 /* collected */].token);
        },
        collector: {
            _prev: "" /* BOUNDARY */,
            token: "Identifier let"
        }
    },
    VariableDeclaration: {
        handler: [
            function (context) {
                let [collected] = context;
                let { kind, declarations } = collected;
                let [id, init] = declarations;
                collected.declarations = [declaration_1.get_variable_declarator(context, id.type === "Identifier"
                        ? id
                        : (id.value === "[]"
                            ? expression_1.parseArrayPattern(context, id)
                            : expression_1.parseObjectPattern(context, id)), init, [id.range[0], (init || id).range[1]], {
                        start: id.loc.start,
                        end: (init || id).loc.end
                    })];
                if (kind.type === "VariableDeclaration") {
                    collected.declarations.unshift(...kind.declarations);
                    collected.kind = kind.kind;
                }
                else {
                    collected.kind = kind.value;
                }
                return collected;
            }
        ],
        collector: [
            {
                kind: head_1._Or(head_1._Series("VariableDeclaration", head_1._NonCollecting("Punctuator ,")), head_1._Series(head_1._NonCollecting("" /* BOUNDARY */), head_1._Keyword("let", "var", "const"))),
                declarations: head_1._Series(head_1._Or("Identifier", head_1._Or("Punctuator [] {}")), head_1._Or(head_1._Series(head_1._NonCollecting("Punctuator ="), "[Expression]"), head_1._Mark(null))),
                _next: head_1._NonCapturing("Punctuator ; ,", head_1._Identifier("of"), head_1._Keyword("of"), head_1._Keyword("in"))
            }
        ]
    },
    ForStatement: [
        {
            collector: [
                {
                    init: head_1._Series(head_1._NonCollecting("" /* BOUNDARY */), head_1._Or(head_1._Pattern("VariableDeclaration").pipe(function (context, node) {
                        if (node.kind === "const") {
                            context[1 /* parser */].err(node);
                        }
                    }), head_1.EXPRESSION_OR_THROW_STRICT_RESERVED_WORDS_PATTERN, head_1._Mark(null)), //EXPRESSION_OR_VALIDATE_STRICT_RESERVED_WORDS
                    head_1._NonCollecting("Punctuator ;"))
                    //)
                    ,
                    test: head_1._Series(head_1._Or(head_1.EXPRESSION_OR_VALIDATE_STRICT_RESERVED_WORDS_PATTERN, head_1._Mark(null)), head_1._NonCollecting("Punctuator ;")),
                    update: head_1._Series(head_1._Or(head_1.EXPRESSION_OR_VALIDATE_STRICT_RESERVED_WORDS_PATTERN, head_1._Mark(null)), head_1._NonCapturing("Punctuator )")),
                    body: head_1._Mark(null)
                }
            ]
        },
        {
            validator(context) {
                let right = context[3 /* right */];
                return right >= context.tokens.length - 1;
            },
            precedence: 1.5,
            collector: [
                {
                    type: head_1._Mark("ForOfStatement"),
                    _prev: head_1._NonCollecting("" /* BOUNDARY */),
                    left: head_1._Or("VariableDeclaration", head_1._Or("Identifier", head_1._Punctuator("()", "[]", "{}")).pipe(function (context, node) {
                        let parser = context[1 /* parser */];
                        let target = node;
                        if (node.value === "()") {
                            target = head_1.get_inner_group(node);
                            if (target.content.length > 1) {
                                parser.err(...target.content.slice(1));
                            }
                            target = target.content[0] || node;
                        }
                        if (target.type === "Identifier") {
                            head_1.validateAssignment(context, target);
                            return target;
                        }
                        else {
                            switch (target.value) {
                                case "[]":
                                    return new Grouping(expression_1.parseArrayPattern(context, target), node);
                                case "{}":
                                    return new Grouping(expression_1.parseObjectPattern(context, target), node);
                                default:
                                    context[1 /* parser */].err(node);
                                    return null;
                            }
                        }
                    })),
                    token: head_1._NonCollecting(head_1._Identifier("of").walk(function (context, index) {
                        context.tokens[index] = head_1.reinterpretIdentifierAsKeyword(context.tokens[index]);
                    }), head_1._Keyword("of")),
                    right: head_1._Option(head_1._Series(head_1.EXPRESSION_OR_VALIDATE_STRICT_RESERVED_WORDS_PATTERN, head_1._Option(head_1._NonCapturing("Punctuator )")))),
                    body: head_1._Mark(null),
                },
                [
                    ["type", head_1._Mark("ForInStatement")],
                    ["token", head_1._NonCollecting("Keyword in")],
                    ["each", head_1._Mark(false)]
                ]
            ]
        }
    ]
};
let FOR_ITERATOR_TREE;
head_1.async_getter.get("EXPRESSION_TREE", function (EXPRESSION_TREE) {
    FOR_ITERATOR_TREE = head_1.createMatchTree(ForIterator, EXPRESSION_TREE);
});
exports.default = Statements;


/***/ }),

/***/ "./js/Dison/js/tokenizer.ts":
/*!**********************************!*\
  !*** ./js/Dison/js/tokenizer.ts ***!
  \**********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const character_1 = __webpack_require__(/*! ./character */ "./js/Dison/js/character.ts");
const interfaces_1 = __webpack_require__(/*! ./interfaces */ "./js/Dison/js/interfaces.ts");
class default_1 extends character_1.default {
    constructor(options) {
        super();
        this.token_hooks = {};
        this.save_comments = true;
        for (const key in options) {
            this[key] = options[key];
        }
        //console.log(333, TOKEN_TYPES,TOKEN_TYPE_MAP);
    }
    err(...args) {
        //debugger;
        this.error_logs.push.apply(this.error_logs, arguments);
    }
    init(input) {
        this.line_number = 1;
        this.line_start = 0;
        this.index = 0;
        this.input = input;
        this.end = this.input.length;
        this.error_logs = [];
        this.tokens = [];
        this.terminator_stack = [];
        this.curly_stack = [];
    }
    tokenize(input) {
        this.init(input);
        while (this.nextToken())
            ;
        return this.tokens;
    }
    nextToken() {
        while (this.index < this.end
            && (this.terminator_stack.length === 0
                || this.tokens.length === 0
                || !this.terminator_stack[0](this.tokens[this.tokens.length - 1]))) {
            let token = this._nextToken();
            if (token) {
                let hook = this.token_hooks[token.type];
                hook && (token = hook(token, this));
                if (this.save_comments || token.type !== this.TYPE_ENUMS.Comments) {
                    this.tokens.push(token);
                    return token;
                }
            }
            else if (this.index < this.end) {
                this.err(this.createToken("error", [this.index, ++this.index]));
            }
        }
    }
    createToken(type, range, value = this.input.slice(range[0], range[1]), start = {
        line: this.line_number,
        column: range[0] - this.line_start
    }, end = {
        line: this.line_number,
        column: range[1] - this.line_start
    }) {
        return {
            type: type,
            value,
            range,
            loc: {
                start, end
            }
        };
    }
    match(node) {
        let start = this.index, end = this.index;
        let prev_node;
        do {
            prev_node = node;
            node = prev_node[this.input[end++]];
        } while (node);
        let target = prev_node[" END" /* END */];
        if (target && (target.type || (target = target(this)))) {
            this.index = end - 1;
            return target.scanner ?
                target.scanner(this, start) :
                this.createToken(this.TYPE_ENUMS[target.type] || target.type, [start, this.index], target.key);
        }
    }
    nextIdentifier() {
        let length = this.inIdentifierStart();
        let token;
        if (length > 0) {
            let start = this.index;
            let str = "";
            do {
                str += length === 1 ? this.input[this.index] : this._volatility;
                this.index += length;
                length = this.inIdentifierPart();
            } while (length > 0);
            let type = this.TOKEN_TYPE_MAPPERS[" " + str];
            token = this.createToken(this.TYPE_ENUMS[type || "Identifier"], [start, this.index]);
            this._volatility = str;
            if (type && str.length !== this.index - start) {
                this.err(token);
            }
        }
        if (length < 0) {
            this.err(this.createToken("error", [this.index, this.index -= length]));
        }
        return token;
    }
    isPrimaryExprStart() {
        if (this.tokens.length) {
            let last_node = this.tokens[this.tokens.length - 1];
            return last_node.type === this.TYPE_ENUMS.Keyword
                || last_node.type === this.TYPE_ENUMS.Punctuator && last_node.content === undefined;
        }
        else {
            return true;
        }
    }
    nextPunctuator() {
        return this.match(!this.isPrimaryExprStart() ? this.PUNCTUATORS_TREE : this.PRIMARY_EXPR_START_PUNCTUATORS_TREE);
    }
    nextNumeric() {
        let start = this.index;
        let ch = this.input.charCodeAt(this.index);
        let number;
        let flags = 4 /* DECIMAL */;
        let _get_token = () => {
            this._volatility = flags & 2 /* OCTAL */ ? (flags & ~4 /* DECIMAL */) : flags;
            return this.createToken(this.TYPE_ENUMS.Numeric, [start, this.index]);
        };
        let _get_error = (message = "Invalid or unexpected token") => {
            let error = _get_token();
            error.error = message;
            error.input = this.input.slice(start, this.index + 1);
            this.err(error);
            return error;
        };
        let decimalValue = this.decimalValue;
        switch (ch) {
            case 0x2e: //"."
                if (decimalValue(this.input.charCodeAt(this.index + 1)) >= 0) {
                    this.index += 1;
                    flags |= 32 /* FLOAT */;
                    break;
                }
                else {
                    return;
                }
            case 0x30: //"0"
                flags = interfaces_1.NUMERIC_KEYWORD_MAPPINGS[this.input[++this.index]];
                if (!flags) {
                    number = decimalValue(this.input.charCodeAt(this.index));
                    if (number >= 0) {
                        flags = 4 /* DECIMAL */;
                        number < 8 && (flags |= 2 /* OCTAL */);
                    }
                    else if (!this.inIdentifierStart()) {
                        flags = 4 /* DECIMAL */;
                        return _get_token();
                    }
                    else {
                        return _get_error();
                    }
                }
                break;
            default:
                if (decimalValue(ch) < 0) {
                    return;
                }
        }
        if (flags & 4 /* DECIMAL */) {
            while ((ch = this.input.charCodeAt(++this.index))) {
                number = decimalValue(ch);
                if (number >= 0) {
                    number < 8 || (flags &= ~2 /* OCTAL */);
                    continue;
                }
                switch (ch) {
                    case 0x65: //"e"
                    case 0x45: //"E"
                        if (!(flags & (64 /* E */ | 2 /* OCTAL */))) {
                            flags |= 64 /* E */;
                            ch = this.input.charCodeAt(this.index + 1);
                            if (ch === 0x2b || ch === 0x2d) { //+ -
                                this.index += 1;
                            }
                            continue;
                        }
                        else {
                            return _get_error();
                        }
                    case 0x2e: //"."
                        if (!(flags & (32 /* FLOAT */ | 64 /* E */ | 2 /* OCTAL */))) {
                            flags |= 32 /* FLOAT */;
                            continue;
                        }
                    default:
                        return this.inIdentifierStart()
                            ? _get_error()
                            : _get_token();
                }
            }
            return _get_token();
        }
        else {
            let test = flags & 8 /* HEX */
                ? this.hexValue : (flags & 1 /* BINARY */
                ? this.binaryValue
                : this.octalValue);
            while (test(this.input.charCodeAt(++this.index)) >= 0)
                ;
            return this.index > start + 3 && !this.inIdentifierStart()
                ? _get_token()
                : _get_error();
        }
    }
    skipNonsenses() {
        for (let cp; this.index < this.end; this.index++) {
            cp = this.input.charCodeAt(this.index);
            switch (true) {
                case this.isWhiteSpace(cp):
                    break;
                case this.isLineTerminator(cp):
                    this.line_number++;
                    this.line_start = this.index + 1;
                    break;
                default:
                    return true;
            }
        }
    }
    _nextToken() {
        return this.skipNonsenses() && (this.nextIdentifier() ||
            this.nextNumeric() ||
            this.nextPunctuator());
    }
}
exports.default = default_1;


/***/ }),

/***/ "./js/core/converter/astgen.ts":
/*!*************************************!*\
  !*** ./js/core/converter/astgen.ts ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EMPTY_STATEMENT = exports.ASSIGNMENT_STATEMENT = exports.EXPRESSION_STATEMENT = exports.ARRAY_EXPRESSION = exports.CALL_EXPRESSION = exports.CALL_STATEMENT = exports.ASSIGNMENT_EXPRESSION = exports.VARIABLE_DECLARATION = exports.VARABLE_DECLARATOR = exports.FUNCTION_EXPRESSION = exports.BLOCK_STATEMENT = exports.MEMBER_EXPRESSION = exports.IDENTIFIER = exports.LITERAL = exports.RETURN_STATEMENT = exports.SEQUENCE_EXPRESSION = void 0;
/*
function get_start_loc(node: Node | Array<Node>) {
    let start: Position;
    if (node instanceof Array) {
        for (let i = 0; i < node.length; i++) {
            if (start = get_start_loc(node[i])) {
                return start;
            }
        }
    } else if (node && node.loc) {
        return node.loc.start;
    }
}
function get_end_loc(node: Node | Array<Node>) {
    let end: Position;
    if (node instanceof Array) {
        for (let i = node.length - 1; i >= 0; i--) {
            if (end = get_end_loc(node[i])) {
                return end;
            }
        }
    } else if (node && node.loc) {
        return node.loc.end;
    }
}
function init_loc<T = Node>(node: T | any, ...nodes: Array<Node>): T {
    if (nodes.length) {
        let start = get_start_loc(nodes);
        let end = get_end_loc(nodes);
        if (start && end) {
            node.loc = { start, end };
        }
    }
    return node;
}*/
function EMPTY_STATEMENT() {
    return {
        type: "EmptyStatement"
    };
}
exports.EMPTY_STATEMENT = EMPTY_STATEMENT;
function SEQUENCE_EXPRESSION(...args) {
    return {
        type: "SequenceExpression",
        expressions: args
    };
}
exports.SEQUENCE_EXPRESSION = SEQUENCE_EXPRESSION;
function RETURN_STATEMENT(argument) {
    return {
        type: "ReturnStatement",
        argument: argument
    };
}
exports.RETURN_STATEMENT = RETURN_STATEMENT;
function LITERAL(value) {
    return {
        type: "Literal",
        value: value,
        raw: typeof value === "string" ? `"${value}"` : ("" + value)
    };
}
exports.LITERAL = LITERAL;
function IDENTIFIER(name) {
    return {
        type: "Identifier",
        name: name
    };
}
exports.IDENTIFIER = IDENTIFIER;
function MEMBER_EXPRESSION(object, property, computed = false) {
    return {
        type: "MemberExpression",
        computed,
        object,
        property
    };
}
exports.MEMBER_EXPRESSION = MEMBER_EXPRESSION;
function BLOCK_STATEMENT(body) {
    if (!(body instanceof Array)) {
        if (body.type === "BlockStatement") {
            return body;
        }
        body = [body];
    }
    return {
        type: "BlockStatement",
        body: body
    };
}
exports.BLOCK_STATEMENT = BLOCK_STATEMENT;
function FUNCTION_EXPRESSION(body, params = []) {
    return {
        type: "FunctionExpression",
        id: null,
        params,
        body: BLOCK_STATEMENT(body),
        generator: false,
        expression: false,
        async: false
    };
}
exports.FUNCTION_EXPRESSION = FUNCTION_EXPRESSION;
function VARABLE_DECLARATOR(id, init = null) {
    return {
        type: "VariableDeclarator",
        id: typeof id === "string" ? IDENTIFIER(id) : id,
        init: init
    };
}
exports.VARABLE_DECLARATOR = VARABLE_DECLARATOR;
function VARIABLE_DECLARATION(declarations, kind = "var") {
    return {
        type: "VariableDeclaration",
        declarations,
        kind
    };
}
exports.VARIABLE_DECLARATION = VARIABLE_DECLARATION;
function ASSIGNMENT_EXPRESSION(left, right) {
    return {
        type: "AssignmentExpression",
        operator: "=",
        left: left,
        right: right
    };
}
exports.ASSIGNMENT_EXPRESSION = ASSIGNMENT_EXPRESSION;
function CALL_STATEMENT(callee, ...args) {
    return EXPRESSION_STATEMENT({
        type: "CallExpression",
        callee: callee,
        arguments: args
    });
}
exports.CALL_STATEMENT = CALL_STATEMENT;
function CALL_EXPRESSION(callee, ...args) {
    return {
        type: "CallExpression",
        callee: callee,
        arguments: args
    };
}
exports.CALL_EXPRESSION = CALL_EXPRESSION;
function ARRAY_EXPRESSION(...elements) {
    return {
        type: "ArrayExpression",
        elements
    };
}
exports.ARRAY_EXPRESSION = ARRAY_EXPRESSION;
function EXPRESSION_STATEMENT(expression) {
    return {
        type: "ExpressionStatement",
        expression
    };
}
exports.EXPRESSION_STATEMENT = EXPRESSION_STATEMENT;
function ASSIGNMENT_STATEMENT(left, right) {
    return EXPRESSION_STATEMENT(ASSIGNMENT_EXPRESSION(left, right));
}
exports.ASSIGNMENT_STATEMENT = ASSIGNMENT_STATEMENT;


/***/ }),

/***/ "./js/core/converter/index.ts":
/*!************************************!*\
  !*** ./js/core/converter/index.ts ***!
  \************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.runtime = exports.convert = void 0;
const proxy_1 = __webpack_require__(/*! ./proxy */ "./js/core/converter/proxy.ts");
const astgen_1 = __webpack_require__(/*! ./astgen */ "./js/core/converter/astgen.ts");
function convert(ast, external_declarations) {
    let used_declarators;
    if (external_declarations) {
        used_declarators = new Set();
        proxy_1.ProxyNode.isExternalDeclaration = function (id) {
            if (external_declarations.includes(id)) {
                used_declarators.add(id);
                return true;
            }
        };
    }
    let res = new proxy_1.ProxyNode(ast).node;
    proxy_1.ProxyNode.isExternalDeclaration = null;
    return external_declarations ? [res, Array.from(used_declarators)] : res;
}
exports.convert = convert;
let id = astgen_1.IDENTIFIER("_webx");
const runtime = {
    type: "VariableDeclaration",
    kind: "var",
    declarations: [
        {
            type: "VariableDeclarator",
            id,
            init: {
                type: "MemberExpression",
                object: {
                    type: "Identifier",
                    name: "window"
                },
                property: id,
                computed: false
            }
        },
        {
            type: "VariableDeclarator",
            id: {
                type: "Identifier",
                name: "_webx_t"
            },
            init: null
        },
        {
            type: "VariableDeclarator",
            id: {
                type: "Identifier",
                name: "_webx_set_attribute"
            },
            init: {
                type: "MemberExpression",
                object: id,
                property: {
                    type: "Identifier",
                    name: "setAttribute"
                },
                computed: false
            }
        },
        {
            type: "VariableDeclarator",
            id: {
                type: "Identifier",
                name: "_webx_add_event_listener"
            },
            init: {
                type: "MemberExpression",
                object: id,
                property: {
                    type: "Identifier",
                    name: "addEventListener"
                },
                computed: false
            }
        },
        {
            type: "VariableDeclarator",
            id: {
                type: "Identifier",
                name: "_webx_set_nodes"
            },
            init: {
                type: "MemberExpression",
                object: id,
                property: {
                    type: "Identifier",
                    name: "setNodes"
                },
                computed: false
            }
        },
        {
            type: "VariableDeclarator",
            id: {
                type: "Identifier",
                name: "_webx_next_nodes"
            },
            init: {
                type: "MemberExpression",
                object: id,
                property: {
                    type: "Identifier",
                    name: "nextNodes"
                },
                computed: false
            }
        },
        {
            type: "VariableDeclarator",
            id: {
                type: "Identifier",
                name: "_webx_create_element"
            },
            init: {
                type: "MemberExpression",
                object: id,
                property: {
                    type: "Identifier",
                    name: "createElement"
                },
                computed: false
            }
        },
        {
            type: "VariableDeclarator",
            id: {
                type: "Identifier",
                name: "_webx_create_text_node"
            },
            init: {
                type: "MemberExpression",
                object: id,
                property: {
                    type: "Identifier",
                    name: "createTextNode"
                },
                computed: false
            }
        },
        {
            type: "VariableDeclarator",
            id: {
                type: "Identifier",
                name: "_webx_run_in_action"
            },
            init: {
                type: "MemberExpression",
                object: id,
                property: {
                    type: "Identifier",
                    name: "runInAction"
                },
                computed: false
            }
        },
        {
            type: "VariableDeclarator",
            id: {
                type: "Identifier",
                name: "_webx_autorun"
            },
            init: {
                type: "MemberExpression",
                object: id,
                property: {
                    type: "Identifier",
                    name: "autorun"
                },
                computed: false
            }
        },
        {
            type: "VariableDeclarator",
            id: {
                type: "Identifier",
                name: "_webx_action"
            },
            init: {
                type: "MemberExpression",
                object: id,
                property: {
                    type: "Identifier",
                    name: "action"
                },
                computed: false
            }
        },
        {
            type: "VariableDeclarator",
            id: {
                type: "Identifier",
                name: "_webx_prevent_collect"
            },
            init: {
                type: "MemberExpression",
                object: id,
                property: {
                    type: "Identifier",
                    name: "prevent"
                },
                computed: false
            }
        },
        {
            type: "VariableDeclarator",
            id: {
                type: "Identifier",
                name: "_webx_observable"
            },
            init: {
                type: "MemberExpression",
                object: id,
                property: {
                    type: "Identifier",
                    name: "observable"
                },
                computed: false
            }
        },
        {
            type: "VariableDeclarator",
            id: {
                type: "Identifier",
                name: "_webx_next_child"
            },
            init: {
                type: "MemberExpression",
                object: id,
                property: {
                    type: "Identifier",
                    name: "nextChild"
                },
                computed: false
            }
        },
        {
            type: "VariableDeclarator",
            id: {
                type: "Identifier",
                name: "_webx_next_sibling"
            },
            init: {
                type: "MemberExpression",
                object: id,
                property: {
                    type: "Identifier",
                    name: "nextSibling"
                },
                computed: false
            }
        },
        {
            type: "VariableDeclarator",
            id: {
                type: "Identifier",
                name: "_webx_next_if_sibling"
            },
            init: {
                type: "MemberExpression",
                object: id,
                property: {
                    type: "Identifier",
                    name: "nextIfSibling"
                },
                computed: false
            }
        },
        {
            type: "VariableDeclarator",
            id: {
                type: "Identifier",
                name: "_webx_next_entry_sibling"
            },
            init: {
                type: "MemberExpression",
                object: id,
                property: {
                    type: "Identifier",
                    name: "nextEntrySibling"
                },
                computed: false
            }
        },
        {
            type: "VariableDeclarator",
            id: {
                type: "Identifier",
                name: "_webx_remove_all_sibling"
            },
            init: {
                type: "MemberExpression",
                object: id,
                property: {
                    type: "Identifier",
                    name: "removeAllSibling"
                },
                computed: false
            }
        },
        {
            type: "VariableDeclarator",
            id: {
                type: "Identifier",
                name: "_webx_entry_statement"
            },
            init: {
                type: "MemberExpression",
                object: id,
                property: {
                    type: "Identifier",
                    name: "entryStatement"
                },
                computed: false
            }
        },
        {
            type: "VariableDeclarator",
            id: {
                type: "Identifier",
                name: "_webx_create_component"
            },
            init: {
                type: "MemberExpression",
                object: id,
                property: {
                    type: "Identifier",
                    name: "createComponent"
                },
                computed: false
            }
        }
    ]
};
exports.runtime = runtime;
class Converter {
    constructor() {
        this.convert = convert;
    }
}
exports.default = Converter;
;
/*
export const runtime = `
var _webx = window._webx,
_webx_t,
_webx_set_attribute = _webx.setAttribute,
_webx_add_event_listener = _webx.addEventListener,
_webx_set_nodes = _webx.setNodes,
_webx_next_nodes = _webx.nextNodes,
_webx_create_element = _webx.createElement,
_webx_create_text_node = _webx.createTextNode,

_webx_run_in_action = _webx.runInAction,
_webx_autorun = _webx.autorun,
_webx_action = _webx.action,
_webx_prevent_collect = _webx.prevent,
_webx_observable = _webx.observable,
_webx_next_child = _webx.nextChild,
_webx_next_sibling = _webx.nextSibling,
_webx_next_if_sibling = _webx.nextIfSibling,
_webx_next_entry_sibling = _webx.nextEntrySibling,
_webx_remove_all_sibling = _webx.removeAllSibling,

_webx_entry_statement = _webx.entryStatement;
`;*/


/***/ }),

/***/ "./js/core/converter/nodes.ts":
/*!************************************!*\
  !*** ./js/core/converter/nodes.ts ***!
  \************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BINDING_DECLARATION = exports.SET_ATTRIBUTE = exports.NEXT_BLOCK_SIBLING = exports.NEXT_CHILD_STATEMENT = void 0;
const parser_1 = __webpack_require__(/*! ../parser */ "./js/core/parser/index.ts");
const operations_1 = __webpack_require__(/*! ./operations */ "./js/core/converter/operations.ts");
const astgen_1 = __webpack_require__(/*! ./astgen */ "./js/core/converter/astgen.ts");
function NEXT_NODES(expr, depth, is_reactive) {
    let args = [
        astgen_1.IDENTIFIER("_webx_next_nodes"),
        astgen_1.IDENTIFIER("_webx_t_sibling" + depth),
        expr
    ];
    is_reactive && args.push(astgen_1.LITERAL(1));
    return astgen_1.CALL_STATEMENT.apply(null, args);
}
function SET_NODES(expr, depth) {
    return astgen_1.CALL_STATEMENT(astgen_1.IDENTIFIER("_webx_set_nodes"), astgen_1.IDENTIFIER("_webx_t_sibling" + depth), expr);
}
function NEXT_SIBLING(curr, prev = curr - 1) {
    return astgen_1.VARIABLE_DECLARATION([
        astgen_1.VARABLE_DECLARATOR("_webx_t_sibling" + curr, prev >= 0 ?
            astgen_1.CALL_EXPRESSION(astgen_1.IDENTIFIER("_webx_next_sibling"), astgen_1.IDENTIFIER("_webx_t_sibling" + prev))
            : NEXT_CHILD())
    ], "let");
}
let child_count = 0;
function NEXT_NEXT_ENTRY_SIBLING_STATEMENT(node, depth) {
    let { object, params, body } = node;
    body = body.type === "BlockStatement" ? body.body : [body];
    let keys = ["v", "k", "i", "t"];
    let declarations = [];
    let id = astgen_1.IDENTIFIER(`_webx$_D${depth}_entry`);
    for (let i = 0; i < params.length; i++) {
        let param = params[i];
        if (!param) {
            continue;
        }
        switch (param.type) {
            case "RestElement":
                let elements = [];
                for (; i < params.length; i++) {
                    keys[i] && elements.push(astgen_1.MEMBER_EXPRESSION(id, astgen_1.IDENTIFIER(keys[i])));
                }
                declarations.push(astgen_1.VARABLE_DECLARATOR(param, astgen_1.ARRAY_EXPRESSION(...elements)));
                break;
            case "AssignmentPattern":
                param = param.left;
            default:
                declarations.push(astgen_1.VARABLE_DECLARATOR(param, astgen_1.MEMBER_EXPRESSION(id, astgen_1.IDENTIFIER(keys[i]))));
                break;
        }
    }
    /*
    let _child_count = child_count;
    child_count = 0;*/
    body = NEXT_BLOCK_SIBLING(body, depth + 2, false, false);
    body.type !== "BlockStatement" && (body = astgen_1.BLOCK_STATEMENT(body));
    /**
     * _webx_next_entry_sibling 方法需要每个循环体有单独的根
     */
    let prop_depth = depth;
    if (child_count > 1) {
        child_count = 1;
        body.body.unshift(NEXT_SIBLING(depth + 1));
    }
    else {
        prop_depth += 1;
    }
    declarations.length && body.body.unshift(astgen_1.VARIABLE_DECLARATION(declarations));
    let res = astgen_1.CALL_STATEMENT(astgen_1.IDENTIFIER("_webx_next_entry_sibling"), child_count ? astgen_1.IDENTIFIER("_webx_t_sibling" + prop_depth) : astgen_1.LITERAL(0), operations_1._AutoRun(astgen_1.FUNCTION_EXPRESSION(astgen_1.RETURN_STATEMENT(object))), operations_1._AutoRun(astgen_1.FUNCTION_EXPRESSION(body, [id])));
    if (child_count) {
        res = astgen_1.BLOCK_STATEMENT([NEXT_SIBLING(prop_depth, depth - 1), res]);
    }
    //child_count += _child_count;
    return res;
}
function NEXT_FOR_EACH_SIBLING_STATEMENT(node, depth) {
    let { left, right, body, type } = node;
    if (left.type !== "VariableDeclaration" || left.kind !== "let") {
        return;
    }
    let id = left.declarations[0].id;
    return NEXT_NEXT_ENTRY_SIBLING_STATEMENT({
        type: "EntryStatement",
        object: right,
        params: type === "ForOfStatement" ? [id] : [null, id],
        body
    }, depth);
}
function NEXT_CHILD(getter, is_reactive) {
    let args = [
        astgen_1.IDENTIFIER("_webx_next_child"),
        astgen_1.IDENTIFIER("_webx_el")
    ];
    if (getter) {
        if (is_reactive) {
            args.push(operations_1._AutoRun(getter));
            args.push(astgen_1.LITERAL(1));
            /*args.push(_AutoRun(FUNCTION_EXPRESSION(RETURN_STATEMENT(getter))));
            args.push(LITERAL(1));*/
        }
        else {
            args.push(getter);
        }
    }
    return astgen_1.CALL_EXPRESSION.apply(null, args);
}
function NEXT_CHILD_STATEMENT(getter, is_reactive) {
    return astgen_1.EXPRESSION_STATEMENT(NEXT_CHILD(getter, is_reactive));
}
exports.NEXT_CHILD_STATEMENT = NEXT_CHILD_STATEMENT;
function NEXT_BLOCK_SIBLING(nodes, depth, autorun = true, binding = true) {
    child_count = 0;
    if (!nodes.length) {
        return astgen_1.EMPTY_STATEMENT(); //BLOCK_STATEMENT([]);
    }
    let res;
    let _child_count = 0;
    let reactive_nodes = [];
    let _binding = binding && nodes.length === 1;
    let next_step = autorun ? depth + 1 : depth;
    for (let node of nodes) {
        switch (node.type) {
            case "BindingDeclaration":
                reactive_nodes.push(...BINDING_DECLARATION(node.declaration, next_step));
                break;
            default:
                reactive_nodes.push(polyfill(node, next_step, _binding));
                break;
        }
        child_count && (_child_count += 1);
    }
    if (autorun && _child_count) {
        if (_child_count > 1) {
            reactive_nodes.unshift(astgen_1.CALL_STATEMENT(astgen_1.IDENTIFIER("_webx_remove_all_sibling"), astgen_1.IDENTIFIER("_webx_t_sibling" + depth)));
            reactive_nodes = [operations_1.AUTORUN_STATEMENT(reactive_nodes)];
        }
        reactive_nodes.unshift(NEXT_SIBLING(depth));
        res = astgen_1.BLOCK_STATEMENT(reactive_nodes);
    }
    else {
        res = reactive_nodes.length === 1
            ? reactive_nodes[0]
            : astgen_1.BLOCK_STATEMENT(reactive_nodes);
        //autorun && !binding && (res = AUTORUN_STATEMENT(res));
    }
    child_count = _child_count;
    return res;
}
exports.NEXT_BLOCK_SIBLING = NEXT_BLOCK_SIBLING;
function polyfill(node, depth, binding) {
    child_count = 0;
    let _child_count = 0;
    switch (node.type) {
        case "ExpressionStatement":
            let expression = node.expression;
            let type = expression.type;
            if (type === "Literal"
                || type === "Element") {
                child_count += 1;
                return NEXT_NODES(expression, depth - 1, type === "Element");
            }
            else if (binding
                || type === "Identifier"
                || type === "TemplateLiteral") {
                child_count += 1;
                let res = operations_1.AUTORUN_STATEMENT(SET_NODES(expression, binding ? depth - 1 : depth));
                return binding
                    ? res
                    : astgen_1.BLOCK_STATEMENT([NEXT_SIBLING(depth), res]);
            }
            return node;
        case "SwitchStatement":
            for (let _case of node.cases) {
                _case.consequent = _case.consequent.map((statement) => {
                    let res = polyfill(statement, depth + 1, false);
                    _child_count += child_count;
                    child_count = 0;
                    return res;
                });
            }
            break;
        case "BlockStatement":
            return NEXT_BLOCK_SIBLING(node.body, depth, false, false);
        case "BindingStatement":
            if (node.value === "@autorun") {
                return node;
            }
            return NEXT_BLOCK_SIBLING([node.statement], depth, true, true);
        case "EntryStatement":
            return NEXT_NEXT_ENTRY_SIBLING_STATEMENT(node, depth);
        case "PreventStatement":
            return node;
        case "IfStatement":
            return NEXT_IF_SIBLING_STATEMENT(node, depth);
        case "ForInStatement":
        case "ForOfStatement":
            let res = NEXT_FOR_EACH_SIBLING_STATEMENT(node, depth);
            if (res) {
                return res;
            }
        default:
            if (parser_1.isStatement(node)) {
                for (let key in node) {
                    let value = node[key];
                    if (value && value.type) {
                        if (value.type === "BlockStatement") {
                            node[key] = NEXT_BLOCK_SIBLING(value.body, depth + 1, false, false);
                            _child_count += child_count;
                        }
                        else if (parser_1.isStatement(value)) {
                            node[key] = NEXT_BLOCK_SIBLING([value], depth + 1, false, false);
                            _child_count += child_count;
                        }
                    }
                }
            }
            break;
    }
    if (_child_count) {
        child_count = 1;
        node = astgen_1.BLOCK_STATEMENT([
            NEXT_SIBLING(depth),
            operations_1.AUTORUN_STATEMENT([
                astgen_1.CALL_STATEMENT(astgen_1.IDENTIFIER("_webx_remove_all_sibling"), astgen_1.IDENTIFIER("_webx_t_sibling" + depth)),
                node
            ])
        ]);
    }
    return node;
}
function NEXT_IF_SIBLING_STATEMENT(node, depth) {
    let test = node.test;
    let consequent = node.consequent;
    let alternate = node.alternate;
    let is_binding = false;
    consequent = consequent.type === "BlockStatement" ? consequent.body : [consequent];
    consequent = NEXT_BLOCK_SIBLING(consequent, depth + 1, true, false);
    child_count && (is_binding = true);
    if (alternate) {
        alternate = alternate.type === "BlockStatement" ? alternate.body : [alternate];
        alternate = NEXT_BLOCK_SIBLING(alternate, depth + 1, true, false);
        child_count && (is_binding = true);
    }
    if (is_binding) {
        child_count = 1;
        let args = [
            astgen_1.IDENTIFIER("_webx_next_if_sibling"),
            astgen_1.IDENTIFIER("_webx_t_sibling" + (depth)),
            operations_1._AutoRun(astgen_1.FUNCTION_EXPRESSION(astgen_1.RETURN_STATEMENT(test))),
            operations_1._AutoRun(astgen_1.FUNCTION_EXPRESSION(consequent)),
        ];
        alternate && args.push(operations_1._AutoRun(astgen_1.FUNCTION_EXPRESSION(alternate)));
        node = astgen_1.BLOCK_STATEMENT([
            NEXT_SIBLING(depth),
            astgen_1.CALL_STATEMENT.apply(null, args)
        ]);
    }
    return node;
}
function BINDING_DECLARATION(node, depth) {
    let res = [];
    for (let declaration of operations_1.SPLIT_VARIABLE_DECLARATION(node)) {
        res.push(declaration);
        res.push(NEXT_BLOCK_SIBLING([{
                type: "BindingStatement",
                value: "@:",
                statement: astgen_1.EXPRESSION_STATEMENT(declaration.declarations[0].id)
            }], depth, false, false));
    }
    return res;
}
exports.BINDING_DECLARATION = BINDING_DECLARATION;
function SET_ATTRIBUTE(name, value, is_literal) {
    let is_bind = value.type === "BindingExpression";
    is_bind && (value = value.expression);
    let res = astgen_1.CALL_EXPRESSION(astgen_1.IDENTIFIER("_webx_set_attribute"), astgen_1.IDENTIFIER("_webx_el"), astgen_1.LITERAL(name), value);
    is_literal && res.arguments.push(astgen_1.LITERAL(1));
    is_bind && (res = operations_1.AUTORUN(astgen_1.EXPRESSION_STATEMENT(res)));
    return astgen_1.EXPRESSION_STATEMENT(res);
}
exports.SET_ATTRIBUTE = SET_ATTRIBUTE;


/***/ }),

/***/ "./js/core/converter/operations.ts":
/*!*****************************************!*\
  !*** ./js/core/converter/operations.ts ***!
  \*****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PROPS_TO_EXPRESSION = exports.ACTION_EXPRESSION = exports.RUN_IN_ACTION_STATEMENT = exports.OBSERVABLEABLE = exports.AUTORUN_STATEMENT = exports.PREVENT = exports.AUTORUN = exports.CREATE_ELEMENT = exports.CREATE_COMPONENT = exports.SPLIT_VARIABLE_DECLARATION = exports.SET_MODEL_REACTIVE = exports.ADD_EVENT_LISTENER = exports.ENTRY_STATEMENT = exports.AutoRun = exports._AutoRun = void 0;
const astgen_1 = __webpack_require__(/*! ./astgen */ "./js/core/converter/astgen.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./js/core/converter/utils.ts");
function CREATE_COMPONENT(id, props, children) {
    let args = [astgen_1.IDENTIFIER(id)];
    if (props.length || children.length) {
        args.push(props.length
            ? _AutoRun(astgen_1.FUNCTION_EXPRESSION(props, [astgen_1.IDENTIFIER("_webx$_props")]), true)
            : astgen_1.LITERAL(0));
        children.length && args.push(_AutoRun(astgen_1.FUNCTION_EXPRESSION(children, [astgen_1.IDENTIFIER("_webx_el")]), true));
    }
    return astgen_1.CALL_EXPRESSION(astgen_1.IDENTIFIER("_webx_create_component"), ...args);
    /*
    let data = OBSERVABLEABLE({
        type: "ObjectExpression",
        properties: []
    });
    if (!props.length && !children.length) {
        //如果返回的是 Expression 该结果将不能动态变更 例如  CREATE_ELEMENT 内的 <br/>
        return RETURN_STATEMENT(CALL_EXPRESSION(IDENTIFIER(id), data));
    }

    let component = CALL_EXPRESSION(IDENTIFIER(id), IDENTIFIER("_webx$_props"));
    let body: Array<Node> = [
        VARIABLE_DECLARATION([
            VARABLE_DECLARATOR(
                "_webx$_props",
                data
            )
        ])
    ];


    body.push(...props);

    if (children && children.length) {
        body.push(VARIABLE_DECLARATION([
            VARABLE_DECLARATOR(
                "_webx_el",
                OBSERVABLEABLE(ARRAY_EXPRESSION())
            )
        ]));
        component.arguments.push(IDENTIFIER("_webx_el"));
        body.push(
            VARIABLE_DECLARATION([
                VARABLE_DECLARATOR("_webx_cmp", component)
            ]),
            {
                type: "IfStatement",
                test: {
                    type: "LogicalExpression",
                    operator: "||",
                    left: {
                        type: "BinaryExpression",
                        operator: "===",
                        left: {
                            type: "Identifier",
                            name: "_webx_cmp"
                        },
                        right: {
                            type: "Literal",
                            value: null,
                            raw: "null"
                        }
                    },
                    right: {
                        type: "BinaryExpression",
                        operator: "===",
                        left: {
                            type: "Identifier",
                            name: "_webx_cmp"
                        },
                        right: {
                            type: "Identifier",
                            name: "undefined"
                        }
                    }
                },
                consequent: {
                    type: "ReturnStatement",
                    argument: null
                }
            }
        );

        body.push(...children);
        body.push(ASSIGNMENT_STATEMENT(
            MEMBER_EXPRESSION(IDENTIFIER("_webx$_props"), IDENTIFIER("children")),
            IDENTIFIER("_webx_el")
        ))
        body.push(RETURN_STATEMENT(IDENTIFIER("_webx_cmp")));
    } else {
        body.push(RETURN_STATEMENT(component));
    }
    return body;*/
    //return AUTORUN(body, true);
}
exports.CREATE_COMPONENT = CREATE_COMPONENT;
function CREATE_ELEMENT(tag, props, children) {
    let element = astgen_1.CALL_EXPRESSION(astgen_1.IDENTIFIER("_webx_create_element"), astgen_1.LITERAL(tag));
    if (!props.length && !children.length) {
        return element;
    }
    let body = [
        astgen_1.VARIABLE_DECLARATION([
            astgen_1.VARABLE_DECLARATOR("_webx_el", element)
        ]),
        ...children,
        ...props,
        astgen_1.RETURN_STATEMENT(astgen_1.IDENTIFIER("_webx_el"))
    ];
    return body; //AUTORUN(body, true);
}
exports.CREATE_ELEMENT = CREATE_ELEMENT;
function ADD_EVENT_LISTENER(...args) {
    return astgen_1.EXPRESSION_STATEMENT(astgen_1.CALL_EXPRESSION(astgen_1.IDENTIFIER("_webx_add_event_listener"), astgen_1.IDENTIFIER("_webx_el"), ...args));
}
exports.ADD_EVENT_LISTENER = ADD_EVENT_LISTENER;
function ACTION_EXPRESSION(fn) {
    return astgen_1.CALL_EXPRESSION(astgen_1.IDENTIFIER("_webx_action"), fn);
}
exports.ACTION_EXPRESSION = ACTION_EXPRESSION;
function RUN_IN_ACTION_STATEMENT(node) {
    return astgen_1.EXPRESSION_STATEMENT(astgen_1.CALL_EXPRESSION(astgen_1.IDENTIFIER("_webx_run_in_action"), astgen_1.FUNCTION_EXPRESSION(node.action)));
}
exports.RUN_IN_ACTION_STATEMENT = RUN_IN_ACTION_STATEMENT;
function SET_MODEL_REACTIVE(event, target, attribute) {
    return ADD_EVENT_LISTENER(astgen_1.LITERAL(event), astgen_1.FUNCTION_EXPRESSION(astgen_1.ASSIGNMENT_STATEMENT(target, astgen_1.MEMBER_EXPRESSION(astgen_1.IDENTIFIER("_webx_el"), astgen_1.IDENTIFIER(attribute)))));
}
exports.SET_MODEL_REACTIVE = SET_MODEL_REACTIVE;
function OBSERVABLEABLE(target) {
    return astgen_1.CALL_EXPRESSION(astgen_1.IDENTIFIER("_webx_observable"), target);
}
exports.OBSERVABLEABLE = OBSERVABLEABLE;
function PREVENT(body) {
    return astgen_1.CALL_EXPRESSION(astgen_1.IDENTIFIER("_webx_prevent_collect"), _AutoRun(astgen_1.FUNCTION_EXPRESSION(body), true), astgen_1.LITERAL(1 /* PREVENT_COLLECT */));
}
exports.PREVENT = PREVENT;
function AUTORUN(body, passive = false) {
    let args = [
        astgen_1.IDENTIFIER("_webx_autorun"),
        _AutoRun(astgen_1.FUNCTION_EXPRESSION(body), passive)
    ];
    passive && args.push(astgen_1.LITERAL(1));
    return astgen_1.CALL_EXPRESSION.apply(null, args);
}
exports.AUTORUN = AUTORUN;
function AUTORUN_STATEMENT(body, ...args) {
    return astgen_1.EXPRESSION_STATEMENT(AUTORUN.apply(null, arguments));
}
exports.AUTORUN_STATEMENT = AUTORUN_STATEMENT;
function _AutoRun(fn, passive = false) {
    fn.body = new AutoRun(fn.body, passive);
    return fn;
}
exports._AutoRun = _AutoRun;
class AutoRun {
    constructor(body, passive) {
        Object.assign(this, body);
        Object.defineProperty(this, "passive", {
            value: passive,
            enumerable: false,
            configurable: false
        });
    }
}
exports.AutoRun = AutoRun;
function ENTRY_STATEMENT(node) {
    return astgen_1.EXPRESSION_STATEMENT(astgen_1.CALL_EXPRESSION(astgen_1.IDENTIFIER("_webx_entry_statement"), node.object, astgen_1.FUNCTION_EXPRESSION(node.body, node.params)));
}
exports.ENTRY_STATEMENT = ENTRY_STATEMENT;
function PROPS_TO_EXPRESSION(props) {
    let expr;
    for (let i = 0; i < props.length; i++) {
        let prop = props[i];
        if (!(prop instanceof Array)) {
            let computed = false;
            switch (typeof prop) {
                case "number":
                    prop = astgen_1.LITERAL(prop);
                case "object":
                    computed = true;
                    break;
                default:
                    prop = astgen_1.IDENTIFIER(prop);
                    break;
            }
            expr = expr
                ? astgen_1.MEMBER_EXPRESSION(expr, prop, computed)
                : prop;
        }
        else {
            switch (prop.length) {
                case 2:
                    if (prop[0] instanceof Array) {
                        expr = astgen_1.SEQUENCE_EXPRESSION(astgen_1.ASSIGNMENT_EXPRESSION(astgen_1.IDENTIFIER("_webx_t"), PROPS_TO_EXPRESSION(prop[0])), {
                            type: "ConditionalExpression",
                            test: {
                                type: "BinaryExpression",
                                operator: "!==",
                                left: astgen_1.IDENTIFIER("_webx_t"),
                                right: astgen_1.IDENTIFIER("undefined")
                            },
                            consequent: astgen_1.IDENTIFIER("_webx_t"),
                            alternate: PROPS_TO_EXPRESSION([prop[1]])
                        });
                    }
                    else {
                        let node = prop[0][prop[1]];
                        expr = expr
                            ? astgen_1.MEMBER_EXPRESSION(expr, node, true)
                            : node;
                    }
                    break;
                case 1:
                    expr = astgen_1.CALL_EXPRESSION(astgen_1.MEMBER_EXPRESSION(expr, astgen_1.IDENTIFIER("slice")), astgen_1.LITERAL(prop[0]));
                    break;
                default:
                    debugger;
                    break;
            }
        }
    }
    return expr;
}
exports.PROPS_TO_EXPRESSION = PROPS_TO_EXPRESSION;
function SPLIT_VARIABLE_DECLARATION(node) {
    let declarations = node.declarations;
    let variable_declaration_chunks = [];
    for (let declarator of declarations) {
        if (declarator.id.type !== "Identifier"
            && (declarator.init
                && (declarator.init.type !== "Identifier"
                    && declarator.init.type !== "Literal"))) {
            let id = `_webx$_T` + utils_1.num2id(utils_1.volatileId());
            variable_declaration_chunks.push(astgen_1.VARIABLE_DECLARATION([astgen_1.VARABLE_DECLARATOR(id, declarator.init)], "let"));
            declarator.init = astgen_1.IDENTIFIER(id);
        }
        utils_1.decodeDeclarator(declarator, function (id, props) {
            variable_declaration_chunks.push(astgen_1.VARIABLE_DECLARATION([
                astgen_1.VARABLE_DECLARATOR(id, PROPS_TO_EXPRESSION(props))
            ], node.kind));
        }, []);
    }
    return variable_declaration_chunks;
}
exports.SPLIT_VARIABLE_DECLARATION = SPLIT_VARIABLE_DECLARATION;


/***/ }),

/***/ "./js/core/converter/proxy.ts":
/*!************************************!*\
  !*** ./js/core/converter/proxy.ts ***!
  \************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports._ProxyNode = exports.ProxyNode = void 0;
const nodes_1 = __webpack_require__(/*! ./nodes */ "./js/core/converter/nodes.ts");
const operations_1 = __webpack_require__(/*! ./operations */ "./js/core/converter/operations.ts");
const astgen_1 = __webpack_require__(/*! ./astgen */ "./js/core/converter/astgen.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./js/core/converter/utils.ts");
const index_1 = __webpack_require__(/*! ./index */ "./js/core/converter/index.ts");
const parser_1 = __webpack_require__(/*! ../parser */ "./js/core/parser/index.ts");
const EXTEND_PROPS = [
    "FUNCTION_DECLARES" /* FUNCTION_DECLARES */,
    "FUNCTION_SCOPED_STACK" /* FUNCTION_SCOPED_STACK */,
    "BLOCK_DECLARES" /* BLOCK_DECLARES */,
    "BLOCK_SCOPED_STACK" /* BLOCK_SCOPED_STACK */,
    "REFERENCE_RECORD" /* REFERENCE_RECORD */,
    "ASSIGN_RECORD" /* ASSIGN_RECORD */,
    "SUBSCOPES" /* SUBSCOPES */,
    "SCOPE_STATUS" /* SCOPE_STATUS */,
    "DEPTH" /* DEPTH */
];
const EXCLUDE_TYPES = new Set([
    "Identifier", "Literal", "ThisExpression", "Super"
]);
function _ProxyNode(node, parent, prop) {
    if (prop !== "range" && prop !== "loc" &&
        node && typeof node === "object" &&
        !EXCLUDE_TYPES.has(node.type)) {
        return new ProxyNode(node, parent, prop);
    }
}
exports._ProxyNode = _ProxyNode;
class ProxyNode {
    constructor(node, parent, prop) {
        var _a, _b;
        this.node = node;
        this.parent = parent;
        //let self: any = this;
        if (parent) {
            for (let key of EXTEND_PROPS) {
                this[key] = parent[key];
            }
        }
        if (node.type || prop) {
            let wrap_node = (_a = CAPTURE_HOOKS[node.type || prop]) === null || _a === void 0 ? void 0 : _a.call(this, node);
            if (wrap_node) {
                if (wrap_node instanceof Array
                    && parent.node instanceof Array
                    && !(node instanceof Array)) {
                    let index = parent.node.indexOf(node);
                    parent.node.splice(index, 1, ...wrap_node); //epoch
                    wrap_node = parent.node[prop];
                    return wrap_node && new ProxyNode(wrap_node, parent, prop);
                }
                parent && (parent.node[prop] = wrap_node);
                node = this.node = wrap_node;
            }
            else if (wrap_node === 0) {
                this["BLOCK_SCOPED_STACK" /* BLOCK_SCOPED_STACK */][0]["NEXT_EPOCH" /* NEXT_EPOCH */].push([node, parent, prop]);
                return 0;
            }
            node.type && utils_1.setReferenceRecords(this, REFERENCE_RULES, node, this["REFERENCE_RECORD" /* REFERENCE_RECORD */]);
        }
        parent && prop && (parent[prop] = this);
        if (node instanceof Array) {
            for (let i = 0; i < node.length; i++) {
                _ProxyNode(node[i], this, i);
            }
        }
        else {
            for (let key in node) {
                _ProxyNode(node[key], this, key);
            }
        }
        if (node.type) {
            if (node._bubble) {
                node._bubble(this);
                delete node._bubble;
            }
            let proxy_node = (_b = BUBBLE_HOOKS[node.type]) === null || _b === void 0 ? void 0 : _b.call(this, node);
            if (proxy_node) {
                return proxy_node;
            }
        }
    }
}
exports.ProxyNode = ProxyNode;
"FUNCTION_DECLARES" /* FUNCTION_DECLARES */, "FUNCTION_SCOPED_STACK" /* FUNCTION_SCOPED_STACK */, "BLOCK_DECLARES" /* BLOCK_DECLARES */, "BLOCK_SCOPED_STACK" /* BLOCK_SCOPED_STACK */, "SCOPE_STATUS" /* SCOPE_STATUS */, "DEPTH" /* DEPTH */, "NEXT_EPOCH" /* NEXT_EPOCH */, "REFERENCE_RECORD" /* REFERENCE_RECORD */, "OBSERVER_MAP" /* OBSERVER_MAP */, "OBSERVER_STATE" /* OBSERVER_MARKS */;
const REFERENCE_RULES = {
    ExportNamedDeclaration: {
        specifiers: ["local"]
    },
    ExportDefaultDeclaration: [
        "declaration"
    ],
    MethodDefinition: [
        ["computed", true],
        "key"
    ],
    ObjectPattern: {
        properties: {
            Property: [
                ["computed", true],
                "key"
            ]
        }
    },
    ArrayExpression: ["elements"],
    SequenceExpression: ["expressions"],
    ObjectExpression: {
        properties: [
            "value",
            ["computed", true],
            "key"
        ]
    },
    //EntryStatement:["object"],
    VariableDeclarator: ["init"],
    ExpressionStatement: ["expression"],
    NewExpression: ["callee", "arguments"],
    CallExpression: ["callee", "arguments"],
    TemplateLiteral: ["expressions"],
    MemberExpression: ["object", ["computed", true], "property"],
    AssignmentExpression: ["left", "right"],
    AssignmentPattern: ["right"],
    LogicalExpression: ["left", "right"],
    BinaryExpression: ["left", "right"],
    ForOfStatement: ["left", "right"],
    ForInStatement: ["left", "right"],
    ConditionalExpression: ["test", "consequent", "alternate"],
    ForStatement: ["init", "test", "update"],
    IfStatement: ["test"],
    SwitchCase: ["test"],
    SwitchStatement: ["discriminant"],
    DoWhileStatement: ["test"],
    WhileStatement: ["test"],
    UpdateExpression: ["argument"],
    SpreadElement: ["argument"],
    UnaryExpression: ["argument"],
    ReturnStatement: ["argument"],
    YieldExpression: ["argument"],
    AwaitExpression: ["argument"],
};
function _paramsToDeclaration(node) {
    let params = node.params;
    if (node.expression) {
        node.expression = false;
        node.body = astgen_1.BLOCK_STATEMENT([astgen_1.RETURN_STATEMENT(node.body)]);
    }
    let body = node.body.body;
    let has_convert = false;
    for (let i = params.length - 1; i >= 0; i--) {
        let id = astgen_1.IDENTIFIER(`_webx$_D${this["DEPTH" /* DEPTH */]}_P${i}`);
        let pattern_set = [];
        utils_1.decodeDeclarator(params[i], function (id, props) {
            pattern_set.push([id, props]);
        }, [id]);
        if (has_convert
            || (pattern_set.length > 1
                || pattern_set[0][1].length > 1
                || pattern_set[0][1][0].type !== "Identifier")) {
            has_convert = true;
            for (let [id, props] of pattern_set) {
                body.unshift(astgen_1.VARIABLE_DECLARATION([astgen_1.VARABLE_DECLARATOR(id, operations_1.PROPS_TO_EXPRESSION(props))]));
            }
            params[i] = id;
        }
    }
}
function _setParamsDeclare(node) {
    let body_declaration_node = this.body;
    let params_declaration_node = this.params;
    utils_1.decodeDeclarations(node.params, function (id, props) {
        if (!/^_webx\$_/.test(id)) {
            setDeclare(params_declaration_node, id, props);
            setDeclare(body_declaration_node, id, props);
        }
    }, [astgen_1.IDENTIFIER("arguments")]);
}
const BUBBLE_HOOKS = {
    FunctionDeclaration: _setParamsDeclare,
    FunctionExpression: _setParamsDeclare,
    Program(node) {
        utils_1.nextEpoch(this);
        utils_1.makeMarks(this);
        utils_1.makeObserver(this, 0);
        let top_index = 0;
        let top_list = node.body;
        top_list.every(function (node, index) {
            if (node.directive || node.type === "ImportDeclaration") {
                top_index = index + 1;
                return true;
            }
        });
        top_list.splice(top_index, 0, index_1.runtime);
    },
};
function addAssignRecord(proxy_node, name, props) {
    let key = "-" + name;
    let assign_record = proxy_node["ASSIGN_RECORD" /* ASSIGN_RECORD */];
    (assign_record[key] || (assign_record[key] = [])).push(props);
}
const CAPTURE_HOOKS = {
    ExportNamedDeclaration(node) {
        if (node.specifiers.length) {
            if (this["BLOCK_SCOPED_STACK" /* BLOCK_SCOPED_STACK */][0]["NEPOCH" /* NEPOCH */] < 1) {
                return 0;
            }
            let specifiers = [];
            let declarations = [];
            for (let specifier of node.specifiers) {
                let id = specifier.exported.name, local = specifier.local;
                if (id !== local.name) {
                    declarations.push(astgen_1.VARABLE_DECLARATOR(id, local));
                }
                else {
                    specifiers.push(specifier);
                }
            }
            if (!declarations.length) {
                return;
            }
            let res = {
                type: "ExportNamedDeclaration",
                declaration: astgen_1.VARIABLE_DECLARATION(declarations, "var"),
                specifiers: [],
                source: null
            };
            if (specifiers.length) {
                return [
                    res,
                    {
                        type: "ExportNamedDeclaration",
                        declaration: null,
                        specifiers: specifiers,
                        source: null
                    }
                ];
            }
            return res;
        }
    },
    ImportDeclaration(node) {
        for (let specifier of node.specifiers) {
            switch (specifier.type) {
                case "ImportDefaultSpecifier":
                case "ImportSpecifier":
                    setDeclare(this["FUNCTION_SCOPED_STACK" /* FUNCTION_SCOPED_STACK */][0], specifier.local.name, [specifier.local]);
                    break;
            }
        }
    },
    Element: createElement,
    PreventExpression(node) {
        return operations_1.PREVENT([astgen_1.RETURN_STATEMENT(node.expression)]);
    },
    PreventStatement(node) {
        console.log(node);
        return astgen_1.EXPRESSION_STATEMENT(operations_1.PREVENT(node.statement.body));
    },
    ActionDeclaration(node) {
        let id = node.action.id.name;
        let scoped_node = this["BLOCK_SCOPED_STACK" /* BLOCK_SCOPED_STACK */][0];
        scoped_node["OBSERVER_STATE" /* OBSERVER_MARKS */]["-" + id] |= 4 /* NEED_REDECLARE */;
        setDeclare(scoped_node, id, [node], true);
        /**
         * ActionDeclaration 是要被剔除重新定义的
         * 这里 使其内部节点能被正常处理
         */
        _ProxyNode(node.action, this.parent);
        return [];
    },
    ActionExpression(node) {
        return operations_1.ACTION_EXPRESSION(node.action);
    },
    RunInActionStatement(node) {
        return operations_1.RUN_IN_ACTION_STATEMENT(node);
    },
    //FunctionDeclaration: _paramsToDeclaration,
    FunctionExpression: _paramsToDeclaration,
    FunctionDeclaration(node) {
        _paramsToDeclaration.call(this, node);
        /*[{ ...node, type: "FunctionExpression" }]*/
        setDeclare(this["BLOCK_SCOPED_STACK" /* BLOCK_SCOPED_STACK */][0], node.id.name, [node]);
    },
    ClassDeclaration(node) {
        setDeclare(this["BLOCK_SCOPED_STACK" /* BLOCK_SCOPED_STACK */][0], node.id.name, [node]);
    },
    AssignmentExpression(node) {
        if (node.left.type === "Identifier") {
            addAssignRecord(this, node.left.name, [node, "left"]);
        }
    },
    UpdateExpression(node) {
        if (node.argument.type === "Identifier") {
            addAssignRecord(this, node.argument.name, [node, "argument"]);
        }
    },
    BindingExpression(node) {
        return operations_1.AUTORUN(astgen_1.RETURN_STATEMENT(node.expression));
    },
    BindingStatement(node) {
        return operations_1.AUTORUN_STATEMENT(node.statement);
    },
    EntryStatement(node) {
        return operations_1.ENTRY_STATEMENT(node);
    },
    Program(node) {
        this["NEPOCH" /* NEPOCH */] = 0;
        this["DEPTH" /* DEPTH */] = 0;
        this["NEXT_EPOCH" /* NEXT_EPOCH */] = [];
        this["SUBSCOPES" /* SUBSCOPES */] = [];
        this["BLOCK_DECLARES" /* BLOCK_DECLARES */] = this["FUNCTION_DECLARES" /* FUNCTION_DECLARES */] = {};
        this["BLOCK_SCOPED_STACK" /* BLOCK_SCOPED_STACK */] = this["FUNCTION_SCOPED_STACK" /* FUNCTION_SCOPED_STACK */] = [this];
        this["OBSERVER_STATE" /* OBSERVER_MARKS */] = {};
        this["OBSERVER_MAP" /* OBSERVER_MAP */] = {};
        this["REFERENCE_RECORD" /* REFERENCE_RECORD */] = {};
        this["ASSIGN_RECORD" /* ASSIGN_RECORD */] = {};
    },
    BlockStatement(node) {
        let parent_type = this.parent.node.type;
        let is_function = parent_type === "FunctionExpression" || parent_type === "FunctionDeclaration";
        this["DEPTH" /* DEPTH */] += 1;
        if (is_function) {
            if (node instanceof operations_1.AutoRun && !node.passive) {
                this["SCOPE_STATUS" /* SCOPE_STATUS */] |= 2 /* AUTORUN */ | 1 /* REACTIVE */;
            }
            else {
                this["SCOPE_STATUS" /* SCOPE_STATUS */] &= ~2 /* AUTORUN */;
            }
        }
        utils_1.initScope(this, is_function);
    },
    ForStatement(node) {
        let init = node.init;
        toBlockStatement(node, "body");
        if (init && init.type === "VariableDeclaration" && init.kind === "var") {
            node.init = null;
            return operations_1.SPLIT_VARIABLE_DECLARATION(init).concat(node);
        }
    },
    ForInStatement(node) {
        let init = node.left;
        toBlockStatement(node, "body");
        if (init && init.type === "VariableDeclaration" && init.kind === "var") {
            node.left = init.declarations[0].id;
            return operations_1.SPLIT_VARIABLE_DECLARATION(init).map(function (node) {
                node.declarations[0].init = null;
                return node;
            }).concat(node);
        }
    },
    ForOfStatement(node) {
        let init = node.left;
        toBlockStatement(node, "body");
        if (init && init.type === "VariableDeclaration" && init.kind === "var") {
            node.left = init.declarations[0].id;
            return operations_1.SPLIT_VARIABLE_DECLARATION(init).map(function (node) {
                node.declarations[0].init = null;
                return node;
            }).concat(node);
        }
    },
    VariableDeclaration(node) {
        let is_block_declares = node.kind === "let";
        let parent_node = this.parent.node;
        let parent_type = parent_node.type;
        let declaration_node = this;
        let declarations = node.declarations;
        if (parent_type === "ExportNamedDeclaration") {
            return;
        }
        if (parent_type === "ForStatement"
            || parent_type === "ForInStatement"
            || parent_type === "ForOfStatement") {
            parent_node._bubble = function (parent) {
                let declaration_node = parent.body;
                utils_1.decodeDeclarations(declarations, function (id) {
                    setDeclare(declaration_node, id, [], is_block_declares);
                });
            };
        }
        else {
            if (declarations.length !== 1 || declarations[0].id.type !== "Identifier") {
                let res = operations_1.SPLIT_VARIABLE_DECLARATION(node);
                return res;
            }
            utils_1.decodeDeclarations(declarations, function (id, props) {
                setDeclare(declaration_node, id, props, is_block_declares);
            });
        }
        utils_1.initScope(declaration_node, true);
        utils_1.decodeDeclarations(declarations, function (id, props) {
            setDeclare(declaration_node, id, props, is_block_declares);
        });
    },
    IfStatement(node) {
        toBlockStatement(node, "consequent");
        toBlockStatement(node, "alternate");
    },
    params(node) {
        /**
         * 使得 params 被识别为独立的作用域
         * （实际上 AssignmentPattern 等 逻辑上也可以看作 BodyStatement 的上级作用域)
         * 由于 params 可能需要 observable 的关系
         * 这里是让 params 作为单独的作用域， BodyStatement 作为 params 的平级作用域
         *
         */
        utils_1.initScope(this, true);
    },
};
function toBlockStatement(node, prop) {
    let block = node[prop];
    if (block && block.type !== "BlockStatement") {
        node[prop] = astgen_1.BLOCK_STATEMENT(block);
    }
}
function setDeclare(declaration_node, id, props, is_block_declares) {
    if (/^_webx_/.test(id)) {
        return;
    }
    let name = "-" + id;
    let declares, scoped_node;
    if (is_block_declares) {
        declares = declaration_node["BLOCK_DECLARES" /* BLOCK_DECLARES */];
        scoped_node = declaration_node["BLOCK_SCOPED_STACK" /* BLOCK_SCOPED_STACK */][0];
    }
    else {
        declares = declaration_node["FUNCTION_DECLARES" /* FUNCTION_DECLARES */];
        scoped_node = declaration_node["FUNCTION_SCOPED_STACK" /* FUNCTION_SCOPED_STACK */][0];
    }
    let declaration = declares[name];
    (declaration && declaration[0] === scoped_node
        ? declaration
        : (declares[name] = [])).unshift(scoped_node, declaration_node, props);
}
function createNode(proxy_node, body, is_reactive) {
    var _a;
    let parent = (_a = proxy_node.parent.parent) === null || _a === void 0 ? void 0 : _a.node;
    let node;
    if (parent
        && parent.type === "CallExpression"
        && (parent.callee.name === "_webx_next_child"
            || parent.callee.name === "_webx_next_nodes")) {
        if (is_reactive) {
            parent.arguments[3] = astgen_1.LITERAL(1);
            node = parser_1.isExpression(body) ? body : operations_1._AutoRun(astgen_1.FUNCTION_EXPRESSION(body), true);
        }
        else {
            parent.arguments.length = 2;
            node = body;
        }
    }
    else {
        node = is_reactive && !parser_1.isExpression(body)
            ? operations_1.AUTORUN(body, true)
            : is_reactive === true ? astgen_1.CALL_EXPRESSION(body) : body;
    }
    node.range = proxy_node.node.range;
    node.loc = proxy_node.node.loc;
    return node;
}
function createComponent(node) {
    let props = [];
    let children = [];
    for (let attribute of node.openingTag.attributes) {
        let attribute_name = attribute.name;
        let attribute_value = attribute.value || astgen_1.LITERAL("");
        let is_binding = false;
        if (attribute_value.type === "BindingExpression") {
            is_binding = true;
            attribute_value = attribute_value.expression;
        }
        let set_attribute = astgen_1.ASSIGNMENT_STATEMENT(astgen_1.MEMBER_EXPRESSION(astgen_1.IDENTIFIER("_webx$_props"), attribute_name), attribute_value);
        props.push(is_binding ? operations_1.AUTORUN_STATEMENT(set_attribute) : set_attribute);
    }
    node.children && buildChildren(node.children, children);
    return createNode(this, operations_1.CREATE_COMPONENT(node.openingTag.name, props, children), true);
}
const ATTRIBUTE_TO_EVENT = {
    value: "input",
    checked: "change"
};
function createElement(node) {
    let tag_name = node.openingTag.name;
    let maybe_component = /^[A-Z]$/.test(tag_name[0]);
    if (maybe_component &&
        this["BLOCK_SCOPED_STACK" /* BLOCK_SCOPED_STACK */][0]["NEPOCH" /* NEPOCH */] < 1) {
        /**
         * epoch 为0 可能还无法获得全部可能的定义声明，这里需要判断是否是组件元素
         */
        return 0;
    }
    if (maybe_component
        && (this["BLOCK_DECLARES" /* BLOCK_DECLARES */]["-" + tag_name]
            ||
                ProxyNode.isExternalDeclaration
                    && ProxyNode.isExternalDeclaration(tag_name))) {
        return createComponent.call(this, node);
    }
    let props = [];
    let children = [];
    node.children && buildChildren(node.children, children);
    for (let attribute of node.openingTag.attributes) {
        let attribute_name = attribute.name.name;
        let attribute_value = attribute.value || astgen_1.LITERAL("");
        props.push(nodes_1.SET_ATTRIBUTE(attribute_name, attribute_value, /^(on[^_-]*)|(value|id|checked)$/.test(attribute_name)));
        switch (tag_name) {
            case "select":
            case "input":
                if (attribute_value.type === "BindingExpression") {
                    let event = ATTRIBUTE_TO_EVENT[attribute_name];
                    props.push(operations_1.SET_MODEL_REACTIVE(event, attribute_value.expression, attribute_name));
                }
                break;
        }
    }
    return createNode(this, operations_1.CREATE_ELEMENT(node.openingTag.name, props, children), props.length || children.length);
}
function buildChildren(target_nodes, bind_nodes) {
    for (let node of target_nodes) {
        let getter, is_reactive = false;
        switch (node.type) {
            case "Text":
                getter = astgen_1.LITERAL(node.value);
                break;
            case "BindingDeclaration":
                bind_nodes.push(...nodes_1.BINDING_DECLARATION(node.declaration, 0));
                continue;
            case "Element":
                getter = node;
                is_reactive = true;
                break;
            case "BindingStatement":
                node = node.statement;
                let body;
                if (node.type === "BlockStatement") {
                    body = node.body;
                    if (!body.length) {
                        continue;
                    }
                }
                else {
                    body = [node];
                }
                if (body.length > 1 || body[0].type !== "ExpressionStatement") {
                    bind_nodes.push(nodes_1.NEXT_BLOCK_SIBLING(body, 0));
                    continue;
                }
                node = body[0];
            case "BindingExpression":
                getter = node.expression;
                if (getter.type !== "Literal") {
                    is_reactive = true;
                    getter = astgen_1.FUNCTION_EXPRESSION(astgen_1.RETURN_STATEMENT(getter));
                }
                break;
            case "CSSRule":
                buildChildren(node.children, bind_nodes);
                continue;
            default:
                getter = node;
                break;
        }
        bind_nodes.push(nodes_1.NEXT_CHILD_STATEMENT(getter, is_reactive));
    }
    return bind_nodes;
}


/***/ }),

/***/ "./js/core/converter/utils.ts":
/*!************************************!*\
  !*** ./js/core/converter/utils.ts ***!
  \************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setReferenceRecords = exports.initScope = exports.num2id = exports.makeObserver = exports.makeMarks = exports.nextEpoch = exports.decodeDeclarator = exports.decodeDeclarations = exports.volatileId = void 0;
const operations_1 = __webpack_require__(/*! ./operations */ "./js/core/converter/operations.ts");
const astgen_1 = __webpack_require__(/*! ./astgen */ "./js/core/converter/astgen.ts");
const proxy_1 = __webpack_require__(/*! ./proxy */ "./js/core/converter/proxy.ts");
function setReferenceRecords(proxy_node, rules, node, record) {
    rules[node.type] && walk(node, rules[node.type]);
    function walk(node, factor) {
        if (node instanceof Array) {
            for (let _node of node) {
                walk(_node, factor);
            }
        }
        else if (factor instanceof Array) {
            for (let item of factor) {
                if (item instanceof Array) {
                    if (node[item[0]] !== item[1]) {
                        break;
                    }
                }
                else {
                    add_record(node, item);
                }
            }
        }
        else {
            for (let key in factor) {
                node[key] && walk(node[key], factor[key]);
            }
        }
    }
    function add_record(parent, key) {
        let node = parent[key];
        if (!node) {
            return;
        }
        if (node instanceof Array) {
            for (let i in node) {
                add_record(node, i);
            }
        }
        else {
            walk(parent, key);
        }
        function walk(parent, prop) {
            let node = parent[prop];
            switch (node.type) {
                case "Identifier":
                    let name = "-" + node.name;
                    if (!/^-_webx_/.test(name)) {
                        (record[name] || (record[name] = [])).push([parent, prop, proxy_node]);
                    }
                    break;
                case "AssignmentPattern":
                    walk(node, "left");
                    break;
                case "ObjectPattern":
                    for (let property of node.properties) {
                        walk(property, "value");
                    }
                    break;
                case "ArrayPattern":
                    for (let i = 0, elements = node.elements, element; i < elements.length; i++) {
                        elements[i] && walk(elements, i);
                    }
                    break;
                case "RestElement":
                    walk(node, "argument");
                    break;
                default:
                    //console.log(node);
                    break;
            }
        }
    }
}
exports.setReferenceRecords = setReferenceRecords;
function initScope(scope_node, is_function_scope) {
    let declares = {
        __proto__: scope_node["BLOCK_DECLARES" /* BLOCK_DECLARES */]
    };
    let scoped_stack = [scope_node]
        .concat(scope_node["BLOCK_SCOPED_STACK" /* BLOCK_SCOPED_STACK */]);
    ;
    scope_node["NEPOCH" /* NEPOCH */] = 0;
    scope_node["NEXT_EPOCH" /* NEXT_EPOCH */] = [];
    scope_node["SUBSCOPES" /* SUBSCOPES */].push(scope_node);
    scope_node["SUBSCOPES" /* SUBSCOPES */] = [];
    scope_node["OBSERVER_STATE" /* OBSERVER_MARKS */] = {};
    scope_node["OBSERVER_MAP" /* OBSERVER_MAP */] = {};
    scope_node["REFERENCE_RECORD" /* REFERENCE_RECORD */] = {};
    scope_node["ASSIGN_RECORD" /* ASSIGN_RECORD */] = {};
    if (is_function_scope) {
        scope_node["FUNCTION_DECLARES" /* FUNCTION_DECLARES */] = declares;
        scope_node["FUNCTION_SCOPED_STACK" /* FUNCTION_SCOPED_STACK */] = scoped_stack;
    }
    scope_node["BLOCK_DECLARES" /* BLOCK_DECLARES */] = declares;
    scope_node["BLOCK_SCOPED_STACK" /* BLOCK_SCOPED_STACK */] = scoped_stack;
}
exports.initScope = initScope;
let chars = Array.from({ length: 52 }).map((v, i) => String.fromCharCode(65 + (i / 26 < 1 ? i : (i + 6))));
function num2id(num) {
    let mod = chars.length;
    let id = "";
    do {
        id = chars[num % mod] + id;
        num = (num / mod) | 0;
    } while (num > 0);
    return id;
}
exports.num2id = num2id;
function nextEpoch(root) {
    while (root = walk(root)) {
    }
    function walk(scoped_node) {
        scoped_node["NEPOCH" /* NEPOCH */] += 1;
        let iterates = scoped_node["NEXT_EPOCH" /* NEXT_EPOCH */];
        if (iterates.length) {
            for (let [node, parent, prop] of iterates.splice(0, iterates.length)) {
                proxy_1._ProxyNode(node, parent, prop);
            }
        }
        let res, count = 0; //= processes.length && scoped_node;
        for (let scope of scoped_node["SUBSCOPES" /* SUBSCOPES */]) {
            let _res = walk(scope);
            if (_res) {
                res = _res;
                count += 1;
            }
        }
        return count > 1 || iterates.length ? scoped_node : res;
    }
}
exports.nextEpoch = nextEpoch;
function makeMarks(scoped_node) {
    for (let key in scoped_node["ASSIGN_RECORD" /* ASSIGN_RECORD */]) {
        let block_declares = scoped_node["BLOCK_DECLARES" /* BLOCK_DECLARES */];
        let declarations = block_declares[key];
        let ref_scoped = declarations && declarations[0];
        if (ref_scoped) {
            ref_scoped["OBSERVER_STATE" /* OBSERVER_MARKS */][key] |= 2 /* HAS_ASSIGN */;
        }
    }
    for (let scope of scoped_node["SUBSCOPES" /* SUBSCOPES */]) {
        makeMarks(scope);
    }
    //let is_autorun = scoped_node[PROXY_NODE.SCOPE_STATUS] & SCOPE_STATUS.AUTORUN;
    if (scoped_node["SCOPE_STATUS" /* SCOPE_STATUS */] & 1 /* REACTIVE */) {
        let block_declares = scoped_node["BLOCK_DECLARES" /* BLOCK_DECLARES */];
        let reference_records = scoped_node["REFERENCE_RECORD" /* REFERENCE_RECORD */];
        for (let key in reference_records) {
            let records = reference_records[key];
            let declarations = block_declares[key];
            let ref_scoped = declarations && declarations[0];
            if (ref_scoped
                /**
                 * 可能存在 variableDeclaration 作为 scoped 的情况（用于通用逻辑处理特殊情况）
                 */
                && ref_scoped.body
                /**
                 * 非 autorun 环境，不存在引用变更的变量不必要单独代理
                 */
                && (ref_scoped["SCOPE_STATUS" /* SCOPE_STATUS */] & 2 /* AUTORUN */
                    || records.some(function (record) {
                        return record[2]["SCOPE_STATUS" /* SCOPE_STATUS */] & 2 /* AUTORUN */;
                    }))
                /**
                 * 仅进行 new 或 call 操作的变量不必要代理
                 */
                && records.some(([, key]) => key !== "callee")) {
                ref_scoped["OBSERVER_STATE" /* OBSERVER_MARKS */][key] |= 1 /* NEED_PROXY */;
            }
        }
    }
}
exports.makeMarks = makeMarks;
function isPurelyReactiveExpression(expr) {
    switch (expr.type) {
        case "Identifier":
            if (!/^_webx\$_/.test(expr.name)) {
                return false;
            }
        case "Literal":
            return true;
        case "MemberExpression":
            if (expr.property.type === "Literal"
                || !expr.computed &&
                    expr.property.type === "Identifier") {
                return isPurelyReactiveExpression(expr.object);
            }
            break;
    }
    return false;
    /*if (expr.type === "MemberExpression"
        && expr.object.type === "Identifier"
        && /^_webx\$_/.test(expr.object.name)
        && (
            !expr.computed &&
            expr.property.type === "Identifier"
            || expr.property.type === "Literal"
        )) {

    }*/
}
function makeObserver(scoped_node, depth) {
    var _a;
    let reference_records = scoped_node["REFERENCE_RECORD" /* REFERENCE_RECORD */];
    let block_declares = scoped_node["BLOCK_DECLARES" /* BLOCK_DECLARES */];
    let declare_keys = Object.keys(block_declares);
    if (declare_keys.length && scoped_node.body) {
        let observer_state = scoped_node["OBSERVER_STATE" /* OBSERVER_MARKS */];
        let observer_map = scoped_node["OBSERVER_MAP" /* OBSERVER_MAP */];
        let toplevel_list = scoped_node.node.body;
        let declaration_index = 0;
        toplevel_list.every(function (node, index) {
            if (node.directive || node.type === "ImportDeclaration") {
                declaration_index = index + 1;
                return true;
            }
        });
        let top_cursor = declaration_index;
        let ob_id = "_webx$" + depth;
        let base_id = 0;
        for (let index = 0; index < declare_keys.length; index++) {
            let key = declare_keys[index];
            let state = observer_state[key];
            let value = block_declares[key];
            if (state & 4 /* NEED_REDECLARE */) {
                for (let i = 0; i < value.length; i += 3) {
                    let props = value[i + 2];
                    let node = props[0];
                    if (props.length !== 1
                        || node.type !== "ActionDeclaration") {
                        continue;
                    }
                    node = node.action;
                    toplevel_list.splice(top_cursor++, 0, astgen_1.VARIABLE_DECLARATION([
                        astgen_1.VARABLE_DECLARATOR(node.id.name, operations_1.ACTION_EXPRESSION(node))
                    ], "var"));
                }
            }
            if (!(state & 1 /* NEED_PROXY */)) {
                continue;
            }
            if (value.length === 3
                && /^-_webx\$_/.test(key)) {
                // _webx$_ 开头的标识符用于内部传递可观测变量
                // 本身可观测不需要额外处理
                continue;
            }
            let ob_sub_id = num2id(base_id++);
            observer_map[key] = astgen_1.MEMBER_EXPRESSION(astgen_1.IDENTIFIER(ob_id), astgen_1.IDENTIFIER(ob_sub_id));
            for (let i = 0; i < value.length; i += 3) {
                let declaration = value[i + 1];
                let declaration_node = declaration.node;
                let init_expression = astgen_1.ASSIGNMENT_EXPRESSION(astgen_1.MEMBER_EXPRESSION(astgen_1.IDENTIFIER(ob_id), astgen_1.IDENTIFIER(ob_sub_id)), astgen_1.IDENTIFIER(key.slice(1)));
                let init_statement = astgen_1.EXPRESSION_STATEMENT(init_expression);
                switch (declaration_node.type) {
                    case "Program":
                    case "BlockStatement":
                        toplevel_list.splice(top_cursor++, 0, init_statement);
                        break;
                    default:
                        let scoped_list = toplevel_list;
                        let declarator = declaration_node.declarations[0];
                        let pos = scoped_list.indexOf(declaration_node);
                        let declarator_init = declarator.init;
                        if (pos < 0) {
                            scoped_list = declaration.parent.node;
                            console.log(declaration);
                            pos = scoped_list.indexOf(declaration_node);
                            if (pos < 0) {
                                debugger;
                                continue;
                            }
                        }
                        if (declarator_init) {
                            init_expression.right = declarator_init;
                            if (state & 2 /* HAS_ASSIGN */
                                /**
                                 * 有可能一个变量在一个作用域内重复定义
                                 * 方法声明只经过 BlockStatement 的 case
                                 */
                                || value.length > 3) {
                                scoped_list.splice(pos, 1, init_statement);
                            }
                            else {
                                /**
                                 * _webx$_ 开头的标识符用于内部传递可观测变量
                                 * 当 init 为 确认的 MemberExpression 时
                                 * 间接的响应代理等同于直接的引用捕获
                                 */
                                if (value.length === 3
                                    && isPurelyReactiveExpression(declarator_init)) {
                                    observer_map[key] = declarator_init;
                                    base_id -= 1;
                                    scoped_list.splice(pos, 1);
                                    continue;
                                }
                                if (!(declarator_init.type === "Literal"
                                    || declarator_init.type === "Identifier"
                                        && /^_webx\$_/.test(declarator_init.name))) {
                                    init_statement = operations_1.AUTORUN_STATEMENT(init_statement);
                                }
                                scoped_list.splice(pos, 1, init_statement);
                            }
                            Object.defineProperty(declarator, "init", {
                                set(val) {
                                    declarator_init = init_expression.right = val;
                                },
                                get() {
                                    return declarator_init;
                                }
                            });
                        }
                        else {
                            scoped_list.splice(pos, 1);
                        }
                        break;
                }
            }
        }
        base_id && toplevel_list.splice(declaration_index, 0, astgen_1.VARIABLE_DECLARATION([
            astgen_1.VARABLE_DECLARATOR(ob_id, operations_1.OBSERVABLEABLE({
                type: "ObjectExpression",
                properties: []
            }))
        ], "let"));
    }
    for (let scope of scoped_node["SUBSCOPES" /* SUBSCOPES */]) {
        makeObserver(scope, depth + 1);
    }
    for (let key in reference_records) {
        let ref_scoped = (_a = block_declares[key]) === null || _a === void 0 ? void 0 : _a[0];
        if (!ref_scoped) {
            continue;
        }
        let ref_node = ref_scoped["OBSERVER_MAP" /* OBSERVER_MAP */][key];
        if (!ref_node) {
            continue;
        }
        for (let [node, prop] of reference_records[key]) {
            node[prop] = ref_node;
            if (prop === "value" && node.type === "Property" && node.shorthand) {
                node.shorthand = false;
            }
        }
    }
}
exports.makeObserver = makeObserver;
function decodeDeclarator(declaration, callback, props) {
    walk(declaration, props);
    function walk(node, props) {
        switch (node.type) {
            case "Identifier":
                callback(node.name, props);
                break;
            case "VariableDeclarator":
                props.push([node, "init"]);
                walk(node.id, props);
                break;
            case "AssignmentPattern":
                walk(node.left, [[props, node.right]]); //
                break;
            case "ObjectPattern":
                for (let property of node.properties) {
                    let _props = props.slice();
                    _props.push(property.computed
                        ? [property, "key"]
                        : property.key.name);
                    walk(property.value, _props);
                }
                break;
            case "ArrayPattern":
                for (let i = 0, elements = node.elements, element; i < elements.length; i++) {
                    element = elements[i];
                    if (element) {
                        walk(element, props.concat(i));
                    }
                }
                break;
            case "RestElement":
                props.push([props.pop()]);
                walk(node.argument, props);
                break;
            default:
                debugger;
                break;
        }
    }
}
exports.decodeDeclarator = decodeDeclarator;
function decodeDeclarations(declarations, callback, props) {
    for (let i = 0; i < declarations.length; i++) {
        let declaration = declarations[i];
        declaration && decodeDeclarator(declaration, callback, props ? props.concat(i) : []); //walk(declaration, props ? props.concat(i) : []);
    }
}
exports.decodeDeclarations = decodeDeclarations;
let base_id = 0;
function volatileId() {
    return ++base_id;
}
exports.volatileId = volatileId;


/***/ }),

/***/ "./js/core/parser/html-extends.ts":
/*!****************************************!*\
  !*** ./js/core/parser/html-extends.ts ***!
  \****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ELEMENT_DESCRIPTORS = exports.WEBX_PUNCTUATORS = exports.ATTRIBUTES_TREE = void 0;
const head_1 = __webpack_require__(/*! ../../Dison/js/lexical/head */ "./js/Dison/js/lexical/head.ts");
const index_1 = __webpack_require__(/*! ../../Dison/js/lexical/index */ "./js/Dison/js/lexical/index.ts");
const head_2 = __webpack_require__(/*! ../../Dison/js/syntax/head */ "./js/Dison/js/syntax/head.ts");
const expression_1 = __webpack_require__(/*! ../../Dison/js/syntax/expression */ "./js/Dison/js/syntax/expression.ts");
const statement_1 = __webpack_require__(/*! ../../Dison/js/syntax/statement */ "./js/Dison/js/syntax/statement.ts");
const index_2 = __webpack_require__(/*! ./index */ "./js/core/parser/index.ts");
function parse_tag(lexcal_terminator, context, token, index) {
    let [collected, parser] = context;
    let range = parser.parseRange(ATTRIBUTES_TREE, context, index, lexcal_terminator);
    collected.value = range.value;
    collected.attributes = head_2.extract_success(parser, range.content);
    return token.name;
}
function collect_next_syntax(match_tree = index_2.EXPRESSION_TREE, test = function (node) { return true; }, offset = -2) {
    return function (parser, self) {
        parser.index += offset;
        self.collect_text_node(parser);
        let { scopes } = self;
        let { context, index, children } = scopes;
        let stack_length = parser.curly_stack.length;
        let node = parser.parseCustom(match_tree, context, index, test);
        if (node) {
            context.tokens.length = index;
            parser.index = node.range[1];
            parser.line_number = node.loc.end.line;
            parser.line_start = parser.index - node.loc.end.column;
            parser.curly_stack.length = stack_length;
            /*context.tokens.splice(index, 1);*/
            children.push(node);
            scopes.cursor = parser.index;
            save_volatility(parser, self);
            return " RESET" /* RESET */;
        }
        else {
            parser.index -= offset;
            debugger;
        }
    };
}
let skip_html_comment = {
    scan_tree: {
        "-": {
            "-": {
                ">": {
                    [" NEXT" /* NEXT */]() {
                        return true;
                    }
                }
            }
        }
    },
    parse: head_1._Scanner(false)
};
function save_volatility(parser, self) {
    self.scopes.start = parser.index;
    self.scopes.line_number = parser.line_number;
    self.scopes.line_start = parser.line_start;
}
function parse_next_punctuator(length, parser, self) {
    parser.index -= length;
    collect_rule_text(parser, self);
    if (!parser.nextPunctuator()) {
        parser.index += length;
    }
}
function collect_rule_text(parser, self, merge_spaces = true) {
    let { scopes } = self;
    if (scopes.cursor < parser.index) {
        let new_text = parser.input.slice(scopes.cursor, parser.index);
        scopes.text += merge_spaces ? new_text.replace(/(\s)\s+/g, "$1") : new_text;
        scopes.cursor = parser.index;
    }
}
let OpeningTag = {
    collector: {
        type: head_2._Mark("OpeningTag"),
        name: head_2._Pattern("TagPunctuator", "<").pipe(parse_tag.bind(null, function (token) {
            return token.type === "TagPunctuator" && (token.value === ">" || token.value === "/>");
        })).pipe(function (context, token, left) {
            let [collected, parser] = context;
            //debugger;
            if (collected.value == "<>") {
                collected.children = (token.value !== "style"
                    ? inner_html
                    : css_rules).parse(parser, context, left + 1);
            }
            return token.value;
        }),
    }
};
let ClosingTag = {
    collector: {
        type: head_2._Mark("ClosingTag"),
        name: head_2._Pattern("TagPunctuator", "</").pipe(parse_tag.bind(null, head_2._Validate("TagPunctuator", ">"))),
    }
};
/*
const RunInActionExpression = {
    collector: {
        ...RunInActionStatement.collector,
        _prev: _Mark()
    }
}*/
expression_1.default["Element"] = {
    collector: [
        {
            openingTag: head_2._Pattern("OpeningTag", "</>"),
            children: head_2._Mark(function (context, index) {
                let openingTag = context.getToken(index - 1);
                let children = openingTag.children;
                delete openingTag.children;
                return children;
            }),
            closingTag: head_2._Mark(null),
        },
        [
            ["openingTag", head_2._Pattern("OpeningTag", "<>")],
            ["closingTag", head_2._Pattern("ClosingTag", "</>")]
        ]
    ]
};
statement_1.default[""].collector.push(["error", head_2._Or("OpeningTag", "ClosingTag", "TagPunctuator")]);
statement_1.default["ExpressionStatement"].push({
    precedence: 0,
    collector: {
        expression: "Element",
    }
});
expression_1.PrimaryExpressions[""].push(OpeningTag, ClosingTag);
expression_1.default[""].push(OpeningTag, ClosingTag);
const Attributes = Object.assign(Object.assign({ ActionExpression: expression_1.default.ActionExpression, BindingExpression: expression_1.default.BindingExpression, "": expression_1.default[""], TemplateLiteral: expression_1.default.TemplateLiteral, FunctionExpression: expression_1.default.FunctionExpression, ArrowFunctionExpression: expression_1.default.ArrowFunctionExpression, ArrayExpression: expression_1.default.ArrayExpression, ObjectExpression: expression_1.default.ObjectExpression, MemberExpression: expression_1.default.MemberExpression, CallExpression: expression_1.default.CallExpression, ConditionalExpression: expression_1.default.ConditionalExpression }, head_2._SuccessCollector("Attribute")), { Attribute: {
        validator(context) {
            return (context[3 /* right */] - context[2 /* left */]) % 2 === 0;
        },
        precedence: 0,
        collector: [
            {
                name: head_2._Or(head_2._Identifier(), head_2._Keyword().pipe(function (context, token) {
                    return head_2.reinterpretKeywordAsIdentifier(token);
                })),
                value: head_2._Or(head_2._Series(head_2._NonCollecting(head_2._Punctuator("=")), head_2._Option("[Expression]")), head_2._Mark(null))
            }
        ]
    } });
const ATTRIBUTES_TREE = head_2.createMatchTree(Attributes);
exports.ATTRIBUTES_TREE = ATTRIBUTES_TREE;
const ELEMENT_DESCRIPTORS = [
    {
        key: "<", type: "TagPunctuator",
        scanner: scan_tag,
        filter: left_tag_filter
    },
];
exports.ELEMENT_DESCRIPTORS = ELEMENT_DESCRIPTORS;
function scan_tag(tokenizer, start) {
    let tag = tokenizer.nextIdentifier();
    if (tag) {
        //tag = reinterpretKeywordAsIdentifier(tag);
        let key = this.key;
        tag = {
            type: this.type,
            value: key,
            name: tag,
            raw: key + tokenizer._volatility,
            range: [start, tag.range[1]],
            loc: {
                start: {
                    line: tokenizer.line_number,
                    column: start - tokenizer.line_start
                },
                end: tag.loc.end
            }
        };
        tokenizer.curly_stack.unshift(key);
    }
    else {
        tokenizer.index -= 1;
        tag = tokenizer.match(tokenizer.PUNCTUATORS_TREE);
    }
    return tag;
}
function left_tag_filter(tokenizer) {
    /*if ((/^<|<\/$/.test(tokenizer.curly_stack[0]))) {
        debugger;
    }
    return !(/^<|<\/$/.test(tokenizer.curly_stack[0]));*/
    return true;
}
let WEBX_PUNCTUATORS = index_1.PUNCTUATORS.concat({
    key: ">", type: "TagPunctuator",
    filter(tokenizer) {
        if (/^<|<\/$/.test(tokenizer.curly_stack[0])) {
            tokenizer.curly_stack.shift();
            return true;
        }
    }
}, {
    key: "/>", type: "TagPunctuator",
    filter(tokenizer) {
        if (tokenizer.curly_stack[0] === "<") {
            tokenizer.curly_stack.shift();
            return true;
        }
    }
}, {
    key: "</", type: "TagPunctuator",
    scanner: scan_tag,
    filter: left_tag_filter
}, "@(", "@{", "->", "@:", "@");
exports.WEBX_PUNCTUATORS = WEBX_PUNCTUATORS;
let css_rules;
let inner_html;
head_2.async_getter.get("webx_inited", function () {
    css_rules = {
        collect_text_node(parser, merge_spaces) {
            collect_rule_text(parser, this, merge_spaces);
            let { scopes } = this;
            if (scopes.text) {
                let { start, line_number, line_start } = scopes;
                let text_node = {
                    type: "Text",
                    value: scopes.text,
                    range: [start, parser.index],
                    loc: {
                        start: {
                            line: line_number, column: start - line_start
                        },
                        end: {
                            line: parser.line_number, column: parser.index - parser.line_start
                        }
                    }
                };
                scopes.children.push(text_node);
                save_volatility(parser, this);
                scopes.text = "";
                return text_node;
            }
        },
        scan_tree: {
            ["("]: {
                ["("]: {
                    [" NEXT" /* NEXT */]: collect_next_syntax(index_2.EXPRESSION_TREE, index_2.isExpression)
                }
            },
            "@": {
                "{": {
                    [" NEXT" /* NEXT */]: collect_next_syntax(index_2.SYNTAX_TREE)
                },
                "(": {
                    [" NEXT" /* NEXT */]: collect_next_syntax()
                }
            },
            "/": {
                "*": {
                    [" ATT" /* ATTACH */](parser, self) {
                        parse_next_punctuator(2, parser, self);
                        self.scopes.cursor = parser.index;
                    }
                }
            },
            "\"": {
                [" ATT" /* ATTACH */](parser, self) {
                    parse_next_punctuator(1, parser, self);
                    collect_rule_text(parser, self, false);
                }
            },
            "'": {
                [" ATT" /* ATTACH */](parser, self) {
                    parse_next_punctuator(1, parser, self);
                    collect_rule_text(parser, self, false);
                }
            },
            ";": {
                [" ATT" /* ATTACH */](parser, self) {
                    //append_css_rule(parser, self); //不支持此规则动态绑定
                    let scopes = self.scopes;
                    if (scopes.ndeep === 0) {
                        scopes.children = [];
                        save_volatility(parser, self);
                    }
                }
            },
            "{": {
                [" ATT" /* ATTACH */](parser, self) {
                    /*let next_char = parser.input[parser.index];
                    if (next_char !== "{") {*/
                    self.scopes.ndeep += 1;
                    //}
                }
            },
            "}": {
                [" ATT" /* ATTACH */](parser, self) {
                    let scopes = self.scopes;
                    if (--scopes.ndeep === 0) {
                        let { children, css_rules } = scopes;
                        self.collect_text_node(parser);
                        let css_rule = {
                            type: "CSSRule",
                            children
                        };
                        css_rules.push(css_rule);
                        scopes.children = [];
                        save_volatility(parser, self);
                    }
                }
            },
            "<": {
                [" NEXT" /* NEXT */](parser, self) {
                    if (self.scopes.ndeep > 0) {
                        return;
                    }
                    let char = parser.input[parser.index];
                    let { context, index, css_rules } = self.scopes;
                    if (char === "/") {
                        parser.index -= 1;
                        //append_css_rule(parser, self);//不支持此规则动态绑定
                        parser.parseCustom(parser.SYNTAX_TREE, context, index, function (node) { return node.type === "ClosingTag"; });
                        return css_rules;
                    }
                }
            },
            ["" /* EOF */]: {
                [" END" /* END */](parser, self) {
                    //append_css_rule(parser, self);//不支持此规则动态绑定
                    return self.scopes.css_rules;
                }
            }
        },
        scanner: head_1._Scanner(true),
        scopes: null,
        parse(parser, context, index) {
            let _scopes = this.scopes;
            this.scopes = {
                parser,
                context,
                index,
                ndeep: 0,
                text: "",
                children: [],
                css_rules: [],
                cursor: parser.index,
                start: parser.index,
                line_number: parser.line_number,
                line_start: parser.line_start
            };
            let res = this.scanner(parser);
            this.scopes = _scopes;
            return res;
        }
    };
    inner_html = {
        collect_text_node(parser) {
            if (this.scopes.start < parser.index) {
                let { start, line_number, line_start, children } = this.scopes;
                let text_node = {
                    type: "Text",
                    value: parser.input.slice(start, parser.index),
                    range: [start, parser.index],
                    loc: {
                        start: {
                            line: line_number, column: start - line_start
                        },
                        end: {
                            line: parser.line_number, column: parser.index - parser.line_start
                        }
                    }
                };
                children.push(text_node);
                save_volatility(parser, this);
                return text_node;
            }
        },
        scan_tree: {
            ["("]: {
                ["("]: {
                    [" NEXT" /* NEXT */]: collect_next_syntax(index_2.EXPRESSION_TREE, index_2.isExpression)
                }
            },
            "@": {
                ":": {
                    [" NEXT" /* NEXT */]: collect_next_syntax(index_2.SYNTAX_TREE)
                },
                "{": {
                    [" NEXT" /* NEXT */]: collect_next_syntax(index_2.SYNTAX_TREE)
                },
                "(": {
                    [" NEXT" /* NEXT */]: collect_next_syntax()
                }
            },
            "<": {
                [" NEXT" /* NEXT */](parser, self) {
                    let char = parser.input[parser.index];
                    let { context, index, children } = self.scopes;
                    if (char === "/") {
                        parser.index -= 1;
                        self.collect_text_node(parser);
                        parser.parseCustom(parser.SYNTAX_TREE, context, index, function (node) { return node.type === "ClosingTag"; });
                        return self.scopes.children;
                    }
                    else if (char !== "!") {
                        parser.index -= 1;
                        self.collect_text_node(parser);
                        let element = parser.parseCustom(parser.SYNTAX_TREE, context, index, parser.isExpression);
                        if (element) {
                            context.tokens.splice(index, 1);
                            children.push(element);
                            save_volatility(parser, self);
                        }
                        else {
                            debugger;
                        }
                    }
                },
                "!": {
                    "-": {
                        "-": {
                            [" ATT" /* ATTACH */](parser, self) {
                                parser.index -= 4;
                                self.collect_text_node(parser);
                                parser.index += 4;
                                skip_html_comment.parse(parser);
                                save_volatility(parser, self);
                                return "";
                            },
                        }
                    }
                }
            }
        },
        scopes: null,
        scanner: head_1._Scanner(true),
        parse(parser, context, index) {
            let _scopes = this.scopes;
            this.scopes = {
                children: [],
                index,
                context,
                parser,
                cursor: parser.index,
                start: parser.index,
                line_number: parser.line_number,
                line_start: parser.line_start
            };
            let res = this.scanner(parser);
            this.scopes = _scopes;
            return res;
        }
    };
});


/***/ }),

/***/ "./js/core/parser/index.ts":
/*!*********************************!*\
  !*** ./js/core/parser/index.ts ***!
  \*********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = exports.EXPRESSION_TREE = exports.SYNTAX_TREE = exports.isModuleItem = exports.isDeclaration = exports.isStatementListItem = exports.isStatement = exports.isExpression = void 0;
console.time("dison");
const head_1 = __webpack_require__(/*! ../../Dison/js/lexical/head */ "./js/Dison/js/lexical/head.ts");
const index_1 = __webpack_require__(/*! ../../Dison/js/lexical/index */ "./js/Dison/js/lexical/index.ts");
const parser_1 = __webpack_require__(/*! ../../Dison/js/parser */ "./js/Dison/js/parser.ts");
const head_2 = __webpack_require__(/*! ../../Dison/js/syntax/head */ "./js/Dison/js/syntax/head.ts");
const expression_1 = __webpack_require__(/*! ../../Dison/js/syntax/expression */ "./js/Dison/js/syntax/expression.ts");
const declaration_1 = __webpack_require__(/*! ../../Dison/js/syntax/declaration */ "./js/Dison/js/syntax/declaration.ts");
const statement_1 = __webpack_require__(/*! ../../Dison/js/syntax/statement */ "./js/Dison/js/syntax/statement.ts");
const module_declaration_1 = __webpack_require__(/*! ../../Dison/js/syntax/module_declaration */ "./js/Dison/js/syntax/module_declaration.ts");
__webpack_require__(/*! ./script-extends */ "./js/core/parser/script-extends.ts");
const html_extends_1 = __webpack_require__(/*! ./html-extends */ "./js/core/parser/html-extends.ts");
head_2.async_getter.open();
let EXPRESSION_TREE = head_2.async_getter.EXPRESSION_TREE;
exports.EXPRESSION_TREE = EXPRESSION_TREE;
const SYNTAX_TREE = head_2.createMatchTree([
    declaration_1.default,
    module_declaration_1.default,
    statement_1.default
], EXPRESSION_TREE);
exports.SYNTAX_TREE = SYNTAX_TREE;
const PUNCTUATORS_TREE = head_1.createSearchTree(html_extends_1.WEBX_PUNCTUATORS);
const PRIMARY_EXPR_START_PUNCTUATORS_TREE = head_1.createSearchTree([index_1.REGEXP_DESCRIPTOR, ...html_extends_1.ELEMENT_DESCRIPTORS], head_1.createSearchTree(html_extends_1.WEBX_PUNCTUATORS, undefined, ["/="]));
let EXPRESSION_ITEM_PATTERN = {};
let DECLARATION_ITEM_PATTERN = {};
let STATEMENT_ITEM_PATTERN = {};
let STATEMENT_LIST_ITEM_PATTERN = {};
let MODULE_ITEM_PATTERN = {};
for (const [descriptor, patterns] of [
    [
        expression_1.default,
        [EXPRESSION_ITEM_PATTERN]
    ],
    [
        declaration_1.default,
        [DECLARATION_ITEM_PATTERN, STATEMENT_LIST_ITEM_PATTERN]
    ],
    [
        statement_1.default,
        [STATEMENT_ITEM_PATTERN, STATEMENT_LIST_ITEM_PATTERN]
    ],
    [
        module_declaration_1.default,
        [MODULE_ITEM_PATTERN, STATEMENT_LIST_ITEM_PATTERN]
    ],
]) {
    for (const key in descriptor) {
        if (key) {
            for (const pattern of patterns) {
                pattern[key] = true;
            }
        }
    }
}
function isExpression(node) {
    return EXPRESSION_ITEM_PATTERN[node.type];
}
exports.isExpression = isExpression;
function isDeclaration(node) {
    return DECLARATION_ITEM_PATTERN[node.type];
}
exports.isDeclaration = isDeclaration;
function isStatement(node) {
    return STATEMENT_ITEM_PATTERN[node.type];
}
exports.isStatement = isStatement;
function isStatementListItem(node) {
    return STATEMENT_LIST_ITEM_PATTERN[node.type];
}
exports.isStatementListItem = isStatementListItem;
function isModuleItem(node) {
    return MODULE_ITEM_PATTERN[node.type];
}
exports.isModuleItem = isModuleItem;
const TOKEN_TYPE_MAPPERS = index_1.TOKEN_TYPE_SET.reduce((map, [type, id_set]) => {
    for (let id of id_set) {
        map[" " + id] = type;
    }
    return map;
}, {});
head_2.async_getter.webx_inited = true;
console.timeEnd("dison");
class WEBXParser extends parser_1.default {
    constructor() {
        super(...arguments);
        this.token_hooks = head_2.token_hooks;
        this.TYPE_ENUMS = index_1.TYPE_ENUMS;
        this.PRIMARY_EXPR_START_PUNCTUATORS_TREE = PRIMARY_EXPR_START_PUNCTUATORS_TREE;
        this.PUNCTUATORS_TREE = PUNCTUATORS_TREE;
        this.TOKEN_TYPE_MAPPERS = TOKEN_TYPE_MAPPERS;
        this.SYNTAX_TREE = SYNTAX_TREE;
        this.EXPRESSION_TREE = EXPRESSION_TREE;
        this.isExpression = isExpression;
        this.isStatement = isStatement;
        this.isStatementListItem = isStatementListItem;
        this.isDeclaration = isDeclaration;
        this.isModuleItem = isModuleItem;
    }
    isPrimaryExprStart() {
        if (this.tokens.length) {
            let last_token = this.tokens[this.tokens.length - 1];
            return last_token.type === "OpeningTag"
                || last_token.type === "ClosingTag"
                || last_token.type === "Element"
                || last_token.type === "Params"
                //|| last_token.value === "\\" && last_token.type === "Punctuator"
                || super.isPrimaryExprStart();
        }
        else {
            return true;
        }
    }
    inIdentifierStart() {
        return this.match_tree_stack[0] === html_extends_1.ATTRIBUTES_TREE && this.input[this.index] === "-"
            ? 1 : super.inIdentifierStart();
    }
    inIdentifierPart() {
        return this.match_tree_stack[0] === html_extends_1.ATTRIBUTES_TREE && this.input[this.index] === "-"
            ? 1 : super.inIdentifierPart();
    }
}
let parser = new WEBXParser();
function parse(input) {
    return parser.parse(input);
}
exports.parse = parse;
;
exports.default = WEBXParser;


/***/ }),

/***/ "./js/core/parser/script-extends.ts":
/*!******************************************!*\
  !*** ./js/core/parser/script-extends.ts ***!
  \******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const head_1 = __webpack_require__(/*! ../../Dison/js/syntax/head */ "./js/Dison/js/syntax/head.ts");
const head_2 = __webpack_require__(/*! ../../Dison/js/syntax/head */ "./js/Dison/js/syntax/head.ts");
const expression_1 = __webpack_require__(/*! ../../Dison/js/syntax/expression */ "./js/Dison/js/syntax/expression.ts");
const declaration_1 = __webpack_require__(/*! ../../Dison/js/syntax/declaration */ "./js/Dison/js/syntax/declaration.ts");
const statement_1 = __webpack_require__(/*! ../../Dison/js/syntax/statement */ "./js/Dison/js/syntax/statement.ts");
const _Declarations = {
    BindingDeclaration: {
        collector: {
            value: head_2._Mark("@:"),
            declaration: head_2._Series(head_2._NonCollecting("Punctuator @:"), "VariableDeclaration")
        }
    },
    ActionDeclaration: {
        validator: [
            function () {
                return false;
            },
            null
        ],
        collector: [
            {
                _prev: head_2._NonCapturing(head_1.TOPLEVEL_ITEM_PATTERN),
                __: head_2._NonCollecting(head_2._Series(head_2._Punctuator("@"), head_2._Identifier("action")))
            },
            [
                "action",
                head_2._Pattern("FunctionExpression").pipe(function (context, token, left) {
                    if (!token.id) {
                        context[1 /* parser */].err(token);
                    }
                })
            ]
        ]
    }
};
const _Statements = {
    EntryStatement: {
        validator: [
            head_1.parse_next_statement,
            null
        ],
        collector: [
            {
                object: head_1.EXPRESSION_OR_THROW_STRICT_RESERVED_WORDS_PATTERN,
                _: head_2._NonCollecting("Punctuator ->"),
                params: expression_1.PARAMS_PATTERN
            },
            ["body", head_2._Or(expression_1.FUNCTION_BODY_PATTERN, "[Statement]")]
        ]
    },
    RunInActionStatement: {
        collector: {
            value: head_2._Mark("@action{}"),
            _prev: head_2._NonCapturing(head_1.TOPLEVEL_ITEM_PATTERN),
            action: head_2._Series(head_2._NonCollecting(head_2._Series(head_2._Punctuator("@"), head_2._Identifier("action"))), head_2._Punctuator("{").pipe(function (context, token, left) {
                return rangeBlockToStatement(context[1 /* parser */].parseRangeAsBlock(context, left));
            }))
        }
    },
    PreventStatement: {
        collector: {
            _prev: head_2._NonCapturing(head_1.TOPLEVEL_ITEM_PATTERN),
            value: head_2._Mark("@prevent"),
            statement: head_2._Series(head_2._NonCollecting("Punctuator @"), head_2._NonCollecting("Identifier prevent"), head_2._Punctuator("{").pipe(function (context, token, left) {
                return rangeBlockToStatement(context[1 /* parser */].parseRangeAsBlock(context, left), 1);
            }))
        }
    },
    BindingStatement: [
        {
            collector: {
                _prev: head_2._NonCapturing(head_1.TOPLEVEL_ITEM_PATTERN),
                value: head_2._Mark("@{}"),
                statement: head_2._Punctuator("@{").pipe(function (context, token, left) {
                    return rangeBlockToStatement(context[1 /* parser */].parseRangeAsBlock(context, left), 1);
                })
            }
        },
        {
            collector: {
                value: head_2._Mark("@:"),
                statement: head_2._Series(head_2._NonCollecting("Punctuator @:"), "[Statement]")
            }
        },
        {
            collector: {
                value: head_2._Mark("@autorun"),
                statement: head_2._Series(head_2._NonCollecting("Punctuator @"), head_2._NonCollecting("Identifier autorun"), head_2._Punctuator("{").pipe(function (context, token, left) {
                    return rangeBlockToStatement(context[1 /* parser */].parseRangeAsBlock(context, left), 1);
                }))
            }
        }
    ]
};
const _Expressions = {
    BindingExpression: {
        collector: [
            {
                value: head_2._Mark("@{}"),
                expression: head_2._Punctuator("@{").pipe(function (context, token, left) {
                    return context[1 /* parser */].parseRangeAsExpression(context, left, head_2.is_right_braces);
                })
            },
            {
                value: head_2._Mark("@()"),
                expression: head_2._Punctuator("@(").pipe(function (context, token, left) {
                    return context[1 /* parser */].parseRangeAsExpression(context, left, head_2.is_right_parentheses);
                })
            }
        ]
    },
    ActionExpression: {
        validator: [
            function () {
                /**
                 * 占位作用，让 action 不会被用作其他用途收集
                 *  (在 html attribute 中的 action 可能会被当做单独的 attribute 收集)
                 */
                return false;
            },
            null
        ],
        collector: [
            {
                _prev: head_2._NonCollecting(head_2._Series(head_2._Punctuator("@"), head_2._Identifier("action"))),
            },
            ["action", "FunctionExpression"]
        ]
    },
    PreventExpression: {
        collector: {
            value: head_2._Mark("@prevent"),
            expression: head_2._Series(head_2._NonCollecting("Punctuator @"), head_2._NonCollecting("Identifier prevent"), head_2._Or(head_2._Punctuator("{").pipe(function (context, token, left) {
                return context[1 /* parser */].parseRangeAsExpression(context, left, head_2.is_right_braces);
            }), head_2._Punctuator("(").pipe(function (context, token, left) {
                return context[1 /* parser */].parseRangeAsExpression(context, left, head_2.is_right_parentheses);
            })))
        }
    }
};
Object.assign(declaration_1.default, _Declarations);
Object.assign(statement_1.default, _Statements);
Object.assign(expression_1.PrimaryExpressions, _Expressions);
Object.assign(expression_1.default, _Expressions);
expression_1.default["BinaryExpression"].filter = function (context, left) {
    /**
     * 防止 Element 表达式发生二元结合，而且 Element 的二元运算没有意义
     * 例如 : @:if(show)<div></div><!-- ... -->
     *      "@:"为从html语境插入一条js语句的声明， 该语句在 "</div>" 这个位置已结束
     *      Element 的逻辑运算是被允许的 例如 : @:show&&<div></div>
     *      当然 "@:<div></div>&&333" 这样的逻辑运算也是被允许的，不过这样没有意义，只是不以太多直观的感觉冲突
     */
    let node = context.tokens[left];
    return node.type !== "Element";
};
/**
 * 使 ArrayExpression 的 Element 间支持不用逗号连接
 */
expression_1.ArrayElements.Success.collector.push([
    ["content", "Element"],
    ["_", head_2._Mark()]
]);
function rangeBlockToStatement(block, offset = 0) {
    let node = new head_1.NODES.BlockStatement();
    let { range, loc } = block;
    range[0] += offset;
    loc.start.column += offset;
    node.body = block.content;
    node.range = range;
    node.loc = loc;
    return node;
}


/***/ }),

/***/ "./js/webx.js":
/*!********************!*\
  !*** ./js/webx.js ***!
  \********************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Module is an entry point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_converter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/converter */ "./js/core/converter/index.ts");
/* harmony import */ var _core_converter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_converter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/parser */ "./js/core/parser/index.ts");
/* harmony import */ var _core_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_parser__WEBPACK_IMPORTED_MODULE_1__);


let parser = new _core_parser__WEBPACK_IMPORTED_MODULE_1___default.a();

function webx(source, external_declarations) {
  return Object(_core_converter__WEBPACK_IMPORTED_MODULE_0__["convert"])(parser.parseModule(source), external_declarations);
}

/* harmony default export */ __webpack_exports__["default"] = (webx);

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ })));
//# sourceMappingURL=webx.js.map