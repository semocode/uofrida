(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = require("core-js/library/fn/object/define-property");
},{"core-js/library/fn/object/define-property":4}],2:[function(require,module,exports){
module.exports = require("core-js/library/fn/parse-int");
},{"core-js/library/fn/parse-int":5}],3:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
},{}],4:[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

},{"../../modules/_core":8,"../../modules/es6.object.define-property":26}],5:[function(require,module,exports){
require('../modules/es6.parse-int');
module.exports = require('../modules/_core').parseInt;

},{"../modules/_core":8,"../modules/es6.parse-int":27}],6:[function(require,module,exports){
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],7:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":19}],8:[function(require,module,exports){
var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],9:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"./_a-function":6}],10:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],11:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":14}],12:[function(require,module,exports){
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_global":15,"./_is-object":19}],13:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var ctx = require('./_ctx');
var hide = require('./_hide');
var has = require('./_has');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"./_core":8,"./_ctx":9,"./_global":15,"./_has":16,"./_hide":17}],14:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],15:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],16:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],17:[function(require,module,exports){
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_descriptors":11,"./_object-dp":20,"./_property-desc":22}],18:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":11,"./_dom-create":12,"./_fails":14}],19:[function(require,module,exports){
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],20:[function(require,module,exports){
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":7,"./_descriptors":11,"./_ie8-dom-define":18,"./_to-primitive":25}],21:[function(require,module,exports){
var $parseInt = require('./_global').parseInt;
var $trim = require('./_string-trim').trim;
var ws = require('./_string-ws');
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;

},{"./_global":15,"./_string-trim":23,"./_string-ws":24}],22:[function(require,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],23:[function(require,module,exports){
var $export = require('./_export');
var defined = require('./_defined');
var fails = require('./_fails');
var spaces = require('./_string-ws');
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;

},{"./_defined":10,"./_export":13,"./_fails":14,"./_string-ws":24}],24:[function(require,module,exports){
module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

},{}],25:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":19}],26:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperty: require('./_object-dp').f });

},{"./_descriptors":11,"./_export":13,"./_object-dp":20}],27:[function(require,module,exports){
var $export = require('./_export');
var $parseInt = require('./_parse-int');
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });

},{"./_export":13,"./_parse-int":21}],28:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _defineProperty = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var print_libraries_1 = __importDefault(require("./feature/uo/lua/print-libraries"));

var debug_log_1 = __importDefault(require("./feature/uo/debug-log"));

debug_log_1["default"].onExecute();
print_libraries_1["default"].onExecute(); //PrintFunctions.onExecute()

},{"./feature/uo/debug-log":29,"./feature/uo/lua/print-libraries":30,"@babel/runtime-corejs2/core-js/object/define-property":1,"@babel/runtime-corejs2/helpers/interopRequireDefault":3}],29:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _defineProperty = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var exe_1 = require("../../../service/exe");

var EnableDebugLog = {
  onExecute: function onExecute() {
    // Find UODebugLog function in .text
    var debug_log = Memory.scanSync(exe_1.text.base, exe_1.text.size, "e8 ?? ?? ?? ?? 81 c4 00 04 00 00 c3");
    var logAddr = debug_log[0]; // Hook UODebugLog function from UOSA.exe and print the message

    Interceptor.attach(logAddr.address, {
      onEnter: function onEnter(args) {
        // @ts-ignore
        var eax = this.context.eax;
        var msg = eax.readCString();
        console.log("[*] UODebugLog: " + msg.trim());
      }
    });
  }
};
exports["default"] = EnableDebugLog;

},{"../../../service/exe":31,"@babel/runtime-corejs2/core-js/object/define-property":1,"@babel/runtime-corejs2/helpers/interopRequireDefault":3}],30:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _defineProperty = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var exe_1 = require("../../../../service/exe");

var util_1 = require("../../../../util");

var PrintLibraries = {
  onExecute: function onExecute() {
    var s1 = Memory.scanSync(exe_1.rdata.base, exe_1.rdata.size, '00 ' + util_1.buildScanPattern("_LOADED") + ' 00');
    var sa = s1[0].address.add(1); //console.log("[  ]  Found string \"_LOADED\" @ " + sa.toString(16))
    // Search xref to string in .text

    var s2 = Memory.scanSync(exe_1.text.base, exe_1.text.size, util_1.buildPatternPushAbs(sa));
    var sa2 = s2[0].address.sub(0x2e); //console.log("[  ]  Found luaL_register @ " + sa2.toString(16))

    Interceptor.attach(sa2, {
      onEnter: function onEnter(args) {
        var esp = this.context.sp;
        var off = esp.add(4);
        var addr = ptr(off.readU32());

        if (!addr.isNull()) {
          var msg = addr.readCString(); // @ts-ignore

          var eax = this.context.eax;
          console.log("[UO] Loading lua library '" + msg + "' on lua state @ ", eax);
        }
      }
    });
  }
};
exports["default"] = PrintLibraries;

},{"../../../../service/exe":31,"../../../../util":32,"@babel/runtime-corejs2/core-js/object/define-property":1,"@babel/runtime-corejs2/helpers/interopRequireDefault":3}],31:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _defineProperty = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.data = exports.debug = exports.rdata = exports.text = exports.getUOSAModule = void 0;

function getUOSAModule() {
  var modules = Process.enumerateModules();

  for (var i = 0; i < modules.length; i++) {
    var module = modules[i];

    if (module.name == "UOSA.exe") {
      return module;
    }
  }

  return null;
}

exports.getUOSAModule = getUOSAModule;
var uosa = getUOSAModule();

if (!uosa) {
  throw new Error('Could not find UOSA module');
}

var ranges = uosa.enumerateRanges('---');
exports.text = ranges[1];
exports.rdata = ranges[2];
exports.debug = ranges[ranges.length - 1];
exports.data = ranges[3];

},{"@babel/runtime-corejs2/core-js/object/define-property":1,"@babel/runtime-corejs2/helpers/interopRequireDefault":3}],32:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _parseInt2 = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/parse-int"));

var _defineProperty = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.equalsInt32 = exports.byteFromInt = exports.buildScanPattern = exports.buildPatternAddr = exports.buildPatternMovEaxAbs = exports.buildPatternPushAbs = exports.padLeft = exports.hexShift = void 0;

function hexShift(addr, shift) {
  var r = addr.shr(shift).and(0xff).toString(16);

  if (r.length < 2) {
    r = "0" + r;
  }

  return r;
}

exports.hexShift = hexShift;

function padLeft(str, pad, length) {
  if (str.length >= length) {
    return str;
  }

  var r = str;

  for (var i = str.length; i < length; i++) {
    r = pad + r;
    ;
  }

  return r;
}

exports.padLeft = padLeft;

function buildPatternPushAbs(address) {
  var p = "68 "; // push

  p += hexShift(address, 0) + " ";
  p += hexShift(address, 8) + " ";
  p += hexShift(address, 16) + " ";
  p += hexShift(address, 24); //console.log(p);

  return p;
}

exports.buildPatternPushAbs = buildPatternPushAbs;

function buildPatternMovEaxAbs(address) {
  var p = "b8 "; // push

  p += hexShift(address, 0) + " ";
  p += hexShift(address, 8) + " ";
  p += hexShift(address, 16) + " ";
  p += hexShift(address, 24); //console.log(p);

  return p;
}

exports.buildPatternMovEaxAbs = buildPatternMovEaxAbs;

function buildPatternAddr(address) {
  var p = "";
  p += hexShift(address, 0) + " ";
  p += hexShift(address, 8) + " ";
  p += hexShift(address, 16) + " ";
  p += hexShift(address, 24); //console.log(p);

  return p;
}

exports.buildPatternAddr = buildPatternAddr;

function buildScanPattern(str) {
  var p = "";

  for (var i = 0; i < str.length; i++) {
    p += str.charCodeAt(i).toString(16) + " ";
  } //console.log(str + " -> " + p);


  return p;
}

exports.buildScanPattern = buildScanPattern;

function byteFromInt(i, idx) {
  // doesnt give expected results on 64 bit???? so use parseInt foo below
  //return (i >> (idx * 8)) & 0xff;
  return (0, _parseInt2["default"])("0x" + padLeft(i.toString(16), '0', 8).substr(-2 * (idx + 1), 2));
}

exports.byteFromInt = byteFromInt;

function equalsInt32(a, b) {
  return byteFromInt(a, 0) == byteFromInt(b, 0) && byteFromInt(a, 1) == byteFromInt(b, 1) && byteFromInt(a, 2) == byteFromInt(b, 2) && byteFromInt(a, 3) == byteFromInt(b, 3);
}

exports.equalsInt32 = equalsInt32;

},{"@babel/runtime-corejs2/core-js/object/define-property":1,"@babel/runtime-corejs2/core-js/parse-int":2,"@babel/runtime-corejs2/helpers/interopRequireDefault":3}]},{},[28])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9jb3JlLWpzL3BhcnNlLWludC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMyL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9wYXJzZS1pbnQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcGFyc2UtaW50LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctdHJpbS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLXdzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnBhcnNlLWludC5qcyIsInNyYy9ibGFja21hZ2UudHMiLCJzcmMvZmVhdHVyZS91by9kZWJ1Zy1sb2cvaW5kZXgudHMiLCJzcmMvZmVhdHVyZS91by9sdWEvcHJpbnQtbGlicmFyaWVzL2luZGV4LnRzIiwic3JjL3NlcnZpY2UvZXhlL2luZGV4LnRzIiwic3JjL3V0aWwvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBLElBQUEsaUJBQUEsR0FBQSxlQUFBLENBQUEsT0FBQSxDQUFBLGtDQUFBLENBQUEsQ0FBQTs7QUFDQSxJQUFBLFdBQUEsR0FBQSxlQUFBLENBQUEsT0FBQSxDQUFBLHdCQUFBLENBQUEsQ0FBQTs7QUFFQSxXQUFBLFdBQUEsQ0FBZSxTQUFmO0FBQ0EsaUJBQUEsV0FBQSxDQUFlLFNBQWYsRyxDQUNBOzs7Ozs7Ozs7Ozs7O0FDTkEsSUFBQSxLQUFBLEdBQUEsT0FBQSxDQUFBLHNCQUFBLENBQUE7O0FBRUEsSUFBTSxjQUFjLEdBQUc7QUFDbkIsRUFBQSxTQURtQix1QkFDVjtBQUNMO0FBQ0EsUUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVAsQ0FBZ0IsS0FBQSxDQUFBLElBQUEsQ0FBSyxJQUFyQixFQUEyQixLQUFBLENBQUEsSUFBQSxDQUFLLElBQWhDLEVBQXNDLHFDQUF0QyxDQUFoQjtBQUNBLFFBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxDQUFELENBQXpCLENBSEssQ0FLTDs7QUFDQSxJQUFBLFdBQVcsQ0FBQyxNQUFaLENBQW1CLE9BQU8sQ0FBQyxPQUEzQixFQUFvQztBQUNoQyxNQUFBLE9BQU8sRUFBRSxpQkFBVSxJQUFWLEVBQWM7QUFDbkI7QUFDQSxZQUFNLEdBQUcsR0FBRyxLQUFLLE9BQUwsQ0FBYSxHQUF6QjtBQUNBLFlBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxXQUFKLEVBQVY7QUFDQSxRQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVkscUJBQXFCLEdBQUcsQ0FBQyxJQUFKLEVBQWpDO0FBQ0g7QUFOK0IsS0FBcEM7QUFRSDtBQWZrQixDQUF2QjtBQWtCQSxPQUFBLFdBQUEsR0FBZSxjQUFmOzs7Ozs7Ozs7Ozs7O0FDcEJBLElBQUEsS0FBQSxHQUFBLE9BQUEsQ0FBQSx5QkFBQSxDQUFBOztBQUNBLElBQUEsTUFBQSxHQUFBLE9BQUEsQ0FBQSxrQkFBQSxDQUFBOztBQUVBLElBQU0sY0FBYyxHQUFHO0FBQ25CLEVBQUEsU0FEbUIsdUJBQ1Y7QUFDTCxRQUFJLEVBQUUsR0FBRyxNQUFNLENBQUMsUUFBUCxDQUFnQixLQUFBLENBQUEsS0FBQSxDQUFNLElBQXRCLEVBQTRCLEtBQUEsQ0FBQSxLQUFBLENBQU0sSUFBbEMsRUFBd0MsUUFBUSxNQUFBLENBQUEsZ0JBQUEsQ0FBaUIsU0FBakIsQ0FBUixHQUFzQyxLQUE5RSxDQUFUO0FBQ0EsUUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUQsQ0FBRixDQUFNLE9BQU4sQ0FBYyxHQUFkLENBQWtCLENBQWxCLENBQVQsQ0FGSyxDQUdMO0FBRUE7O0FBQ0EsUUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLFFBQVAsQ0FBZ0IsS0FBQSxDQUFBLElBQUEsQ0FBSyxJQUFyQixFQUEyQixLQUFBLENBQUEsSUFBQSxDQUFLLElBQWhDLEVBQXNDLE1BQUEsQ0FBQSxtQkFBQSxDQUFvQixFQUFwQixDQUF0QyxDQUFUO0FBQ0EsUUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUQsQ0FBRixDQUFNLE9BQU4sQ0FBYyxHQUFkLENBQWtCLElBQWxCLENBQVYsQ0FQSyxDQVFMOztBQUVBLElBQUEsV0FBVyxDQUFDLE1BQVosQ0FBbUIsR0FBbkIsRUFBd0I7QUFDcEIsTUFBQSxPQUFPLEVBQUUsaUJBQVUsSUFBVixFQUFjO0FBQ25CLFlBQUksR0FBRyxHQUFHLEtBQUssT0FBTCxDQUFhLEVBQXZCO0FBQ0EsWUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUosQ0FBUSxDQUFSLENBQVY7QUFDQSxZQUFJLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQUosRUFBRCxDQUFkOztBQUNBLFlBQUksQ0FBQyxJQUFJLENBQUMsTUFBTCxFQUFMLEVBQW9CO0FBQ2hCLGNBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFMLEVBQVosQ0FEZ0IsQ0FFaEI7O0FBQ0EsY0FBTSxHQUFHLEdBQUcsS0FBSyxPQUFMLENBQWEsR0FBekI7QUFDQSxVQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksK0JBQStCLEdBQS9CLEdBQXFDLG1CQUFqRCxFQUFzRSxHQUF0RTtBQUNIO0FBQ0o7QUFYbUIsS0FBeEI7QUFhSDtBQXhCa0IsQ0FBdkI7QUEyQkEsT0FBQSxXQUFBLEdBQWUsY0FBZjs7Ozs7Ozs7Ozs7Ozs7QUM5QkEsU0FBZ0IsYUFBaEIsR0FBNkI7QUFDekIsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLGdCQUFSLEVBQWhCOztBQUNBLE9BQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQTVCLEVBQW9DLENBQUMsRUFBckMsRUFBeUM7QUFDckMsUUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLENBQUQsQ0FBcEI7O0FBQ0EsUUFBSSxNQUFNLENBQUMsSUFBUCxJQUFlLFVBQW5CLEVBQStCO0FBQzNCLGFBQU8sTUFBUDtBQUNIO0FBQ0o7O0FBQ0QsU0FBTyxJQUFQO0FBQ0g7O0FBVEQsT0FBQSxDQUFBLGFBQUEsR0FBQSxhQUFBO0FBV0EsSUFBTSxJQUFJLEdBQUcsYUFBYSxFQUExQjs7QUFDQSxJQUFJLENBQUMsSUFBTCxFQUFXO0FBQ1AsUUFBTSxJQUFJLEtBQUosQ0FBVSw0QkFBVixDQUFOO0FBQ0g7O0FBQ0QsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQUwsQ0FBcUIsS0FBckIsQ0FBYjtBQUNhLE9BQUEsQ0FBQSxJQUFBLEdBQU8sTUFBTSxDQUFDLENBQUQsQ0FBYjtBQUNBLE9BQUEsQ0FBQSxLQUFBLEdBQVEsTUFBTSxDQUFDLENBQUQsQ0FBZDtBQUNBLE9BQUEsQ0FBQSxLQUFBLEdBQVEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFQLEdBQWdCLENBQWpCLENBQWQ7QUFDQSxPQUFBLENBQUEsSUFBQSxHQUFPLE1BQU0sQ0FBQyxDQUFELENBQWI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQmIsU0FBZ0IsUUFBaEIsQ0FBeUIsSUFBekIsRUFBOEMsS0FBOUMsRUFBMkQ7QUFDdkQsTUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUwsQ0FBUyxLQUFULEVBQWdCLEdBQWhCLENBQW9CLElBQXBCLEVBQTBCLFFBQTFCLENBQW1DLEVBQW5DLENBQVI7O0FBQ0EsTUFBSSxDQUFDLENBQUMsTUFBRixHQUFXLENBQWYsRUFBa0I7QUFDZCxJQUFBLENBQUMsR0FBRyxNQUFNLENBQVY7QUFDSDs7QUFDRCxTQUFPLENBQVA7QUFDSDs7QUFORCxPQUFBLENBQUEsUUFBQSxHQUFBLFFBQUE7O0FBUUEsU0FBZ0IsT0FBaEIsQ0FBeUIsR0FBekIsRUFBc0MsR0FBdEMsRUFBbUQsTUFBbkQsRUFBaUU7QUFDaEUsTUFBSSxHQUFHLENBQUMsTUFBSixJQUFjLE1BQWxCLEVBQTBCO0FBQ3pCLFdBQU8sR0FBUDtBQUNBOztBQUNELE1BQUksQ0FBQyxHQUFHLEdBQVI7O0FBQ0EsT0FBSyxJQUFJLENBQUMsR0FBQyxHQUFHLENBQUMsTUFBZixFQUF1QixDQUFDLEdBQUcsTUFBM0IsRUFBbUMsQ0FBQyxFQUFwQyxFQUF3QztBQUN2QyxJQUFBLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBVjtBQUFZO0FBQ1o7O0FBQ0QsU0FBTyxDQUFQO0FBQ0E7O0FBVEQsT0FBQSxDQUFBLE9BQUEsR0FBQSxPQUFBOztBQVdBLFNBQWdCLG1CQUFoQixDQUFvQyxPQUFwQyxFQUEwRDtBQUN0RCxNQUFJLENBQUMsR0FBRyxLQUFSLENBRHNELENBQ3ZDOztBQUNmLEVBQUEsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxPQUFELEVBQVUsQ0FBVixDQUFSLEdBQXVCLEdBQTVCO0FBQ0EsRUFBQSxDQUFDLElBQUksUUFBUSxDQUFDLE9BQUQsRUFBVSxDQUFWLENBQVIsR0FBdUIsR0FBNUI7QUFDQSxFQUFBLENBQUMsSUFBSSxRQUFRLENBQUMsT0FBRCxFQUFVLEVBQVYsQ0FBUixHQUF3QixHQUE3QjtBQUNBLEVBQUEsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxPQUFELEVBQVUsRUFBVixDQUFiLENBTHNELENBTXREOztBQUNBLFNBQU8sQ0FBUDtBQUNIOztBQVJELE9BQUEsQ0FBQSxtQkFBQSxHQUFBLG1CQUFBOztBQVVBLFNBQWdCLHFCQUFoQixDQUFzQyxPQUF0QyxFQUE0RDtBQUN4RCxNQUFJLENBQUMsR0FBRyxLQUFSLENBRHdELENBQ3pDOztBQUNmLEVBQUEsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxPQUFELEVBQVUsQ0FBVixDQUFSLEdBQXVCLEdBQTVCO0FBQ0EsRUFBQSxDQUFDLElBQUksUUFBUSxDQUFDLE9BQUQsRUFBVSxDQUFWLENBQVIsR0FBdUIsR0FBNUI7QUFDQSxFQUFBLENBQUMsSUFBSSxRQUFRLENBQUMsT0FBRCxFQUFVLEVBQVYsQ0FBUixHQUF3QixHQUE3QjtBQUNBLEVBQUEsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxPQUFELEVBQVUsRUFBVixDQUFiLENBTHdELENBTXhEOztBQUNBLFNBQU8sQ0FBUDtBQUNIOztBQVJELE9BQUEsQ0FBQSxxQkFBQSxHQUFBLHFCQUFBOztBQVVBLFNBQWdCLGdCQUFoQixDQUFpQyxPQUFqQyxFQUF1RDtBQUNuRCxNQUFJLENBQUMsR0FBRyxFQUFSO0FBQ0EsRUFBQSxDQUFDLElBQUksUUFBUSxDQUFDLE9BQUQsRUFBVSxDQUFWLENBQVIsR0FBdUIsR0FBNUI7QUFDQSxFQUFBLENBQUMsSUFBSSxRQUFRLENBQUMsT0FBRCxFQUFVLENBQVYsQ0FBUixHQUF1QixHQUE1QjtBQUNBLEVBQUEsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxPQUFELEVBQVUsRUFBVixDQUFSLEdBQXdCLEdBQTdCO0FBQ0EsRUFBQSxDQUFDLElBQUksUUFBUSxDQUFDLE9BQUQsRUFBVSxFQUFWLENBQWIsQ0FMbUQsQ0FNbkQ7O0FBQ0EsU0FBTyxDQUFQO0FBQ0g7O0FBUkQsT0FBQSxDQUFBLGdCQUFBLEdBQUEsZ0JBQUE7O0FBVUEsU0FBZ0IsZ0JBQWhCLENBQWlDLEdBQWpDLEVBQTRDO0FBQ3hDLE1BQUksQ0FBQyxHQUFHLEVBQVI7O0FBQ0EsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFiLEVBQWdCLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBeEIsRUFBZ0MsQ0FBQyxFQUFqQyxFQUFxQztBQUNqQyxJQUFBLENBQUMsSUFBSSxHQUFHLENBQUMsVUFBSixDQUFlLENBQWYsRUFBa0IsUUFBbEIsQ0FBMkIsRUFBM0IsSUFBaUMsR0FBdEM7QUFDSCxHQUp1QyxDQUt4Qzs7O0FBQ0EsU0FBTyxDQUFQO0FBQ0g7O0FBUEQsT0FBQSxDQUFBLGdCQUFBLEdBQUEsZ0JBQUE7O0FBU0EsU0FBZ0IsV0FBaEIsQ0FBNEIsQ0FBNUIsRUFBb0MsR0FBcEMsRUFBNEM7QUFDeEM7QUFDQTtBQUNBLFNBQU8sMkJBQVMsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQUYsQ0FBVyxFQUFYLENBQUQsRUFBaUIsR0FBakIsRUFBc0IsQ0FBdEIsQ0FBUCxDQUFnQyxNQUFoQyxDQUF1QyxDQUFDLENBQUQsSUFBSSxHQUFHLEdBQUMsQ0FBUixDQUF2QyxFQUFtRCxDQUFuRCxDQUFoQixDQUFQO0FBQ0g7O0FBSkQsT0FBQSxDQUFBLFdBQUEsR0FBQSxXQUFBOztBQU1BLFNBQWdCLFdBQWhCLENBQTRCLENBQTVCLEVBQW9DLENBQXBDLEVBQTBDO0FBQ3RDLFNBQVEsV0FBVyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVgsSUFBcUIsV0FBVyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQWpDLElBQ0gsV0FBVyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVgsSUFBcUIsV0FBVyxDQUFDLENBQUQsRUFBSSxDQUFKLENBRDdCLElBRUgsV0FBVyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVgsSUFBcUIsV0FBVyxDQUFDLENBQUQsRUFBSSxDQUFKLENBRjdCLElBR0gsV0FBVyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVgsSUFBcUIsV0FBVyxDQUFDLENBQUQsRUFBSSxDQUFKLENBSHBDO0FBSUg7O0FBTEQsT0FBQSxDQUFBLFdBQUEsR0FBQSxXQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIifQ==
